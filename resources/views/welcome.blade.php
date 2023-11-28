<!-- resources/views/welcome.blade.php -->

@extends('layouts.app')

@section('content')
    <h1 id='google-like-search'>Google-Like Search</h1>

    <form id="searchForm" action="{{ route('search') }}" method="get">
        @csrf
        <label for="keyword">Search:</label>
        <input type="text" id="keyword" name="keyword" required>
        <button id="searchButton" type="submit">Search</button>
    </form>

    <div id="searchResults"></div>
    {{-- <div id='textResults'></div>
    <div id="linkResults"></div> --}}

    <script src="{{ asset('js/search.js') }}"></script>
@endsection
