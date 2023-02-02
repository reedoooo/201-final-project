'use strict'

// function File (name, size, type, webkitRelativePath) {
//     this.name = name;
//     this.size = size;
//     this.type = type;
//     this.webkitRelativePath = webkitRelativePath;
// }

// function Folder () {
//     this.files = {};
// }

function Project(title, path, files) {
    this.title = title;
    this.path = path;
    this.files = files;
    this.favorite = false;
    this.fileSize = 0;
}

Project.prototype.convertFilesObjectToArray = function () {
    // console.log(this.files)
    // let newFiles = [];
    // for (let i = 0; i < this.files.length; i++) {
    //     // console.log(this.files[i].name);
    //     let newFile = new File (this.files[i].name, this.files[i].size, this.files[i].type, this.files[i].webkitRelativePath);
    //     newFiles.push(newFile);
    // }
    // this.files = newFiles;
    // console.log(this.files);
}


function addProjectToState(event) {
event.preventDefault();

let title = event.target.title.value;
let path = event.target.folderSRC.value;
let files = event.target.folderSRC.files;

let project = new Project(title, path, files);

console.log(project);

// project.convertFilesObjectToArray();

state.projects.push(project);

console.log(state.projects)

// saveAllToLocalStorage();
clearProjectsList();
populateProjectsList();

console.log(localStorage);

}

function clearProjectsState(){
    state.projects = [];
}

let displayedCode;

function handleDisplayCode(event){
    let codeEl = document.getElementById('textblob');
    let webPageEl = document.getElementById('webPage');
    
    state.projects[event.target.id].files[1].text().then((promise) => {
        console.log(promise);
        displayedCode = promise;
        codeEl.innerText = displayedCode;
        console.log(displayedCode);
    });

    

}

function populateProjectsList(){
    // retrieveAllFromLocalStorage();

    for (let i = 0; i < state.projects.length; i++) {
        let folderRowEl = document.getElementById('folderRow');
        let folderButtonEl = document.createElement('button');

        folderButtonEl.setAttribute('class', 'folder');
        folderButtonEl.setAttribute('id', i);

        folderButtonEl.style.content = state.projects[i].title;
        folderButtonEl.innerText = state.projects[i].title;
        folderButtonEl.addEventListener('click', handleDisplayCode);

        folderRowEl.appendChild(folderButtonEl);
    }
}

function clearProjectsList() {
    const folderRowEl = document.getElementById('folderRow');

    for (let i = 0; folderRowEl.childNodes.length > 0; i++) {
        folderRowEl.removeChild(folderRowEl.lastChild);
    }
}

let addProjectEl = document.getElementById('addFolders');
addProjectEl.addEventListener('submit', addProjectToState);
populateProjectsList();