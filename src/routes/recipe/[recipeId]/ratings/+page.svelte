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
                throw new Error(`HTTP-fout! Status: ${response.status}`);
            }
            const data = await response.json();
            ratings.set(data);
            calculateAverageRating(data);
        } catch (error) {
            console.error("Fout bij ophalen:", error);
        }
    });
  
    function calculateAverageRating(data) {
        const totalRatings = data.reduce((acc, curr) => acc + curr.rating, 0);
        averageRating = totalRatings / data.length;
    }

    function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 10 - fullStars - halfStars;
    return '★'.repeat(fullStars) + '☆'.repeat(halfStars) + '☆'.repeat(emptyStars);
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
    <div class="back-button-container" style="position: relative; top: -10px; left: -200px;">
      <BackButton />
    </div>
    <div style="margin-top: 40px;">
      <h1><span style="font-weight: bold;">Beoordelingen voor Recept</span> <span style="font-weight: bold;">{recipeId}</span></h1>
    </div>
    <div class="average-rating" style="margin-top: 20px;">
      <span style="font-weight: bold;">Gemiddelde Beoordeling:</span><br>
      <span style="font-size: 24px;">{#each generateStars(averageRating) as star}<span>{star}</span>{/each}</span>
    </div>
  
    {#if $ratings.length > 0}
        <ul class="ratings-list">
            {#each $ratings as rating}
                <li class="rating-item">
                    <div class="rating-info">
                        <span class="rating">{rating.rating}/10</span>
                    </div>
                    {#if rating.message}
                      <p class="message">Bericht: {rating.message}</p>
                    {/if}
                </li>
            {/each}
        </ul>
    {:else}
        <p>Geen beoordelingen gevonden voor Recept {recipeId}</p>
    {/if}
  
    <a href={`/recipe/${recipeId}/addrating`} class="add-review-button">Voeg je eigen recensie toe</a>
    <div style="height: 75px;"></div>
  
    <BottomBar />
  </main>
  