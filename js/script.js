//function that call the code when the page is loaded
document.addEventListener('DOMContentLoaded', ()=>{
    //verify the path name
    const currentPage = window.location.pathname;
    if (currentPage.endsWith('contact.html')) {
        // Your code here for index.html
        document.getElementById('contactForm').addEventListener('submit', formValidation);
      }
    
    //responsive navbar
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var navLinks = document.getElementById('nav-links');
        navLinks.classList.toggle('show');
    });
    
});
//function that validate the form
 function formValidation(event){
    event.preventDefault();
    //get the values of the form
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const date = document.getElementById('date')   ;
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    //differetn messages
    firstName.className="";
    lastName.className="";
    email.className="";
    date.className="";
    phone.className="";
    message.className="";
    //validate the form
    if( !validateName(firstName.value.trim())){
        manageError('First name should be at least 5 characters.',firstName);
        return;
    }
    if( !validateName(lastName.value.trim())){
        manageError('Last name should be at least 5 characters.',lastName);
        return;
    }

     //validate the email
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailPattern.test(email.value.trim())) {
         manageError('Please enter a valid email address.');
         return;
     }
     //validate the phone
    

    if(!email.value.trim()){
        manageError('Email should contain the domain name (with ‘@’).',email);
        return;
    }
    if(!date.value.trim()){
        manageError('Date must have the appropriate format (dd/mm/yy).',date);
        return;
    }
    if(!validatePhone(phone.value.trim())){
        manageError('Phone must contain 10 digits.',phone);
        return;
    }
    if(!validateText(message.value.trim())){
        manageError('Message must be of at least 50 alphabets. ',message);
        return;
    }
   
    this.submit();
    //validate the success)
   /* if(successM('Form submitted successfully!')){
        this.submit();
    };*/
};
//validate name
function validateName(name) {
  
    if (name.length >= 5) {
      return true;
    } else {
      return false;
    }
  }
  //validate phone
  function validatePhone(phone){
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  }
//validate text input
function validateText(text) {
    const alphabetCount = text.replace(/[^a-zA-Z]/g, '').length;
    return alphabetCount >= 50;
  }
//add the error message and styles
function manageError(message,element){
    const error = document.getElementById('errorPrincipal');
    error.textContent = message;
    error.style.display = 'block';

    element.classList.add('errorInput');

}
function successM(message){
    const success = document.getElementById('errorPrincipal');
    success.classList.add('success');
    success.classList.remove('error1');
    success.textContent = message;
    success.style.display = 'block';
    
    
    const form = document.getElementById('contactForm');
    const inputs = form.getElementsByTagName('input');
    const messageCon = document.getElementById('message');
    messageCon.disabled = true;
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;

      }

      setTimeout(()=>{
        success.style.display = 'none';
        document.getElementById('contactForm').reset();
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
            messageCon.disabled = false;
          }
    },4000);
    return true;
}