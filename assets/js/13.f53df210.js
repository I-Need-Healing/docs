(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{202:function(v,_,l){"use strict";l.r(_);var i=l(0),t=Object(i.a)({},function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h1",{attrs:{id:"常见功能"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常见功能","aria-hidden":"true"}},[v._v("#")]),v._v(" 常见功能")]),v._v(" "),l("h2",{attrs:{id:"倒计时"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#倒计时","aria-hidden":"true"}},[v._v("#")]),v._v(" 倒计时")]),v._v(" "),l("p",[v._v("倒计时有两种方式，一种是使用“追踪变量”，另一种则是手动等待。一般情况下，推荐使用前者。如果有特殊需要，则使用后者。下面的例子中，均使用变量A作为倒计时，假设倒计时为30秒。")]),v._v(" "),l("p",[v._v("方式一：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("事件：持续 - 全局")])]),v._v(" "),l("li",[l("p",[v._v("动作：")]),v._v(" "),l("ul",[l("li",[v._v("设置全局变量(A, 30)")]),v._v(" "),l("li",[v._v("追踪全局变量频率(A, 0, 1, 无)")])])]),v._v(" "),l("li",[l("p",[v._v("事件：持续 - 全局")])]),v._v(" "),l("li",[l("p",[v._v("条件：全局变量(A) == 0")])]),v._v(" "),l("li",[l("p",[v._v("动作：// 倒计时结束的动作")])])]),v._v(" "),l("p",[v._v("方式二（你可以在循环前的任意位置做一些别的事）：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("事件：持续 - 全局")])]),v._v(" "),l("li",[l("p",[v._v("动作：设置全局变量(A, 30)")])]),v._v(" "),l("li",[l("p",[v._v("事件：持续 - 全局")])]),v._v(" "),l("li",[l("p",[v._v("条件：全局变量(A) > 0")])]),v._v(" "),l("li",[l("p",[v._v("动作：")]),v._v(" "),l("ul",[l("li",[v._v("等待(1.000, 无视条件)")]),v._v(" "),l("li",[v._v("修改全局变量(A, 减, 1)")]),v._v(" "),l("li",[v._v('如条件为"真"则循环')]),v._v(" "),l("li",[v._v("// 倒计时结束的动作")])])])]),v._v(" "),l("p",[v._v("如果是针对每个玩家单独计时，则将相应的事件和变量修改即可，例如：")]),v._v(" "),l("ul",[l("li",[l("p",[v._v("事件：持续 - 每名玩家")])]),v._v(" "),l("li",[l("p",[v._v("动作：")]),v._v(" "),l("ul",[l("li",[v._v("设置玩家变量(事件玩家, A, 30)")]),v._v(" "),l("li",[v._v("追踪玩家变量频率(事件玩家, A, 0, 1, 无)")])])]),v._v(" "),l("li",[l("p",[v._v("事件：持续 - 每名玩家")])]),v._v(" "),l("li",[l("p",[v._v("条件：玩家变量(事件玩家, A) == 0")])]),v._v(" "),l("li",[l("p",[v._v("动作：// 倒计时结束的动作")])])]),v._v(" "),l("h2",{attrs:{id:"创建特效，稍后删除"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建特效，稍后删除","aria-hidden":"true"}},[v._v("#")]),v._v(" 创建特效，稍后删除")]),v._v(" "),l("p",[v._v("特效如果创建而不删除，会导致实体数量超过上限，从而影响到正常的规则功能。本例中，我们让“天使”使用终极技能时，会有伴随着的小星星。当技能使用结束时，则删除这些小星星。")]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 每名玩家 天使")]),v._v(" "),l("li",[v._v("条件：正在使用终极技能(事件玩家) == 真")]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("设置玩家变量(事件玩家, A, 空数组)")]),v._v(" "),l("li",[v._v("创建效果(所有玩家(所有队伍), 火花, 蓝色, 事件玩家, 1.500, 可见，位置和半径)")]),v._v(" "),l("li",[v._v("修改玩家变量(事件玩家, A, 添加至数组, 最后创建的实体)")]),v._v(" "),l("li",[v._v("创建效果(所有玩家(所有队伍), 火花, 红色, 事件玩家, 1.500, 可见，位置和半径)")]),v._v(" "),l("li",[v._v("修改玩家变量(事件玩家, A, 添加至数组, 最后创建的实体)")]),v._v(" "),l("li",[v._v("创建效果(所有玩家(所有队伍), 火花, 黄色, 事件玩家, 1.500, 可见，位置和半径)")]),v._v(" "),l("li",[v._v("修改玩家变量(事件玩家, A, 添加至数组, 最后创建的实体)")])])])]),v._v(" "),l("p",[v._v("删除小星星：")]),v._v(" "),l("ul",[l("li",[v._v("事件：持续 - 每名玩家 天使")]),v._v(" "),l("li",[v._v("条件：\n"),l("ul",[l("li",[v._v("正在使用终极技能(事件玩家) == 假")]),v._v(" "),l("li",[v._v("玩家变量(事件玩家, A) != 空数组")])])]),v._v(" "),l("li",[v._v("动作：\n"),l("ul",[l("li",[v._v("消除效果(数组中的值(玩家变量(事件玩家, A), 0))")]),v._v(" "),l("li",[v._v("消除效果(数组中的值(玩家变量(事件玩家, A), 1))")]),v._v(" "),l("li",[v._v("消除效果(数组中的值(玩家变量(事件玩家, A), 2))")]),v._v(" "),l("li",[v._v("设置玩家变量(事件玩家, A, 空数组)")])])])]),v._v(" "),l("p",[v._v("本例中创建了三个颜色不同的效果，如果你只有一个效果，则可以不使用数组，更加简单。")])])},[],!1,null,null,null);_.default=t.exports}}]);