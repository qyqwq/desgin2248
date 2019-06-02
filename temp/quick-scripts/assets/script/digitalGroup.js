(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/digitalGroup.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3bc20xewRVF+IJ/watswuFh', 'digitalGroup', __filename);
// script/digitalGroup.js

'use strict';

/* 
申明封装变量
地图宽、高、地图数组
格子数组索引 0-15
随机数生成区间,当前最大数
 */
var width,
    height,
    digital = new Array();
var digitalArray = ['2', '4', '8', '16', '32', '64', '128', '256', '512', '1k', '2k', '4k', '8k', '16k', '32k', '64k'];
var maxInter = 2,
    minInter = 0,
    posInter = '8';
module.exports = {
    init: function init() {}
};

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
        //# sourceMappingURL=digitalGroup.js.map
        