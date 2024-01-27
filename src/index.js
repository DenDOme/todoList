import Project from './js/classes/project'
import projectPage from './js/pages/projectPage';

const storageKey = 'notes-app';
const storageData = localStorage.getItem(storageKey);

const initialData = storageData ? JSON.parse(storageData) : {
    projectArray: [],
};
export default saveData

window.onload = () => {
    if(initialData.projectArray.length == 0) {
        initialData.projectArray.push(new Project('default','default', [] ,[], [], []))
        saveData()
        projectPage(initialData.projectArray[0]);
    }
    else {
        initialData.projectArray.forEach((element, index) => {
            element = new Project(element.title, element.desc,element.firstColumn, element.secondColumn, element.thirdColumn, element.fourthColumn)
            initialData.projectArray[index] = element
        });
        projectPage(initialData.projectArray[0]);
    }
}

function saveData(){
    let projectArray = initialData.projectArray
    const data = {
        projectArray
    }
    console.log(data);
    localStorage.setItem(storageKey, JSON.stringify(data));
}
