// 图标的相对路径
let logoPath = "../../image/共用图片/蜡笔小新.png"

docById('replace').onclick = ()=>{ //替换按钮
    let oldText = docById('oldText').value  //原文本
    let target = docById('targetText').value //目标文本
    let replace = docById('replaceText').value //替换文本
    docById('newText').value = oldText.replaceAll(target,replace)
}
docById('copy').onclick = ()=>{ //复制按钮
    let t = document.getElementById('newText')
    t.select()//选择对象
    document.execCommand('Copy')
    alert('内容已复制到剪切板')
}
docById('reset').onclick = ()=>{ //清空按钮
    docById('oldText').value = ""
    docById('targetText').value = ""
    docById('replaceText').value = ""
    docById('newText').value = ""
}

function docById(element){
    return document.getElementById(element)
}
