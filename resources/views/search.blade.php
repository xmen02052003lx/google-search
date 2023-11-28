<!-- resources/views/search.blade.php -->

@extends('layouts.app')

@section('content')
    <h1>Search Results for "{{ $keyword }}"</h1>

    @if(count($posts) > 0)
        <ul id="searchResults" class='search-result-container'>
            @foreach($posts as $post)
                <li class='search-result'>
                    <h3>{{ $post->title }}</h3>
                    <p>{{ $post->body }}</p>
                </li>
            @endforeach
        </ul>
    @else
        <p>No results found.</p>
    @endif
    <div id="pagination" class="text-center mt-4">
        {{ $results->links() }}
    </div>
@endsection
