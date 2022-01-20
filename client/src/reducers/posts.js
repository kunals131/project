import Posts from "../components/Posts/Posts.jsx";

export default  (state=[],action)=>{
    switch(action.type) {
        case 'FETCH_ALL_POSTS':
            return action.payload;
        case 'CREATE_POST' : 
            return [...state, action.payload]
        default : 
            return state;
    }
}