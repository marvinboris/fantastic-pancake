<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $partners = [
            [
                'name' => 'Sure Transport',
                'title' => 'Sure Transport et Logistique',
                'link' => 'https://www.goafricaonline.com/cm/690832-sure-transports-logistiques-douala-cameroun',
                'photo' => 'photo_2023-09-23_10-11-40.jpg',
            ],
            [
                'name' => 'Fobs',
                'title' => 'Fobs LTC',
                'link' => 'http://www.fobs-group.com/',
                'photo' => 'photo_2023-09-23_10-11-33.jpg',
            ],
            [
                'name' => 'Yellow',
                'title' => 'Yellow Factoring',
                'link' => 'https://yellow-factoring.com/',
                'photo' => 'photo_2023-09-23_10-11-25.jpg',
            ],
            [
                'name' => 'Tradex',
                'title' => 'Tradex SA',
                'link' => 'https://tradexsa.co/',
                'photo' => 'photo_2023-09-23_10-11-16.jpg',
            ],
            [
                'name' => 'Hôpital Laquintinie',
                'title' => 'Hôpital Laquintinie de Douala',
                'link' => 'https://hopital-laquintinie.cm/',
                'photo' => 'photo_2023-09-23_10-11-06.jpg',
            ],
            [
                'name' => 'JFF Oil',
                'title' => 'JFF Oil',
                'link' => 'http://jffoil.com/',
                'photo' => 'photo_2023-09-23_10-10-43.jpg',
            ],
            [
                'name' => 'Lumière Group International',
                'title' => 'Lumière Group International',
                'link' => 'https://www.lumgint.com/',
                'photo' => 'lumiere.png',
            ],
        ];

        foreach ($partners as $partner) {
            Partner::create($partner);
        }
    }
}
