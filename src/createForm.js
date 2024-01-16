

const createForm = () => {
    //Create form elements
    const formEl = document.createElement('form');
    const titleEl = document.createElement('label');
    const titleIn = document.createElement('input');
    const dateLabel = document.createElement('label');
    const dateIn = document.createElement('input');
    const descEl = document.createElement('label');
    const descIn = document.createElement('input');
    const prioEl = document.createElement('label');
    const prioIn = document.createElement('input');
    const notesEl = document.createElement('textarea');
    const submitBtn = document.createElement('input');
    //Set attribute tags
    formEl.setAttribute('id', 'item-form');
    titleEl.setAttribute('for', 'title');
    titleIn.setAttribute('type', 'text');
    titleIn.setAttribute('id', 'title');
    titleIn.setAttribute('name', 'title');
    dateLabel.setAttribute('for', 'due-date');
    dateIn.setAttribute('type', 'date');
    dateIn.setAttribute('id', 'due-date');
    dateIn.setAttribute('name', 'due-date');
    descEl.setAttribute('for', 'description');
    descIn.setAttribute('type', 'text');
    descIn.setAttribute('id', 'description');
    descIn.setAttribute('name', 'description');
    prioEl.setAttribute('for', 'priority');
    prioIn.setAttribute('type', 'number');
    prioIn.setAttribute('id', 'priority');
    prioIn.setAttribute('name', 'priority');
    prioIn.setAttribute('min', '1');
    notesEl.setAttribute('form', 'item-form');
    notesEl.setAttribute('rows', '6');
    notesEl.setAttribute('cols', '50');
    submitBtn.setAttribute('type', 'submit');

    //Add text to fields
    titleEl.textContent = 'Title: ';
    titleIn.placeholder = 'Title: ';
    dateLabel.textContent = 'Date due: ';
    descEl.textContent = 'Description: ';
    prioEl.textContent = 'Priority: ';
    notesEl.placeholder = 'Notes...';
    submitBtn.textContent = 'Submit';

    


    //Append form elements
    formEl.appendChild(titleEl);
    formEl.appendChild(titleIn);
    formEl.appendChild(dateLabel);
    formEl.appendChild(dateIn);
    formEl.appendChild(descEl);
    formEl.appendChild(descIn);
    formEl.appendChild(prioEl);
    formEl.appendChild(prioIn);
    formEl.appendChild(notesEl);
    return {formEl, submitBtn};
}
export default createForm;