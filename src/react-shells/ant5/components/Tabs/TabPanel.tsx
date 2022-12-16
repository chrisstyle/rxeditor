import React, { forwardRef, memo } from "react"
import cls from "classnames"
export const TabPanel = memo(forwardRef<HTMLDivElement>((
  props: {
    className?: string,
    children?: React.ReactNode
  },
  ref
) => {
  const { className, children, ...other } = props
  return (
    <div ref={ref} {...other} className={cls("rx-tab-panel", className)}>
      {children}
    </div>
  )
}))