<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Hasil;
use Illuminate\Http\Request;
use App\Models\KategoriKuis as Kategori;
use Inertia\Inertia;

class HasilGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hasils = Hasil::with(['soal', 'user'])->get();

        return Inertia::render('Guru/Kuis/KuisHasil', [
            'hasils' => $hasils
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $hasils = Hasil::with('soal')->where('id', $id)->get();

        return Inertia::render('Guru/Kuis/KuisHasilDetail', [
            'hasils' => $hasils
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
        $hasils = Hasil::find($id)->first();
        $hasils->delete();

        return redirect()->back();
    }
}
