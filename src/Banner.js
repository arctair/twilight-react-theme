function Banner({ color }) {
  return (
    <div
      style={{
        color,
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
  )
}

export default Banner
