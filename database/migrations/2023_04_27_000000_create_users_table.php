<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();

            $table->unsignedBigInteger('education_id')->nullable();
            $table->unsignedBigInteger('city_id')->nullable();

            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
            // индексы
            $table->index('education_id', 'user_education_idx');
            $table->index('city_id', 'user_city_idx');
            // внешние связи
            $table->foreign('education_id', 'user_education_fk')->on('education')->references('id');
            $table->foreign('city_id', 'user_city_fk')->on('cities')->references('id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
