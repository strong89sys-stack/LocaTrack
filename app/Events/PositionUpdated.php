<?php

namespace App\Events;

use App\Models\PositionGps;
use Illuminate\Support\Facades\DB;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PositionUpdated implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(public PositionGps $position)
    {
        //
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new Channel('positions_gps'),
        ];
    }

    public function broadcastAs(): string
    {
        return 'position.updated';
    }

    public function broadcastWith(): array
    {
        $coordonnees = DB::selectOne(
            'SELECT
                ST_Y(coordonnees) AS latitude,
                ST_X(coordonnees) AS longitude
            FROM position_gps
            WHERE id = ?',
            [$this->position->id]
        );

        return [
            'id' => $this->position->id,
            'appareil_id' => $this->position->appareil_id,

            'latitude' => (float) $coordonnees->latitude,

            'longitude' => (float) $coordonnees->longitude,

            'adresse' => $this->position->adresse,

            'vitesse' => (float) $this->position->vitesse,

            'date_heure' => $this->position->date_heure?->toISOString(),
        ];
    }
}
