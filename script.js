function rollNumber(){
	var set = [];
	while(set.length < 1){
		var r = Math.floor(Math.random() * 53) + 1;
		if(set.indexOf(r) === -1) set.push(r);
	}
 
	displayResult(set);
}
 
 
function displayResult(set){
	set.join(", ");
 
	document.getElementById('result').innerHTML="<center><h1 class='text-primary'>"+set+"</h1></center>";
}