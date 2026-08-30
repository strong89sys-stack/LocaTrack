<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ReverseGeocodingService
{
    public function getAddress(
        float $longitude,
        float $latitude
    ): ?string {

        $response = Http::timeout(10)
            ->withHeaders([
                'User-Agent' => 'GeoLocalisationApp/1.0 (contact: strong89sys@gmail.com)',
                'Accept-Language' => 'fr',
            ])
            ->get('https://nominatim.openstreetmap.org/reverse', [
                'lat' => $latitude,
                'lon' => $longitude,
                'format' => 'jsonv2',
                'addressdetails' => 1,
                'zoom' => 18,
                'email' => 'strong89sys@gmail.com',
            ]);

        if (!$response->successful()) {
            return null;
        }

        $data = $response->json();

        if (isset($data['error'])) {
            return null;
        }

        return $data['display_name'] ?? null;
    }
}
