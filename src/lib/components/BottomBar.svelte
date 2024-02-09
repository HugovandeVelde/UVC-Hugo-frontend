<script>
  import HomeIcon from "~icons/bxs/home";
  import SearchIcon from "~icons/iconamoon/search";
  import BookmarkIcon from "~icons/iconamoon/bookmark-duotone";
  import AccountIcon from "~icons/mdi/account-circle";
</script>

<main>
  <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-green-400 border-t border-green-200 dark:border-green-600">
    <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <button type="button" class="inline-flex flex-col items-center justify-center px-5 group">
        <HomeIcon />
        <span class="text-sm text-black dark:text-white"><a href="/dashboard">Thuispagina</a></span>
      </button>
      <button type="button" class="inline-flex flex-col items-center justify-center px-5 group">
        <SearchIcon />
        <span class="text-sm text-black dark:text-white"><a href="/search">Zoeken</a></span>
      </button>
      <button type="button" class="inline-flex flex-col items-center justify-center px-5  group">
        <BookmarkIcon />
        <span class="text-sm text-black dark:text-white"><a href="/saved">Opgeslagen</a></span>
      </button>
      <button type="button" class="inline-flex flex-col items-center justify-center px-5  group">
        <AccountIcon />
        <span class="text-sm text-black dark:text-white"><a href="/account">Account</a></span>
      </button>
    </div>
  </div>
</main>
