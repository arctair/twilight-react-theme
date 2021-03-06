function Wallpaper({ foreground }) {
  return (
    <svg style={{ width: '100%', height: '100%' }}>
      <Foreground cellSize={16} fill={foreground} />
    </svg>
  )
}

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

function TriCell({ l, x, y, ...props }) {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window
  const xCenter = windowWidth / 2 + (l * x) / 2
  const height = l * Math.sqrt(3)
  const [left, top, right, bottom] = [
    xCenter - l / 2,
    windowHeight - (height * (y + 1)) / 2,
    xCenter + l / 2,
    windowHeight - (height * y) / 2,
  ]
  const points =
    (x + y) % 2 != 0
      ? [
          [left, top],
          [right, top],
          [xCenter, bottom],
        ]
      : [
          [left, bottom],
          [right, bottom],
          [xCenter, top],
        ]

  return (
    <polygon
      points={points.map((point) => point.join(',')).join(' ')}
      {...props}
    />
  )
}

export default Wallpaper
