<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $guru1 = User::create([
            'name' => 'Guru',
            'email' => 'guru@avstudy.com',
            'password' => bcrypt('guru123'),
        ]);
        $guru1->assignRole('guru');

        $siswa = User::create([
            'name' => 'siswa',
            'email' => 'siswa@avstudy.com',
            'password' => bcrypt('siswa123'),
        ]);
        $siswa->assignRole('siswa');

        $siswa2 = User::create([
            'name' => 'siswa2',
            'email' => 'siswa2@avstudy.com',
            'password' => bcrypt('siswa123'),
        ]);
        $siswa2->assignRole('siswa');

        $siswa3 = User::create([
            'name' => 'siswa3',
            'email' => 'siswa3@avstudy.com',
            'password' => bcrypt('siswa123'),
        ]);
        $siswa3->assignRole('siswa');
    }
}
