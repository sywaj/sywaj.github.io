// 图标的相对路径
let logoPath = "./image/共用图片/蜡笔小新.png"

let types = [
    {
        id : "often",
        data : often,
        describe : "常用网站"
    },
    {
        id : "software",
        data : software,
        describe : "常用软件官方网站"
    },
    {
        id:"resources",
        data: resources,
        describe:"常用资源网站"
    },
    {
        id:"videoAndaudio",
        data:videoAndaudio,
        describe:"视频与音频网站"
    },
    {
        id : "tool",
        data : tool,
        describe : "常用工具网站"
    },
    {
        id : "book",
        data : book,
        describe : "常用书籍搜索网站"
    },
    {
        id : "computerve",
        data : computer,
        describe : "常用计算机网站"
    },
    {
        id : "other",
        data : other,
        describe : "其他网站"
    },
    {
        id : "bioinfo",
        data : bioinfo,
        describe : "生物信息类网站"
    },
    {
        id : "dead",
        data : dead,
        describe : "已经无法访问的网站"
    },
];

let sort = ["一" , "二" , "三" , "四" , "五" , "六" , "七" , "八" , "九" , "十"];

/*
<span class='link_cell'>
    <a href="${url}" class='link' target='_blank' >
        <button class='my_btn'>
            ${name} 
        </button>
    </a>
</span> 
*/
/**
 * 链接的HTML代码类
 * url:http链接
 * name:名字
 * id:id号
 * fullname:全名
 * logo:图标文件的路径
 * tip:网页的提示（作用，描述等）
 */
class Link{
    //属性
    html = document.createElement('span')
    //构造方法
    constructor(url,name,id,fullname,logo,tip){
        this.html.classList.add('link_cell')
        let a = document.createElement('a')
        a.href = url
        a.classList.add('link')
        a.target = '_blank'
        let button = document.createElement('button')
        button.classList.add('my_btn')
        button.innerHTML = name
        a.appendChild(button)
        this.html.appendChild(a)
        this.html.oncontextmenu = () => {
            //右击后不要显示浏览器菜单
            window.event.returnValue = false
            //阻止父类也触发该动作
            window.event.stopPropagation()

            //将简介显示的内容显示出来
            document.getElementById('infoBox').innerHTML = getInfo(url,fullname,logo,tip)
            // 打开链接的按钮
            document.getElementById('copyLink').onclick = ()=>{
                let url = document.querySelectorAll('#url span')[1].innerHTML
                window.open(url)
            }
            //关闭简介的按钮
            document.getElementById('iGotIt').onclick = () => {
                document.getElementById('infoBox').innerHTML = ""
            }
        }
        return this.html
    }
}
/*
<p class="p_divide">
    <a class="a_divide" data-bs-toggle="collapse" href="#${id}" role="button" aria-expanded="false" aria-controls="collapseExample">
        ${sort[i] + " " + type}
    </a>
</p>
<div class="collapse" id="${id}" >
    <div class="my_card">
        ${s}
    </div>
</div>
*/
/**
 * 大分类的HTML代码类
 * id:大分类的id
 * name:大分类的 序号+名字 字符串
 * links:该分类下的链接的html代码
 */
class Class{
    html = document.createElement('span')
    constructor(id,name,links){
        let p = document.createElement('p')
        p.classList.add('p_divide')
        let a = document.createElement('a')
        a.setAttribute('class','a_divide')
        a.setAttribute('data-bs-toggle','collapse')
        a.setAttribute('href','#' + id)
        a.setAttribute('role','button')
        a.setAttribute('aria-expanded','false')
        a.setAttribute('aria-controls','collapseExample')
        a.innerHTML = name
        p.appendChild(a)
        let div1 = document.createElement('div')
        div1.classList.add('collapse')
        div1.id = id
        let div2 = document.createElement('div')
        div2.classList.add('my_card')
        for(let i=0;i<links.length;i++){
            div2.appendChild(links[i])
        }
        div1.appendChild(div2)
        this.html.appendChild(p)
        this.html.appendChild(div1)
        return this.html
    }
}

let content = document.getElementById("content")
// 统计信息
let total = 0;
console.log("统计信息：")
let nums = ['01','02','03','04','05','06','07','08','09','10']
for(let i = 0;i < types.length;i++){
    let id = types[i].id;//每个大类的id，如：often、software
    let clazz = types[i].describe;//每个大类的描述
    let item = types[i].data;//获取链接数据
    let tempLinks = []  //每个分类的对象数组
    total += item.length
    console.log(clazz + "：" + item.length)
    for(let j = 0;j < item.length;j++){
        let url = item[j].url; //具体链接的url，如：https://www.baidu.com
        let name = item[j].name; //链接的名字，如：百度
        let fullname = item[j].fullname //链接全名，如：百度
        let logo = item[j].logo //图标的文件名
        let tip = item[j].tip //链接的简介
        let temp = new Link(url,name,"",fullname,`./image/logo/${nums[i]}${clazz}/${logo}`,tip) //创建一个链接的html代码对象
        tempLinks.push(temp)
    }
    //将每个大类的html代码追加到最后
    content.appendChild(new Class(id,sort[i] + " " + clazz,tempLinks))
}
console.log("总链接数：" + total)

/** 获取显示简介的HTML代码 */
function getInfo(url,fullname,logo,tip){
    return `<div class="bgc">
                <div id="showInfo">
                    <div id="headline">
                        <img class="logo" src="${logo}" alt="${fullname}"/> 
                    </div>
                    <div id="infoBody">
                        <div class="ofHide hide">
                            <div id="fullname"><span class="item">全名：</span><span>${fullname}</span></div>
                        </div>
                        <div class="ofHide hide">
                            <div id="url"><span class="item">URL：</span><span>${url}</span></div>
                        </div>
                        <div class="ofHide">
                            <div id="briefTip"><span class="item">简介：</span><span>${tip}</span></div>
                        </div>
                    </div>
                    <div id="bottomBtn">
                        <span class="infoBtn" id="copyLink" href="#">打开网页</span>
                        <span class="infoBtn" id="iGotIt" href="#">我知道了</span>
                    </div>
                </div>
            </div>`
}


// 搜索引擎
let s_link = 'bd'
let s_list = {
    bd : {name:'百度搜索', url:'http://www.baidu.com', s:'/s?ie=UTF-8&wd='},
    sg : {name:'搜狗搜索', url:'https://www.sogou.com', s:'/web?ie=utf8&query='},
    sll : {name:'360 搜索', url:'https://www.so.com', s:'/s?ie=utf8&q='},
}
//搜索按钮，搜索框
document.getElementById("s_btn").onclick = function(){
    let wd = document.getElementById("wd").value
    if (wd == ""){
        open(s_list[s_link].url)
    }else{
        open(s_list[s_link].url + s_list[s_link].s + wd)
    }
}
//搜索引擎按钮
function search_btn( btn_word ){
    document.getElementById('search_list').value = s_list[btn_word].name;
    s_link = btn_word;
}