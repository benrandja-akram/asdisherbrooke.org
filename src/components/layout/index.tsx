/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  ArrowRightIcon,
  ChevronDownIcon,
  Cross2Icon,
  HamburgerMenuIcon,
  Link2Icon,
} from '@radix-ui/react-icons'
import Button from 'components/button'
import Dropdown from 'components/dropdown-menu'
import MobileMenu from './mobile-menu'

import logo from '../../../public/logo.png'
interface Props {
  variant?: 'default' | 'content'
}
const Layout: React.FC<Props> = ({ children, variant = 'default' }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const router = useRouter()
  return (
    <div>
      {!showMobileMenu && (
        <div className="flex min-h-[48px] items-center justify-center bg-primary px-4 py-2">
          <div className="space-y-2 text-center text-sm font-semibold text-white sm:flex-row sm:space-x-4 sm:space-y-0">
            <span className="mr-2">
              Nouvelle instruction concernant la COVID19
            </span>
            <Link href="/covid-19">
              <a className="group inline-flex items-center space-x-1.5 rounded bg-white px-3 py-1 font-semibold tracking-tight text-primary-dark">
                <span>Plus d{"'"}infos</span>
                <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
              </a>
            </Link>
          </div>
        </div>
      )}
      <header
        className="sticky top-0 z-40 flex h-16 items-center justify-between bg-white/90 px-4 shadow sm:px-6 md:px-16"
        style={{
          backdropFilter: 'saturate(180%) blur(5px)',
        }}
      >
        <Link href="/">
          <a className="inline-flex">
            <Image alt="logo" src={logo} width={81} height={48} />
          </a>
        </Link>

        <nav className="hidden items-center justify-between space-x-6 md:flex xl:space-x-10">
          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <span className="flex cursor-pointer items-center space-x-2 font-semibold text-gray-500 transition-colors hover:text-primary-dark">
                <span>ASDI</span>
                <ChevronDownIcon />
              </span>
            </Dropdown.Trigger>
            <Dropdown.Content sideOffset={16} align="center">
              <Dropdown.Item onSelect={() => router.push('/asdi-historique')}>
                <Link2Icon className="h-3.5 w-3.5 opacity-75" />
                <span>Historique</span>
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => router.push('/asdi-mission')}>
                <Link2Icon className="h-3.5 w-3.5 opacity-75" />
                <span>Mission</span>
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => router.push('/asdi-équipe')}>
                <Link2Icon className="h-3.5 w-3.5 opacity-75" />
                <span>Équipe</span>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <span className="flex cursor-pointer items-center space-x-2 font-semibold text-gray-500 transition-colors hover:text-primary-dark">
                <span>Carrière</span>
                <ChevronDownIcon />
              </span>
            </Dropdown.Trigger>

            <Dropdown.Content sideOffset={16} align="center">
              <Dropdown.Item onSelect={() => router.push('/devenir-membre')}>
                <Link2Icon className="h-3.5 w-3.5 opacity-75" />
                <span>Devenir membre</span>
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => router.push('/carriere-devenir-employé')}
              >
                <Link2Icon className="h-3.5 w-3.5 opacity-75" />
                <span>Devenir Employé</span>
              </Dropdown.Item>
              <Dropdown.Item
                onSelect={() => router.push('/carriere-devenir-bénévol')}
              >
                <Link2Icon className="h-3.5 w-3.5 opacity-75" />
                <span>Devenir Bénévole</span>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
          <Link href="/activités">
            <span className="flex cursor-pointer items-center space-x-2 font-semibold text-gray-500 transition-colors hover:text-primary-dark hover:underline">
              Activités
            </span>
          </Link>

          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <span className="flex cursor-pointer items-center space-x-2 font-semibold text-gray-500 transition-colors hover:text-primary-dark">
                <span>Informations</span>
                <ChevronDownIcon />
              </span>
            </Dropdown.Trigger>
            <Dropdown.Content sideOffset={16} align="center">
              <Dropdown.Item
                onSelect={() => router.push('/infos-déficience-intellectuelle')}
              >
                <Link2Icon className="h-3.5 w-3.5 opacity-75" />
                <span>La déficience intellectuelle</span>
              </Dropdown.Item>
              <Dropdown.Item onSelect={() => router.push('/infos-partenaires')}>
                <Link2Icon className="h-3.5 w-3.5 opacity-75" />
                <span>Partenaires</span>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </nav>
        <div className="hidden space-x-3 lg:inline-block">
          <Link href="/#contact">
            <a className="hidden xl:inline">
              <Button variant="link" size="small">
                Nous contacter
              </Button>
            </a>
          </Link>
          <Link href="/dons">
            <a>
              <Button variant="outlined" size="small">
                Donner à l’ASDI
              </Button>
            </a>
          </Link>
        </div>
        {showMobileMenu ? (
          <Cross2Icon
            className="block h-8 w-8 md:hidden"
            onClick={() => setShowMobileMenu(false)}
          />
        ) : (
          <HamburgerMenuIcon
            className="block h-8 w-8 md:hidden"
            onClick={() => setShowMobileMenu(true)}
          />
        )}
      </header>
      {showMobileMenu && (
        <MobileMenu onClose={() => setShowMobileMenu(false)} />
      )}
      {variant === 'default' && children}
      {variant === 'content' && (
        <article className="prose mx-auto w-full py-8 px-4 prose-a:text-primary prose-img:w-full prose-img:rounded-2xl sm:px-6 md:py-16 md:px-0 xl:prose-lg">
          {children}
        </article>
      )}
    </div>
  )
}

export default Layout
