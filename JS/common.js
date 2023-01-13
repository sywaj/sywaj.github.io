/**
 * 各个页面的各个部分，目前包括
 * logo、大标题、底部的作者、版权声明等。2023/1/13
 * 以后有修改的话继续添加
 */

// 大标题
//需要一个图标的路径变量，将该变量保存在各个页面各自的js文件里
document.getElementsByClassName('h1_title')[0].innerHTML = title()
function title() {  
    return `<img id="img_title" src="${logoPath}" title="新之助" >
            <!-- <img id="img_title" src="https://s4.ax1x.com/2022/02/13/Hrct1S.png" title="新之助" > -->
            <span style="vertical-align: bottom;">声声入耳</span>`
}

// 作者声明
document.getElementsByClassName('authortips')[0].innerHTML = authortips()
function authortips(){
    return `声明：此网站由 <b>sywaj</b> 制作，若有侵权请联系 
            <a href="mailto:sywswaj@163.com" title="打开作者邮箱：sywaj" id="author"> @联系作者 </a>删除，未经允许不可转载。`
}

//版权声明
document.getElementsByClassName('copyright')[0].innerHTML = copyright()
function copyright(){
    //自动更新年份
    let year = new Date().getFullYear()
    return `Copyright © 2020-${year} <b>sywaj</b>`
}