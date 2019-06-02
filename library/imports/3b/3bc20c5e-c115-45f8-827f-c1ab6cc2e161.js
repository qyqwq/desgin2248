"use strict";
cc._RF.push(module, '3bc20xewRVF+IJ/watswuFh', 'digitalGroup');
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