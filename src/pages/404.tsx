import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

function NotFound({}) {
  return (
    <article className="mx-auto w-full max-w-3xl py-8 px-4 sm:px-6 md:py-16 md:px-0">
      <div className="mb-1.5 text-base font-bold tracking-wider text-primary-light">
        404 ERREUR
      </div>
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-xl md:text-5xl">
        Page non trouvée.
      </h1>
      <p className="mb-16 text-lg text-gray-600">
        Désolé, nous n{"'"}avons pas pu trouver la page que vous recherchez.
      </p>
      <Link href="/">
        <a className="group flex items-center space-x-2 text-lg font-semibold text-primary hover:underline">
          <span>Retourner vers l{"'"}acceuil</span>
          <ArrowRightIcon className="transition-transform group-hover:translate-x-1.5" />
        </a>
      </Link>
    </article>
  )
}

export default NotFound
