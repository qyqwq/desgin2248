(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Basic.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dd210HQHuFPEpFK66p0f7bP', 'Basic', __filename);
// script/Basic.js

"use strict";

cc.Class({
    extends: cc.Component,
    ctor: function ctor() {
        /* 构造函数：设置场景，调用动画 */
        this.sceneId = this.MENUID;
        /* cc.log(this.sceneId); */
        /* 调用开始场景动画 */
        var action = new require("userAction");
        action.inMenu();
    },
    properties: {

        MENUID: {
            /* 主菜单场景id */
            displayName: "menu scene id",
            tooltip: "主菜单场景编号",
            readonly: true,
            get: function get() {
                return 1;
            }
        },

        GAMEID: {
            /* 游戏场景id */
            displayName: "game scene id",
            tooltip: "游戏场景编号",
            readonly: true,
            get: function get() {
                return 2;
            }
        },

        sceneId: {
            /* 当前场景id */
            default: 0,
            tooltip: "当前场景id",
            readonly: true
        }
    },
    start: function start() {}
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Basic.js.map
        