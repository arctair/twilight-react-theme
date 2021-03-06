import TriCell from './TriCell'

function Foreground({ cellSize, ...props }) {
  const { innerWidth: windowWidth } = window
  const left = Math.floor(-windowWidth / cellSize)
  const right = Math.ceil(windowWidth / cellSize)
  const cells = []
  for (let x = left; x <= right; x += 1) {
    for (let y = 0; y <= 12; y++) {
      if (y < (-1 / 24) * x + 6 + Math.random() * 2) {
        cells.push(<TriCell l={cellSize} x={x} y={y} {...props} />)
      }
    }
  }
  return <>{cells}</>
}

export default Foreground
