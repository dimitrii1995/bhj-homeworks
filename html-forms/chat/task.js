const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const chatwidgetMessages = document.querySelector('.chat-widget__messages');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

const botText = [
    'Магнус не предавал.', 
    'Успокойтесь, можете выпить цианидику с сахаром.', 
    'Кто тут?', 
    'Досвидания!', 
    'Уровень вашего интелекта - печенька',
    'Мы ничего не будем вам продавать!'
];

chatWidgetInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && chatWidgetInput.value.trim().length > 0) {
      chatwidgetMessages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
          <div class="message__text">
            ${chatWidgetInput.value}
          </div>
        </div>
      `;
      chatwidgetMessages.innerHTML += `
          <div class="message">
            <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
            <div class="message__text">
              ${botText[Math.floor(Math.random() * botText.length)]}
            </div>
          </div>
        `;
        chatWidgetInput.value = "";

        chatwidgetMessages.lastElementChild.scrollIntoView(false);
    }; 
})