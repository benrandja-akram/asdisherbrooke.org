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
      className="fixed top-16 bottom-0 right-0 left-0 z-50 grid overflow-y-auto bg-white md:hidden"
    >
      <div className="w-full px-6 py-8">
        <div className="space-y-4">
          <Link href="/#contact">
            <a onClick={onClose} className="block  ">
              <Button className="block w-full" variant="outlined" size="small">
                Nous contacter
              </Button>
            </a>
          </Link>
          <Link href="/devenir-membre">
            <a onClick={onClose} className="block">
              <Button variant="default" size="small" className="w-full">
                Devenir member
              </Button>
            </a>
          </Link>
        </div>

        <Accordion.Root type="multiple">
          <div className="mt-8 divide-y divide-gray-200">
            {[
              {
                title: 'ASDI',
                link: undefined,
                children: [
                  { title: 'Historique', link: '/asdi-historique' },
                  { title: 'Mission', link: '/asdi-mission' },
                  { title: 'Équipe', link: '/asdi-équipe' },
                ],
              },
              {
                title: 'Carrière',
                children: [
                  {
                    title: 'Devenir Employé',
                    link: '/carriere-devenir-employé',
                  },
                  {
                    title: 'Devenir Bénévole',
                    link: '/carriere-devenir-bénévol',
                  },
                ],
              },
              {
                title: 'Activités',
                link: '/activités',
                children: [],
              },
              {
                title: 'Informations',
                link: undefined,
                children: [
                  {
                    title: 'La déficience intellectuelle',
                    link: '/infos-déficience-intellectuelle',
                  },
                  {
                    title: 'Partenaires',
                    link: '/infos-partenaires',
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
                  <Accordion.Trigger className="flex w-full items-center justify-between py-4 font-semibold text-gray-700">
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
                  <Accordion.Content className="accordion overflow-hidden text-gray-500">
                    {item.children.map((menu) => (
                      <div
                        key={menu.link}
                        className="mb-2.5 py-1 text-gray-500"
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
