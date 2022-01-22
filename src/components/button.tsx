import classNames from 'classnames'
import { forwardRef } from 'react'

interface Props extends React.ComponentProps<'button'> {
  size?: 'default' | 'large' | 'small'
  variant?: 'default' | 'outlined'
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
          'inline-block border border-transparent transition-colors font-semibold',
          {
            'px-5 py-2 rounded': size === 'default',
            'px-5 py-3.5 rounded-lg': size === 'large',
            'px-3 py-2 rounded': size === 'small',
          },
          {
            'text-indigo-700 hover:text-white border  border-indigo-600 hover:bg-indigo-600':
              variant === 'outlined',
          },
          variant !== 'outlined' && {
            'text-white bg-indigo-600 hover:bg-indigo-700': color === 'primary',
            'text-indigo-700 bg-indigo-100 hover:bg-indigo-200':
              color === 'secondary',
          }
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
