---
author: 吴涛
---

# 普通用户语法学习手册

## 相关术语

### 面向对象的程序设计方法

面向对象的程序设计方法是目前最先进的程序设计理念,也是被目前绝大多数程序设计语言都使用的一种程序设计方法,它可以最大限度地提高程序代码的可复用性和可维护性,如果您想学习程序设计,那么这种设计方法是必须需要掌握的.

为了降低用户的学习门槛,火山对这套理念进行了最大限度的精简,一些晦涩难懂的和一些不大常用/实用的内容均被剔除出去,只保留了其精华和必须需要掌握的部分,因此学习起来并不难。

::: tip 注意

1. 如果您对面向对象的程序设计方法了解不多,推荐您先阅读[面向对象的程序设计方法](/basic/object/)章节,再来阅读本手册后续内容,将会帮助您对后续内容的理解;
2. 由于所基于系统类库的不同(语法层面是一致的),本手册中的例程示图如必要会提供火山视窗和火山安卓两个平台程序版本.

:::

### 名称

火山平台中的名称分为以下这些：

1. **单名称**

   单名称必须以英文字母/下划线字符/汉字字符开头,后面跟随英文字母/下划线字符/数字/汉字字符.如未特殊标注,本文档中所提出的所有"名称"均为单名称.

2. **全名称**

   以句点字符组合在一起的单名称称为全名称,如"火山.程序". 单名称可以被认为是全名称的一种(只包括一个单名称的全名称).

   实际上,目前只有**包名**才使用到由多个单名称组成的全名称.

注意: 火山中的名称对英文字母的**大小写敏感**,譬如"abc","ABC"所指定的不是同一名称.

下图为名称在程序中的使用和定义方法:

