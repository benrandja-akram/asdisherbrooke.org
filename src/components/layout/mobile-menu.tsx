import { useEffect, useRef } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Button from 'components/button'
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

interface Props {
  onClose(): void
}
const MobileMenu: React.FC<Props> = ({ onClose }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const target = ref.current!
    disableBodyScroll(target)

    return () => enableBodyScroll(target)
  }, [])

  return (
    <nav
      ref={ref}
      className="grid fixed top-16 bottom-0 right-0 left-0 bg-white z-50 overflow-y-auto"
    >
      <div className="w-full px-6 py-8 ">
        <Link href="/devenir-membre">
          <a onClick={onClose} className="block">
            <Button variant="outlined" size="small" className="w-full">
              Become Member
            </Button>
          </a>
        </Link>

        <Accordion.Root collapsible type="single">
          <div className="divide-y divide-gray-200 mt-8">
            {[
              {
                title: 'ASDI',
                link: undefined,
                children: [
                  { title: 'Missions', link: '/asdi' },
                  { title: "Plus d'infos", link: '/asdi/infos' },
                ],
              },
              {
                title: 'Activities',
                link: '/activities',
                children: [],
              },
              {
                title: 'Plus',
                link: undefined,
                children: [
                  {
                    title: 'Deficience intellectuelle',
                    link: '/diffeience',
                  },
                  {
                    title: 'Lexique',
                    link: '/lexique',
                  },
                  {
                    title: 'Partenaires',
                    link: '/partenaires',
                  },
                ],
              },
            ].map((item, i) => (
              <Accordion.Item
                className="outline-none"
                key={i}
                value={i.toString()}
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center w-full justify-between text-gray-700 font-semibold py-4">
                    {item.link ? (
                      <Link href={item.link}>
                        <a onClick={onClose} className="text-lg">
                          {item.title}
                        </a>
                      </Link>
                    ) : (
                      <>
                        <span className="text-lg">{item.title}</span>
                        {!!item.children.length && (
                          <ChevronDownIcon className="h-5 w-5" />
                        )}
                      </>
                    )}
                  </Accordion.Trigger>
                </Accordion.Header>
                {!!item.children.length && (
                  <Accordion.Content className="accordion text-gray-500 overflow-hidden">
                    {item.children.map((menu) => (
                      <div
                        key={menu.link}
                        className="text-gray-500 py-1 mb-2.5"
                      >
                        <Link href={menu.link}>
                          <a onClick={onClose} key={menu.link}>
                            {menu.title}
                          </a>
                        </Link>
                      </div>
                    ))}
                  </Accordion.Content>
                )}
              </Accordion.Item>
            ))}
          </div>
        </Accordion.Root>
      </div>
    </nav>
  )
}

export default MobileMenu
