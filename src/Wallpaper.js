function Wallpaper() {
  return (
    <svg style={{ width: '100%', height: '100%' }}>
      <TriCell length={50} x={0} fill='red' />
      <TriCell length={50} x={-2} fill='blue' />
    </svg>
  )
}

function TriCell({ length, x, ...props }) {
  const { innerWidth: width, innerHeight: height } = window
  const points = [
    [width / 2 + (length * x) / 2, height - (length * Math.sqrt(3)) / 2],
    [width / 2 + length / 2 + (length * x) / 2, height],
    [width / 2 - length / 2 + (length * x) / 2, height],
  ]

  return (
    <polygon
      points={points.map((point) => point.join(',')).join(' ')}
      {...props}
    />
  )
}

export default Wallpaper
