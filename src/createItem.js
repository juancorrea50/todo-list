import format from 'date-fns';
class item {
    set setDueDate(val){
        this.dueDate = val;
    }
    set setTitle(val){
        this.title = val;
    }
    set setDesc(val){
        this.desc = val;
    }
    set setPrio(val){
        this.prio = val;
    }
    set setNotes(val){
        this.notes = val;
    }

    get getTitle(){
        return this.title;
    }
    get getDesc(){
        return this.desc;
    }
    get getPrio(){
        return this.prio;
    }
    get getNotes(){
        return this.notes;
    }
}
export default item;