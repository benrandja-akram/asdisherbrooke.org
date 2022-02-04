import classNames from 'classnames'
import { forwardRef } from 'react'

interface Props extends React.ComponentProps<'button'> {
  size?: 'default' | 'large' | 'small'
  variant?: 'default' | 'outlined' | 'link'
  color?: 'primary' | 'secondary'
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      size = 'default',
      variant = 'default',
      color = 'primary',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={classNames(
          className,
          'inline-block border border-transparent font-semibold transition-colors',
          {
            'rounded px-5 py-2': size === 'default',
            'rounded-lg px-5 py-3.5': size === 'large',
            'rounded px-3 py-2': size === 'small',
          },
          {
            'border border-primary text-primary-dark  hover:bg-primary hover:text-white':
              variant === 'outlined',
          },
          variant === 'default' && {
            'bg-primary text-white hover:bg-primary-dark': color === 'primary',
            'bg-blue-50 text-primary-dark hover:bg-blue-100':
              color === 'secondary',
          },
          variant === 'link' && {
            'text-primary hover:text-primary-dark hover:underline':
              color === 'primary',
          }
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
