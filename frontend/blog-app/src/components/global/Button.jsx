import { Button } from '@chakra-ui/react'

export default function ButtonComponent({ clique, text, color }) {
  return (
    <Button
      onClick={clique}
      colorScheme={color}
      variant="solid"
      size={{ base: 'xs', md: 'xs', lg: 'sm' }}
    >
      {text}
    </Button>
  )
}
