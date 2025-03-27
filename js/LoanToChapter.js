
function SwitchLoanToChapter() {
	// switch form type
	document.getElementById("loanform").name = "GenericRequestArticle";
	document.getElementById("ILLiadForm").value = "GenericRequestArticle";
	document.getElementById("RequestType").value = "Article";//sets it to article instead of loan
	document.getElementById("formheading").innerHTML = "Request a Chapter"; // this changes the title/header on the website 
	
	// switch format
	document.getElementById("DocumentType").value = "Book Chapter";	//sets the doc type 
	
	// transfer field values

	document.getElementById("PhotoJournalTitle").value = document.getElementById("LoanTitle").value;
	document.getElementById("PhotoArticleAuthor").value = document.getElementById("LoanAuthor").value;
	document.getElementById("PhotoJournalYear").value = document.getElementById("LoanDate").value;

	
	// clear old field values
	// document.getElementById("LoanTitle").value ="";//......set to an empty string to avoid NULL showing up in ILLiad 
	// document.getElementById("LoanAuthor").value ="";	
	// document.getElementById("LoanDate").value ="";
	
	// show chapter fields
	Array.prototype.forEach.call(document.getElementsByClassName("chapter"), function(el) {
		el.style.display = "block"
	});
	
	// hide loan fields
	//to have them originaly hidden edit \\docdel.umd.edu\illiadwebpages$\illiad\styles\illiadmain
	Array.prototype.forEach.call(document.getElementsByClassName("loan"), function(el) {
		el.style.display = "none"
	});

	Array.prototype.forEach.call(document.getElementsByClassName("ebook"), function(el) {
		el.style.display = "none"
	});
	
	//buttons 
	document.getElementById("switchbutton").innerHTML = "Switch to Loan Request"//change the text displayed in the button 
	document.getElementById("switchbutton").onclick = SwitchChapterToLoan;//call the function

	document.getElementById("switchbutton2").innerHTML = "Switch to EBook Request"//change the text displayed in the button 
	document.getElementById("switchbutton2").onclick = SwitchChapterToEBook;
	
	
	document.getElementById("PhotoJournalTitle").focus();
	
}

function SwitchChapterToLoan() {
		// switch form type
	document.getElementById("loanform").name = "GenericRequestLoan";
	document.getElementById("ILLiadForm").value = "GenericRequestLoan";
	document.getElementById("RequestType").value = "Loan";
	document.getElementById("formheading").innerHTML = "Borrow a Book or Other Item";
	
	// switch format
	document.getElementById("DocumentType").value = "Book";	
	
	// transfer field values


	document.getElementById("LoanTitle").value = document.getElementById("PhotoJournalTitle").value;
	document.getElementById("LoanAuthor").value = document.getElementById("PhotoArticleAuthor").value;
	document.getElementById("LoanDate").value = document.getElementById("PhotoJournalYear").value;

	
	// clear old field values
	
	// document.getElementById("PhotoJournalTitle").value ="";
	// document.getElementById("PhotoArticleAuthor").value ="";	
	// document.getElementById("PhotoJournalYear").value ="";
	
	// show loan fields
	Array.prototype.forEach.call(document.getElementsByClassName("loan"), function(el) {
		el.style.display = "block"
	});
	
	// hide chapter fields
	Array.prototype.forEach.call(document.getElementsByClassName("chapter"), function(el) {
		el.style.display = "none"
	});
	Array.prototype.forEach.call(document.getElementsByClassName("ebook"), function(el) {
		el.style.display = "none"
	});
	
	
	//document.getElementById("switchbutton").style.display = "none";
	document.getElementById("switchbutton").innerHTML = "Switch to Chapter Request"
	document.getElementById("switchbutton").onclick = SwitchLoanToChapter;

	document.getElementById("switchbutton2").innerHTML = "Switch to EBook Request"
	document.getElementById("switchbutton2").onclick = SwitchLoanToEBook;
	
	
	document.getElementById("LoanTitle").focus();
	
}

