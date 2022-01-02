<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class ImagesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $arr = ['App\Models\Categories', 'App\Models\User', 'App\Models\Menu'];
        static $n=1;
        return [
            'img_url' => $this->faker->imageUrl(),
            'img_type' => 'App\Models\Menu',
            'img_id' => $n++,
        ];
    }
}
