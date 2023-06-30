const btn = document.querySelector("[data-form-btn]");

const createTask = (event) => {
  const input = document.querySelector("[data-form-input]");
  const list = document.querySelector("[data-list]");
  const value = input.value;
  event.preventDefault(); //Para evitar que el btn envie la informacion automaticamente por su tipo "submit" y actualize la consola
  const task = document.createElement('li');
  task.classList.add('card');

  input.value = "";
  const content = `
  <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  task.innerHTML = content;
  list.appendChild(task);
  console.log(content);
};

btn.addEventListener("click", createTask);
