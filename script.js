function rollNumber() {
	var set = [];

	while (set.length < 1) {
		if (e1 == 0) set.push("error!!!");
		if (e1 != 0) {
			while (num[r] == 0) {
				r = Math.floor(Math.random() * 51) + 1;
			}
			num[r] = num[r] - 1;

			e1 = e1 - 1;
			document.getElementById("e1/e2").innerHTML = e1 + "/" + e2;

			if (set.indexOf(r) === -1) {
				if (r == 6) set.push(52);
				if (r == 16) set.push(53);
				if (r == 29) set.push(54);
				else set.push(r);
			}
		}
		displayResult(set);
	}
}
function displayResult(set) {
	set.join(", ");

	document.getElementById('result').innerHTML = "<center><h1 class='text-primary'>" + set + "</h1></center>";
}
function reset() {
	e1 = 51;
	for (let i = 1; i <= 52; i++) num[i] = 1;
	document.getElementById("e1/e2").innerHTML = e1 + "/" + e2;
}