cc.Class({
    extends: cc.Component,
    ctor: function () {
        /* 构造函数：设置场景，调用动画 */
        this.sceneId = this.MENUID;
        /* cc.log(this.sceneId); */
        /* 调用开始场景动画 */
        var action =new require("userAction");
        action.inMenu();
    },
    properties: {

        MENUID: {
            /* 主菜单场景id */
            displayName: "menu scene id",
            tooltip: "主菜单场景编号",
            readonly: true,
            get: function () {
                return 1;
            }
        },

        GAMEID: {
            /* 游戏场景id */
            displayName: "game scene id",
            tooltip: "游戏场景编号",
            readonly: true,
            get: function () {
                return 2;
            }
        },

        sceneId: {
            /* 当前场景id */
            default: 0,
            tooltip: "当前场景id",
            readonly: true,
        },
    },
    start() {

    },
});