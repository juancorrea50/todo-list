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
    //Item Array
    let itemArray = [];

    //Header text
    header.textContent = '        Welcome to your To-Do List!\r\n';
    header.textContent += 'Please click the + button to add an item';

    //Functions to load and save items//
    //Load Items
    function popStorage(){
        localStorage.setItem('savedArray',JSON.stringify(itemArray));
        setItems(); 
    }
    //Save items
    function setItems(){

        let arrayItemCall = JSON.parse(localStorage.getItem('savedArray'));
        itemArray = arrayItemCall;
        //Console log the item itself for record
        console.log(arrayItemCall);
        //Append to content if title is undefined
        
        arrayItemCall.forEach(item => {
            const aItemEl = addItemEl();
            //Variables to fetch child nodes from parent element
            const t = aItemEl.childNodes[0];
            const dd = aItemEl.childNodes[1];
            const d = aItemEl.childNodes[2];
            const p = aItemEl.childNodes[3];
            const n = aItemEl.childNodes[4];
            //Use item values to populate text content of the elements
            t.textContent += item.title;
            dd.textContent += item.dueDate;
            d.textContent += item.desc;
            p.textContent += item.prio;
            n.textContent += item.notes;

            content.appendChild(aItemEl); 
        });
   
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
            const dd = aItemEl.childNodes[1];
            const d = aItemEl.childNodes[2];
            const p = aItemEl.childNodes[3];
            const n = aItemEl.childNodes[4];
            //Form access to derive values from form element
            const titleIn = cForm.childNodes[1];
            const dDateIn = cForm.childNodes[3]
            const descIn = cForm.childNodes[5];
            const prioIn = cForm.childNodes[7];
            const notesEl = cForm.childNodes[8];
        //3//
            //Add text content to the divs from addItemEl
            t.textContent += titleIn.value;
            dd.textContent += dDateIn.value;
            d.textContent += descIn.value;
            p.textContent += prioIn.value;
            n.textContent += notesEl.value;
            //Construct new item every submite
            let newItem = new item();
            newItem.title = titleIn.value;
            newItem.dueDate = dDateIn.value;
            newItem.desc = descIn.value;
            newItem.prio = prioIn.value;
            newItem.notes = notesEl.value;
            console.log(newItem);
        //4//
            //Reset value fields
            cForm.reset();
        //5//
            //Append child to content every submit
            content.appendChild(aItemEl);
            //push new item and print new array for record
            itemArray.push(newItem);
            console.log(itemArray);
            localStorage.setItem('savedArray', JSON.stringify(itemArray));
        //6//
            //Close Modal
            oModel.style.display = 'none';
    }
    //3//
    //Extend the created item div to reveal all of the information. Onclick function for the divs.
    content.addEventListener('click', (e)=>{
        const contChildren = content.childNodes;
        
        if(e.target.getAttribute('id') != 'content'){
            contChildren.forEach((item) =>{
                item.setAttribute('id',' ');
            })
            if(e.target.nodeName == "DIV"){
                e.target.setAttribute('id', 'selected');
            } else if(e.target.nodeName == "H2") {
                e.target.parentNode.setAttribute('id','selected');
            }
            
            console.log(e.target.nodeName);
    
            console.log('Item Selected');
        }


    });

    //4//
    //Update button to change item information into the div. (Buttons only appear on extend)

    //5//
    //Delete item when completed. Only appears when extended

    //Button functionality
    sbmButton.addEventListener('click', submitFunction);
    //Append the button to the form to keep logic in index.js and prevent importing into the form node (SOLID principles).
    cForm.appendChild(sbmButton);
    //Append all elements to intended parents
    document.body.appendChild(header);
    document.body.appendChild(oModel);

    oModelContent.insertBefore(cForm,oModelContent.firstChild);
    content.appendChild(addBtn);
    //Populate storage if saved array is found in local storage
    if(!localStorage.getItem('savedArray')){
        popStorage();
    } else {
        setItems();
    }
    //Reset save and load
    //localStorage.clear();
    return content;
}
document.body.appendChild(createIndex());