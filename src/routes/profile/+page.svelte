<script lang="ts">
  import api from '$lib/config/api';
  import axios from 'axios';
  import { onMount } from 'svelte';

  interface Profile {
    id: string;
    email: string;
  }

  let profile: Profile = { id: '', email: '' };
  let error = '';
  async function fetchProfile() {
    try {
      const { data } = await axios.get(`${api.BASE_URL}${api.ENDPOINTS.PROFILE}`, {
        withCredentials: true
      });

      profile = data;
      error = '';
    } catch (err) {
      console.error('Error fetching profile:', err);
      error = 'Failed to load profile. Please log in.';
    }
  }

  onMount(fetchProfile);
</script>

<div class="flex min-h-screen items-center justify-center">
  <div class="rounded bg-gray-100 p-8 text-center shadow-lg dark:bg-gray-800">
    <h1 class="mb-4 text-2xl font-bold">Profile</h1>
    {#if error}
      <p class="text-red-500">{error}</p>
    {:else if profile}
      <p class="mb-2"><strong>ID:</strong> {profile.id}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    {:else}
      <p>Loading profile data...</p>
    {/if}
  </div>
</div>
