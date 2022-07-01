const clickMe = document.getElementById('clickMe');
const squarePurple = document.getElementById('squarePurple');
let isButtonClick = false;
clickMe.addEventListener('click', () => {
    squarePurple.style.transform = 'rotateZ(360deg) scale(2)';
    squarePurple.style.transition = ' all 1s';
    isButtonClick = true;
})
squarePurple.addEventListener('click', () => {
    if(isButtonClick){
        squarePurple.style.transform = 'rotateZ(0deg) scale(1)';
        squarePurple.style.transition = ' all 3s';
        isButtonClick = false;    
    } else {
        squarePurple.style.transform = null;
        squarePurple.style.transition = null;
    }
})