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

export default TriCell
