import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
// import { rootReducer } from "./reducers_slices/reducer"
// import { createStore } from 'redux'
import { LoginSlice } from "./reducers_slices/login_gre_sto_slice"
import { HandlersSlice } from "./reducers_slices/handler_gre_sto_slice"
import { SignUpSlice } from "./reducers_slices/sign_up_gre_sto_slice"
import { Location } from "./reducers_slices/location.gre.sto.slice"
import { configureStore } from "@reduxjs/toolkit"
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage,
//     Specify the reducers you want to persist
//     whitelist: ['login'], // In this example, we persist the 'user' reducer
//   };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(persistedReducer);
// export const persistor = persistStore(store);

// export const store = createStore(rootReducer);
export const store  = configureStore({
    reducer:{
        login: LoginSlice.reducer,
        handler: HandlersSlice.reducer,
        newUser: SignUpSlice.reducer,
        location: Location.reducer
    }
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector