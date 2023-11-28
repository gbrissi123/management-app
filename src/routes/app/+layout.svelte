<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { isUserAuthenticated } from '../../store';
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let unsubscribe: any;

	onMount(() => {
		unsubscribe = isUserAuthenticated.subscribe((value) => {
			if (!value) {
				goto('/');
			}
		});
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});
</script>

<div class="page-wrap">
	<header>
		<AppBar />
	</header>
	<div class="page-view">
		<aside class="bg-gray-50 dark:bg-gray-800 px-2">
			<SideBar />
		</aside>
		<main class="page-main">
			<slot />
		</main>
	</div>
	<footer class="bg-gray-100 dark:bg-gray-800 py-4">
		<Footer />
	</footer>
</div>

<style>
	.page-wrap {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.page-main {
		padding: 1rem;
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.page-view {
		flex: 1;
		display: flex;
		overflow: auto;
	}
</style>
