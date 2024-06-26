<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Absen;
use App\Models\User;

class DashboardGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $absens = Absen::latest()->first();

        $waktuLogin = User::role('siswa')->get(['name', 'total_login_time']);


        return Inertia::render('Guru/Dashboard', [
            'absens' => $absens,
            'siswa' => $waktuLogin
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
    public function storeAbsen(Request $request)
    {
        Absen::create([
            'link' => $request->input('link'),
        ]);

        return redirect()->route('guru.dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        //
    }
}
