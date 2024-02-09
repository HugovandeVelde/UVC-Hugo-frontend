<script>
  import { page } from "$app/stores";
  import { requestedAllData } from "../../../lib/users";
  import { requestedAllRecipeData } from "../../../lib/index";
  import { requestedAllIngredients } from "../../../lib/ingredients";
  import { requestedAllSteps } from "../../../lib/steps";
  import BottomBar from "../../../lib/components/BottomBar.svelte";

  const recipeId = $page.params.recipeId;
  let numberOfInvites = 1;
  function changeNumberOfInvites(value) {
    numberOfInvites = +value;
  }
</script>

<body class="bg-[#F0FFEA] flex flex-col min-h-screen pt-5">
  <header>
    <h1 class="title">{requestedAllRecipeData[recipeId].name}</h1>
  </header>
  <main>
    <div class="line"></div>
    <table>
      <th></th>
      <tr >
        <tr>
          <td>
            <p class='questions'>Hoe veel mensen wil je uitnodigen:</p>
          </td>
          <td><input placeholder="3" /></td>
        </tr>
        <tr>
          <td>
            <p class='questions'>Wanneer wil je mensen uitnodigen:</p>
          </td>
          <td><input type="date" /></td>
        </tr>
        <tr>
          <td>
            <p class='questions'>Hoelaat wil je mensen uitnodigen:</p>
          </td>
          <td><input type="time" /></td>
        </tr>
        <tr>
          <td>
            <p class='questions'>Waar wil je mensen uitnodigen:</p>
          </td>
          <td><input placeholder="3" /></td>
        </tr>
        <tr>
          <td>
            <p class='questions'>Hoe duur zal het eten zijn:</p>
          </td>
          <td><input placeholder="€15,50" /></td>
        </tr>
    </table>
    <div class="line mt-4"></div>
    <div class='deelLinkContainer'>
      <p>Deel de onderstaande link met alle mensen die je wilt uitnodigen:</p>
      <p class='link'>https://voorbeeldlink</p>
    </div>
  </main>
</body>

<style>
  header,
  input {
    text-align: center;
  }
  header {
    font-size: 50px;
  }
  main {
    margin-top: 8%;
  }
  input {
    width: 140px;
    border: black solid 1px;
    border-radius: 5px;
  }
  table {
    margin-top: 5px;
    margin-left: 5%;
    margin-right: 5%;
  }
  .deelLinkContainer{
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }
  .link{
    color: rgb(83, 83, 83);
    text-decoration: underline solid rgb(83, 83, 83);
  }
  .questions {
    margin-bottom: 10px;
  }
  table,
  th,
  td {
      /* border: 1px solid; */
      border-collapse: separate;
  }
  .line {
      height: 1px;
      width: 95%;
      margin-left: 2.5%;
      margin-right: 2.5%;
      border: 1px solid black;
    }
  /* tr{
    padding-bottom: 100px;
  } */
</style>
