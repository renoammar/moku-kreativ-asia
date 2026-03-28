type MokuGradientBackgroundProps = {
  overlayClassName?: string
}

function MokuGradientBackground({ overlayClassName = 'bg-black/35' }: MokuGradientBackgroundProps) {
  return (
    <>
      <div className='absolute inset-0 bg-linear-to-br from-[#0D3C74] via-[#125ff9] to-[#0D3C74]' />
      <div className='absolute -top-24 -left-16 h-80 w-80 rounded-full bg-white/15 blur-3xl' />
      <div className='absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-[#125ff9]/40 blur-3xl' />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </>
  )
}

export default MokuGradientBackground