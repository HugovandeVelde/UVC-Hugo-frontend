<script>
    import { requestedRecipeData } from '../lib/index';
    import { requestedAllRecipeData } from '../lib/index';
  console.log(requestedRecipeData);
  console.log(requestedAllRecipeData);
  </script>
   <main class="bg-[#F0FFEA] flex flex-col items-center justify-center w-screen h-screen pt-5">
    <div class="w-full text-center mb-5">
      <!-- Add the URL to your logo here -->
      <img src="/src/img/logo.png" alt="Our Logo" class="max-w-full h-auto mix-blend-multiply">
    </div>
    <p style="max-width: 80%; margin: 0 auto;" class="text-sm text-gray-800 my-5 text-center">
      Ontdek gezonde recepten en kook samen met anderen! Wil jij ook meedoen? Registreer je dan snel!
  </p>
    <div class="flex gap-4 mb-8">
      <a href="http://localhost:5173/register" class="bg-[#008080] hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none">Register</a>
      <a href="http://localhost:5173/login" class="bg-[#228B22] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Login</a>
    </div>
    <div class="w-full flex flex-col items-center">
      <h2 class="font-bold text-2xl text-center mb-5">Populair</h2>
      <div class="flex justify-center w-full mb-5">
        <!-- Box 1 -->
        <div class="w-1/3 p-2">
          <div class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]">
            <img src="./src/img/pastaPesto.png" alt="pastaPesto" class="w-32 h-24 object-cover" />
            <div class="border-b-2 border-black w-full"></div>
            <div class="p-2"><p>{ requestedAllRecipeData[1].name }</p></div>
          </div>
        </div>

        <!-- Box 2 -->
        <div class="w-1/3 p-2">
          <div class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]">
            <img src="./src/img/kipTeriyaki.png" alt="KipTeriyaki" class="w-32 h-24 object-cover" />
            <div class="border-b-2 border-black w-full"></div>
            <div class="p-2">{ requestedAllRecipeData[1].name }</div>
          </div>
        </div>

        <!-- Box 3 -->
        <div class="w-1/3 p-2">
          <div class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]">
            <img src="./src/img/shoarmaBowl.png" alt="shoarmaBowl" class="w-32 h-24 object-cover" />
            <div class="border-b-2 border-black w-full"></div>
            <div class="p-2">{ requestedAllRecipeData[2].name }</div>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col items-center">
        <h2 class="font-bold text-2xl text-center mb-5">Recepten</h2>
        <div class="flex justify-center w-full mb-5">
        <!-- Box 1 -->
        <div class="w-1/3 p-2">
          <div class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]">
            <img src="./src/img/kipTeriyaki.png" alt="kipTeriyaki2" class="w-32 h-24 object-cover" />
            <div class="border-b-2 border-black w-full"></div>
            <div class="p-2">{ requestedAllRecipeData[3].name }</div>
          </div>
        </div>

        <!-- Box 2 -->
        <div class="w-1/3 p-2">
          <div class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]">
            <img src="./src/img/kipTeriyaki.png" alt="ja" class="w-32 h-24 object-cover" />
            <div class="border-b-2 border-black w-full"></div>
            <div class="p-2">{ requestedAllRecipeData[4].name }</div>
          </div>
        </div>

        <!-- Box 3 -->
        <div class="w-1/3 p-2">
          <div class="flex flex-col items-center border-2 border-black rounded-lg overflow-hidden bg-[#50c878]">
            <img src="./src/img/kipTeriyaki.png" alt="nee" class="w-32 h-24 object-cover" />
            <div class="border-b-2 border-black w-full"></div>
            <div class="p-2">{ requestedAllRecipeData[5].name }</div>
          </div>
        </div>
      </div>
    </main>