<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Absen;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Proyek;
use App\Models\KategoriKuis as Kategori;
use App\Models\Hasil;
use App\Models\Notifikasi;
use App\Models\ProyekResult;
use Illuminate\Support\Facades\Auth;

class DashboardSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $absens = Absen::latest()->first();
        // $newTugas = Proyek::latest()->take(4)->get();
        $progresTugas = ProyekResult::where('user_id', Auth::user()->id)->with('proyek')->latest()->take(1)->get();
        $notifikasis = Notifikasi::latest()->take(5)->get();

        return Inertia::render('Siswa/Dashboard', [
            'absens' => $absens,
            // 'newTugases' => $newTugas,
            'progresTugas' => $progresTugas,
            'notifikasis' => $notifikasis,
            'chartKuis' => $this->grafikKuis(),
        ]);
    }


    private function grafikKuis()
    {
        $data = array();
        $kuis = Kategori::with('soal')->latest()->take(5)->get();

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
