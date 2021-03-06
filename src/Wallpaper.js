function Wallpaper() {
  return (
    <svg style={{ width: '100%', height: '100%' }}>
      <TriCell length={50} fill='red' />
    </svg>
  )
}

function TriCell({ length, ...props }) {
  const { innerWidth: width, innerHeight: height } = window
  return (
    <polygon
      points={[
        [width / 2, height - (length * Math.sqrt(3)) / 2],
        [width / 2 + length / 2, height],
        [width / 2 - length / 2, height],
      ]
        .map((point) => point.join(','))
        .join(' ')}
      {...props}
    />
  )
}

export default Wallpaper
