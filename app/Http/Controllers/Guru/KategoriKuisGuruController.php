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
        $kategoris = Kategori::paginate(10)->get();

        return Inertia::render('Guru/Kuis/Kategori/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Kuis/Kategori/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $kategoris = new Kategori();
        $kategoris->kuis = $request->kuis;
        $kategoris->tenggat = $request->tenggat;
        $kategoris->waktu = $request->waktu;
        $kategoris->save();

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
        return Inertia::render('Guru/Kuis/Kategori/Edit');
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
