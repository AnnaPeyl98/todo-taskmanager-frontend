import listTodo from '../../../public/mockapi/getInboxTaskList';
import listDone from '../../../public/mockapi/getDoneTaskList';
import './style.css';
export function countToDo(){
    return listTodo.taskList.filter(function(item){
        return item.status==="inbox";
    }).length;
}
export function countDone(){
    return listDone.taskList.filter(function(item){
        return item.status==="done";
    }).length;
}