function rollNumber() {
	var set = [];
	while (set.length < 1) {
		if (e1 == 0) set.push("所有人都被点过了，您需要重置");
		if (e1 != 0) {
			while (num[r] == 0) {
				r = Math.floor(Math.random() * 100) + 1;
			}
			num[r] = num[r] - 1;
			//num数组用来判断Math.random()生成的数是否被点过了
			//一开始，所有值都是1，被点过了就把这个标记改为0
			//如果抽到了值为0的项，就重新生成一次
			//如果值为1，进入输出
			e1 = e1 - 1;
			//每次抽的时候，e1都会减1
			//到0时，停止响应并输出重置要求

			document.getElementById("e1/e2").innerHTML = e1 + "/" + e2;

			if (set.indexOf(r) === -1) set.push(r);
			//人数是100个，生成的随机数存在r里
			//0-99范围generate再+1
		}

		displayResult(set);
	}
}
function displayResult(set) {
	set.join(", ");

	document.getElementById('result').innerHTML = "<center><h1 class='text-primary'>" + set + "</h1></center>";
}
function reset() {
	e1 = 100;
	for (let i = 1; i <= 101; i++) num[i] = 1;
	document.getElementById("e1/e2").innerHTML = e1 + "/" + e2;
}