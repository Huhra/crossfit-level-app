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

	function lbsToKg(lbs) {
		return Math.round(lbs / 2.205) + 'kg';
	}
	function toKg(lbsMan, lbsWoman, isWoman) {
		if (isWoman)
			return lbsToKg(lbsWoman);
		return lbsToKg(lbsMan);
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

 <div class="text-center">
	<h3>List of tests</h3>
 </div>

 <div class="flex-container-columns">
	<div class="flex-items-column">
		<div class="text-center">
			<b>Jackie</b>
		</div>
		For time:<br/>
		1000m row<br/>
		50 thrusters à {toKg(45, 35, isWoman)}<br/>
		30 pull-ups
	</div>
	<div class="flex-items-column">
		<div class="text-center">
			<b>Randy</b>
		</div>
		For time:<br/>
		75 power snatches à {toKg(75, 55, isWoman)}
	</div>
	<div class="flex-items-column">
		<div class="text-center">
			<b>Fran</b>
		</div>
		21-15-9 reps for time:<br/>
		Thrusters à {toKg(95, 65, isWoman)}<br/>
		Pull-ups
	</div>
	<div class="flex-items-column">
		<div class="text-center">
			<b>Grace</b>
		</div>
		For time:<br/>
		30 clean & jerk à {toKg(135, 95, isWoman)}
	</div>
	<div class="flex-items-column">
		<div class="text-center">
			<b>Isabel</b>
		</div>
		For time:<br/>
		30 snatches à {toKg(135, 95, isWoman)}
	</div>
	<div class="flex-items-column">
		<div class="text-center">
			<b>Amanda</b>
		</div>
		9-7-5 reps for time:<br/>
		Muscle-ups<br/>
		Squat snatches à {toKg(135, 95, isWoman)}
	</div>
</div>

 <img class="img-center-fit text-center"
 alt="CrossfitVallewView"
 src="http://www.crossfitvalleyview.com/wp-content/uploads/2019/05/Ranking-190513.jpg" />
 <div class="text-center">
	<b>Source des tests</b>
 </div>