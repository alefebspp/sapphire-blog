import { Image } from '@chakra-ui/react'

export default function PostMainContent({
  firstDivKey,
  firstDivClassName,
  imageSrc,
  secondDivClassName,
  h1ClassName,
  h1Content,
  paragraphClassName,
  authorFirstName,
  authorSecondName,
  postCreatedAt,
  extraParagraph,
  firstDivOnClick,
  onClickParam,
  children
}) {
  return (
    <div
      onClick={() => firstDivOnClick(onClickParam)}
      key={firstDivKey}
      className={firstDivClassName}
    >
      <Image
        src={imageSrc}
        borderRadius="full"
        boxSize={{ base: '80px', md: '100px', lg: '150px' }}
      />
      <div className={secondDivClassName}>
        <h1 className={h1ClassName}>{h1Content}</h1>
        <p className={paragraphClassName}>
          Autor(a): {`${authorFirstName}` + ' ' + `${authorSecondName}`}
        </p>
        {extraParagraph ? (
          <p className={paragraphClassName}>Criado em: {postCreatedAt}</p>
        ) : (
          ''
        )}
      </div>
      {children}
    </div>
  )
}
