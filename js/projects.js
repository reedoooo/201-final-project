function Project(title, path, files) {
    this.title = title;
    this.path = path;
    this.files = files;
    this.favorite = false;
    this.fileSize = 0;
}

function addProjectToState(event) {
event.preventDefault();
let title = event.target.title.value;
let path = event.target.folderSRC.value;
let files = event.target.folderSRC.files; 
console.log(event.target.folderSRC.files);
let project = new Project(title, path, files);
state.projects.push(project);
console.log(state.projects);
console.log(localStorage.portfolioState);
saveAllToLocalStorage();
}

function clearProjectsState(){
    state.projects = [];
}

function handleDisplayCode(event){
    let codeEl = document.getElementById('code');
    let webPageEl = document.getElementById('webPage');
    // codeEl.src = state.projects[event.target.id].path;
    console.log(state.projects[event.target.id].files);
}

function populateProjectsList(){
    retrieveAllFromLocalStorage();
    console.log(state.projects);
    for (let i = 0; i < state.projects.length; i++) {
        let folderRowEl = document.getElementById('folderRow');
        let folderButtonEl = document.createElement('button');
        folderButtonEl.setAttribute('class', 'folder');
        folderButtonEl.setAttribute('id', i);
        folderButtonEl.innerText = state.projects[i].title;
        // document.querySelector(`#folder${i}:before`).style.content = state.projects[i].title;
        console.log(folderButtonEl);
        folderButtonEl.addEventListener('click', handleDisplayCode);
        folderRowEl.appendChild(folderButtonEl);
    }
}

let addProjectEl = document.getElementById('addFolders');
addProjectEl.addEventListener('submit', addProjectToState);
populateProjectsList();