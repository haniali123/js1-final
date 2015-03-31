/**
 * Created by haniali on 3/23/15.
 */
var loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    var email = loginForm.email.value,
        password = loginForm.password.value;

    login(email, password);
});

function login(email, password) {
    var loginData = {
        email: email,
        password: password
    };
    $.post( 'http://50.255.225.218/user/login', loginData).done(function( response ) {
        var user = new User(response[0].id, response[0].firstName, response[0].lastName, response[0].username, response[0].email, true);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);

        window.location = 'pages/messageboard.html';
    });
}