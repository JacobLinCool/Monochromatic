let livingroom_bigTable,livingroom_door2bed
let livingroom_door2outside,livingroom_door2parent
let livingroom_flower,livingroom_knife
let livingroom_photo,livingroom_sova,livingroom_tv

ColorStatus = 0
UnlockedStatus = 0

function showLivingRoom(){
    livingroom_bigTable.show()
    livingroom_tv.show()
    livingroom_sova.show()
    livingroom_photo.show()
    livingroom_knife.show()
    livingroom_flower.show()
    livingroom_door2parent.show()
    livingroom_door2bed.show()
    livingroom_door2outside.show()
}

function hideLivingRoom(){
    livingroom_bigTable.hide()
    livingroom_tv.hide()
    livingroom_sova.hide()
    livingroom_photo.hide()
    livingroom_knife.hide()
    livingroom_flower.hide()
    livingroom_door2parent.hide()
    livingroom_door2bed.hide()
    livingroom_door2outside.hide()
}

async function UnlockRed(){

    isControlingCharacter = 0
    

    ColorStatus = 1
    UnlockedStatus = 1
    flash_idx = 1
    FlashLightWhite_getXY()
    fadeOutAnimation(35);
    await delay(1500);
    document.body.style.opacity = 1
    dialogBox.show()
    FlashLightWhite.hide()
    FlashLightRed.show()
    dialogBoxFunction("What happened !?")
    await delay(2000)
    fadeOutAnimation(25);
    FlashLightWhite.show()
    FlashLightRed.hide()
    dialogBox.hide()
    await delay(1000);
    FlashLightWhite.hide()
    FlashLightRed.show()
    fadeInAnimation(25);
    await delay(1000);
    FlashLightWhite.show()
    FlashLightRed.hide()
    fadeOutAnimation(25);
    await delay(1000);
    FlashLightWhite.hide()
    FlashLightRed.show()
    fadeInAnimation(25);
    await delay(1000);
    
    isControlingCharacter = 1

}


function livingroom_sovaDialogBox(){

    if(UnlockedStatus == 0) UnlockRed()
    else{
        


    }

}


async function living_roomSovaAnimation(){
    
    var now = 1
    var q = setInterval(() => {
        now = now == 1 ? 2 : 1;
        if(ColorStatus == 1){
            livingroom_sova.attribute("src","image/red/livingroom_sova" + (now).toString() + ".png")
        }
        else{
            livingroom_sova.attribute("src","image/livingroom_sova" + (now).toString() + ".png")
        }
      }, 100);

}

async function livingroom_door2bedDialogBox(){


    showBedRoom()
    hideLivingRoom()
    mainCharacter.style("top:58%;left:73%")
    MoveBorder = ["bedroom_Bed","bedroom_pcDesk","safeBox","bedroom_date","bedroom_bookshelf","bedroom_chair"
                ,"bedroom_closet","bedroom_door"]; // 各個物件
    PressEBorder = [0,1,2,3,4,6,7]
    FlashLightWhite_getXY()
    ScreenNow = 1

}


function start_SceneLivingRoom(){
    
    ScreenNow = 2
    mainCharacter.style("top:55%;left:20%")
    FlashLightWhite_getXY()

    MoveBorder = ["livingroom_bigTable","livingroom_door2bed","livingroom_door2outside","livingroom_door2parent"
                    ,"livingroom_flower","livingroom_knife","livingroom_photo","livingroom_sova",
                    "livingroom_tv"]
    PressEBorder = [0,1,2,3,4,5,6,7,8]
    WallBorder = [15,85,15,85]

    livingroom_bigTable = createImg("image/livingroom_bigTable.png","bed")
    livingroom_bigTable.style("position:absolute;top:35%;left:53%;width:17%;height:25%;");
    livingroom_bigTable.attribute("id","livingroom_bigTable")
    livingroom_bigTable.show()

    livingroom_door2bed = createImg("image/livingroom_door2bed.png","bed")
    livingroom_door2bed.style("position:absolute;top:59%;left:15%;width:3%;height:20%;");
    livingroom_door2bed.attribute("id","livingroom_door2bed")
    livingroom_door2bed.show()

    livingroom_door2outside = createImg("image/livingroom_door2outside.png","bed")
    livingroom_door2outside.style("position:absolute;top:81%;left:69%;width:11%;height:4%;");
    livingroom_door2outside.attribute("id","livingroom_door2outside")
    livingroom_door2outside.show()

    livingroom_door2parent = createImg("image/livingroom_door2parent.png","bed")
    livingroom_door2parent.style("position:absolute;top:15%;left:69%;width:11%;height:4%;");
    livingroom_door2parent.attribute("id","livingroom_door2parent")
    livingroom_door2parent.show()

    livingroom_flower = createImg("image/livingroom_flower.png","bed")
    livingroom_flower.style("position:absolute;top:79%;left:45%;width:12%;height:6%;");
    livingroom_flower.attribute("id","livingroom_flower")
    livingroom_flower.show()

    livingroom_knife = createImg("image/livingroom_knife.png","bed")
    livingroom_knife.style("position:absolute;top:30%;left:28%;width:10%;height:18%;");
    livingroom_knife.attribute("id","livingroom_knife")
    livingroom_knife.show()

    livingroom_photo = createImg("image/livingroom_photo_label.png","bed")
    livingroom_photo.style("position:absolute;top:50%;left:82%;width:3%;height:12%;");
    livingroom_photo.attribute("id","livingroom_photo")
    livingroom_photo.show()

    livingroom_sova = createImg("image/livingroom_sova.png","bed")
    livingroom_sova.style("position:absolute;top:25%;left:40%;width:7%;height:28%;");
    livingroom_sova.attribute("id","livingroom_sova")
    livingroom_sova.show()


    livingroom_tv = createImg("image/livingroom_tv.png","bed")
    livingroom_tv.style("position:absolute;top:30%;left:15%;width:4%;height:18%;");
    livingroom_tv.attribute("id","livingroom_tv")
    livingroom_tv.show()



    living_roomSovaAnimation()
}