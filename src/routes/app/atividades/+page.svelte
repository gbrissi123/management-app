<script lang="ts">
	import IconButton from '$lib/components/IconButton.svelte';
	import Document from '~icons/solar/document-broken';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { TrashBinSolid, UserEditSolid } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { activitySelectedToGetAttendance } from '../../../store';
	import { convertIso8601ToBrazilianDate } from '../../../lib/utils/convertIso8601ToBrazilianDate';

	export let data: PageData;

	let doAttendance = (activity: any) => {
		activitySelectedToGetAttendance.set(activity);
		goto('/app/atividade-chamada');
	};
</script>

<div class="center-div">
	<div class="page-table">
		<Table striped={true} shadow={true}>
			<TableHead>
				<TableHeadCell>Título</TableHeadCell>
				<TableHeadCell>Descrição</TableHeadCell>
				<TableHeadCell>Inicio</TableHeadCell>
				<TableHeadCell>Fim</TableHeadCell>
				<TableHeadCell></TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Edit</span>
				</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Delete</span>
				</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Attendance</span>
				</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each data.activities as activity}
					<TableBodyRow>
						<TableBodyCell>{activity.name}</TableBodyCell>
						<TableBodyCell>{activity.description}</TableBodyCell>
						<TableBodyCell>{convertIso8601ToBrazilianDate(activity.schedule.start)}</TableBodyCell>
						<TableBodyCell>{convertIso8601ToBrazilianDate(activity.schedule.end)}</TableBodyCell>
						<TableBodyCell
							><IconButton tooltip="Editar atividade"><UserEditSolid /></IconButton></TableBodyCell
						>
						<TableBodyCell
							><IconButton tooltip="Deletar atividade"><TrashBinSolid /></IconButton></TableBodyCell
						>
						<TableBodyCell
							><IconButton tooltip="Realizar chamada" onTap={() => doAttendance(activity)}
								><Document /></IconButton
							></TableBodyCell
						>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>

<style>
	.center-div {
		padding-top: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.page-table {
		min-width: 60vw;
	}
</style>
