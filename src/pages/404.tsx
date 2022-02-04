import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

function NotFound({}) {
  return (
    <article className="w-full py-8 md:py-16 px-4 sm:px-6 md:px-0 mx-auto max-w-3xl">
      <div className="font-bold text-indigo-500 mb-1.5 text-base tracking-wider">
        404 ERREUR
      </div>
      <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-5xl mb-6">
        Page non trouvée.
      </h1>
      <p className="text-gray-600 text-lg mb-16">
        Désolé, nous n{"'"}avons pas pu trouver la page que vous recherchez.
      </p>
      <Link href="/">
        <a className="text-lg flex items-center space-x-2 text-primary font-semibold group hover:underline">
          <span>Retourner vers l{"'"}acceuil</span>
          <ArrowRightIcon className="group-hover:translate-x-1.5 transition-transform" />
        </a>
      </Link>
    </article>
  )
}

export default NotFound
