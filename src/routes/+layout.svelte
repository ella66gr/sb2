<!-- src/routes/+layout.svelte (Single-Page Architecture)-->

<script>
  import '../app.css';
  import SimpleHeader from '$lib/components/SimpleHeader.svelte';
</script>

<svelte:head>
  <!-- Load Inter font for professional typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Critical dark mode initialization script -->
  <script>
    // Initialize dark mode based on localStorage or system preference
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</svelte:head>

<!-- Simple layout structure -->
<SimpleHeader />
<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <!-- The <slot /> is where our single page content will be inserted -->
  <slot />
</main>