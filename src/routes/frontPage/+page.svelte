<script>
    import BottomBar from '../../lib/components/BottomBar.svelte';
    import { requestedRecipeData } from '../../lib/index';
    import { requestedAllRecipeData } from '../../lib/index';
  console.log(requestedRecipeData);
  console.log(requestedAllRecipeData);
  </script>
    <main>
<div class="mobile-bg w-screen h-screen">
  <h1 class="welcome-text"><strong>Welkom bij Eat'nShare</strong></h1>
  <h2 class="populair-text"><strong>Populair</strong></h2>

  <!-- Boxes container -->
  <div class="boxes-container-popular">
    <!-- Box 1 -->
    <div class="box">
      <img src="./src/img/pastaPesto.png" alt="pastaPesto" />
      <div class="line" />
      <div class="box-text" id="recipe1"><p>{ requestedAllRecipeData[1].name }</p></div>
    </div>

    <!-- Box 2 -->
    <div class="box">
      <img src="./src/img/kipTeriyaki.png" alt="KipTeriyaki" />
      <div class="line" />
      <div class="box-text">{ requestedAllRecipeData[1].name }</div>
    </div>

    <!-- Box 3 -->
    <div class="box">
      <img src="./src/img/shoarmaBowl.png" alt="shoarmaBowl" />
      <div class="line" />
      <div class="box-text">{ requestedAllRecipeData[2].name }</div>
    </div>
  </div>
  <h2 class="recepten-text"><strong>Recepten</strong></h2>

  <div class="boxes-container-recipes">
    <div class="box">
      <img src="./src/img/kipTeriyaki.png" alt="kipTeriyake2" />
      <div class="line" />
      <div class="box-text">{ requestedAllRecipeData[3].name }</div>
    </div>
    <div class="box">
      <img src="./src/img/kipTeriyaki.png" alt="ja" />
      <div class="line" />
      <div class="box-text">{ requestedAllRecipeData[4].name }</div>
    </div>
    <div class="box">
      <img src="./src/img/kipTeriyaki.png" alt="nee" />
      <div class="line" />
      <div class="box-text">{ requestedAllRecipeData[5].name }</div>
    </div>
  </div>
  <div class="flex gap-4">
    <a href="http://localhost:5173/register" class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none inline-block">Register</a>
    <a href="http://localhost:5173/login" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none inline-block">Login</a>
  </div>
</div>

<style>
  /* Add TailwindCSS classes */
  /* For mobile screens */
  @media (max-width: 640px) {
    .mobile-bg {
      background-image: url('./src/img/background.png'); /* Light green color */
      /* You can customize this color by changing the hex code */
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px; /* Adjust this padding as needed */
    }
    .welcome-text {
      /* Style for the welcome text */
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px; /* Adjust space between text and boxes */
    }
    .populair-text {
      font-size: 20px;
      text-align: left;
      margin-bottom: 20px;
    }
    .recepten-text {
      font-size: 20px;
      text-align: left;
      margin-bottom: 20px;
    }
    .boxes-container-popular {
      /* New class for the container holding the boxes */
      display: flex;
      justify-content: space-around; /* Adjust alignment of boxes */
      width: 100%; /* Take full width */
    }
    .box {
      /* Style for the boxes */
      width: 30%; /* Adjust box width */
      border: 2px solid #000; /* Border around the boxes */
      margin-bottom: 20px; /* Adjust space between boxes */
      border-radius: 8px; /* Rounded edges */
      overflow: hidden; /* Ensure content doesn't overflow */
      display: flex; /* Make the box a flex container */
      flex-direction: column; /* Stack items vertically */
      align-items: center; /* Center items horizontally */
      background-color: #50c878;
    }
    .box img {
      /* Style for images */
      width: 100%; /* Ensure the image fills the box */
      height: 100%; /* Ensure the image fills the box */
      object-fit: cover; /* Cover the box with the image */
      border-radius: 5px; /* Round the image corners */
    }
    .box-text {
      /* Style for text below images */
      margin: 10px 0; /* Adjust space between image and text */
    }
    .line {
      /* Style for the line */
      width: 100%;
      border-bottom: 1px solid black; /* Line under the image */
      margin-bottom: 10px; /* Adjust space between image and line */
    }
    .boxes-container-recipes {
      /* New class for the container holding the boxes */
      display: flex;
      justify-content: space-around; /* Adjust alignment of boxes */
      width: 100%; /* Take full width */
    }
  }
</style>
    <!-- Other components or content -->
    <BottomBar />
  </main>
