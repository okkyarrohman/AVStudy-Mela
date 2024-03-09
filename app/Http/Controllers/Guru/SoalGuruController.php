<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\KategoriKuis;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Soal;
use App\Models\KategoriKuis as Kategori;

class SoalGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $soals = Soal::join('kategori_kuis', 'soals.kategori_kuis_id', '=', 'kategori_kuis.id')
            ->select('soals.*', 'kategori_kuis.kuis')
            ->paginate(10);

        return Inertia::render('Guru/Kuis/KuisSoal', [
            'soals' => $soals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Guru/Kuis/KuisSoalAdd', [
            'kategoris' => Kategori::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $extension = $gambar->getClientOriginalName();
            $gambarName = date('Ymd') . "." . $extension;
            $gambar->move(storage_path('app/public/kuis/soal/gambar/'), $gambarName);

            Soal::create([
                'kategori_kuis_id' => $request->input('kategori_kuis_id'),
                'soal' => $request->input('soal'),
                'gambar' => $gambarName
            ]);
        } else {
            Soal::create([
                'kategori_kuis_id' => $request->input('kategori_kuis_id'),
                'soal' => $request->input('soal'),
                'gambar' => null,
            ]);
        }


        return redirect('/guru/kuis/soal');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $soals = Soal::where('id', $id)->first();
        return Inertia::render('Guru/Kuis/Soal/Show', [
            'soals' => $soals
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $soals = Soal::where('soals.id', $id)->join('kategori_kuis', 'soals.kategori_kuis_id', '=', 'kategori_kuis.id')
        ->select('soals.*', 'kategori_kuis.kuis')
        ->paginate(10);

        return Inertia::render('Guru/Kuis/KuisSoalEdit', [
            'soals' => $soals,
            'kategoris' => KategoriKuis::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $soals = Soal::find($id);
        $soals->kategori_kuis_id = $request->kategori_kuis_id;
        $soals->soal = $request->soal;
        // Request column input type file
        if ($request->hasFile('gambar')) {
            $gambar = $request->file('gambar');
            $extension = $gambar->getClientOriginalName();
            $gambarName = date('Ymd') . "." . $extension;
            $gambar->move(storage_path('app/public/kuis/soal/gambar/'), $gambarName);
            $soals->gambar = $gambarName;
        }
        $soals->save();
        return redirect('/guru/kuis/soal');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $soals = Soal::find($id);
        $soals->delete();
        return redirect('/guru/kuis/soal');

    }
}
