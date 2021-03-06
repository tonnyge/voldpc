---
author: 吴涛
---

# 一步一步跟我学写火山视窗程序

## 第一章

我们以写一个简单的程序开始逐步讲解。

1. 启动火山平台后，执行“**文件->新建->项目**”菜单功能，在左侧“**已安装项目模板**”树形框中选择“**空白视窗程序**”，右侧列表框中选择“**MFC 窗口程序**”，然后在“**项目名称**”编辑框中输入一个项目名称，在“**所处位置**”编辑框中输入欲将项目存放到的目录位置，在“**解决方案名称**”编辑框中输入一个解决方案名称，最后点击“确定”按钮新建此项目。如图：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231313.png)

   注：火山平台对程序采用“解决方案”和“项目”的方式进行管理，每个解决方案内可以包含有多个项目，用作将同类型的项目组织到一起。

   下面为新建后的解决方案程序图：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231346.png)

   直接按下“**F5**”快捷键编译并运行程序，可以看到程序显示了一个空白窗口：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231402.png)

   注意：因为火山视窗平台将会把用户的火山程序编译为 C++语言源程序，然后转交给 C++本地编译器去进行编译，因此需要系统中安装有微软公司的 VC 编译器，如果您的系统中尚未安装，则启动编译时将会自动提示安装：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231416.png)

   按照对话框中提示的信息进行安装并配置好即可。

2. 我们可以看到，所新建项目默认加入了一个名为“**我的主窗口**”的窗口类：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231436.png)

   我们下面对它进行设计，在界面上增加一些内容。

   请右键单击该类，在所弹出来的菜单中选择“设计我的主窗口的界面布局”：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231450.png)

   会弹出该窗口的界面设计器：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231502.png)

   在左侧“**基本组件**”框中选择“**标签**”，然后在右侧设计区中拖动绘制将该组件加入到窗口设计区中：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231521.png)

   修改其“**标题**”属性为“**祖国您好！**”，“字体”属性为“**黑体、粗体、二号字体**”，“**横向对齐方式**”为“**居中**”：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231533.png)

   然后点击上面工具栏中的水平和垂直居中对齐按钮将其在窗口中居中显示：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231547.png)

   然后按下“确定”按钮将设计结果存放到程序中：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231558.png)

   再运行程序，即可看到设计后的窗口效果：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231609.png)

## 第二章

我们继续从上一个程序开始讲解，这次我们加入一个载入新窗口的功能。

1. 打开上一章完成的项目，然后我们按下“**Ctrl+I”**快捷键（或者弹出菜单：“**插入->插入特定内容**”），选择其中的“**窗口**”项目，点击“**添加**”插入到程序中：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231704.png)

2. 然后在所创建的“**窗口 1**”类上点击鼠标右键选择“**设计窗口 1 的界面布局”**菜单项：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231718.png)

   将窗口标题设置为“**一个新窗口**”，并将窗口尺寸调小一些以和**我的主窗口**区别，如图：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231732.png)

3. 在先前的“**我的主窗口**”类上点击鼠标右键选择“**设计我的主窗口的界面布局**”菜单项在该布局中加入一个按钮，将其标题设置为“**载入新窗口**”，如图：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231747.png)

4. 在界面设计器中双击该“**载入新窗口**”按钮，或者在右下角选择“**按钮.被单击**”事件，将对应的事件接收方法加入程序中：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231820.png)

5. 到此一步后结果程序应该为以下样子：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231844.png)

6. 将光标移动到第 15 行，输入以下语句行内容：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209231914.png)

   具体输入方法为（输入过程中可以使用首拼或全拼输入字）：

   1. 将光标移动到第 15 行，输入“`**如果(来源对象==按钮1)**`",然后回车。此语句的作用是用来判断所单击的按钮到底是哪一个（虽然我们目前只有一个，但是万一以后新增了按钮呢，所以正规的写法应该这样）；

   2. 然后按下“**`Ctrl`+`L`**”快捷键插入一个新的局部变量，在变量名中填入“**我的新窗口**”，类型中填入“**窗口 1**”，这样就定义了一个“**窗口 1**”的对象实例变量；

      注意：和其它编程语言不同，火山视窗程序里面的窗口是一个类，因此可以通过定义其多个对象实例来同时创建多个该窗口类的界面窗口，而不是只能载入一个。

   3. 在刚才新增的局部变量行上按下“**`Shift`+`Insert`**"快捷键向下插入一个空白语句行，然后输入：“**我的新窗口.创建对话框 ()**”，即完成了本段程序的输入。

