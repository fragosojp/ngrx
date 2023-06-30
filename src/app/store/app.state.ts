import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppContador{
    contador: number;
}

export const appInicializar: IAppContador = {
    contador: 10
} 

export const incrementa = createAction('[App] Incrementar Contador')
export const reduz = createAction('[App] Reduz Contador')
export const definir = createAction('[App] Definir contador', props<{ payload: number }>())

export const appReducer = createReducer(
    appInicializar,
    on(incrementa, (state) => {
        state = {
            ...state,
            contador: state.contador + 1
        }
        return state
    }),   
    on(reduz, (state) => {
        state = {
            ...state,
            contador: state.contador - 1
        }
        return state
    }),   
    on(definir, (state, {payload}) => {
        state = {
            ...state,
            contador: payload
        }
        return state
    }),   
)