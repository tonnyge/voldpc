---
author: 吴涛
time: 2020-10-18
---

# 一步一步跟我学写火山视窗程序

## 第一章

我们以写一个简单的程序开始逐步讲解。

1. 启动火山平台后，执行“文件->新建->项目”菜单功能，在左侧“已安装项目模板”树形框中选择“空白视窗程序”，右侧列表框中选择“MFC 窗口程序”，然后在“项目名称”编辑框中输入一个项目名称，在“所处位置”编辑框中输入欲将项目存放到的目录位置，在“解决方案名称”编辑框中输入一个解决方案名称，最后点击“确定”按钮新建此项目。如图：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s1.png)

   注：火山平台对程序采用“解决方案”和“项目”的方式进行管理，每个解决方案内可以包含有多个项目，用作将同类型的项目组织到一起。

   下面为新建后的解决方案程序图：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s2.png)

   直接按下“F5”快捷键编译并运行程序，可以看到程序显示了一个空白窗口：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s3.png)

   注意：因为火山视窗平台将会把用户的火山程序编译为 C++语言源程序，然后转交给 C++本地编译器去进行编译，因此需要系统中安装有微软公司的 VC 编译器，如果您的系统中尚未安装，则启动编译时将会自动提示安装：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s4.png)

   按照对话框中提示的信息进行安装并配置好即可。

2. 我们可以看到，所新建项目默认加入了一个名为`我的主窗口`的窗口类：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s5.png)

   我们下面对它进行设计，在界面上增加一些内容。

   请右键单击该类，在所弹出来的菜单中选择“设计我的主窗口的界面布局”：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s6.png)

   会弹出该窗口的界面设计器：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s7.png)

   在左侧`基本组件`框中选择`标签`，然后在右侧设计区中拖动绘制将该组件加入到窗口设计区中：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s8.png)

   修改其`标题`属性为`祖国您好！`，`字体`属性为`黑体、粗体、二号字体`，`横向对齐方式`为`居中`：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s9.png)

   然后点击上面工具栏中的水平和垂直居中对齐按钮将其在窗口中居中显示：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s10.png)

   然后按下`确定`按钮将设计结果存放到程序中：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s11.png)

   再运行程序，即可看到设计后的窗口效果：

   ![](https://static.voldpc.coolbian.com/assets/images/starter/step-by-step-program/s12.png)
