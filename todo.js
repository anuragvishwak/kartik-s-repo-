const readlineSync = require('readline-sync');

let tasks = [];

function addTask(task) {
    tasks.push({ task, completed: false });
}

function removeTask(index) {
    tasks.splice(index, 1);
}

function displayTasks() {
    tasks.forEach((task, index) => {
        console.log(`${index + 1}.${task.completed ? 'yes' : 'no'} ${task.task}`);
    });
}

function markTaskCompleted(index) {
    tasks[index].completed = true;
}

function main() {
    console.log('Welcome to ToDo List CLI');

    while (true) {
        console.log('\n1. Add Task');
        console.log('2. Remove Task');
        console.log('3. Display Tasks');
        console.log('4. Mark Task as Completed');
        console.log('5. Exit');

        const choice = readlineSync.questionInt('Enter your choice: ');

        switch (choice) {
            case 1: 
                const newTask = readlineSync.question('Enter task: ');
                addTask(newTask);
                break;
            case 2:
                const indexToRemove = readlineSync.questionInt('Enter index of task to remove: ') - 1;
                removeTask(indexToRemove);
                break;
            case 3:
                console.log('\nTasks:');
                displayTasks();
                break;
            case 4:
                const indexToMark = readlineSync.questionInt('Enter index of task to mark as completed: ') - 1;
                markTaskCompleted(indexToMark);
                break;
            case 5:
                console.log('Exiting...');
                console.log('after exiting')
                process.exit(0);
            default:
                console.log('Invalid choice');
                console.log('hello')
        }
    }
}

main();
