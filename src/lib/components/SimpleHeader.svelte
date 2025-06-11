<!-- src/lib/components/SimpleHeader.svelte -->

<script>
  import { Button } from 'flowbite-svelte';
  
  // Simple dark mode toggle function
  function toggleDarkMode() {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
</script>

<!-- Simple header for our single-page app -->
<header class="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-6">
      
      <!-- App title -->
      <div>
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">
          SB2 Styling Practice
        </h1>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          Five cards for Tailwind CSS practice
        </p>
      </div>

      <!-- Dark mode toggle -->
      <Button on:click={toggleDarkMode} color="alternative" size="sm" class="gap-2">
        <span class="dark:hidden">🌙 Dark</span>
        <span class="hidden dark:inline">☀️ Light</span>
      </Button>
      
    </div>
  </div>
</header>