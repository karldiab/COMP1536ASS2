function drawHouse() {
	var house = document.getElementById("myHouse");
	var myHouse = house.getContext("2d");
	
	//Background hills
	myHouse.beginPath();
	myHouse.moveTo(243,262);
	myHouse.lineTo(203,246);
	myHouse.lineTo(169,236);
	myHouse.lineTo(150,233);
	myHouse.lineTo(135,233);
	myHouse.lineTo(118,233);
	myHouse.lineTo(103,234);
	myHouse.lineTo(87,235);
	myHouse.lineTo(69,238);
	myHouse.lineTo(47,241);
	myHouse.lineTo(32,241);
	myHouse.lineTo(19,239);
	myHouse.lineTo(4,240);
	myHouse.lineTo(0,242);
	myHouse.lineTo(0,293);
	myHouse.lineTo(254,288);
	myHouse.closePath();
	myHouse.fillStyle= "red";
	myHouse.fill();
	
	//Fence post 1
	myHouse.beginPath();
	myHouse.moveTo(100,252);
	myHouse.lineTo(100,243);
	myHouse.lineTo(99,235);
	myHouse.lineTo(98,229);
	myHouse.lineTo(98,227);
	myHouse.lineTo(100,228);
	myHouse.lineTo(101,236);
	myHouse.lineTo(102,245);
	myHouse.lineTo(103,253);
	myHouse.closePath();
	myHouse.fillStyle= "purple";
	myHouse.fill();
	
	//fence post 2
	myHouse.beginPath();
	myHouse.moveTo(70,251);
	myHouse.lineTo(68,244);
	myHouse.lineTo(68,238);
	myHouse.lineTo(68,233);
	myHouse.lineTo(66,233);
	myHouse.lineTo(66,238);
	myHouse.lineTo(66,245);
	myHouse.lineTo(66,251);
	myHouse.closePath();
	myHouse.fillStyle= "purple";
	myHouse.fill();
	
	// fence post 3
	myHouse.beginPath();
	myHouse.moveTo(70,251);
	myHouse.lineTo(68,244);
	myHouse.lineTo(68,238);
	myHouse.lineTo(68,233);
	myHouse.lineTo(66,233);
	myHouse.lineTo(66,238);
	myHouse.lineTo(66,245);
	myHouse.lineTo(66,251);
	myHouse.lineTo(66,251);
	myHouse.closePath();
	myHouse.fillStyle= "purple";
	myHouse.fill();
	//Ground under house
	myHouse.beginPath();
	myHouse.moveTo(300,241);
	myHouse.lineTo(258,239);
	myHouse.lineTo(236,235);
	myHouse.lineTo(206,238);
	myHouse.lineTo(190,237);
	myHouse.lineTo(162,241);
	myHouse.lineTo(137,243);
	myHouse.lineTo(114,243);
	myHouse.lineTo(90,246);
	myHouse.lineTo(61,248);
	myHouse.lineTo(33,248);
	myHouse.lineTo(10,250);
	myHouse.lineTo(0,253);
	myHouse.lineTo(0,300);
	myHouse.lineTo(300,300);
	myHouse.closePath();
	myHouse.fillStyle = "green";
	myHouse.fill();
	
}