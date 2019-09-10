//state inside of a reducer must be an object
export const initialState = {
   todoArray: [
        {
            item: 'Code',
            completed: false,
            id: 3892987589            

        },

        {
            item: 'Sleep',
            completed: false,
            id: 3892987544            

        },

        {
            item: 'Eat',
            completed: false,
            id: 3892987478            

        },

        {
            item: 'Repeat',
            completed: false,
            id: 389298751276           

        }
    ]

};

//reducer function takes two parameters, a state and an action
export function reducer(state, action) {//action is everything in the dispatch call in App.js
    switch(action.type){
        //a case for each type of action that we produce
        //case for when our action has a type of "ADD TODO"
        case "ADD TODO": 
        //return an updated value for state
        //if we use return we don't need to use a break statement
        return {
            //gives us a copy of state and we can add below this any keys we want to update            
            ...state, 
            todoArray: [...state.todoArray, {
                item: action.payload,
                completed: false,
                id: Date.now()
            }]//add a new todoItem to the end of the todoArray
        };

        case "TOGGLE COMPLETED":
            return {
                ...state,
                todoArray: state.todoArray.map(todoItem => {
                   if(todoItem.id === action.payload) {
                       return {
                           ...todoItem,
                           completed: !todoItem.completed
                       };
                    }
                       else {
                           return todoItem;
                       }
                   })
                    
                    
            };   
            
        case "CLEAR COMPLETED":
            return {
                ...state,
                todoArray: state.todoArray.filter(todoItem => !todoItem.completed)
            };
            
        default:
            return state;

    }    

}