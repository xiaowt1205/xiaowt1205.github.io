gdjs.Game_45Scene_454Code = {};
gdjs.Game_45Scene_454Code.repeatCount2 = 0;

gdjs.Game_45Scene_454Code.repeatIndex2 = 0;

gdjs.Game_45Scene_454Code.GDtimerObjects1= [];
gdjs.Game_45Scene_454Code.GDtimerObjects2= [];
gdjs.Game_45Scene_454Code.GDtimerObjects3= [];
gdjs.Game_45Scene_454Code.GDBGObjects1= [];
gdjs.Game_45Scene_454Code.GDBGObjects2= [];
gdjs.Game_45Scene_454Code.GDBGObjects3= [];
gdjs.Game_45Scene_454Code.GDPlayerObjects1= [];
gdjs.Game_45Scene_454Code.GDPlayerObjects2= [];
gdjs.Game_45Scene_454Code.GDPlayerObjects3= [];
gdjs.Game_45Scene_454Code.GDnetObjects1= [];
gdjs.Game_45Scene_454Code.GDnetObjects2= [];
gdjs.Game_45Scene_454Code.GDnetObjects3= [];
gdjs.Game_45Scene_454Code.GDinfoObjects1= [];
gdjs.Game_45Scene_454Code.GDinfoObjects2= [];
gdjs.Game_45Scene_454Code.GDinfoObjects3= [];

gdjs.Game_45Scene_454Code.conditionTrue_0 = {val:false};
gdjs.Game_45Scene_454Code.condition0IsTrue_0 = {val:false};
gdjs.Game_45Scene_454Code.condition1IsTrue_0 = {val:false};
gdjs.Game_45Scene_454Code.condition2IsTrue_0 = {val:false};
gdjs.Game_45Scene_454Code.conditionTrue_1 = {val:false};
gdjs.Game_45Scene_454Code.condition0IsTrue_1 = {val:false};
gdjs.Game_45Scene_454Code.condition1IsTrue_1 = {val:false};
gdjs.Game_45Scene_454Code.condition2IsTrue_1 = {val:false};


gdjs.Game_45Scene_454Code.eventsList0x75350c = function(runtimeScene) {

{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 5;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(5);
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 5;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0x75350c
gdjs.Game_45Scene_454Code.eventsList0x76677c = function(runtimeScene) {

{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 3;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "faster", false);
}
{ //Subevents
gdjs.Game_45Scene_454Code.eventsList0x75350c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0x76677c
gdjs.Game_45Scene_454Code.eventsList0x67c8f4 = function(runtimeScene) {

}; //End of gdjs.Game_45Scene_454Code.eventsList0x67c8f4
gdjs.Game_45Scene_454Code.eventsList0x717004 = function(runtimeScene) {

{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
gdjs.Game_45Scene_454Code.condition1IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 1;
}if ( gdjs.Game_45Scene_454Code.condition0IsTrue_0.val ) {
{
{gdjs.Game_45Scene_454Code.conditionTrue_1 = gdjs.Game_45Scene_454Code.condition1IsTrue_0;
gdjs.Game_45Scene_454Code.condition0IsTrue_1.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 3;
if( gdjs.Game_45Scene_454Code.condition0IsTrue_1.val ) {
    gdjs.Game_45Scene_454Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Game_45Scene_454Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0x717004
gdjs.Game_45Scene_454Code.eventsList0x74a65c = function(runtimeScene) {

{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) >= 4;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0x74a65c
gdjs.Game_45Scene_454Code.eventsList0x6f560c = function(runtimeScene) {

{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(3);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 6;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects1.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects1[i].setAnimation(4);
}
}}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0x6f560c
gdjs.Game_45Scene_454Code.eventsList0x75637c = function(runtimeScene) {

{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(3);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 7;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects1.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects1[i].setAnimation(4);
}
}}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0x75637c
gdjs.Game_45Scene_454Code.eventsList0x7472e4 = function(runtimeScene) {

{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 6;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(3);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 8;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects1.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects1[i].setAnimation(4);
}
}}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0x7472e4
gdjs.Game_45Scene_454Code.eventsList0x76073c = function(runtimeScene) {

{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(3);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 9;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(4);
}
}}

}


{


{
}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0x76073c
gdjs.Game_45Scene_454Code.eventsList0x6b075c = function(runtimeScene) {

{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 7;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(3);
}
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 9;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_454Code.GDnetObjects2.createFrom(runtimeScene.getObjects("net"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDnetObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDnetObjects2[i].setAnimation(4);
}
}}

}


{


{
}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0x6b075c
gdjs.Game_45Scene_454Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{



}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}{runtimeScene.getVariables().get("timer_number").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().get("complete").setNumber(0);
}
{ //Subevents
gdjs.Game_45Scene_454Code.eventsList0x76677c(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_454Code.repeatCount2 = 1;
for(gdjs.Game_45Scene_454Code.repeatIndex2 = 0;gdjs.Game_45Scene_454Code.repeatIndex2 < gdjs.Game_45Scene_454Code.repeatCount2;++gdjs.Game_45Scene_454Code.repeatIndex2) {

gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "counter");
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().get("timer_number").sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}}
}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer_number")) == 0;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_45Scene_454Code.eventsList0x717004(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Game_45Scene_454Code.GDtimerObjects1.createFrom(runtimeScene.getObjects("timer"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDtimerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDtimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer_number"))));
}
}}

}


