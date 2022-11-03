<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// menggunakan class animalController
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
/**
 * Laravel - Routing
 */
// Route::get('/animals', function () {
//     echo 'menampilkan data animals';
// });
/**
 * Methods about routing:
 * GET
 * POST
 * PUT - dengan parameter
 * DELETE - dengan parameter
 */
// Route::post('/animals', function () {
//     echo 'menambahkan hewan baru';
// });

// Route::put('/animals', function () {
//     echo 'mengupdate data hewan';
// });

// Route::delete('/animals', function () {
//     echo 'menghapus data hewan';
// });

// Route::get('/animals', function () {
//     echo 'menampilkan data animals';
// });

// Route::post('/animals', function () {
//     echo 'menambahkan hewan baru';
// });

// Route::put('/animals/{id}', function ($id) {
//     echo "mengupdate data hewan id: " . $id;
// });

// Route::delete('/animals/{id}', function ($id) {
//     echo "menghapus data hewan id: " . $id;
// });

Route::get('/animals', [AnimalController::class, 'index']);
Route::post('/animals', [AnimalController::class, 'store']);
Route::put('/animals/{id}', [AnimalController::class, 'update']);
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);

Route::get('/students', [StudentController::class, 'index']);
Route::post('/students', [StudentController::class, 'store']);
Route::put('/students/{id}', [StudentController::class, 'update']);
Route::delete('/students/{id}', [StudentController::class, 'destroy']);
