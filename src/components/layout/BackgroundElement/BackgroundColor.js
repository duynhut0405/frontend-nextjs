import { OrnamentNet } from '@images/svg'
import clsx from 'clsx'

export default function BackgroundColor({ position, className }) {
  return (
    <div className={clsx('absolute', position)}>
      <div
        className={clsx('blur-[250px]', className)}
        style={{
          transform: 'matrix(1, 0, 0, -1, 0, 0)',
        }}
      />
    </div>
  )
}
