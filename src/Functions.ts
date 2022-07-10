
	import { requisite } from './Requisites';
	
	export function toggle() {
		for (let rc = 0; rc < requisiteCount.length; rc++) {
			requisiteCount[rc] = 0;
			for (let i = 0; i < requisite[rc].length; i++) {
				if (requisite[rc][i].isChecked == true)
					requisiteCount[rc] += 1;
			}
		}
	}
	
	export function replaceStrBw(str, bodyWeight, isWoman) {
		let result = str.match('([0-9]+)%BW');
		if (result != null)
		{
			let value = (result[1] * bodyWeight / 100) + 'kg';
			return str.replace(result[0], value);
		}
		return str.replace('%BW', bodyWeight);
	}
	
	export function replaceBW(men, woman, bodyWeight, isWoman) {
		if (isWoman && (woman != null && woman != ''))
			return replaceStrBw(woman, bodyWeight, isWoman);
		return replaceStrBw(men, bodyWeight, isWoman);
	}