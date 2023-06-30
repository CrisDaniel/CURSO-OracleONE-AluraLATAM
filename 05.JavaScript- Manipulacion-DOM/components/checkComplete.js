const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };
  
  const completeTask = (event) => {
    const element = event.target;
    //toggle añade la funcion si no hay, y si lo encuentra lo elimina
    element.classList.toggle('fas');
    element.classList.add('far');
    element.classList.remove('completeIcon');
  };

  export default checkComplete;