7. 下面我们按下 F5 键运行刚才编写的程序，然后单击“载入新窗口”按钮，可以看到我们所设计的新窗口被载入显示了：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232104.png)

## 第三章

我们继续从上一个程序开始讲解，这次我们为所添加的新窗口加入菜单支持。

1. 打开上一章完成的项目，然后我们按下“**Ctrl+I”**快捷键（或者弹出菜单：“**插入->插入特定内容**”），选择其中的“**菜单类**”项目，点击“**添加**”插入到程序中：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232145.png)

2. 右键单击所加入到程序中的“**菜单类 1**"类,然后选择其中的“**打开菜单设计器**”菜单项：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232158.png)

3. 设计如下菜单内容：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232213.png)

4. 然后点击“**确定**”按钮添加到程序中：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232229.png)

5. 右键单击前面的“**窗口 1**”类，然后选择“**添加窗口 1 的事件接收及虚拟方法**”菜单项，选择其中的“**窗口 1\_接收到命令**”，单击“**添加**”按钮将其添加到程序中：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232241.png)

   注：另外一种添加事件接收方法的方法为：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232257.png)

6. 此时该部分的程序应该为这样：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232310.png)

7. 在第 24 行上按“**`Insert`**”键插入一个空白语句行，然后顺序输入以下语句：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232332.png)

   输入方法不再累述。

8. 将“**我的主窗口**”类中“**按钮\_被单击**”方法中的第 17 行“**我的新窗口.创建对话框 ()**”改为“**我的新窗口.创建有菜单对话框 (菜单类 1)**”：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232354.png)

9. 运行此程序，单击“**载入新窗口**”按钮，然后再单击“**我的主菜单->关于火山**”菜单项可以看到最终效果：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210209232408.png)

10. 最终程序在火山视窗样例解决方案中的“**教程相关->一步一步跟我学火山**”项目中，具体打开方法为：

    1. 在开发环境中执行菜单项“**文件->打开->样例解决方案**”，在所弹出的对话框中选择“**视窗项目**”（如果当前系统未安装其它类型项目支持，则不会弹出对话框而直接打开）：

       ![img](https://img-1251985644.file.myqcloud.com/images/20210209232428.png)

    2. 我们可以看到，该解决方案中有很多样例项目，这是目前（写本文档时）的样例解决方案内容：

       ![img](https://img-1251985644.file.myqcloud.com/images/20210209232504.png)

    3. 双击该项目中的“**main.v**”即可看到我们所设计的程序内容：

       ![img](https://img-1251985644.file.myqcloud.com/images/20210209232531.png)

---

至此，本教程的内容就暂时结束了，对大家在火山视窗平台开发的后续学习建议如下：

1. 仔细阅读“[**火山平台语法手册**](/basic/grammar/)”，在其中的“[**常用开发环境操作方法**](/basic/grammar/#常用开发环境操作方法)”节中讲述了如何进行常用的编辑操作、如何查看帮助信息、如何查看已有系统类库模块的内容、如何将对应模块加入到你自己的程序中以及如何查找所指定名称的所处例程；
2. 打开并仔细阅读火山视窗平台的样例解决方案（打开方法见上），样例解决方案的内容在后续会不断丰富，阅读并理解样例解决方案中的各个项目内容对于了解火山视窗平台程序编写有很大的好处;
3. 尝试多写一写程序，经常上[**火山论坛**](http://bbs.voldp.com/)查看相关资源并与其它用户交流，如有意见和想法也可以在上面提出。
