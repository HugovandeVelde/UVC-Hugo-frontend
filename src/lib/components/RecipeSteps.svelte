<!-- YourComponent.svelte -->
<script>
    import RecipeJavascript from './RecipeJavascript.svelte';
  import ExternalScript from './RecipeJavascript.svelte';

  const steps = [
    `Stap 1: Kook de spaghetti.
    \nBreng een grote pan met water aan de kook.
    \nVoeg een snufje zout toe aan het kokende water.
    \nKook de spaghetti volgens de aanwijzingen op de verpakking totdat het beetgaar is.
    \nGiet de spaghetti af in een vergiet en zet deze opzij.`,
    `Stap 2: Rooster de pijnboompitten
  \nVerhit een koekenpan op middelhoog vuur.
  \nVoeg de pijnboompitten toe en rooster ze gedurende ongeveer 3 minuten, of tot ze goudbruin zijn.
  \nHaal de geroosterde pijnboompitten van het vuur en leg ze op een bord om af te koelen.`,
    `Stap 3: Maak de pesto
  \nPlaats de geroosterde pijnboompitten, geraspte kaas en knoflook in een keukenmachine.
  \nVoeg de verse basilicumblaadjes en olijfolie toe.
  \nPulseer de ingrediënten in de keukenmachine tot een smeuïge pesto ontstaat.
  \nBreng de pesto op smaak met peper en zout.`,
    `Stap 4: Combineer met de spaghetti
  \nSchep ongeveer 4 eetlepels van de pesto door de gekookte spaghetti en meng goed.`,
    `Stap 5: Serveer
  \nVerdeel de met pesto gegarneerde spaghetti over 6 borden.
  \nOptioneel: Garneer met extra kaas en basilicumblaadjes voor een aantrekkelijke presentatie.
  \nServeer de gerechten onmiddellijk. Eet smakelijk!`,
  ];


    let currentStep = 0;

    function nextStep() {
      if (currentStep < steps.length - 1) {
        currentStep += 1;
      }
    }

    function prevStep() {
      if (currentStep > 0) {
        currentStep -= 1;
      }
    }

    import { goto } from '$app/navigation';

function navigateToAnotherPage() {
  // Replace '/your-target-page' with the path of the page you want to navigate to
  goto('recipe');
}


  </script>
  <style>
    /* Add TailwindCSS classes */
    /* For mobile screens */
    @media (max-width: 640px) {


      .welcome-text {
        /* Style for the welcome text */
        font-size: 24px;
        text-align: center;
        margin-bottom: 20px; /* Adjust space between text and boxes */
      }
      .boxes-container {
        /* New class for the container holding the boxes */
        display: flex;
        justify-content: space-around; /* Adjust alignment of boxes */
        width: 100%; /* Take full width */
      }
      .box {
      /* Style for the boxes */

      border: 2px solid #000; /* Border around the boxes */
      margin-bottom: 20px; /* Adjust space between boxes */
      border-radius: 8px; /* Rounded edges */
      overflow: hidden; /* Ensure content doesn't overflow */
      display: flex; /* Make the box a flex container */
      flex-direction: column; /* Stack items vertically */
      align-items: center; /* Center items horizontally */
      background-color: #50C878;
      max-width: 240px;
      max-height: 200px;
      margin-left: 0px;
    }
    .box img {
      /* Style for images */
      width: 100%; /* Ensure the image fills the box */
      height: 100%; /* Ensure the image fills the box */
      object-fit: cover; /* Cover the box with the image */
      border-radius: 5px; /* Round the image corners */
    }


    a {
      text-decoration: none;
      color: white;
      margin: 0px;
    }
    }

    main {
      text-align: center;
      padding: 0px;
    }

    button {
      font-size: 16px;
      padding: 10px 20px;
      margin-top: 20px;
      cursor: pointer;
    }

    label {
      color: black;
    }

    /* Give each checkbox a black outline */
    input[type="checkbox"] {
      border: 1px solid black;
    }

    h3 {
      max-height: 800px;
    }

    .steps {
      max-height: 800px;
      word-wrap: break-word;
    }

    html {
      overflow: hidden;
      margin-left: 0px;
    }

    head {

    margin-left: 0px;
    }

    body {
            margin: 0;
        }

    .title h3 {
      font-size: 1.5rem; /* Adjust the font size as needed */
    font-weight: bold;
    }


  </style>
  <main>

    <div class="bg-cover bg-center"
    style="background-image: url('./src/img/background.png')">


  <div class="mobile-bg w-screen h-screen">
    <h1 class="welcome-text">Pasta Pesto</h1>

    <!-- Boxes container -->
    <div class="boxes-container">
      <!-- Box 1 -->
      <div class="box">
        <img src="./src/img/pastaPesto.png" alt="Image 1" />


      </div>
    </div>
    	<div class="title">
    <h3>Bereidingswijze</h3>
      </div>

    <div class="steps">
    <h3>{steps[currentStep]}</h3>
    </div>
    <div class="flex justify-between">
      <button button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={prevStep} disabled={currentStep === 0}>Vorige stap</button>
    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={nextStep} disabled={currentStep === steps.length - 1}>Volgende stap</button>
   </div>

   <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" on:click={navigateToAnotherPage}>Terug</button>


    <!-- <nav class="bg-gray-800 p-4">

      <div class="container mx-auto flex justify-between items-center">

        <img src="./src/img/shariqueen.png" alt="Profile Image" />


        <div class="space-x-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            yo mama
          </button>
        </div>
      </div>
    </nav> -->
     <!-- <nav class="bg-blue-500 p-4">
      <div class="container mx-auto flex justify-between items-center">

          <a href="#" class="text-white text-xl font-bold">My Website</a>


          <div class="space-x-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Click me
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Click me
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Click me
            </button>
          </div>
      </div>
  </nav> -->
  </div>
  </div>
  <RecipeJavascript />
  </main>