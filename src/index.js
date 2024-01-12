import './styles.css';
import addItemBtn from './addItem';
import openModal from './openModal';
import createForm from './createForm';
import addItemEl from './addItemEl';

class item {
    //Due date not added as expected to include the date function from import
    constructor(title,desc,prio,notes){
        this.title = title;
        this.desc = desc;
        this.prio = prio;
        this.notes = notes;
    };
    printItem = () => {
        return `${this.title} ${this.desc} ${this.prio} ${this.notes}`;
    };
    setTitle(title){
        this.title = title;
    };
    setDesc(desc){
        this.desc = desc;
    };
    setPrio(prio){
        this.prio = prio;
    };
    setNotes(notes){
        this.notes = notes;
    };
}

function createIndex(){
    //DOM creation of header and call for content in body
    const content = document.getElementById('content');
    const header = document.querySelector('.welcome');
    //import functions
    const addBtn = addItemBtn();
    const oModel = openModal();
    const cForm = createForm().formEl;

    //Create a shortcut to the modal div
    const oModelContent = oModel.childNodes[0];
    const sbmButton = createForm().submitBtn;

    //Header text
    header.textContent = '        Welcome to your To-Do List!\r\n';
    header.textContent += 'Please click the + button to add an item';
    //1//
    //Pop up modal on click
    addBtn.onclick = () =>{
        oModel.style.display = 'flex';
    };
    //2//
    //Submit button function
    function submitFunction(e) {
        //Prevent default submit behaviour
        e.preventDefault();
        //Insert logic after submit here//
        //create new item element with text here
        const aItemEl = addItemEl();
        const t = aItemEl.childNodes[0];
        const d = aItemEl.childNodes[1];
        const p = aItemEl.childNodes[2];
        const n = aItemEl.childNodes[3];
        //Form access
        const titleIn = cForm.childNodes[1];
        const descIn = cForm.childNodes[3];
        const prioIn = cForm.childNodes[5];
        const notesEl = cForm.childNodes[6];
        //Add text content to the divs from addItemEl
        t.textContent += titleIn.value;
        d.textContent += descIn.value;
        p.textContent += prioIn.value;
        n.textContent += notesEl.value;
        //Print new item
        console.log('submitted');
        //Reset value fields
        cForm.reset();
        //Append child to content every submit
        content.appendChild(aItemEl);
        //Close Modal
        oModel.style.display = 'none';
    }
    //3//
    //Extend the created item div to reveal all of the information. Onclick function for the divs.

    //4//
    //Update button to append into the div. Use button

    //5//
    //Delete item when completed. Use button

    //Button functionality carry information into appended divs
    sbmButton.addEventListener('click', submitFunction);
    //Append the button to the form to keep logic in index.js and prevent importing into the form node (SOLID principles).
    cForm.appendChild(sbmButton);

    //Append all elements to intended parents
    document.body.appendChild(header);
    document.body.appendChild(oModel);

    oModelContent.insertBefore(cForm,oModelContent.firstChild);
    content.appendChild(addBtn);



    return content;
}
document.body.appendChild(createIndex());