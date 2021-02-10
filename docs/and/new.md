---
author: 创世魂
---

# 火山安卓平台新手入门教程

## 产品安装

### 软件下载

1. 打开 **“服务卡背面”** 的下载地址，选择合适自己的版本下载。

   为保障售后服务，务必添加官方 QQ 群：[895033329](https://jq.qq.com/?_wv=1027&k=5psDDhB)。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224430.png)

2. 下载后会看到如下文件。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224450.png)

### 安装步骤

1. 打开安装包

   打开后直接点击 **“下一步”** 。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224523.png)

2. 选择 **“我同意”** ，继续点击 **“下一步”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224537.png)

3. 此处可看到 **“更新说明”** 等软件信息，继续点击 **“下一步”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224550.png)

4. 程序默认安装路径为当前**系统盘**（通常为 C 盘），建议点击 **“浏览”** 更换安装路径。

   注意：安装路径不能为中文。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224610.png)

5. 根据需要勾选所需安装部分后，继续点击 **“下一步”** 。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224637.png)

6. 继续 **“下一步”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224649.png)

7. 根据需求选择后，继续 **“下一步”** 。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224708.png)

8. 点击 **“安装”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224728.png)

9. 安装结束后，建议勾选 **“VS2013 运行环境”**，否则火山可能无法正常运行。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224741.png)

10. **“VS2013 运行环境”**安装。

    ![img](https://img-1251985644.file.myqcloud.com/images/20210210224753.png)

11. 安装完成后 **“关闭”**即可。

    ![img](https://img-1251985644.file.myqcloud.com/images/20210210224806.png)

12. 安装完毕后，桌面上可以看到 **“火山安卓软件开发平台”**。

    ![img](https://img-1251985644.file.myqcloud.com/images/20210210224816.png)

### 配置 jdk/adk 环境

1. 打开火山官网:[http://www.voldp.com/android.html](http://www.voldp.com/android.html)，找到如下内容，下载系统对应版本的环境包。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224848.png)

2. 如果下载 **“64 位”** 版本，下载完毕后，可看到此文件。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224900.png)

3. 打开压缩包一般都可以直接看到压缩包注释。

   注释中有详细说明：将压缩包内的“SDK”文件夹，解压到火山安装目录的“plugins\vprj_android”目录内即可。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224911.png)

4. 打开火山 **“plugins\vprj_android”** 目录，将压缩包内的 **“sdk”** 文件夹，解压到当前目录下即可。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224922.png)

5. 配置火山 SDK，打开“工具->选项”。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224941.png)

6. 如果使用火山提供的 SDK，需保持保持 sdk 安装目录为空。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210224955.png)

7. 如果使用自己安装的 sdk 需要指定其**根目录**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210225007.png)

## 安卓项目建立和程序编写

### 建立第一个项目

1. 打开火山程序。

   选择 **“文件->新建->项目”** ，也可以使用快捷键 **“Ctrl+Shift+N”** 。

   也可以点击**“欢迎页”**中的“新建项目”。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210225102.png)

2. 左侧选择 **“空白安卓程序”** ，右侧选择 **“空窗口”**。

   依次填写 **“项目名称”**，**“所处位置”**和 **“解决方案名称”**。

   最后点击 **“确定”** 即可。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210225132.png)

3. 最后会在**“所处位置”**创建以下文件和目录。

   1. 其中 **“test.vsln”** 文件是解决方案主文件，打开一个火山项目都是通过此文件来打开。
   2. **“test”**是当前解决方案中的其中一个项目，火山的解决方案可以建立多个项目进行同时管理，每个项目都可以独立编译一个安卓程序并且互不干扰。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210225208.png)

