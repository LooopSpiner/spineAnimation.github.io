window.init = function init() { 
    window.modImgLoaderHooker.addDynamicImageTagReplacePassage(V.passage);
    const app = new PIXI.Application({
        width: 200, 
        height: 350, 
        backgroundColor: 0x000000,
        backgroundAlpha: 0
    });
    document.getElementById("character").appendChild(app.view);

    PIXI.Assets.load('spine_animation/skeleton.json').then((spineData) => {
        const animation = new PIXI.spine.Spine(spineData.spineData);
        animation.x = app.screen.width / 2;
        animation.y = app.screen.height / 2;

        app.stage.addChild(animation);
        animation.state.setAnimation(0, 'animation', true);
    });
}
