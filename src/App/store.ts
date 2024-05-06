import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ApiSlice } from "./api/apiSlice";
export const store = configureStore({
reducer:{ [ApiSlice.reducerPath]:ApiSlice.reducer
},
middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
devTools: true
})

setupListeners(store.dispatch)