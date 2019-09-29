<?php
use Illuminate\Database\Seeder;
use App\Project;
use \Illuminate\Support\Facades\DB;
class ProjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->truncate();

        $status = ['draft', 'published', 'unpublished'];
        $type = ['music', 'cine', 'videogame', 'other'];
        for($i = 0; $i < 5; $i++) {
            Project::create(array(
                'name' => 'proyecto ' . $i,
                'description' => 'descripción del proyecto ' . $i,
                'status' => $status[$i%count($status)],
                'type' => $type[$i%count($type)],
            ));
        }
    }
}