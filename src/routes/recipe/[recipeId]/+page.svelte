<!-- YourComponent.svelte -->
<script>
  import { page } from "$app/stores";
  import { requestedAllData } from "../../../lib/users";
  import { requestedAllRecipeData } from "../../../lib/index";
  import { requestedAllIngredients } from "../../../lib/ingredients";
  import { requestedAllSteps } from "../../../lib/steps";
  import BottomBar from "../../../lib/components/BottomBar.svelte";
  import BackButton from "../../../lib/components/BackButton.svelte";

  const recipeId = $page.params.recipeId - 1;
  let recipe;
</script>

<div class="bg-[#F0FFEA]">
  <BackButton />
</div>
<main
  class="bg-[#F0FFEA] flex flex-col items-center justify-center min-h-screen pt-5"
>
  <p class="invisible">{(recipe = requestedAllRecipeData[recipeId])}</p>
  <table width="90%">
    <tr>
      <th colspan="5">
        <h2>{recipe.name}</h2>
      </th>
    </tr>
    <tr>
      <td colspan="5" class="center">
        <div class="center">
          {#each requestedAllData as user}
            {#if user.id === recipe.creator_id}
              <h5 class="mb-8">{user.name}</h5>
              <div class="ratingButton">
                <a class="ratingLink" href={`${recipeId + 1}/ratings`}>Bekijk ratings</a>
              </div>
            {/if}
          {/each}
        </div>
      </td>
    </tr>
  </table>
  <div class="line"></div>
  <table>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/klok.png" alt="klok" class="logoImg" />
      </td>
      <td colspan="2">{recipe.prepTime}</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/kcalLogo.png" alt="kcal" class="logoImg" />
      </td>
      <td colspan="2">{recipe.energy}</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/olieLogo.png" alt="vet" class="logoImg" />
      </td>
      <td colspan="2">{recipe.fat} vetten</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/eiwittenLogo.png" alt="eiwit" class="logoImg" />
      </td>
      <td colspan="2">{recipe.proteine} eiwitten</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/tarweLogo.png" alt="tarwe" class="logoImg" />
      </td>
      <td colspan="2">{recipe.carbohydrate} koolhydraten</td>
    </tr>
    <tr>
      <td class="logoVak">
        <img src="./../src/img/mixerLogo.png" alt="mixer" class="logoImg" />
      </td>
      <td colspan="2">{recipe.kitchenware}</td>
    </tr>
  </table>
  <div class="line"></div>
  <table width="90%">
    <th colspan="5">
      <h2>Ingredienten:</h2>
    </th>
    {#each requestedAllIngredients as ingredient}
      {#if ingredient.recipeId === recipe.id}
        <tr>
          <td class="hoeveelheidVak">
            <p>{ingredient.Hoeveelheid}</p>
          </td>
          <td>
            <p class="ml-2">{ingredient.ingredientName}</p>
          </td>
        </tr>
      {/if}
    {/each}
  </table>
  <div class="line"></div>
  <table width="90%">
    <th colspan="5">
      <h2>Bereidingswijze:</h2>
    </th>
    {#each requestedAllSteps as stap}
      {#if stap.recipeId === recipe.id}
        <tr>
          <td VALIGN="top">
            <p>{stap.stepNr}</p>
          </td>
          <td>
            <p>{stap.instructie}</p>
          </td>
        </tr>
      {/if}
    {/each}
  </table>
  <div class="line"></div>
  <div class="invite-text-container" style="width: 60%; text-align: center; margin: 20px auto;">
    <p>Wil je mensen uitnodigen om mee te eten? Klik op de onderstaande knop!</p>
  </div>

  <div class='shareButton'>
    <a class='share' href="/shareInvitation/{recipeId + 1}">Nodig gasten uit</a>
  </div>
  <BottomBar />


  <br />
  <br />
  <br />
  <br />
</main>

<style>
  @media (max-width: 640px) {
    main {
      padding: 0px;
    }
    .hoeveelheidVak {
      text-align: right;
    }
    .line {
      height: 1px;
      width: 95%;
      margin-left: 2.5%;
      margin-right: 2.5%;
      border: 1px solid black;
    }
    h2 {
      font-size: 1.5rem;
      font-weight: bold;
    }
    h5 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    /* table,
    th,
    td {
      border: 1px solid black;
      border-collapse: collapse;
    } */
    .logoImg {
      height: 20px;
      width: 20px;
      display: block;
      margin-left: 70%;
      margin-right: auto;
    }
    table {
      margin: 5%;
    }
    .logoVak,
    .hoeveelheidVak {
      width: 30%;
    }
    .center {
      text-align: center;
    }
    .shareButton {
      background-color: rgb(34 197 94);
      border: solid black 1px;
      border-radius: 5px;
    }
    .share{
      margin:2px;
    }
    .invite-text-container {
    background-color: #fff; /* Set background color if needed */
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .ratingButton {
  background-color: rgb(34, 197, 94);
  border: solid black 1px;
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px 10px;
  display: inline-block;
}

.ratingLink {
  color: white;
  text-decoration: none;
}

.ratingButton:hover {
  background-color: rgb(24, 167, 74);
}
  
  }

</style>
