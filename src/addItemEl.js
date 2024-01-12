const addItemEl = () =>{
    const cont = document.createElement('div');
    const tEl = document.createElement('h2');
    const dEl = document.createElement('h3');
    const pEl = document.createElement('h4');
    const nEl = document.createElement('p');
    //Default text content for text elements
    tEl.textContent = 'Title: ';
    dEl.textContent = 'Description: ';
    pEl.textContent = 'Priority: ';
    nEl.textContent = 'Notes: ';
    //Add class to container for styling
    cont.classList.add('item-element-container');

    cont.appendChild(tEl);
    cont.appendChild(dEl);
    cont.appendChild(pEl);
    cont.appendChild(nEl);

    return cont;
}
export default addItemEl;