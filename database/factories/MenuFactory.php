<?php

namespace Database\Factories;

use App\Models\Menu;
use Illuminate\Database\Eloquent\Factories\Factory;

class MenuFactory extends Factory
{
    protected $model = Menu::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word,
            'price' => $this->faker->randomNumber,
            'cost' => $this->faker->randomNumber,
            'categories_id' => rand(1,10),
            'show' => $this->faker->boolean(),
        ];
    }
}
