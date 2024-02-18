<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pustaka extends Model
{
    use HasFactory;
    protected $table = 'pustakas';

    protected $fillable = [
        'judul',
        'sumber',
        'link',
    ];
}
