let todos = [];
let items = JSON.parse(localStorage.getItem('items'));
if(items){
    todos = items;
}
export {todos};