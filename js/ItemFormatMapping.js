var formatMapping = {ArtChapArtcl:"Article",
                     ArtChapDigital:"Article",
                     ArtChapChptr:"Book Chapter",
                     BookPrintBook:"Book",
                     BookDigital:"Book",
                     Jrnl:"Journal",
                     JrnlDigital:"Journal",
                     BookMic:"Microform",
                     MsScr:"Musical Score",
                     MsScrDigital:"Musical Score",
                     Bookthsis:"Thesis",
                     MusicCD:"Audio (CD)",
                     MusicLP:"Audio (LP)",
                     AudioBookCD:"Audiobook",
                     AudioBookDigital:"Audiobook",
                     VideoVHS:"Video (VHS)",
                     VideoDVD:"Video (DVD)"
                     };

function getItemFormat(){
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { vars[key] = value; });
  if (vars.rft_dat){
    var urlFormat = JSON.parse(decodeURIComponent(vars.rft_dat)).stdrt1 + JSON.parse(decodeURIComponent(vars.rft_dat)).stdrt2
    var itemFormat = formatMapping[urlFormat] || "Other";
	console.log(itemFormat)
    return itemFormat;
  }
}

function getLoanFormatFromUrl(){
  itemFormat = getItemFormat();
  if (itemFormat){
    document.getElementById("DocumentType").value = itemFormat;

	formatLabel = document.getElementById("AltFormatLabel")
    if (itemFormat == "Book") {
	    formatLabel.innerHTML = "an EBook?"
    } else if  (itemFormat == "EBook") {
		formatLabel.innerHTML = "a print copy?"
    }
   }
}

function getArticleFormatFromUrl(){
  itemFormat = getItemFormat();
  if (itemFormat){
    document.getElementById("DocumentType").value = itemFormat;
  }
}
