//1. Придумать структуру данных для хранения списка задач, у каждой задачи есть статус сделана, есть текст и могут быть подзадачи, также с текстом и статусом.* Boolean, objects, array

const tasks = [
    {
     text: "Помыть пол",
     done: true,
    },
    {
     text: "Приготовить пирог",
     done: false,
    }            
  ]
  
  
  //отображает наши задачи на странице сайта: task =>string(html)
  // 1. можно записать как тернарное выражение, кот. обращается к css-классу:
  //const renderTasks = (task) => `<li class="${task.done ? "class-done" : ""}">${task.text}</li>`;
  // 2. через data-атрибуты:
  //const renderTask = (task) => `<li data-done="${task.done}">${task.text}</li>`;
  // 3. то же, но с деструктуризацией объекта:
  const renderTask = ({ text, done }) => `<li data-done="${done}">${text}</li>`
  //сделаем функцию для отображения всех задач и (через дробь)кол-ва выполненных из них:
  const renderCounter = (tasks) =>
    `
      <div class="counter">
        ${tasks.filter((task) => task.done).length}/${tasks.length}
      </div>
    `;
  
  //добавляем новую задачу в массив:
  const addTask = (tasks, newTask) => {
   tasks.push(newTask) 
  }
  
  //создаём общий render для возможности добавления новых задач
  const render = () => {
    const root = document.getElementById("root");
    const name = "Svetlana";
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
  //общий div нужен для прижатия всего текста по левому краю
  
  //вызываем наш рендер с новой задачей:
  render()
  addTask(tasks, {text: "Сходить в магазин", done: false});
  render()
  
  // усложнения см. в видео с 2:30
  