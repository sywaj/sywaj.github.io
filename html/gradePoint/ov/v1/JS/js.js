$('#addBtn').click(()=>{ // 添加按钮
    let len = $('#content').children().length
    let item = `<div class="input-group mb-3" id="${'item_' + len}">
                        <span class="input-group-text form-control-lg spanText" id="basic-addon1">学分</span>
                        <input type="text" class="form-control inputText">
                        <span class="input-group-text form-control-lg spanText" id="basic-addon1">绩点</span>
                        <input type="text" class="form-control inputText">
                    </div>`
    $('#content').append(item);
});

$('#subBtn').click(()=>{ //减少按钮
    let len = $('#content').children().length - 1
    if(len >= 1){
        $('#item_' + len).remove();
    }
});

$('#resultBtn').click(()=>{ //结果计算按钮
    let items = $('#content').children()
    let len = items.length
    let totalCredit = 0;//总学分
    let totalGradePoint = 0;//总绩点
    for(let i=0;i<len;i++){
        let temp = items.eq(i);
        let credit = Number.parseFloat(temp.children()[1].value) //学分
        let gradePoint = Number.parseFloat(temp.children()[3].value) //绩点
        totalCredit += credit;
        totalGradePoint += credit * gradePoint;
    }
    if(isNaN(totalGradePoint/totalCredit)){
        $('#total').html('非法输入，请检查输入是否正确');
    }else{
        $('#total').html(totalGradePoint/totalCredit);
    }
});