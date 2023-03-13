import {configureStore} from "@reduxjs/toolkit";

// нужно создать index.js, authSlice.js, authApi.js в паке store
import numSlice from "./authSlice";
import {AuthApi} from "./authApi";

export default configureStore({// глобальное хранилище из срезов
    // соединяем reducer - срез
    reducer: {
        num: numSlice,
        [AuthApi.reducerPath]: AuthApi.reducer  //подключаем слайс
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(AuthApi.middleware) //
})