function SwitchLoanToEBook() {
	// switch form type
	document.getElementById("loanform").name = "GenericRequestArticle";
	document.getElementById("ILLiadForm").value = "GenericRequestArticle";
	document.getElementById("RequestType").value = "Article";
	document.getElementById("formheading").innerHTML = "Request an EBook  (Only EBooks from the following publishers can be requested through ILL: Oxford, Palgrave MacMillan, Routledge, Springer, and Wiley)";
	
	// switch format
	document.getElementById("DocumentType").value = "EBook";	
	
	// transfer field values

	document.getElementById("EBookTitle").value = document.getElementById("LoanTitle").value;
	document.getElementById("EBookAuthor").value = document.getElementById("LoanAuthor").value;
	document.getElementById("EBookYear").value = document.getElementById("LoanDate").value;

	document.getElementById("PhotoJournalTitle").value = document.getElementById("LoanTitle").value;
	document.getElementById("PhotoArticleTitle").value = "[Patron requesting EBook]";
	document.getElementById("PhotoArticleAuthor").value = document.getElementById("LoanAuthor").value;
	document.getElementById("PhotoJournalYear").value = document.getElementById("LoanDate").value;
	

	
	// clear old field values
	// document.getElementById("LoanTitle").value ="";
	// document.getElementById("LoanAuthor").value ="";	
	// document.getElementById("LoanDate").value ="";
	
	
	
	// show ebook fields 
	Array.prototype.forEach.call(document.getElementsByClassName("ebook"), function(el) {
		el.style.display = "block"
	});
	
	// hide loan fields
	Array.prototype.forEach.call(document.getElementsByClassName("loan"), function(el) {
		el.style.display = "none"
	});
	Array.prototype.forEach.call(document.getElementsByClassName("chapter"), function(el) {
		el.style.display = "none"
	});
	
	//document.getElementById("switchbutton").style.display = "none";
	
	document.getElementById("switchbutton").innerHTML = "Switch to Loan Request"
	document.getElementById("switchbutton").onclick = SwitchEBookToLoan;
	document.getElementById("switchbutton2").innerHTML = "Switch to Chapter Request"
	document.getElementById("switchbutton2").onclick = SwitchEBookToChapter;
	
	document.getElementById("EBookTitle").focus();
	
}

function SwitchChapterToEBook() {
	// switch form type
	document.getElementById("loanform").name = "GenericRequestArticle";
	document.getElementById("ILLiadForm").value = "GenericRequestArticle";
	document.getElementById("RequestType").value = "Article";
	document.getElementById("formheading").innerHTML = "Request an EBook (Only EBooks from the following publishers can be requested through ILL: Oxford, Palgrave MacMillan, Routledge, Springer, and Wiley)";

// switch format
document.getElementById("DocumentType").value = "EBook";	

// transfer field values
document.getElementById("EBookTitle").value = document.getElementById("PhotoJournalTitle").value;
document.getElementById("EBookAuthor").value = document.getElementById("PhotoArticleAuthor").value;
document.getElementById("EBookYear").value = document.getElementById("PhotoJournalYear").value;
document.getElementById("PhotoArticleTitle").value = "[Patron requesting EBook]";



	//clear chapter fields 
	// document.getElementById("PhotoJournalTitle").value ="";
	// document.getElementById("PhotoArticleAuthor").value ="";	
	// document.getElementById("PhotoJournalYear").value ="";

// show EBook fields 
Array.prototype.forEach.call(document.getElementsByClassName("ebook"), function(el) {
	el.style.display = "block"
});

// hide chapter fields
Array.prototype.forEach.call(document.getElementsByClassName("chapter"), function(el) {
	el.style.display = "none"
});

Array.prototype.forEach.call(document.getElementsByClassName("loan"), function(el) {
	el.style.display = "none"
});
	
document.getElementById("switchbutton").innerHTML = "Switch to Loan Request"
document.getElementById("switchbutton").onclick = SwitchEBookToLoan;
document.getElementById("switchbutton2").innerHTML = "Switch to Chapter Request"
document.getElementById("switchbutton2").onclick = SwitchEBookToChapter; 

document.getElementById("EBookTitle").focus();

}


