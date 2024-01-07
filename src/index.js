import './styles.css';

function createIndex(){
    const content = document.getElementById('content');
    const header = document.querySelector('.welcome');
    

    header.textContent = 'Welcome to your To-Do List!';

    return content;
}
document.body.appendChild(createIndex());