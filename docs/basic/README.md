---
author: VoldPC
---

# 基础资料

## 关于火山软件开发平台

火山软件开发平台是`一种目的硬件设备无关、目的软件环境无关、易学易用实用、完全本地化`的软件快速开发平台。

火山平台采用独创的“`语言之上的语言`”（LOL）技术，成功屏蔽了火山程序对特定目标环境的依赖。用户只需要学习掌握火山程序语言，就可以针对各种目的环境进行软件开发。同时由于火山程序编译器所编译出来的是目标语言的源代码，因此能够最大限度地提升火山程序员与第三方的合作和资源共享效率， 以及所开发火山程序被社会的认可程度。

以下为火山软件开发平台的架构图：

<table border="1" style="border-collapse: collapse">
	<tbody><tr>
		<td colspan="6" align="center" height="40">火山平台用户源程序 </td>
	</tr>
	<tr>
		<td colspan="6" align="center" height="40">支持对应目标环境的火山类库</td>
	</tr>
	<tr>
		<td colspan="6" align="center" height="40">支持对应目标环境的火山编译器</td>
	</tr>
	<tr>
		<td align="center" width="15%" height="40">Assembly / C / C++ / C# ......</td>
		<td align="center" width="15%" height="40">Java</td>
		<td align="center" width="15%" height="40">Objective C / Swift</td>
		<td align="center" width="15%" height="40">HTML5 + JavaScript + CSS</td>
		<td align="center" width="15%" height="40">PHP</td>
		<td align="center" width="10%" rowspan="3" height="40">其它 .....</td>
	</tr>
	<tr>
		<td align="center" width="15%" height="40">本地语言编译器</td>
		<td align="center" width="15%" height="40">本地语言编译器</td>
		<td align="center" width="15%" height="40">本地语言编译器</td>
		<td align="center" width="15%" height="40">本地语言解释器</td>
		<td align="center" width="15%" height="40">本地语言解释器</td>
	</tr>
	<tr>
		<td align="center" width="15%" height="40">Windows桌面、Linux/Unix服务器端、嵌入式设备、单片机 ......</td>
		<td align="center" width="15%" height="40">安卓移动端、安卓嵌入式设备、服务器 ......</td>
		<td align="center" width="15%" height="40">ios应用</td>
		<td align="center" width="15%" height="40">网站前端展示、HTML5跨平台应用。</td>
		<td align="center" width="15%" height="40">WEB服务器端</td>
	</tr>
</tbody></table>
