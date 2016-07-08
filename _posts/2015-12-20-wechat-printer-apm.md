---
layout: post
title: 基于 ARM 的微信二维码远程打印系统
permalink: projects/wechat-printer-apm/
category: projects
tags: [ARM]
repository: 
period: 2014-12-15 —— 2015-12-15
organization-name: 中北Android实验室
organization-url: https://github.com/android-nuc
excerpt: 这是一个基于 ARM 的微信二维码远程打印机，通过微信扫描二维码连接到打印机，然后选择自己想要打的文档，就可以在我们的打印机上打印出来。

---

从[颜色竞技](https://onlylemi.github.io/projects/android-color-game/)项目之后，我就想着可以做一个和硬件相连的产品，本身作为一名物联网专业的学生，对这方面的兴趣非常大。但是一直不知道该做一个什么样的东西。我们学校在每个教学楼下都有一个**支付宝**平台的自动饮料售货的机器，选择你想要的饮料，然后支付宝扫描进行支付就可以拿到饮料，是不是很方便啊。再加上我在学校经常会做一些项目，申请奖学金等事情，每次都要写好多文档，写完之后又的跑到打印店打印，打印店那么远，而且有时候去的太早，门又不开，就算打印了还得又跑到老师的办公室交资料，难道这就顺路吗？真是让人憋火啊，所以就在想能不能有个打印东西，我打印很方便，想在哪儿打印都可以。结合上支付宝那个自动取饮料的机器，我就想做一个自动打印的打印系统。  

所以，我们就决定做这个自动打印机。我一直都是在做 Android，想到可以做一个 android 客户端来实现，但是苹果用户呢？再开发一个 ios 客户端吗？我不会啊。而且开发这样一个 app，总感觉让人安装有些麻烦，人家愿意安装不，所以想了想可以城市微信开发，用户不用安装，仅仅关注就可以，而且大家基本都有微信，这样用起来也很方便。最后就决定做 `基于ARM的微信二维码远程打印系统`，我们称其为 `APM`。

## 视频演示

### 微信端打印流程

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=-GZLCRp99XA&lcode=&resourceId=326917756_06_05_99" allowtransparency="true" allowfullscreen="true"></iframe>
</div>
Vimeo地址：[https://vimeo.com/157900135](https://vimeo.com/157900135)

### WEB文档上传

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=tFjcIEzQdwo&lcode=&resourceId=326917756_06_05_99" allowtransparency="true" allowfullscreen="true"></iframe>
</div>
Vimeo地址：[https://vimeo.com/157899554](https://vimeo.com/157899554)

## 介绍

这是一个基于ARM的微信二维码远程打印系统。上传文档到我们的系统，在微信端选择自己想要打的文档，扫描二维码连接到打印机，就可以在打印机上打印出来。

## 对比

### 传统打印缺点

* U盘很容易丢
* 浪费PC机资源  
  * 打印店里面。每个人需要打印的话。都要占用一个台式机。而打印机只有一台。
  * 用台式机作为打印的终端未免太过奢侈。可以说除了打印程序所占用的那点内存和 CPU 之外。其他资源都浪费了。
* 边角零钱  
  打印花的经常是1角2角的这种边角零钱。这种钱放在钱包里会感觉很不方便。如今 `电子支付` 多方便。

### 我们的打印

* 用户上传文档到自己的账户，随时可以打印
* 微信客户端选择已支付的文档，扫码打印就OK

## 界面

* 微信操作界面  
  ![微信操作界面](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/wechat-printer-apm_2.png)  

* 微信查看文档界面  
  ![微信查看文档界面](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/wechat-printer-apm_1.png)  

* Web 端界面  
  ![Web端界面](https://raw.githubusercontent.com/onlylemi/onlylemi.github.io/master/assets/images/post/wechat-printer-apm_3.jpg)  

## 功能实现

* `ARM` 板与打印机相连，对打印机进行控制
* WEB 端上传文档以及对文档的管理
* 微信平台的搭建，与我们平台账户的绑定后，可在微信端进行文档的查看
* 查看文档可对已支付的文档进行打印
* 唤起摄像头对 `ARM` 板上的二维码进行扫描，然后文档就可以被打印机打印

## 技术应用

在整个项目中我负责的是上层，包括**微信端开发**、**后台服务器开发部署**、**Web端开发**。`ARM` 等底层系统由团队的其它两人开发，详细介绍可以参考这篇博客：[Linkerist——基于ARM的多终端自助打印系统](http://blog.csdn.net/linkerist/article/details/50527783)。所以我在这里只介绍我做的部分所用到的技术。  

### 后台服务器开发

微信端与web端公用一个服务器，采用 `php` + `apache` + `mysql`，目前部署在新浪云 `SAE` 上。

### 微信开发

* 微信公众号端与我们自己后台服务器的连接以及数据发送（可以查看微信官方提供的接口，request和response）
* 通过微信 `js-sdk` 唤起二维码扫描功能，进行扫描，发送信息到服务器

### WEB端开发

* 界面采用 [amazeUI](http://amazeui.org/) 框架
* 通过 `php` 对 `mysql` 数据表进行 `CURT`
* 文件的上传

## END

支付功能因为拿不到微信支付或支付宝的接口功能（需要企业认证），还没有完成，其余部分都基本已完成，目前正在进行大学生创新创业项目的审核。