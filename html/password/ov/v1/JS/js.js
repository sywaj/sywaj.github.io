let number = '0123456789'.split('')
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
let lower = 'abcdefghijklmnopqrstuvwxyz'.split('')
$('#create').click(()=>{
    let len = $('#length')[0].value;//密码长度
    if(len <= 0){ //输入负数或没输入
        $('#result')[0].style.color = 'red'
        $('#result')[0].value = '请输入一个正数'
        alert("请输入一个正数")
        return
    }else if(len > 10000){
        $('#result')[0].style.color = 'red'
        $('#result')[0].value = '请输入一个小于 一万 的数'
        alert('请输入一个小于 一万 的数')
        return
    }else{
        $('#result')[0].style.color = 'black'
        $('#result')[0].value = ''
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
    for(let i=0;i<len;i++){
        passowrd.push(arr[Number.parseInt(Math.random() * arr.length)])
    }
    if($('#at').is(':checked')){
        passowrd[Number.parseInt(Math.random() * len)] = '@'
    }
    if($('#jin').is(':checked')){
        passowrd[Number.parseInt(Math.random() * len)] = '#'
    }
    if($('#underline').is(':checked')){
        passowrd[Number.parseInt(Math.random() * len)] = '_'
    }
    let other = $('#other')[0].value.split('');//其他字符
    for(let i=0;i<other.length;i++){
        passowrd[Number.parseInt(Math.random() * len)] = other[i]
    }
    $('#result')[0].value = passowrd.join('')

})