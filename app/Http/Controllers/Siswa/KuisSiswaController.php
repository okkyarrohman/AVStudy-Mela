<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Hasil;
use App\Models\KategoriKuis;
use App\Models\Opsi;
use App\Models\Soal;
use Illuminate\Support\Facades\Auth;

class KuisSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kuis = KategoriKuis::withCount('soal')->get();
        return Inertia::render('Siswa/Kuis/Index',[
            'kuis' => $kuis
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $opsi = Opsi::find(array_values($request->input('soal')));

        $hasilSeluruh = new Hasil();
        $hasilSeluruh->user_id = Auth::user()->id;
        $hasilSeluruh->kategori_kuis_id = $request->kategori_kuis_id;
        $hasilSeluruh->total_points = $opsi->sum('point');
        $hasilSeluruh->save();

        $soal = $opsi->mapWithKeys(function ($option) {
            return [
                $option->soal_id => [
                    'opsi_id' => $option->id,
                    'point' => $option->point
                ],
            ];
        })->toArray();

        $hasilSeluruh->soal()->sync($soal);

        return redirect()->route('kuis');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $soal = Soal::with('opsi')->where('kategori_kuis_id',$id)->get();
        $kuis = KategoriKuis::where('id', $id)->first();

        return Inertia::render('Siswa/Kuis/Show', [
            'kuis' => $kuis,
            'soal' => $soal,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
