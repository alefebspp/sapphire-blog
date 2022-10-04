import DeleteButton from './DeleteButton'
import UpdateButton from './UpdateButton'

export default function PostButtons({
  divClassName,
  deleteOnclik,
  deleteParam,
  updateOnclick,
  updateParam,
  commentButtons
}) {
  return (
    <div className={divClassName}>
      <DeleteButton
        comment={commentButtons == 'allow' ? 'allow' : ''}
        click={deleteOnclik}
        param={deleteParam}
        size={
          commentButtons == 'allow'
            ? { base: 'xs', md: 'xs', lg: 'xs' }
            : { base: 'xs', md: 'xs', lg: 'sm' }
        }
      />

      <UpdateButton
        click={updateOnclick}
        param={updateParam}
        size={
          commentButtons == 'allow'
            ? { base: 'xs', md: 'xs', lg: 'xs' }
            : { base: 'xs', md: 'xs', lg: 'sm' }
        }
      />
    </div>
  )
}
