import { configureStore} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { LoginSlice } from "./reducers_slices/login_gre_sto_slice"
import { HandlersSlice } from "./reducers_slices/handler_gre_sto_slice"
import { SignUpSlice } from "./reducers_slices/sign_up_gre_sto_slice"
import { ProductSlice } from "./reducers_slices/products_gre_sto_slice"
import { FiltersSlice } from "./reducers_slices/filters_gre_sto_slice"
import { LoveSlice } from "./reducers_slices/love_gre_sto_slice"
import { SelectedSlice } from "./reducers_slices/shopcar_gre_sto_slice"



// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import { rootReducer } from "./reducers_slices/reducer";

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['login',"love","shopcar"], // In this example, we persist the 'user' reducer
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
        products: ProductSlice.reducer,
        filters: FiltersSlice.reducer,
        love: LoveSlice.reducer,
        shopcar: SelectedSlice.reducer
    }
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector