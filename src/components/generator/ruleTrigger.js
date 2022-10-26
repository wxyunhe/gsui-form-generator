/**
 * 用于生成表单校验，指定正则规则的触发方式。
 * 未在此处声明无触发方式的组件将不生成rule！！
 */
export default {
  'gs-input': 'blur',
  'gs-input-number': 'blur',
  'gs-textarea': 'blur',
  'gs-select': 'change',
  'gs-radio-group': 'change',
  'gs-checkbox-group': 'change',
  'gs-cascader-select': 'change',
  'el-time-picker': 'change',
  'el-date-picker': 'change',
  tinymce: 'blur'
}
