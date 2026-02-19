const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function save() { localStorage.setItem('tasks', JSON.stringify(tasks)); }
function render() {
  list.innerHTML = '';
  tasks.forEach((task, i) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = <span></span><div><button onclick='tasks[].completed=!tasks[].completed;save();render()'></button><button onclick='tasks.splice(,1);save();render()'>Delete</button></div>;
    list.appendChild(li);
  });
}

addBtn.onclick = () => {
  const text = input.value.trim();
  if (text) {
    tasks.push({text, completed: false});
    input.value = '';
    save();
    render();
  }
};
input.onkeypress = e => e.key=='Enter' && addBtn.click();
render();
