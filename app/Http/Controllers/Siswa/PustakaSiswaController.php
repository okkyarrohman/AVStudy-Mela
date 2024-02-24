<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Pustaka;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PustakaSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pustakas = Pustaka::all();
        return Inertia::render('Siswa/Pustaka/Index', [
            'pustakas' => $pustakas
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
    public function show($id)
    {
        $pustakas = Pustaka::where('tipe', $id)->get();

        if ($pustakas === "Referensi") {
            return Inertia::render('Siswa/Pustaka/Show/Refrensi');
        } else {
            return Inertia::render('Siswa/Pustaka/Show/Proposal');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function detail()
    {
        //
        return Inertia::render('Siswa/Pustaka/Detail');
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
        //
    }
}
