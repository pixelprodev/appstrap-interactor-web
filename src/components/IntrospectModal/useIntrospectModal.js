import { useState } from 'react'

export default function useIntrospectModal () {
  const [show, setShow] = useState(false)

  function handleOnHide () {
    setShow(false)
  }

  return {
    show,
    setShow,
    onHide: handleOnHide
  }
}
