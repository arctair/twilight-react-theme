import { useState } from 'react'

function GithubLink({ color }) {
  const [hover, setHover] = useState(false)
  return (
    <>
      <a
        href='https://github.com/arctair/twilight-react-theme'
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: '0.5em',
          textDecoration: 'none',
          fontSize: '1.5em',
          color,
          ...(hover && {
            textShadow: `0 0 3px ${color}`,
          }),
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Github
      </a>
    </>
  )
}

export default GithubLink
