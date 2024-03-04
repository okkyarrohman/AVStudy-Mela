<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pustaka>
 */
class PustakaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'judul' => $this->faker->title(),
            'sumber' => $this->faker->imageUrl(),
            'link' => $this->faker->url(),
            'konten' => $this->faker->imageUrl(),
            'cover' => $this->faker->imageUrl(),
            'tipe' => $this->faker->randomElement(['Referensi', 'Proposal']),
        ];
    }
}
