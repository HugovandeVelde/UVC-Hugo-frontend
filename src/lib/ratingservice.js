let ratingsData = []; // Variable to store fetched ratings data
let requestedRating = {}; // Variable to store requested rating data

// Function to fetch ratings data
async function fetchRatings(recipeId) {
  try {
    const response = await fetch(`http://localhost:4007/recipe/${recipeId}/ratings`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    ratingsData = await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    ratingsData = []; // Set ratingsData to an empty array in case of an error
  }
}

// Function to add a new rating
async function addRating(recipeId, rating, message) {
  try {
    const response = await fetch(`http://localhost:4007/recipe/${recipeId}/addrating`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ rating, message })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("New rating added:", data);
  } catch (error) {
    console.error("Add rating error:", error);
  }
}

// Function to get ratings data
function getRatingsData() {
  return ratingsData;
}

// Function to get requested rating data
function getRequestedRating() {
  return requestedRating;
}

// Export the functions
export { fetchRatings, addRating, getRequestedRating, getRatingsData };
