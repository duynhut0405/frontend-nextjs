import clsx from 'clsx'
import s from './Container.module.css'
export default function Container({ className, type = 'small', ...props }) {
  const style = clsx(
    s.root,
    { [s.large]: type === 'large' },
    { [s.medium]: type === 'medium' },
    { [s.small]: type === 'small' },
    className
  )
  return <div className={style} {...props} />
}