4. 创建后：

   1. 其中 **“test”** 解决方案名称对应上图中的**“test.vsln”**文件。

   2. **“模块”**是当前项目自动引用的核心库模块，默认引用 **“Java 基本类”**和 **“安卓基本类”**模块。

      如果需要引用更多模块，请看 模块的封装和使用方法中的 **“三、如何在程序中使用火山模块”**。

   3. **“test”**项目名称对应上图中的**“test”**目录。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210225401.png)

   4. **“main.v”**当前文档名称位于 **“test/src/”**目录中，src 目录为火山自动生成，知道即可无需了解其含义。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210225429.png)

   5. 另外在 **“test”**项目目录中，还存在一个 **“test.vprj”**的文件，此文件为当前项目结构文件，存储了当前项目结构信息。

      注意：如果新建了一个 **“test2”**的项目，那么结构文件就会是 **“test2.vprj”**。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210225446.png)

5. 一个解决方案中建立多个项目

   1. 选择 **“文件-新建-项目”**。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210225601.png)

   2. 选择 **“空窗口”**后，输入 **“项目名称”**，**“所处位置”**不建议修改，方便管理整体解决方案，保持原样即可。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210225616.png)

   3. 建立完成后界面如下。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210225639.png)

   4. 建立完成后 **“所处位置”**处会生成一个新的文件夹 **“test2”**，此文件夹就是项目 2 的文件夹。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210225651.png)

   5. 右键项目 **“test”**选择 **“设置为活动项目”**，可进行项目切换。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210225704.png)

   6. 切换项目后状态。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210225715.png)

6. 在 **“启动类”**的代码区域右键，可以打开 **“启动类”**的界面设计器。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210225755.png)

7. 打开后如下图所示。

   左侧：显示了所有的窗口组件。

   右侧：显示了窗口组件部分属性。

   注意：**“并非”**所有属性都能够正常的进行设置。

   例如：你在使用 **“按钮”**时，无法在右侧属性栏设置 **“垂直滚动条滑块图”**属性。

   因为 **“按钮”**并不具备此属性。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210225817.png)

8. 点击 **“按钮”**可拖放到 **“界面设计器”**内，右侧的 **“文本”**可修改标题。

   点击 **“确定”**可保存布局。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210225838.png)

9. 保存后如下图所示。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210225851.png)

10. 如有 **“多个窗口”**，想要打开指定窗口的设计器，需要在指定**窗口类**的**代码区域**右键。

    ![img](https://img-1251985644.file.myqcloud.com/images/20210210225903.png)

11. 右键 **“按钮”**，选择 **“添加‘按钮 1’的事件接收方法”**。

    ![img](https://img-1251985644.file.myqcloud.com/images/20210210225914.png)

12. 选择 **“按钮\_被单击”**，点击 **“添加”**。

    ![img](https://img-1251985644.file.myqcloud.com/images/20210210225927.png)

13. 添加事件后如下图所示。

    ![img](https://img-1251985644.file.myqcloud.com/images/20210210225939.png)

14. 执行单击事件需要在 **“返回”**之前书写代码。

    在 **“如果”** 条件命令内，指定 **“来源对象==按钮 1”**，就可以判断**按钮 1**被单击。

    在此行代码的下方，填写 **“提示信息框()”**方法，就可以弹出一个信息框。

    **“//”**双斜线后面的文本代表注释。

    注意：在火山中编写代码无需输入中文，只需要填写首拼即可完成代码输入。

    例如：**“如果”**只需要输入 **“rg”**。

    ![img](https://img-1251985644.file.myqcloud.com/images/20210210230000.png)

### 调试程序

1. 准备

   如果要使用真机调试，将手机和电脑用数据线连接后，需要打开手机 **“USB 调试”**。

   具体打开方式看该手机的帮助手册。

   如果要使用模拟器调试，可使用 **“天天模拟器”**或 **“雷电模拟器”**。

2. 调试程序

   点击绿色的三角按钮可“启动调试”。

   或者选择菜单 **“调试->运行(F5)”**同样可启动调试。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230041.png)

3. 正常编译后，最终会提示“调试准备工作完成”。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230052.png)

4. 真机调试结果：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230102.png)

5. 也可选择使用模拟器调试，打开 **“雷电模拟器”**，点击右侧 **“工具条”**选择 **“安装”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230113.png)

6. 选择 APK 文件。

   根据输出信息中的路径，找到 APK 位置，选择后点击 **“打开”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230126.png)

