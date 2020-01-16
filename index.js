function setLocationTime(){
    let date = new Date();
    let hour = date.getHours();

    if (hour > 05 && hour < 16){
        document.getElementById('location').innerHTML = 'Brazil/SP &#127750';
    }

    if (hour >= 18){
        document.getElementById('location').innerHTML = 'Brazil/SP &#127747';
    }

    if (hour >= 16 && hour < 18){
        document.getElementById('location').innerHTML = 'Brazil/SP &#127751;';
    }

}