<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Absen;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Proyek;
use App\Models\KategoriKuis as Kategori;
use App\Models\Hasil;

class DashboardSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $absens = Absen::latest()->get();
        $newTugas = Proyek::latest()->take(4)->get();
        $progresTugas = Proyek::latest()->take(1)->get();


        return Inertia::render('Siswa/Dashboard', [
            'absens' => $absens,
            'newTugases' => $newTugas,
            'progresTugas' => $progresTugas,
            'chartKuis' => $this->grafikKuis(),
        ]);
    }


    private function grafikKuis()
    {
        $data = array();
        $kuis = Kategori::with('soal')->get();

        foreach ($kuis as $item) {
            $data[] = [
                'kategori' => $item->kuis,
                'y' => Hasil::where([
                    'user_id' => auth()->user()->id,
                    'kategori_kuis_id' => $item->id
                ])->get('total_points'),

            ];
        }
        return $data;
    }
}
