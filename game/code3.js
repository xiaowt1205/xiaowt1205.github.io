gdjs.Game_45Scene_453Code = {};
gdjs.Game_45Scene_453Code.repeatCount2 = 0;

gdjs.Game_45Scene_453Code.repeatIndex2 = 0;

gdjs.Game_45Scene_453Code.GDtimerObjects1= [];
gdjs.Game_45Scene_453Code.GDtimerObjects2= [];
gdjs.Game_45Scene_453Code.GDtimerObjects3= [];
gdjs.Game_45Scene_453Code.GDBG1Objects1= [];
gdjs.Game_45Scene_453Code.GDBG1Objects2= [];
gdjs.Game_45Scene_453Code.GDBG1Objects3= [];
gdjs.Game_45Scene_453Code.GDBG2Objects1= [];
gdjs.Game_45Scene_453Code.GDBG2Objects2= [];
gdjs.Game_45Scene_453Code.GDBG2Objects3= [];
gdjs.Game_45Scene_453Code.GDshipObjects1= [];
gdjs.Game_45Scene_453Code.GDshipObjects2= [];
gdjs.Game_45Scene_453Code.GDshipObjects3= [];
gdjs.Game_45Scene_453Code.GDsonicObjects1= [];
gdjs.Game_45Scene_453Code.GDsonicObjects2= [];
gdjs.Game_45Scene_453Code.GDsonicObjects3= [];
gdjs.Game_45Scene_453Code.GDPlayerObjects1= [];
gdjs.Game_45Scene_453Code.GDPlayerObjects2= [];
gdjs.Game_45Scene_453Code.GDPlayerObjects3= [];
gdjs.Game_45Scene_453Code.GDGOLObjects1= [];
gdjs.Game_45Scene_453Code.GDGOLObjects2= [];
gdjs.Game_45Scene_453Code.GDGOLObjects3= [];
gdjs.Game_45Scene_453Code.GDGORObjects1= [];
gdjs.Game_45Scene_453Code.GDGORObjects2= [];
gdjs.Game_45Scene_453Code.GDGORObjects3= [];
gdjs.Game_45Scene_453Code.GDinfoObjects1= [];
gdjs.Game_45Scene_453Code.GDinfoObjects2= [];
gdjs.Game_45Scene_453Code.GDinfoObjects3= [];

gdjs.Game_45Scene_453Code.conditionTrue_0 = {val:false};
gdjs.Game_45Scene_453Code.condition0IsTrue_0 = {val:false};
gdjs.Game_45Scene_453Code.condition1IsTrue_0 = {val:false};
gdjs.Game_45Scene_453Code.condition2IsTrue_0 = {val:false};
gdjs.Game_45Scene_453Code.conditionTrue_1 = {val:false};
gdjs.Game_45Scene_453Code.condition0IsTrue_1 = {val:false};
gdjs.Game_45Scene_453Code.condition1IsTrue_1 = {val:false};
gdjs.Game_45Scene_453Code.condition2IsTrue_1 = {val:false};


