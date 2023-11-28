// public/js/search.js

const keywordInput = document.getElementById("keyword");
const searchResultsDiv = document.getElementById("searchResults");

// Variable to track if the search button was clicked
let isSearchButtonClicked = false;

// Function to fetch and render search results
function fetchAndRenderResults(keyword) {
    fetch(`/search?keyword=${encodeURIComponent(keyword)}`)
        .then((response) => response.json())
        .then((posts) => {
            // Render results based on typing or clicking the "Search" button
            searchResultsDiv.innerHTML = isSearchButtonClicked
                ? renderTextResults(posts)
                : renderLinkResults(posts);
        });
}

// Handle form submission
document
    .getElementById("searchForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        const keyword = keywordInput.value;

        // Set the flag to indicate the search button was clicked
        isSearchButtonClicked = true;

        // Fetch and render results
        fetchAndRenderResults(keyword);
    });

// Handle input changes
keywordInput.addEventListener("input", function () {
    const keyword = keywordInput.value;

    if (keyword.length === 0 && !isSearchButtonClicked) {
        // If the input is empty and not clicking the search button,
        // do not clear the results, just return
        return;
    }

    // Reset the flag when typing
    isSearchButtonClicked = false;

    // Fetch and render results
    fetchAndRenderResults(keyword);
});

// Function to render link results
function renderLinkResults(posts) {
    if (posts.length === 0) {
        return "<p>No results found.</p>";
    }

    const resultHtml = posts
        .map(
            (post) =>
                `<div class='suggestions'><a href="#" class=" suggestion-item search-result" data-post-id="${post.id}">${post.title}</a></div>`
        )
        .join("");

    return resultHtml;
}

// Function to render text results
function renderTextResults(posts) {
    if (posts.length === 0) {
        return "<p>No results found.</p>";
    }

    const resultHtml = posts
        .map((post) => `<div><h3>${post.title}</h3><p>${post.body}</p></div>`)
        .join("");

    return resultHtml;
}

// Handle clicking on a suggestion item or search result
searchResultsDiv.addEventListener("click", function (event) {
    if (event.target.classList.contains("search-result")) {
        event.preventDefault();
        const postId = event.target.dataset.postId;
        fetch(`/search/${postId}`)
            .then((response) => response.json())
            .then((post) => {
                searchResultsDiv.innerHTML = `<div><h1>${post.title}</h1><p>${post.body}</p></div>`;
            });
    }
});

// ... (your existing code)

// ... (your existing code)
