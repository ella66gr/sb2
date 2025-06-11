<!-- src/routes/+page.svelte -->
<!-- This is our ONLY page - all content lives here -->

<script>
  import { Card, Badge, Button, Avatar, Alert } from 'flowbite-svelte';
  import { cn, formatDate, generateCardData } from '$lib/utils';
  
  // Generate some practice data
  const cardData = generateCardData();
  const currentDate = new Date();
</script>

<!-- Page metadata -->
<svelte:head>
  <title>SB2 - Tailwind CSS Styling Practice</title>
  <meta name="description" content="Five different cards for practicing Tailwind CSS styling techniques" />
</svelte:head>

<!-- Main content container -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  
  <!-- Page introduction -->
  <div class="text-center mb-12">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
      Tailwind CSS Practice Cards
    </h2>
    <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
      Five different card layouts to practice responsive design, typography, spacing, and color schemes.
      Experiment with Tailwind classes to create beautiful, professional layouts.
    </p>
  </div>

  <!-- Practice Cards Grid -->
  <!-- This is a 2-column responsive grid that stacks on mobile -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

    <!-- Card 1: Statistics Dashboard Card -->
    <Card class="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div class="mb-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Dashboard Stats</h3>
          <Badge color="green">Live</Badge>
        </div>
        <p class="text-gray-600 dark:text-gray-400">
          Key performance metrics and growth indicators
        </p>
      </div>

      <!-- Stats grid within the card -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {#each cardData.stats as stat}
          <div class="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div class="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            <div class="text-xs text-green-600 dark:text-green-400 mt-1">{stat.change}</div>
          </div>
        {/each}
      </div>
    </Card>

    <!-- Card 2: User Activity Feed -->
    <Card class="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div class="mb-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
          <Button size="xs" color="blue">View All</Button>
        </div>
        <p class="text-gray-600 dark:text-gray-400">
          Latest user actions and system updates
        </p>
      </div>

      <!-- Activity list -->
      <div class="space-y-4">
        {#each cardData.activities as activity}
          <div class="flex items-start space-x-3">
            <Avatar size="sm" />
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                {activity.user}
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {activity.action}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-500">
                {activity.time}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </Card>

  </div>

  <!-- Second row - 3 more cards in different layouts -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

    <!-- Card 3: Profile Card -->
    <Card class="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
      <div class="text-center">
        <Avatar size="xl" class="mx-auto mb-4" />
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Alex Johnson
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Senior Developer
        </p>
        <div class="flex justify-center space-x-2 mb-4">
          <Badge color="blue">React</Badge>
          <Badge color="green">Node.js</Badge>
          <Badge color="purple">TypeScript</Badge>
        </div>
        <Button color="blue" size="sm" class="w-full">
          View Profile
        </Button>
      </div>
    </Card>

    <!-- Card 4: Notification Card -->
    <Card class="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div class="mb-4">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Notifications</h3>
        <p class="text-gray-600 dark:text-gray-400">
          System alerts and updates
        </p>
      </div>

      <div class="space-y-3">
        <Alert color="blue">
          <span class="font-medium">Info:</span> System maintenance scheduled for tonight.
        </Alert>
        
        <Alert color="yellow">
          <span class="font-medium">Warning:</span> Your storage is 80% full.
        </Alert>
        
        <Alert color="green">
          <span class="font-medium">Success:</span> Backup completed successfully.
        </Alert>
      </div>
    </Card>

    <!-- Card 5: Quick Actions Card -->
    <Card class="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div class="mb-6">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quick Actions</h3>
        <p class="text-gray-600 dark:text-gray-400">
          Common tasks and shortcuts
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <Button color="blue" class="flex flex-col items-center p-4 h-auto">
          <span class="text-2xl mb-2">📊</span>
          <span class="text-sm">Reports</span>
        </Button>
        
        <Button color="green" class="flex flex-col items-center p-4 h-auto">
          <span class="text-2xl mb-2">⚙️</span>
          <span class="text-sm">Settings</span>
        </Button>
        
        <Button color="purple" class="flex flex-col items-center p-4 h-auto">
          <span class="text-2xl mb-2">👥</span>
          <span class="text-sm">Users</span>
        </Button>
        
        <Button color="orange" class="flex flex-col items-center p-4 h-auto">
          <span class="text-2xl mb-2">📁</span>
          <span class="text-sm">Files</span>
        </Button>
      </div>
    </Card>

  </div>

  <!-- Styling Practice Guide Section -->
  <div class="mt-16 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      🎨 Styling Practice Ideas
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Layout Experiments</h3>
        <ul class="space-y-2 text-gray-600 dark:text-gray-300">
          <li>• Change grid layouts (2-col, 3-col, asymmetric)</li>
          <li>• Experiment with different gap sizes</li>
          <li>• Try different breakpoints (md:, lg:, xl:)</li>
          <li>• Add animations and transitions</li>
          <li>• Practice with flexbox vs grid</li>
        </ul>
      </div>
      
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Visual Styling</h3>
        <ul class="space-y-2 text-gray-600 dark:text-gray-300">
          <li>• Customize color schemes and gradients</li>
          <li>• Add hover effects and interactions</li>
          <li>• Experiment with shadows and borders</li>
          <li>• Try different typography scales</li>
          <li>• Practice responsive spacing patterns</li>
        </ul>
      </div>
    </div>
  </div>

</div>