const input = document.getElementById('task__input');
const buttonforAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list')

buttonforAdd.addEventListener('click', e => {
    e.preventDefault();

    const text = input.value.trim();
    input.value = '';

    if (text === '') {
        return;
    }

    const newTasks = document.createElement('div')
    newTasks.classList.add('task');
    newTasks.innerHTML = 
    `<div class="task__title">
        ${text}
    </div>
    <a href="#" class="task__remove">&times;</a>`;

    taskList.append(newTasks);
    
    newTasks.querySelector('a').addEventListener('click', () => {
        taskList.removeChild(newTasks);
    })
})