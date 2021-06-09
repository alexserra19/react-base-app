import { all } from 'redux-saga/effects'
import filmsSaga from './filmsSaga';


export default function* rootSaga() {
    yield all([
        ...filmsSaga,
    ])
}