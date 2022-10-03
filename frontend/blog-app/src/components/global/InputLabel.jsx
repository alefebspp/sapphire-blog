import React from 'react'
import Input from '../global/Input'

const InputLabel = React.forwardRef(
  ({ labelClass, htmlFor, labelText, inputType, inputId, inputText }, ref) => (
    <>
      <label className={labelClass} htmlFor={htmlFor}>
        {labelText}
      </label>
      <Input tipo={inputType} ref={ref} id={inputId} texto={inputText} />
    </>
  )
)

export default InputLabel
