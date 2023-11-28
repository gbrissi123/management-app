<script lang="ts">
	import {
		Button,
		Checkbox,
		Modal,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { TrashBinSolid, UserAddOutline, UserEditSolid } from 'flowbite-svelte-icons';
	import IconButton from '../../../lib/components/IconButton.svelte';
	import Work from '~icons/mdi/work';
	import WorkUpdate from '~icons/material-symbols/work-update';
	import Summary from '~icons/basil/document-solid';
	import { goto } from '$app/navigation';
	import { projectFromActivityForm, selectedProjectToGetSummary } from '../../../store';

	export let data: PageData;
	let projects = [...data.projects];

	let projectToBeDeleted: any;
	let isModalOpen = false;
	let openDeleteProjectModal = (project: any) => {
		isModalOpen = true;
		projectToBeDeleted = project;
	};

	let projectToBeUpdated: any;
	let selectedUsersId: number[] = [];
	let usersList: any[];
	let isAddUsersModalOpen = false;
	let openAddUserToProjectModal = async (project: any) => {
		const response = await fetch('http://localhost:8080/users');
		const dbUsers = await response.json();
		const projectUsersIdList = project.students?.map((e: any) => e.id) ?? [];
		usersList = dbUsers.filter((e: any) => !projectUsersIdList.includes(e.id));
		isAddUsersModalOpen = true;

		projectToBeUpdated = {
			id: project.id,
			name: project.name,
			description: project.description,
			students: project.students
		};
	};

	function getStudents(students: any[] | undefined) {
		return students?.map((e: any) => e.name) ?? [];
	}

	let createActivity = (project: any) => {
		projectFromActivityForm.set(project);
		goto('/app/cadastrar-atividade');
	};

	let getUserPresenceSummary = (project: any) => {
		selectedProjectToGetSummary.set(project)
		goto("/app/relatorio-chamadas")
	};

	let viewActivities = () => {
		goto("/app/atividades")
	};

	let addUsersToProject = async () => {
		const selectedUsers: any[] = usersList.filter((e) => selectedUsersId.includes(e.id));
		projects = projects.filter((e) => e.id != projectToBeUpdated.id);
		projectToBeUpdated.students = [...selectedUsers, ...(projectToBeUpdated.students ?? [])];
		projectToBeUpdated = projectToBeUpdated;
		projects = [...projects, projectToBeUpdated];


		await fetch('http://localhost:8080/projects', {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(projectToBeUpdated)
		});

		selectedUsersId = [];
	};

	let deleteProject = async () => {
		await fetch('http://localhost:8080/projects', {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(projectToBeDeleted)
		});

		projects = projects.filter((item: any) => item != projectToBeDeleted);
	};
</script>

<div class="center-div">
	<div class="page-table">
		<Table striped={true} shadow={true}>
			<TableHead>
				<TableHeadCell>Nome</TableHeadCell>
				<TableHeadCell>Descrição</TableHeadCell>
				<TableHeadCell>Participantes</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Edit</span>
				</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Delete</span>
				</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Add User</span>
				</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Add Activity</span>
				</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">View Activities</span>
				</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">View Overall Students Presence</span>
				</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each projects as project}
					<TableBodyRow>
						<TableBodyCell>{project.name}</TableBodyCell>
						<TableBodyCell>{project.description}</TableBodyCell>
						<TableBodyCell>{getStudents(project.students)}</TableBodyCell>
						<TableBodyCell
							><IconButton tooltip="Editar projeto"><UserEditSolid /></IconButton></TableBodyCell
						>
						<TableBodyCell
							><IconButton tooltip="Deletar projeto" onTap={() => openDeleteProjectModal(project)}
								><TrashBinSolid /></IconButton
							></TableBodyCell
						>
						<TableBodyCell
							><IconButton
								tooltip="Adicionar usuário"
								onTap={() => openAddUserToProjectModal(project)}><UserAddOutline /></IconButton
							></TableBodyCell
						>
						<TableBodyCell
							><IconButton tooltip="Visualizar atividades" onTap={viewActivities}
								><Work /></IconButton
							></TableBodyCell
						>
						<TableBodyCell
							><IconButton tooltip="Criar nova atividade" onTap={() => createActivity(project)}
								><WorkUpdate /></IconButton
							></TableBodyCell
						>

						<TableBodyCell
							><IconButton tooltip="Emitir relatório de presença " onTap={() => getUserPresenceSummary(project)}
								><Summary /></IconButton
							></TableBodyCell
						>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>

<Modal title="Deletar projeto" bind:open={isModalOpen} autoclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		Tens certeza que desejas deletar o seu projeto?
	</p>
	<svelte:fragment slot="footer">
		<Button on:click={deleteProject}>Deletar</Button>
		<Button color="alternative">Cancelar</Button>
	</svelte:fragment>
</Modal>

<Modal title="Adicionar usuários" bind:open={isAddUsersModalOpen} autoclose>
	<Table striped={true} shadow={true}>
		<TableHead>
			<TableHeadCell>Matrícula</TableHeadCell>
			<TableHeadCell>Nome</TableHeadCell>
			<TableHeadCell>E-mail</TableHeadCell>
			<TableHeadCell>Telefone</TableHeadCell>
			<TableHeadCell>
				<span class="sr-only">Selected</span>
			</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each usersList as user}
				<TableBodyRow>
					<TableBodyCell>{user.tuition}</TableBodyCell>
					<TableBodyCell>{user.name}</TableBodyCell>
					<TableBodyCell>{user.email}</TableBodyCell>
					<TableBodyCell>{user.telephone}</TableBodyCell>
					<TableBodyCell><Checkbox bind:group={selectedUsersId} value={user.id} /></TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
	<svelte:fragment slot="footer">
		<Button on:click={addUsersToProject}>Adicionar usuários</Button>
		<Button color="alternative">Cancelar</Button>
	</svelte:fragment>
</Modal>
