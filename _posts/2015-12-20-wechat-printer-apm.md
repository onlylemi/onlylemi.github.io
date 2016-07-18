---
layout: post
title: 【项目】基于 ARM 的微信二维码远程打印系统
permalink: projects/wechat-printer-apm/
category: projects
tags: [ARM, 微信]
repository: 
period: 2014-12-15 —— 2015-12-15
organization-name: 中北Android实验室
organization-url: https://github.com/android-nuc
excerpt: 这是一个基于 ARM 的微信二维码远程打印机，通过微信扫描二维码连接到打印机，然后选择自己想要打的文档，就可以在我们的打印机上打印出来。

---

从 [颜色竞技](http://onlylemi.github.io/projects/android-color-game/) 项目之后，我就想着可以做一个和硬件相关的产品，本身作为一名物联网专业的学生，对这方面的兴趣非常大。但是一直不知道该做一个什么样的东西。当时我们学校每个教学楼下都有一个**支付宝平台的自动饮料售货机**，选择你想要的饮料，然后支付宝扫描进行支付就可以拿到饮料，感觉这东西很方便啊。忽然想到如果把这个思想用到打印机上会不会更好，这样就会是一个全新的自助打印机，如果在每个教学楼下都有、隔一定的距离放一个，是不是很像 `ATM 取款机`。  

所以后来就开始着手这个项目，最终决定用 `微信` 来作为客户端，采用[微信公众平台开发](http://mp.weixin.qq.com/wiki/home/index.html)，服务器部署在`新浪SAE`，我就主要负责软件部分，微信开发、服务端开发、WEB端开发。`ARM` 等底层系统由团队的其它两人开发，详细介绍可以参考这篇博客：[Linkerist——基于ARM的多终端自助打印系统](http://blog.csdn.net/linkerist/article/details/50527783)

## 演示视频

### 微信端打印流程

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=-GZLCRp99XA&lcode=&resourceId=326917756_06_05_99" allowtransparency="true" allowfullscreen="true"></iframe>
</div>

### WEB端操作

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=tFjcIEzQdwo&lcode=&resourceId=326917756_06_05_99" allowtransparency="true" allowfullscreen="true"></iframe>
</div>

## 界面

![微信操作界面](https://raw.githubusercontent.com/onlylemi/res/master/wechat-printer-apm_2.png)
![微信查看文档界面](https://raw.githubusercontent.com/onlylemi/res/master/wechat-printer-apm_1.png)

![Web端界面](https://raw.githubusercontent.com/onlylemi/res/master/wechat-printer-apm_3.jpg)  

## 功能实现

* `ARM` 板与打印机相连，对打印机进行控制
* WEB 端上传文档以及对文档的管理
* 微信平台的搭建，与我们平台账户的绑定后，可在微信端进行文档的查看，并且对已支付的文档进行打印
* 微信开发，唤起摄像头对 `ARM` 板上的二维码进行扫描，然后文档就可以被打印机打印

## 技术应用

* 采用 `php` + `mysql` + `apache`，服务器部署在 `新浪SAE`。web 端与微信端公用一个服务器。
* 微信开发，处理 request，然后响应 response
* 通过微信 [`js-sdk`](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html) 唤起二维码扫描功能，进行扫描，发送信息到服务器。由于 SAE 不支持本地读写，所以采用 SAE 的 Memcached 代替重新改写 `js-sdk` 对 `access_token` 和 `jsapi_ticket` 的缓存方式。
* WEB 端界面采用 [amazeUI](http://amazeui.org/) 框架
* WEB 端可对文件进行 `CURD`

## END

目前该项目的 DEMO 已经完成，之后我们希望可以与一些企业对接进行合作。