function item_str(url, id, name){       //生成每个链接对象
    return `<img src="${url}" alt="${name}" class="rounded" id="imgs" data-bs-toggle="modal" data-bs-target="#img${id}" >` +
            `<div style="color: black;" class="modal fade" id="img${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">` +
                `<div class="modal-dialog modal-xl modal-dialog-centered">` +
                    `<div class="modal-content">` +
                        `<div class="modal-header">` +
                        `<h5 class="modal-title" id="exampleModalLabel">${name}</h5>`+
                        `<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>` +
                        `</div>` +
                        `<div class="modal-body"><img src="${url}" alt="${name}" class="rounded" style="width: 100%;"></div>` +
                    `</div>` +
                `</div>` +
            `</div>`
}
let str = '';
let sort = ["一" , "二" , "三" , "四" , "五" , "六" , "七" , "八" , "九" , "十"];//每个大类的序号


for(let j = 0;j < imgs.length;j++){
    let item = imgs[j]  //每个大类 ，如各部影片
    let link = item.links   //每个大类里的图片 数组

    str += `<p><div class="list_title" data-bs-toggle="collapse" data-bs-target="#item${item.id}" aria-expanded="false" aria-controls="collapseWidthExample">${sort[j] +' '+item.name}</div></p>
            <div class="item_body">
                <div class="collapse collapse-horizontal" id="item${item.id}">
                    <div class="card card-body my_card">
                        <div>`
    for(let ls = 0;ls < link.length;ls++){
        let l = link[ls]  //图片数组的每个图片对象
        str += item_str(l.u,l.i,l.n)
    }
    str += `</div></div></div></div>`
}


document.getElementById('images_body').innerHTML = str



