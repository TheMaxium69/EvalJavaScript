let h2Title = document.querySelector('article:first-of-type h2');
h2Title.innerText = 'Un titre remplacé avec VanillaJS';


let formFieldJQ = $('input#username');
formFieldJQ.val('test Jquery');

let paraJQ = $('article p');
paraJQ.addClass('paragraph');

let summaries = document.querySelectorAll('article p:first-of-type');
summaries.forEach(function(summary) {
    summary.classList.add('summary');
});

let lien = document.querySelectorAll('a.more');
lien.forEach(function(link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(event.target);
        console.log('Récupéré avec VanillaJS');
    });
});

let formVJS = document.querySelector('form');
formVJS.addEventListener('submit', function(event) {
    event.preventDefault();
    let usernameField = document.querySelector('#username');
    console.log(usernameField.value);
    let passwordField = document.querySelector('#password');
    console.log(passwordField.value);
});

