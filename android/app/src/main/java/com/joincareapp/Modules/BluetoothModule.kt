package com.joincareapp.Modules

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.joincareapp.Modules.JavaParts.Bluetooth
import com.joincareapp.Modules.JavaParts.NativeActivity


class BluetoothModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext){
    override fun getName(): String {
        return "BluetoothModule"
    }


    private var nativePromise: Promise? = null

    private val activityEventListener = object : BaseActivityEventListener(){
        override fun onActivityResult(activity: Activity?,requestCode: Int,resultCode: Int,intent: Intent?) {

            if (requestCode == 999) {

                val str = intent?.getStringExtra("respond");

                nativePromise?.resolve(str)

            }else{

                System.out.println("abc123")
            }

        }
    }

    init {
        reactContext.addActivityEventListener(activityEventListener)
    }

//    @ReactMethod fun openEvent(name:String,promise: Promise){
//
//        nativePromise = promise
//
//        val intent = Intent(currentActivity, NativeActivity::class.java);
//
//        intent.putExtra("name",name);
//
//        currentActivity?.startActivityForResult(intent,999);
//
//    }

    @ReactMethod fun openNativeEvent(name: String,promise: Promise) {

        nativePromise = promise

        val intent = Intent(currentActivity, NativeActivity::class.java);

        intent.putExtra("name",name);

        currentActivity?.startActivityForResult(intent,999);


    }

    @ReactMethod fun connectEvent(name: String,callback:Callback ) {

        val time =  Bluetooth().GetTime(); //调用java

        val map = Arguments.createMap()
        map.putString("key",time)
        callback.invoke(map) // 返回数据

        val intent = Intent(currentActivity, NativeActivity::class.java);

        intent.putExtra("name",name);

        currentActivity?.startActivityForResult(intent,999);



    }

}