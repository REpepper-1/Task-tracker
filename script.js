const textarea = document.querySelector('.task__text');
const taskList = document.querySelector('.task__list');
const enterBtn = document.querySelector('.enter__btn');

function addTask() {
    const text = textarea.value.trim();
    if (text) {
        const li = document.createElement('li');
        li.classList.add('task__item');

        // Контейнер label для чекбокса и кастомного вида
        const label = document.createElement("label");
        label.classList.add("custom-checkbox");

        // Сам чекбокс 
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        

        // Спан — визуальная коробка чекбокса
        const span = document.createElement("span");

        // Текст задачи
        const taskText = document.createElement("span");
        taskText.textContent = text;
        taskText.classList.add("task-text");
         
        //кнопка удаления
        const deleteButton = document.createElement("button");
       
        deleteButton.classList.add('delete-button');


        // Собираю структуру
        label.appendChild(checkbox);
        label.appendChild(span);
        li.appendChild(label);
        li.appendChild(taskText);
        li.appendChild(deleteButton);
         

       

        // Линия
        const hr = document.createElement('hr');
        hr.classList.add('line');


        // Реакция на изменение
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        taskText.classList.add('completed');
        taskList.appendChild(li);
        taskList.appendChild(hr);
    } else {
        taskText.classList.remove('completed');
        taskList.prepend(hr);
        taskList.prepend(li);
       
    }
});

        taskList.prepend(hr);
        taskList.prepend(li);

         //удаление задания
         deleteButton.addEventListener('click', ()=>
            {
                li.remove();
                hr.remove();
            })

      

        textarea.value = '';
    }
}


enterBtn.addEventListener('click', addTask);


textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); 
        addTask();
    }
});