const openModal = ()=>{
    //Create elements in modal
    const modalContainer = document.createElement('div');
    const modalContent = document.createElement('div');
    const closebtn = document.createElement('span');

    //Modal base styling
    modalContainer.setAttribute('id', 'myModal');
    modalContent.classList.add('modal-content');
    closebtn.classList.add('close');
    modalContainer.classList.add('modal');
    closebtn.textContent = 'X';

    //Close button function
    closebtn.onclick = () =>{
        modalContainer.style.display = 'none';
    }
    //Close when clicking outside of modal
    window.onclick = function(event){
        if(event.target == modalContainer){
            modalContainer.style.display = 'none';
        }
    }

    //Append to modalcontent div
    modalContent.appendChild(closebtn);
    modalContainer.appendChild(modalContent);
    
    return modalContainer;

}
export default openModal;
