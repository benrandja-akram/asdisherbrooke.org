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
        'min-w-[200px] rounded-lg border border-gray-100 bg-white py-2 shadow-xl ' +
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
          'flex cursor-pointer items-center space-x-4 px-4 py-1.5 text-gray-700 outline-none focus:bg-gray-50',
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
