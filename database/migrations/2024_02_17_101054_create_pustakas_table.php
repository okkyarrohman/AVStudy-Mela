<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pustakas', function (Blueprint $table) {
            $table->id();
            $table->string('judul')->nullable();
            $table->string('sumber')->nullable();
            $table->string('link')->nullable();
            $table->string('cover')->nullable();
            $table->string('konten')->nullable();
            $table->string('tipe')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pustakas');
    }
};
