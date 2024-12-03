<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Programme;

class ProgrammeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $programmes = [
            ['name' => 'Doctor Who', 'genre' => 'Sci-Fi', 'rating' => 4, 'comments' => 'Great show!'],
            ['name' => 'Peaky Blinders', 'genre' => 'Crime', 'rating' => 5, 'comments' => 'Perfect!'],
            ['name' => 'RuPaul\'s Drag Race: UK vs. the World', 'genre' => 'Entertainment', 'rating' => 4, 'comments' => 'Great show!'],
            ['name' => 'Inside No. 9', 'genre' => 'Comedy Drama', 'rating' => 5, 'comments' => 'Perfect!'],
            ['name' => 'Shetland', 'genre' => 'Drama', 'rating' => 3, 'comments' => 'Good show!'],
            ['name' => 'His Dark Materials', 'genre' => 'Fantasy', 'rating' => 4, 'comments' => 'Great show!'],
            ['name' => 'Eastenders', 'genre' => 'Soap', 'rating' => 3, 'comments' => 'Good show!'],
        ];

        foreach ($programmes as $programme) {
            Programme::create($programme);
        }
    }
}
