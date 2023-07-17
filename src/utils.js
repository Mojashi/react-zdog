import Zdog from 'zdog'
import React from 'react'
import { useZdogPrimitive } from './hooks'

export function applyProps(instance, newProps) {
  Zdog.extend(instance, newProps)
}

export const createZdog = primitive =>
  React.forwardRef(({ children, ...rest }, ref) => useZdogPrimitive(primitive, children, rest, ref)[0])

export function generateRandomHexColor() {
  const randomInt = Math.floor(Math.random() * 16777216)
  const hexColor = randomInt.toString(16).toUpperCase()
  const color = '#' + hexColor.padStart(6, '0')
  if (color === '#000000') {
    return generateRandomHexColor()
  } else {
    return '#' + hexColor.padStart(6, '0')
  }
}

const componentToHex = c => {
  let hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

export const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

export function createProxy(target, handleChange, parentProp) {
  return new Proxy(target, {
    set(obj, prop, value) {
      if (typeof value === 'object' && value !== null) {
        value = createProxy(value, handleChange)
      }
      handleChange(obj, prop, value, parentProp)
      obj[prop] = value
      return true
    },
    get(obj, prop) {
      if (typeof obj[prop] === 'object' && obj[prop] !== null) {
        return createProxy(obj[prop], handleChange, prop)
      }
      return obj[prop]
    },
  })
}
