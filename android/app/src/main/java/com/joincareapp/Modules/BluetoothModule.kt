package com.joincareapp.Modules

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.joincareapp.Modules.JavaParts.Bluetooth


class BluetoothModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext){
    override fun getName(): String {
        return "BluetoothModule"
    }

    @ReactMethod fun searchEvent(name: String,promise: Promise) {

        val arr = Arguments.createArray();

        for(i in 0 until 50){
            arr.pushString(i.toString());
        }

        try {
            promise.resolve(arr) //返回数据
        } catch (e: Throwable) {
            promise.reject("Connect Event Error",e) //返回错误
        }

    }

    @ReactMethod fun connectEvent(name: String,callback:Callback ) {

        val time =  Bluetooth().GetTime(); //调用java

        val map = Arguments.createMap()
        map.putString("key",time)
        callback.invoke(map) // 返回数据
    }

}