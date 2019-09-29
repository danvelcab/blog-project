<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProjectsTable extends Migration {

	public function up()
	{
		Schema::create('projects', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->string('name', 45);
			$table->text('description')->nullable();
			$table->enum('status', array('draft', 'published', 'unpublished'));
			$table->enum('type', array('music', 'cine', 'videogame', 'other'));
		});
	}

	public function down()
	{
		Schema::drop('projects');
	}
}