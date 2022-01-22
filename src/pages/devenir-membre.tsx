import Button from 'components/button'
import Input from 'components/input'
import Content from '../../content/devenir-membre.mdx'

function BecomeMember({}) {
  return (
    <>
      <Content />
      <form className="space-y-6 mt-16">
        <Input placeholder="Write your name" type="text" title="Name" />
        <Input placeholder="Write your email" type="text" title="Email" />
        <Button>Soumettre</Button>
      </form>
    </>
  )
}
BecomeMember.layoutProps = { variant: 'content' }

export default BecomeMember
