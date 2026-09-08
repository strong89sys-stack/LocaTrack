import { useEffect, useRef, useState } from 'react';

export default function GpsTest() {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [vitesse, setVitesse] = useState<number>(0);
    const [niveauBatterie, setNiveauBatterie] = useState<number | null>(null);
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

                setStatus('Position GPS reçue 📍');

                /*
                 * Batterie
                 *
                 * L'API n'est pas disponible sur tous les navigateurs.
                 */
                let batteryLevel: number | null = null;

                if ('getBattery' in navigator) {
                    try {
                        const battery =
                            await (
                                navigator as Navigator & {
                                    getBattery: () => Promise<{
                                        level: number;
                                    }>;
                                }
                            ).getBattery();

                        batteryLevel = Math.round(
                            battery.level * 100
                        );

                        setNiveauBatterie(batteryLevel);

                        console.log(
                            'Batterie :',
                            batteryLevel,
                            '%'
                        );
                    } catch (error) {
                        console.warn(
                            'Batterie indisponible :',
                            error
                        );
                    }
                }

                /*
                 * Maximum 1 envoi toutes les 10 secondes.
                 */
                const now = Date.now();

                if (now - lastSendRef.current < 10000) {
                    return;
                }

                lastSendRef.current = now;

                try {
                    const response = await fetch(
                        '/api/gps/positions',
                        {
                            method: 'POST',

                            headers: {
                                'Content-Type':
                                    'application/json',
                                Accept: 'application/json',
                            },

                            body: JSON.stringify({
                                imei: 'iPhone 11 Pro',
                                latitude: lat,
                                longitude: lon,
                                vitesse: speed,
                                niveau_batterie: batteryLevel,
                            }),
                        }
                    );

                    const data = await response.json();

                    console.log(
                        'Réponse Laravel :',
                        data
                    );

                    if (!response.ok) {
                        setStatus(
                            `Erreur serveur : ${response.status}`
                        );

                        return;
                    }

                    setLastSent(
                        new Date().toLocaleTimeString()
                    );

                    setStatus(
                        'Position envoyée à Laravel ✅'
                    );
                } catch (error) {
                    console.error(
                        'Erreur envoi GPS :',
                        error
                    );

                    setStatus(
                        'Impossible de contacter le serveur.'
                    );
                }
            },

            (error) => {
                console.error('Erreur GPS :', error);

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
                <strong>Batterie :</strong>{' '}
                {niveauBatterie !== null
                    ? `${niveauBatterie}%`
                    : 'Indisponible'}
            </p>

            <p>
                <strong>Dernier envoi :</strong>{' '}
                {lastSent ?? 'Aucun'}
            </p>
        </div>
    );
}
