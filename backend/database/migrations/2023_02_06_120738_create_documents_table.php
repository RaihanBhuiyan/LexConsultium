<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\BusinessTypes;
use App\Models\User;
return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id('id');
            $table->string('reference');
            $table->date('e_date');           
            $table->foreignIdFor(BusinessTypes::class);
            $table->string('bank');
            $table->string('b_name');
            $table->foreignIdFor(User::class);
            $table->date('r_date');
            $table->date('d_date');
            $table->integer('collect_by');
            $table->string('work_type');
            $table->string('status');
            $table->float('bill_send');
            $table->float('bill_received');
            $table->float('actual_cost');
            $table->float('profite');
            $table->string('file_back');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('documents');
    }
};
