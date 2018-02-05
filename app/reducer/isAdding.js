
var isAddingReducer = (state = false, action) =>{
  switch(action.type){
    case 'TOGGLE_IS_ADDING': // neu chi thi la TOOGLE_IS_ADDING thi lay state cu va phu dinh gia tri
      return !state;
    default:
      return state;
  }
}
module.exports = isAddingReducer;
