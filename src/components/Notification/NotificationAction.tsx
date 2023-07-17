import { ElementType, ButtonHTMLAttributes } from 'react'


interface NotificationActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function NotificationAction({ icon: Icon, ...rest }: NotificationActionProps) {
  return (
    <button {...rest} className="w-8 h-8 rounded flex items-center justify-center bg-violet-500 hover:bg-violet-600">
      <Icon className="w-3 h-3 text-zinc-50" />
    </button>
  )
}