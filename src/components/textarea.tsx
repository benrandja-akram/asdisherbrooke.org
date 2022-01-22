import classNames from 'classnames'
import { forwardRef } from 'react'

interface Props extends React.ComponentProps<'textarea'> {}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, title, ...props }, ref) => {
    const textarea = (
      <textarea
        ref={ref}
        rows={4}
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
          <div className="font-semibold mb-1.5 text-base">{title}</div>
          {textarea}
        </label>
      )
    return textarea
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
