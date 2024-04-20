<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProyekResult extends Model
{
    use HasFactory;

    protected $table = 'proyek_results';

    protected $fillable = [
        'user_id',
        'proyek_id',
        'answer1',
        'answer2',
        'answer3',
        'answer_note',
        'answer_link',
        'konfirmasi1',
        'konfirmasi2',
        'konfirmasi3',
        'konfirmasi4',
        'nilai',
        // 'feedback'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function proyek()
    {
        return $this->belongsTo(Proyek::class, 'proyek_id');
    }
}
