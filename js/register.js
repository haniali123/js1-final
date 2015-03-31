/**
 * Created by haniali on 3/23/15.
 */
//var User = function(id, username, password,gender, status) {
//    this.id = id;
//    this.username = username;
//    //this.password = password;
//   // this.lastLogin = lastLogin;
//    //this.birthday = birthday;
//    //this.gender = gender;
//    this.status = status;
//};
var registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    var genderRadios = document.getElementsByName('gender'),
        gender;

    for(var i = 0; i < genderRadios.length; i++){
        if(genderRadios[i].checked){
            gender = genderRadios[i].value;
        }
    }
    var username = registerForm.username.value,
        firstName = registerForm.firstName.value,
        lastName = registerForm.lastName.value,
        email = registerForm.email.value,
        password = registerForm.password.value;

    register(firstName, lastName, username, email, password, gender);
});

function register(firstName, lastName, username, email, password, gender) {
    var registerData = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        gender: gender
    };

    $.post( 'http://50.255.225.218/user/register', registerData).done(function( user ) {
        //var user = new User(data.id, data.firstName, data.lastName, data.username, data.email, true);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);

        window.location = 'messageboard.html';
    });
}

//I keep getting the 500 error and the ID is not showing on the messege object.