7. 安装完毕后即可在模拟器桌面看到 **“火山程序”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230136.png)

8. 打开程序后，点击 **“按钮 1”**就会弹出带有提示图标的 **“提示信息框”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230147.gif)

## 编译发布版安卓程序

### 填写包名

**“包名”**位于所有程序代码的最上方位置。

通常书写格式为 **“公司名.程序名”**，名称随意。

填写包名，必须保证有一个小数点，并且保证唯一性，不能与其它程序包名重复，以免造成无法安装的后果。

例如：腾讯 QQ 的包名为 **“com.tencent.mobileqq ”**，当前程序不可填写同样的包名，会造成包名冲突，从而无法安装程序。

注意：确定包名后不能更改，如果程序内有多个 **“.v”**文件，则每个文件都需要填写包名。

程序内多个文件的包名可重复。

![img](https://img-1251985644.file.myqcloud.com/images/20210210230215.png)

### 建立密钥文件

1. 点击菜单 **“工具->安卓密钥文件建立器”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230246.png)

2. 填写 **“姓名”**，名称随意，不能为中文。

   随后点击 **“生成到密钥文件”**后方的按钮。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230301.png)

3. 输入 **“文件名”**点击 **“保存”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230311.png)

4. 保存后，编辑框内就会出现保存路径。

   最后点击 **“生成”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230323.png)

5. 点击 **“确定”**即可完成 **“密钥文件建立”**的所有操作。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230332.png)

### 设置软件信息

1. 右键项目名称，选择 **“属性”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230354.png)

2. 软件必备信息设置。

   **程序标题**，**程序版本号**，**程序版本名称**，**程序图标**以及**签名用的密钥文件名**。

   依次填写完毕后，点击 **“确定”**即可。

   注意：软件应用市场升级软件通常以 **“程序版本号”**为准，在升级软件时建议修改 **“程序版本号”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230416.png)

### 编译发布版本

1. 点击菜单 **“生成->生成活动项目”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230437.png)

2. 在输出栏可看到提示 **“编译成功”**和“APK 保存路径”。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230449.png)

3. 找到输出的 APK 文件，安装后如下图所示。

   可以看到 **“程序名称”**和 **“图标”**均被修改。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230505.png)

## 学习资源

### 图文教程

1. 在线帮助文档查看：http://doc.voldp.com/

   （当然你也可以直接阅读[本站](/)的）

   左侧列表中的加号可进行收缩。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230634.png)

2. 离线帮助文档，点击菜单 **“帮助->帮助手册”**即可打开离线帮助文档。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230655.png)

### **类库手册**

1. 点击软件左侧 **“类库手册”**，即可查看火山类库所有类或方法。

2. 首次打开 **“帮助页”**需要双击，双击打开后即可单击切换要查看的类或方法。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230728.png)

3. 右键想要打开帮助的方法，选择 **“显示‘提示信息框’的帮助内容”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230739.png)

4. 点击后会快速定位 **“提示信息框”**方法。

   点击 **“选择”**，可以快速定位 **“当前方法”**在**“左侧列表”**的位置。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230751.png)

5. 点击 **“帮助页”**向下拖拽，出现 **“小图标”**后可分离 **“帮助页和代码框”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230803.png)

6. **“帮助页和代码框”**分离效果图。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230814.png)

### 官方论坛

