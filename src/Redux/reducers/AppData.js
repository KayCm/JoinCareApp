import * as TYPES from '../actions/ActionTypes'
import { SET_APPDATA } from "../actions/ActionTypes";


const initAppData = { //app 全局的一些信息
    token:"init",
    address:"init"
}


function save(state) {

    // saveItem("APP_DATA", JSON.stringify({
    //     ...state,
    // })).then(() => {
    //     console.log('Token save success!')
    // }).catch((err) => {
    //     console.log('存储应用数据失败:' + err.message)
    // })

    return state
}


export function appData(state = initAppData, action) {

    switch (action.type) {

        case TYPES.SET_APPDATA: {
            return save({
                ...state,
                ...action.data
            })
        }

        default:
            return state
    }

}
