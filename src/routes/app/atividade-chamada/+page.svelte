<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { activitySelectedToGetAttendance } from '../../../store';
	import { Button, Dropdown, DropdownItem, P } from 'flowbite-svelte';
	import { ChevronDownSolid, PlusSolid } from 'flowbite-svelte-icons';

	let unsubscribe: any;
	let activity: any = null;
	let studentsAttendance: any = null;
    let isDropdownOpen: boolean = false;

	onMount(
		() =>
			(unsubscribe = activitySelectedToGetAttendance.subscribe((value) => {
				activity = value;
				studentsAttendance = activity.studentsAttendance;

			}))
	);

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

    async function updateStudentsAbsenceStatus() {

        await fetch('http://localhost:8080/activities', {
			method: 'PATCH',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(activity)
		});

        alert("Inserção submetida");
    }

    function openDropdown() {
        isDropdownOpen = true;
    }

	function setAbsentStudentStatus(studentAttendance: any, value: boolean) {
		studentAttendance.absent = value;
		studentsAttendance = studentsAttendance;
	
        isDropdownOpen = false;
    }
</script>

<div class="w-full">
	{#if studentsAttendance != null}
		{#each studentsAttendance as studentAttendance}
			{@const isActive = !studentAttendance.absent}

			<div
				class={`flex p-2  items-center border rounded-md ${
					isActive ? 'border-green-500' : 'border-red-500'
				}`}
			>
				<div class="me-6">
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
					<Button color="alternative" pill
						>{isActive ? 'Presente' : 'Ausente'}<ChevronDownSolid class="w-3 h-3 ml-2" /></Button
					>
					<Dropdown on:click={openDropdown} bind:open={isDropdownOpen}>
						<DropdownItem on:click={() => setAbsentStudentStatus(studentAttendance, false)}
							>Presente</DropdownItem
						>
						<DropdownItem on:click={() => setAbsentStudentStatus(studentAttendance, true)}
							>Ausente</DropdownItem
						>
					</Dropdown>
				</div>
			</div>
		{/each}
		<div class="mt-2">
			<Button on:click={updateStudentsAbsenceStatus} class="w-full" color="alternative">
				<PlusSolid class="h-3" />
				<P class="ms-2">Submeter alterações</P>
			</Button>
		</div>
	{/if}
</div>

<style>
	.circle {
		width: 40px;
		height: 40px;
		background: red;
		border-radius: 50%;
	}
</style>