点击进入官方论坛：[http://bbs.voldp.com/](http://bbs.voldp.com/)

![img](https://img-1251985644.file.myqcloud.com/images/20210210230854.png)

## 常见问题

### 没有写入权限

出现这种情况的原因，通常是火山程序安装在了 **“系统盘”**中。

![img](https://img-1251985644.file.myqcloud.com/images/20210210230926.png)

1. 打开项目所处目录，右键空白区域，选择 **“属性”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230941.png)

2. 选择 **“安全”**在，找到当前登录用户，最后点击 **“编辑”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210230952.png)

3. 找到当前系统登录用户，勾选允许。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210231003.png)

4. 会提示正在**设置安全信息**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210231012.png)

5. 点击 **“确定”**。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210231024.png)

### 如何新建类，常量，变量和方法？

![img](https://img-1251985644.file.myqcloud.com/images/20210210231037.png)

### 为什么“界面布局”菜单是灰色的？

1. 当前程序正在调试，停止调试即可解决。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210231135.png)

2. 当前文件不位于项目中，将该文件加入到一个项目中即可解决。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210231150.png)

   1. 右键 **“项目名称”**选择 **“添加->现有文件/文档组”**。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210231202.png)

   2. 选择要添加的文件，点击 **“打开”**。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210231212.png)

   3. 添加进项目后，就可以设计该程序中窗口类的布局。

      ![img](https://img-1251985644.file.myqcloud.com/images/20210210231222.png)

### 如何判断当前文件是否不位于项目中？

1. 如果已经打开解决方案，查看文档标题第二栏是否为"无"。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210231404.png)

2. 如果尚未打开解决方案，则当前并无文档标题。

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210231417.png)

### 火山输出提示缺少 XX 类？

确定类名没有写错，但是火山输出提示 **“没有找到所指定名称的类"轮播图"”**。

此时需要添加火山模块，具体可参考 **“火山模块的封装和使用方法”**教程中第三条：如何在程序中使用火山模块。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231455.png)

### 调试的项目不是当前打开项目？

多个项目时，注意设置其调试项目为 **“活动项目”**，右键指定项目即可设置，如下图。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231510.png)

### 如何判断读属性？

判断读属性的方法很简单，在[帮助页](#cxjgckq)中如果遇到 **“属性读方法”**，就证明是读属性。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231527.png)

代码编写如下图：

![img](https://img-1251985644.file.myqcloud.com/images/20210210231537.png)

最终可以将 **“编辑框 1”**的内容读取出来显示在信息框中。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231546.png)

### 如何判断写属性？

判断写属性的方法很简单，在**帮助页**中如果遇到 **“属性写方法”**，就证明是写属性。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231614.png)

代码编写如下图：

属性写需要使用 **“=”**连接起来，左边的为**属性名**右边的内容为**属性值**。

因 **“内容”**属性值为 **“文本型”**因此使用时需要使用引号。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231624.png)

最终单击**按钮 1**后**编辑框 1**会显示内容。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231633.png)

### 如何判断通常方法？

在帮助页如下位置如果看到 **“通常方法”**四个字，代表本方法为通常方法。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231650.png)

如下图所示，通常方法需要定义变量，通过变量名称去调用。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231700.png)

运行效果如下图：

![img](https://img-1251985644.file.myqcloud.com/images/20210210231708.gif)

### 如何判断静态方法？

在帮助页中看到“静态方法”四个字，就证明本方法为静态方法。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231723.png)

静态方法调用可直接通过类名访问，不需要定义变量。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231731.png)

运行结果如下图：

![img](https://img-1251985644.file.myqcloud.com/images/20210210231740.png)

### 如何判断全局静态方法？

只要类别是 **“全局静态方法”**都可以忽略类名直接访问本方法，并且是全局性质，任何类都可以调用。

![img](https://img-1251985644.file.myqcloud.com/images/20210210231754.png)

代码编写如下图：

![img](https://img-1251985644.file.myqcloud.com/images/20210210231803.png)

运行结果如下图：

![img](https://img-1251985644.file.myqcloud.com/images/20210210231811.png)
