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
        $filePath = $this->faker->file(storage_path('app/public/pustaka/konten'), 'storage/app/public/pustaka/konten', false);
        $coverPath = $this->faker->file(storage_path('app/public/pustaka/cover'), 'storage/app/public/pustaka/cover', false);

        return [
            'judul' => $this->faker->title(),
            'sumber' => $this->faker->imageUrl(),
            'link' => $this->faker->url(),
            'konten' => $filePath,
            'cover' => $coverPath,
            'tipe' => $this->faker->randomElement(['Referensi', 'Proposal']),
        ];
    }
}
