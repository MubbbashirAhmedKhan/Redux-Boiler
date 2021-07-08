const INITIAL_STATE = {
    username: 'aatik',
    email:'muubi@gmail.com'
}

export default (state=INITIAL_STATE,action)=> {
    console.log('auth_acion=>',action)
    return state;
}