import { useEchoPublic } from "@laravel/echo-react";

export interface PositionUpdate {
    id: number;
    appareil_id: number;
    latitude: number;
    longitude: number;
    adresse: string | null;
    vitesse: number;
    date_heure: string;
}

export function usePositionUpdates(
    onUpdate: (position: PositionUpdate) => void
) {
    useEchoPublic(
        "positions_gps",
        ".position.updated",
        (data: PositionUpdate) => {
            console.log("📡 WEBSOCKET :", {
                latitude: data.latitude,
                longitude: data.longitude
            });

            onUpdate(data);
        }
    );
}
