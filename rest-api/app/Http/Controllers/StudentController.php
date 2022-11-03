<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        $data = [
            'message' => 'Get all studets',
            'data' => $students
        ];
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        Student::where('id', $id)
            ->update([
                'nama' => $request->nama,
                'nim' => $request->nim,
                'email' => $request->email,
                'jurusan' => $request->jurusan,
            ]);
        $student = Student::find($id);
        $data = [
            'message' => 'Student is updated succesfully',
            'data' => $student
        ];
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];
        $student = Student::create($input);
        $data = [
            'message' => 'Student is created succesfully',
            'data' => $student
        ];
        return response()->json($data, 201);
    }

    public function destroy($id)
    {
        Student::destroy($id);
        $data = [
            'message' => 'Student is deleted succesfully',
        ];
        return response()->json($data, 204);
    }
}
