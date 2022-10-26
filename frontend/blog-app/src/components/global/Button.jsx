import { Button } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
export default function ButtonComponent({ clique, text, color, loading }) {
  return (
    <>
      {loading == true ? (
        <Spinner color="black" size="md" />
      ) : (
        <Button
          onClick={clique}
          colorScheme={color}
          variant="solid"
          size={{ base: 'xs', md: 'xs', lg: 'sm' }}
        >
          {text}
        </Button>
      )}
    </>
  );
}
