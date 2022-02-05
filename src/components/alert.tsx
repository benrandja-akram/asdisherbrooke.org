import { InfoCircledIcon } from '@radix-ui/react-icons'

type Props = {
  title: string
  body: string
}
function Alert({ title, body }: Props) {
  return (
    <div className="my-12 flex rounded-lg bg-amber-50 p-3 py-4">
      <InfoCircledIcon className="mr-3  min-h-[32px] min-w-[32px] text-amber-700" />
      <div>
        <div className="mb-1.5 font-semibold text-amber-700">{title}</div>
        <div className="text-amber-600">{body}</div>
      </div>
    </div>
  )
}

export default Alert
