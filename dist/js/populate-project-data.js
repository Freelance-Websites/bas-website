// Get the URL from the window, get the name of the project from the URL, and filter the projects array to get the correct data
const projectURL = window.location.href;
const projectURLIndex = projectURL.search('projects/');
const projectName = projectURL.substring(projectURLIndex + 9, projectURL.length -5);
const selectedProject = projects.filter(project => project.thumbnail === projectName);