<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        return Inertia::render('User/Index' , [
            'user' => User::with('image')->paginate(10),
        ]);
    }

    public function create()
    {
        return Inertia::render('User/Add');
    }

    public function edit($user)
    {
        return Inertia::render('User/Edit', [
            'user' => User::findOrFail($user)->with('image')->first()
        ]);
    }

}
