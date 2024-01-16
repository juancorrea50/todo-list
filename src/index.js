import './styles.css';
import addItemBtn from './addItem';
import openModal from './openModal';
import createForm from './createForm';
import addItemEl from './addItemEl';
import item from './createItem';


function createIndex(){
    //DOM creation of header and call for content in body element
    const content = document.getElementById('content');
    const header = document.querySelector('.welcome');
    //Import functions
    const addBtn = addItemBtn();
    const oModel = openModal();
    const cForm = createForm().formEl;
    const sbmButton = createForm().submitBtn;
    const oModelContent = oModel.childNodes[0];
    let newItem = new item();

    //Header text
    header.textContent = '        Welcome to your To-Do List!\r\n';
    header.textContent += 'Please click the + button to add an item';

    //Functions to load and save items//
    //Load Items
    function popStorage(){
        localStorage.setItem('savedItem', JSON.stringify(newItem));
    
        setItems();
    }
    //Save items
    function setItems(){
        let itemCall = JSON.parse(localStorage.getItem('savedItem'));
        const aItemEl = addItemEl();
        //Variables to fetch child nodes from parent element
        const t = aItemEl.childNodes[0];
        const d = aItemEl.childNodes[1];
        const p = aItemEl.childNodes[2];
        const n = aItemEl.childNodes[3];
        //Use item values to populate text content of the elements
        t.textContent += itemCall.title;
        d.textContent += itemCall.desc;
        p.textContent += itemCall.prio;
        n.textContent += itemCall.notes;
    
        //Console log the item itself for record
        console.log(itemCall);
        //Append to content 
        content.appendChild(aItemEl);
    }
    //Function to initiate and populate items if there are no saved items
    function loadItems(){
        //Populate storage
        if(!localStorage.getItem('savedItem')){
            popStorage();
        } else {
            setItems();
        }
    }
    

    //1//
    //Pop up modal on click
    addBtn.onclick = () =>{
        oModel.style.display = 'flex';
    };
    //2//
    //Submit button function
    function submitFunction(e) {
        //1//
            //Prevent default submit behaviour
            e.preventDefault();
        //2//
            //Insert logic after submit here//
            //Use import of addItemElement and call it's children
            const aItemEl = addItemEl();
            const t = aItemEl.childNodes[0];
            const d = aItemEl.childNodes[1];
            const p = aItemEl.childNodes[2];
            const n = aItemEl.childNodes[3];
            //Form access to derive values from form element
            const titleIn = cForm.childNodes[1];
            const descIn = cForm.childNodes[3];
            const prioIn = cForm.childNodes[5];
            const notesEl = cForm.childNodes[6];
        //3//
            //Add text content to the divs from addItemEl
            t.textContent += titleIn.value;
            d.textContent += descIn.value;
            p.textContent += prioIn.value;
            n.textContent += notesEl.value;
            //Set item variables
            newItem.title = titleIn.value;
            newItem.desc = descIn.value;
            newItem.prio = prioIn.value;
            newItem.notes = notesEl.value;
            console.log(newItem.printItem());
        //4//
            //Reset value fields
            cForm.reset();
        //5//
            //Append child to content every submit
            content.appendChild(aItemEl);
        //6//
            //Close Modal
            oModel.style.display = 'none';
    }
    //3//
    //Extend the created item div to reveal all of the information. Onclick function for the divs.

    //4//
    //Update button to append into the div. Use button

    //5//
    //Delete item when completed. Use button

    //Button functionality
    sbmButton.addEventListener('click', submitFunction);
    //Append the button to the form to keep logic in index.js and prevent importing into the form node (SOLID principles).
    cForm.appendChild(sbmButton);
    //Append all elements to intended parents
    document.body.appendChild(header);
    document.body.appendChild(oModel);

    oModelContent.insertBefore(cForm,oModelContent.firstChild);
    content.appendChild(addBtn);
    loadItems();
    //Reset save and load
    //localStorage.clear();
    return content;
}
document.body.appendChild(createIndex());