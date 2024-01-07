import './styles.css';

function createIndex(){
    const content = document.getElementById('content');
    const element = document.createElement('div');

    element.textContent = 'Index Generated';

    element.classList.add('welcome');

    content.appendChild(element);

    return content;
}
document.body.appendChild(createIndex());