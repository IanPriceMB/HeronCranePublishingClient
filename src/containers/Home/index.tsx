import React from 'react'
import NovelCard from '../../components/NovelCard'

const Home = () => {
  return (
    <>
      <header>
        <h1>Checkout our books!</h1>
      </header>
      <main>
        <ul>
          <li>
            <article>
              <NovelCard />
            </article>
          </li>
        </ul>
      </main>
    </>
  )
}

export default Home