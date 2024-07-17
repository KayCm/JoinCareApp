package com.joincareapp.Modules.JavaParts;

import androidx.annotation.NonNull;

import java.time.LocalDateTime;

public class Bluetooth {

    public String GetTime() {

        LocalDateTime now = LocalDateTime.now();

        return now+"";

    }
}
