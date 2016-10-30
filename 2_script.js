"use strict";

var i = 0, a = 0;
var item, str = "";

while  (a != 4) {

    str = "";
    item = "#";
    i = 0;
    while (i != 8) {
        if (item == "#") {
            item = " ";
        }
        else {
            item = "#";
        }

        str = str + item;
        i++;
    }

    console.log(str);
    str = "";
    item = "";

    i = 0;

    while (i != 8) {
        if (item == "#") {
            item = " ";
        }
        else {
            item = "#";
        }

        str = str + item;
        i++;
    }
    console.log(str);
    a++;
}