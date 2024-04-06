<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Proyek;
use Inertia\Inertia;
use App\Models\ProyekResult;

class ProyekGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $proyeks = Proyek::with(['proyekResult'])->paginate(10);

        return Inertia::render('Guru/Proyek/Index', [
            'proyeks' => $proyeks
        ]);
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
        Proyek::create([
            'nama' => $request->input('nama'),
            'tenggat' => $request->input('tenggat'),
            'step1' => $request->input('step1'),
            'deskripsi1' => $request->input('deskripsi1'),
            'step2' => $request->input('step2'),
            'deskripsi2' => $request->input('deskripsi2'),
            'step3' => $request->input('step3'),
            'deskripsi3' => $request->input('deskripsi3'),
            'step4' => $request->input('step4'),
            'deskripsi4' => $request->input('deskripsi4'),
        ]);

        return redirect('/guru/proyek');

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $proyekResults = ProyekResult::where('proyek_id', $id)->with(['proyek', 'user'])->paginate(10);

        return Inertia::render('Guru/Proyek/Show', [
            'proyekResults' => $proyekResults,
        ]);
    }

    public function detail($id)
    {
        $proyeks = ProyekResult::where('id', $id)->first();

        return Inertia::render('Guru/Proyek/Detail', [
            'proyeks' => $proyeks
        ]);
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
        $proyeks = Proyek::find($id);
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

        return redirect('/guru/proyek');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $proyeks = Proyek::where('id', $id);

        $proyeks->delete();

        return redirect('/guru/proyek');

    }

    public function grade(Request $request, string $id)
    {
        $proyeks = ProyekResult::find($id);

        $proyeksUpdate = $request->only(['konfirmasi1', 'konfirmasi2', 'konfirmasi3', 'konfirmasi4']);

        $proyeks->update($proyeksUpdate);

        return redirect('/guru/proyek');
    }
}
