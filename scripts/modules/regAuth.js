export function registerUser() {
    document.addEventListener('DOMContentLoaded', () => {
        let name = document.getElementById('exampleInputName1');
        let email = document.getElementById('exampleInputEmail1');
        let password = document.getElementById('exampleInputPassword1');
        let date = document.getElementById('exampleInputDate1');

        let buttons = document.getElementsByClassName('btn btn-primary');

        let button = buttons[0];

        

        button.addEventListener('click', (event) => {

        

        event.preventDefault();
        

        let data = JSON.stringify({
            "Name": name.value,
            "Email": email.value,
            "Password": password.value,
            "BirthDate": date.value
        });

     
        fetch('http://localhost:36155/registration', {
            method: "POST",
            body: data
        })
        .then(responce => responce.text())
        .then(data => alert(data))
        .catch((error) => console.log(error));
    });
})

}

export function authentificateUser() {
    document.addEventListener('DOMContentLoaded', () => {
        let button = document.getElementById('enter-button');

        let login = document.getElementById('user-login');
        let password = document.getElementById('user-password');


        button.addEventListener('click', (event) => {
          event.preventDefault();


          let data = JSON.stringify({
            "Name": login.value,
            "Password": password.value
          });


          fetch('http://localhost:36155/enter', {
            method: "POST",
            body: data
          })
          .then(response => response.text())
          .then(data => alert(data))
          .catch(error => console.error(error));

        });
      })
}