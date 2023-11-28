<script lang="ts">
	import AppBar from '$lib/components/AppBar.svelte';
	import InputField from '$lib/components/InputField.svelte';
	import PageForm from '$lib/components/PageForm.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';

	let name: string;
	let description: string;

	let createProject = async () => {
		if (name.trim() === '') {
			alert('Preencha todos os campos antes de submeter o cadastro');
		} else {
			// Sending request to the server
			const response = await fetch('http://localhost:8080/projects', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name,
					description: description
				})
			});

			// User feedback
			alert('Cadastro submetido');

			// Clearing input fields
			name = '';
			description = '';
		}
	};
</script>

<div class="flex pt-4 items-center justify-center">
	<PageForm title="Criar o projeto">
		<InputField label="Nome" placeholder="Insira o nome do projeto" bind:value={name} />
		<InputField
			label="Descrição"
			placeholder="Insira a descrição do projeto"
			bind:value={description}
		/>
		<SubmitButton title="Criar projeto" onTap={createProject} />
	</PageForm>
</div>
