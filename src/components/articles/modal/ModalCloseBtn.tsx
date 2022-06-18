import React from 'react'
import CloseIcon from '../../elements/CloseIcon'

const ModalCloseBtn = () => {
  return (
    <span style={{ position: 'absolute', top: 0, right: 0 }}>
      <CloseIcon width={16.33} height={16.33} />
    </span>
  )
}

export default ModalCloseBtn