import './styles.css';

function createIndex(){
    const element = document.createElement('div');

    element.textContent = 'Index Generated';

    element.classList.add('welcome');

    return element;
}
document.body.appendChild(createIndex());