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
        Schema::table('proyek_results', function (Blueprint $table) {
            $table->timestamp('tanggalSubmit1')->nullable();
            $table->timestamp('tanggalSubmit2')->nullable();
            $table->timestamp('tanggalSubmit3')->nullable();
            $table->timestamp('tanggalSubmit4')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('proyek_results', function (Blueprint $table) {
            $table->dropColumn('tanggalSubmit1');
            $table->dropColumn('tanggalSubmit2');
            $table->dropColumn('tanggalSubmit3');
            $table->dropColumn('tanggalSubmit4');
        });
    }
};
