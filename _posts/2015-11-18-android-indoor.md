---
layout: post
title: 【项目】驻足（室内地磁定位导航 APP）
permalink: projects/android-indoor/
category: projects
tags: [Android]
repository: 
period: 2015-06-15 —— 2015-11-10
organization-name: 中北Android实验室
organization-url: https://github.com/android-nuc
excerpt: 《驻足》是一款室内地磁导航 Android APP，通过规划最优路线，解决了室内导航问题，可以让人们迅速的到达自己想去的地方，买到想要的东西；同时加入商城商家，更好的促进商品的消费。

---

> 
* 2015 华北五省及港澳台计算机应用大赛山西赛区一等奖
* 2015 华北五省及港澳台计算机应用大赛全国一等奖，并作为压轴项目在颁奖典礼上进行展示 

这是在大二暑假我做的一个 Android 应用，这个作品很大程度上是 [kai](http://www.dkaib.com/) 的一个视频给了我很大的触动：[https://vimeo.com/127055854](https://vimeo.com/127055854)，他给我看的时候，这只是他做的一个概念设计，后来就觉得这个想法非常好，就想实现它，同时我在 google 查看了好多资料，看到地磁室内定位这是一个很好的方向，国内也很少有公司再做，所以就想挑战下。之后看了很多这方面的论文，最后我们采用 [`IndoorAtlas`](https://www.indooratlas.com/) 的定位技术，在此基础上我们去实现室内导航，路线规划等问题，同时把商家这个大市场可以添加进来。所以我们就着手开始这个项目，现在已经实现了 `Demo` 模型 ，目前还仍在测试中。 

下面我们就一起先看看吧！  

## 演示视频

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=p6c_uAXo9kQ&lcode=&resourceId=326917756_06_05_99" allowtransparency="true" allowfullscreen="true"></iframe>
</div>

## 地磁原理

![地磁定位原理图](https://raw.githubusercontent.com/onlylemi/processing-android-capture/master/androidcapture8.gif)  

前期我使用 [Processing](https://processing.org) 进行地磁定位原理的模拟，正如图中所示，在一个商城平面上每个点的地磁数据都是不一样的，通过提前测量地磁数据，组成一个很大的数据库网络库，当前拿着手机使用时，手机实地测量地磁数据与大的数据网络库进行匹配，从而得到一个坐标，这个坐标也就是在当前地图中的位置，从而得到定位的目的。

## 应用界面

![主界面](https://raw.githubusercontent.com/onlylemi/res/master/android_indoor_4.jpg)
![侧边栏进行地区商城选择界面](https://raw.githubusercontent.com/onlylemi/res/master/android_indoor_3.jpg)

![商城介绍界面](https://raw.githubusercontent.com/onlylemi/res/master/android_indoor_5.jpg)
![商家发布活动列别界面](https://raw.githubusercontent.com/onlylemi/res/master/android_indoor_6.jpg)

![两点间寻找最短路径导航界面](https://raw.githubusercontent.com/onlylemi/res/master/android_indoor_7.jpg)
![多点间最短路径导航界面](https://raw.githubusercontent.com/onlylemi/res/master/android_indoor_1.jpg)
  
![摄像头和智能箭头导航](https://raw.githubusercontent.com/onlylemi/res/master/android_indoor_2.jpg)

## 技术应用

* 界面 Google Android5.0 的 [`Material Design`](http://developer.android.com/design/material/index.html) 设计风格
* 重写 [`SurfaceView`](http://developer.android.com/reference/android/view/SurfaceView.html)，自定义 Map 图层，包括地图层、定位层、导航路线层、商家层等多层。通过重写 `onTouchEvent` 来处理地图触屏操作事件。[`开源 MapView`](https://github.com/onlylemi/MapView)
* 路径导航规划问题。路径导航分为当前位置到目的点的路径及多个兴趣点之间寻求最优路径
  * 最短路径（两点间）问题采用 **Floyd 算法**
  * 最优路径（多点间）TSP 问题采用 **遗传算法**。[`遗传算法可视化研究`](https://github.com/onlylemi/GeneticTSP)
* 摄像头导航——增强现实技术。打开摄像头可以与当前环境同步，在屏幕中显示路线指示箭头。采用双 SurfaceView 实现，一个承载 Camera 预览，另一个做箭头指示，通过设置监听回调来匹配
* 后台服务器采用 `Alpha` + `php` + `mysql`，应用代码部署到 [新浪 SAE](http://www.sinacloud.com/sae.html) 的云服务器上，保证 Android 客户端与服务器的通信
* 客户端通过 **异步加载 AsyncTask** 方式读取服务器数据
* 图片加载采用三级缓存 `LruCache`、`DiskLruCache`、`Net`，自己封装 [`AsyncImageLoader`](https://github.com/onlylemi/notes/blob/master/snippet/AsyncImageLoader.java)
* 采用 `git` 协同开发

## END

目前该项目作为 `大学生创新创业项目` 进行更广的开发与应用。
