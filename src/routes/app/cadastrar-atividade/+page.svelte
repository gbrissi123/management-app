<script lang="ts">
	import InputField from '$lib/components/InputField.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { projectFromActivityForm, projectSelectedToActivitiesView } from '../../../store';

	import PageForm from '$lib/components/PageForm.svelte';
	import SubmitButton from '$lib/components/SubmitButton.svelte';
	import { goto } from '$app/navigation';
	import { convertIso8601ToBrazilianDate } from '../../../lib/utils/convertIso8601ToBrazilianDate';

	let startDate = new Date().toISOString();
	let endDate = new Date().toISOString();

	let unsubscribe: any = null;
	let title: string;
	let description: string;
	let project: any;

	onMount(() => {
		unsubscribe = projectFromActivityForm.subscribe((value) => {
			project = value;

			if (value == null) {
				alert('Selecione um projeto para adicionar uma nova atividade');
				goto('/app/projetos');
			}
		});
	});

	onDestroy(() => {
		projectFromActivityForm.update((_) => null);

		if (unsubscribe) {
			unsubscribe();
		}
	});

	let createActivity = async () => {
		await fetch('http://localhost:8080/projects/activities', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				project: project,
				name: title,
				description: description,
				schedule: {
					start: startDate,
					end: endDate
				}
			})
		});

		alert("Cadastro submetido")
		unsubscribe();
		projectSelectedToActivitiesView.set(project);
		goto('/app/atividades');
	};
</script>

<div class="flex pt-4 items-center justify-center">
	<PageForm title="Cadastre a nova atividade">
		<InputField label="Título" placeholder="Insira o seu título" bind:value={title} />
		<InputField label="Descrição" placeholder="Insira a sua descrição" bind:value={description} />
		<InputField type="datetime-local" label="Data de inicio" bind:value={startDate} />
		<InputField type="datetime-local" label="Data final" bind:value={endDate} />
		<SubmitButton title="Submeter" onTap={createActivity} />
	</PageForm>
</div>
