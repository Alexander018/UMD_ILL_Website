  var request=false;

  //attempt to create AJAX XMLHttpRequest object
  try {
    request = new XMLHttpRequest();
  } catch (tryMicrosoft) {
    try {
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMicrosoft) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = false;
      }
    }
  }

  if (!request) {
    alert("Error initializing AJAX");
  }

  function updatePage() {
    if (request.readyState == 4) {
      if (request.status == 200) {
        
        //alert(request.responseText);
		console.log(request.responseText)
        
        var xmldoc = request.responseXML;

        if (document.NewAuthRegistration.Address.value == "" && xmldoc.getElementsByTagName('street')[0].firstChild) {
          document.NewAuthRegistration.Address.value = xmldoc.getElementsByTagName('street')[0].firstChild.nodeValue;
        }

        if (document.NewAuthRegistration.Address2.value == "" && xmldoc.getElementsByTagName('street2')[0].firstChild) {
          document.NewAuthRegistration.Address2.value = xmldoc.getElementsByTagName('street2')[0].firstChild.nodeValue;
        }

        if (document.NewAuthRegistration.City.value == "" && xmldoc.getElementsByTagName('city')[0].firstChild) {
          document.NewAuthRegistration.City.value = xmldoc.getElementsByTagName('city')[0].firstChild.nodeValue;
        }

        if (document.NewAuthRegistration.State.value == "" && xmldoc.getElementsByTagName('state')[0].firstChild) {
          document.NewAuthRegistration.State.value = xmldoc.getElementsByTagName('state')[0].firstChild.nodeValue;
        }

        if (document.NewAuthRegistration.Zip.value == "" && xmldoc.getElementsByTagName('zip')[0].firstChild) {
          document.NewAuthRegistration.Zip.value = xmldoc.getElementsByTagName('zip')[0].firstChild.nodeValue;
        }

        if (document.NewAuthRegistration.EMailAddress.value == "" && xmldoc.getElementsByTagName('email')[0].firstChild) {
          document.NewAuthRegistration.EMailAddress.value = xmldoc.getElementsByTagName('email')[0].firstChild.nodeValue;
        }

//        if (document.NewAuthRegistration.Phone.value == "" && xmldoc.getElementsByTagName('telephone')[0].firstChild) {
//          document.NewAuthRegistration.Phone.value = xmldoc.getElementsByTagName('telephone')[0].firstChild.nodeValue;
//        }

        if (document.NewAuthRegistration.FirstName.value == "" && xmldoc.getElementsByTagName('first_name')[0].firstChild) {
          document.NewAuthRegistration.FirstName.value = xmldoc.getElementsByTagName('first_name')[0].firstChild.nodeValue;
        }

        if (document.NewAuthRegistration.LastName.value == "" && xmldoc.getElementsByTagName('last_name')[0].firstChild) {
          document.NewAuthRegistration.LastName.value = xmldoc.getElementsByTagName('last_name')[0].firstChild.nodeValue;
        }

        var checkBorStatus = "";
        if (xmldoc.getElementsByTagName('borstatus')[0].firstChild) {
          checkBorStatus = xmldoc.getElementsByTagName('borstatus')[0].firstChild.nodeValue;
        }
        var checkAffiliation = "";
        if (xmldoc.getElementsByTagName('primaryaffiliation')[0].firstChild) {
          checkAffiliation = xmldoc.getElementsByTagName('primaryaffiliation')[0].firstChild.nodeValue;
        }
        if (checkAffiliation.length > 0 && checkAffiliation == "employee") {
          if (xmldoc.getElementsByTagName('allaffiliations')[0].firstChild) {
            var allAffiliations = xmldoc.getElementsByTagName('allaffiliations')[0].firstChild.nodeValue;
            if (allAffiliations.match(/faculty/)) {
              checkAffiliation = "faculty";
            } else if (allAffiliations.match(/staff/)) {
              checkAffiliation = "staff";
            }
          }
        } else if (xmldoc.getElementsByTagName('umaffiliatetype')[0].firstChild) {
          checkAffiliation = xmldoc.getElementsByTagName('umaffiliatetype')[0].firstChild.nodeValue;
        }

        var studentStatus = "";
        if (checkAffiliation.length > 0 && checkAffiliation == "student" && xmldoc.getElementsByTagName('studentstatus')[0].firstChild) {
          studentStatus = xmldoc.getElementsByTagName('studentstatus')[0].firstChild.nodeValue;
          if (studentStatus == "GR") {
            checkAffiliation = "grad";
          } else if (studentStatus == "UG") {
            checkAffiliation = "undergrad";
          }
        }
        
        mapStatus(checkBorStatus,checkAffiliation);



      }
    }

  }

  function getUserInfo() {
    var url = "address.asp";
    request.open("GET", url, true);
    request.onreadystatechange = updatePage;
    request.send(null);
  }
  
  function selectAndDisableStatusGroup(selectValue) {
    //for (i = 1; i < document.NewAuthRegistration.elements['StatusGroup'].options.length; i++) {
    //  if (document.NewAuthRegistration.elements['StatusGroup'].options[i].value == selectValue) {
    //    document.NewAuthRegistration.elements['StatusGroup'].selectedIndex = i;
    //    if (selectValue == 'Blocked') {
    //      document.NewAuthRegistration.elements['StatusGroup'].disabled = true;
    //    }
    //  }
    //}
	console.log(selectValue);
    //document.NewAuthRegistration.elements['StatusGroup'].value = selectValue;
	document.getElementById("StatusGroup").value = selectValue
    if (selectValue == 'Blocked') {
      top.location.href="Blocked.html";
    }
  }
  
  function mapStatus(borrowerStatus,primaryAffiliation) {

    if (primaryAffiliation == 'student') {
      selectAndDisableStatusGroup('Student');
    } else if (primaryAffiliation == 'grad') {
      selectAndDisableStatusGroup('Graduate');
    } else if (primaryAffiliation == 'undergrad') {
      selectAndDisableStatusGroup('Undergraduate');
    } else if (primaryAffiliation == 'staff') {
      selectAndDisableStatusGroup('Staff');
    } else if (primaryAffiliation == 'faculty') {
      selectAndDisableStatusGroup('Faculty');
    } else if (primaryAffiliation == 'UMCP Retiree') {
      selectAndDisableStatusGroup('Retired Faculty/Staff');
    } else if (primaryAffiliation == 'Research') {
      selectAndDisableStatusGroup('Research Affiliate');
    } else if (borrowerStatus == 'CPFOLA' || borrowerStatus == 'CPFOLD') {
      selectAndDisableStatusGroup('Friends of Libraries');
    } else if (borrowerStatus == 'HSFAC' || borrowerStatus == 'HSSTF' ||
               borrowerStatus == 'HSADJ' || borrowerStatus == 'HSGRAD' ||
               borrowerStatus == 'HSUGRD' || borrowerStatus == 'HSFACR' ||
               borrowerStatus == 'HSMC' || borrowerStatus == 'HSVARE' ||
               borrowerStatus == 'HSMRES') {
      selectAndDisableStatusGroup('UMB Shady Grove Student');
    } else {
      selectAndDisableStatusGroup('Blocked');
    }
  }
