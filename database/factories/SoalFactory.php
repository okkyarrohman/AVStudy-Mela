<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\KategoriKuis;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Soal>
 */
class SoalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'kategori_kuis_id' => function () {
                return KategoriKuis::inRandomOrder()->first();
            },
            'soal' => $this->faker->sentence(),
            'gambar' => $this->faker->imageUrl()
        ];
    }
}
