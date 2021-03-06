function Wallpaper() {
  return (
    <svg style={{ width: '100%', height: '100%' }}>
      <TriCell length={50} x={0} y={0} fill='red' />
      <TriCell length={50} x={0} y={1} fill='purple' />
      <TriCell length={50} x={-1} y={0} fill='green' />
      <TriCell length={50} x={-1} y={1} fill='yellow' />
      <TriCell length={50} x={-2} y={0} fill='blue' />
    </svg>
  )
}

function TriCell({ length, x, y, ...props }) {
  const { innerWidth: width, innerHeight: height } = window
  const middle = width / 2 + (length * x) / 2
  const [left, top, right, bottom] = [
    middle - length / 2,
    height - (length * Math.sqrt(3)) / 2 - (length * Math.sqrt(3) * y) / 2,
    middle + length / 2,
    height - (length * Math.sqrt(3) * y) / 2,
  ]
  const points =
    (x + y) % 2 != 0
      ? [
          [left, top],
          [right, top],
          [middle, bottom],
        ]
      : [
          [left, bottom],
          [right, bottom],
          [middle, top],
        ]

  return (
    <polygon
      points={points.map((point) => point.join(',')).join(' ')}
      {...props}
    />
  )
}

export default Wallpaper
