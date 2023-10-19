function rollNumber() {
	var set = [];
	while (set.length < 1) {
		var r = Math.floor(Math.random() * 99) + 1;
		if (set.indexOf(r) === -1) set.push(r);
		//人数是100个，生成的随机数存在r里
		//0-99范围generate再+1
	}

	displayResult(set);
}

function displayResult(set) {
	set.join(", ");

	document.getElementById('result').innerHTML = "<center><h1 class='text-primary'>" + set + "</h1></center>";
}