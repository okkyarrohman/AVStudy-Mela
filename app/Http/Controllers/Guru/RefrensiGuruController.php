<?php


namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Pustaka;

class RefrensiGuruController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $referensis = Pustaka::where('tipe', 'Referensi')->get();


        return Inertia::render('Guru/Pustaka/Refrensi', [
            'referensis' => $referensis
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Guru/Pustaka/RefrensiAdd');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Pustaka::create([
            'judul' => $request->input('judul'),
            'sumber' => $request->input('sumber'),
            'link' => $request->input('link'),
            'tipe' => 'Referensi'
        ]);

        return redirect('/guru/pustaka/refrensi');

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
        $referensis = Pustaka::where('id', $id)->first();


        return Inertia::render('Guru/Pustaka/RefrensiEdit', [
            'referensis' => $referensis
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $referensis = Pustaka::find($id);
        $referensis->judul = $request->judul;
        $referensis->sumber = $request->sumber;
        $referensis->link = $request->link;

        $referensis->save();

        return redirect('/guru/pustaka/refrensi');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $referensis = Pustaka::where('id', $id)->first();

        $referensis->delete();

        return redirect('/guru/pustaka/refrensi');

    }
}
