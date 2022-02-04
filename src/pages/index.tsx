/* eslint-disable @next/next/no-img-element */
import * as Accordion from '@radix-ui/react-accordion'
import {
  ArrowRightIcon,
  ChevronDownIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

import Button from 'components/button'
import Input from 'components/input'
import Textarea from 'components/textarea'
import Image from 'next/image'
import Seo from 'components/seo'

function Member({ name, job }: { name: string; job: string }) {
  return (
    <div className="grid grid-cols-[auto_2fr] items-center gap-8">
      <img
        className="h-20 w-20 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghSGsSSG2lZU9fuWAm4vrrmPAV15hrLius3_0Z7C45QrYf17F2x7VzrdT1XVXMV-z4EM&usqp=CAU"
        alt="user avatar"
      />
      <div className="space-y-1 font-semibold">
        <p className="text-lg">{name}</p>
        <p className="text-primary">{job}</p>
      </div>
    </div>
  )
}
export default function Home() {
  return (
    <>
      <Seo
        image="https://canalm.vuesetvoix.com/app/uploads/2018/03/shutterstock_527001838-825x550.jpg"
        description="L’Association de Sherbrooke pour la déficience intellectuelle est
            une association de parents créée dans le but de promouvoir
            l’intégration et la participation sociales, de favoriser le
            bien-être et de faire la promotion des droits des personnes ayant
            une déficience intellectuelle et de leurs familles."
        title="ASDI: Association de Sherbrooke pour la déficience intellectuelle"
      />
      <div className="grid items-center justify-center gap-x-12 bg-gray-50 px-4 sm:px-6 lg:grid-cols-[2fr_1.3fr] lg:justify-start lg:px-0">
        <div className="flex flex-grow flex-col items-center space-y-8 py-12 lg:items-start lg:py-24 lg:pl-16">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-left">
            Association de
            <br />
            Sherbrooke pour
            <br />
            <span className="mt-2 inline-block text-primary">
              la déficience
              <br />
              intellectuelle
            </span>
          </h1>
          <p className="w-full max-w-xl text-center text-lg text-gray-500 lg:text-left">
            L’Association de Sherbrooke pour la déficience intellectuelle est
            une association de parents créée dans le but de promouvoir
            l’intégration et la participation sociales, de favoriser le
            bien-être et de faire la promotion des droits des personnes ayant
            une déficience intellectuelle et de leurs familles.
          </p>
          <div className="w-full sm:w-auto">
            <Link href="/devenir-membre">
              <a>
                <Button size="large" className="w-full sm:w-auto">
                  Devenir membre
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden h-full space-y-6 lg:block">
          <img
            alt=""
            src="https://canalm.vuesetvoix.com/app/uploads/2018/03/shutterstock_527001838-825x550.jpg"
            className="h-full object-cover"
          />
        </div>
      </div>
      <div className="grid gap-x-16 py-12 px-4 sm:px-6 md:px-16 lg:grid-cols-2 lg:py-20">
        <div className="hidden justify-end lg:flex">
          <div>
            <img
              alt=""
              src="https://hizy.org/sn_uploads/article/iStock_73817433_SMALL.jpg?maxh=1520px&maxw=1520px"
              className="w-full max-w-xl rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="space-y-6 divide-y divide-gray-100 lg:max-w-[600px]">
          <div className="space-y-6">
            <h1 className="mt-4  text-center text-4xl font-extrabold tracking-tight text-gray-900 lg:text-left">
              Nos Actions
            </h1>

            <p className="text-lg text-gray-500">
              Depuis plusieurs années, nous soutenons plus de 350 membres actifs
              vivant avec une déficience intellectuelle. Nous offrons
              principalement à nos membres une programmation d’activités
              adaptées durant toute l’année (été-automne-hiver). Ceci représente
              plus de 350 rencontres donnant accès à des activités sportives,
              culturelles, sociales ou récréotouristiques. La participation
              s’élève à plus de 11 000 présences annuellement.
            </p>
            <p className="text-lg text-gray-500">
              Divers autres services et projets particuliers sont aussi
              articulés, sans compter nos actions de sensibilisation et de
              promotion des droits. De plus, l’ASDI entretient des partenariats
              avec plus d’une vingtaine d’autres organisations annuellement.
            </p>
            <p className="text-lg text-gray-500">
              L’ASDI a un impact incalculable sur la santé globale de ses
              membres et de leurs familles ou leurs proches. Elle demeure une
              organisation reconnue dans son milieu et essentielle pour soutenir
              l’intégration des personnes vivant avec une déficience
              intellectuelle.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className=" space-y-1.5">
              <div className="text-sm font-semibold text-gray-500">
                Fondé en
              </div>
              <div className="text-3xl font-extrabold">1965</div>
            </div>
            <div className="space-y-1.5">
              <div className="text-sm font-semibold text-gray-500">Membres</div>
              <div className="text-3xl font-extrabold">+350</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-6">
            <div className="space-y-1.5">
              <div className="text-sm font-semibold text-gray-500">
                Nombres de rencontres annuelles
              </div>
              <div className="text-3xl font-extrabold">+350</div>
            </div>
            <div className="space-y-1.5">
              <div className="text-sm font-semibold text-gray-500">
                Nombres de présences annuelles
              </div>
              <div className="text-3xl font-extrabold">+11000</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-12 bg-gray-50 px-4 py-12 sm:px-6 md:px-16 lg:grid-cols-[1fr_2.5fr] lg:gap-24 lg:py-20">
        <div className="space-y-4">
          <h2 className="mt-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 lg:text-left">
            Notre équipe
          </h2>
          <p className="text-center text-lg text-gray-500 lg:text-left">
            Notre équipe dynamique est composée de personnes dévouées ayant à
            cœur le bien-être des membres et elles se feront un plaisir de vous
            soutenir.
          </p>
          <Link href={'/asdi-équipe'}>
            <a className="group flex items-center justify-center space-x-1.5 text-lg font-semibold text-primary-dark hover:underline lg:justify-start">
              <span>Voir notre équipe au complet</span>
              <ArrowRightIcon
                width={22}
                className="ml-1 inline-block transition-transform group-hover:translate-x-1"
              />
            </a>
          </Link>
        </div>
        <div className="grid justify-center gap-6 sm:grid-cols-2 sm:justify-start lg:gap-12 2xl:grid-cols-3">
          <Member name="Josée Vincent" job="Directrice générale" />
          <Member name="Brigitte Blanchard" job="Coordonnatrice des services" />
          <Member name="Karianne Beauchemin" job="Intervenante" />
          <Member name="Débora Demers" job="Intervenante" />
          <Member name="Nancy Gosselin" job="Adjointe administrative" />
        </div>
      </div>
      <div className="mx-4 flex flex-col items-center justify-center border-b border-gray-100 bg-white py-12 sm:mx-6 md:mx-16 lg:py-20">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900">
          Devenez membre de notre équipe
        </h2>
        <p className="mb-8 mt-2 max-w-[550px] text-center text-lg text-gray-600">
          Tu es à la recherche d’une expérience stimulante et valorisante.
          Joins-toi à nous!
        </p>
        <div className="grid w-full gap-6 sm:w-auto sm:grid-cols-2 lg:gap-8">
          <Link href="/devenir-membre">
            <a>
              <Button size="large" className="w-full sm:w-auto">
                Devenir membre
              </Button>
            </a>
          </Link>
          <Link href="/carriere-devenir-bénévol">
            <a>
              <Button
                size="large"
                color="secondary"
                className="w-full sm:w-auto"
              >
                Devenir bénévole
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div
        id="contact"
        className="grid gap-12 bg-white px-4 py-12 sm:px-6 md:px-16 lg:grid-cols-[1fr_2.5fr] lg:gap-24 lg:py-20"
      >
        <div>
          <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 lg:text-left">
            Nous contacter
          </h2>
          <p className="mt-4 text-center text-lg text-gray-500 lg:text-left">
            Si vous désirez, venez nous visiter. Il est toujours préférable de
            nous appeler au préalable.
          </p>
        </div>
        <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:gap-y-12">
          <div>
            <h4 className="mb-2.5 text-lg font-bold">En personne</h4>
            <p className="text-gray-500">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://map.google.com"
                className="text-gray-500 underline hover:text-primary"
              >
                2065, rue Belvédère Sud <br /> Sherbrooke (Québec) <br /> J1H
                5R8
              </a>
            </p>
          </div>
          <div>
            <h4 className="mb-2.5 text-lg font-bold">Nos heures d’ouverture</h4>
            <p className="text-gray-500">
              Du lundi au vendredi de 9h à 12h de 13h à 16h30
            </p>
          </div>
          <div>
            <h4 className="mb-2.5 text-lg font-bold">Par téléphone</h4>
            <p className="text-gray-500">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="tel:819 346-2227"
                className="text-gray-500 underline hover:text-primary"
              >
                819 346-2227
              </a>
              <br />
              <span className="font-semibold">Télécopieur: </span>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="tel:819 346-8752"
                className="text-gray-500 underline hover:text-primary"
              >
                819 346-8752
              </a>
            </p>
          </div>
          <div>
            <h4 className="mb-2.5 text-lg font-bold">Par courriel</h4>
            <a
              href="mailto:info@asdisherbrooke.org"
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-500 underline hover:text-primary"
            >
              info@asdisherbrooke.org
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

const phone = (
  <svg
    viewBox="0 0 122.88 122.267"
    enableBackground="new 0 0 122.88 122.267"
    className="h-5 w-5 fill-gray-600"
  >
    <g>
      <path d="M33.822,50.291c4.137,7.442,8.898,14.604,15.074,21.133C55.1,77.984,62.782,83.962,72.771,89.03l0.01,0.005l0.002-0.005 c0.728,0.371,1.421,0.362,2.072,0.118c0.944-0.353,1.927-1.137,2.883-2.086c0.729-0.726,1.643-1.924,2.631-3.223 c3.846-5.054,8.601-11.301,15.314-8.193c0.142,0.065,0.276,0.141,0.402,0.226l22.373,12.852c0.08,0.046,0.157,0.095,0.23,0.147 c2.966,2.036,4.177,5.172,4.19,8.683c0.014,3.621-1.329,7.674-3.274,11.101c-2.565,4.517-6.387,7.502-10.761,9.525 c-4.17,1.928-8.798,2.954-13.267,3.608c-6.989,1.025-13.578,0.374-20.288-1.692c-6.55-2.017-13.176-5.385-20.4-9.86l-0.526-0.326 c-3.326-2.06-6.906-4.276-10.389-6.904C31.108,93.296,18.007,79.283,9.512,63.904C2.361,50.958-1.552,36.995,0.581,23.681 C1.75,16.375,4.901,9.743,10.333,5.35c4.762-3.853,11.188-5.94,19.448-5.203c0.973,0.084,1.793,0.639,2.255,1.419l0.006-0.003 l14.324,24.27c2.11,2.718,2.344,5.415,1.203,8.096c-0.943,2.218-2.892,4.251-5.476,6.168c-0.786,0.65-1.708,1.325-2.659,2.021 C36.236,44.459,32.578,47.136,33.822,50.291L33.822,50.291z M44.67,75.422C38.066,68.44,33.035,60.88,28.695,53.065 c-0.076-0.123-0.144-0.253-0.202-0.39c-3.174-7.459,2.52-11.625,7.493-15.262c0.845-0.618,1.663-1.217,2.401-1.829l0.002,0.003 c0.043-0.036,0.088-0.071,0.135-0.105c1.843-1.354,3.171-2.647,3.678-3.837c0.289-0.679,0.182-1.426-0.466-2.265 c-0.111-0.129-0.213-0.271-0.303-0.423L27.795,5.852c-5.869-0.241-10.419,1.321-13.784,4.044 c-4.239,3.429-6.723,8.759-7.674,14.699c-1.905,11.894,1.716,24.594,8.292,36.5c8.078,14.623,20.575,27.977,32.864,37.25 c3.379,2.55,6.776,4.653,9.932,6.607l0.526,0.326c6.818,4.223,13.017,7.386,19.052,9.244c5.876,1.809,11.634,2.38,17.729,1.486 c4.009-0.587,8.113-1.485,11.668-3.129c3.351-1.55,6.248-3.785,8.134-7.104c1.496-2.637,2.53-5.653,2.521-8.222 c-0.006-1.63-0.472-3.029-1.605-3.844L93.2,80.93c-2.461-1.081-5.629,3.081-8.193,6.45c-1.104,1.452-2.125,2.792-3.156,3.817 c-1.477,1.466-3.118,2.723-4.962,3.411c-2.136,0.799-4.395,0.834-6.755-0.37l0.002-0.004C59.522,88.849,51.323,82.457,44.67,75.422 L44.67,75.422z" />
    </g>
  </svg>
)
