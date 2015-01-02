
function enlarge(x) 
{
	x.style.width = "250px";
}
function normal(x) 
{
    x.style.height = "50px";
    x.style.width = "200px";

}
function formValidation()
{
    var name = document.regform.user;
    var telno = document.regform.telno;
    var email = document.regform.email;
    if(usernameValidation(name,5,12))
    {
    	if(validateEmail(email))
    	{
    	 if(telValidation(tel))
         {
        	
    	  return true;
         }
        } 
    }
    else
    {
        return false;
    }
}

function usernameValidation(name,lowlimit,uplimit)  
{  
	var namelen = name.value.length;  
	if (namelen == 0 || namelen >= uplimit || namelen < lowlimit)  
	{  
		alert("Username should not be empty and length be between "+lowlimit+" to "+uplimit);  
		name.focus();  
		return false;  
	}  
  
		return true;
}
function telValidation(telno)
{

	var numlen = telno.value.length;
	
	var ten = 10;
	alert(ten);
	if(numlen == 0 || numlen > ten)
	{
		 
		alert("phone number must not be empty and length should be less than 10");
        tel.focus();
        return false;
	}
	return true;
}
function validateEmail(email)  
{  
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(email.value.match(mailformat))  
{  
return true;  
}  
else  
{  
alert("You have entered an invalid email address!");  
email.focus();  
return false;  
}  
}  

