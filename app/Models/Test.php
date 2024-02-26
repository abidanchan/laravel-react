<?php 
// app/Models/Test.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    protected $fillable = ['name', 'age']; // Define fillable fields
}