---
layout: post
title: Android 游戏：颜色竞技
permalink: projects/android-color-game/
category: projects
tags: [android, game]
repository: 
period: 2014-07-10 —— 2014-10-15
organization-name: 中北Android实验室
organization-url: https://github.com/android-nuc
excerpt: 《颜色竞技》是一款 Android 平台下的颜色娱乐类游戏，游戏分为三个模块，分别为 ColorFly、ColorRun、ColorSwim 三个模块，分别为消除、酷跑以及碰撞三种类型，以颜色为核心，使用五彩的颜色作为游戏的素材、背景。同时还可以通过手机摄像头捕获颜色进行自定义游戏哦！

---

> 
* 2014 华北五省及港澳台计算机应用大赛全国二等奖
* 2015 中北大学刘鼎杯创新创业大赛二等奖

这可以算是我在学习 Android 之后系统做的第一个项目吧，大一开始进入[中北 Android 实验室](https://github.com/android-nuc)跟着实验室的学长们一起学习android开发，从 `java` 到 `android`，看视频，查资料，慢慢地自己也就学会了这门技术。然后在暑期 `2014-07-10`，我就开始了这个项目，因为我一直都对`颜色`非常喜欢，可以给人带来一种清新的感觉吧，我已我们做了这个跟颜色有关的游戏，可以让大家通过单纯的颜色来做一些好玩的事情，所以我带领着几个人就开始做了。到 `2014-10-15` 这个项目也就基本完成了。  

下面就让大家具体看看吧。后来也还参加比赛，还拿了奖。  

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/135462492" allowtransparency="true" allowfullscreen="true"></iframe>
</div>

土豆地址：[http://www.tudou.com/programs/view/R48BJ1kCfYo/](http://www.tudou.com/programs/view/R48BJ1kCfYo/)

## 介绍

《颜色竞技》是一款 Android 平台下的颜色娱乐类游戏，游戏分为三个模块，分别为 ColorFly、ColorRun、ColorSwim 三个模块，分别为消除、酷跑以及碰撞三种类型，以颜色为核心，使用五彩的颜色作为游戏的素材、背景。同时每次游戏都会进行成绩记录，在主界面上直观的显示出来，你还可以上传你的成绩到排行榜，在排行榜中查看自己的成绩。同时也可以通过摄像头取色来自定义游戏素材的颜色。游戏社区可以进行挑战、设置个性签名等。

* **ColorFly** 是一款消除类游戏，与传统的消除类游戏不同之处在于，传统的消除类游戏是通过判断两个图标或图片是否一样来消除，这种消除游戏直观、难度性低，然而我们这款游戏是通过消除障碍来进行消除，在游戏中，屏幕的右方会不断飘出由各种颜色组成的障碍，玩家可以通过点击屏幕下方的颜色块来消除障碍，随着游戏的不断进行，游戏的难度会逐渐增加，同时当你消除的障碍达到一定的数量时，会赠送保护罩一个，可抵挡一次生命。
* **ColorRun** 是一款跑酷类游戏，与传统的跑酷类游戏不同之处在于，传统的跑酷类游戏的障碍以及沟壑都是直观的显示出来，玩家可以直接进行跳跃或躲避，然而我们这款跑酷类游戏，玩家是通过屏幕上方飘来的颜色来判断游戏中可使用的素材，没有出现的颜色则视为无用，玩家必须进行跳跃（最多可连跳两次）来躲避，随着游戏的进行，游戏的难度也会增加。
* **ColorSwim** 是一款碰撞类游戏，与传统的碰撞类游戏不同之出在于，传统的碰撞类游戏像打飞机，玩家通过发射子弹来打击敌机，然而我们这款碰撞类游戏与其正好相反，主角拥有三个不同颜色的光圈，左右手来控制主角的移动位置与转动位置，同时手机屏幕上会随机的产生不同颜色的小球，小球会追踪主角，当小球快要碰撞到主角时，只需控制主角，把相同颜色的光圈碰撞到小球，就算成功，随着游戏的进行，小球的数量也会逐渐增加。

## 作品截图

* Logo  
  ![游戏Logo](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_color_ico.png)

* 主界面  
  ![游戏Logo](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_color_1.png)

* ColorFly界面  
  ![游戏Logo](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_color_2.png)

* ColorRun界面  
  ![游戏Logo](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_color_3.png)

* ColorSwim界面  
  ![游戏Logo](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_color_4.png)

* 颜色识别界面  
  ![游戏Logo](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_color_5.png)

## 技术总结

* [SurfaceView](http://developer.android.com/reference/android/view/SurfaceView.html) 绘图技术，绘制了三个小游戏的界面
* [Bitmap](http://developer.android.com/reference/android/graphics/Bitmap.html) 加载缓存与内存回收
* 颜色识别：重写 [Camera](http://developer.android.com/reference/android/graphics/Camera.html) 预览回调函数 [onPreviewFrame()](http://developer.android.com/reference/android/hardware/Camera.PreviewCallback.html#onPreviewFrame)，实现颜色识别，进行游戏颜色自定义
* 语音识别：对[讯飞语音](http://www.xunfei.cn/)进行二次开发，实现社区功能交流输入
* 多点触控：ColorSwim 游戏中采用多点触控来进行主角的移动和转动
* [SQLiteOpenHelper](http://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper.html) 及 [SharedPreferences](http://developer.android.com/reference/android/content/SharedPreferences.html) 操作本地数据，本地排行榜显示
* 使用[ Bmob 后端云](http://www.bmob.cn/)作为应用的后台服务器，作为数据储存及同步，同时在社区中与好友进行挑战，挑战结果会进行消息推送到对方手机

## 项目官网

项目官网：[http://micolor.bmob.cn/](http://micolor.bmob.cn/)。  
欢迎大家试玩，由于本项目为大一时期第一次开发的 Android 游戏，可能存在很多问题和 bug，望大家见谅。