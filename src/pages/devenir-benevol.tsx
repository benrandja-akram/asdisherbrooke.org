import Button from 'components/button'
import Input from 'components/input'
import Content from '../../content/devenir-benevol.mdx'

function BecomeMember({}) {
  return (
    <>
      <Content />
      <form className="mt-16 space-y-6">
        <Input placeholder="Write your name" type="text" title="Name" />
        <Input placeholder="Write your email" type="text" title="Email" />
        <Button className="w-full sm:w-auto">Soumettre</Button>
      </form>
    </>
  )
}
BecomeMember.layoutProps = { variant: 'content' }

export default BecomeMember
