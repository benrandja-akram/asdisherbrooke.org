/* eslint-disable @next/next/no-img-element */
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import Button from 'components/button'

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[2fr_1.3fr] gap-x-12 items-center bg-gray-50">
        <div className="flex-grow space-y-8 pl-16 py-24">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-6xl">
            Association de
            <br />
            Sherbrooke pour
            <br />
            <span className="text-indigo-600 inline-block mt-2">
              la déficience
              <br />
              intellectuelle
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl">
            Ipsum commodo consectetur exercitation et incididunt nulla commodo
            dolor aliqua cupidatat laboris velit esse mollit. Sunt duis proident
            quis nostrud. Voluptate excepteur aliquip sunt aute veniam proident
            duis adipisicing minim amet eu.
          </p>
          <div>
            <Link href="/devenir-membre">
              <a>
                <Button size="large">Become Member</Button>
              </a>
            </Link>
          </div>
        </div>
        <div className="h-full space-y-6">
          <img
            alt=""
            src="https://canalm.vuesetvoix.com/app/uploads/2018/03/shutterstock_527001838-825x550.jpg"
            className="h-full object-cover"
          />
        </div>
      </div>
      <div className="py-24 px-16 grid grid-cols-2 gap-x-16">
        <div className="flex justify-end">
          <div>
            <img
              alt=""
              src="https://hizy.org/sn_uploads/article/iStock_73817433_SMALL.jpg?maxh=1520px&maxw=1520px"
              className="object-cover rounded-2xl max-w-[620px] opacity-80"
            />
          </div>
        </div>
        <div className="divide-y divide-gray-100 space-y-6 max-w-[600px]">
          <div className="space-y-6">
            <h1 className="tracking-tight font-extrabold text-gray-900 text-4xl">
              Our Mission
            </h1>
            <p className="text-gray-500 text-lg">
              L{"'"}Association de Sherbrooke pour la déficience intellectuelle
              est une association de parents créée dans le but de promouvoir
              l’intégration et la participation sociales, de favoriser le
              bien-être et de faire la promotion des droits des personnes ayant
              une déficience intellectuelle et de leurs familles. En ayant l
              {"'"}intégration des personnes ayant une déficience intellectuelle
              au coeur de nos préoccupations, notre travail s{"'"}oriente vers
              les cinq volets suivants.
            </p>
            <p className="text-gray-500 text-lg">
              Les personnes pouvant être membres de l{"'"}Association de
              Sherbrooke pour la déficience intellectuelle inc. sont les parents
              d{"'"}enfants ayant une déficience intellectuelle, les personnes
              ayant une déficience intellectuelle, les responsables de
              ressources de type familiale, les intervenants, les organismes
              ainsi que toute personne démontrant un intérêt pour la déficience
              intellectuelle.
            </p>
          </div>
          <div className="grid grid-cols-2 pt-6">
            <div className="space-y-1.5">
              <div className="font-semibold text-gray-500 text-sm">Members</div>
              <div className="font-extrabold text-3xl">2056</div>
            </div>
            <div className="space-y-1.5">
              <div className="font-semibold text-gray-500 text-sm">Founded</div>
              <div className="font-extrabold text-3xl">23</div>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-6">
            <div className="space-y-1.5">
              <div className="font-semibold text-gray-500 text-sm">
                Activities
              </div>
              <div className="font-extrabold text-3xl">290</div>
            </div>
            <div className="space-y-1.5">
              <div className="font-semibold text-gray-500 text-sm">Founded</div>
              <div className="font-extrabold text-3xl">34</div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-50 flex items-center justify-center flex-col">
        <h2 className="tracking-tight font-extrabold text-gray-900 text-4xl">
          Do you want to join us?
        </h2>
        <p className="mb-8 mt-2 max-w-[550px] text-center text-gray-600">
          Aliqua non eu reprehenderit esse excepteur sint. Aliqua non eu
          reprehenderit esse excepteur sint.
        </p>
        <div className="space-x-6">
          <Link href="/devenir-membre">
            <a>
              <Button size="large">Devenir un membre</Button>
            </a>
          </Link>
          <Link href="/devenir-benevol">
            <a>
              <Button size="large" color="secondary">
                Devenir un benevol
              </Button>{' '}
            </a>
          </Link>
        </div>
      </div>
      <div className="py-20 flex items-center justify-center flex-col">
        <h2 className="tracking-tight font-extrabold text-gray-900 text-4xl mb-12">
          Frequently asked questions
        </h2>

        <div className="w-[824px] max-w-[824px]">
          <Accordion.Root collapsible type="single">
            <div className="divide-y divide-gray-100">
              {Array(5)
                .fill({})
                .map((_, i) => (
                  <Accordion.Item
                    className="py-4 outline-none"
                    key={i}
                    value={i.toString()}
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="flex items-center w-full justify-between text-gray-700 font-semibold py-2">
                        <span className="text-lg">
                          What is the best thing about ASDI?
                        </span>
                        <ChevronDownIcon />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="accordion text-gray-500 overflow-hidden space-y-3">
                      <p>
                        Cupidatat aute ipsum sint duis commodo esse deserunt
                        proident veniam ex duis reprehenderit mollit. Laborum
                        dolore cupidatat cupidatat enim. Laboris culpa qui esse
                        commodo velit laboris anim fugiat ea do dolore. Proident
                        magna fugiat et labore labore reprehenderit laboris
                        exercitation sunt nulla sint laborum consectetur et.
                      </p>
                      <p>
                        Excepteur pariatur eu aliquip ut aute et dolore.
                        Consequat et consequat in esse cillum aute elit mollit
                        fugiat ut enim mollit nostrud officia. Laborum
                        consectetur amet nostrud veniam aliquip. Duis
                        reprehenderit proident qui do.
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
            </div>
          </Accordion.Root>
        </div>
      </div>
    </>
  )
}
