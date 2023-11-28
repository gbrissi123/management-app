<script lang="ts">
	export let students: any[] | undefined;
	const studentsNameList = students?.map((e) => e.name) ?? [];
</script>

<ol>
	{#each studentsNameList as studentName}
		<li>{studentName}</li>
	{/each}
</ol>
