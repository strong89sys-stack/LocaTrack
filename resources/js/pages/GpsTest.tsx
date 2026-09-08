import { useEffect, useRef, useState } from 'react';

export default function GpsTest() {
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);
    const [vitesse, setVitesse] = useState<number>(0);
    const [status, setStatus] = useState(
        'Initialisation du GPS...'
    );
    const [lastSent, setLastSent] = useState<string | null>(
        null
    );

    const lastSendRef = useRef<number>(0);

    useEffect(() => {
        if (!navigator.geolocation) {
            setStatus(
                'La géolocalisation n’est pas supportée par ce navigateur.'
            );

            return;
        }

        const watchId = navigator.geolocation.watchPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                const speed = position.coords.speed
                    ? position.coords.speed * 3.6
                    : 0;

                // Affichage de la position reçue
                setLatitude(lat);
                setLongitude(lon);
                setVitesse(speed);

                setStatus('Position GPS reçue 📍');

                console.log('========================');
                console.log('GPS reçu');
                console.log('Latitude :', lat);
                console.log('Longitude :', lon);
                console.log('Vitesse :', speed);
                console.log('========================');

                /*
                 * On limite les envois à 1 toutes les 10 secondes.
                 */
                const now = Date.now();

                if (now - lastSendRef.current < 10000) {
                    console.log(
                        'Envoi ignoré : moins de 10 secondes depuis le dernier envoi.'
                    );

                    return;
                }

                lastSendRef.current = now;

                console.log(
                    'Tentative d’envoi vers Laravel...'
                );

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
                            }),
                        }
                    );

                    console.log(
                        'Statut HTTP Laravel :',
                        response.status
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
                        'Erreur lors de l’envoi GPS :',
                        error
                    );

                    setStatus(
                        'Impossible de contacter le serveur.'
                    );
                }
            },

            (error) => {
                console.error(
                    'Erreur de géolocalisation :',
                    error
                );

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        setStatus(
                            'Permission GPS refusée ❌'
                        );
                        break;

                    case error.POSITION_UNAVAILABLE:
                        setStatus(
                            'Position GPS indisponible ❌'
                        );
                        break;

                    case error.TIMEOUT:
                        setStatus(
                            'Délai GPS dépassé ❌'
                        );
                        break;

                    default:
                        setStatus(
                            'Erreur GPS inconnue ❌'
                        );
                }
            },

            {
                enableHighAccuracy: true,
                maximumAge: 5000,
                timeout: 10000,
            }
        );

        // Nettoyage lorsque le composant est démonté
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
                backgroundColor: '#f5f5f5',
            }}
        >
            <h1>
                📍 Test GPS LocaTrack
            </h1>

            <hr />

            <p>
                <strong>Statut :</strong>{' '}
                {status}
            </p>

            <p>
                <strong>Latitude :</strong>{' '}
                {latitude !== null
                    ? latitude
                    : '---'}
            </p>

            <p>
                <strong>Longitude :</strong>{' '}
                {longitude !== null
                    ? longitude
                    : '---'}
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
