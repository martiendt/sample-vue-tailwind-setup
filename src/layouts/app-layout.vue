<script setup lang="ts">
</script>

<template>
  <div class="mx-auto max-w-5xl">
    <div class="flex flex-col p-4">
      <!-- Header -->
      <div class="flex justify-between">
        <div class="flex space-x-5">
          <div>
            <router-link to="/">
              Logo
            </router-link>
          </div>
          <div>
            <input type="text" class="" placeholder="Search">
          </div>
        </div>
        <div>
          <router-link to="/signin">
            Signin
          </router-link>
          <router-link to="/signup">
            Signup
          </router-link>
        </div>
      </div>
      <!-- Content -->
      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>