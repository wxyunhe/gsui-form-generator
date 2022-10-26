export default {
  options(h, conf, key) {
    const list = []
    conf.__slot__.options.forEach(item => {
      list.push(<gs-option label={item.label} value={item.value} disabled={item.disabled}></gs-option>)
    })
    return list
  }
}
