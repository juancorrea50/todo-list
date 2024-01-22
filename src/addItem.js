const addItemBtn = ()=>{
    //DOM creation
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-button');
    //Text for button
    addBtn.textContent = '+';
    
    return addBtn;
}
export default addItemBtn;