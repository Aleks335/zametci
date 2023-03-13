import {createSlice} from "@reduxjs/toolkit";
import {AuthApi} from "./authApi";

// создать файл authSlice.js

const authSlice = createSlice({
    // как выглядит срез
    name: 'authSlice',// название
    tagTypes: ['Text'],
    initialState: {
        massObj: [],
    }, // как выглядит изначально
    extraReducers: ((builder) => {
        // для регестрации
        builder.addMatcher(
            // AuthApi файл getAllFetch - функция
            AuthApi.endpoints.getAllFetch.matchFulfilled,// следим имеено за getAllFetch получаем токен для авторизации
            (state, action) => {
                // console.log('notes',action.payload)
                state.massObj = action.payload; // получили токе через action.payload

                // console.log('extra');
                // console.log(state);
                // console.log(action.payload.length);
            }
        );
    }),
    // reducers:{// кка может меняться
    //     addOblRed(state, action){
    //         console.log('action.payload', action.payload)
    //         state.massObj =  state.massObj.map((item)=>({...item,  red:item.text.includes(action.payload)}))
    //     },
    //
    //     sorting(state, action){
    //         //sort искажает массив и возращает новый массив
    //         state.massObj.sort((a, b)=>{
    //             if(a.text > b.text){return 1}   // если 1 больше 2
    //             if(a.text < b.text){return -1}     // если 1 меньше 2
    //             if(a.text === b.text){return 0} // если 1 равны 2
    //         })
    //         console.log('1111',state.massObj)
    //     },
    //     cancel(state, action){
    //         state.massObj = state.copyMassObj
    //     }
    // }
})

export const {massObj} = authSlice.actions
export default authSlice.reducer