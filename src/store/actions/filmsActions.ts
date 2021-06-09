import {filmsTypes} from '../types/filmsTypes';
import { Action } from 'redux';
import { Film } from '../../utils/interfaces';

const filmsActions: IFilmsActions = {
    initializeStart() {
        return {
            type: filmsTypes.INITIALIZE_START,
        };
    },
    initializeFinish(filmsList: Array<Film>) {
        return {
            type: filmsTypes.INITIALIZE_FINISH,
            data: filmsList
        };
    },
}

export default filmsActions;

export interface IFilmsActions {
    initializeStart: () => Action;
    initializeFinish: (filmsList: Array<Film>) => Action;
}
