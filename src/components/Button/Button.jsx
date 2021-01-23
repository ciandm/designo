import React from 'react'
import PropTypes from 'prop-types'
import * as Styled from './Button.styled';

const Button = ({
  variation,
  children,
  buttonClickHandler,
  ...rest
}) => {
  return (
    <Styled.Button
      variation={variation}
      {...rest}
    >
      {children}
    </Styled.Button>
  )
}

export default Button

Button.propTypes = {
  variation: PropTypes.oneOf(['peach', 'white']).isRequired,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  variation: 'peach',
}