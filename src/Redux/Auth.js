import { createSlice } from "@reduxjs/toolkit";

const Authslice = createSlice(
    {
        name: 'auth',
        initialState: {
            user : null,
            isAuthenticated : false
        },
        reducers : {
            login (state , action) {
            state.user = action.payload.user
            state.isAuthenticated = true
            } ,
            logout (state){
                state.user = null
                state.isAuthenticated = false

            }
        }
    }
)


export const {login , logout } = Authslice.actions
export default Authslice.reducer