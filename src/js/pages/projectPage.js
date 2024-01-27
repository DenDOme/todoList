import saveData from '../..';
import catalogPage from './catalogPage';

const projectPage = (project) => {
    const getDisplay = document.getElementById('content');
    cleanDisp(getDisplay);

    const createLink = document.createElement('div');
    createLink.textContent = 'all projects'
    createLink.classList.add('header-link')
    createLink.addEventListener('click', () => {
        cleanDisp(getDisplay);
        catalogPage();
    })
    getDisplay.appendChild(createLink);

    const createProject = document.createElement('div')

    const createHeaderProject = document.createElement('div');

    const projectTitle = document.createElement('div');
    projectTitle.textContent = project.title;

    const projectDesc = document.createElement('div')
    projectDesc.textContent = project.desc;

    createHeaderProject.appendChild(projectTitle)
    createHeaderProject.appendChild(projectDesc);

    createProject.appendChild(createHeaderProject);

    const createBodyProject = document.createElement('div');
    createBodyProject.id = 'project-body'
    const createPlanned = document.createElement('div');
    const plannedHeader = document.createElement('h2');
    plannedHeader.textContent = 'Planned Todo';
    createPlanned.appendChild(plannedHeader)

    const loadProjects = () => {
        cleanDisp(createBodyProject)
        cleanTodos(createPlanned);
        for (let i = 0; i < project.firstColumn.length; i++) {
            const createTodoItem = document.createElement('div')
            createTodoItem.id = 'project-item'
            const TodoTitle = document.createElement('span')
            const TodoDesc = document.createElement('span')
            const TodoDueDate = document.createElement('span')
            const TodoPriority = document.createElement('span')
            TodoTitle.textContent = project.firstColumn[i].title
            TodoDesc.textContent = project.firstColumn[i].desc
            TodoDueDate.textContent = project.firstColumn[i].dueDate
            TodoPriority.textContent = project.firstColumn[i].priorityText

            const createButton = document.createElement('button');
            createButton.textContent = 'move to InProgress'
            createButton.addEventListener('click', () => {
                project.moveToInProgress(project.firstColumn[i])
                saveData();
                loadProjects();
            })

            const createDeleteButton = document.createElement('button');
            createDeleteButton.textContent = 'delete todo';
            createDeleteButton.addEventListener('click', () => {
                project.deleteTodo(project.firstColumn, project.firstColumn[i]);
                saveData();
                loadProjects();
            })

            createTodoItem.appendChild(TodoTitle)
            createTodoItem.appendChild(TodoDesc)
            createTodoItem.appendChild(TodoDueDate)
            createTodoItem.appendChild(TodoPriority)
            createTodoItem.appendChild(createButton)
            createTodoItem.appendChild(createDeleteButton)
            createPlanned.appendChild(createTodoItem)
        }
        const createInProgress = document.createElement('div');
        const InProgressHeader = document.createElement('h2');
        InProgressHeader.textContent = 'In Progress Todo';
        createInProgress.appendChild(InProgressHeader)
        for (let i = 0; i < project.secondColumn.length; i++) {
            const createTodoItem = document.createElement('div')
            const TodoTitle = document.createElement('span')
            const TodoDesc = document.createElement('span')
            const TodoDueDate = document.createElement('span')
            const TodoPriority = document.createElement('span')
            TodoTitle.textContent = project.secondColumn[i].title
            TodoDesc.textContent = project.secondColumn[i].desc
            TodoDueDate.textContent = project.secondColumn[i].dueDate
            TodoPriority.textContent = project.secondColumn[i].priorityText

            const createButton = document.createElement('button');
            createButton.textContent = 'move to testing'
            createButton.addEventListener('click', () => {
                project.moveToTesting(project.secondColumn[i])
                saveData();
                loadProjects();
            })

            const createDeleteButton = document.createElement('button');
            createDeleteButton.textContent = 'delete todo';
            createDeleteButton.addEventListener('click', () => {
                project.deleteTodo(project.secondColumn, project.secondColumn[i]);
                saveData();
                loadProjects();
            })

            createTodoItem.appendChild(TodoTitle)
            createTodoItem.appendChild(TodoDesc)
            createTodoItem.appendChild(TodoDueDate)
            createTodoItem.appendChild(TodoPriority)
            createTodoItem.appendChild(createButton)
            createTodoItem.appendChild(createDeleteButton)
            createInProgress.appendChild(createTodoItem)
        }
        const createInTest = document.createElement('div');
        const InTestHeader = document.createElement('h2');
        InTestHeader.textContent = 'In Test Todo';
        createInTest.appendChild(InTestHeader)
        for (let i = 0; i < project.thirdColumn.length; i++) {
            const createTodoItem = document.createElement('div')
            const TodoTitle = document.createElement('span')
            const TodoDesc = document.createElement('span')
            const TodoDueDate = document.createElement('span')
            const TodoPriority = document.createElement('span')
            TodoTitle.textContent = project.thirdColumn[i].title
            TodoDesc.textContent = project.thirdColumn[i].desc
            TodoDueDate.textContent = project.thirdColumn[i].dueDate
            TodoPriority.textContent = project.thirdColumn[i].priorityText

            const createButton = document.createElement('button');
            createButton.textContent = 'move to done'
            createButton.addEventListener('click', () => {
                project.moveToDone(project.thirdColumn[i])
                saveData();
                loadProjects();
            })

            const createDeleteButton = document.createElement('button');
            createDeleteButton.textContent = 'delete todo';
            createDeleteButton.addEventListener('click', () => {
                project.deleteTodo(project.thirdColumn, project.thirdColumn[i]);
                saveData();
                loadProjects();
            })

            createTodoItem.appendChild(TodoTitle)
            createTodoItem.appendChild(TodoDesc)
            createTodoItem.appendChild(TodoDueDate)
            createTodoItem.appendChild(TodoPriority)
            createTodoItem.appendChild(createButton)
            createTodoItem.appendChild(createDeleteButton)
            createInTest.appendChild(createTodoItem)
        }
        const createDone = document.createElement('div');
        const DoneHeader = document.createElement('h2');
        DoneHeader.textContent = 'Done Todo';
        createDone.appendChild(DoneHeader)
        for (let i = 0; i < project.fourthColumn.length; i++) {
            const createTodoItem = document.createElement('div')

            if (project.fourthColumn[i].expired) {
                createTodoItem.style.color = 'red';
            }

            const TodoTitle = document.createElement('span')
            const TodoDesc = document.createElement('span')
            const TodoDueDate = document.createElement('span')
            const TodoPriority = document.createElement('span')
            TodoTitle.textContent = project.fourthColumn[i].title
            TodoDesc.textContent = project.fourthColumn[i].desc
            TodoDueDate.textContent = project.fourthColumn[i].dueDate
            TodoPriority.textContent = project.fourthColumn[i].priorityText

            const createDeleteButton = document.createElement('button');
            createDeleteButton.textContent = 'delete todo';
            createDeleteButton.addEventListener('click', () => {
                project.deleteTodo(project.fourthColumn, project.fourthColumn[i]);
                saveData();
                loadProjects();
            })

            createTodoItem.appendChild(TodoTitle)
            createTodoItem.appendChild(TodoDesc)
            createTodoItem.appendChild(TodoDueDate)
            createTodoItem.appendChild(TodoPriority)
            createTodoItem.appendChild(createDeleteButton)
            createDone.appendChild(createTodoItem)
        }
        createBodyProject.appendChild(createPlanned)
        createBodyProject.appendChild(createInProgress)
        createBodyProject.appendChild(createInTest)
        createBodyProject.appendChild(createDone)
        createProject.appendChild(createBodyProject);
    }
    loadProjects()
    const form = document.createElement('form');

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'title';

    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.placeholder = 'desc';

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';

    const selectInput = document.createElement('select');

    const optionOne = document.createElement('option');
    optionOne.value = '0';
    optionOne.textContent = 'Small';
    selectInput.appendChild(optionOne);

    const optionTwo = document.createElement('option');
    optionTwo.value = '1';
    optionTwo.textContent = 'Middle';
    selectInput.appendChild(optionTwo);

    const optionThr = document.createElement('option');
    optionThr.value = '2';
    optionThr.textContent = 'High';
    selectInput.appendChild(optionThr);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    form.appendChild(titleInput);
    form.appendChild(descInput);
    form.appendChild(dueDateInput);

    form.appendChild(selectInput);

    form.appendChild(submitButton);
    getDisplay.appendChild(form);
    getDisplay.appendChild(createProject)

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const title = titleInput.value
        const desc = descInput.value
        const dueDate = dueDateInput.value
        const priority = selectInput.value

        const priorityText = (function () {
            if (priority == 0) {
                return 'Small'
            } else if (priority == 1) {
                return 'Middle';
            }
            else {
                return 'High';
            }
        })
        if (title && desc && dueDate) {
            const text = priorityText()
            project.createTodo(title, desc, dueDate, { priority, text });
            console.log(project)
            saveData()
            loadProjects()
        }

        titleInput.value = ''
        descInput.value = ''
        dueDateInput.value = ''
    })
}
function cleanDisp(div) {
    while (div.firstChild) {
        div.removeChild(div.lastChild)
    }
}

function cleanTodos(div) {
    while (div.children.length > 1) {
        div.children[1].remove()
    }
}

export default projectPage;cleanDisp