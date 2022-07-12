<script lang="ts">
	import FitColumn from './FitColumn.svelte'
	import { requisite } from './Requisites';

	let bodyWeight = 82;
    let isWoman = false;
	let weightChanged = false;

	function toggle() {
		if (weightChanged)
			return;
		if (isWoman)
			bodyWeight = 65;
		else
			bodyWeight = 82;
	}

	function toggleWeight() {
		weightChanged = true;
	}
</script>

<div class="text-center input-div">
	<label>
		<input type=radio bind:group={isWoman} value={false} on:change={toggle}>
		Je suis un homme
	</label>
	
	<label>
		<input type=radio bind:group={isWoman} value={true} on:change={toggle}>
		Je suis une femme
	</label>

	<label>
		Hello, ton poids est de
		<input type=number bind:value={bodyWeight} min=40 max=150 on:change={toggleWeight}>
		kg.
	</label>
</div>

<div class="flex-container-columns">

	{#each requisite as r}
	<FitColumn requisites={r.requisites}
		neededRequisite={r.needed}
		columnName={r.name}
		bodyWeight={bodyWeight}
		isWoman={isWoman}/>
	{/each}
 </div>