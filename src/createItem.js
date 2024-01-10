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

export default item;