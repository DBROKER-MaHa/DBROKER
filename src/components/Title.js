import React from 'react'

function Title({title}) {
  return (
    <div style={{ position: 'relative', height: '30rem' }}>
  <img
    src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="background"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7))',
    }}
  />
  <div className = 'position-absolute top-50 start-50 text-black translate-middle  d-flex flex-column p-4' style={{width:'900px'}}>
           <h2 className = 'fs-1 text-white fw-bolder text-center'>{title}</h2>
            
           </div>
</div>

  )
}

export default Title
