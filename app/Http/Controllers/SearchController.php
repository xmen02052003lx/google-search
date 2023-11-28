<?php

// app/Http/Controllers/SearchController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $keyword = $request->input('keyword');
        $posts = Post::where('title', 'like', "%$keyword%")
                     ->orWhere('body', 'like', "%$keyword%")
                     ->get(['id', 'title', 'body']);

        return response()->json($posts);
    }

    public function show($id)
    {
        $post = Post::findOrFail($id);

        return response()->json($post);
    }
}
