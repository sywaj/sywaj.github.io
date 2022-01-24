let types = [
    {
        id : "often",
        data : often,
        describe : "常用网站"
    },
    {
        id : "software",
        data : software,
        describe : "常用软件网站"
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
                <div class="computer my_card">
                    ${s}
                </div>
            </div>`
}

document.getElementById("content").innerHTML = str;
