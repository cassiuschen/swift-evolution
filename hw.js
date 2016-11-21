var top = 2015;

var isSpecial = function(i) {
	if (i == 2)
		return true;
	else if (i % 2 == 0)
		return false
	else {
		var flag    = true;
		for (var current = 3; current < i / 2; current += 2) {
			if (i % current == 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
}

for(var i = 2; i <= top; i += 1) {
	if (isSpecial(i))
		console.log(i);
}