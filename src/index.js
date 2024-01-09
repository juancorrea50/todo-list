import './styles.css';
import addItemBtn from './addItem';
import openModal from './openModal';

function createIndex(){
    //DOM creation of header and call for content in body
    const content = document.getElementById('content');
    const itemContainer = document.createElement('div');
    const header = document.querySelector('.welcome');
    //import functions
    const addBtn = addItemBtn();
    const oModalContainer = openModal();
    
    header.textContent = 'Welcome to your To-Do List!';




    //Modal pop up
    addBtn.onclick = () =>{
        oModalContainer.style.display = 'flex';
    };

    //Append all elements to intended parents
    document.body.appendChild(header);
    document.body.appendChild(oModalContainer);

    content.appendChild(addBtn);
    content.appendChild(itemContainer);


    return content;
}
document.body.appendChild(createIndex());