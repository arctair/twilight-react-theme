import GithubLink from './GithubLink'
import Foreground from './svg/Foreground'

function App() {
  return (
    <div
      style={{
        height: '100%',
        backgroundImage: 'linear-gradient(#202, #113)',
      }}
    >
      <div
        style={{
          color: '#BBB',
          textTransform: 'lowercase',
          position: 'absolute',
          left: '50%',
          top: '33%',
          transform: 'translate(-50%, -50%)',
          fontSize: '2em',
        }}
      >
        Twilight&nbsp;React&nbsp;Theme
      </div>
      <svg style={{ width: '100%', height: '100%' }}>
        <Foreground cellSize={16} fill='#020' />
      </svg>
      <GithubLink color='#BBB' />
    </div>
  )
}

export default App
