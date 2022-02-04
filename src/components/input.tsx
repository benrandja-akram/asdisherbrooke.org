import classNames from 'classnames'
import { forwardRef } from 'react'

interface Props extends React.ComponentProps<'input'> {}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ className, title, ...props }, ref) => {
    const input = (
      <input
        ref={ref}
        className={classNames(
          'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-400 focus:ring-opacity-30',
          className
        )}
        {...props}
      />
    )
    if (title)
      return (
        <label className="block ">
          <div className="mb-1.5 text-base font-semibold">{title}</div>
          {input}
        </label>
      )
    return input
  }
)

Input.displayName = 'Input'

export default Input
