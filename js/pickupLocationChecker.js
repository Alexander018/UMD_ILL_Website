
function checkProxyAvailability(){
	pickupMenu = document.getElementById("NVTGC");
	if(pickupMenu.value == "ARCH"){
		document.getElementById("pickup_note").innerHTML = "<strong>Self-checkout will not be available for your designated proxy at this location.</strong>"
	} else {
		document.getElementById("pickup_note").innerHTML = "If you have requests currently awaiting pickup, please notify docdel@umd.edu"
	}
}

function checkUserEligibility(){
	
	zipcode = document.getElementById("Zip").value
	userStatus = document.getElementById("StatusGroup").value
	department = document.getElementById("Department").value

	console.log(zipcode, userStatus, department)
	
	// if user is eligible, add the DEPT option.
	if (((userStatus == "Staff") || (userStatus == "Faculty")) && (zipcode == "20742") && (department != "Libraries")) {
		pickupMenu = document.getElementById("NVTGC");
		deptDel = document.createElement('option');
		deptDel.text = "Departmental Delivery";
		deptDel.value = "DEPT";
		pickupMenu.add(deptDel);
	}
	
}

function checkTransactionEligibility() {
	zipcode = document.getElementById("Zip").value
	userStatus = document.getElementById("StatusGroup").value
	department = document.getElementById("Department").value
	
	// if user is eligible, add the DEPT option.
	if (((userStatus == "Staff") || (userStatus == "Faculty")) && (zipcode == "20742") && (department != "Libraries")) {
		pickupMenu = document.getElementById("ShippingOptions");
		deptDel = document.createElement('option');
		deptDel.text = "Departmental Delivery";
		deptDel.value = "DEPT";
		pickupMenu.add(deptDel);
		// if DEPT was their default value, select it.
		if (document.getElementById("defaultPickupLocation").value=="DEPT") {
			pickupMenu.value = "DEPT"
		}
		
	}
}