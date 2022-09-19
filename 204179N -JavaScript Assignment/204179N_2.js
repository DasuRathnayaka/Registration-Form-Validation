function form_Validation()
{
var user_id = document.registration.userid;
var password_id = document.registration.passid;
var user_name = document.registration.username;
var user_country = document.registration.country;
var user_email = document.registration.email;
var user_male_sex = document.registration.msex;
var user_female_sex = document.registration.fsex;
var English = document.registration.en;
var non_English = document.registration.noen;


if(valid_userid(user_id,5,12))
{
if(valid_passid(password_id,7,12))
{
if(valid_username(user_name))
{
if(select_country(user_country))
{
if(valid_Email(user_email))
{
if(valid_language(English,non_English))
{	
	
if(valid_sex(user_male_sex,user_female_sex))
{}} }} }}}
return false;

} function valid_userid(user_id,min,max)
{
  var user_id_len = user_id.value.length;
  if (user_id_len == 0 || user_id_len >= max || user_id_len < min)
   {
     alert("User Id should not be empty or length be between "+min+" to "+max);
     user_id.focus();
  return false;
   }
  return true;
}


function valid_passid(password_id,min,max)
{
   var password_id_len = password_id.value.length;
   if (password_id_len == 0 ||password_id_len >= max || password_id_len < min)
    {
      alert("Password should not be empty or length be between "+min+" to "+max);
      password_id.focus();
   return false;
}
   return true;
}


function valid_username(user_name)
{ 
   var letters = /^[A-Za-z]+$/;
   if(user_name.value.match(letters))
    {
   return true;
}
else
   {
     alert('Username must have alphabet characters only');
     user_name.focus();
  return false;
   }
}


function select_country(user_country)
{
  if(user_country.value == "Default")
    {
      alert('Please select your country ');
      user_country.focus();
   return false;
    }
else
  {
  return true;
  }
}


function valid_Email(user_email)
  {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(user_email.value.match(mailformat))
  {
  return true;
  }
else
  {
    alert("Please enter a valid E-mail address.");
    user_email.focus();
  return false;
  }

} 

function valid_language(english,non_english)
{
	x=0;
 if(english.checked)
 {x++;
 }
  if(non_english.checked)
 {x++;
 }
 if(x==0)
 {
	alert("Please select a language");
    return false;	
 }	
 else{
  return true;
 }  
}

function valid_sex(user_male_sex,user_female_sex)
 {
   x=0;
   if(user_male_sex.checked) 
 {
   x++;
 } 
  if(user_female_sex.checked)
 {
   x++; 
 }
  if(x==0)
 {
   alert('Select Male/Female');
   user_male_sex.focus();
  return false;
}else

{
  alert('Form Succesfully Submitted');
  window.location.reload()
 return true;
}
}