gdjs.Game_45Scene_453Code.eventsList0x6bed84 = function(runtimeScene) {

{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 5;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(5);
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) <= 5;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(5);
}}

}


}; //End of gdjs.Game_45Scene_453Code.eventsList0x6bed84
gdjs.Game_45Scene_453Code.eventsList0x6fc35c = function(runtimeScene) {

{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 3;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "faster", false);
}
{ //Subevents
gdjs.Game_45Scene_453Code.eventsList0x6bed84(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Game_45Scene_453Code.eventsList0x6fc35c
gdjs.Game_45Scene_453Code.eventsList0x765c1c = function(runtimeScene) {

}; //End of gdjs.Game_45Scene_453Code.eventsList0x765c1c
gdjs.Game_45Scene_453Code.eventsList0x781a5c = function(runtimeScene) {

{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 3;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pass", false);
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
gdjs.Game_45Scene_453Code.condition1IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 1;
}if ( gdjs.Game_45Scene_453Code.condition0IsTrue_0.val ) {
{
{gdjs.Game_45Scene_453Code.conditionTrue_1 = gdjs.Game_45Scene_453Code.condition1IsTrue_0;
gdjs.Game_45Scene_453Code.condition0IsTrue_1.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) != 3;
if( gdjs.Game_45Scene_453Code.condition0IsTrue_1.val ) {
    gdjs.Game_45Scene_453Code.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.Game_45Scene_453Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


}; //End of gdjs.Game_45Scene_453Code.eventsList0x781a5c
gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDshipObjects1Objects = Hashtable.newFrom({"ship": gdjs.Game_45Scene_453Code.GDshipObjects1});gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDGOLObjects1Objects = Hashtable.newFrom({"GOL": gdjs.Game_45Scene_453Code.GDGOLObjects1});gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDshipObjects1Objects = Hashtable.newFrom({"ship": gdjs.Game_45Scene_453Code.GDshipObjects1});gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDGORObjects1Objects = Hashtable.newFrom({"GOR": gdjs.Game_45Scene_453Code.GDGORObjects1});gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDsonicObjects1Objects = Hashtable.newFrom({"sonic": gdjs.Game_45Scene_453Code.GDsonicObjects1});gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_45Scene_453Code.GDPlayerObjects1});gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDsonicObjects1Objects = Hashtable.newFrom({"sonic": gdjs.Game_45Scene_453Code.GDsonicObjects1});gdjs.Game_45Scene_453Code.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


{



}


{



}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}{runtimeScene.getVariables().get("timer_number").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{runtimeScene.getGame().getVariables().get("complete").setNumber(0);
}
{ //Subevents
gdjs.Game_45Scene_453Code.eventsList0x6fc35c(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_45Scene_453Code.repeatCount2 = 1;
for(gdjs.Game_45Scene_453Code.repeatIndex2 = 0;gdjs.Game_45Scene_453Code.repeatIndex2 < gdjs.Game_45Scene_453Code.repeatCount2;++gdjs.Game_45Scene_453Code.repeatIndex2) {

gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "counter");
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().get("timer_number").sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}}
}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer_number")) == 0;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Game_45Scene_453Code.eventsList0x781a5c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.Game_45Scene_453Code.GDtimerObjects1.createFrom(runtimeScene.getObjects("timer"));
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDtimerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDtimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer_number"))));
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


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_453Code.GDGOLObjects1.createFrom(runtimeScene.getObjects("GOL"));
gdjs.Game_45Scene_453Code.GDGORObjects1.createFrom(runtimeScene.getObjects("GOR"));
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(0).setString("GoRight");
}{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDGOLObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDGOLObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDGORObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDGORObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\s3.mp3", true, 80, 1.2);
}}

}


{



}


{


{
gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].setAnimationName("idel");
}
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].setX(gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].getX() - (8));
}
}{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].setX(gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].getX() + (8));
}
}{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].setY(gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].getY() - (8));
}
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].setY(gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].getY() + (8));
}
}}

}


{

gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].getX() <= 1 ) {
        gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = true;
        gdjs.Game_45Scene_453Code.GDPlayerObjects1[k] = gdjs.Game_45Scene_453Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_45Scene_453Code.GDPlayerObjects1.length = k;}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_45Scene_453Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].setX(1);
}
}}

}


{

gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].getX() >= 860 ) {
        gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = true;
        gdjs.Game_45Scene_453Code.GDPlayerObjects1[k] = gdjs.Game_45Scene_453Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_45Scene_453Code.GDPlayerObjects1.length = k;}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_45Scene_453Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].setX(860);
}
}}

}


{

gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].getY() >= 980 ) {
        gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = true;
        gdjs.Game_45Scene_453Code.GDPlayerObjects1[k] = gdjs.Game_45Scene_453Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_45Scene_453Code.GDPlayerObjects1.length = k;}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_45Scene_453Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].setY(980);
}
}}

}


{

gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].getY() <= 500 ) {
        gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = true;
        gdjs.Game_45Scene_453Code.GDPlayerObjects1[k] = gdjs.Game_45Scene_453Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_45Scene_453Code.GDPlayerObjects1.length = k;}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_45Scene_453Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDPlayerObjects1[i].setY(500);
}
}}

}


{



}


{

gdjs.Game_45Scene_453Code.GDGOLObjects1.createFrom(runtimeScene.getObjects("GOL"));
gdjs.Game_45Scene_453Code.GDshipObjects1.createFrom(runtimeScene.getObjects("ship"));

gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDshipObjects1Objects, gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDGOLObjects1Objects, false, runtimeScene, false);
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("GoLeft");
}}

}


{

gdjs.Game_45Scene_453Code.GDGORObjects1.createFrom(runtimeScene.getObjects("GOR"));
gdjs.Game_45Scene_453Code.GDshipObjects1.createFrom(runtimeScene.getObjects("ship"));

gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDshipObjects1Objects, gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDGORObjects1Objects, false, runtimeScene, false);
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("GoRight");
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "GoLeft";
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_453Code.GDshipObjects1.createFrom(runtimeScene.getObjects("ship"));
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDshipObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDshipObjects1[i].setX(gdjs.Game_45Scene_453Code.GDshipObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDshipObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDshipObjects1[i].flipX(true);
}
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)) == "GoRight";
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_453Code.GDshipObjects1.createFrom(runtimeScene.getObjects("ship"));
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDshipObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDshipObjects1[i].setX(gdjs.Game_45Scene_453Code.GDshipObjects1[i].getX() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDshipObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDshipObjects1[i].flipX(false);
}
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.7, "ShootSonic");
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShootSonic");
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3));
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
gdjs.Game_45Scene_453Code.GDshipObjects1.createFrom(runtimeScene.getObjects("ship"));
gdjs.Game_45Scene_453Code.GDsonicObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDsonicObjects1Objects, (( gdjs.Game_45Scene_453Code.GDshipObjects1.length === 0 ) ? 0 :gdjs.Game_45Scene_453Code.GDshipObjects1[0].getPointX("")) + gdjs.randomWithStep(-(50), 50, 50), (( gdjs.Game_45Scene_453Code.GDshipObjects1.length === 0 ) ? 0 :gdjs.Game_45Scene_453Code.GDshipObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDsonicObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDsonicObjects1[i].setWidth(75);
}
}{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDsonicObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDsonicObjects1[i].setHeight(125);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDsonicObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDsonicObjects1[i].setZOrder(10);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\shootSonic.mp3", false, 180, 1);
}}

}


