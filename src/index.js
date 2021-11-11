const tasks = [
  {
    text: "Разобрать телек",
    done: true,
  },
  {
    text: "Съездить в Тюмень",
    done: false,
  }            
]

const renderTask = ({ text, done }) => `<li data-done="${done}">${text}</li>`
  
const renderCounter = (tasks) =>
  `
    <div class="counter">
      ${tasks.filter((task) => task.done).length}/${tasks.length}
    </div>
  `;
  
  const addTask = (tasks, newTask) => {
   tasks.push(newTask) 
}
  
const render = () => {
  const root = document.getElementById("root");
  const name = "Prokhor";
  const hello = `<h1>Hi, ${name}!</h1>`;

  const renderedTasks = tasks.map(renderTask).join("");
  root.innerHTML = `
    <div>
      ${hello}
      ${renderCounter(tasks)}
      <ul>
        ${renderedTasks}
      </ul>
    </div>
  `;
 };
  
render()
addTask(tasks, {text: "Заказать кровать", done: false});
render()

const colors = ['lightblue', 'LightSalmon', 'Gold', 'PaleGreen', 'plum', 'Aquamarine', 'Bisque', 'DarkSeaGreen']
let colorIndex = 0
root.addEventListener('click', () => {
  const color = colors[colorIndex]
  colorIndex = (colorIndex + 1) % colors.length
  root.style = `background-color: ${color};`
})
 
  
  