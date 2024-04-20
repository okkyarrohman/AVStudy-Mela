<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function editSiswa(Request $request): Response
    {
        $users = User::where('id', Auth::user()->id)->first();

        $usersRole = Auth::user()->roles->pluck('name');

        return Inertia::render('Profile/Edit', [
            // 'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            // 'status' => session('status'),
            'users' => $users,
            'usersRole' => $usersRole
        ]);
    }

    public function editGuru(Request $request): Response
    {
        $users = User::where('id', Auth::user()->id)->first();

        $usersRole = Auth::user()->roles->pluck('name');

        return Inertia::render('Profile/Edit', [
            // 'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            // 'status' => session('status'),
            'users' => $users,
            'usersRole' => $usersRole
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request, string $id): RedirectResponse
    {
        $users = User::find($id);

        // $userUpdate = $request->user();
        // $usersUpdate = $request->only(['name', 'alamat', 'telp', 'foto']);
        $usersUpdate = $request->all();

        // $request->user()->fill($request->validated());

        if ($request->hasFile('foto')) {
            Storage::delete("public/profile/" . $users->foto);

            $file = $request->file('foto');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/profile'), $fileName);
            $usersUpdate['foto'] = $fileName;
        } else {
            $usersUpdate['foto'] = $users->foto;
        }

        // if ($request->user()->isDirty('email')) {
        //     $request->user()->email_verified_at = null;
        // }

        // $request->user()->save();
        $users->update($usersUpdate);

        if (Auth::check()) {
            // Jika pengguna sudah login, arahkan sesuai peran
            if (Auth::user()->hasRole('guru')) {
                return redirect()->route('profile-guru.edit');
            } elseif (Auth::user()->hasRole('siswa')) {
                return redirect()->route('profile-siswa.edit');
            }
        }

        // return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/login');
    }
}
