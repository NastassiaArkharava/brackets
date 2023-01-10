module.exports = function check(str, bracketsConfig) {
	let res = '';

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (str[i] === bracketsConfig[j][0]) {
				if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
					if (res[res.length - 1] === bracketsConfig[j][0]) {
						res = res.substring(0, res.length - 1);
					} else res += str[i];
				} else {
					res += str[i];
				}
			} else if (str[i] === bracketsConfig[j][1]) {
				if (res[res.length - 1] === bracketsConfig[j][0]) {
					res = res.substring(0, res.length - 1);
				} else return false;
			}
		}
	}

	return res ? false : true;
}
