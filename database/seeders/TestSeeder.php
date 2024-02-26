<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Test; // Import the Test model

class TestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insert specific data
        Test::create([
            'name' => 'Abid',
            'age' => 28,
        ]);
    }
}
