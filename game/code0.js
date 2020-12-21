gdjs.MainSceneCode = {};
gdjs.MainSceneCode.GDBGObjects1= [];
gdjs.MainSceneCode.GDBGObjects2= [];

gdjs.MainSceneCode.conditionTrue_0 = {val:false};
gdjs.MainSceneCode.condition0IsTrue_0 = {val:false};
gdjs.MainSceneCode.condition1IsTrue_0 = {val:false};


gdjs.MainSceneCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(7);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\bg.mp3", true, 80, 1);
}}

}


{


gdjs.MainSceneCode.condition0IsTrue_0.val = false;
{
gdjs.MainSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.MainSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game-Scene-" + gdjs.evtTools.common.toString(gdjs.random(4)), false);
}}

}


}; //End of gdjs.MainSceneCode.eventsList0xb5aa0


gdjs.MainSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainSceneCode.GDBGObjects1.length = 0;
gdjs.MainSceneCode.GDBGObjects2.length = 0;

gdjs.MainSceneCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['MainSceneCode'] = gdjs.MainSceneCode;
