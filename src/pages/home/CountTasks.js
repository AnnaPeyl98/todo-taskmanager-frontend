import list from '../todo/list';
import './style.css';
export function countToDo(){
    return list.data.filter(function(item){
        return item.status==="inbox";
    }).length;
}
export function countDone(){
    return list.data.filter(function(item){
        return item.status==="done";
    }).length;
}