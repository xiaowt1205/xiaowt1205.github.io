gdjs.Game_45Scene_451Code = {};
gdjs.Game_45Scene_451Code.repeatCount2 = 0;

gdjs.Game_45Scene_451Code.repeatIndex2 = 0;

gdjs.Game_45Scene_451Code.GDtimerObjects1= [];
gdjs.Game_45Scene_451Code.GDtimerObjects2= [];
gdjs.Game_45Scene_451Code.GDtimerObjects3= [];
gdjs.Game_45Scene_451Code.GDplayerObjects1= [];
gdjs.Game_45Scene_451Code.GDplayerObjects2= [];
gdjs.Game_45Scene_451Code.GDplayerObjects3= [];
gdjs.Game_45Scene_451Code.GDBGObjects1= [];
gdjs.Game_45Scene_451Code.GDBGObjects2= [];
gdjs.Game_45Scene_451Code.GDBGObjects3= [];
gdjs.Game_45Scene_451Code.GDshipObjects1= [];
gdjs.Game_45Scene_451Code.GDshipObjects2= [];
gdjs.Game_45Scene_451Code.GDshipObjects3= [];
gdjs.Game_45Scene_451Code.GDinfoObjects1= [];
gdjs.Game_45Scene_451Code.GDinfoObjects2= [];
gdjs.Game_45Scene_451Code.GDinfoObjects3= [];

gdjs.Game_45Scene_451Code.conditionTrue_0 = {val:false};
gdjs.Game_45Scene_451Code.condition0IsTrue_0 = {val:false};
gdjs.Game_45Scene_451Code.condition1IsTrue_0 = {val:false};
gdjs.Game_45Scene_451Code.condition2IsTrue_0 = {val:false};
gdjs.Game_45Scene_451Code.conditionTrue_1 = {val:false};
gdjs.Game_45Scene_451Code.condition0IsTrue_1 = {val:false};
gdjs.Game_45Scene_451Code.condition1IsTrue_1 = {val:false};
gdjs.Game_45Scene_451Code.condition2IsTrue_1 = {val:false};


gdjs.Game_45Scene_451Code.eventsList0x751754 = function(runtimeScene) {

{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 5;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(5);
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 5;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}}

}


}; //End of gdjs.Game_45Scene_451Code.eventsList0x751754
gdjs.Game_45Scene_451Code.eventsList0x7446f4 = function(runtimeScene) {

{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 3;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "faster", false);
}
{ //Subevents
gdjs.Game_45Scene_451Code.eventsList0x751754(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Game_45Scene_451Code.eventsList0x7446f4
gdjs.Game_45Scene_451Code.eventsList0x74a76c = function(runtimeScene) {

}; //End of gdjs.Game_45Scene_451Code.eventsList0x74a76c
gdjs.Game_45Scene_451Code.eventsList0x765c0c = function(runtimeScene) {

{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
gdjs.Game_45Scene_451Code.condition1IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 1;
}if ( gdjs.Game_45Scene_451Code.condition0IsTrue_0.val ) {
{
{gdjs.Game_45Scene_451Code.conditionTrue_1 = gdjs.Game_45Scene_451Code.condition1IsTrue_0;
gdjs.Game_45Scene_451Code.condition0IsTrue_1.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 3;
if( gdjs.Game_45Scene_451Code.condition0IsTrue_1.val ) {
    gdjs.Game_45Scene_451Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Game_45Scene_451Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


}; //End of gdjs.Game_45Scene_451Code.eventsList0x765c0c
gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Game_45Scene_451Code.GDplayerObjects1});gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDshipObjects1Objects = Hashtable.newFrom({"ship": gdjs.Game_45Scene_451Code.GDshipObjects1});gdjs.Game_45Scene_451Code.eventsList0x746234 = function(runtimeScene) {

{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) <= -(1);
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(-(1));
}}

}


}; //End of gdjs.Game_45Scene_451Code.eventsList0x746234
gdjs.Game_45Scene_451Code.eventsList0x759964 = function(runtimeScene) {

{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) >= 1;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


}; //End of gdjs.Game_45Scene_451Code.eventsList0x759964
gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDshipObjects2Objects = Hashtable.newFrom({"ship": gdjs.Game_45Scene_451Code.GDshipObjects2});gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDshipObjects2Objects = Hashtable.newFrom({"ship": gdjs.Game_45Scene_451Code.GDshipObjects2});gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDshipObjects1Objects = Hashtable.newFrom({"ship": gdjs.Game_45Scene_451Code.GDshipObjects1});gdjs.Game_45Scene_451Code.eventsList0x6a6fbc = function(runtimeScene) {

{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_451Code.GDshipObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDshipObjects2Objects, 160, -(600), "");
}{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects2[i].flipY(true);
}
}{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects2[i].setWidth(256);
}
}{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects2[i].setHeight(480);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shipSpawn");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\boat pass by.mp3", false, 60, 1);
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 2;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_451Code.GDshipObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDshipObjects2Objects, 408, -(600), "");
}{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects2[i].flipY(true);
}
}{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects2[i].setWidth(256);
}
}{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects2.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects2[i].setHeight(480);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shipSpawn");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\boat pass by.mp3", false, 60, 1);
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 3;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_451Code.GDshipObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDshipObjects1Objects, 640, -(600), "");
}{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects1[i].flipY(true);
}
}{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects1[i].setWidth(256);
}
}{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects1[i].setHeight(480);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "shipSpawn");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\boat pass by.mp3", false, 60, 1);
}}

}


}; //End of gdjs.Game_45Scene_451Code.eventsList0x6a6fbc
gdjs.Game_45Scene_451Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{



}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}{runtimeScene.getVariables().get("timer_number").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().get("complete").setNumber(0);
}
{ //Subevents
gdjs.Game_45Scene_451Code.eventsList0x7446f4(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_451Code.repeatCount2 = 1;
for(gdjs.Game_45Scene_451Code.repeatIndex2 = 0;gdjs.Game_45Scene_451Code.repeatIndex2 < gdjs.Game_45Scene_451Code.repeatCount2;++gdjs.Game_45Scene_451Code.repeatIndex2) {

gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "counter");
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().get("timer_number").sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}}
}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer_number")) == 0;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_45Scene_451Code.eventsList0x765c0c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Game_45Scene_451Code.GDtimerObjects1.createFrom(runtimeScene.getObjects("timer"));
{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDtimerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDtimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer_number"))));
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


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
}

}


