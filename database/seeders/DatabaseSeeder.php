<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Absen;
use App\Models\KategoriKuis;
use App\Models\Materi;
use App\Models\Opsi;
use App\Models\Proyek;
use App\Models\Pustaka;
use App\Models\Soal;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([RoleSeeder::class]);
        $this->call([UserSeeder::class]);

        Materi::factory(5)->create();
        Proyek::factory(5)->create();
        Pustaka::factory(10)->create();
        // Absen::factory(1)->create();
        KategoriKuis::factory(2)->create();
        Soal::factory(10)->create();
        Opsi::factory(40)->create();

        User::factory(30)->create();
    }
}
