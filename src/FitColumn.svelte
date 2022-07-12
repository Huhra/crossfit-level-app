<script>
	import { replaceBW } from './Functions';
	export let requisiteCount = 0;
	export let neededRequisite = 12;
	export let requisites = [];
	export let isWoman = false;
	export let bodyWeight = 82;
	export let columnName = 'toto';

	var isRequisiteReached = (count) => count >= neededRequisite;
	
	function toggle() {
		requisiteCount = 0;
		for (let i = 0; i < requisites.length; i++) {
			if (requisites[i].isChecked == true)
				requisiteCount += 1;
		}
	}
</script>

<div class="flex-items-column">
	<div class="text-center">
		<b>{columnName}</b>
		{#if isRequisiteReached(requisiteCount)}
		✅
		{:else}
		- ❌ {requisiteCount}/{neededRequisite}
		{/if}
	</div>
	
	{#each requisites as { men, woman, isChecked }, i}
	<div class="flex-items-row" on:change={toggle}>
		<label class="hand">
			<input type=checkbox bind:checked={isChecked}>
			<span class="{isChecked && 'text-line-through'}">
				{replaceBW(men, woman, bodyWeight, isWoman)}
			</span>
		</label>
	</div>
	{/each}
</div>
