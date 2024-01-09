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
    const oModel = openModal();
    
    header.textContent = '        Welcome to your To-Do List!\r\n';
    header.textContent += 'Please click the + button to add an item';

    //Modal pop up
    addBtn.onclick = () =>{
        oModel.style.display = 'flex';
    };

    //Append all elements to intended parents
    document.body.appendChild(header);
    document.body.appendChild(oModel);

    content.appendChild(addBtn);
    content.appendChild(itemContainer);


    return content;
}
document.body.appendChild(createIndex());