
// script  όπου θα ελέγχει τα πεδία password και τηλέφωνο αν ειναι έγγυρα
// για το password  ελεγχει την περίπτωση όπου είναι κενό και αν είναι μεγαλύτερο απο 7 χαρακτήρες
//για το τηλεφωνο  ελεγχει αρχικά την περίπτωση όπου είναι κενό,αν δεν είναι αριθμός και αν είναι μικρότερο  απο 10 ψηφία

function val(){

	if(frm.password.value=="")
	{
		alert("Please enter the password");
		frm.password.focus();
		return false;
	}
	if((frm.password.value).length > 7 )
	{
		alert("password should be until 7 digits");
		frm.password.focus();
		return false;
	}
if(frm.phone.value=="")
{
	alert("Please enter the phone number");
	frm.phone.focus();
	return false;
}
if(isNaN(frm.phone.value))
{
	alert("Invalid phone number");
	frm.phone.focus();
	return false;
}
if((frm.phone.value).length < 10 )
{
	alert("Phone number should be minimum 10 digits");
	frm.phone.focus();
	return false;
}

return true;
}
