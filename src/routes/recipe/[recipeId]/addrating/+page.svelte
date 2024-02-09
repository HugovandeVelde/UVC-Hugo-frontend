<!-- AddReview.svelte -->
<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { page } from "$app/stores"; // Import page store to access URL parameters
  
    let recipeId = $page.params.recipeId; // Get recipe ID from URL parameters
    let rating = "";
    let message = "";
  
    // Function to handle form submission
    async function handleSubmit(event) {
      event.preventDefault();
  
      // Send the review data to the server
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
  
        // If the review is successfully added, redirect to the ratings page for the recipe
        window.location.href = `/recipe/${recipeId}/ratings`;
      } catch (error) {
        console.error("Error adding review:", error);
      }
    }
  </script>
  
  <main>
    <h1>Add Your Own Review</h1>
    <form on:submit={handleSubmit}>
      <label for="rating">Rating (1-10):</label>
      <input type="number" id="rating" bind:value={rating} min="1" max="10" required>
  
      <label for="message">Message:</label>
      <textarea id="message" bind:value={message} rows="4"></textarea>
  
      <button type="submit">Submit Review</button>
    </form>
  </main>
  
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
  
    form {
      width: 100%;
      max-width: 400px;
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
  
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  