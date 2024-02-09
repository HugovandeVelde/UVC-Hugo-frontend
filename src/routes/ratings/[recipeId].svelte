<!-- src/routes/ratings/[recipeId].svelte -->
<script>
    import { page } from "$app/stores";
    import { requestedAllRecipeData } from "../../lib/index";
    import { requestedAllData } from "../../lib/users";
    import { requestedAllIngredients } from "../../lib/ingredients";
    import { requestedAllSteps } from "../../lib/steps";
    import { fetchData } from "../../lib/ratingsService"; // Import the function to fetch ratings data
  
    const recipeId = $page.params.recipeId - 1;
    let recipe;
    let ratings = []; // Store ratings data here
    fetchData(recipeId); // Fetch ratings data when the component is loaded
  
    async function fetchData(recipeId) {
      try {
        const response = await fetch(`http://localhost:4007/recipe/${recipeId}/ratings`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        ratings = await response.json();
  
        // Verwerk de ontvangen data
        recipe = requestedAllRecipeData[recipeId];
      } catch (error) {
        // Handel fouten af
        console.error("Fetch error:", error);
      }
    }
  </script>
  
  <div class="bg-[#F0FFEA]">
    <BackButton />
  </div>
  <main class="bg-[#F0FFEA] flex flex-col items-center justify-center min-h-screen pt-5">
    <h2>{recipe.name}</h2>
    <!-- Display ratings here -->
    {#each ratings as rating}
      <div>
        <p>Rating: {rating.rating}</p>
        <p>Message: {rating.message}</p>
      </div>
    {/each}
    <BottomBar />
  </main>
  
  <style>
    /* Your styles here */
  </style>
  