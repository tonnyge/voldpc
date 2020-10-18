---
author: VoldPC
time: 2020-10-11
icon: install
---

# 安装

1.  首先，从[本站](/starter/release/)下载最新版的火山软件，将其安装到`权限要求比较低的目录` (本文软件安装在`C:\Software\vol_dev\win_android_chs_free\`目录下)

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/04.png)

2.  运行`火山软件开发平台`

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/02.png)

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/01.png)

3.  打开一个火山视窗项目，如果没有可以打开官方提供的例程

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/3.png)

4.  点击`开始调试`

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/4.png)

5.  提示安装`Visual Studio 2019生成工具`，点击`开始安装`并点击`是`

    内容如下

    > 在插件属性表中所指定的本地编译器""中未找到对应的"Visual Studio C++ 编译器"的编译环境启动文件"VC\Auxiliary\Build\vcvarsall.bat"或"vc\vcvarsall.bat",请问是否安装"Visual Studio 2019 生成工具"?
    >
    > 注意: 如果您的系统中已经安装有 Vistual Studio 则无需安装此工具,直接在系统的"工具->选项->视窗项目管理器->全局->本地编译器"配置使用即可.
    >
    > 微软 Visual Studio 2019 生成工具安装说明:
    >
    > 目前火山视窗平台支持使用各个版本的"Visual Studio C++ 编译器"来将火山平台自身编译器所生成的 C++源代码文件编译为目的可执行程序,这些"Visual Studio C++ 编译器"可以通过以下方式之一获得:
    >
    > 1. 安装对应版本的"Visual Studio"软件(譬如微软所提供的可以免费使用的"Visual Studio 2019 社区版",下载地址: "https://visualstudio.microsoft.com/zh-hans/downloads";
    > 2. 如果觉得"Visual Studio"软件过于庞大且安装繁琐,可以仅下载安装其对应的生成工具. 譬如"Visual Studio 2019 生成工具"可以在上述下载地址页面的"Visual Studio 2019 工具 -> Visual Studio 2019 生成工具"处下载.
    >
    > 火山平台自带了微软公司的"Visual Studio 2019 生成工具"安装程序,直接点击下方的"开始安装"按钮即可启动其安装,安装方法如下:
    >
    > 1. 启动后选择安装"Visual Studio 生成工具 2019";
    > 2. 在"工作负载"夹中选中"C++ 生成工具"卡片右上的选择框;
    > 3. 在右侧的"安装详细信息"中选中以下可安装项目的最新版本:
    >    A. MSVC v142 - VS 2019 C++ x64/x86 生成工具;
    >    B. Windows 10 SDK;
    >    C. 适用于最新 v142 生成工具的 C++ ATL (x86 和 x64);
    >    D. 适用于最新 v142 生成工具的 C++ MFC (x86 和 x64);
    >
    > 安装完毕后,如果没有更改其默认安装位置,直接在系统的"工具->选项->视窗项目管理器->全局->本地编译器"属性的下拉列表中选择"<Visual Studio 2019 生成工具>",如果更改了安装位置,将其目录路径(如: "C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools")填入该属性值内即可.
    >
    > 在系统选项中配置本地编译器时,注意系统必须能够在该目录内找到"VC\Auxiliary\Build\vcvarsall.bat"(VS2017 或以上)或"vc\vcvarsall.bat"(VS2017 以下)编译环境启动批处理文件.

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/5.png)

6.  进入`Visual Studio安装程序`，点击`继续`

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/6.png)

7.  耐心等待下载所需文件

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/7.png)

8.  选择`C++ 生成工具`，在右边栏选择以下内容，并点击下方`安装`按钮

    - MSVC v142 - VS 2019 C++ x64/x86 生成工具
    - Windows 10 SDK
    - 适用于最新 v142 生成工具的 C++ ATL (x86 和 x64)
    - 适用于最新 v142 生成工具的 C++ MFC (x86 和 x64)

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/8.png)

9.  耐心等待安装完成，**安装过程中可能提示重启**

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/9.png)

10. 安装完成

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/10.png)

11. 再次打开例程，开始调试

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/4.png)

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/11.png)

12. 成功运行

    ![](https://static.voldpc.coolbian.com/assets/images/starter/install/12.png)
