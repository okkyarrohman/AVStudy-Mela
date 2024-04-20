<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Proyek>
 */
class ProyekFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->slug(),
            'tenggat' => $this->faker->dateTime(),
            'step1' => $this->faker->slug(),
            'deskripsi1' => $this->faker->paragraph(),
            'step2' => $this->faker->slug(),
            'deskripsi2' => $this->faker->paragraph(),
            'step3' => $this->faker->slug(),
            'deskripsi3' => $this->faker->paragraph(),
            'step4' => $this->faker->slug(),
            'deskripsi4' => $this->faker->paragraph(),
        ];
    }
}
