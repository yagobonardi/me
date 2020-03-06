function setLocationTime(){
    let date = new Date();
    let hour = date.getHours();

    if (hour > 05 && hour <= 16){
        document.getElementById('location').innerHTML = 'Brazil/SP &#127750';
    } else if (hour > 16 && hour < 18){
        document.getElementById('location').innerHTML = 'Brazil/SP &#127751;';
    } else {
        document.getElementById('location').innerHTML = 'Brazil/SP &#127747';
    }
}

function sendMail(){
    window.open('mailto:yagobonardi@gmail.com');
}

function changeTheme() {
    var actualTheme = document.getElementById('content').className;

    if (actualTheme === 'body-dark'){
        document.getElementById('content').className = 'body-light';
        document.getElementById('git').className = 'fab fa-github-alt icon-light';
        document.getElementById('linkedin').className = 'fab fa-linkedin-in icon-light';
        document.getElementById('twitter').className = 'fab fa-twitter icon-light';
        document.getElementById('mail').className = 'fas fa-at icon-light';
        document.getElementById('name').className = 'text-light';
        document.getElementById('profession').className = 'text-light text-small';
        document.getElementById('location').className = 'text-light text-small';
    } 
    else if (actualTheme === 'body-light') {
        document.getElementById('content').className = 'body-dark';
        document.getElementById('git').className = 'fab fa-github-alt icon-dark';
        document.getElementById('linkedin').className = 'fab fa-linkedin-in icon-dark';
        document.getElementById('twitter').className = 'fab fa-twitter icon-dark';
        document.getElementById('mail').className = 'fas fa-at icon-dark';
        document.getElementById('name').className = 'text-dark';
        document.getElementById('profession').className = 'text-dark text-small';
        document.getElementById('location').className = 'text-dark text-small';
    }
}
