<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Student extends Model
{
    use HasFactory;
    // membuat fungis getStudents di model Student
    // public function getStudents()
    // {
    //     // menggunakan query sql untuk mengambil data
    //     $student = DB::select('select * from students');
    //     return $student;
    // }
    protected $fillable = ['nama', 'nim', 'email', 'jurusan'];
}
