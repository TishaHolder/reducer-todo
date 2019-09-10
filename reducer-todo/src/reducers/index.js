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
export function reducer(state, action) {
    switch(action.type){

        default:
            return state;

    }    

}