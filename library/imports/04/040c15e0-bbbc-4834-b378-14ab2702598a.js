"use strict";
cc._RF.push(module, '040c1Xgu7xINLN4FKsnAlmK', 'userAction');
// script/userAction.js

"use strict";

var userAction = cc.Class({
   extends: cc.Component,
   /* 数字格子移动动画
   传入参数 ( [(x1,y1),(x2,y2)] ,t) x,y不是屏幕上的坐标，是数组内的坐标，t是时间，默认0.5s
   */
   digitalMove: function digitalMove(coor) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
   },

   /* 连线
   传入参数 ( [(x1,y1),(x2,y2)] ) x,y不是屏幕上的坐标，是数组内的坐标
     */
   line: function line() {},

   /* 启动游戏进入主界面的动画
   动画描述：
      标题淡入、略微下移
      开始按钮、帮助按钮、最高分数按钮 依次展开
      同时 音量开关按钮 从侧边插入
   */
   inMenu: function inMenu() {},

   /* 主界面进入游戏界面的动画
   动画描述：
     */
   toGame: function toGame() {},

   /* 游戏界面返回主界面的动画
   动画描述：
     */
   gameToMenu: function gameToMenu() {}

});

cc._RF.pop();