function SwitchEBookToLoan() {
	// switch form type
document.getElementById("loanform").name = "GenericRequestLoan";
document.getElementById("ILLiadForm").value = "GenericRequestLoan";
document.getElementById("RequestType").value = "Loan";
document.getElementById("formheading").innerHTML = "Borrow a Book or Other Item";

// switch format
document.getElementById("DocumentType").value = "Book";	

// transfer field values


document.getElementById("LoanTitle").value = document.getElementById("EBookTitle").value;
document.getElementById("LoanAuthor").value = document.getElementById("EBookAuthor").value;
document.getElementById("LoanDate").value = document.getElementById("EBookYear").value;


// clear old field values

//might not need 
// document.getElementById("PhotoJournalTitle").value ="";
// document.getElementById("PhotoArticleAuthor").value ="";
// document.getElementById("PhotoJournalYear").value ="";

// document.getElementById("EBookTitle").value ="";
// document.getElementById("EBookAuthor").value ="";
// document.getElementById("EBookYear").value ="";
document.getElementById("PhotoArticleTitle").value ="";
// show loan fields
Array.prototype.forEach.call(document.getElementsByClassName("loan"), function(el) {
	el.style.display = "block"
});

// hide chapter fields
Array.prototype.forEach.call(document.getElementsByClassName("chapter"), function(el) {
	el.style.display = "none"
});

Array.prototype.forEach.call(document.getElementsByClassName("ebook"), function(el) {
	el.style.display = "none"
});

//document.getElementById("switchbutton").style.display = "none";
document.getElementById("switchbutton").innerHTML = "Switch to Chapter Request"
document.getElementById("switchbutton").onclick = SwitchLoanToChapter;

document.getElementById("switchbutton2").innerHTML = "Switch to EBook Request"
document.getElementById("switchbutton2").onclick = SwitchLoanToEBook;

document.getElementById("LoanTitle").focus();

}


function SwitchEBookToChapter() {
	// switch form type
	document.getElementById("loanform").name = "GenericRequestArticle";
	document.getElementById("ILLiadForm").value = "GenericRequestArticle";
	document.getElementById("RequestType").value = "Article";
	document.getElementById("formheading").innerHTML = "Request a Chapter";
	
	// switch format
	document.getElementById("DocumentType").value = "Book Chapter";	
	
	// transfer field values

	document.getElementById("PhotoJournalTitle").value = document.getElementById("EBookTitle").value;
	document.getElementById("PhotoArticleAuthor").value = document.getElementById("EBookAuthor").value;
	document.getElementById("PhotoJournalYear").value = document.getElementById("EBookYear").value;


	
	// clear old field values
	//mightnot need 
	// document.getElementById("LoanTitle").value ="";
	// document.getElementById("LoanAuthor").value ="";	
	// document.getElementById("LoanDate").value ="";
	document.getElementById("PhotoArticleTitle").value ="";

	// document.getElementById("EBookTitle").value ="";
	// document.getElementById("EBookAuthor").value ="";
	// document.getElementById("EBookYear").value ="";
	
	// show chapter fields
	Array.prototype.forEach.call(document.getElementsByClassName("chapter"), function(el) {
		el.style.display = "block"
	});
	
	// hide loan fields
	Array.prototype.forEach.call(document.getElementsByClassName("loan"), function(el) {
		el.style.display = "none"
	});
	
	Array.prototype.forEach.call(document.getElementsByClassName("ebook"), function(el) {
		el.style.display = "none"
	});

	//document.getElementById("switchbutton").style.display = "none";
	
	document.getElementById("switchbutton").innerHTML = "Switch to Loan Request"
	document.getElementById("switchbutton").onclick = SwitchChapterToLoan;

	document.getElementById("switchbutton2").innerHTML = "Switch to EBook Request"
	document.getElementById("switchbutton2").onclick = SwitchChapterToEBook;
	
	document.getElementById("PhotoJournalTitle").focus();
	
}