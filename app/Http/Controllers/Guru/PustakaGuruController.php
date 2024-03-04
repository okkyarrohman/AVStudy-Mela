<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Pustaka;

class PustakaGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('Guru/Pustaka/Index');
    }

    public function refrensi()
    {


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Guru/Pustaka/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $pustakas = new Pustaka();
        $pustakas->judul = $request->judul;
        $pustakas->sumber = $request->sumber;
        $pustakas->link = $request->link;
        $pustakas->save();

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    // public function show(string $id)
    // {
    //     $pustakas = Pustaka::where('id', $id)->first();
    //     return Inertia::render('Guru/Pustaka/Show', [
    //         'pustakas' => $pustakas
    //     ]);
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $pustakas = Pustaka::where('id', $id)->first();
        return Inertia::render('Guru/Pustaka/Edit', [
            'pustakas' => $pustakas
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $pustakas = Pustaka::find($id);
        $pustakas->judul = $request->judul;
        $pustakas->sumber = $request->sumber;
        $pustakas->link = $request->link;
        $pustakas->save();

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $pustakas = Pustaka::where('id', $id)->first();
        $pustakas->delete();

        return redirect()->route('pustaka-guru.index');
    }
}
