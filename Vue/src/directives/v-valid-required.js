import $$ from 'image2d';
let getNewClass = function (clazz, addClazzStr) {
    clazz = ' ' + clazz + ' ';
    let temp = ['ep-invalid-required', 'ep-invalid', 'ep-valid-required', 'ep-valid'];
    for (let i = 0; i < temp.length; i++) {
        clazz = clazz.replace(" " + temp[i] + " ", ' ');
    }
    return clazz.trim() + " " + addClazzStr;
}
let doCheck = function (el, binding) {
    let flag = binding.value;
    if (flag == undefined) {
        flag = true;
    }
    if (flag == true) {
        let inputValue = el.getElementsByTagName('input')[0].value || "";
        if (inputValue.length > 0) {
            el.setAttribute("class", getNewClass(el.getAttribute("class"), 'ep-valid-required ep-valid'));
        } else {
            el.setAttribute("class", getNewClass(el.getAttribute("class"), 'ep-invalid-required ep-invalid'));
        }
    } else {
        el.setAttribute("class", getNewClass(el.getAttribute("class"), 'ep-valid-required ep-valid'));
    }
    // 更新表单的合法信息
    let formDom = el.parentNode.parentNode;
    let invalidInputs = $$('.ep-invalid', formDom);
    let oralClass = (" " + (formDom.getAttribute('class') || "") + " ").replace('ep-invalid', ' ').replace('ep-valid', ' ');

    if (invalidInputs.length > 0) {
        formDom.setAttribute('class', oralClass.trim() + " ep-invalid");
    } else {
        formDom.setAttribute('class', oralClass.trim() + " ep-valid");
    }
}


// 校验必输项
// v-valid-required='flag'   值为booolean   true(默认)
export default {
    update: doCheck,
    inserted: doCheck
};