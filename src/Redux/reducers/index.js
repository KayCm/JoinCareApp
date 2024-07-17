import {combineReducers} from 'redux'
import {userInfo} from './UserInfo'
import {appData} from './AppData'


export default combineReducers({
    appData:appData,
})
