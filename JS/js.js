
//常用软件
var software = [
    {
        linkStr:"http://baidu.com/",
        name:"百度"
    },
    {
        linkStr:"https://bilibili.com/",
        name:"哔哩哔哩"
    },
    {
        linkStr:"https://v.qq.com/",
        name:"腾讯视频"
    },
    {
        linkStr:"https://iqiyi.com/",
        name:"爱奇艺"
    },
    {
        linkStr:"http://pan.baidu.com/",
        name:"百度网盘"
    },
    {
        linkStr:"https://ximalaya.com/",
        name:"喜马拉雅"
    },
    {
        linkStr:"https://map.baidu.com/",
        name:"百度地图"
    },
    {
        linkStr:"http://www.wasu.cn/",
        name:"华数TV"
    },
    {
        linkStr:"https://weibo.com/",
        name:"微博"
    },
	{
        linkStr:"https://mail.qq.com/",
        name:"QQ邮箱"
    },
    {
        linkStr:"https://email.163.com/",
        name:"网易邮箱"
    },
    {
        linkStr:"https://y.qq.com/",
        name:"QQ音乐"
    },
    {
        linkStr:"https://www.kugou.com/",
        name:"酷狗音乐"
    },
    {
        linkStr:"https://music.163.com/",
        name:"网易云"
    },
    {
        linkStr:"https://fanyi.baidu.com",
        name:"百度翻译"
    },
    {
        linkStr:"https://youdao.com/",
        name:"有道"
    }
];

//常用工具
var tool = [
    {
        linkStr:"https://www.iconfont.cn/",
        name:"矢量图库"
    },
    {
        linkStr:"https://www.ilovepdf.com/zh-cn",
        name:"ilove PDF"
    },
    {
        linkStr:"https://convertio.co/zh/",
        name:"Convertio"
    },
    {
        linkStr:"http://www.ipaddress.com/",
        name:"IP查询"
    }
]

//书籍搜索
var book = [
    {
        linkStr:"https://ebook2.lorefree.com/",
        name:"lorefree"
    },
    {
        linkStr:"https://www.bandubook.com/",
        name:"伴读"
    },
    {
        linkStr:"http://www.jb51.net/",
        name:"脚本之家"
    },
    {
        linkStr:"http://www.xz577.com",
        name:"码农之家"
    },
    {
        linkStr:"http://www.toplinks.cc/",
        name:"淘链客"
    },
    {
        linkStr:"https://www.kindle8.cc/",
        name:"kindle 吧"
    }
]

var computer = [
    {
        linkStr:"https://github.com/",
        name:"GitHub"
    },
    {
        linkStr:"https://gitee.com/",
        name:"码云"
    },
    {
        linkStr:"http://getbootstrap.com/",
        name:"bootstrap"
    },
    {
        linkStr:"http://jquery.com",
        name:"jQuery"
    },
    {
        linkStr:"https://ico.z01.com/",
        name:"逐浪"
    },
    {
        linkStr:"https://www.crx4chrome.com/",
        name:"插件"
    }
]

content("software",software)
content("tool",tool)
content("book",book)
content("computer",computer)

// var softworeStr = ""
// var tool = ""
// var book = ""
// var computer = ""

function content(idStr,arr){
    var str = ""
    for(var i=0;i<arr.length;i++){
        str += "<span class='link_cell'>"+"<a href="+arr[i].linkStr+" class='link' target='_blank'>"+
            "<button class='btn'>"+arr[i].name+"</button></a></span>"
    }
    document.getElementById(idStr).innerHTML = str
}
