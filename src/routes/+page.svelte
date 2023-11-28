<script lang="ts">
	import InputField from '$lib/components/InputField.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import { goto } from '$app/navigation';
	import PageForm from '$lib/components/PageForm.svelte';
	import { isUserAuthenticated } from '../store';

	let username: string;
	let password: string;

	if ($isUserAuthenticated.valueOf() == true) {
		alert('Usuário já está autenticado');
		goto('/app/home');
	}

	let authenticate = () => {
		// TODO: This is just a temporary authentication placeholder.
		if (username == 'admin' && password == 'admin') {
			goto('/app/home');
			isUserAuthenticated.set(true);
		} else {
			alert('Login não foi bem sucedido');
		}

		username = '';
		password = '';
	};
</script>

<div
	class="h-screen flex flex-col items-center
justify-center border rounded"
>
	<PageForm title="Realize o seu Login">
		<InputField label="Usuário" placeholder="Insira o seu usuário aqui" bind:value={username} />
		<InputField
			label="Senha"
			type="password"
			placeholder="Insira a sua senha aqui"
			bind:value={password}
		/>
		<div class="mt-2">
			<span class="text-sm"> Não tem uma conta? </span>
			<button
				on:click={() => alert('Método não implementado')}
				class="text-sm text-blue-600 dark:text-blue-500 hover:underline">Cadastrar-se</button
			>
			<SubmitButton title="Fazer Login" onTap={authenticate} />
		</div>
	</PageForm>
</div>
