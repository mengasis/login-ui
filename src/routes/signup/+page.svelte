<script lang="ts">
  import axios from 'axios';
  import { goto } from '$app/navigation';
  import { getEmailError, getPasswordError } from '$lib/utils/validations';
  import api from '$lib/config/api';
  import Input from '$lib/components/Input.svelte';

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
  let isSuccess = false;
  let submitError = '';

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
      const response = await axios.post(`${api.BASE_URL}${api.ENDPOINTS.SIGNUP}`, {
        email: formData.email.value,
        password: formData.password.value
      });

      isSuccess = true;
    } catch (error: any) {
      if (error.response?.status === 401) {
        submitError = 'Invalid credentials. Please try again.';
      } else {
        submitError = 'An unexpected error occurred. Please try again later.';
      }
    }
  }

  function redirectToLogin() {
    goto('/login');
  }
</script>

{#if isSuccess}
  <div class="mx-auto max-w-md animate-slide-up p-8">
    <h1 class="mb-4 text-2xl font-bold text-green-600">Registration Successful!</h1>
    <p class="mb-6">Your account has been created successfully. You can now log in.</p>
    <button
      on:click={redirectToLogin}
      class="rounded bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
    >
      Login
    </button>
  </div>
{:else}
  <div class="mx-auto max-w-md animate-slide-up p-8">
    <h1 class="mb-4 text-2xl font-bold">Sign Up</h1>
    <p class="mb-6">Create an account to start your journey with us.</p>
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
        class="rounded bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
      >
        Create Account
      </button>
    </form>
  </div>
{/if}
