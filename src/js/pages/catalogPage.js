import Project from '../classes/project';
import projectPage from './projectPage'

const storageKey = 'notes-app';
const storageData = localStorage.getItem(storageKey);

const initialData = storageData ? JSON.parse(storageData) : {
    projectArray: [],
};

const catalogPage = (function(){
    const getDisplay = document.getElementById('content')
    const form = document.createElement('form');

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'title';

    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.placeholder = 'desc';

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    form.appendChild(titleInput);
    form.appendChild(descInput);

    form.appendChild(submitButton);
    getDisplay.appendChild(form);
    loadProjects();
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const title = titleInput.value 
        const desc = descInput.value  

        if(title && desc){
            initialData.projectArray.push(new Project(title,desc, [] ,[], [], []))
            saveData()
            loadProjects()
            
        }
        
        titleInput.value = '' 
        descInput.value = ''
    })
})


export default catalogPage

function loadProjects(){
    clearDisplay();
    const getDisplay = document.getElementById('content');
    for(let i = 0 ; i < initialData.projectArray.length ; i++){
        let createNewProjectTitle = document.createElement('div');
        let createNewProjectDesc = document.createElement('div');
        let createNewGroup = document.createElement('div');
        createNewProjectTitle.textContent = initialData.projectArray[i].title;
        createNewProjectDesc.textContent = initialData.projectArray[i].desc;
        createNewProjectTitle.classList.add('project-title')
        createNewProjectDesc.classList.add('project-desc')
        createNewGroup.classList.add('project');
        createNewGroup.dataset.projectName = initialData.projectArray[i].title;
        createNewGroup.appendChild(createNewProjectTitle);
        createNewGroup.appendChild(createNewProjectDesc);
        createNewGroup.addEventListener('click', () => {
            initialData.projectArray.forEach((element, index) => {
                element = new Project(element.title, element.desc,element.firstColumn, element.secondColumn, element.thirdColumn, element.fourthColumn)
                initialData.projectArray[index] = element
            });
            projectPage(initialData.projectArray[i]);
        })
        getDisplay.appendChild(createNewGroup);
    }
}

function clearDisplay(){
    const getAllProjects = document.getElementById('content');
    while(getAllProjects.children.length > 1){
        getAllProjects.children[1].remove()
    }
}
function saveData(){
    let projectArray = initialData.projectArray
    const data = {
        projectArray
    }
    localStorage.setItem(storageKey, JSON.stringify(data));
}
