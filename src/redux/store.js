import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { rootPersistConfig, rootReducer } from './rootReducer';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';



const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer),
    middleware: () => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});

const persist = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch;

export { store, persist, dispatch, useDispatch, useSelector }
