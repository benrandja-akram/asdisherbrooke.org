import {
  MenuContentProps,
  MenuItemProps,
  Item,
  Content,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu'
import classNames from 'classnames'
import React, { forwardRef } from 'react'

import styles from './styles.module.scss'

const DropdownContent: React.FC<MenuContentProps> = (props) => {
  return (
    <Content
      side="bottom"
      align="center"
      className={
        'py-2 bg-white border border-gray-100 shadow-xl min-w-[200px] rounded-lg ' +
        styles.content
      }
      sideOffset={8}
      {...props}
    />
  )
}
const DropdownItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <Item
        ref={ref}
        className={classNames(
          'px-4 py-1.5 flex items-center cursor-pointer text-gray-700 focus:bg-gray-50 outline-none space-x-4',
          className
        )}
        {...props}
      />
    )
  }
)
DropdownItem.displayName = 'DropdownItem'
const Dropdown = {
  Content: DropdownContent,
  Item: DropdownItem,
  Root,
  Trigger,
}

export default Dropdown
