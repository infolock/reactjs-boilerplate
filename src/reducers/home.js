const initialState = {};

const DEFAULT_ACTION = {
    type: 'unknown'
};

export default function homeReducer(state = initialState, action = DEFAULT_ACTION) {
    switch(action.type) {
        default:
            return state;
    }
}
