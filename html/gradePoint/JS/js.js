// 图标的相对路径
let logoPath = "../../image/共用图片/蜡笔小新.png"

let num = ['00','01','02','03','04','05','06','07','08','09'];
$(document).ready(()=>{
    for(let i=10;i<100;i++){
        num.push(i.toString())
    }
})

$('#addBtn').click(()=>{    // 添加按钮
    $('#total').html(""); //添加时将原来可能存在的文本清除掉
    if(num.length <= 0){
        alert('已满100科，无法再添加，请生成一些科目后再添加')
        return
    }
    let n = num.pop()
    let item = `<div class="input-group input-group-lg">\
                    <input type="number" class="form-control cell" placeholder="如：2.0"/>\
                    <input type="number" class="form-control cell" />\
                    <input type="text" class="form-control cell" placeholder="如：大学物理，可不填写"/>\
                    <div class="oper">\
                        <div class="imageWidth imgDel del" id="del${n}" onclick="delFunc('${n}')"></div>\
                        <div class="imageWidth imgHid hid" id="hid${n}" value='f' onclick="hidFunc('${n}')"></div>\
                    </div>\
                </div>`
    $('#content').append(item);
})

//删除函数
function delFunc(n){
   $(document.getElementById("del" + n).parentNode.parentNode).remove();
    num.push(n) //将已删除的数字重新加回去
}
//隐藏函数
function hidFunc(n){
    let then = document.getElementById("hid" + n);
    let isHid = then.getAttribute('value')
    let childs = $(then.parentNode).prevAll()
    if(isHid == 't'){
        for(let i=0;i<childs.length;i++){
            $(childs[i]).attr('disabled', false);
        }
        then.setAttribute('value','f')
        then.style.backgroundColor = 'rgb(60, 60, 60)';
        then.style.backgroundImage = "url('./image/隐藏.png')";
    }else{
        for(let i=0;i<childs.length;i++){
            $(childs[i]).attr('disabled', true);
        }
        then.setAttribute('value','t')
        then.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        then.style.backgroundImage = "url('./image/隐藏_黑.png')";
    }
}

$('#resultBtn').click(()=>{ //结果计算按钮
    let items = $('#content').children()
    let len = items.length
    let totalCredit = 0;//总学分
    let totalGrade = 0;//总绩点
    let isBreak = false;//最终结果
    for(let i=1;i<len;i++){
        let temp = items.eq(i).children();
        let status = temp[3].children[1].getAttribute('value');
        if(status == 't'){  //失效时不参与运算
            continue;
        }
        let credit = Number.parseFloat(temp[0].value) //学分
        let grade = Number.parseFloat(temp[1].value) //绩点
        if(isNaN(credit)){      //学分未填写，默认为 2.0
            credit = 2.0
        }
        if(isNaN(grade)){       //绩点未填写，停止计算
            isBreak = true
            break
        }else{
            if(grade >= 60){        //输入分数
                let t1 = Number.parseInt(grade/10) - 5
                let t2 = grade%10
                grade = Number.parseFloat(t1 + "." + t2)
            }
        }
        totalCredit += credit;
        totalGrade += credit * grade;
    }
    if(isBreak){
        res = "部分绩点未填写";
        $('#total').html("部分绩点未填写");
    }else{
        if(totalGrade <= 0){
            $('#total').html("请输入有效的分数");
        }else{
            $('#total').html("绩点：" + (totalGrade/totalCredit).toFixed(5));
        }
    }
});