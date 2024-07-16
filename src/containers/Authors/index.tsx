import React from 'react'
import AuthorCard from '../../components/AuthorCard'

const Authors = () => {
  return (
    <>
      <header>
        <h1>
          Authors
        </h1>
      </header>
      <main>
        <section>
          <AuthorCard />
        </section>
      </main>
    </>
  )
}

export default Authors