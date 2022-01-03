<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\MenuController;
use Illuminate\Support\Facades\Route;

Route::get('/register', [RegisteredUserController::class, 'create'])
                ->middleware(['guest', 'admin'])
                ->name('register');

Route::post('/register', [RegisteredUserController::class, 'store'])
                ->middleware(['guest', 'admin']);

Route::get('/login', [AuthenticatedSessionController::class, 'create'])
                ->middleware('guest')
                ->name('login');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->middleware('auth')
                ->name('logout');

Route::prefix('dashboard')->middleware('admin')->group(function () {
    Route::get('/user', [Controller::class, 'index'])->name('index');
    Route::get('/user/{id}/edit', [Controller::class, 'edit'])->name('edit');
    Route::get('/user/create', [Controller::class, 'create'])->name('create');
});

Route::resource('dashboard/menu', MenuController::class)->middleware('admin');
Route::resource('dashboard/categories', CategoriesController::class)->middleware('admin');
