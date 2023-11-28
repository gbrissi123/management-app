<script lang="ts">
	import { Card, P } from 'flowbite-svelte';
	import type { PageData } from './$types';

	// import { goto } from '$app/navigation';
	// import { onDestroy, onMount } from 'svelte';
	// import { selectedProjectToGetSummary } from '../../../store';

	// let unsubscribe: any = null;
	// let project: any = null;

	// onMount(() => {
	// 	unsubscribe = selectedProjectToGetSummary.subscribe((value) => {
	// 		project = value;

	// 		if (value == null) {
	// 			alert('Selecione um projeto para adicionar uma nova atividade');
	// 			goto('/app/projetos');
	// 		}
	// 	});
	// });

	// onDestroy(() => {
	// 	selectedProjectToGetSummary.update((_) => null);

	// 	if (unsubscribe) {
	// 		unsubscribe();
	// 	}
	// });

	export let data: PageData;
	let studentsAttendances = data.studentsAttendances;
</script>

<div class="w-full">
	{#each studentsAttendances as studentAttendance}
		<div class="flex p-2 justify-between items-center border">
			<div class="flex-1">
				<div>
					<P class="text-sm text-gray-500">
						{`Matrícula: ${studentAttendance.student.tuition}`}
					</P>
					<P>
						{`Nome do aluno: ${studentAttendance.student.name}`}
					</P>
				</div>
			</div>
			<div>
				<div class="flex">
					<P class="me-4 text-sm text-gray-500">{`Total de atividades: ${studentAttendance.totalAttendances}`}</P>
					<P class="text-sm text-gray-500">{`Presenças: ${studentAttendance.successfulAttendances}`}</P>
				</div>
				<P>
					{`Frequência em atividades: ${studentAttendance.frequencyRatio}%`}
				</P>
			</div>
		</div>
	{/each}
</div>
