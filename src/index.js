

// // // document.querySelector("#id-checkbox").addEventListener("click", (event) => {
// // //   document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
// // //   event.preventDefault();
// // // }, false);

// // document.addEventListener("DOMContentLoaded", () => {
// //   // your code here
// //   let inputTask = document.getElementById("new-task-description");

// //   inputTask.addEventListener("submit", function() {
// //     inputTask.innerHTML = "15"
// //   }) 


// // });

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector().addEventListener("submit", (e) => {
//     //event.preventDefault() helps the form from doing any different event
//     e.preventDefault()
//     // target- the thing the event is being acted on
//     // form is the parent to the input. we can event.target.specific-input
//     handleToDo(e.target.new-task-description.value)
//   })
// })
// function handleToDo(todo) {
//   let p = document.createElement('p')
//   let btn = document.createElement("button")
//   btn.innerHTML = "x"
//   // Important - appending another child before sending p to the DOM
//   p.appendChild(btn)
//   console.log(p)
//   p.innerHTML = todo;
//   document.querySelector("#list").appendChild(p)
// }
// document.addEventListener('DOMContentLoaded', () => {
//   e.preventDefault()
//   let form = document.querySelector("#create-task-form");
//   form.addEventListener("submit", (e) => {
//     // console.log(e.target.value)
//   })
// })
  
document.addEventListener("DOMContentLoaded", () => {
  const taskWrapper = document.querySelector("#tasks");
  const inputTask = document.querySelector("#new-task-description");

  // creating the button
  const submitButton = document.querySelector("input[type=\"submit]")
  const form = document.querySelector('#create-task-form')

  const validInput = (input) => {
    input = input.trim();
    return input ? input : false;
  };
// adding a task
  const addNewTask = (e) => {
    e.preventDefault();
    getNewTask(); // calling a valid task
  };

  const getNewTask = () => {
    let task = inputTask.value;
    if (validInput(task)) {
      buildNewTask(task);
    }
  };

  const buildNewTask = (taskContent) => {
    let task = document.createElement("li");
    task.textContent = taskContent;
    taskWrapper.appendChild(task);
    form.reset();
  };

  form.addEventListener("submit", addNewTask);
});