{


{
gdjs.Game_45Scene_453Code.GDsonicObjects1.createFrom(runtimeScene.getObjects("sonic"));
{for(var i = 0, len = gdjs.Game_45Scene_453Code.GDsonicObjects1.length ;i < len;++i) {
    gdjs.Game_45Scene_453Code.GDsonicObjects1[i].setY(gdjs.Game_45Scene_453Code.GDsonicObjects1[i].getY() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}}

}


{



}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(5);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(3, 3));
}{runtimeScene.getVariables().getFromIndex(4).setNumber(5);
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(7);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(2, 3));
}{runtimeScene.getVariables().getFromIndex(4).setNumber(7);
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 3;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(9);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(2, 2));
}{runtimeScene.getVariables().getFromIndex(4).setNumber(9);
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 4;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(11);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(1, 2));
}{runtimeScene.getVariables().getFromIndex(4).setNumber(10);
}}

}


{


gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 5;
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(13);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.randomInRange(1, 1));
}{runtimeScene.getVariables().getFromIndex(4).setNumber(11);
}}

}


{



}


{

gdjs.Game_45Scene_453Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Game_45Scene_453Code.GDsonicObjects1.createFrom(runtimeScene.getObjects("sonic"));

gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = false;
{
gdjs.Game_45Scene_453Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDPlayerObjects1Objects, gdjs.Game_45Scene_453Code.mapOfGDgdjs_46Game_9545Scene_95453Code_46GDsonicObjects1Objects, false, runtimeScene, false);
}if (gdjs.Game_45Scene_453Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndScene", false);
}}

}


}; //End of gdjs.Game_45Scene_453Code.eventsList0xb5aa0


gdjs.Game_45Scene_453Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_45Scene_453Code.GDtimerObjects1.length = 0;
gdjs.Game_45Scene_453Code.GDtimerObjects2.length = 0;
gdjs.Game_45Scene_453Code.GDtimerObjects3.length = 0;
gdjs.Game_45Scene_453Code.GDBG1Objects1.length = 0;
gdjs.Game_45Scene_453Code.GDBG1Objects2.length = 0;
gdjs.Game_45Scene_453Code.GDBG1Objects3.length = 0;
gdjs.Game_45Scene_453Code.GDBG2Objects1.length = 0;
gdjs.Game_45Scene_453Code.GDBG2Objects2.length = 0;
gdjs.Game_45Scene_453Code.GDBG2Objects3.length = 0;
gdjs.Game_45Scene_453Code.GDshipObjects1.length = 0;
gdjs.Game_45Scene_453Code.GDshipObjects2.length = 0;
gdjs.Game_45Scene_453Code.GDshipObjects3.length = 0;
gdjs.Game_45Scene_453Code.GDsonicObjects1.length = 0;
gdjs.Game_45Scene_453Code.GDsonicObjects2.length = 0;
gdjs.Game_45Scene_453Code.GDsonicObjects3.length = 0;
gdjs.Game_45Scene_453Code.GDPlayerObjects1.length = 0;
gdjs.Game_45Scene_453Code.GDPlayerObjects2.length = 0;
gdjs.Game_45Scene_453Code.GDPlayerObjects3.length = 0;
gdjs.Game_45Scene_453Code.GDGOLObjects1.length = 0;
gdjs.Game_45Scene_453Code.GDGOLObjects2.length = 0;
gdjs.Game_45Scene_453Code.GDGOLObjects3.length = 0;
gdjs.Game_45Scene_453Code.GDGORObjects1.length = 0;
gdjs.Game_45Scene_453Code.GDGORObjects2.length = 0;
gdjs.Game_45Scene_453Code.GDGORObjects3.length = 0;
gdjs.Game_45Scene_453Code.GDinfoObjects1.length = 0;
gdjs.Game_45Scene_453Code.GDinfoObjects2.length = 0;
gdjs.Game_45Scene_453Code.GDinfoObjects3.length = 0;

gdjs.Game_45Scene_453Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Game_45Scene_453Code'] = gdjs.Game_45Scene_453Code;
