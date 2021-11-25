import { AccionesSiglas, UnionAccionesSiglas } from "./actions";
import { SiglasI } from "./appState";

const siglasInitialState: SiglasI = {
    loading: false,
    error: false,
    history: new Array(),
    user: {},
    currentData: []
    
};

export function siglasReducer(state: any = siglasInitialState, actions: UnionAccionesSiglas): any {
    switch (actions.type) {
        case AccionesSiglas.EMPTY: {
            const newState = {
                ...siglasInitialState,
            };

            return newState;
        }
        case AccionesSiglas.SET_USER: {
            const newState = {
                ...state,
                user: { ...actions.payload },
            };

            return newState;
        }
        case AccionesSiglas.SET_HISTORY: {
            const newState = {
                ...state,
                history: actions.payload,
            };

            return newState;
        }
        case AccionesSiglas.LOADING: {
            const newState = {
                ...state,
                loading: actions.payload ,
            };

            return newState;
        }
        case AccionesSiglas.ERROR: {
            const newState = {
                ...state,
                error: actions.payload,
            };

            return newState;
        }
        case AccionesSiglas.SET_CURRENT_DATA: {
            const newState = {
                ...state,
                currentData: actions.payload,
            };

            return newState;
        }
        default:
            return state;
    }
}
