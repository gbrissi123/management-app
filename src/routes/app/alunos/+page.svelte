<script lang="ts">
	import {
		Button,
		Modal,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { UserEditSolid, TrashBinSolid } from 'flowbite-svelte-icons';
	import IconButton from '../../../lib/components/IconButton.svelte';

	let studentToBeDeleted: any;
	let isModalOpen = false;
	let openDeleteStudentModal = (student: any) => {
		isModalOpen = true;
		studentToBeDeleted = student;
	};

	let deleteStudent = async () => {
		await fetch('http://localhost:8080/users', {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(studentToBeDeleted)
		});

		data.users = data.users.filter((item: any) => item != studentToBeDeleted);
	};

	export let data: PageData;
</script>

<div class="center-div">
	<div class="page-table">
		<Table striped={true} shadow={true}>
			<TableHead>
				<TableHeadCell>Matrícula</TableHeadCell>
				<TableHeadCell>Nome</TableHeadCell>
				<TableHeadCell>E-mail</TableHeadCell>
				<TableHeadCell>Telefone</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Edit</span>
				</TableHeadCell>
				<TableHeadCell>
					<span class="sr-only">Delete</span>
				</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each data.users as user}
					<TableBodyRow>
						<TableBodyCell>{user.tuition}</TableBodyCell>
						<TableBodyCell>{user.name}</TableBodyCell>
						<TableBodyCell>{user.email}</TableBodyCell>
						<TableBodyCell>{user.telephone}</TableBodyCell>
						<TableBodyCell><IconButton tooltip="Editar usuário"><UserEditSolid /></IconButton></TableBodyCell>
						<TableBodyCell
							><IconButton tooltip="Deletar usuário" onTap={() => openDeleteStudentModal(user)}><TrashBinSolid /></IconButton
							></TableBodyCell
						>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>

<Modal title="Deletar estudante" bind:open={isModalOpen} autoclose>
	<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		Tens certeza que desejas deletar o perfil do estudante?
	</p>
	<svelte:fragment slot="footer">
		<Button on:click={deleteStudent}>Deletar</Button>
		<Button color="alternative">Cancelar</Button>
	</svelte:fragment>
</Modal>

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