{



}


{


{
}

}


{



}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(4);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\s4.mp3", false, 60, 1);
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\Garbage-paper box Sound effect.mp3", false, 180, 1);
}}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(1);
}
{ //Subevents
gdjs.Game_45Scene_454Code.eventsList0x74a65c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Game_45Scene_454Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Game_45Scene_454Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_454Code.GDPlayerObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{



}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(10);
}
{ //Subevents
gdjs.Game_45Scene_454Code.eventsList0x6f560c(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(12);
}
{ //Subevents
gdjs.Game_45Scene_454Code.eventsList0x75637c(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(14);
}
{ //Subevents
gdjs.Game_45Scene_454Code.eventsList0x7472e4(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(16);
}
{ //Subevents
gdjs.Game_45Scene_454Code.eventsList0x76073c(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 5;
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(18);
}
{ //Subevents
gdjs.Game_45Scene_454Code.eventsList0x6b075c(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_454Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1));
}if (gdjs.Game_45Scene_454Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


}; //End of gdjs.Game_45Scene_454Code.eventsList0xb5aa0


gdjs.Game_45Scene_454Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_45Scene_454Code.GDtimerObjects1.length = 0;
gdjs.Game_45Scene_454Code.GDtimerObjects2.length = 0;
gdjs.Game_45Scene_454Code.GDtimerObjects3.length = 0;
gdjs.Game_45Scene_454Code.GDBGObjects1.length = 0;
gdjs.Game_45Scene_454Code.GDBGObjects2.length = 0;
gdjs.Game_45Scene_454Code.GDBGObjects3.length = 0;
gdjs.Game_45Scene_454Code.GDPlayerObjects1.length = 0;
gdjs.Game_45Scene_454Code.GDPlayerObjects2.length = 0;
gdjs.Game_45Scene_454Code.GDPlayerObjects3.length = 0;
gdjs.Game_45Scene_454Code.GDnetObjects1.length = 0;
gdjs.Game_45Scene_454Code.GDnetObjects2.length = 0;
gdjs.Game_45Scene_454Code.GDnetObjects3.length = 0;
gdjs.Game_45Scene_454Code.GDinfoObjects1.length = 0;
gdjs.Game_45Scene_454Code.GDinfoObjects2.length = 0;
gdjs.Game_45Scene_454Code.GDinfoObjects3.length = 0;

gdjs.Game_45Scene_454Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Game_45Scene_454Code'] = gdjs.Game_45Scene_454Code;
