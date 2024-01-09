class item {
    //Due date not added as expected to include the date function from import
    constructor(title,desc,prio,notes){
        this.title = title;
        this.desc = desc;
        this.prio = prio;
        this.notes = notes;
    }
    printItem(){
        return this.title, this.desc, this.prio, this.notes;
    }
}

const createItem = () =>{
    //take in the values from the form to create a new item
    const newItem = new item();

    //Return the item 
    return newItem;
}
export default createItem;