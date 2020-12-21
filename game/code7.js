gdjs.fasterCode = {};
gdjs.fasterCode.repeatCount2 = 0;

gdjs.fasterCode.repeatIndex2 = 0;

gdjs.fasterCode.GDBGObjects1= [];
gdjs.fasterCode.GDBGObjects2= [];

gdjs.fasterCode.conditionTrue_0 = {val:false};
gdjs.fasterCode.condition0IsTrue_0 = {val:false};
gdjs.fasterCode.condition1IsTrue_0 = {val:false};


gdjs.fasterCode.eventsList0x67df14 = function(runtimeScene) {

}; //End of gdjs.fasterCode.eventsList0x67df14
gdjs.fasterCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.fasterCode.condition0IsTrue_0.val = false;
{
gdjs.fasterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.fasterCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("timer_number").setNumber(2);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\fast.mp3", true, 120, 4);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\fast-bg.mp3", true, 40, 1.2);
}}

}


{


gdjs.fasterCode.repeatCount2 = 1;
for(gdjs.fasterCode.repeatIndex2 = 0;gdjs.fasterCode.repeatIndex2 < gdjs.fasterCode.repeatCount2;++gdjs.fasterCode.repeatIndex2) {

gdjs.fasterCode.condition0IsTrue_0.val = false;
{
gdjs.fasterCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "counter");
}if (gdjs.fasterCode.condition0IsTrue_0.val)
{
{runtimeScene.getVariables().get("timer_number").sub(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "counter");
}}
}

}


{


gdjs.fasterCode.condition0IsTrue_0.val = false;
{
gdjs.fasterCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("timer_number")) == 0;
}if (gdjs.fasterCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game-Scene-" + gdjs.evtTools.common.toString(gdjs.random(4)), false);
}}

}


}; //End of gdjs.fasterCode.eventsList0xb5aa0


gdjs.fasterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.fasterCode.GDBGObjects1.length = 0;
gdjs.fasterCode.GDBGObjects2.length = 0;

gdjs.fasterCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['fasterCode'] = gdjs.fasterCode;
