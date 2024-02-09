<!-- RecipeRatings.svelte -->
<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { page } from "$app/stores";
  import BottomBar from "../../../../lib/components/BottomBar.svelte";
  import BackButton from "../../../../lib/components/BackButton.svelte";

  let recipeId = $page.params.recipeId;
  let ratings = writable([]);
  let averageRating = 0;

  onMount(async () => {
      try {
          const response = await fetch(`http://localhost:4007/recipe/${recipeId}/ratings`);
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          ratings.set(data);
          calculateAverageRating(data);
      } catch (error) {
          console.error("Fetch error:", error);
      }
  });

  function calculateAverageRating(data) {
      const totalRatings = data.reduce((acc, curr) => acc + curr.rating, 0);
      averageRating = totalRatings / data.length;
  }
</script>

<style>
  main {
      background-color: #f0ffea;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 20px;
  }

  h1 {
      font-size: 24px;
      margin-bottom: 20px;
  }

  .average-rating {
      font-size: 18px;
      margin-bottom: 20px;
  }

  .ratings-list {
      list-style-type: none;
      padding: 0;
      margin-top: 0;
  }

  .rating-item {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 15px;
      margin-bottom: 10px;
  }

  .rating-info {
      margin-bottom: 5px;
  }

  .rating {
      font-weight: bold;
  }

  .message {
      color: #666;
  }

  .back-button-container {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .add-review-button {
    margin-top: 20px;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>

<main style="padding-top: 20px;">
  <div class="back-button-container">
    <BackButton />
  </div>
  <h1>Ratings for Recipe {recipeId}</h1>
  <div class="average-rating">Average Rating: {averageRating.toFixed(1)}/10</div>

  {#if $ratings.length > 0}
      <ul class="ratings-list">
          {#each $ratings as rating}
              <li class="rating-item">
                  <div class="rating-info">
                      <span class="rating">{rating.rating}/10</span>
                  </div>
                  {#if rating.message}
                    <p class="message">Message: {rating.message}</p>
                  {/if}
              </li>
          {/each}
      </ul>
  {:else}
      <p>No ratings found for Recipe {recipeId}</p>
  {/if}

  <a href={`/recipe/${recipeId}/addrating`} class="add-review-button">Add Your Own Review</a>

  <BottomBar />
</main>
