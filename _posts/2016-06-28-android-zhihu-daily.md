---
layout: post
title: 【项目】知乎日报-高仿版
permalink: projects/android-zhihu-daily/
category: projects
tags: [Android]
repository: onlylemi/ZhihuDaily
period: 2016.06.18 —— 2016.06-28
excerpt: 该项目作为学习练习，整个项目采用 MVP 设计框架实现，参考自 google 官方提供的 MVP 实例 android-architecture。知乎日报 API 来自 izzyleung 提供的知乎日报 API 分析。

---

> 项目地址：[https://github.com/onlylemi/ZhihuDaily](https://github.com/onlylemi/ZhihuDaily)

该项目作为学习练习，整个项目采用 `MVP` 设计框架实现，参考自 `google` 官方提供的 `MVP` 实例 [android-architecture](https://github.com/googlesamples/android-architecture)。知乎日报 API 来自 [izzyleung](https://github.com/izzyleung) 提供的[知乎日报 API 分析](知乎日报 API 分析)。

> MVP 介绍参考之前写的一篇：[【设计框架】Android 中的 MVP 模式](http://onlylemi.github.io/blog/android-mvp/)

## UML 类图结构

这是根据 google 官方采用的 `MVP` 模式，采用 `Contrat` 包装 `View`、`Presenter`，便于管理，`Fragment` 最为 `View` 视图层。同时对外提供唯一的数据访问类 `DataManager`

![](https://raw.githubusercontent.com/onlylemi/res/master/zhihudaily_class.png)

## 预览

![](https://raw.githubusercontent.com/onlylemi/res/master/zhihudaily_img_5.png)
![](https://raw.githubusercontent.com/onlylemi/res/master/zhihudaily_img_6.png)
![](https://raw.githubusercontent.com/onlylemi/res/master/zhihudaily_img_2.png)
![](https://raw.githubusercontent.com/onlylemi/res/master/zhihudaily_img_1.png)
![](https://raw.githubusercontent.com/onlylemi/res/master/zhihudaily_img_3.png)
![](https://raw.githubusercontent.com/onlylemi/res/master/zhihudaily_img_4.png)

## 开源依赖库

* [picasso](https://github.com/square/picasso)
* [okhttp](https://github.com/square/okhttp)
* [gson](https://github.com/google/gson)
* [rxjava](https://github.com/ReactiveX/RxJava)
* [rxandroid](https://github.com/ReactiveX/RxAndroid)
* [nineoldandroids](https://github.com/JakeWharton/NineOldAndroids)
* [AndroidImageSlider](https://github.com/daimajia/AndroidImageSlider)
* [circleimageview](https://github.com/hdodenhof/CircleImageView)
* [swipemenulistview](https://github.com/baoyongzhang/SwipeMenuListView)
* [recyclerviewheader](https://github.com/blipinsk/RecyclerViewHeader)

## 技术应用

* `MVP` 设计框架；View、Presneter、Model
* 采用 `rxjava`、`rxandroid` 进行异步操作、事件传递
* 采用 `Gson` 解析服务端 json 数据，返回为 Java 类
* 图片加载采用 `Picasso`
* 主页面轮播视图，采用 `ViewPager + Handler`
* 主界面使用 `RecyclerView`、`CardView` 显示数据列表（内部使用 `ViewHolder` 缓存优化）代替 `ListView`
* 解决 `ListView`、`RecyclerView` 与其他控件共同滚动时的滑动冲突问题
* 评论界面使用 `ListView分类型`数据显示，区分长评论、短评论
* 数据库采用 `SQLite`，同时在 `DataManager` 中采用 `HashMap` 做数据缓存
* 圆形自定义控件 `CircleImageview`，显示用户头像
* 封装 [`HtmlUtils`](https://github.com/onlylemi/notes/blob/master/snippet/utils/HtmlUtils.java) 封装 html页面`body`，采用 `WebView` 进行加载
* 收藏页面采用 `EditText` 的 `TextWatcher` 监听器，进行搜索的数据的实时同步

## END

该项目作为开源项目学习，采用了很多设计模式的知识，来降低代码的耦合度。如果你感兴趣可以下载进行学习~