//state inside of a reducer must be an object
export const initialState = {
   todoArray: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589            

        }
    ]

};

//reducer function takes two parameters, a state and an action
export function reducer(state, action) {//action is everything in the dispatch call in App.js
    switch(action.type){
        //a case for each type of action that we produce
        case "ADD_TODO": //case for when our action has a type of "ADD_TODO"
        //return an updated value for state
        return {//if we use return we don't need to use a break statement
            //gives us a copy of state and we can add below this any keys we want to update            
            ...state, 
            todoArray: [...state.todoArray, {item: action.payload, completed: false, id: Date.now()}]//add a new todoItem to the end of the todoArray
        };


        default:
            return state;

    }    

}