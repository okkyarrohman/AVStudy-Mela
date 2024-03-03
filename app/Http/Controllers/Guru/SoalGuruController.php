<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\KategoriKuis;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Soal;

class SoalGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $soals = Soal::paginate(10)->get();

        return Inertia::render('Guru/Kuis/KuisSoal');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Kuis/KuisSoalAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $soals = new Soal();
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
        return redirect()->back();
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
        $soals = Soal::where('id', $id)->first();


        return Inertia::render('Guru/Kuis/Soal/Edit', [
            'soals' => $soals,
            'kategoris' => KategoriKuis::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $soals = Soal::find($request->id);
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
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $soals = Soal::find($id)->first();
        $soals->delete();
        return redirect()->route('soal-kuis.index');
    }
}
