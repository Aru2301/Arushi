// script.js
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const projectList = document.getElementById('project-list');
        data.projects.forEach(project => {
            const listItem = document.createElement('li');
            listItem.textContent = project.name;
            projectList.appendChild(listItem);
        });
    });
