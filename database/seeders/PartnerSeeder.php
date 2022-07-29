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
                'name' => '',
                'photo' => 'https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/9/2020/09/Alan-Holl-Consulting-logo-2018-05-1.png',
            ],
            [
                'name' => '',
                'photo' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Logo_Eurogroup_Consulting.png/777px-Logo_Eurogroup_Consulting.png',
            ],
            [
                'name' => '',
                'photo' => 'https://d2slcw3kip6qmk.cloudfront.net/marketing/blogs/press/10-consulting-logo-design-ideas-inspiration/deloitte-logo.png',
            ],
            [
                'name' => '',
                'photo' => 'http://gaiaenergyre.com/wp-content/uploads/2017/05/Gaia-Consulting-Logo-final-v2.png',
            ],
            [
                'name' => '',
                'photo' => 'https://images-platform.99static.com/YUwZK0kfDhODOZBuszQEFPeV5Cg=/500x500/top/smart/99designs-contests-attachments/35/35141/attachment_35141959',
            ],
            [
                'name' => '',
                'photo' => 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/FTI_Consulting_logo.svg/2560px-FTI_Consulting_logo.svg.png',
            ],
            [
                'name' => '',
                'photo' => 'data:image/png;base64,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',
            ],
        ];

        foreach ($partners as $partner) {
            Partner::create($partner);
        }
    }
}
