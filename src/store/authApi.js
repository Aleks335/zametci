import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const AuthApi = createApi({
    reducerPath: 'AuthApi', // аналог названия
    tagTypes: ['Text'], // заявили все которы есть для перезагрузки страницы
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3222/',
    }),
    // get запрос
    endpoints: (build) => ({
        getAllFetch: build.query({
            query: (param) => {
                return `all?num=${param}`
            },
            providesTags: ['Text'],// get запросе
        }),

        // POST запрос
        addText: build.mutation(
            {
                query: (body) => ({
                    method: "POST",
                    url: "/add ",
                    body: body
                }),
                invalidatesTags: ['Text'] // перезагрузка страницы после выполниения
            }),

        // DELETE запрос
        delText: build.mutation({
            query: (body) => ({
                method: "DELETE",
                url: "/delete",
                body: body //toISOString это универсальный формат для записи даты в виде строки
            })
            , invalidatesTags: ['Text'] // перезагрузка страницы после выполниения
        })
    }),
})

export const {useGetAllFetchQuery, useAddTextMutation, useDelTextMutation} = AuthApi;// экспорт хук для каждого инпоинта
