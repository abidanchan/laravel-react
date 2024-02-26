<?php 
// app/Http/Controllers/TestController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {
        $tests = Test::all(); // Fetch all records from the tests table
        return Inertia::render('Test', ['tests' => $tests]);
    }
}