import { configureStore } from '@reduxjs/toolkit';
import { cryptoReducers} from "@/features/cryptosSlice";
import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        crypto: cryptoReducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializable: true, // (проверяет, что state содержит только сериализуемые данные).
            immutableCheck: true // (проверяет, что state не изменяется напрямую).
        })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;