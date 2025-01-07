

// Add event listener for Enter key on the search input
document.querySelector(".search-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") { // Check if Enter key is pressed
      performSearch();
    }
  });

// Function to perform search
async function performSearch() {
  const query = document.querySelector(".search-input").value.toLowerCase();
  const resultsContainer = document.querySelector(".search-results");

  // Clear previous results
  if (resultsContainer) {
      resultsContainer.innerHTML = "";
  }

  if (!query) {
      if (resultsContainer) {
          resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
      }
      return;
  }

  const jsonFiles = [
      { file: "/json/index.json", html: "index.html" },
      { file: "/json/impact.json", html: "impact.html" },
      { file: "/json/involved.json", html: "involved.html" },
      { file: "/json/outreach.json", html: "outreach.html" }
  ];

  const results = [];

  try {
      // Fetch and search each JSON file
      for (let i = 0; i < jsonFiles.length; i++) {
          const { file, html } = jsonFiles[i];
          const response = await fetch(file);
          const data = await response.json();
          searchJSON(data, query, results, html); // Pass the html file for generating links
      }

      // Save the results to localStorage for use in recommendations.html
      localStorage.setItem("searchResults", JSON.stringify(results));

      // Optionally, redirect to recommendations.html
      window.location.href = "recommendations.html"; // This will take the user to recommendations.html
  } catch (error) {
      console.error("Error loading JSON files:", error);
      if (resultsContainer) {
          resultsContainer.innerHTML = "<p>An error occurred while loading data. Please try again later.</p>";
      }
  }
}

// Function to search through a single JSON file
function searchJSON(data, query, results, htmlFile) {
  // Loop through the keys of the JSON object
  for (const key in data) {
      const content = data[key];

      // Check if content is a string
      if (typeof content === "string" && content.toLowerCase().includes(query)) {
          results.push({
              title: key,
              description: content,
              link: `${htmlFile}#${key}`, // Link to the matching section in the corresponding HTML file
          });
      }

      // Check if content is an array
      if (Array.isArray(content)) {
          for (let j = 0; j < content.length; j++) {
              const item = content[j];
              for (const subKey in item) {
                  if (typeof item[subKey] === "string" && item[subKey].toLowerCase().includes(query)) {
                      results.push({
                          title: item.title || subKey,
                          description: item[subKey],
                          link: `${htmlFile}#${subKey}`, // Link to the matching section in the corresponding HTML file
                      });
                  }
              }
          }
      }

      // Check if content is an object
      if (typeof content === "object" && content !== null) {
          for (const subKey in content) {
              if (
                  typeof content[subKey] === "string" &&
                  content[subKey].toLowerCase().includes(query)
              ) {
                  results.push({
                      title: subKey,
                      description: content[subKey],
                      link: `${htmlFile}#${subKey}`, // Link to the matching section in the corresponding HTML file
                  });
              }
          }
      }
  }
}

// Retrieve search results from localStorage
const resultsContainer = document.querySelector(".search-results");
const searchResults = JSON.parse(localStorage.getItem("searchResults"));

if (searchResults && searchResults.length > 0) {
    searchResults.forEach(result => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("search-result-item");
        resultItem.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
            <a href="${result.link}" target="_blank">Go to ${result.title}</a>
        `;
        resultsContainer.appendChild(resultItem);
    });
} else {
    resultsContainer.innerHTML = "<p>No results found.</p>";
}