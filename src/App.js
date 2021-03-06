import GithubLink from './GithubLink'
import Foreground from './svg/Foreground'
import Banner from './Banner'

function App() {
  return (
    <div
      style={{
        height: '100%',
        backgroundImage: 'linear-gradient(#202, #113)',
      }}
    >
      <Banner color='#BBB' />
      <svg style={{ width: '100%', height: '100%' }}>
        <Foreground cellSize={16} fill='#020' />
      </svg>
      <GithubLink color='#BBB' />
    </div>
  )
}

export default App
