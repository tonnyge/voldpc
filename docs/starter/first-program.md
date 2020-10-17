---
author: VoldPC
time: 2020-10-11
icon: first
---

# 第一个程序

> 在[上一节](/starter/install/)中，我们安装了`火山视窗开发平台`，在这一节中，我们将正式进入`第一个程序`的编写

## 创建项目

1. 点击菜单栏的`新建` - `项目`

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/1.png)

2. 选择 MFC 窗口程序，并填写`项目名称`、`所处位置`、`解决方案名称`，点击`确定`

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/2.png)

3. 成功创建解决方案
   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/3.png)

## 编写第一个程序

1. 在`我的主窗口`类上点击右键，选择`设计"我的主窗口"的界面布局`

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/4.png)

2. 从左边`组件框`中拖入`按钮`、`标签`

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/5.png)

3. 修改标签属性，如图所示

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/6.png)

4. 修改按钮属性，如图所示

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/7.png)

5. 对组件进行对齐

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/8.png)

6. 点击按钮，选择`按钮_被单击`事件 (当然，你也可以像易语言一样直接双击按钮)

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/9.png)

7. 跳转到`按钮_被单击`事件

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/10.png)

8. 在事件下输入以下代码：（**注意流程线**）

   ```
   如果真 (来源对象 == 按钮1)  // 注意这里是两个 " = "
       标签1.标题 = "Hello World!"
   ```

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/11.png)

9. 点击`开始调试`

   ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/12.png)

10. 等待编译项目

    ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/13.png)

11. 到这里，第一个程序就完成了

    ![](https://static.voldpc.coolbian.com/assets/images/starter/first-program/14.gif)

::: tip 课后习题

1. 尝试删除`如果真 (来源对象 == 按钮1)`这一行代码，比较异同，并尝试总结`来源对象`的作用。

2. 尝试总结`// 注意这里是两个 " = "`的作用

:::
