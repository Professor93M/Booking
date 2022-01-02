<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable =[
        'title', 'price', 'cost', 'categories_id', 'show'
    ];

    public function category(){
        return $this->belongsTo(Categories::class);
    }
}
