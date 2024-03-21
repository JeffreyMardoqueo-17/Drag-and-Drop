document.addEventListener('DOMContentLoaded', function () {
    const tasks = document.querySelectorAll('.task');
    const taskContainers = document.querySelectorAll('.task-container');

    let draggedTask = null;

    tasks.forEach(task => {
        task.addEventListener('dragstart', () => {
            draggedTask = task;
            setTimeout(() => {
                task.style.display = 'none';
            }, 0);
        });

        task.addEventListener('dragend', () => {
            setTimeout(() => {
                draggedTask.style.display = 'block';
                draggedTask = null;
            }, 0);
        });
    });

    taskContainers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
        });

        container.addEventListener('drop', () => {
            if (draggedTask) {
                container.appendChild(draggedTask);
                draggedTask = null;
            }
        });
    });
});
