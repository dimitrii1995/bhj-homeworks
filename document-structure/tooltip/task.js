const hastoolTip = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');

tooltip.className = 'tooltip';

hastoolTip.forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault();
        
        activated = event.target;

        if(activated.title === tooltip.innerText) {
            tooltip.classList.toggle('tooltip_active');
            return;
        };

        tooltip.innerHTML = activated.title;
        const {bottom, left} = activated.getBoundingClientRect();
        tooltip.style = `left: ${left}px; top: ${bottom}px`;
        activated.insertAdjacentElement('afterEnd', tooltip);
        tooltip.classList.add('tooltip_active');

    });
})