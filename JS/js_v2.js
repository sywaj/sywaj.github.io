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
];

let sort = ["一" , "二" , "三" , "四" , "五" , "六" , "七" , "八" , "九" , "十"];


let str = "";
for(let i = 0;i < types.length;i++){
    let id = types[i].id;
    let type = types[i].describe;
    let s = "";
    let item = types[i].data;//获取链接数据
    for(let j = 0;j < item.length;j++){
        let url = item[j].url;
        let name = item[j].name;
        s += `<span class='link_cell'>
                <a href="${url}" class='link' target='_blank' >
                    <button class='my_btn'>
                        ${name}
                    </button>
                </a>
             </span>`;
    }
    str += `<p class="p_divide">
                <a class="a_divide" data-bs-toggle="collapse" href="#${id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                    ${sort[i] + " " + type}
                </a>
            </p>
            <div class="collapse" id="${id}" >
                <div class="my_card">
                    ${s}
                </div>
            </div>`
}

document.getElementById("content").innerHTML = str;

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