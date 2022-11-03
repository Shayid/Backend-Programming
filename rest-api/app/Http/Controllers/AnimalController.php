<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public $animals = ['kucing', 'ayam', 'ikan'];

    public function index()
    {
        # Menampilkan data animals
        echo 'Menampilkan data animals<br/>';
        foreach ($this->animals as $animal) {
            echo "- $animal<br/>";
        }
    }

    public function store(Request $request)
    {
        array_push($this->animals, $request->nama);
        echo 'Menambahkan hewan baru<br/>';
        $this->index();
    }

    public function update(Request $request, $id)
    {
        $this->animals[$id] = $request->nama;
        echo "Mengupdate data hewan id $id<br/>";
        $this->index();
    }
    public function destroy($id)
    {
        array_splice($this->animals, $id, 1);
        echo "Menghapus data animals id: $id<br/>";
        $this->index();
    }
}
