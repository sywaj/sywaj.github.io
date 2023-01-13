// 图标的相对路径
let logoPath = "../../image/共用图片/蜡笔小新.png"

num = ['〇','一','二','三','四','五','六','七','八','九']
nums = []
for(let i=0;i<num.length;i++){
    for(let j=0;j<num.length;j++){
        if(i == 0){
            nums.push(num[j])
            continue
        }
        t = num[i]
        t += num[j]
        nums.push(t)
    }
}

//电视台官网
let ts = ""
for(let i=0;i<TVS.length;i++){
    let type = TVS[i].type
    let id = TVS[i].id + "_"
    let temp = TVS[i].webs
    let s = ""
    for(let j=0;j<temp.length;j++){
        s += `<span class='link_cell' >
                <a href="${temp[j].url}" class='link' target='_blank' >
                    <button class='my_tvwebs'>
                        ${temp[j].name}</br>
                        ${"地区：" + temp[j].area}
                    </button>
                </a>
             </span>`
    }
    ts += `<p class="p_divide">
            <a class="a_tvwebs" data-bs-toggle="collapse" href="#${id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                ${type}
            </a>
            </p>
            <div class="collapse" id="${id}" >
                <div class="my_card">
                    ${s}
                </div>
            </div>`
}
let str =   `<p class="p_divide" >
                <a class="a_divide" data-bs-toggle="collapse" href="#tvwebs" role="button" aria-expanded="false" aria-controls="collapseExample">
                    各电视台官网
                </a>
            </p>
            <div class="collapse" id="tvwebs" >
                <div class="">
                    ${ts}
                </div>
            </div>`

//直播电视台
for(let i=0;i<TVS.length;i++){
    let type = TVS[i].type
    let id = TVS[i].id
    let temp = TVS[i].tvs
    let s = ""
    for(let j=0;j<temp.length;j++){
        s += `<span class='link_cell'>
                <a href="${temp[j].url}" class='link' target='_blank' >
                    <button class='my_btn'>
                        ${temp[j].name}
                    </button>
                </a>
             </span>`
    }
    if(temp.length == 0){
        s = "<div class='empty'>当前没有可在线直播的电视台</div>"
    }
    str += `<p class="p_divide">
            <a class="a_divide" data-bs-toggle="collapse" href="#${id}" role="button" aria-expanded="false" aria-controls="collapseExample">
                ${nums[i+1] + " "+type}
            </a>
            </p>
            <div class="collapse" id="${id}" >
                <div class="my_card">
                    ${s}
                </div>
            </div>`
}
let backTop = "<a href='#top' id='backTop' >\
                    <img alt='顶部' title='回到顶部' style='height:30px' src='../../image/共用图片/向上.png'>\
                </a>"
let toBottom = "<a href='#bottom' id='toBottom'>\
                    <img alt='底部' title='滑到底部' style='height:30px' src='../../image/共用图片/向下.png'>\
                </a>"

document.getElementById("content").innerHTML = str + backTop + toBottom