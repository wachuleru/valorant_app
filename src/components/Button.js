import { Spinner } from './Spinner'
import { classNames } from '../utils/classNames'

export function Button({ className, disabled, isLoading, children, ...props }) {
  return (
    <button
      disabled={disabled}
      className={classNames(
        className,
        'btn btn-primary btn-sm',
      )}
      {...props}
    >
      {isLoading ? <Spinner size={32} className="text-white" /> : children}
    </button>
  )
}