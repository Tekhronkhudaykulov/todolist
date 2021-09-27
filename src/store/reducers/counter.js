const initialState = {
    counter : 0
}

const counter = (state = initialState, action) => {
    switch (action.type){
        case 'increment':
            return {
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                counter: state.counter - 1
            }
        case 'reset':
            return {
                counter: 0
            }
        default :
            return  state
    }
}
export default counter;