<?php

namespace App\Http\Controllers;

use App\Models\Programme;
use Illuminate\Http\Request;

class ProgrammeController extends Controller
{
    // Fetch all programmes
    public function index()
    {
        return response()->json(Programme::all(), 200);
    }

    // Create a new programme
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'rating' => 'required|integer|between:1,5',
            'comments' => 'nullable|string',
        ]);

        $programme = Programme::create($validated);

        return response()->json($programme, 201);
    }

    // Update an existing programme
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'rating' => 'required|integer|between:1,5',
            'comments' => 'nullable|string',
        ]);

        $programme = Programme::findOrFail($id);
        $programme->update($validated);

        return response()->json($programme, 200);
    }

    // Delete a programme
    public function destroy($id)
    {
        $programme = Programme::findOrFail($id);
        $programme->delete();

        return response()->json(['message' => 'Programme deleted successfully'], 200);
    }
}
