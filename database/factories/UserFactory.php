<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => 'm',
            'email' => 'm@m.m',
            'password' => '$2y$10$fKkpSsK06.4cnxy9kOsr6evFhETtBCvZ4gP6dmjTKCm1sS99cGTDi', // 11221122
            'remember_token' => Str::random(10),
            'isAdmin' => '1'
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
