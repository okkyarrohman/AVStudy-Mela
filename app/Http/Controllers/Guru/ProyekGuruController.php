<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Proyek;
use Inertia\Inertia;

class ProyekGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $proyeks = Proyek::paginate(10)->get();

        return Inertia::render('Guru/Proyek/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Proyek/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $proyeks = new Proyek();
        $proyeks->nama = $request->nama;
        $proyeks->tenggat = $request->tenggat;

        $proyeks->step1 = $request->step1;
        $proyeks->deskripsi1 = $request->deskripsi1;

        $proyeks->step2 = $request->step2;
        $proyeks->deskripsi2 = $request->deskripsi2;

        $proyeks->step3 = $request->step3;
        $proyeks->deskripsi3 = $request->deskripsi3;

        $proyeks->step4 = $request->step4;
        $proyeks->deskripsi4 = $request->deskripsi4;

        $proyeks->save();

        return redirect()->route('proyek-guru.index');
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        // $proyeks = Proyek::where('id', $id)->first();

        return Inertia::render('Guru/Proyek/Show');
    }
    public function detail()
    {
        // $proyeks = Proyek::where('id', $id)->first();

        return Inertia::render('Guru/Proyek/Detail');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $proyeks = Proyek::where('id', $id)->first();

        return Inertia::render('Guru/Proyek/Edit', [
            'proyeks' => $proyeks
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $proyeks = Proyek::find($request->id);
        $proyeks->nama = $request->nama;
        $proyeks->tenggat = $request->tenggat;

        $proyeks->step1 = $request->step1;
        $proyeks->deskripsi1 = $request->deskripsi1;

        $proyeks->step2 = $request->step2;
        $proyeks->deskripsi2 = $request->deskripsi2;

        $proyeks->step3 = $request->step3;
        $proyeks->deskripsi3 = $request->deskripsi3;

        $proyeks->step4 = $request->step4;
        $proyeks->deskripsi4 = $request->deskripsi4;

        $proyeks->save();

        return redirect()->route('proyek-guru.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $proyeks = Proyek::find($id)->first();

        $proyeks->delete();

        return redirect()->route('proyek-guru.index');
    }
}
