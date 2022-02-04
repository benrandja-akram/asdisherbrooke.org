/* eslint-disable @next/next/no-img-element */
import {
  ArrowRightIcon,
  ChevronDownIcon,
  Cross2Icon,
  HamburgerMenuIcon,
  Link2Icon,
} from '@radix-ui/react-icons'
import Button from 'components/button'
import Dropdown from 'components/dropdown-menu'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import MobileMenu from './mobile-menu'

interface Props {
  variant?: 'default' | 'content'
}
const Layout: React.FC<Props> = ({ children, variant = 'default' }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const router = useRouter()
  return (
    <div>
      <div className="relative hidden md:block">
        <img alt="" src="/banner.jpg" height={48} className="h-12" />
        <div className="absolute inset-0 flex items-center justify-center space-x-4 font-semibold text-white">
          <span>Nouvelle instruction concernant la COVID19</span>
          <Link href="/covid-19">
            <a className="inline-flex items-center space-x-1.5 rounded bg-white px-3 py-1 font-semibold tracking-tight text-primary-dark">
              <span>Learn more</span>
              <ArrowRightIcon />
            </a>
          </Link>
        </div>
      </div>
      <header
        className="sticky top-0 z-40 flex h-16 items-center justify-between bg-white/90 px-4 shadow sm:px-6 md:px-16"
        style={{
          backdropFilter: 'saturate(180%) blur(5px)',
        }}
      >
        <Link href="/">{logo}</Link>
        <nav className="hidden items-center justify-between space-x-12 md:flex">
          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <a className="flex cursor-pointer items-center space-x-2 font-semibold text-gray-500 transition-colors hover:text-primary-dark">
                <span>ASDI</span>
                <ChevronDownIcon />
              </a>
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
              <a className="flex cursor-pointer items-center space-x-2 font-semibold text-gray-500 transition-colors hover:text-primary-dark">
                <span>Carrière</span>
                <ChevronDownIcon />
              </a>
            </Dropdown.Trigger>
            <Dropdown.Content sideOffset={16} align="center">
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
            <a className="flex cursor-pointer items-center space-x-2 font-semibold text-gray-500 transition-colors hover:text-primary-dark hover:underline">
              Activités
            </a>
          </Link>

          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <a className="flex cursor-pointer items-center space-x-2 font-semibold text-gray-500 transition-colors hover:text-primary-dark">
                <span>Informations</span>
                <ChevronDownIcon />
              </a>
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
            <a>
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
        <article className="prose mx-auto w-full py-8 px-4 prose-img:w-full prose-img:rounded-2xl sm:px-6 md:py-16 md:px-0 xl:prose-lg">
          {children}
        </article>
      )}
    </div>
  )
}

const logo = (
  <svg fill="none" viewBox="0 0 35 32" className="h-9 w-9 cursor-pointer">
    <path
      fill="#4f46e5"
      d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"
    />
    <path
      fill="#4f46e5"
      d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
    />
  </svg>
)

export default Layout
