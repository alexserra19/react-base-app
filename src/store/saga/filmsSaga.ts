import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {filmsTypes} from '../types/filmsTypes'
import filmsActions from '../actions/filmsActions'
import AppConstants from '../../utils/AppConstants';

export function* initialize() {

    console.log('----INITIALIZE CONFIGURATION----')
    //Aqui aniria el carregar la informació del asyncStorage per a poder visualitzarla despres al llistat
    // un cop carregada aquesta es posaria al reducer de phrasesReducer
    //pero no he tingut més temps

}



export default [
    takeLatest(filmsTypes.INITIALIZE_START, initialize),
]