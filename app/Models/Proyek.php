<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyek extends Model
{
    use HasFactory;

    protected $table = 'proyeks';

    protected $fillable = [
        'nama',
        'tenggat',
        'step1',
        'deskripsi1',
        'step2',
        'deskripsi2',
        'step3',
        'deskripsi3',
        'step4',
        'deskripsi4',
    ];

    public function proyekResult()
    {
        return $this->hasMany(ProyekResult::class);
    }
}
