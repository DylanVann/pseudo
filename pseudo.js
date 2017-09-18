import React from 'react'
import { withState } from 'recompose'

const enhance = withState('state', 'setState', { focus: false, active: false, hover: false })
const pseudo = Component => enhance(({ state, setState, ...props }) => {
  return (
    <Component
      // Hover
      onMouseEnter={() => setState(s => ({ ...s, hover: true }))}
      onMouseLeave={() => setState(s => ({ ...s, hover: false }))}
      // Active based on mouse.
      onMouseDown={() => setState(s => ({ ...s, active: true }))}
      onMouseUp={() => setState(s => ({ ...s, active: false }))}
      onMouseOut={() => setState(s => ({ ...s, active: false }))}
      // Focus
      onFocus={() => setState(s => ({ ...s, focus: true }))}
      onBlur={() => setState(s => ({ ...s, focus: false }))}
      hover={state.hover}
      focus={state.focus}
      active={state.active}
      // If any of these props are set on props they will override the state.
      {...props}
    />
  )
})

export default pseudo
