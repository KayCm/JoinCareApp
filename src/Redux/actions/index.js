import * as types from './ActionTypes'
import { SET_APPDATA } from "./ActionTypes";

/**
 * 设置 token
 * @param token
 * @returns {{type, tabId: *}}
 */
export function setAppData(data) {

    global.token = data.token

    return {
        type: types.SET_APPDATA,
        data
    }
}



