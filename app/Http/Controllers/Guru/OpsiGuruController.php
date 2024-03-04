<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Opsi;
use App\Models\Soal;
use Inertia\Inertia;

class OpsiGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $opsis = Opsi::paginate(10);
        return Inertia::render('Guru/Kuis/KuisOpsi', [
            'opsis' => $opsis,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Kuis/KuisOpsiAdd', [
            'soals' => Soal::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Opsi::create([
            'soal_id' => $request->input('soal_id'),
            'opsi' => $request->input('opsi'),
            'point' => $request->input('point'),
        ]);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $opsis = Opsi::where('id', $id)->first();

        return Inertia::render('Guru/Kuis/Opsi/Show', [
            'opsis' => $opsis
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $opsis = Opsi::where('id', $id)->first();

        return Inertia::render('Guru/Kuis/Opsi/Edit', [
            'opsis' => $opsis,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $opsis = Opsi::find($request->id);
        $opsis->soal_id = $request->soal_id;
        $opsis->opsi = $request->opsi;
        $opsis->point = $request->point;
        $opsis->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $opsis = Opsi::find($id)->first();
        $opsis->delete();
        return redirect()->route('opsi-kuis.index');
    }
}
