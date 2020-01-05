gdjs.Game_45Scene_452Code = {};
gdjs.Game_45Scene_452Code.repeatCount2 = 0;

gdjs.Game_45Scene_452Code.repeatIndex2 = 0;

gdjs.Game_45Scene_452Code.GDtimerObjects1= [];
gdjs.Game_45Scene_452Code.GDtimerObjects2= [];
gdjs.Game_45Scene_452Code.GDtimerObjects3= [];
gdjs.Game_45Scene_452Code.GDBGObjects1= [];
gdjs.Game_45Scene_452Code.GDBGObjects2= [];
gdjs.Game_45Scene_452Code.GDBGObjects3= [];
gdjs.Game_45Scene_452Code.GDfishEatObjects1= [];
gdjs.Game_45Scene_452Code.GDfishEatObjects2= [];
gdjs.Game_45Scene_452Code.GDfishEatObjects3= [];
gdjs.Game_45Scene_452Code.GDfishNoEatObjects1= [];
gdjs.Game_45Scene_452Code.GDfishNoEatObjects2= [];
gdjs.Game_45Scene_452Code.GDfishNoEatObjects3= [];
gdjs.Game_45Scene_452Code.GDinfoObjects1= [];
gdjs.Game_45Scene_452Code.GDinfoObjects2= [];
gdjs.Game_45Scene_452Code.GDinfoObjects3= [];

gdjs.Game_45Scene_452Code.conditionTrue_0 = {val:false};
gdjs.Game_45Scene_452Code.condition0IsTrue_0 = {val:false};
gdjs.Game_45Scene_452Code.condition1IsTrue_0 = {val:false};
gdjs.Game_45Scene_452Code.condition2IsTrue_0 = {val:false};
gdjs.Game_45Scene_452Code.conditionTrue_1 = {val:false};
gdjs.Game_45Scene_452Code.condition0IsTrue_1 = {val:false};
gdjs.Game_45Scene_452Code.condition1IsTrue_1 = {val:false};
gdjs.Game_45Scene_452Code.condition2IsTrue_1 = {val:false};


gdjs.Game_45Scene_452Code.eventsList0x6a6f7c = function(runtimeScene) {

{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 5;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(5);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 5;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}}

}


}; //End of gdjs.Game_45Scene_452Code.eventsList0x6a6f7c
gdjs.Game_45Scene_452Code.eventsList0x6b00ac = function(runtimeScene) {

{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 3;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "faster", false);
}
{ //Subevents
gdjs.Game_45Scene_452Code.eventsList0x6a6f7c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Game_45Scene_452Code.eventsList0x6b00ac
gdjs.Game_45Scene_452Code.eventsList0x6b2984 = function(runtimeScene) {

}; //End of gdjs.Game_45Scene_452Code.eventsList0x6b2984
gdjs.Game_45Scene_452Code.eventsList0x7a337c = function(runtimeScene) {

{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
gdjs.Game_45Scene_452Code.condition1IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 1;
}if ( gdjs.Game_45Scene_452Code.condition0IsTrue_0.val ) {
{
{gdjs.Game_45Scene_452Code.conditionTrue_1 = gdjs.Game_45Scene_452Code.condition1IsTrue_0;
gdjs.Game_45Scene_452Code.condition0IsTrue_1.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 3;
if( gdjs.Game_45Scene_452Code.condition0IsTrue_1.val ) {
    gdjs.Game_45Scene_452Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Game_45Scene_452Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


}; //End of gdjs.Game_45Scene_452Code.eventsList0x7a337c
gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishEatObjects1Objects = Hashtable.newFrom({"fishEat": gdjs.Game_45Scene_452Code.GDfishEatObjects1});gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishNoEatObjects1Objects = Hashtable.newFrom({"fishNoEat": gdjs.Game_45Scene_452Code.GDfishNoEatObjects1});gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishEatObjects1Objects = Hashtable.newFrom({"fishEat": gdjs.Game_45Scene_452Code.GDfishEatObjects1});gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishEatObjects1Objects = Hashtable.newFrom({"fishEat": gdjs.Game_45Scene_452Code.GDfishEatObjects1});gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishEatObjects1Objects = Hashtable.newFrom({"fishEat": gdjs.Game_45Scene_452Code.GDfishEatObjects1});gdjs.Game_45Scene_452Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{



}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}{runtimeScene.getVariables().get("timer_number").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().get("complete").setNumber(0);
}
{ //Subevents
gdjs.Game_45Scene_452Code.eventsList0x6b00ac(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_452Code.repeatCount2 = 1;
for(gdjs.Game_45Scene_452Code.repeatIndex2 = 0;gdjs.Game_45Scene_452Code.repeatIndex2 < gdjs.Game_45Scene_452Code.repeatCount2;++gdjs.Game_45Scene_452Code.repeatIndex2) {

gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "counter");
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().get("timer_number").sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}}
}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer_number")) == 0;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_45Scene_452Code.eventsList0x7a337c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Game_45Scene_452Code.GDtimerObjects1.createFrom(runtimeScene.getObjects("timer"));
{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDtimerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDtimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer_number"))));
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


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\s2.mp3", false, 40, 1);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2));
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_452Code.GDfishEatObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishEatObjects1Objects, gdjs.randomWithStep(0, 800, 100), gdjs.randomWithStep(100, 800, 50), "");
}{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishEatObjects1[i].setHeight(70);
}
}{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishEatObjects1[i].setWidth(150);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) <= gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3));
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_452Code.GDfishNoEatObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishNoEatObjects1Objects, gdjs.randomWithStep(0, 800, 100), gdjs.randomWithStep(100, 800, 50), "");
}{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishNoEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishNoEatObjects1[i].setHeight(70);
}
}{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishNoEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishNoEatObjects1[i].setWidth(150);
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}}

}


