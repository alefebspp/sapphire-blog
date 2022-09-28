import { Input } from '@chakra-ui/react'
import React, { forwardRef } from 'react'

const InputComponent = React.forwardRef(
  ({ texto, id, tipo, onChange, variant }, ref) => {
    return (
      <Input
        textAlign="center"
        ref={ref}
        size="sm"
        id={id}
        type={tipo}
        placeholder={texto}
        variant={variant}
        _placeholder={{ color: 'gray.500' }}
        onChange={onChange}
      />
    )
  }
)
export default InputComponent
