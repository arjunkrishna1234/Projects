
const nameregex=/^([ \u00c0-\u01ffa-zA-Z'\-])+$/;
const emailregex=/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;

function validate(id)
{
    switch(id) {
    case 'name':
    {
        validatefullname();
        break;
    }
    case 'email':
        {
            validateEmail();
            break;
        }
}
}


function validatefullname()
{
   
    const fullname=document.getElementById('name');
    fullname.addEventListener('keyup',(e)=>{
    if(nameregex.test(e.target.value))
    {
        document.getElementById('tick1').style.display="block";
        document.getElementById('wrong1').style.display="none";
        fullname.className='green';
    }
        else
        {
             document.getElementById('wrong1').style.display="block";
             document.getElementById('tick1').style.display="none";
             fullname.className='red';
        }
    });
}
function validateEmail()
{
    const Email=document.getElementById('email');
    Email.addEventListener('keyup',(e)=>{

        if(emailregex.test(e.target.value))
        {
            document.getElementById('tick2').style.display="block";
              document.getElementById('wrong2').style.display="none";
        }
        else{
            document.getElementById('wrong2').style.display="block";
             document.getElementById('tick2').style.display="none";
        }

    });
}