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
        Pustaka::factory(5)->create();
        Absen::factory(1)->create();
        KategoriKuis::factory(5)->create();
        Soal::factory(5)->create();
        Opsi::factory(5)->create();
    }
}
