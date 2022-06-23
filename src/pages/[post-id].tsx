import type { NextPage } from 'next'
import Container from '../common/components/Container'
import Main from '../common/components/Main'
import Sidebar from '../common/components/Sidebar'

const Post: NextPage = () => {
  return (
    <Container flex>
      <Main>
        <h2>This is post detail page.</h2>
      </Main>
      <Sidebar>
        <h2>This is post detail page sidebar.</h2>
      </Sidebar>
    </Container>
  )
}

export default Post
