gdjs.PassCode = {};
gdjs.PassCode.repeatCount2 = 0;

gdjs.PassCode.repeatIndex2 = 0;

gdjs.PassCode.GDtimerObjects1= [];
gdjs.PassCode.GDtimerObjects2= [];
gdjs.PassCode.GDBGObjects1= [];
gdjs.PassCode.GDBGObjects2= [];

gdjs.PassCode.conditionTrue_0 = {val:false};
gdjs.PassCode.condition0IsTrue_0 = {val:false};
gdjs.PassCode.condition1IsTrue_0 = {val:false};


gdjs.PassCode.eventsList0x74aa3c = function(runtimeScene) {

}; //End of gdjs.PassCode.eventsList0x74aa3c
gdjs.PassCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.PassCode.condition0IsTrue_0.val = false;
{
gdjs.PassCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PassCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(5);
}{runtimeScene.getGame().getVariables().getFromIndex(4).add(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\pass.mp3", false, 70, 1.2);
}}

}


{


gdjs.PassCode.repeatCount2 = 1;
for(gdjs.PassCode.repeatIndex2 = 0;gdjs.PassCode.repeatIndex2 < gdjs.PassCode.repeatCount2;++gdjs.PassCode.repeatIndex2) {

gdjs.PassCode.condition0IsTrue_0.val = false;
{
gdjs.PassCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "counter");
}if (gdjs.PassCode.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}}
}

}


{


gdjs.PassCode.condition0IsTrue_0.val = false;
{
gdjs.PassCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.PassCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game-Scene-" + gdjs.evtTools.common.toString(gdjs.random(4)), false);
}}

}


{


{
gdjs.PassCode.GDtimerObjects1.createFrom(runtimeScene.getObjects("timer"));
{for(var i = 0, len = gdjs.PassCode.GDtimerObjects1.length ;i < len;++i) {
    gdjs.PassCode.GDtimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


}; //End of gdjs.PassCode.eventsList0xb5aa0


gdjs.PassCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PassCode.GDtimerObjects1.length = 0;
gdjs.PassCode.GDtimerObjects2.length = 0;
gdjs.PassCode.GDBGObjects1.length = 0;
gdjs.PassCode.GDBGObjects2.length = 0;

gdjs.PassCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['PassCode'] = gdjs.PassCode;
