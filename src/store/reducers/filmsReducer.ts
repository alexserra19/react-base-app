import { Film } from "../../utils/interfaces";
import { filmsTypes } from "../types/filmsTypes";


interface IFilmsReducerState {
    filmsList?: Array<Film>;
    favs?: Array<any>;
    isLoading: Boolean
}

export const initialState: IFilmsReducerState = {
    filmsList: [],
    favs: [],
    isLoading: false
};

const filmsReducer = (state: IFilmsReducerState = initialState, action: any) => {
    switch (action.type) {

        case filmsTypes.INITIALIZE_START:
            return {
                ...state,
                isLoading: true
            }

        case filmsTypes.INITIALIZE_FINISH:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
};

export default filmsReducer;
