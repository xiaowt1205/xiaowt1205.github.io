gdjs.EndSceneCode = {};
gdjs.EndSceneCode.GDScoreObjects1= [];
gdjs.EndSceneCode.GDScoreObjects2= [];
gdjs.EndSceneCode.GDBGObjects1= [];
gdjs.EndSceneCode.GDBGObjects2= [];

gdjs.EndSceneCode.conditionTrue_0 = {val:false};
gdjs.EndSceneCode.condition0IsTrue_0 = {val:false};
gdjs.EndSceneCode.condition1IsTrue_0 = {val:false};


gdjs.EndSceneCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.EndSceneCode.condition0IsTrue_0.val = false;
{
gdjs.EndSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndSceneCode.condition0IsTrue_0.val) {
gdjs.EndSceneCode.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.EndSceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.EndSceneCode.GDScoreObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Assets\\Sound Effect\\end.mp3", false, 80, 1);
}}

}


{


gdjs.EndSceneCode.condition0IsTrue_0.val = false;
{
gdjs.EndSceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.EndSceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", false);
}}

}


}; //End of gdjs.EndSceneCode.eventsList0xb5aa0


gdjs.EndSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndSceneCode.GDScoreObjects1.length = 0;
gdjs.EndSceneCode.GDScoreObjects2.length = 0;
gdjs.EndSceneCode.GDBGObjects1.length = 0;
gdjs.EndSceneCode.GDBGObjects2.length = 0;

gdjs.EndSceneCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['EndSceneCode'] = gdjs.EndSceneCode;
