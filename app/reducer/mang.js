var mangReducer = (state = ['Android', 'iOS', 'React'], action) =>{
  switch(action.type){
    case 'ADD_ITEM':
      return [...state, action.item]; // lay thuoc tinh item tu action dua vao mang
    case 'DEL_ITEM':
      return state.filter((e, i) =>  i != action.index ); //Neu i == index tra ve false va loai item do ra
    default:
      return state;
  }
}

module.exports = mangReducer;