![img](https://img-1251985644.file.myqcloud.com/images/20210210234345.png)

::: tip 操作提示

火山程序中的名称就其来源可以分为以下两种:

1. 系统中预先定义的名称. 主要是**关键字**和**系统属性**名称;
2. 用户程序中自行定义的名称. 主要是各种定义型程序成员(如**类**/**方法**/**常量**/**变量**/**参数**)的名称.

这些名称均可以通过系统内置的首拼或全拼输入法输入. 如:

- 上图中定义"变量 A"和"变量 a"时所使用的"**整数**"数据类型,可以使用首拼输入方式"zs"或者全拼输入方式"zhengshu"输入;
- 上图中所定义的"**测试方法 1**"方法,可以使用首拼输入方式"csff1"或者全拼输入方式"ceshifangfa1"在程序语句中输入。

具体输入法匹配规则请见系统输入法插件被载入时在开发环境状态框中输出的提示信息:

![img](https://img-1251985644.file.myqcloud.com/images/20210210234537.png)

:::

### 立即数

立即数用作表达一个直接的字面数据值,有以下几类:

1. **数值立即数**

   **A.** 十进制整数或小数,小数支持使用科学计数法,如: 1.32e3

   **B.** 十六进制整数: "0x"后跟数字 0-9 或字母 A-F(大小写无关). 如: 0x12AC3F

   **C.** 字符整数值: 使用单引号括住的字符,如'A','吴'.

   如果欲强行指定数值的数据类型,可以使用"**强制类型转换**"操作符,譬如"(长整数)1",提供了一个数据类型为长整数的数值立即数.

   如果某整数的数值超出了整数的最大有效范围,将自动被设定为长整数数据类型. 如: 0x123456789A 将被自动认为是长整数数据类型.

2. **逻辑型立即数:** 为真/假.

3. **字符串立即数:**

   为用双引号括住的一段文本,文本内支持使用以下转义符:

   | **转义符** | **解释**                                      |
   | ---------- | --------------------------------------------- |
   | \b         | 退格符                                        |
   | \f         | 换页符                                        |
   | \r         | 回车符                                        |
   | \n         | 换行符                                        |
   | \t         | 水平制表符                                    |
   | \'         | 单引号                                        |
   | \"         | 双引号                                        |
   | \\         | 反斜杠                                        |
   | \x         | 后跟 1-3 个十六进制字符,为所对应字符的代码值. |

   如: "您好!\r\n 祖国" 在"您好!"和"祖国"之间通过使用转义符插入了一个 回车和换行符.

4. **数组立即数**(只能在提供常量/变量数组初始值时使用):

   为使用花括号括住的立即数的组合,如: { 1, 2 }, 多维数组可以嵌套,如: { { 1, 2 }, { 3, 4 }, { 5, 6 } }

   注意: 多维数组的同一维内成员数目必须相等,譬如如下格式的数组立即数是不允许的: { { 1, 2 }, { 3 } } ,因为其第 2 个维中的成员数目不相等.

下面为各类立即数在初始值和程序语句中的使用例图:

![img](https://img-1251985644.file.myqcloud.com/images/20210210234845.png)

### 数据类型:

数据类型可以为以下几种:

1. **基本数据类型**;

2. **用户程序中定义的类**,称为**类数据类型**;

3. 数组数据类型

   数组数据类型为基本或类数据类型后面跟随一个或多个数组维定义组成.

   每个数组维定义由左右中括号("[]")组成,如果应用在变量定义上,可以在中括号内部置入具体成员数目,表示生成具有对应维数的数组变量实例. 如:

   - 单维文本数组数据类型: 文本 []
   - 多维整数数组数据类型: 整数 [][]
   - 定义具有指定成员数目的整数数组实例变量: 整数 [3], 整数 [3][2]

数据类型可以在定义常量/变量/参数/方法返回值时使用,也可以在程序语句中使用,如:

|                                **视窗示例**                                |                                **安卓示例**                                |
| :------------------------------------------------------------------------: | :------------------------------------------------------------------------: |
| ![img](https://img-1251985644.file.myqcloud.com/images/20210210235100.png) | ![img](https://img-1251985644.file.myqcloud.com/images/20210210235106.png) |

## 火山程序结构

一个火山程序的构成结构如下:

1. 包定义

   1. 文档嵌入行(普通用户无需了解)
   2. **文档注释行**
   3. **类定义**
      1. 类嵌入行(普通用户无需了解)
      2. 类注释行
      3. 类成员常量
      4. 类成员变量
      5. 类成员方法
         1. 方法参数
         2. 方法局部常量
         3. 方法局部变量
         4. 语句注释行
         5. 语句嵌入行(普通用户无需了解)
         6. 语句行

   下面是一个火山程序的基本样图(天蓝色文字为说明,下同):

   |                                **视窗示例**                                |                                **安卓示例**                                |
   | :------------------------------------------------------------------------: | :------------------------------------------------------------------------: |
   | ![img](https://img-1251985644.file.myqcloud.com/images/20210210235534.png) | ![img](https://img-1251985644.file.myqcloud.com/images/20210210235528.png) |

### 包

包名为**全名称**(即中间可以包括句点),通常使用的名称格式为以组织或事物的从大到小排列,譬如:"湖北.武汉.递归公司"/"递归公司.软件开发部"/"火山系统.安卓平台.测试程序"等等,这些都可以,自己维护这些代码时觉得清晰易懂就行了.

一个包内可以包含多个文档注释行/文档嵌入行/类定义,所有这些内容都被认为位于这个名称的包中.

每新建一个火山程序,都会在首部固定加入一个不可被删除的包定义成员,该成员始终位于源文件的首部而且只能存在一个:

![img](https://img-1251985644.file.myqcloud.com/images/20210210235630.png)

多个程序文件可以具有相同的包名,此时其中的内容被认为处于同一个包中:

![img](https://img-1251985644.file.myqcloud.com/images/20210210235639.png)

![img](https://img-1251985644.file.myqcloud.com/images/20210210235643.png)

### 注释

可以使用以下方式定义火山程序中的注释:

1. 任何定义型成员其名称如果以**连续两个'/'字符**引导,说明其处于被注释状态,其以及其中的所有内容(包括直接/间接子成员)在编译时都将被忽略;
2. 在类外部的程序行,被称为**文档注释行**; 在类内部但是在类方法外部的程序行,被称为**类注释行**;
3. 在类方法内部可以使用**连续两个'/'字符**引导一段一直到行尾的语句注释文本.

文档注释行/类注释行/从行首开始的语句注释文本,其尾部如果以一个或多个**减号**/**等号**字符结束,IDE 将自动在其后绘制对应长度的单/双分隔线.可以在 IDE 设置选项中将此机制关闭.

![img](https://img-1251985644.file.myqcloud.com/images/20210210235716.png)

从上图可以看到,**任何不在方法内部的文本行均被看作是注释行**,请注意这一点.

### 类

类用作定义一个可以具有各种子成员的复合数据类型,这些子成员为:

1. 类注释行;
2. 类嵌入行(普通用户无需掌握);
3. 类成员变量;
4. 类成员常量;
5. 类成员方法(通常方法/属性读或写方法/事件定义或接收方法).

::: tip 注意

1. 同一个包中不允许出现相同的类名;

2. 类名为[单名称](#pure_name)(即其中不允许使用句点). 实际上包名是唯一允许中间使用句点的名称;

3. 名称为"**启动类**"的类被用作特殊指定用户程序的启动类,用户程序将从此处开始执行;

4. 引用类名时可以直接使用类名称,或者使用"**包名.类名**"进行引用,此格式被称为类的**全名称**,当访问其它包中的公开类时,必须提供类的全名称;

5. 在需要访问类实例对象的成员时,在类对象实例名称和欲访问的子成员名称之间使用**句点**分隔即可,前面指定具体访问哪一个对象实例,后面指定访问这个对象实例的具体哪个子成员. 如:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210210235923.png)

   分别访问了"测试类"的实例对象"测试类对象"的"成员变量 1"/"成员常量 1"/"成员方法"三个子成员.

:::

**基本属性表**:

- **基础类**：

  指定本类的基础类名称,可以是单名称/全名称,也可以是空文本(表示无基础类).

  如果定义了非空基础类,当前类将自动继承所有来自该基础类的内容,如果该基础类还有基础类,将一并继承过来,此时本类称为这些类的"**继承类**".

  注: 有一些编程语言也称"继承类"为"**子类**","基础类"为"**父类**",意思是一样的.

  继承类访问其直接/间接基础类中的成员不需要其为公开状态.

  例图说明:

  ![img](https://img-1251985644.file.myqcloud.com/images/20210211000017.png)

- **公开**：

  指定本类是否对外公开.公开类可以在所处包外部被访问,而非公开类只能在所处包内部被访问.例图说明:

  ![img](https://img-1251985644.file.myqcloud.com/images/20210211000049.png)

  ![img](https://img-1251985644.file.myqcloud.com/images/20210211000056.png)

### 类成员或局部常量

常量用作定义一个不允许在程序中进行修改的恒定值.

常量与变量有以下不同之处:

1. 常量只能在定义时被赋予初始值,不能在程序中被修改;
2. 在设置常量初始值时,只能提供立即数,不能提供其它常量;
3. 常量的数据类型只能为基本数据类型(注: 还可以为常量类,但普通用户不需了解);
4. 常量的"静态"属性固定为真,即:常量并未存放在类的对象实例中,而只存放在类信息本身中,所以无论定义多少类对象实例,常量都只存在一份.因此常量的访问方式与静态成员变量的访问方式 是一样的,在其所处类/继承类外部需要以"所处类名.常量名"的方式访问.

**基本属性表**：

- **类型**：

  提供常量的数据类型,只能是基本数据类型或常量类.

- **公开**：

  指定本常量是否公开.公开常量可以在所处类外部被访问,而非公开常量只能在本类或者其继承类中访问.

  局部常量没有本属性.

- **初始值**：

  提供常量的初始值立即数,必须对应常量的数据类型.
  在设置常量初始值时,只能提供立即数,不能提供其它常量.

  如果数据类型为常量类,则应该直接提供该常量类所对应基本数据类型的立即数,如:

  - **视窗示例**

    ![img](https://img-1251985644.file.myqcloud.com/images/20210211000253.png)

    上图为 视窗系统类库中的一个名为"位图资源"的常量类,其初始值数据类型为文本型,下图为一个设置了对应数据类型初始值的常量.此时 视窗平台编译器会自动对此类常量进行特殊处理,以收集并建立对应的视窗资源.

    ![img](https://img-1251985644.file.myqcloud.com/images/20210211000307.png)

  - **安卓示例**

    ![img](https://img-1251985644.file.myqcloud.com/images/20210211000321.png)

    上图为安卓系统类库中的一个名为"可绘制资源"的常量类,其初始值数据类型为文本型,下图为一个设置了对应数据类型初始值的常量.此时安卓平台编译器会自动对此类常量进行特殊处理,以收集并建立对应的安卓资源.

    ![img](https://img-1251985644.file.myqcloud.com/images/20210211000332.png)

  ::: tip 注意

  普通用户只需要知道当常量/变量的数据类型为系统类库中所提供的常量类时,可以直接设置对应的基本数据类型立即数初始值即可,其它方面(譬如如何建立常量类),无需掌握,可以将其当前普通的类同样看待.

  :::

常量一般用作定义一些恒定值,譬如圆周率的 PI. 这样既能避免多次输入出错,还能提供程序的运行效率(便于优化).

下图是在火山安卓基本库的"数学运算类"中定义的 2 个数学常量及其使用例子,在需要使用这些值的地方可以使用常量来代替(如"数学运算类.E". "数学运算类.PI"),避免输入错误:

![img](https://img-1251985644.file.myqcloud.com/images/20210211000448.png)

![img](https://img-1251985644.file.myqcloud.com/images/20210211000453.png)

::: tip

火山视窗中的对应类名为"常数",用法是一致的.

:::

### 类成员或局部变量

变量的内容允许在程序中被动态修改.

**基本属性表**:

- **类型**：

  提供变量的数据类型,可以是基本数据类型或者类数据类型.

- **静态**：

  指定是否为静态变量.

  静态成员变量有以下特点:

  1. 静态变量在所处类载入后即保持始终存在,并且未存放在类的对象实例中,而只存放在类信息本身中,所以无论定义多少类对象实例,静态成员变量都只存在一份;

  2. 由于静态成员变量存放在类本身中,所以在其所处类/继承类外部需要以"**所处类名.静态成员变量名**"的方式访问:

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211000611.png)

     如上图,在"**测试类 1**"中定义了一个名为"**静态成员变量 1**"的成员变量,在测试类 2 中红色箭头所指向的代码是正确的访问方式,黄色箭头所指向的代码虽然也能被编译器所接受,但是由于不是推荐的访问方式会提示警告.

     无论在"**测试方法**"方法中定义了几个"**测试类 1**"的对象实例("对象 1"/"对象 2"),"**测试类 1**"的"**静态成员变量 1**"始终只存在一份,因此红色和黄色箭头指向的代码所访问的"**静态成员变量 1**"都是同一个.

  3. 由于静态变量初始化时不存在所处类实例,静态成员变量不支持自动挂接其事件到其所处类,在需要时必须通过"**挂接事件**"命令手动挂接.非静态的类成员变量,如果其数据类型为类且其中定义有事件,将被自动挂接到当前类实例对象。

- **参考**：

  **获得对象实例的各种方法**：

  1. 通过定义非参考变量的方式直接创建:

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211000725.png)

  2. 通过所提供的类方法创建:

     某些类不能通过直接定义该类的变量来创建其对象实例,因为欲创建其对象实例时可能还需要提供一些必要的参数信息或者满足其它前提. 如:

     在定义"屏幕度量信息类"时,指定了不允许直接定义其非参考对象变量:

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211000739.png)

     因此在编译下图程序时,将会出错:

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211000749.png)

     我们查看一下该类所提供的所有方法,可以找到创建并返回其对象实例的方法为:

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211000759.png)

     那么我们把前面的程序改为如下内容就可以了:

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211000808.png)

     **总结:** 如果某个类指定了不能直接定义其对象实例变量,那么肯定可以通过调用某个方法获得其对象实例.绝大多数情况下该方法由此类自行提供,名称中一般包括"创建"/"新建"/"获取"之类的字样,该方法一般为静态方法.

     如"**可绘制对象类**"的如下方法:

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211000824.png)

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211000834.png)

     ***

     ::: tip 注意

     ==使用参考属性时最容易犯的错误:==

     1. **遗漏设置必要的"参考"属性,如下图:**

        ![img](https://img-1251985644.file.myqcloud.com/images/20210211000935.png)

        "方法 1"和"方法 2"中的"变量 1"在定义时均没有设置"参考"属性,这样编译器会自动为其创建一个"测试类"对象实例,但是所创建的该对象实例在程序中根本没有被使用,从而导致程序执行效率降低,还占用了不必要的内存空间.

        所以每当我们定义一个数据类型为类的变量时,一定要检查是否需要为其设置"**参考**"属性 ,判断方法就是编译器自动创建的对象实例有没有在程序中被使用到,如果没有被使用到,就一定要设置"**参考**"属性.

     2. **使用空参考变量:**

        所谓"空参考变量",即没有参考到任何对象实例的变量,如:

        ![img](https://img-1251985644.file.myqcloud.com/images/20210211001016.png)

        像这样的代码,首先在编译时会报错.其次,即使编译通过,在运行时也会报告类似如下的空指针错误信息(NullPointerException, Java 目的平台):

        ![img](https://img-1251985644.file.myqcloud.com/images/20210211001036.png)

        所以我们在使用参考变量前,一定要记得首先确保它已经参考到了一个非空对象的对象实例.

     :::

- **公开**：

  指定本变量是否公开.公开变量可以在所处类外部被访问,而非公开变量只能在本类或者其继承类中访问.

  局部变量没有本属性.

- **初始值**：

  提供变量的初始值,必须对应变量的数据类型.

  如果未提供初始值,非数组变量的初始值如下:

  > 数值型变量的初始值为 0,逻辑型变量的初始值为假,文本型变量的初始值为""(即空文本).对于火山安卓平台,参考变量("参考"属性为真的变量)及非基本数据类型变量的初始值均为[空对象](#null_object),对于火山视窗平台,由于不支持定义参考型数据,因此所有非基本数据类型变量均为对应的对象 实例.

  数组变量的初始值如下:

  > 数值型数组变量的每个成员初始值为 0,逻辑型数组变量的每个成员初始值为假,其它所有数据类型(包括文本型)数组变量的每个成员初始值 如果为火山安卓平台则为[空对象](#null_object),为火山视窗平台则为对应的对象实例.
  >
  > 因此,在火山安卓平台中,对于非数值和逻辑型的数组,其每个成员在使用前必须首先被单独赋值,如:
  >
  > ![img](https://img-1251985644.file.myqcloud.com/images/20210211001142.png)

  与常量不同的是: 在设置变量初始值时,可以提供立即数,也可以提供常量.

  变量初始值设置例图:

  |                                **视窗示例**                                |                                **安卓示例**                                |
  | :------------------------------------------------------------------------: | :------------------------------------------------------------------------: |
  | ![img](https://img-1251985644.file.myqcloud.com/images/20210211001215.png) | ![img](https://img-1251985644.file.myqcloud.com/images/20210211001220.png) |

  从上图中可以看出,"变量 2"使用常量作为初始值,"变量 9"和常量初始值一样,当数据类型为常量类时,可以为其设置所对应基本数据类型的立即数初始值.

### 类成员方法

定义类的方法,用作类对外提供其所支持的功能时使用.

**方法的名称:**

1. 方法的名称必须为单名称,而且必须在类的所有成员名称中唯一;

2. 名称为"**类\_初始化**"的方法为类的初始化方法(在类对象被创建时自动调用),该方法不携带任何参数并且不返回值,对是否公开没有要求. 如下图:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211001336.png)

3. 名称为"**类\_清理**"的方法为类的清理方法(在类对象被销毁时自动调用),该方法不携带任何参数并且不返回值,对是否公开没有要求.

   **注意**:在火山安卓平台上,由于内存垃圾自动回收机制的限制,类清理方法不被支持.

   以下为在火山视窗平台上的演示程序:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211001346.png)

   ::: tip 提示

   "类*初始化"和"类*清理"方法在开发环境中可以通过按下 Ctrl+I 组合键调用对应对话框自动插入对应空方法:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211001426.png)

   :::

**方法的基本属性表:**

- **返回值类型**：

  提供方法执行完毕后所返回数据的数据类型

  如果指定了非空数据类型,则方法中就必须调用"**返回**"关键字语句来返回对应数据类型的数据:

  ![img](https://img-1251985644.file.myqcloud.com/images/20210211001503.png)

- **静态**：

  指定是否为静态方法.

  ::: tip 注意

  1. 与类的静态成员变量一样,类的静态方法需要通过"类名.方法名"的方式来引用;

  2. 在静态方法内部,只能访问其所处类或者其所处类的基础类中的成员常量或者静态成员变量. 如:

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211001602.png)

     其中定义了一个名为"测试方法"的静态方法,其中第一行代码同时访问了类中的"静态变量 1"和"常量 1",这是被允许的,然后后面的一行代码访问了非静态变量"变量 1"(红色箭头指向处),这是不被允许的,编译器将报错.

  3. 如果静态方法所定义第一个参数的数据类型为方法所处类本身而且没有指定参数匹配和需求类型(普通用户无需了解),那么可以基于该类对象以动态格式来调用该静态方法,编译器将自动进行转换:

     ![img](https://img-1251985644.file.myqcloud.com/images/20210211001620.png)

     譬如上面的程序在"测试类"中定义了一个名为"方法 1"的静态方法,它第一个参数的数据类型为"测试类"自身,那么在程序中其它位置调用这个方法时,可以采用以下两种方式:

     1. `测试类.方法1 (变量1, 1)`
     2. `变量1.方法1 (1)`

     第一种方式是标准的静态方法访问方式,第二种就是优化后的方式,其第一个参数被移动到方法访问对象上,这种方式在编译时将被自动转换为第一种方式.

     采用这种优化方式的具体要求为:

     > **静态方法第一个参数的数据类型必须为其所处类本身.**

     只要满足这个要求,该静态方法被调用时第一个参数就可以被移动到其方法访问对象上,其后续参数正常填写.

  :::

- **类别**：

  指定方法的具体类别,可以为以下几种之一(关于属性和事件类别方法后面有专门章节描述,此处了解一下就可以了):

  1. **通常**: 表明本方法为通常方法

  2. **属性读:** 表明本方法为属性读取方法. 该属性可以在程序语句中被读取.

     如果属性读方法为静态方法,所要求的定义格式:

     1. 必须定义且只能定义一个参数,该参数的数据类型必须为属性读方法所处类本身;
     2. 必须定义有返回值,该返回值的数据类型不能为数组,该数据类型即为本属性被读取时的数据类型.

     如果属性读方法不为静态方法,所要求的定义格式:

     1. 不能定义参数;

     2. 必须定义有返回值,该返回值的数据类型不能为数组,该数据类型即为本属性被读取时的数据类型.

     ::: tip 注意

     1. 在程序中,必须以与变量相同的引用方式来访问属性读方法. 如: "类对象 1.属性 1";
     2. 如果存在同名属性写方法,则两者的数据类型必须一致;
     3. 在全局类中不能定义属性读方法(普通用户无需掌握).

     :::

  3. **属性写:** 表明本方法为属性写入方法. 该属性除了可以在程序语句中被赋值,还可以在该类对象变量的扩展属性表的"**属性**"列中被赋予初始值.

     如果属性写方法为静态方法,所要求的定义格式:

     1. 必须未定义返回值;
     2. 必须定义且只能定义两个参数,第一个参数的数据类型必须为属性写方法所处类本身,第二个参数的数据类型不能为数组,该数据类型即为本属性被写入时 所需要的数据类型.

     如果属性写方法不为静态方法,所要求的定义格式:

     1. 必须未定义返回值;
     2. 必须定义且只能定义一个参数,该参数的数据类型不能为数组,该数据类型即为本属性被写入时所需要的数据类型.

     ::: tip 注意

     1. 在程序中,必须以与变量相同的引用方式来访问属性写方法. 如: "类对象 1.属性 1 = 1";
     2. 如果存在同名属性读方法,则两者的数据类型必须一致;
     3. 在全局类中不能定义属性写方法(普通用户无需掌握).

     :::

  4. **定义事件:** 定义本类对象将会发送事件的名称及格式,此种方法必须满足以下格式要求:

     1. 方法体必须为空;
     2. 返回值数据类型必须为整数;
     3. 不能为静态方法.

  5. **接收事件:** 定义本类对象将会接收本类中成员变量对象所发送的事件,此种方法且必须满足以下要求:

     1. 返回值数据类型必须为整数;
     2. 不能为静态方法;
     3. 方法名称格式必须为: 事件对象类名 + "\_" + 欲接收事件名;
     4. 方法的第 1 个参数的数据类型必须为欲接收其事件的事件对象类名;方法的第 2 个参数的数据类型必须为整数,用作接收"挂接事件"关键字调用所提供的"标记值"参数值(非该方式挂接事件则此参数值固定为 0);方法其余参数的数目及数据类型必须与欲接收事件的定义方法一致.

     **注**: 开发环境中有对应的快捷功能自动生成指定事件的接收方法.

- **公开**：

  指定本方法是否公开.公开方法可以在所处类外部被访问,而非公开方法只能在本类或者其继承类中访问.

- **参数表**：

  为方法定义一个参数表,用作指定调用此方法时所需要提供的参数:

  ![img](https://img-1251985644.file.myqcloud.com/images/20210211002219.png)

  需要**注意**的是:

  1. 数据类型为**类**或**文本型**的参数始终以参考方式传递对象(这一点上视窗和安卓平台是一致的). 譬如上图的参数 1 和参数 2**,**如果在外部调用"测试方法 (测试类 1 对象, 文本变量 1, 123)",那么"参数 1"将是指向"测试类 1 对象**"**的参考,操作"参数 1"等效于操作"测试类 1 对象","参数 2"将是指向"文本变量 1**"**的参考,操作"参数 2"等效于操作"文本变量 1**"**;
  2. 调用方法时,必须加上用小括号括住的参数表,即使该方法的参数表为空,也必须加上用小括号括住的空参数表. 如: 假设前面的"测试方法"没有定义任何参数,调用它时也必须使用"测试方法()"格式.

### 类成员属性

类成员属性用作表达或修改类的特征时使用,可以使用类方法或者类成员变量来定义.

根据其可访问方式分为 3 类: "**可读成员属性**" / "**可写成员属性**" / "**可读写成员属性**".

1. **定义"可读成员属性":**

   "**可读成员属性**"用作支持对属性值的读取.

   插入一个方法,将其"**类别**"列设置为"**属性读**",然后保证其满足以下格式要求:

   1. 访问权限必须为"**公开**";
   2. 不能为静态方法(实际上静态方法也可以用作定义属性,不过这个不需要普通用户掌握);
   3. 没有参数;
   4. 必须定义有一个返回值,该返回值的数据类型即为该属性的**数据类型**.

   譬如以下代码在"**测试类**"中定义了一个数据类型为"**整数**"的可读属性"**我的属性**":

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002433.png)

   ::: tip 注意

   虽然"**我的属性**"是以成员方法的形式定义的,但是在程序中访问时不能以方法的访问方式"**对象.我的属性()**"来访问,而应该以访问"**成员变量**"的方式来访问,即:"**对象.属性名**".

   如,访问上面可读属性的语句为:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002514.png)

   其中黄色箭头指向处定义了"**测试类**"的一个对象实例,红色箭头处读取了其"**我的属性**"的属性值并将其赋值到"**整数变量 1**".

   实际上,读取"**测试类对象.我的属性**"时,等效于调用了"**我的属性**"属性读取方法.

   :::

2. **定义"可写成员属性":**

   顾名思义,"**可写成员属性**"就是用作支持对属性值的写入.它的定义方式与定义"**可读成员属性**"类似,只是所定义方法的格式要求不同.

   插入一个方法,将其"**类别**"列设置为"**属性写**",然后保证其满足以下格式要求:

   1. 访问权限必须为"**公开**";
   2. 不能为静态方法(实际上静态方法也可以用作定义属性,不过这个不需要普通用户掌握);
   3. 只有一个参数,该参数的数据类型即为该可写属性的**数据类型**;
   4. 没有返回值.

   譬如以下代码在"**测试类**"中定义了一个数据类型为"**整数**"的可写属性"**我的属性**":

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002556.png)

   同样,虽然此处"**我的属性**"是以成员方法的形式定义的,但是在程序中访问时不能以方法的访问方式"**对象.我的属性(欲写入的属性值)**"来访问,而应该以访问"**成员变量**"的方式来访问,即:"**对象.属性名 = 欲写入的属性值**".

   如,访问上面可写属性的语句为:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002613.png)

   其中黄色箭头指向处定义了"**测试类**"的一个对象实例,红色箭头处将其"**我的属性**"的属性值赋值为 123.

   实际上,写入"**测试类对象.我的属性**"时,等效于调用了"**我的属性**"属性写入方法.

   "**可写成员属性**"还有另外一种访问方式,就是直接在对象的属性表中设置,如:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002624.png)

   等效于前面通过语句"测试类对象.我的属性 = 123"对该属性的写入.

   操作小提示:要想知道当前对象有哪些"**可写属性**",在"**属性名**"列上**按下空格**即可:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002634.png)

3. **定义"可读写成员属性":**

   很容易理解,"**可读写成员属性**"就是既可以**被读取**又可以**被写入**的属性,定义它的方式也很简单,就是同时定义名称相同的**属性读**和**属性写**方法,如:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002700.png)

   其中黄色箭头指向定义了"**我的属性**"的**属性读**方法,红色箭头指向定义了"**我的属性**"的**属性写**方法.

   前面已经讲过,"**可读属性**"用作支持对类属性的**读取**操作,"**可写属性**"用作支持对类属性的**写入**操作,编译器会根据当前操作是读取还是写入自动调用对应的**属性读/写方法**.当以以下方式对"**我的属性**"进行访问时:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002713.png)

   黄色箭头指向处将调用"**我的属性**"的属性读方法,而红色箭头指向处将调用"**我的属性**"的属性写方法.

   定义"**可读写成员属性**"时需要注意的是:

   > "**属性读方法**"和"**属性写方法**"的数据类型必须一致,也就是说: "**属性读方法**"的返回值与同名"**属性写方法**"第一个参数的数据类型必须一致:
   >
   > ![img](https://img-1251985644.file.myqcloud.com/images/20210211002737.png)
   >
   > 如图中黄色和红色箭头所指向的数据类型必须一致.

4. **定义"可读写成员变量属性":**

   有时候我们想直接把一个"**成员变量**"同时定义为"**成员属性**",譬如前面的例子所定义的"**我的属性**"也可以这样定义:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002809.png)

   具体方法就是为该成员变量设置属性值为**真**的"**@属性变量**"系统属性(系统属性是指以'**@**'字符开头的系统预定义属性)即可.

   操作小提示:要想知道当前对象有哪些"系统属性",在"**属性名**"列上输入'**@**'字符,要想知道当前对象有哪些"用户程序属性",在"**属性名**"列上输入**空格**字符:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002819.png)

   注意:这些系统属性,除了在本文档中提到的,一般用户无需了解.

   此处定义的"**我的属性**",与前面通过"**属性读/写方法**"定义的"**我的属性**"没有任何区别,同样可以在对象的属性表中使用:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002830.png)

   那么问题来了,既然可以这么简单地定义成员属性,那么为什么还要那么麻烦去通过"**属性读/写方法**"来定义呢?

   道理很简单:通过"**属性读/写方法**"来定义可以使用程序代码对属性的**读/写**操作进行具体控制,还可以进行一些额外的特定操作,而定义"**成员变量属性**"就没办法达到这个目的了,本处两者效果一致只是一个特例.

5. ###### 定义"只读成员属性"和"只写成员属性":

   定义"**只读成员属性**"和"**只写成员属性**"很简单:

   > 只提供了"**属性读方法**"的属性就是**只读属性**,只提供了"**属性写方法**"的属性就是**只写属性**.

   如果想对"**只读成员属性**"进行写操作,或者想对"**只写成员属性**"进行读操作,编译器都会报错:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211002905.png)

   如上图,在"**测试类**"中定义了名为"**我的只读属性**"的只读属性(未提供该名称的属性写方法)和名为"**我的只写属性**"的只写属性(未提供该名称的属性读方法),那么在黄色和红色箭头所指向处的代码在编译时都会报错.

   可以通过此方式对属性的读写权限进行分别控制.

6. **填写成员属性表:**

   火山中所有定义型成员(包/类/方法/常量/变量/参数)都具有一个属性表(由紧挨着的"**属性名**"和"**属性值**"两列组成),用作指定该成员相关属性的值.

   1. 以下属性可以在所有成员的属性表中被使用:

      > 火山系统定义的全局扩展属性或项目插件定义的项目扩展属性(属性名以'@'开头,普通用户无需掌握).

   2. 以下属性可以在类的属性表中被使用,用作在类对象被创建时自动初始化相关属性值:

      > 1. 类自身或其基础类中定义的可读写成员变量属性;
      > 2. 类自身或其基础类中定义的所有属性写方法;
      > 3. 以上属性的**子属性**,如"可读属性 1.可读属性 2.可写属性 3",前面的父属性必须均为可读取属性,最后一个属性必须为可写入属性.

   3. 以下属性可以在类成员变量的属性表中被使用:

      > 1. 类成员变量的数据类型类或其基础类中定义的可读写成员变量属性;
      > 2. 类成员变量的数据类型类或其基础类中定义的所有属性写方法;
      > 3. 以上属性的**子属性**,如"可读属性 1.可读属性 2.可写属性 3",前面的父属性必须均为可读取属性,最后一个属性必须为可写入属性.

   4. 属性值:

      > 1. 属性值可以引用程序中定义的常量或者提供对应数据类型的立即数;
      > 2. 如果属性指定只能从其提供的选择列表中选择属性值(使用"@列表选择项"系统全局属性指定,普通用户知道即可,无需掌握),则属性值只能从这些列表项中选择;
      > 3. 如果属性数据类型为常量类:
      >
      > > 1. 如果该常量类中定义有常量成员,则属性值只能从这些常量成员中选择;
      > > 2. 否则可以直接提供该常量类所对应数据类型的立即数. 譬如,假设属性 A 的数据类型为"可绘制资源"(安卓平台)或"位图资源"(视窗平台),那么属性值除了可以为其提供一个同样数据类型的常量以外,还可以直接为其提供一个 对应图片文件名文本.
      >
      > ::: tip 注意
      >
      > 普通用户只需要知道当属性的数据类型为系统类库中所提供的常量类时,可以如此处理即可,其它方面(譬如如何建立常量类),无需掌握,可以将其当前普通的类同样看待.
      >
      > :::

      属性表填写实例如下图:

      ![img](https://img-1251985644.file.myqcloud.com/images/20210211003321.png)

      下图为所使用到的安卓平台系统类"文件打开方式"的定义,了解一下即可:

      ![img](https://img-1251985644.file.myqcloud.com/images/20210211003333.png)

### 类成员事件

**成员事件**用来类对外发送通知时使用.

一个很简单的例子: 用作"**按钮**"的类必须在用户单击按钮时向外部发送"**被单击**"事件,用作"**时钟**"的类必须向外部定时发送"**时钟周期**"事件,等等.

类的其它三类"**成员变量**" / "**成员属性**" / "**成员方法**"都是被动接受来自外部的访问,而"**成员事件**"是主动向外部发送通知,这是两者之间的最主要不同.

1. 定义**"成员事件":**

   插入一个方法,将其"**类别**"列设置为"**定义事件**",然后保证其满足以下格式要求:

   1. 访问权限必须为"**公开**";
   2. 不能为静态方法;
   3. 返回值必须为整数;
   4. 方法体必须为空.

   **事件定义方法**对参数表没有要求,用户可以根据自己的需要随意定义.

   譬如下图我们为"测试类 1"定义了一个"我的事件 1"事件:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211003414.png)

2. **在类中发送事件:**

   在类中的代码内,当需要发送事件时,直接调用该事件的"**事件定义方法**"即可. 如上图.

   当调用"**事件定义方法**"时,如果该事件定义方法上挂接了对应的"**事件接收方法**"(见下),会自动去调用该"**事件接收方法**"并返回其所返回的整数值,否则会直接返回整数值 0.

3. **接收其它类所发送过来的事件:**

   要想接收其它类所发送的事件,必须首先定义相应的**事件接收方法**,譬如以下代码在"**测试类 2**"中定义了一个前面的"**测试类 1**"的对象变量:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211003438.png)

   想要接收其"**我的事件 1**"事件,需要如下操作:

   鼠标右键单击"**成员变量 1**"的定义行:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211003448.png)

   选择其中的"**添加成员变量 1 的事件接收及虚拟方法方法**"菜单项:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211003459.png)

   再选择其中的"**测试类 1\_我的事件 1**",然后单击"**添加**"按钮,会自动在程序中插入对应的事件接收方法:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211003509.png)

   当然,你也可以自己手工创建并填写符合此格式的事件接收方法,效果是一样的.

   查看上面所生成的事件接收方法,可以发现它的格式要求:

   > 1. 方法名称必须为: "事件定义方法所处类名"+下划线+"事件定义方法名称";
   > 2. 不能为静态方法;
   > 3. 方法的第一个参数必须为固定的"**来源对象**"参数,其数据类型为发送事件的类,用作提供具体是哪个对象发送过来的事件;
   > 4. 方法的第二个参数必须为固定的"**标记值**"参数,其数据类型为整数,用作动态挂接事件时使用(见后);
   > 5. 方法的后续参数表必须与对应的"**事件定义方法**"一致,用作提供在事件定义方法所处类中发送事件(调用该事件定义方法)时所传递过来的具体参数值;
   > 6. 方法的返回值必须为整数,此返回值将被传递回在事件定义方法所处类中调用该事件定义方法的调用方.

   一旦为**类成员变量**对象的"**事件定义方法**"定义了对应的"**事件接收方法**",那么该事件就被自动挂接到了此接收方法上,在事件定义方法所处类中一旦调用该"**事件定义方法**",此"**事件接收方法**"就会被自动调用.

   注意,由于同一类的同一事件均被发送到同一个事件接收方法,因此必须充分使用"**来源对象**"和"**标记值**"两个参数进行区分. 如:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211003609.png)

   如上图,"成员变量 1"和"成员变量 2"由于其类型都为"测试类 1",因此收到其"我的事件 1"后,都会调用"测试类 1\_我的事件 1"事件接收方法,在该方法中可以通过判断具体来源对象来进行区分处理.

   附: 这种特性是不是比其它编程语言更强大? 不再是只有在被设计窗体上的窗口组件才能发送事件了,也不再需要为了让其能发送事件去开发 专用的窗口哑组件了.在火山中,任何代码位置处的**对象**均可以发送事件.

4. **动态挂接其它类所发送过来的事件:**

   如前所述,一旦为**类成员变量**对象的"**事件定义方法**"定义了对应的"**事件接收方法**",那么该事件就被自动挂接到了当前类中的对应"**事件接收方法**"上,但是其它代码位置处对象的事件是不会自动挂接到当前类中的,譬如下面代码:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211003654.png)

   在"**测试方法 1**"中定义了一个"**测试类 1**"的局部变量对象,此时该对象上的"**我的事件 1**"事件是不会自动挂接到当前类的"**测试类 1\_我的事件 1**"事件接收方法上的.也就是说,当前类此时将无法接收到来自此"**测试类 1**"对象实例的"**我的事件 1**"事件.

   如果需要接收该局部变量对象的事件,必须调用"挂接事件"关键字明确挂接其事件到当前类:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211003713.png)

   "**挂接事件(变量 1)**"语句被执行后,此"**测试类 1**"对象的"**我的事件 1**"事件就被挂接到了当前类的"**测试类 1\_我的事件 1**"事件接收方法上,以后当前类就可以接收到来自该对象的"**我的事件 1**"事件了:

   在调用"挂接事件"关键字时可以额外再提供一个标记值参数,如: "**挂接事件 (变量 1,123)**",此时该"**测试类 1**"对象一旦发送事件,事件接收方法的"标记值"参数将接收到此处所提供的标记值"**123**",便于程序中对此事件进行特定处理.

### 虚拟方法

虚拟方法为可以在继承类中将其覆盖的方法.

对于普通用户来说,不需要掌握如何定义虚拟方法,只需要了解如何覆盖系统类中定义好的虚拟方法即可.

**虚拟方法相比普通方法的不同之处:** 虚拟方法被调用时,所调用到的实际方法由调用对象的**运行时真实数据类型**而不是其**声明时数据类型**决定.

听起来挺拗口,而且不好理解,不要紧,下面我们来逐步讲解.

假设存在以下两个类: "测试类 1"和"测试类 2",其中"测试类 1"是"测试类 2"的基础类,同时这两个类中都定义了一个名叫"**方法 1**"的方法:

![img](https://img-1251985644.file.myqcloud.com/images/20210211003803.png)

这两个方法的定义格式完全相同(具有相同的名称/返回值数据类型/参数表),而且均定义了"**@虚拟方法**"属性.这就是"虚拟方法"名词的来由,凡是定义了"@虚拟方法"属性的方法,均称为**虚拟方法**.

使用下面这段代码对这两个方法进行调用:

![img](https://img-1251985644.file.myqcloud.com/images/20210211003812.png)

在"测试方法 2"中对"方法 1"进行了调用,按照常理来说,由于"参数 1"的数据类型为"测试类 1",因此应该始终是调用"测试类 1"中定义的"方法 1"才对.如果"方法 1"不是虚拟方法,这种假设是对的,但是由于其是虚拟方法,所以此处所具体调用的是哪个类里面的"方法 1"由"参数 1"的当前运行时实际数据类型决定,即: "参数 1"如果指向的是"测试类 1"的对象,则调用的就是"测试类 1"的"方法 1",如果指向的是"测试类 2"的对象,则调用的就是"测试类 2"的"方法 1".

很明显,"测试方法 2 (测试类 1 对象)"语句调用的是"测试类 1"中的"方法 1",而"测试方法 2 (测试类 2 对象)"语句调用的是"测试类 2"中的"方法 1".

使用虚拟方法有什么好处? 最重要的好处就是可以在继承类中通过虚拟方法覆盖改写基础类中的同名方法,此特性可以用作以下几个方面:

> 1. **修改基础类中的原有功能**
>
>    注意: 本条普通用户只需稍作了解即可.
>
>    考虑一下这个应用场景,在程序中一直使用来自第三方库的名为"测试类 1"的类,我们发现其"方法 1"不能满足需要而我们又无法去直接修改它,如果该方法为虚拟方法,则我们可以建立一个"测试类 1"的继承类"测试类 2",并将其"方法 1"覆盖,然后将所有创建"测试类 1"对象的代码均改为创建"测试类 2"的对象即可.
>
> 2. **建立多态类**
>
>    注意: 本条普通用户只需稍作了解即可.
>
>    虚拟方法可以用作实现基于同一基础类的继承类表现出不同的行为.
>
>    假设有一个画板类,其中可以绘制各种图形(如三角形/圆/矩形等),按照面向对象的设计方法,我们可以定义一个名为"图形类"的基础类,该类定义了一个名为"绘制"的虚拟方法,然后再定义"图形类"的各种继承类,如"三角形类","圆形类","矩形类"等等,在这些继承类中,将基础类中的"绘制"方法覆盖以实现其特定的绘制工作.在画板类中进行绘制时,接收一个"图形类"的对象,调用其"绘制"方法即可绘制各种不同的图形,而不用管具体接收的是哪种图形类对象.
>
> 3. **在基础类中调用位于继承类中的方法**
>
>    火山类库广泛使用本特性向用户继承类发送通知,因此本条普通用户必须了解.
>
>    由于火山安卓平台的类库中虚拟方法的应用场合较多,下面以该平台程序作为例子进行说明.
>
>    这是一个非常简单的安卓程序,用作在所处窗口被创建时显示一个提示框:
>
>    ![img](https://img-1251985644.file.myqcloud.com/images/20210211003858.png)
>
>    "启动类"为系统类"窗口"的继承类,其中覆盖了该类中定义的虚拟方法"通知\_被创建":
>
>    ![img](https://img-1251985644.file.myqcloud.com/images/20210211003909.png)
>
>    当安卓程序启动后,将自动创建用户的"启动类"窗口实例对象,当该窗口被创建时,系统类中将自动调用其"通知*被创建"方法,由于窗口实例对象的真实数据类型为"启动类",因此此时所实际调用的是用户"启动类"中的"通知*被创建"方法,从而达到了在窗口被创建时通知用户程序的目的.
>
>    在火山开发环境中,可以执行以下菜单功能来自动创建用作基础类中的虚拟覆盖方法,在继承类中的任意位置点击右键,选择"添加 xxx 的 事件接收及虚拟方法"菜单项:
>
>    ![img](https://img-1251985644.file.myqcloud.com/images/20210211003920.png)
>
>    选中所需要创建的虚拟覆盖方法,然后点击"添加"按钮:
>
>    ![img](https://img-1251985644.file.myqcloud.com/images/20210211003931.png)
>
>    即可将对应的虚拟覆盖方法加入到当前类中,下图为添加后的结果:
>
>    ![img](https://img-1251985644.file.myqcloud.com/images/20210211003944.png)
>
>    最后在所添加的方法体中加入自己的处理代码即可.
>
>    注意,在继承类的虚拟方法中,有时候想调用基础类中被覆盖的虚拟方法,可以采用类似以下语句调用:
>
>    ![img](https://img-1251985644.file.myqcloud.com/images/20210211003956.png)

### 方法语句

程序语句在方法中使用,用作提供具体的方法实现代码.

下面为程序语句的简单概念,稍作了解即可:

> 程序语句可以使用表达式进行描述**,**表达式由使用操作符组合在一起的语句单元组成,分为以下几类:
>
> 1. 一元表达式,如: -变量 1, (长整数)1
> 2. 二元或多元表达式,如: 变量 1 + 变量 2, 变量 1 _ 123 _ 变量 2
> 3. 命令或方法调用表达式,如: 方法 1 (123), 如果 (变量 1)
> 4. 表达式可以嵌套,如: -(变量 1 + 变量 2), 如果 (变量 1 == 真)
>
> 表达式中的语句单元可以是: **数据类型**/**变量**/**常量**/**参数**/**方法**/**名称类关键字**/**立即数**等

::: tip 注意

在火山程序中,没有**流程线**,只有**子语句体**. 即:

1. 任何程序语句都可以拥有一条或多条下属语句,这些下属语句称为该语句的**子语句体**,该语句称为这些下属语句的**父语句**;
2. 子语句体可以嵌套. 也就是说,子语句可以继续拥有子语句体.

如图:

![img](https://img-1251985644.file.myqcloud.com/images/20210211004201.png)

其中,所有子语句体与其所处的父语句之间均使用虚线括住标注出来了. 即:

> 语句行 12-16 是语句行 11 的子语句体;
>
> 语句行 15-16 是语句行 14 的子语句体;
>
> 语句行 19-26 是语句行 18 的子语句体;
>
> 语句行 22-23 是语句行 21 的子语句体;
>
> 语句行 25-26 是语句行 24 的子语句体.

在使用虚线标注子语句体的时候,系统对"**如果**"和"**否则**"语句进行了特殊处理,将两者的子语句体线连接起来了,这样看起来 结构更清晰一些.

:::

## 火山平台关键字

### 基本数据类型关键字

| **名称** | **输入字1** |                           **解释**                           |
| :------: | :---------: | :----------------------------------------------------------: |
|   字节   |    sbyte    | 字节(有符号)基本数据类型,有效值范围从-128到127,占用1个字节空间. |
|  短整数  |    short    | 短整数基本数据类型,有效值范围从-32768到32767,占用2个字节空间. |
|   字符   |    wchar    |   宽字符基本数据类型,有效值范围从0到65535,占用2个字节空间.   |
|   整数   |     int     | 整数基本数据类型,有效值范围从-2147483648到2147483647,占用4个字节空间. |
|  变整数  |    vint     | 变整数基本数据类型,本类型在目的编程语言为c/c++且编译64位程序时等效于长整数类型,编译32位程序时等效于整数类型.目的编程语言为非c/c++时均等于整数类型. 一般情况下无需使用. |
|  长整数  |    long     | 长整数基本数据类型,有效值范围从-9223372036854775808到9223372036854775807,占用8个字节空间. |
|   小数   |   double    | 双精度小数基本数据类型,有效值范围从1.797693e+308到4.9000000e-324,占用8个字节空间. |
|  逻辑型  |    bool     |              逻辑型基本数据类型,有效值为真/假.               |
|  文本型  |   string    |          文本型基本数据类型,用作记录一段字符串文本.          |

- 模板类型1 -> 模板类型8

  注意: 本关键字普通用户只需要了解一下即可.
  模板数据类型,只能在模板基础类中使用.

  模板数据类型本身并不是真实存在的数据类型,所对应的真实数据类型需要由模板实现类来提供.

  我们举个例子,假设我们需要开发一个数组操作类,用作支持对各种数组类型进行操作,如果不使用模板类型,那么我们需要写很多类似的类:

  > 整数数组操作类, 小数数组操作类, 文本数组操作类 ......

  而这些类的处理代码是完全一样的,唯一不同之处就是其所操作的数据类型不同,使用模板类型,我们可以把所有代码都放到模板基础类里面,然后定义对应的模板实现类即可. 如:

  ![img](https://img-1251985644.file.myqcloud.com/images/20210211094723.png)

  这样能大大减少工作量,也能让程序具有更好的可维护性(只需维护一处即可).

注释:

1. "**输入字**"的意思是在程序中还可以通过输入此文本来输入该关键字.

**使用图例:**

> 下图为一个定义了各种基本数据类型变量的程序:
>
> ![img](https://img-1251985644.file.myqcloud.com/images/20210211094843.png)

**说明:**

1. "字节/短整数/字符/整数/长整数/小数"这几种数据类型被统称为数值数据类型,它们按照所能容纳数值范围的大小(也称为**容量**)从小到大顺序排列为:

   > 字节 < 短整数 < 字符 < 整数 < 长整数 < 小数

2. 如何确定数值计算表达式的结果数据类型:

   数值计算表达式的结果数据类型确定方法为:

   > 为数值计算表达式中具有最大容量的数值数据类型

   假设有一个数值计算表达式: "变量1 + 变量2", 其中"变量1"的数据类型为整数,"变量2"的数据类型为小数,那么这个表达式计算后结果的数据类型就是其中最大容量的数据类型: 小数.

3. 如何在帮助中查看模板类型的真实数据类型:

   假设有下面这段代码:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211094955.png)

   当你右键单击末语句行上的"**置入**"方法,然后选择查看其帮助菜单项后,看到帮助页面中参数部分为以下内容:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211095005.png)

   你一定会感到困惑,"模板类型1"和"模板类型2"所对应的真实数据类型到底是什么呢?

   很简单,请继续单击该"模板类型1"/"模板类型2"链接,譬如点击前者将看到如下页面:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211095016.png)

   根据"对象变量1"的当前数据类型"整数到对象哈希表类",就可以得知,"模板类型1"当前所对应的真实数据类型为"整数类",这就是"整数到对象哈希表类"为其模板基础类中的"置入"方法第一个参数 提供的真实数据类型.

### 名称关键字

**对象名称关键字**：

- 本对象 (this)

  用作在程序语句中代表所处类的对象本身.

  **注意:** 如果语句所处方法为静态方法,由于此时根本不存在当前类的实例对象,所以不能使用本关键字.

  ![img](https://img-1251985644.file.myqcloud.com/images/20210211095123.png)

- 父对象(super)

  用作在类成员方法中代表所处类的父类对象.

  **注意:** 如果语句所处方法为静态方法,由于此时根本不存在当前类的实例对象,所以不能使用本关键字.

  ![img](https://img-1251985644.file.myqcloud.com/images/20210211095148.png)

**立即数名称关键字:**

- 真(true)

  用作代表逻辑值立即数真

- 假(false)

  用作代表逻辑值立即数假

- 空对象(null)

  用作代表空对象,可以匹配所有非常量类的类数据类型以及文本型.

  ![img](https://img-1251985644.file.myqcloud.com/images/20210211095336.png)

### 操作符关键字

::: tip 

因表格无法处理，请进入官网查看 [http://doc.voldp.com/grammar.htm#oper_keyword](http://doc.voldp.com/grammar.htm#oper_keyword)

:::

### 命令关键字

::: tip 

因表格无法处理，请进入官网查看 [http://doc.voldp.com/grammar.htm#command_keyword](http://doc.voldp.com/grammar.htm#command_keyword)

:::

## 其它

### 按需编译

火山编译器实行的是按需编译模式,也就是说,凡是不可能被执行到的代码,一概不进行编译. 具体为:

> 从程序的启动位置开始,所有未在程序执行流程中的代码都将不会被编译.

以火山安卓开发平台举例,譬如下图:

![img](https://img-1251985644.file.myqcloud.com/images/20210211100213.png)

### **扩展流程控制**

除了命令关键字外,火山平台的核心类库中封装了一些自定义流程控制全局方法.

火山视窗平台的例程解决方案("samples\vprj_win\samples.vsln")中提供了一个名为"**自定义流程控制**"的样例项目用作列举它们的使用方法,可以打开查看.相关图示如下:

![img](https://img-1251985644.file.myqcloud.com/images/20210211100232.png)

![img](https://img-1251985644.file.myqcloud.com/images/20210211100239.png)

### **异常管理**

同样,异常管理火山平台也没有提供对应的关键字,而改用系统类封装解决,以下为火山视窗类库中的相关封装类:

![img](https://img-1251985644.file.myqcloud.com/images/20210211100255.png)

### **常用开发环境操作方法**

1. **编辑新建方法子语句体:**

   按照下图中的说明即可进入编辑所指定新建方法的子语句体:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100316.png)

2. 使用 "**`Ctrl`+`[`**" 和 "**`Ctrl`+`]`**" 组合快捷键可以将当前光标所处语句或者所选中语句块左移或右移,以改变其当前缩进层次,从而改变其所处语句块:

   如图,假设不小心将局部变量设置在了方法的外面,可以使用 "**`Ctrl`+`]`**" 组合快捷键将其调整进去:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100334.png)

   选中所欲调整层次的语句行,再按下 "**`Ctrl`+`]`**" 组合快捷键将其调整进去:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100428.png)

   同样,类似以下的程序,我想把被选中的部分移动到外层语句块中:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100441.png)

   选中所欲调整层次的语句行,再按下 "**`Ctrl`+`[`**" 组合快捷键将其调整过去:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100459.png)

3. 另外几个使用得比较多的快捷键为"**`Insert`**"和"**`Shift`+`Insert`**",用作向前/向后插入行.其中,在方法的参数/常量/变量定义表格上按下"**`Shift`+`Insert`**"快捷键,将固定在其下方插入一条空白语句行,如图:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100550.png)
   
   在"局部变量1"的定义行上按下"**`Shift`+`Insert`**"快捷键后的结果:
   
   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100611.png)
   
4. 开发过程中充分利用"**即时帮助(F1)**和"**程序结构查看器(Shift+F1)**"可以获得所有系统类和用户程序类的详细使用帮助信息:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100636.png)

5. 在开发环境左侧的"**类库**"夹中展开当前项目类型,可以获得该类型项目当前可用的所有系统类库模块信息:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100647.png)

   注意对应模块如果欲使用,需要首先在程序中将其配置进去:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100658.png)

   然后选中对应的模块确认即可:

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100707.png)

6. 查找某名称所处的模块

   用户如果在编译项目时遇到"**名称未找到**"错误，有可能是因为其所处模块没有被加入到项目中，可以通过如下操作来查找(以火山视窗平台举例)：

   1. 在编辑器内该名称文本上单击右键，选择"**在类库中查找**"菜单项：

      ![img](https://img-1251985644.file.myqcloud.com/images/20210211100743.png)

   2. 找到后在其帮助页顶部操作栏上点击"**添加模块到项目**"链接 即可将该名称所处模块添加到当前项目：

      ![img](https://img-1251985644.file.myqcloud.com/images/20210211100759.png)

7. 在帮助页面中点击“**例程**”链接（如上图黄色箭头）可以搜寻并打开包括所指定名称的例程，这对于了解该名称的使用方法很有好处：

   ![img](https://img-1251985644.file.myqcloud.com/images/20210211100810.png)