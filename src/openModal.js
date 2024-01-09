const openModal = ()=>{
    //Create elements in modal
    const modalContainer = document.createElement('div');
    const modalContent = document.createElement('div');
    const closebtn = document.createElement('span');
    //Modal Text //Replace with form elements//
    const modalText = document.createElement('p');

    //Modal base styling
    modalContainer.setAttribute('id', 'myModal');
    modalContent.classList.add('modal-content');
    closebtn.classList.add('close');
    modalContainer.classList.add('modal');
    closebtn.textContent = 'X';
    modalText.textContent = 'Some text in the modal';

    //Close button function
    closebtn.onclick = () =>{
        modalContainer.style.display = 'none';
    }


    modalContent.appendChild(modalText);
    modalContent.appendChild(closebtn);

    modalContainer.appendChild(modalContent);
    
    return modalContainer;

}
export default openModal;
