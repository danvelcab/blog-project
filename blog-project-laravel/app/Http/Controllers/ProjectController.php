<?php

namespace App\Http\Controllers;
use App\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class ProjectController extends Controller
{
    public function index(){
        $projects = Project::all();
        return response()->json(['data' => $projects]);
    }
    public function show($id) {
        $project = Project::find($id);
        return response()->json(['data' => $project]);
    }
    public function store(Request $request) {
        $project = new Project();
        $fields = ['name', 'description', 'status', 'type']; // Estos son los campos que puede venir en el request
        foreach ($fields as $field) {
            if($request->has($field)) {
                $project->$field = $request->get($field);
            }
        }
        $project->save();
        return response()->json(['data' => $project]);
    }
    public function update(Request $request, $id) {
        $project = Project::find($id);
        $fields = ['name', 'description', 'status', 'type']; // Estos son los campos que puede venir en el request
        foreach ($fields as $field) {
            if($request->has($field)) {
                $project->$field = $request->get($field);
            }
        }
        if($project->isDirty()) { // Solo guardamos si ha cambiado algún campo
            $project->save();
            Log::error('hemos guardado');
        }
        return response()->json(['data' => $project]);
    }
    public function destroy($id) {
        Project::find($id)->delete();
        return response()->json(['data' => true]);
    }
}
