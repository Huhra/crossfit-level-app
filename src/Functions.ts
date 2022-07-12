
	export function replaceStrBw(str, bodyWeight) {
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
			return replaceStrBw(woman, bodyWeight);
		return replaceStrBw(men, bodyWeight);
	}