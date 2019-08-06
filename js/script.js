function age() {
	var birthdate = new Date("1992/2/14");
	var year = new Date()-birthdate;
	var ageCalc = Math.floor(year/31536000000);
	document.getElementById('myAge').innerHTML = ageCalc
}
window.onload = age(); {
	age();
}