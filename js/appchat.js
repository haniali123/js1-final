/**
 * Created by haniali on 3/23/15.
 */

var User = function(id, username, password, lastLogin, birthday, gender, status) {
    this.id = id;
    this.username = username || '';
    this.password = password || '';
    this.lastLogin = lastLogin || '';
    this.birthday = birthday || '';
    this.gender = gender || '';
    this.status = status;
};


getMessages();

getUsers();

function e(elementType, text, attributes, styles) {
    var newElement = document.createElement(elementType);
    newElement.textContent = text;

    //set the attributes on the tag
    for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }

    //set the styles
    for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
            newElement.style[style] = styles[style];
        }
    }

    return newElement;
}
function getMessages() {

    $.get('http://50.255.225.218/message').done(function (messages) { //comparing the message with the user then
        var user = localStorage.getItem('user');                        //public it
        for(i=0; i < messages.length; i++) {
            var m = messages[i].message;
           for (i = 0; i < user.length; i++) {
                var user = user[i];
                if (Message.user == user.ID) {
                    break;
                    return user;
                }
            }

        }
        console.log(messages);
    var messages = document.getElementById('messages');
    messages.appendChild(e('li', m));
    });
}
function getUsers() {
  //  localStorage.setItem('user', JSON.stringify(user)); //allows you to store it in the local storage.
    $.get('http://50.255.225.218/user').done(function (users) {
        var user = localStorage.getItem('user');                        //public it
        for(i=0; i < users.length; i++) {
            var u = users[i];
            var b;
            var avatar;

            if (u.gender == 'female'){
                b = 'pink';
                avatar = 'http://magicdisneyheros.altervista.org/images/midl/97.jpg';
            } else if (u.gender == 'male'){
                b= 'yellow';
                avatar = 'http://www.3dartistonline.com/users/4058/thm1024/tguy5_render02_f.jpg'
            }else {
                b='white';
                avatar = 'http://img1.wikia.nocookie.net/__cb20091231054441/splintercell/images/3/39/Unknown_male.jpg';
            }
            var listItem = e('li',null, {}, {backgroundColor: b});
            var aImage = e('img',null, {src: avatar} );
            var nameuser = e('h5', u.firstName + " " + u.lastName);
            listItem.appendChild(aImage);
            listItem.appendChild(nameuser);
            var usersList = document.getElementById('usersList');
            usersList.appendChild(listItem);

        }

        console.log(users);
    });
}

function sendMessage() {

    var messageText = document.getElementById('messageText').value;
    var userObject = JSON.parse(localStorage.getItem('user'));
    //debugger
    var messageObject = {
        message: messageText,
        userId: userObject.id
    };
    $.post('http://50.255.225.218/message/send', messageObject).done(function (response) {

        console.log(response);
    });
}