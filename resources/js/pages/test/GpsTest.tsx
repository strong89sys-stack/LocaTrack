import { useEffect, useRef, useState } from 'react';

export default function GpsTest() {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [vitesse, setVitesse] = useState<number>(0);
    const [status, setStatus] = useState('Initialisation du GPS...');
    const [lastSent, setLastSent] = useState<string | null>(null);

    const lastSendRef = useRef<number>(0);

    useEffect(() => {
        if (!navigator.geolocation) {

            setStatus('La géolocalisation n’est pas supportée.');

            return;
        }

        const watchId = navigator.geolocation.watchPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                const speed = position.coords.speed
                    ? position.coords.speed * 3.6
                    : 0;

                setLatitude(lat);
                setLongitude(lon);
                setVitesse(speed);

                setStatus('Position GPS reçue');

                /*
                 * On évite d'envoyer une position à chaque
                 * changement GPS.
                 *
                 * Ici : maximum 1 envoi toutes les 10 secondes.
                 */
                const now = Date.now();

                const battery = await navigator.getBattery();

                const niveauBatterie = Math.round(battery.level * 100);

                console.log(niveauBatterie);

                if (now - lastSendRef.current < 10000) {
                    return;
                }

                lastSendRef.current = now;

                try {
                    const response = await fetch('/gps/positions', {
                        method: 'POST',

                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json',
                        },

                        body: JSON.stringify({
                            imei: 'iPhone 11 Pro',
                            latitude: lat,
                            longitude: lon,
                            vitesse: speed,
                            niveau_batterie: niveauBatterie,
                        }),
                    });

                    const data = await response.json();

                    if (!response.ok) {
                        console.error(data);

                        setStatus(
                            `Erreur serveur : ${response.status}`
                        );

                        return;
                    }

                    console.log('Position envoyée :', data);

                    setLastSent(
                        new Date().toLocaleTimeString()
                    );

                    setStatus('Position envoyée à Laravel ✅');

                } catch (error) {
                    console.error(error);

                    setStatus(
                        'Impossible de contacter le serveur.'
                    );
                }
            },

            (error) => {
                console.error(error);

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        setStatus(
                            'Permission GPS refusée.'
                        );
                        break;

                    case error.POSITION_UNAVAILABLE:
                        setStatus(
                            'Position GPS indisponible.'
                        );
                        break;

                    case error.TIMEOUT:
                        setStatus(
                            'Délai GPS dépassé.'
                        );
                        break;

                    default:
                        setStatus(
                            'Erreur GPS inconnue.'
                        );
                }
            },

            {
                enableHighAccuracy: true,
                maximumAge: 5000,
                timeout: 10000,
            }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    return (
        <div
            style={{
                minHeight: '100vh',
                padding: '30px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h1>📍 Test GPS LocaTrack</h1>

            <p>
                <strong>Statut :</strong> {status}
            </p>

            <hr />

            <p>
                <strong>Latitude :</strong>{' '}
                {latitude ?? '---'}
            </p>

            <p>
                <strong>Longitude :</strong>{' '}
                {longitude ?? '---'}
            </p>

            <p>
                <strong>Vitesse :</strong>{' '}
                {vitesse.toFixed(2)} km/h
            </p>

            <p>
                <strong>Dernier envoi :</strong>{' '}
                {lastSent ?? 'Aucun'}
            </p>
        </div>
    );
}
