import { stateType } from './redux_store';

export const getLogin = (state: stateType) => {
    return state.differentPage.login
}
