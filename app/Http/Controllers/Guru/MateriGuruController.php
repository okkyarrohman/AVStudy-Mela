<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Materi;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class MateriGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $materis = Materi::paginate(10);

        return Inertia::render('Guru/Materi/Index', [
            'materis' => $materis
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Materi/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('Ymd') . "." . $extension;
            $cover->move(storage_path('app/public/materi/cover/'), $coverName);
        }
        // Request column input type file
        if ($request->hasFile('konten')) {
            $konten = $request->file('konten');
            $extension = $konten->getClientOriginalName();
            $kontenName = date('Ymd') . "." . $extension;
            $konten->move(storage_path('app/public/materi/konten/'), $kontenName);
        }

        Materi::create([
            'nama' => $request->input('nama'),
            'deskripsi' => $request->input('deskripsi'),
            'cover' => $coverName,
            'konten' => $kontenName,
        ]);



        return redirect()->route('materi-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $materis = Materi::where('id', $id)->first();

        return Inertia::render('Guru/Materi/Show', [
            'materis' => $materis
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

        $materis = Materi::where('id', $id)->first();
        return Inertia::render('Guru/Materi/Edit', [
            'materis' => $materis
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $materis = Materi::find($request->id);
        $materis->nama = $request->nama;
        $materis->deskripsi = $request->deskripsi;

        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('Ymd') . "." . $extension;
            $cover->move(storage_path('app/public/materi/cover/'), $coverName);
            $materis->cover = $coverName;
        }

        // Request column input type file
        if ($request->hasFile('konten')) {
            $konten = $request->file('konten');
            $extension = $konten->getClientOriginalName();
            $kontenName = date('Ymd') . "." . $extension;
            $konten->move(storage_path('app/public/materi/konten/'), $kontenName);
            $materis->konten = $kontenName;
        }


        $materis->save();

        return redirect()->route('materi-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $materis = Materi::find($id)->first();

        $materis->delete();

        return redirect()->route('materi-guru.index');
    }
}
