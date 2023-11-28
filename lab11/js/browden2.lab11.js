function searchBooks() {
    const query = document.getElementById("searchInput").value;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => { //fetch function returns a Promise
            if (!response.ok) {
                throw new Error(`Network rresponse error`);
            }
            return response.json();//on successful response, return JSON body
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function displayResults(data) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (data.items) {
        data.items.forEach(item => {
            const volumeInfo = item.volumeInfo;
            const title = volumeInfo.title || "Unknown Title";
            const authors = volumeInfo.authors || ["Unknown Author"];

            const resultDiv = document.createElement("div");
            resultDiv.innerHTML = `<p><strong>Title:</strong> ${title}</p><p><strong>Authors:</strong> ${authors.join(", ")}</p>`;
            resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
}
