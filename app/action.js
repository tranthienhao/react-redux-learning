function addItem(item){
  return {type: "ADD_ITEM", item: item};
}
function delItem(index){
  return {type: "DEL_ITEM", index}; // ES6: Rut gon khi tao mot bien = bien cung ten
}
function toogleIsAdding(){
  return {type: "TOGGLE_IS_ADDING"};
}

module.exports = {addItem, delItem, toogleIsAdding};