{

gdjs.Game_45Scene_451Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.Game_45Scene_451Code.GDshipObjects1.createFrom(runtimeScene.getObjects("ship"));

gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDplayerObjects1Objects, gdjs.Game_45Scene_451Code.mapOfGDgdjs_46Game_9545Scene_95451Code_46GDshipObjects1Objects, false, runtimeScene, false);
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


{



}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(8);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\s1.mp3", false, 70, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\Swimming Sound Effect.mp3", false, 70, 1);
}}

}


{

gdjs.Game_45Scene_451Code.GDBGObjects1.createFrom(runtimeScene.getObjects("BG"));

gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_45Scene_451Code.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.Game_45Scene_451Code.GDBGObjects1[i].getY() >= (gdjs.Game_45Scene_451Code.GDBGObjects1[i].getHeight()) ) {
        gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = true;
        gdjs.Game_45Scene_451Code.GDBGObjects1[k] = gdjs.Game_45Scene_451Code.GDBGObjects1[i];
        ++k;
    }
}
gdjs.Game_45Scene_451Code.GDBGObjects1.length = k;}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_45Scene_451Code.GDBGObjects1 */
{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDBGObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDBGObjects1[i].setY(-((gdjs.Game_45Scene_451Code.GDBGObjects1[i].getHeight())) + 20);
}
}}

}


{


{
gdjs.Game_45Scene_451Code.GDBGObjects1.createFrom(runtimeScene.getObjects("BG"));
{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDBGObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDBGObjects1[i].setY(gdjs.Game_45Scene_451Code.GDBGObjects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{



}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
gdjs.Game_45Scene_451Code.condition1IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.Game_45Scene_451Code.condition0IsTrue_0.val ) {
{
{gdjs.Game_45Scene_451Code.conditionTrue_1 = gdjs.Game_45Scene_451Code.condition1IsTrue_0;
gdjs.Game_45Scene_451Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7351052);
}
}}
if (gdjs.Game_45Scene_451Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).sub(1);
}
{ //Subevents
gdjs.Game_45Scene_451Code.eventsList0x746234(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
gdjs.Game_45Scene_451Code.condition1IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.Game_45Scene_451Code.condition0IsTrue_0.val ) {
{
{gdjs.Game_45Scene_451Code.conditionTrue_1 = gdjs.Game_45Scene_451Code.condition1IsTrue_0;
gdjs.Game_45Scene_451Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7707196);
}
}}
if (gdjs.Game_45Scene_451Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Game_45Scene_451Code.eventsList0x759964(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == -(1);
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_451Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDplayerObjects1[i].setX(192);
}
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_451Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDplayerObjects1[i].setX(453);
}
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_451Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDplayerObjects1[i].setX(672);
}
}}

}


{



}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.randomInRange(1.5, 2), "shipSpawn");
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(1, 3));
}
{ //Subevents
gdjs.Game_45Scene_451Code.eventsList0x6a6fbc(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Game_45Scene_451Code.GDshipObjects1.createFrom(runtimeScene.getObjects("ship"));
{for(var i = 0, len = gdjs.Game_45Scene_451Code.GDshipObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_451Code.GDshipObjects1[i].setY(gdjs.Game_45Scene_451Code.GDshipObjects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}}

}


{



}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(8);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(3);
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(10);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(8);
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(12);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(13);
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(12);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(18);
}}

}


{


gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_451Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 5;
}if (gdjs.Game_45Scene_451Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(12);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(25);
}}

}


}; //End of gdjs.Game_45Scene_451Code.eventsList0xb5aa0


gdjs.Game_45Scene_451Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_45Scene_451Code.GDtimerObjects1.length = 0;
gdjs.Game_45Scene_451Code.GDtimerObjects2.length = 0;
gdjs.Game_45Scene_451Code.GDtimerObjects3.length = 0;
gdjs.Game_45Scene_451Code.GDplayerObjects1.length = 0;
gdjs.Game_45Scene_451Code.GDplayerObjects2.length = 0;
gdjs.Game_45Scene_451Code.GDplayerObjects3.length = 0;
gdjs.Game_45Scene_451Code.GDBGObjects1.length = 0;
gdjs.Game_45Scene_451Code.GDBGObjects2.length = 0;
gdjs.Game_45Scene_451Code.GDBGObjects3.length = 0;
gdjs.Game_45Scene_451Code.GDshipObjects1.length = 0;
gdjs.Game_45Scene_451Code.GDshipObjects2.length = 0;
gdjs.Game_45Scene_451Code.GDshipObjects3.length = 0;
gdjs.Game_45Scene_451Code.GDinfoObjects1.length = 0;
gdjs.Game_45Scene_451Code.GDinfoObjects2.length = 0;
gdjs.Game_45Scene_451Code.GDinfoObjects3.length = 0;

gdjs.Game_45Scene_451Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Game_45Scene_451Code'] = gdjs.Game_45Scene_451Code;
