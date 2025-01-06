<script lang="ts">
  import axios from 'axios';
  import { goto } from '$app/navigation';
  import { getEmailError, getPasswordError } from '$lib/utils/validations';
  import api from '$lib/config/api';
  import Input from '$lib/components/Input.svelte';
  import { login } from '$lib/stores/auth';

  interface FormField {
    value: string;
    error: string;
  }

  interface FormData {
    email: FormField;
    password: FormField;
  }

  let formData: FormData = {
    email: { value: '', error: '' },
    password: { value: '', error: '' }
  };
  let submitError = '';

  function redirectToProfile() {
    goto('/profile');
  }

  function validateForm(): boolean {
    formData.email.error = getEmailError(formData.email.value);
    formData.password.error = getPasswordError(formData.password.value);

    return !formData.email.error && !formData.password.error;
  }
  async function handleSubmit(e: Event) {
    e.preventDefault();
    submitError = '';

    if (!validateForm()) {
      return;
    }

    try {
      await axios.post(
        `${api.BASE_URL}${api.ENDPOINTS.LOGIN}`,
        {
          email: formData.email.value,
          password: formData.password.value
        },
        { withCredentials: true }
      );

      await login();

      redirectToProfile();
    } catch (error: any) {
      if (error.response?.status === 401) {
        submitError = 'Invalid credentials. Please try again.';
      } else {
        submitError = 'An unexpected error occurred. Please try again later.';
      }
    }
  }
</script>

<div class="mx-auto max-w-md animate-slide-up p-8">
  <h1 class="mb-4 text-2xl font-bold">Login</h1>
  <p class="mb-6">Access your account to continue where you left off.</p>
  <form on:submit={handleSubmit} novalidate>
    <Input
      id="email"
      type="email"
      label="Email"
      bind:value={formData.email.value}
      placeholder="Enter your email"
      error={formData.email.error}
    />

    <Input
      id="password"
      type="password"
      label="Password"
      bind:value={formData.password.value}
      placeholder="Enter a strong password"
      error={formData.password.error}
    />

    {#if submitError}
      <p class="mb-4 text-red-500">{submitError}</p>
    {/if}
    <button
      type="submit"
      class="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
    >
      Login
    </button>
  </form>
</div>
