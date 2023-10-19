function rollNumber() {
	var set = [];
	while (set.length < 1) {
		var r = Math.floor(Math.random() * 46) + 1;
		if (set.indexOf(r) === -1) {
			if (r == 23) {
				set.push(10);
			}
			else {
				set.push(r);
			}
		}
		//23寄了，传至10号
		//人数是47个，生成的随机数存在r里
		//0-46范围generate再+1
	}

	displayResult(set);
}

function displayResult(set) {
	set.join(", ");

	document.getElementById('result').innerHTML = "<center><h1 class='text-primary'>" + set + "</h1></center>";
}