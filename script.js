function rollNumber() {
	var set = [];
	while (set.length < 1) {
		var r = Math.floor(Math.random() * 59) + 1;
		if (set.indexOf(r) === -1) {
			if (r > 55 || r == 6 || r == 16 || r == 29) {
				set.push(2);
			}
			if (r < 55 && r != 6 && r != 16 && r != 29) {
				set.push(r);
			}
		}
		//6&16&29寄了，生成60个数把55-60都放到2号
		//人数是54个，生成的随机数存在r里
		//0-53范围generate再+1
	}

	displayResult(set);
}

function displayResult(set) {
	set.join(", ");

	document.getElementById('result').innerHTML = "<center><h1 class='text-primary'>" + set + "</h1></center>";
}