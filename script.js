function clickSubmitButton(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const welcomemessage= document.getElementById('welcomemessage');
    welcomemessage.textContent='welcome,' + username +'!';
    welcomemessage.style.display='block';


}    