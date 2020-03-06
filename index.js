let theme = 'dark';

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
    theme = theme == 'dark' ? 'light' : 'dark';

    document.getElementById('content').className = `body-${theme}`;
    document.getElementById('git').className = `fab fa-github-alt icon-${theme}`;
    document.getElementById('linkedin').className = `fab fa-linkedin-in icon-${theme}`;
    document.getElementById('twitter').className = `fab fa-twitter icon-${theme}`;
    document.getElementById('mail').className = `fas fa-at icon-${theme}`;
    document.getElementById('name').className = `text-${theme}`;
    document.getElementById('profession').className = `text-${theme} text-small`;
    document.getElementById('location').className = `text-${theme} text-small`;
}
