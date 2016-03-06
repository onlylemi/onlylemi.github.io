---
layout: post
title: Android 实验室为期五天寒假培训
permalink: 
category: 
tags: [android]
repository: android-nuc/AndroidTrian_InWinter
period: 2016-01-21 —— 2016-01-25
organization-name: 中北Android实验室
organization-url: https://github.com/android-nuc
excerpt: 2016-01-21——2016-01-25，我为实验室大二、大一的学生进行了为期五天 Android 技术开发培训、晓宇进行美工培训。

---

从2015的十月份实验室对大一学生完成纳新，十一月份底对大二学生完成纳新。纳新结束之后，就开始对实验室的新成员进行 `Java` 和 `Android` 的培训，在寒假结束之前我们完成了 Java 和 Android 基础部分的培训，java 基础部分由魏福成进行，android 基础部分由陶程进行。当大家都进入还加假期时，实验室的孩子们却继续留校学习，在这五天内，他们依然要学习，贾晓宇对他们进行美工培训，我为他们进行Android进阶技术讲解。  

现在我总结下我进行的 **Android 进阶培训**有关知识点。  

![实验室培训场面1](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android-lab-workshop_1.jpg)  

![实验室培训场面2](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android-lab-workshop_4.jpg)

## 内容

* [View](http://developer.android.com/reference/android/view/View.html) 和 [SurfaceView](http://developer.android.com/reference/android/view/SurfaceView.html) 介绍
* 画布 [Canvas](http://developer.android.com/reference/android/graphics/Canvas.html) 和 画笔 [Paint](http://developer.android.com/reference/android/graphics/Paint.html) 介绍
* 自定义 view，各类画图 line、circle、rect 等
* 自定义 surfaceview，简单游戏框架搭建
* 自定义向量类 [Vector](https://github.com/android-nuc/AndroidTrian_InWinter/blob/master/app%2Fsrc%2Fmain%2Fjava%2Fcom%2Fonlylemi%2Fandroidtrian_inwinter%2FVector.java) 创建，可实现向量的加减乘除、初始化、求模、单位化等，进行向量模拟
* 碰撞检测（[矩形与矩形](https://github.com/android-nuc/AndroidTrian_InWinter/blob/master/app%2Fsrc%2Fmain%2Fjava%2Fcom%2Fonlylemi%2Fandroidtrian_inwinter%2FMySurfaceView.java#L190)、[圆与圆](https://github.com/android-nuc/AndroidTrian_InWinter/blob/master/app%2Fsrc%2Fmain%2Fjava%2Fcom%2Fonlylemi%2Fandroidtrian_inwinter%2FMySurfaceView.java#L217)、[圆与矩形](https://github.com/android-nuc/AndroidTrian_InWinter/blob/master/app%2Fsrc%2Fmain%2Fjava%2Fcom%2Fonlylemi%2Fandroidtrian_inwinter%2FMySurfaceView.java#L237)）
* 基于 surfaceview 做的颜色识别技术
* Camera 照相机的应用及预览帧的回调重写
* 从预览帧中进行颜色获取 YUVImage
* 自定义监听器 [OnColorListener](https://github.com/android-nuc/AndroidTrian_InWinter/blob/master/colorid%2Fsrc%2Fmain%2Fjava%2Fcom%2Fonlylemi%2Fcolorid%2FPreviewSurface.java#L93)（接口），写回调函数，进行识别颜色的绘制
* 两个 surfaceview 如何在同一个界面共存，设置画布背景为透明，每次重画之前要进行清理
  `canvas.drawColor(Color.TRANSPARENT, PorterDuff.Mode.CLEAR);`
* [flappybird](https://github.com/android-nuc/AndroidTrian_InWinter/tree/master/flappybird) 游戏简单实现
  * 搭建游戏框架 [GameSurfaceview](https://github.com/android-nuc/AndroidTrian_InWinter/blob/master/flappybird%2Fsrc%2Fmain%2Fjava%2Fcom%2Fonlylemi%2Fgame%2FGameSurface.java)
  * 创建图层父类 [BaseLayer](https://github.com/android-nuc/AndroidTrian_InWinter/blob/master/flappybird%2Fsrc%2Fmain%2Fjava%2Fcom%2Fonlylemi%2Fgame%2Flayer%2FBaseLayer.java)，以及游戏中的各个图层（Player, Background, Start, Score, Barrier）
  * 各个图层进行绘制，GameSurfaceView中进行调用绘制
  * 游戏中如何使用碰撞检测的函数
  * 把游戏的背景改成摄像头，实现增强现实效果
* `git` 工具的使用，协同开发  

## 作品截图

![FlappyBird1](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android-lab-workshop_5.jpg)

![FlappyBird1](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android-lab-workshop_3.jpg)  

## END

辛辛苦苦这么多天，培训也基本结束，也学到了很多知识，相信你们，你们之后的项目会比我我们强好多的，加油！中北 Android 实验室！

## 中北Android实验室

* 微信：@android_nuc
* 微博：[@中北Android实验室](http://weibo.com/nuc4android)
* Github：[@android-nuc](https://github.com/anroid-nuc)