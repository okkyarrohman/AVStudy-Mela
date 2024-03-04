<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\KategoriKuis as Kategori;
use Inertia\Inertia;

class KategoriKuisGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kategoris = Kategori::paginate(10);

        return Inertia::render('Guru/Kuis/KuisKategori', [
            'kategoris' => $kategoris
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Kuis/KuisKategoriAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Kategori::create([
            'kuis' => $request->input('kuis'),
            'tenggat' => $request->input('tenggat'),
            'waktu' => $request->input('waktu'),
        ]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {


        return Inertia::render('Guru/Kuis/Kategori/Show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $kategoris = Kategori::where('id', $id)->first();

        return Inertia::render('Guru/Kuis/Kategori/Edit', [
            'kategoris' => $kategoris
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $kategoris = Kategori::find($request->id);
        $kategoris->kuis = $request->kuis;
        $kategoris->tenggat = $request->tenggat;
        $kategoris->waktu = $request->waktu;
        $kategoris->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $kategoris = Kategori::find($id)->first();

        $kategoris->delete();

        return redirect()->route('kategori-kuis.index');
    }
}
