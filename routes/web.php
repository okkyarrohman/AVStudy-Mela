<?php

use App\Http\Controllers\Guru\DashboardGuruController;
use App\Http\Controllers\Guru\DataSiswaGuruController;
use App\Http\Controllers\Guru\HasilGuruController;
use App\Http\Controllers\Guru\KategoriKuisGuruController;
use App\Http\Controllers\Guru\MateriGuruController;
use App\Http\Controllers\Guru\OpsiGuruController;
use App\Http\Controllers\Guru\ProposalGuruController;
use App\Http\Controllers\Guru\ProyekGuruController;
use App\Http\Controllers\Guru\PustakaGuruController;
use App\Http\Controllers\Guru\RefrensiGuruController;
use App\Http\Controllers\Guru\SoalGuruController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Siswa\DashboardSiswaController;
use App\Http\Controllers\Siswa\KuisSiswaController;
use App\Http\Controllers\Siswa\MateriSiswaController;
use App\Http\Controllers\Siswa\ProyekSiswaController;
use App\Http\Controllers\Siswa\PustakaSiswaController;
use App\Models\Pustaka;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (Auth::check()) {
        // Jika pengguna sudah login, arahkan sesuai peran
        if (Auth::user()->hasRole('guru')) {
            return redirect()->route('guru.dashboard');
        } elseif (Auth::user()->hasRole('siswa')) {
            return redirect()->route('siswa.dashboard');
        }
    }
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'guru' => User::role('guru')->get(),
        'siswa' => User::role('siswa')->get(),

    ]);
});


// Route Guru
Route::group(['middleware' => 'role:guru'], function () {
    Route::prefix('guru')->group(function () {
        // Route Guru Start Here
        Route::get('/dashboard', [DashboardGuruController::class, 'index'])->name('guru.dashboard');
        Route::resources([
            'materi' => MateriGuruController::class,
            'proyek' => ProyekGuruController::class,
            'datamurid' => DataSiswaGuruController::class,
        ]);
        Route::controller(ProyekGuruController::class)->group(function () {
            Route::get('proyek/hasil', 'show');
            Route::get('proyek/hasil/detail/{id}', 'detail');
        });
        Route::prefix('pustaka')->group(function () {
            Route::resources([
                '/' => PustakaGuruController::class,
                'proposal' => ProposalGuruController::class,
                'refrensi' => RefrensiGuruController::class,
            ]);
        });
        Route::prefix('kuis')->group(function () {
            Route::resources([
                'kategori' => KategoriKuisGuruController::class,
                'soal' => SoalGuruController::class,
                'opsi' => OpsiGuruController::class,
                'hasil' => HasilGuruController::class,
            ]);
        });

        Route::post('/dashboard/storeAbsen', [DashboardGuruController::class, 'storeAbsen']);
    });
});

// Route Guru
Route::group(['middleware' => 'role:siswa'], function () {
    Route::prefix('siswa')->group(function () {
        // Route Siswa Start Here
        Route::get('/dashboard', [DashboardSiswaController::class, 'index'])->name('siswa.dashboard');
        Route::resources([
            'materi' => MateriSiswaController::class,
            'pustaka' => PustakaSiswaController::class,
            'kuis' => KuisSiswaController::class,
            'proyek' => ProyekSiswaController::class
        ]);
        Route::get('pustaka/proposal/detail', [PustakaSiswaController::class, 'detail'])->name('siswa.pustaka.detail');
    });
});

// Route Murid
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
