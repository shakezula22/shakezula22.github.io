const projectPage = document.getElementById('project-page');
const projectBtn = document.getElementById('project-btn');

const scrollToProjects = () => projectPage.scrollIntoView();

projectBtn.addEventListener('click', scrollToProjects);
