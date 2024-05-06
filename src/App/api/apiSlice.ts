import {fetchBaseQuery, createApi} from "@reduxjs/toolkit/query/react"; 

export const ApiSlice = createApi({
baseQuery: fetchBaseQuery({ baseUrl: "localhost:3500"}),
tagTypes:[],
endpoints: builder=>({})
})