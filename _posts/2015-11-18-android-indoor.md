---
layout: post
title: 驻足（地磁定位室内导航APP）
permalink: projects/android-indoor/
category: projects
tags: [android, position, 地磁]
repository: 
organization-name: 中北Android实验室
organization-url: https://github.com/android-nuc
excerpt: 《驻足》是一款室内地磁定位地磁定位Android APP，通过规划最优路线，解决了室内导航问题，可以让人们迅速的到达自己想去的地方，买到想要的东西；同时加入商城商家，更好的促进商品的消费。

---

这是在**2015**暑假我做的拎一个Android项目，一直都想做一个相对有意义的一件作品，所以在google、baidu查看了好多资料，看到地磁室内定位这是一个很好的市场，国内很少有公司再做，所以我想挑战下，看了很多这方面的论文，最后我们采用[IndoorAtlas](https://www.indooratlas.com/)的定位技术，在此基础上我们做室内导航，路线规划等问题，同时把商家这个大市场可以添加进来，将会是一个很大的市场，所以我们从 `2015-06-25` 到 `2015-11-10` 完成了这个项目，还仅仅是个`Demo`，还正在进行测试。  

下面我们就一起先看看吧！  

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="http://www.tudou.com/v/p6c_uAXo9kQ/&rpid=326917756&resourceId=326917756_04_05_99/v.swf" allowtransparency="true" allowfullscreen="true"></iframe>
</div>

## 介绍

随着[Google地图](https://www.google.com/maps)、[百度地图](http://map.baidu.com/)、[高德地图](http://gaode.com/)、[腾讯地图](http://map.qq.com/)等地图软件的出现，这些软件通过 [`GPS`](https://en.wikipedia.org/wiki/Global_Positioning_System) 可以定位你的位置，同时当你想去一个你喜欢的地方的时候，很方便的可以在地图中查到，同时给你最好的路线规划，而且还可以实时查看你身边的食品、酒店、商品等信息。但是这些都是软件解决的的都是室外定位，当你处在一个很大的商场、博物馆、展览场地时，你却无法使用GPS（GPS无法在室内定位）。所以，室内定位，成为人们日益关注的焦点。  

《驻足》即室内定位导航工具，通过采用Android手机的地磁传感器收集一片区域的地磁数据，把这些数据映射到这片区域的平面图中，形成一个强大的数据网络库，当你使用手机的时候，把你当前的地磁数据与服务器数据库中的地磁数据进行比对，得到相对与平面图中的位置信息，从而达到定位的功能；通过自定义图层技术，建立不同的图层信息，达到导航的功能；同时，结合手机的方向传感器和陀螺仪传感器达到顾客使用的地图方向、旋转与当时环境实时对应。通过地磁导航有效的解决了传统室内WiFi定位、蓝牙定位、ZigBee等技术带来的成本高、耗时大等问题，地磁地位低成本、低功耗、无污染、无额外铺设定位辅助设施，更好的可以满足顾客的需求。

为了实现这个项目，解决人们在室内的问题，我们选用 [IndoorAtlas](https://www.indooratlas.com/) 作为我们的定位技术依托，在此基础上进行二次开发，加入导航功能，以及商铺的合作，我们实现真正的实现了一个室内地图的应用软件。目前该项目已在 `中北大学唐久便利超市`（视频中的测试地点） 测试成功，基本效果还不错。目前该项目作为 `大学生创新创业项目` 进行更广的开发与应用。

## 地磁原理

地磁定位原理图  
![地磁定位原理图](https://raw.githubusercontent.com/onlylemi/processing-android-capture/master/androidcapture8.gif)  

前期我使用[Processing](https://processing.org)进行地磁定位原理的模拟，正如图中所示，在一个商城平面上每个点的地磁数据都是不一样的，通过提前测量地磁数据，组成一个很大的数据库网络库，当前拿着手机使用时，手机实地测量地磁数据与大的数据网络库进行匹配，从而得到一个坐标，这个坐标也就是在当前地图中的位置，从而得到定位的目的。

## 应用界面

* Logo  
  ![Logo](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_indoor_icon.png)  

* 主界面  
  ![主界面](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_indoor_4.jpg)  

* 侧边栏进行地区商城选择界面  
  ![侧边栏进行地区商城选择界面](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_indoor_3.jpg)  

* 商城介绍界面  
  ![商城介绍界面](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_indoor_5.jpg)  

* 两点间寻找最短路径导航界面  
  ![两点间寻找最短路径导航界面](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_indoor_5.jpg)  

* 多点间最短路径导航界面  
  ![多点间最短路径导航界面](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_indoor_1.jpg)  

* 商家发布活动列表界面  
  ![商家发布活动列别界面](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_indoor_6.jpg)  

* 摄像头和智能箭头导航  
  ![摄像头和智能箭头导航](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/android_indoor_2.jpg)  


## 技术应用

* 界面Google Android5.0的[Material Design](http://developer.android.com/design/material/index.html)设计风格
* 重写[SurfaceView](http://developer.android.com/reference/android/view/SurfaceView.html)，自定义图层，包括地图层、定位层、导航路线层、商家层等多层
* 路径导航规划问题。路径导航分为当前位置到目的点的路径及多个兴趣点之间寻求最优路径
  * 最短路径（两点间）问题采用**Floyd算法**
  * 最优路径（多点间）TSP问题采用**最近邻点算法**和**遗传算法**
* 摄像头导航——增强现实技术。打开摄像头可以与当前环境同步，在屏幕中显示路线指示箭头，让路痴也知道如何到达自己想要去的地方
* 后台服务器采用 `Alpha` + `php` + `mysql`，应用代码部署到[新浪SAE](http://www.sinacloud.com/sae.html)的云服务器上，保证android客户端与服务器的通信
* 客户端采用**三级缓存**以及**异步加载**方式读取服务器数据

## END

目前该项目作为 `大学生创新创业项目` 进行更广的开发与应用。
