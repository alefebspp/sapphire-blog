import Header from '../../components/layout/Header'
import CreatePost from '../../components/Main/CreatePost'
import MainPosts from '../../components/Main/MainPosts'
export default function Main() {
  return (
    <>
      <Header />
      <div>
        <CreatePost />
        <MainPosts />
      </div>
    </>
  )
}
