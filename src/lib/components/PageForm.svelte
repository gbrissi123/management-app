<script>
	export let title = 'Sem título';
	import Logo from '$lib/assets/logo-ilab.png';
</script>

<div class="flex justify-center items-center flex-col">
	<img src={Logo} class="h-24" alt="logo_ilab" />
	<form class="bg-white shadow-2xl rounded-md page-form mt-6 py-4 px-6">
		<legend class="text-xl font-medium text-gray-900 dark:text-white p-0">
			{title}
		</legend>
		<slot />
	</form>
</div>

<style>
	.page-form {
		min-width: 20vw;
	}
</style>
