<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $services = [
            [
                'title' => json_encode(['fr' => 'Intelligence économique']),
                'body' => json_encode(['fr' => 'Rechercher, traiter et distribuer de manière coordonnée l\'information utile aux acteurs économiques en vue de son exploitation.']),
                'icon' => 'brain',
            ],
            [
                'title' => json_encode(['fr' => 'Conseil']),
                'body' => json_encode(['fr' => 'Délivrer de façon ponctuelle des avis ou des recommandations sur ce qu\'il convient de faire dans une organisation face à une problématique de manière plus générale.']),
                'icon' => 'handshake',
            ],
            [
                'title' => json_encode(['fr' => 'Intermédiation de commerce']),
                'body' => json_encode(['fr' => 'Agir pour le compte de notre client de façon à faciliter la réalisation d’un contrat.']),
                'icon' => 'coins',
            ],
            [
                'title' => json_encode(['fr' => 'Gestion mandatée']),
                'body' => json_encode(['fr' => 'Agir pour le compte de notre client qui nous donne le pouvoir de gérer tout ou une partie de son activité.']),
                'icon' => 'globe-africa',
            ],
            [
                'title' => json_encode(['fr' => 'Formation']),
                'body' => json_encode(['fr' => 'Concevoir et animer des séminaires de formation sur mesure qui répondent à une problématique réelle de l\'entreprise.']),
                'icon' => 'feather-alt',
            ],
            [
                'title' => json_encode(['fr' => 'Recherche de financement']),
                'body' => json_encode(['fr' => 'Aider l\'entreprise à trouver les ressources financières dont elle a besoin.']),
                'icon' => 'chart-bar',
            ],
            [
                'title' => json_encode(['fr' => 'Conciergerie']),
                'body' => json_encode(['fr' => 'Apporter notre assistance dans la satisfaction des besoins matériels des entreprises.']),
                'icon' => 'gavel',
            ],
            [
                'title' => json_encode(['fr' => 'Mise à disposition du personnel']),
                'body' => json_encode(['fr' => 'Mettre à la disposition des entreprises des ressources humaines, utiles et qualifiées.']),
                'icon' => 'users',
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
