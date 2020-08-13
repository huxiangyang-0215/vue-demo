/**
 * 表单提交
 * 不合法提示
 * 合法触发提交方法
 * <form v-submit='doSubmit()'></form>
 */
import $$ from 'image2d';
export default{
    inserted(el, binding) {
        let doSubmit = binding.value;

        $$(el).bind('submit', (event) => {
            $$.stopPropagation(event);
            $$.preventDefault(event);

            if ((" " + el.getAttribute('class') + " ").indexOf(' ep-valid ') > -1) {
                doSubmit();
            } else {
                // alert('表单非法！');

                // 获取第一个非法的输入框
                let invalidDiv = $$('.ep-invalid', el)[0];

                // 获取输入name
                let inputName = invalidDiv.previousElementSibling.innerText;
                alert("[" + inputName + "]输入非法！");
                $$('input', invalidDiv)[0].focus();

            }

        });

    }
}