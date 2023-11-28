<script lang="ts">
	import InputField from '$lib/components/InputField.svelte';
	import PageForm from '$lib/components/PageForm.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';

	let name: string;
	let tuition: string;
	let email: string;
	let telephone: string;

	let createStudent = async () => {
		if (
			name.trim() === '' ||
			tuition.trim() === '' ||
			email.trim() === '' ||
			telephone.trim() === ''
		) {
			alert('Preencha todos os campos antes de submeter o cadastro');
		} else {
			// Sending request to the server
			const response = await fetch('http://localhost:8080/users', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name,
					tuition: tuition,
					email: email,
					telephone: telephone
				})
			});

			// User feedback
			alert('Cadastro submetido');

			// Clearing input fields
			name = '';
			tuition = '';
			email = '';
			telephone = '';
		}
	};
</script>

<div class="flex pt-4 items-center justify-center">
	<PageForm title="Cadastre o estudante">
		<InputField label="Nome" placeholder="Insira o seu nome" bind:value={name} />
		<InputField label="Matricula" placeholder="Insira a sua matricula" bind:value={tuition} />
		<InputField
			label="Telefone"
			type="tel"
			placeholder="Insira o seu telefone"
			bind:value={telephone}
		/>
		<InputField label="Email" type="email" placeholder="Insira o seu e-mail" bind:value={email} />
		<SubmitButton title="Cadastrar" onTap={createStudent} />
	</PageForm>
</div>
