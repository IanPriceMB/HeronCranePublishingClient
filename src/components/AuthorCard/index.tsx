import React from 'react'

type AuthorCardProps = {
  authorName: string;
  authorAbout: string;
}

const AuthorCard = ({
  authorName,
  authorAbout,
}: AuthorCardProps) => {
  return (
    <div>
      <h1>{authorName}</h1>
      <p>About the author</p>
      <p>{authorAbout}</p>
    </div>
  )
}

export default AuthorCard