{

gdjs.Game_45Scene_452Code.GDfishEatObjects1.createFrom(runtimeScene.getObjects("fishEat"));

gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishEatObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_45Scene_452Code.GDfishEatObjects1 */
{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishEatObjects1[i].setHeight(80);
}
}{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishEatObjects1[i].setWidth(160);
}
}{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishEatObjects1[i].setZOrder(100);
}
}}

}


{

gdjs.Game_45Scene_452Code.GDfishEatObjects1.createFrom(runtimeScene.getObjects("fishEat"));

gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishEatObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_45Scene_452Code.GDfishEatObjects1 */
{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishEatObjects1[i].setHeight(70);
}
}{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishEatObjects1[i].setWidth(150);
}
}}

}


{

gdjs.Game_45Scene_452Code.GDfishEatObjects1.createFrom(runtimeScene.getObjects("fishEat"));

gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
gdjs.Game_45Scene_452Code.condition1IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Game_45Scene_452Code.condition0IsTrue_0.val ) {
{
gdjs.Game_45Scene_452Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_45Scene_452Code.mapOfGDgdjs_46Game_9545Scene_95452Code_46GDfishEatObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Game_45Scene_452Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Game_45Scene_452Code.GDfishEatObjects1 */
{for(var i = 0, len = gdjs.Game_45Scene_452Code.GDfishEatObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_452Code.GDfishEatObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(4).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\Eating sound effect.mp3", false, 200, 1);
}}

}


{



}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(5);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(4);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(7);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(5);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(9);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(5);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(11);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 5;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(5);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(13);
}}

}


{


gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_452Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) + 1;
}if (gdjs.Game_45Scene_452Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


}; //End of gdjs.Game_45Scene_452Code.eventsList0xb5aa0


gdjs.Game_45Scene_452Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_45Scene_452Code.GDtimerObjects1.length = 0;
gdjs.Game_45Scene_452Code.GDtimerObjects2.length = 0;
gdjs.Game_45Scene_452Code.GDtimerObjects3.length = 0;
gdjs.Game_45Scene_452Code.GDBGObjects1.length = 0;
gdjs.Game_45Scene_452Code.GDBGObjects2.length = 0;
gdjs.Game_45Scene_452Code.GDBGObjects3.length = 0;
gdjs.Game_45Scene_452Code.GDfishEatObjects1.length = 0;
gdjs.Game_45Scene_452Code.GDfishEatObjects2.length = 0;
gdjs.Game_45Scene_452Code.GDfishEatObjects3.length = 0;
gdjs.Game_45Scene_452Code.GDfishNoEatObjects1.length = 0;
gdjs.Game_45Scene_452Code.GDfishNoEatObjects2.length = 0;
gdjs.Game_45Scene_452Code.GDfishNoEatObjects3.length = 0;
gdjs.Game_45Scene_452Code.GDinfoObjects1.length = 0;
gdjs.Game_45Scene_452Code.GDinfoObjects2.length = 0;
gdjs.Game_45Scene_452Code.GDinfoObjects3.length = 0;

gdjs.Game_45Scene_452Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Game_45Scene_452Code'] = gdjs.Game_45Scene_452Code;
