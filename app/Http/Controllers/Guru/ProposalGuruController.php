<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Pustaka;


class ProposalGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $proposals = Pustaka::where('tipe', 'Proposal')->paginate(10);


        return Inertia::render('Guru/Pustaka/Proposal', [
            'proposals' => $proposals
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Guru/Pustaka/ProposalAdd');
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
            $cover->move(storage_path('app/public/pustaka/cover/'), $coverName);
        }

        // Request column input type file
        if ($request->hasFile('konten')) {
            $konten = $request->file('konten');
            $extension = $konten->getClientOriginalName();
            $kontenName = date('Ymd') . "." . $extension;
            $konten->move(storage_path('app/public/pustaka/konten/'), $kontenName);
        }

        Pustaka::create([
            'judul' => $request->input('judul'),
            'cover' => $coverName,
            'konten' => $kontenName,
            'tipe' => 'Proposal'
        ]);

        return redirect('/guru/pustaka/proposal');
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
        $proposals = Pustaka::where([
            'tipe' => 'Proposal',
            'id' => $id
        ])->first();

        return Inertia::render('Guru/Pustaka/ProposalEdit', [
            'proposals' => $proposals
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $proposals = Pustaka::find($id);
        $proposals->judul = $request->judul;
        // Request column input type file
        if ($request->hasFile('cover')) {
            $cover = $request->file('cover');
            $extension = $cover->getClientOriginalName();
            $coverName = date('Ymd') . "." . $extension;
            $cover->move(storage_path('app/public/pustaka/cover/'), $coverName);
            $proposals->cover = $coverName;
        }

        // Request column input type file
        if ($request->hasFile('konten')) {
            $konten = $request->file('konten');
            $extension = $konten->getClientOriginalName();
            $kontenName = date('Ymd') . "." . $extension;
            $konten->move(storage_path('app/public/pustaka/konten/'), $kontenName);
            $proposals->konten = $kontenName;
        }

        return redirect()->route('proposal.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $proposals = Pustaka::where([
            'tipe' => 'Proposal',
            'id' => $id
        ])->first();
        $proposals->delete();

        return redirect()->route('proposal.index');
    }
}
