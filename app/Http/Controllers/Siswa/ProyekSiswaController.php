<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Proyek;
use App\Models\ProyekResult;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProyekSiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $proyeks = Proyek::all();

        return Inertia::render('Siswa/Proyek/Index',[
            'proyeks' => $proyeks
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
        $proyekResults = new ProyekResult();
        $proyekResults->user_id = Auth::user()->id;
        $proyekResults->proyek_id = $request->id;
        // Request column input type file
        if ($request->hasFile('answer1')) {
            $answer1 = $request->file('answer1');
            $extension = $answer1->getClientOriginalName();
            $answer1Name = date('Ymd') . "." . $extension;
            $answer1->move(storage_path('app/public/ProyekResult/answer1/'), $answer1Name);
            $proyekResults->answer1 = $answer1Name;
        }
        if ($request->hasFile('answer2')) {
            $answer2 = $request->file('answer2');
            $extension = $answer2->getClientOriginalName();
            $answer2Name = date('Ymd') . "." . $extension;
            $answer2->move(storage_path('app/public/ProyekResult/answer2/'), $answer2Name);
            $proyekResults->answer2 = $answer2Name;
        }

        if ($request->hasFile('answer3')) {
            $answer3 = $request->file('answer3');
            $extension = $answer3->getClientOriginalName();
            $answer3Name = date('Ymd') . "." . $extension;
            $answer3->move(storage_path('app/public/ProyekResult/answer3/'), $answer3Name);
            $proyekResults->answer3 = $answer3Name;
        }
        $proyekResults->answer4 = $request->answer4;
        $proyekResults->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $proyeks = Proyek::where('id', $id)->first();

        return Inertia::render('Siswa/Proyek/Show', [
            'proyeks' => $proyeks
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
        //
    }
}
