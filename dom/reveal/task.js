const revealedElements = document.querySelectorAll('.reveal');

window.addEventListener ('scroll',() =>{
    for (let i = 0; i < revealedElements.length; i++){
        let tableElement = revealedElements[i];
        let elementsPositions = tableElement.getBoundingClientRect();

        if (elementsPositions.top < window.innerHeight) {
            tableElement.classList.add('reveal_active');
        } else {
            tableElement.classList.remove('reveal_active');
        }
    }
})
