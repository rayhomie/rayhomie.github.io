(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{407:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、git命令行操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、git命令行操作"}},[t._v("#")]),t._v(" 一、Git命令行操作")]),t._v(" "),s("h5",{attrs:{id:"①本地操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#①本地操作"}},[t._v("#")]),t._v(" ①本地操作")]),t._v(" "),s("h6",{attrs:{id:"_1、本地库初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、本地库初始化"}},[t._v("#")]),t._v(" 1、本地库初始化")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#初始化本地库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注意：.git目录中存放的是本地库相关的子目录和文件，不要删除也不要修改。")]),t._v("\n")])])]),s("h6",{attrs:{id:"_2、设置签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、设置签名"}},[t._v("#")]),t._v(" 2、设置签名")]),t._v(" "),s("p",[t._v("形式：用户名：xxx\t\tEmail地址：xxx@xxx.com")]),t._v(" "),s("p",[t._v("作用：区分不同开发人员的身份，这里的用户名和email地址与远端库的账号密码没有任何关系")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name xxx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email xxx@xxx.com\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#信息保存位置：./.git/config文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##项目级别/仓库级别：仅在当前本地库范围内有效")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name xxx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email xxx@xxx.com\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#信息保存位置：当前系统家目录/.gitconfig文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##系统用户级别：登陆当前操作系统的用户范围")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#优先级就近原则：项目级别优先于系统用户级别")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#必须要有两者之一的级别签名，否则不允许")]),t._v("\n")])])]),s("h6",{attrs:{id:"_3、添加"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加"}},[t._v("#")]),t._v(" 3、添加")]),t._v(" "),s("p",[t._v("将工作区的“新建/修改”添加到暂存区")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 文件名.后缀名\n")])])]),s("h6",{attrs:{id:"_4、查看状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、查看状态"}},[t._v("#")]),t._v(" 4、查看状态")]),t._v(" "),s("p",[t._v("查看工作区、暂存区的状态")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#绿色是已被add到暂存区，可以继续执行commit，也可以把它从暂存区移除")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#红色是没有add到暂存区")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###如果是已被commit的文件，然后被修改了，会自动检测到被修改此时也是查看状态红色，需要重新add再commit的操作（或者是直接\"git commit -a\"）。其中add再commit分步的操作中，执行add之后，还可以执行'git reset HEAD 文件名.后缀名'来撤回add操作。")]),t._v("\n")])])]),s("h6",{attrs:{id:"_5、提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、提交"}},[t._v("#")]),t._v(" 5、提交")]),t._v(" "),s("p",[t._v("将暂存区的内容提交到本地库")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注释信息"')]),t._v(" 文件名.后缀名\n")])])]),s("h6",{attrs:{id:"_6、从暂存区移除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、从暂存区移除"}},[t._v("#")]),t._v(" 6、从暂存区移除")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" --cached 文件名.后缀名\n")])])]),s("h6",{attrs:{id:"_7、日志查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、日志查看"}},[t._v("#")]),t._v(" 7、日志查看")]),t._v(" "),s("p",[t._v("多屏显示控制方式：空格向下翻页，按b向上翻页，按q退出")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#每个记录全部信息显示")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#每条记录显示一行且完整哈希值显示")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --oneline\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#每条记录显示一行且七位哈希值显示（只显示当前版本以前的版本）")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#显示了HEAD版本指针需要移动的次数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\tHEAD@{移动到当前版本需要的步数}")]),t._v("\n")])])]),s("h6",{attrs:{id:"_8、版本前进后退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、版本前进后退"}},[t._v("#")]),t._v(" 8、版本前进后退")]),t._v(" "),s("p",[t._v("reset命令的三个参数对比")]),t._v(" "),s("p",[t._v("--soft：仅仅在本地库移动HEAD指针")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("暂存区")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("工作区")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("本地库")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("p",[t._v("此时只有本地库后退版本，暂存区与工作区相对没有变，所以git status的话会显示绿色")]),t._v(" "),s("p",[t._v("--mixed：在本地库移动HEAD指针，重置暂存区")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("工作区")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("本地库")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("暂存区")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),s("p",[t._v("此时，本地库和暂存区后退版本，暂存区和工作区有差异，相当于是工作区被修改，所以git status的话会显示红色")]),t._v(" "),s("p",[t._v("--hard：在本地库移动HEAD指针，重置暂存区，重置工作区")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}}),t._v(" "),s("th",{staticStyle:{"text-align":"center"}})])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("本地库")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("暂存区")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("工作区")])])])]),t._v(" "),s("ul",[s("li",[t._v("[x] 基于索引值操作[推荐]")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard 索引哈希值的一部分\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#例如：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#git reset --hard a6ace91")]),t._v("\n")])])]),s("ul",[s("li",[t._v("[x] 使用^符号：只能后退")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注：一个^符号表示后退一步，n个^符号表示后退n步")]),t._v("\n")])])]),s("ul",[s("li",[t._v("[x] 使用~符号：只能后退")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD~n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#注：表示后退n步")]),t._v("\n")])])]),s("h6",{attrs:{id:"_9、删除文件并找回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、删除文件并找回"}},[t._v("#")]),t._v(" 9、删除文件并找回")]),t._v(" "),s("p",[t._v("前提：删除时，文件存在时的状态提交到了本地库")]),t._v(" "),s("p",[t._v("操作：git reset --hard [指针位置]")]),t._v(" "),s("ul",[s("li",[t._v("删除操作已经提交到本地库：指针位置指向历史记录")]),t._v(" "),s("li",[t._v("删除操作尚未提交到本地库：指针位置使用HEAD")])]),t._v(" "),s("h6",{attrs:{id:"_10、比较文件差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、比较文件差异"}},[t._v("#")]),t._v(" 10、比较文件差异")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将工作区中的文件和暂存区进行比较")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地库中历史版本"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("文件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将工作区中的文件和本地库历史记录比较")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#不带文件名比较工作区中的所有文件")]),t._v("\n")])])]),s("h5",{attrs:{id:"②远程库操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#②远程库操作"}},[t._v("#")]),t._v(" ②远程库操作")]),t._v(" "),s("h6",{attrs:{id:"_1、创建本地库使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建本地库使用"}},[t._v("#")]),t._v(" 1、创建本地库使用")]),t._v(" "),s("p",[t._v("使用git init初始化")]),t._v(" "),s("h6",{attrs:{id:"_2、创建远程库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建远程库"}},[t._v("#")]),t._v(" 2、创建远程库")]),t._v(" "),s("p",[t._v("github上面新建远程仓库")]),t._v(" "),s("h6",{attrs:{id:"_3、在本地创建远程库地址别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、在本地创建远程库地址别名"}},[t._v("#")]),t._v(" 3、在本地创建远程库地址别名")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 别名 github上的https下载地址\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在git本地保存一个以后的要使用的远程仓库地址，并且取一个别名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看保存的远程地址")]),t._v("\n")])])]),s("h6",{attrs:{id:"_4、推送操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、推送操作"}},[t._v("#")]),t._v(" 4、推送操作")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push 别名 分支名\n")])])]),s("h6",{attrs:{id:"_5、克隆操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、克隆操作"}},[t._v("#")]),t._v(" 5、克隆操作")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone github上的https下载地址\n")])])]),s("ul",[s("li",[t._v("完整的把远程库下载到本地")]),t._v(" "),s("li",[t._v("创建好之前起好的远程地址别名")]),t._v(" "),s("li",[t._v("初始化本地库")])]),t._v(" "),s("h6",{attrs:{id:"_6、邀请加入团队"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、邀请加入团队"}},[t._v("#")]),t._v(" 6、邀请加入团队")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在github仓库界面，点Settings，再点Collaborators，然后输入需要邀请的用户的github账号。")])]),t._v(" "),s("li",[s("p",[t._v("在被邀请用户中接受邮件，点击相应链接，然后完成邀请。")])]),t._v(" "),s("li",[s("p",[t._v("最后被邀请用户就可以通过git push对仓库进行推送操作了。")])])]),t._v(" "),s("h6",{attrs:{id:"_7、远程库修改的两种拉取方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、远程库修改的两种拉取方式"}},[t._v("#")]),t._v(" 7、远程库修改的两种拉取方式")]),t._v(" "),s("ul",[s("li",[t._v("是fetch和merge操作的合并，所以fetch+merge=pull")])]),t._v(" "),s("p",[t._v("方式一：用fetch和merge操作")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.抓取远程仓库修改的数据到本地分支上（读操作不需要密码），使用过后本地文件并没有变（抓取到本地的<远程地址别名/分支名>上）需要被合并到本地开发分支上")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程地址别名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2. 切换分支到远程仓库的分支上，可以查看刚才拉取的数据，可进行相应的检查修改之类的操作")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程地址别名/分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3.再切换到本地分支上")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4.将远程分支合并到本地分支上，即本地文件就有了拉取的内容了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程地址别名/分支名"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("方式二：直接使用pull一步到位")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull 远程地址别名 分支名\n")])])]),s("h6",{attrs:{id:"_8、团队协作开发时冲突的解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、团队协作开发时冲突的解决"}},[t._v("#")]),t._v(" 8、团队协作开发时冲突的解决")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push 远程地址别名 分支名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果远程仓库文件内容和本地文件内容有冲突，执行push之后会报错，需要pull一下")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull 远程地址别名 分支名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#pull之后进入MERGING（合并中）的状态,进入文件中出现了冲突的表现，需要把特殊符号删除修改之后再进行合并")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" HEAD\nxxxxxxxx   edit by a\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nxxxxxxxx   edit by b\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" e85bff69c91a3ba196cb37315e57020d9fd27aec\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#然后就和本地分支冲突解决一致")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" 文件名\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注释信息"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#（注意：不需要加文件名！！）")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#再重新push到远程仓库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push 远程地址别名 分支名\n")])])]),s("h6",{attrs:{id:"_9、跨团队协作fork操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、跨团队协作fork操作"}},[t._v("#")]),t._v(" 9、跨团队协作fork操作")]),t._v(" "),s("p",[t._v("帮助的人在被帮助人的github上点击fork，然后再帮助人的仓库中有了项目")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.帮助的人把自己仓库的项目克隆到本地")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone github上fork后的的https下载地址\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2.本地修改并提交到本地库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"注释信息"')]),t._v(" 文件名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3.推送到帮助的人的远程仓库中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push 帮助人的远程地址别名 分支名\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4.帮助人点击pull request，在点new pull request，再点create pull request、")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#5.被帮助人再点击pull request，然后审核代码，最后Merge pull request合并代码。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#6.被帮助的人将远程库修改拉取到本地")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull 被帮助人的远程地址别名 分支名\n")])])]),s("h6",{attrs:{id:"_10、通过ssh免密登陆克隆到本地"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10、通过ssh免密登陆克隆到本地"}},[t._v("#")]),t._v(" 10、通过ssh免密登陆克隆到本地")]),t._v(" "),s("p",[t._v("一、本地新建一个文件夹")]),t._v(" "),s("p",[t._v("二、添加新的shh密钥")]),t._v(" "),s("p",[t._v("​\t\t①"),s("a",{attrs:{href:"https://help.github.com/en/articles/checking-for-existing-ssh-keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("Checked for existing SSH keys"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("​\t\t②"),s("a",{attrs:{href:"https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generated a new SSH key and added it to the ssh-agent"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在本地新建文件夹下打开Git Bash。")])]),t._v(" "),s("li",[s("p",[t._v("粘贴以下文本，替换为您的GitHub电子邮件地址。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ ssh-keygen -t rsa -b "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v(" -C "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"your_email@example.com"')]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("将SSH私钥添加到ssh-agent。如果您使用其他名称创建密钥，或者要添加具有其他名称的现有密钥，请使用私有密钥文件的名称替换命令中的"),s("em",[t._v("id_rsa")]),t._v("。")])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ ssh-add ~/.ssh/id_rsa\n")])])]),s("p",[t._v("​\t\t③"),s("a",{attrs:{href:"https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account",target:"_blank",rel:"noopener noreferrer"}},[t._v("Add the SSH key to your GitHub account"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("将SSH密钥复制到剪贴板。")]),t._v(" "),s("p",[t._v("如果SSH密钥文件的名称与示例代码的名称不同，请修改文件名以匹配当前设置。复制密钥时，请勿添加任何换行符或空格。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ clip "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" ~/.ssh/id_rsa.pub\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Copies the contents of the id_rsa.pub file to your clipboard")]),t._v("\n")])])]),s("p",[t._v("**提示：**如果"),s("code",[t._v("clip")]),t._v("不起作用，则可以找到隐藏的"),s("code",[t._v(".ssh")]),t._v("文件夹，在您喜欢的文本编辑器中打开文件，然后将其复制到剪贴板。")])]),t._v(" "),s("li",[s("p",[t._v("在任何页面的右上角，点击您的个人资料照片，然后点击"),s("strong",[t._v("设置")]),t._v("。（In the upper-right corner of any page, click your profile photo, then click "),s("strong",[t._v("Settings")]),t._v(".）")])]),t._v(" "),s("li",[s("p",[t._v("在用户设置边栏中，点击"),s("strong",[t._v("SSH和GPG密钥")]),t._v("。（In the user settings sidebar, click "),s("strong",[t._v("SSH and GPG keys")]),t._v(".）")])]),t._v(" "),s("li",[s("p",[t._v("单击“ **新建SSH密钥”**或“ "),s("strong",[t._v("添加SSH密钥”")]),t._v("。（Click "),s("strong",[t._v("New SSH key")]),t._v(" or "),s("strong",[t._v("Add SSH key")]),t._v(".）")])]),t._v(" "),s("li",[s("p",[t._v('在“标题”字段中，为新密钥添加一个描述性标签。例如，如果您使用的是个人Mac，则可以将此键称为“个人MacBook Air”。（In the "Title" field, add a descriptive label for the new key. For example, if you\'re using a personal Mac, you might call this key "Personal MacBook Air".）')])]),t._v(" "),s("li",[s("p",[t._v('将您的密钥粘贴到“密钥”字段中。（Paste your key into the "Key" field.）')])]),t._v(" "),s("li",[s("p",[t._v("单击"),s("strong",[t._v("添加SSH密钥")]),t._v("。（Click "),s("strong",[t._v("Add SSH key")]),t._v(".）")])])]),t._v(" "),s("p",[t._v("三、在github项目页面上拷贝ssh的链接")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git@github.com:rayhomie/webproject.git\n")])])]),s("p",[t._v("四、在本地新建文件夹中使用cmd命令行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git clone git@github.com:rayhomie/webproject.git\n")])])]),s("h2",{attrs:{id:"二、git分支管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、git分支管理"}},[t._v("#")]),t._v(" 二、Git分支管理")]),t._v(" "),s("h5",{attrs:{id:"①什么是分支管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#①什么是分支管理"}},[t._v("#")]),t._v(" ①什么是分支管理")]),t._v(" "),s("p",[t._v("在版本控制过程中，使用多条线同时进行推进多个任务。")]),t._v(" "),s("h5",{attrs:{id:"②分支管理的好处"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#②分支管理的好处"}},[t._v("#")]),t._v(" ②分支管理的好处")]),t._v(" "),s("h6",{attrs:{id:"_1、同时推进多个功能的开发，提高开发效率。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、同时推进多个功能的开发，提高开发效率。"}},[t._v("#")]),t._v(" 1、同时推进多个功能的开发，提高开发效率。")]),t._v(" "),s("h6",{attrs:{id:"_2、各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。彼此互相独立。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。彼此互相独立。"}},[t._v("#")]),t._v(" 2、各个分支在开发过程中，如果某一个分支开发失败，不会对其他分支有任何影响。失败的分支删除重新开始即可。彼此互相独立。")]),t._v(" "),s("h5",{attrs:{id:"③分支命令操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#③分支命令操作"}},[t._v("#")]),t._v(" ③分支命令操作")]),t._v(" "),s("h6",{attrs:{id:"_1、创建分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建分支"}},[t._v("#")]),t._v(" 1、创建分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch 分支名\n")])])]),s("h6",{attrs:{id:"_2、查看分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看分支"}},[t._v("#")]),t._v(" 2、查看分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -v\n")])])]),s("h6",{attrs:{id:"_3、切换分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、切换分支"}},[t._v("#")]),t._v(" 3、切换分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 分支名\n")])])]),s("h6",{attrs:{id:"_4、合并分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、合并分支"}},[t._v("#")]),t._v(" 4、合并分支")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#步骤一：切换到需要被修改的分支（被合并的，可以理解为主线）上")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 分支名1\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#步骤二：执行merge命令")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge 分支名2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#总结：此时就是'分支2'的内容合并到了'分支1'上面")]),t._v("\n")])])]),s("h6",{attrs:{id:"_5、解决冲突"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、解决冲突"}},[t._v("#")]),t._v(" 5、解决冲突")]),t._v(" "),s("p",[t._v("冲突的表现：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" HEAD\nhhhhhhhhhh edit by hot_fix\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#当前分支内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\nhhhhhhhhhh edit by master\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#另一分支内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" master\n")])])]),s("p",[t._v("冲突的解决：")]),t._v(" "),s("ul",[s("li",[t._v("第一步：编辑文件，删除特殊符号")]),t._v(" "),s("li",[t._v("第二步：把文件修改到满意为止，保存退出")]),t._v(" "),s("li",[t._v("第三步：git add 文件名")]),t._v(" "),s("li",[t._v('第四步：git commit -m "注释信息"（注：此时commit后面一定不能带具体文件名）')])]),t._v(" "),s("h5",{attrs:{id:"④git-rebase-变基"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#④git-rebase-变基"}},[t._v("#")]),t._v(" ④"),s("a",{attrs:{href:"https://www.cnblogs.com/pinefantasy/articles/6287147.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git rebase 变基"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200901123249834.JPG?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTIyMTAzNg==,size_16,color_FFFFFF,t_70#pic_center",alt:"在这里插入图片描述"}})]),t._v(" "),s("p",[t._v("git rebase 的两个用途：")]),t._v(" "),s("ul",[s("li",[t._v("git合并代码方式主要有两种方式，分别为：\n"),s("ul",[s("li",[t._v("merge处理合并代码，这是大家比较能理解的方式。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/pinefantasy/articles/6287147.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("rebase处理"),s("OutboundLink")],1),t._v("合并代码，中文此处翻译为衍合过程。")])])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/4a8f4af4e803",target:"_blank",rel:"noopener noreferrer"}},[t._v("合并多次commit"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("startpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("endpoint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("其中"),s("code",[t._v("-i")]),t._v("的意思是"),s("code",[t._v("--interactive")]),t._v("，即弹出交互式的界面让用户编辑完成合并操作，"),s("code",[t._v("[startpoint]")]),t._v(" "),s("code",[t._v("[endpoint]")]),t._v("则指定了一个编辑区间，如果不指定"),s("code",[t._v("[endpoint]")]),t._v("，则该区间的终点默认是当前分支"),s("code",[t._v("HEAD")]),t._v("所指向的"),s("code",[t._v("commit")]),t._v("(注：该区间指定的是一个前开后闭的区间)。")]),t._v(" "),s("p",[t._v("在查看到了log日志后，我们运行以下命令：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看提交日志")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i 36224db "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并 HEAD 到 36224db 之间的提交")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or或者")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~3 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并 HEAD前三次 所有的提交")]),t._v("\n")])])]),s("ul",[s("li",[t._v("pick：保留该commit（缩写:p）")]),t._v(" "),s("li",[t._v("reword：保留该commit，但我需要修改该commit的注释（缩写:r）")]),t._v(" "),s("li",[t._v("edit：保留该commit, 但我要停下来修改该提交(不仅仅修改注释)（缩写:e）")]),t._v(" "),s("li",[t._v("squash：将该commit和前一个commit合并（缩写:s）")]),t._v(" "),s("li",[t._v("fixup：将该commit和前一个commit合并，但我不要保留该提交的注释信息（缩写:f）")]),t._v(" "),s("li",[t._v("exec：执行shell命令（缩写:x）")]),t._v(" "),s("li",[t._v("drop：我要丢弃该commit（缩写:d）")])]),t._v(" "),s("p",[t._v("按照上面的命令根据我们的需求，我们修改vim编辑器上面没有注释的部分，即可。")]),t._v(" "),s("h5",{attrs:{id:"⑤git-revert-反做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⑤git-revert-反做"}},[t._v("#")]),t._v(" ⑤git revert 反做")]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://blog.csdn.net/yxlshk/article/details/79944535",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git恢复之前版本的两种方法reset、revert（图文详解）"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("如果我们先要撤销提交操作的话，目前有两种方法"),s("strong",[t._v("回退（reset）")]),t._v("、"),s("strong",[t._v("反做（revert）")])]),t._v(" "),s("h6",{attrs:{id:"回退"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回退"}},[t._v("#")]),t._v(" 回退")]),t._v(" "),s("p",[t._v("回退是指退到过去的某个版本，现在版本到该版本之间的提交都将被放弃")]),t._v(" "),s("h6",{attrs:{id:"反做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反做"}},[t._v("#")]),t._v(" 反做")]),t._v(" "),s("p",[t._v("原理： git revert是用于“反做”某一个版本，以达到撤销该版本的修改的目的。比如，我们commit了三个版本（版本一、版本二、 版本三），突然发现版本二不行（如：有bug），想要撤销版本二，但又不想影响撤销版本三的提交，就可以用 git revert 命令来反做版本二，生成新的版本四，这个版本四里会保留版本三的东西，但撤销了版本二的东西。如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cDovL2ltZy5ibG9nLmNzZG4ubmV0LzIwMTgwNDE0MjA1ODE2MTg4",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("适用场景：")]),t._v(" 如果我们想撤销之前的某一版本，但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert -n 8b89621019c9adc6fc4d242cd41daeb13aeb9861\n")])])]),s("p",[t._v("反做之后会产生一个新的提交。")]),t._v(" "),s("h2",{attrs:{id:"三、git基本原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、git基本原理"}},[t._v("#")]),t._v(" 三、Git基本原理")]),t._v(" "),s("h5",{attrs:{id:"①哈希"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#①哈希"}},[t._v("#")]),t._v(" ①哈希")]),t._v(" "),s("p",[t._v("是一个系列的加密算法，各个不同的哈希算法虽然加密强度不同，但是有以下几个共同点:")]),t._v(" "),s("p",[t._v("①不管输入数据的数据量有多大，输入同-一个哈 希算法，得到的加密结果长度固定。")]),t._v(" "),s("p",[t._v("②哈希算法确定，输入数据确定，输出数据能够保证不变。")]),t._v(" "),s("p",[t._v("③哈希算法确定，输入数据有变化，输出数据一定有变化， 而且通常变化很大。")]),t._v(" "),s("p",[t._v("④哈希算法不可逆。")]),t._v(" "),s("p",[t._v("Git底层采用的是SHA-1算法。")]),t._v(" "),s("h5",{attrs:{id:"②git保存版本的机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#②git保存版本的机制"}},[t._v("#")]),t._v(" ②Git保存版本的机制")]),t._v(" "),s("p",[t._v("Git把数据看作是小型文件系统的一组快照。每次提交更新时Git都会对当前项目中的全部文件制作一个快照并保存这个快照的索引。为了高效，如果项目中的文件没有修改，git不再重新存储该文件，而是只保留一个链接指向之前储存的文件，只去创建当前改变了的文件的快照。所以git的工作方式可以称之为快照流。")]),t._v(" "),s("h5",{attrs:{id:"③git分支管理的本质是创建和移动指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#③git分支管理的本质是创建和移动指针"}},[t._v("#")]),t._v(" ③Git分支管理的本质是创建和移动指针")]),t._v(" "),s("p",[t._v("很大程度提高了开发效率")]),t._v(" "),s("p",[t._v("学习链接：https://www.bilibili.com/video/BV1pW411A7a5?p=1")])])}),[],!1,null,null,null);a.default=r.exports}}]);