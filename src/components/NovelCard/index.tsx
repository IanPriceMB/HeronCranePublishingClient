import React from 'react'

type NovelCardProps = {
  novel: string
  title: string
  blerb: string
}

const NovelCard = ({
  novel,
  title,
  blerb,
}: NovelCardProps) => {
  return (
    <main>
      <img src={novel} alt={title} />
      <p>{blerb}</p>
    </main>
  )
}

export default NovelCard