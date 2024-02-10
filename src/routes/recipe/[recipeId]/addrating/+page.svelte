<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import { page } from "$app/stores"; // Import the page store to access URL parameters
  import BottomBar from "../../../../lib/components/BottomBar.svelte";
  import BackButton from "../../../../lib/components/BackButton.svelte";

  let recipeId = $page.params.recipeId; // Get recipe ID from URL parameters
  let rating = "";
  let message = "";

  // Function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();

    // Send review data to the server
    try {
      const response = await fetch(`http://localhost:4007/recipe/${recipeId}/addrating`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ rating, message })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // If the rating is successfully added, redirect to the recipe ratings page
      window.location.href = `/recipe/${recipeId}/ratings`;
    } catch (error) {
      console.error("Error adding rating:", error);
    }
  }
</script>

<main style="display: flex; flex-direction: column; align-items: center; justify-content: flex-start; min-height: 100vh; padding: 20px; background-color: #f0ffea;">
  <div style="position: absolute; top: 20px; left: 20px;">
    <BackButton />
  </div>

  <div style="margin-top: 120px; display: flex; flex-direction: column; align-items: center;">
    <h1>Voeg je eigen recensie toe</h1>

    <form on:submit={handleSubmit} style="width: 100%; max-width: 400px;">
      <label for="rating">Beoordeling (1-10):</label>
      <input type="number" id="rating" bind:value={rating} min="1" max="10" required>

      <label for="message">Bericht:</label>
      <textarea id="message" bind:value={message} rows="4"></textarea>

      <div class="flex justify-center">
        <button type="submit" style="margin-top: 20px; padding: 10px 20px; background-color: #007bff; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Beoordeling verzenden</button>
      </div>
      
    </form>
  </div>

  <BottomBar />
</main>

<style>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  label {
    margin-top: 10px;
    display: block;
  }

  input, textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

</style>
