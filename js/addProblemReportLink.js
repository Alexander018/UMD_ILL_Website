function addWufooLinks() {
  var EDTable = document.getElementById('ElectronicDeliveryArticles').getElementsByTagName('table')[0];
  for (var i=2; i<EDTable.rows.length; i++) {
    TN = EDTable.rows[i].cells[0].textContent;
	wufooLink = '<a href="https://libumd.wufoo.com/forms/?formname=report-a-problem-with-a-pdf&field107='+TN+'">Report a Problem</a>';
	lastCell = EDTable.rows[i].cells[EDTable.rows[i].cells.length-1]
	if (lastCell.innerHTML != "No Items") {
		EDTable.rows[i].cells[EDTable.rows[i].cells.length-1].innerHTML = wufooLink;
	}
  }
}