节点结构:{
    canvas:
        MainCamera      : 摄像机,
        background      ：背景,
        title           : 2248标题,
        start           : 开始按钮,
        hightScore      : 最高分按钮,
        hightScoreAlert : 最高分弹窗, https://www.jianshu.com/p/7d1c15d9ce80 弹窗参考
        help            : 帮助按钮,
        helpAlert       : 帮助弹窗,
        nowScore        : 当前分数,
        gameArea:         游戏区域
            LatticeBase     : 数字格子基类,
            lineBase        : 连线基类,
    digitalGroup:    格子数组
}
脚本结构:{
    canvas : {
        定位 : 管理中心,
        功能 : 调度节点显示、隐藏; 创建、管理数字格子,
        常量 : {
            SCENEMENU=1 : 主菜单场景id
            SCENEGAME=2 : 游戏场景id
        }
        变量 : {
            activeQueue : 动作队列
            sceneId     : 当前场景id
            lineStack   : 连线栈
        }
        方法 : {
            toMenu() : 进入主菜单时调用     /* 包括：场景id切换，指导动画播放（如果是从游戏状态切换到主界面，要先调用游戏） */
            toGame() : 进入游戏场景时调用
            /* 触摸事件 */
        }

    }
    digitalGroup ：{
        定位 : 管理数字数组
        功能 : 存放数字数组，随机生成空缺数字，将当前数组保存至文件
        变量 : {
            digitalQueue[] : 数字队列数组  /* 队列使用参考：https://www.cnblogs.com/anniey/p/7127872.html */
        }
        方法 : {
            newDigital( x , y ) : 生成数组 /* 先检查有没有合法的保存文件（长宽符合），没有就新建 */
            updata(  )
            save() : 保存当前游戏至文件 /* http://docs.cocos.com/creator/manual/zh/advanced-topics/data-storage.html */
        }
    }
    /* 动画组 */
    animation : {
        toMenuAnimation() : { /* 进入菜单时的动画 */

        }
        digitalDown() : { /* 数字下落 */

        }
        gameAreaCloseAnimation() : { /* 游戏区域关闭动画 */

        }

    }
}