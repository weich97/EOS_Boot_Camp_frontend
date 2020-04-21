import {eosioActions} from '../constants';

class UserAction {
    static setUser({name, win_count, lost_count, game}){
        return {
            type: eosioActions.SET_USER,
            name,
            win_count,
            lost_count,
            game,
        }
    }
}

export default UserAction;