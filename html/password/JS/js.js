// 图标的相对路径
let logoPath = "../../image/共用图片/蜡笔小新.png"

let number = '0123456789'.split('')
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
let lower = 'abcdefghijklmnopqrstuvwxyz'.split('')

//点击生成按钮
$('#create').click(()=>{
    
    let len = 0;//密码长度
    if($('#length')[0].value == ''){//没输入，默认为16
        len = 16
    }else{
        len = Number.parseInt($('#length')[0].value)
    }

    if(len <= 0){ //输入负数
        $('#result')[0].style.color = 'red'
        $('#result')[0].value = '请输入一个正数'
        alert("请输入一个正数")
        return
    }else if(len > 10000){//输入的数大于10000
        $('#result')[0].style.color = 'red'
        $('#result')[0].value = '请输入一个小于 一万 的数'
        alert('请输入一个小于 一万 的数')
        return
    }else{//1-10000
        $('#result')[0].style.color = 'black'
        $('#result')[0].value = ''
    }

    let atNum = 0;//@的个数
    if($('#atNum')[0].value == ''){//默认为1
        atNum = 1 
    }else{
        atNum = Number.parseInt($('#atNum')[0].value);
    }
    //检验@的个数，可以为空，但不能小于1或大于总长度
    if($('#at').is(':checked') && (atNum > len || atNum < 1)){
        alert("@的个数不能超过总长度或必须输入大于0的整数")
        return
    }

    let jinNum = 0;//#的个数
    if($('#jinNum')[0].value == ''){//默认为1
        jinNum = 1 
    }else{
        jinNum = Number.parseInt($('#jinNum')[0].value);
    }
    //检验#的个数，可以为空，但不能小于1或大于总长度
    if($('#jin').is(':checked') && (jinNum > len || jinNum < 1)){
        alert("#的个数不能超过总长度或必须输入大于0的整数")
        return
    }

    let underlineNum = 0;//_的个数
    if($('#underlineNum')[0].value == ''){//默认为1
        underlineNum = 1 
    }else{
        underlineNum = Number.parseInt($('#underlineNum')[0].value);
    }
    //检验_的个数，可以为空，但不能小于1或大于总长度
    if($('#underline').is(':checked') && (underlineNum > len || underlineNum < 1)){
        alert("_的个数不能超过总长度或必须输入大于0的整数")
        return
    }

    let passowrd = [];//密码字符
    let arr = [];//字符集
    if($('#number').is(':checked')){
        arr.push(...number)
        arr.push(...number)
    }
    if($('#upperLetter').is(':checked')){
        arr.push(...upper)
    }
    if($('#lowerLetter').is(':checked')){
        arr.push(...lower)
    }
    //生成初始密码串
    for(let i=0;i<len;i++){
        passowrd.push(arr[Number.parseInt(Math.random() * arr.length)])
    }
    //@
    if($('#at').is(':checked')){
        for(let i=0;i<atNum;i++){
            passowrd[Number.parseInt(Math.random() * len)] = '@'
        }
    }
    //#
    if($('#jin').is(':checked')){
        for(let i=0;i<jinNum;i++){
            passowrd[Number.parseInt(Math.random() * len)] = '#'
        }
    }
    //_
    if($('#underline').is(':checked')){
        for(let i=0;i<underlineNum;i++){
            passowrd[Number.parseInt(Math.random() * len)] = '_'
        }
    }
    let other = $('#other')[0].value.split('');//其他字符
    for(let i=0;i<other.length;i++){
        passowrd[Number.parseInt(Math.random() * len)] = other[i]
    }
    $('#result')[0].value = passowrd.join('')
})

//复制密码按钮
$('#copy').click(()=>{
    let t = document.getElementById('result')
    t.select()//选择对象
    document.execCommand('Copy')
    alert('内容已复制到剪切板')
})

//@字符
$("#at").click(()=>{
    if($('#at').is(':checked')){
        $('#atNum').attr('disabled',false);
    }else{
        $('#atNum').attr('disabled', true);
        $('#atNum')[0].value = ''
    }
})
//#字符
$("#jin").click(()=>{
    if($('#jin').is(':checked')){
        $('#jinNum').attr('disabled',false);
    }else{
        $('#jinNum').attr('disabled', true);
        $('#jinNum')[0].value = ''
    }
})
//_字符
$("#underline").click(()=>{
    if($('#underline').is(':checked')){
        $('#underlineNum').attr('disabled',false);
    }else{
        $('#underlineNum').attr('disabled', true);
        $('#underlineNum')[0].value = ''
    }
})