const reducer = (credientals = [],action) => {
    switch (action.type) {
        case 'POST':
            return action.payload;
        default:
            return credientals;
    }
}

export default reducer