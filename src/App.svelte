<script lang="ts">

	let requisiteCount = [0, 0, 0, 0, 0, 0, 0];
	let neededRequisite = [12, 12, 12, 11, 11, 11, 11];
	import { requisite } from './Requisites';
	import { replaceBW } from './Functions';
	let bodyWeight = 82;
    let isWoman = 0;
	
	function toggle() {
		for (let rc = 0; rc < requisiteCount.length; rc++) {
			requisiteCount[rc] = 0;
			for (let i = 0; i < requisite[rc].length; i++) {
				if (requisite[rc][i].isChecked == true)
					requisiteCount[rc] += 1;
			}
		}
	}
</script>

<label>
	Hello, ton poids est de
	<input type=number bind:value={bodyWeight} min=40 max=150>
	kg.
</label>

<label>
	Je suis 
	<input type=radio bind:group={isWoman} value={0}>
	un homme
</label>

<label>
	Je suis 
	<input type=radio bind:group={isWoman} value={1}>
	une femme
</label>

<br/>
RequisiteCount: {requisiteCount}
<br/>

<div class="flex-container-columns">
	<div class="flex-items-column">
		<b>Crossfiter</b>
		{#each requisite[0] as { men, woman, isChecked }, i}
		<div class="flex-items-row" on:change={toggle}>
			<label><input type=checkbox bind:checked={isChecked}>
				{#if isWoman}{replaceBW(men, woman, bodyWeight, isWoman)}{:else}{replaceBW(men, woman, bodyWeight, isWoman)}{/if}
			</label>
		</div>
		{/each}
		{requisiteCount[0]}/{neededRequisite[0]}
	</div>
	<div class="flex-items-column">
		<b>Steer</b>
		{#each requisite[1] as { men, woman, isChecked }, i}
		<div class="flex-items-row" on:change={toggle}>
			<label><input type=checkbox bind:checked={isChecked}>
				{#if isWoman}{replaceBW(men, woman, bodyWeight, isWoman)}{:else}{replaceBW(men, woman, bodyWeight, isWoman)}{/if}
			</label>
		</div>
		{/each}
		{requisiteCount[1]}/{neededRequisite[1]}
	</div>
	<div class="flex-items-column">
		<b>Competitor</b>
		{#each requisite[2] as { men, woman, isChecked }, i}
		<div class="flex-items-row" on:change={toggle}>
			<label><input type=checkbox bind:checked={isChecked}>
				{#if isWoman}{replaceBW(men, woman, bodyWeight, isWoman)}{:else}{replaceBW(men, woman, bodyWeight, isWoman)}{/if}
			</label>
		</div>
		{/each}
		{requisiteCount[2]}/{neededRequisite[2]}
	</div>
	<div class="flex-items-column">
		<b>Bull</b>
		{#each requisite[3] as { men, woman, isChecked }, i}
		<div class="flex-items-row" on:change={toggle}>
			<label><input type=checkbox bind:checked={isChecked}>
				{#if isWoman}{replaceBW(men, woman, bodyWeight, isWoman)}{:else}{replaceBW(men, woman, bodyWeight, isWoman)}{/if}
			</label>
		</div>
		{/each}
		{requisiteCount[3]}/{neededRequisite[3]}
	</div>
	<div class="flex-items-column">
		<b>Elite</b>
		{#each requisite[4] as { men, woman, isChecked }, i}
		<div class="flex-items-row" on:change={toggle}>
			<label><input type=checkbox bind:checked={isChecked}>
				{#if isWoman}{replaceBW(men, woman, bodyWeight, isWoman)}{:else}{replaceBW(men, woman, bodyWeight, isWoman)}{/if}
			</label>
		</div>
		{/each}
		{requisiteCount[4]}/{neededRequisite[4]}
	</div>
	<div class="flex-items-column">
		<b>Raging bull</b>
		{#each requisite[5] as { men, woman, isChecked }, i}
		<div class="flex-items-row" on:change={toggle}>
			<label><input type=checkbox bind:checked={isChecked}>
				{#if isWoman}{replaceBW(men, woman, bodyWeight, isWoman)}{:else}{replaceBW(men, woman, bodyWeight, isWoman)}{/if}
			</label>
		</div>
		{/each}
		{requisiteCount[5]}/{neededRequisite[5]}
	</div>
	<div class="flex-items-column">
		<b>Firebreather</b>
		{#each requisite[6] as { men, woman, isChecked }, i}
		<div class="flex-items-row" on:change={toggle}>
			<label><input type=checkbox bind:checked={isChecked}>
				{#if isWoman}{replaceBW(men, woman, bodyWeight, isWoman)}{:else}{replaceBW(men, woman, bodyWeight, isWoman)}{/if}
			</label>
		</div>
		{/each}
		{requisiteCount[6]}/{neededRequisite[6]}
	</div>
 </div>