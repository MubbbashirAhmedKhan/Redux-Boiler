const INITIAL_STATE = {
    app_name: 'WhatsAPP'
}

export default (state=INITIAL_STATE, action)=> {
    console.log('app_action=>',action)
    return state;
}