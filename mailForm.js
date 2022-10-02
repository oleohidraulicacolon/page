const $submit = document.getElementById('form-submit');

$submit.addEventListener('click',(e)=>
{
    e.preventDefault();

    const name = document.getElementById('form-name').value;
    const mail = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value;

    // console.log(name)

    if(name=="" || mail=="" || (mail!="" && !mail.split("").includes("@")) || subject=="") return;

    window.location.href=`mailto:dipixd@gmail.com?subject=${subject}&body=Nombre%3A${name}%0ACorreo%3A${mail}%0AMensaje%3A${message}`;
});