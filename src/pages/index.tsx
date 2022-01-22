/* eslint-disable @next/next/no-img-element */
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import Button from 'components/button'
import Input from 'components/input'
import Textarea from 'components/textarea'

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-[2fr_1.3fr] gap-x-12 items-center justify-center lg:justify-start bg-gray-50">
        <div className="flex flex-col items-center lg:items-start flex-grow space-y-8 lg:pl-16 py-24">
          <h1 className="tracking-tight text-center lg:text-left font-extrabold text-gray-900 text-5xl md:text-6xl">
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
          <p className="text-lg text-center lg:text-left text-gray-500 w-full max-w-xl">
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
        <div className="hidden lg:block h-full space-y-6">
          <img
            alt=""
            src="https://canalm.vuesetvoix.com/app/uploads/2018/03/shutterstock_527001838-825x550.jpg"
            className="h-full object-cover"
          />
        </div>
      </div>
      <div className="py-24 px-16 grid lg:grid-cols-2 gap-x-16">
        <div className="hidden lg:flex justify-end">
          <div>
            <img
              alt=""
              src="https://hizy.org/sn_uploads/article/iStock_73817433_SMALL.jpg?maxh=1520px&maxw=1520px"
              className="object-cover rounded-2xl w-full max-w-xl"
            />
          </div>
        </div>
        <div className="divide-y divide-gray-100 space-y-6 lg:max-w-[600px]">
          <div className="space-y-6">
            <h1 className="tracking-tight font-extrabold text-gray-900 text-4xl text-center lg:text-left">
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
      <div className="px-4 sm:px-6 md:px-16 py-20 bg-gray-50 grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24">
        <div className="space-y-4">
          <h2 className="tracking-tight font-extrabold text-gray-900 text-4xl text-center lg:text-left">
            Meet our leadership
          </h2>
          <p className="text-gray-500 text-lg text-center lg:text-left">
            Occaecat labore fugiat cupidatat consequat incididunt nulla
            exercitation ipsum aute pariatur commodo. Qui ullamco ipsum est
            fugiat eiusmod aute elit anim fugiat mollit.
          </p>
        </div>
        <div className="grid justify-center sm:justify-start sm:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-12">
          {Array(8)
            .fill({})
            .map((_, i) => (
              <div
                className="grid grid-cols-[auto_2fr] gap-8 items-center"
                key={i}
              >
                <img
                  className="w-20 h-20 rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghSGsSSG2lZU9fuWAm4vrrmPAV15hrLius3_0Z7C45QrYf17F2x7VzrdT1XVXMV-z4EM&usqp=CAU"
                  alt="user avatar"
                />
                <div className="space-y-1 font-semibold">
                  <p className="text-lg">Leslie Alexander</p>
                  <p className="text-indigo-600">Co-Founder / CEO</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-16 py-20 bg-white flex items-center justify-center flex-col">
        <h2 className="tracking-tight font-extrabold text-gray-900 text-4xl">
          Do you want to join us?
        </h2>
        <p className="mb-8 mt-2 max-w-[550px] text-center text-gray-600">
          Aliqua non eu reprehenderit esse excepteur sint. Aliqua non eu
          reprehenderit esse excepteur sint.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-12">
          <Link href="/devenir-membre">
            <a>
              <Button size="large">Devenir un membre</Button>
            </a>
          </Link>
          <Link href="/devenir-benevol">
            <a>
              <Button size="large" color="secondary">
                Devenir un benevol
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-16 lg:pt-8 pb-20 bg-white grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24">
        <div>
          <h2 className="tracking-tight font-extrabold text-gray-900 text-4xl text-center lg:text-left">
            Get in touch
          </h2>
          <p className="text-gray-500 text-lg mt-4 text-center lg:text-left">
            Occaecat labore fugiat cupidatat consequat incididunt nulla
            exercitation ipsum aute pariatur commodo.
          </p>
          <div className="mt-10 space-y-6 text-center lg:text-left">
            <p className="text-gray-500 text-lg">
              Pavilion 2 1308 de Portland Blvd.
              <br />
              Sherbrooke, Québec Canada
              <br />
              J1J 1S3
            </p>
            <div className="space-y-2 flex flex-col items-center lg:items-start ">
              <div className="flex items-center space-x-4 text-gray-500 ">
                {phone}
                <a
                  href="tel:(819) 346-2227"
                  className="font-semibold hover:text-indigo-600 hover:underline"
                >
                  (819) 346-2227
                </a>
              </div>
              <div className="flex items-center space-x-4 text-gray-500">
                <EnvelopeClosedIcon className="w-5 h-5 fill-gray-300" />
                <a
                  href="mailto:support@asdi.com"
                  className="font-semibold hover:text-indigo-600 hover:underline "
                >
                  support@asdi.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <form className="space-y-6 w-full max-w-3xl">
            <Input placeholder="Write your name" type="text" title="Name" />
            <Input placeholder="Write your email" type="text" title="Email" />
            <Input
              placeholder="Write your phone number"
              type="text"
              title="Phone Number"
            />
            <Textarea
              placeholder="Write your phone message"
              title="Message"
              rows={6}
            />
            <Button size="large" className="w-full sm:w-auto">
              Soumettre
            </Button>
          </form>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-16 py-20 flex items-center justify-center flex-col bg-gray-50">
        <h2 className="tracking-tight font-extrabold text-gray-900 text-4xl mb-12">
          Frequently asked questions
        </h2>

        <div className="w-full max-w-[824px]">
          <Accordion.Root collapsible type="single">
            <div className="divide-y divide-gray-200">
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
                        <ChevronDownIcon className="h-5 w-5" />
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
