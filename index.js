function validate(){
    var username=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    var cpassword=document.getElementById('cpassword').value;
   
     checkusername(username);
     checkemail(email);
     checkpassword(password);
     checkparrwordsmatch(password,cpassword);


    

}
 function checkusername(username)
    {
    if(username.length > 7)
    {
        document.getElementById('username').classList.add('sucess')
        document.getElementById('username').classList.replace('error' ,'sucess')
        document.getElementById('username').innerHTML=''
    }
    else{
        document.getElementById('username').classList.add('error');
        document.getElementById('username-error').innerText='username is less than 7 '
        
    }
}
function checkemail(email)
    {
    if(email.length > 7&& email.includes('@gmail.com'))
    {
        document.getElementById('email').classList.add('sucess')
        document.getElementById('email').classList.replace('error' ,'sucess')
        document.getElementById('email').innerHTML=''
    }
    else
    {
        document.getElementById('email').classList.add('error');
        document.getElementById('email-error').innerText='email length must include @gmail.com ,7 letter long '
        
    }
}
function checkpassword(password)
    {
    if(password.length > 7&& password.includes('.'))
    {
        document.getElementById('password').classList.add('sucess')
        document.getElementById('password').classList.replace('error' ,'sucess')
        document.getElementById('password').innerHTML=''
    }
    else
    {
        document.getElementById('password').classList.add('error');
        document.getElementById('password-error').innerText='passwordlength must include . ,7 letter long '
        
    }
  
}
function checkpasswordsmatch(password,cpassword)
    {
    if(cpassword==password && password!='')
    {
        document.getElementById('cpassword').classList.add('sucess')
        document.getElementById('cpassword').classList.replace('error' ,'sucess')
        document.getElementById('cpassword').innerHTML=''
    }
    else
    {
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword-error').innerText='password not matched '
        
    }
}