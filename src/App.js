import GithubLink from './GithubLink'
import Wallpaper from './Wallpaper'

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
      <Wallpaper foreground='#020' />
      <GithubLink color='#BBB' />
    </div>
  )
}

export default App
