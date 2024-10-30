import { EffectCallback } from "react"
import { useEffect, useRef } from "react"

const useOnMountUnsafe = (effect) => {
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      effect()
    }
  }, [])
};

export default useOnMountUnsafe;
