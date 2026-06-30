import { Link, useRouterState } from '@tanstack/react-router'
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Landmark,
  Mail,
  Microscope,
  UsersRound,
} from 'lucide-react'
import { type ReactNode } from 'react'

const tabs = [
  { to: '/', label: 'Home' },
  { to: '/mission', label: 'Mission' },
  { to: '/history', label: 'History' },
  { to: '/conferences', label: 'Conferences' },
  { to: '/board', label: 'Board Members' },
  { to: '/contact', label: 'Contact' },
] as const

export function FoundationLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname })

  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <header className="sticky top-0 z-20 border-b border-[var(--line)] bg-[rgba(247,244,237,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-full bg-[var(--ink)] text-[var(--paper)]">
              <Microscope size={22} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                The Charles and Patricia
              </span>
              <span className="font-serif text-xl leading-none">Heidelberger Foundation</span>
            </span>
          </Link>

          <nav className="flex gap-2 overflow-x-auto pb-1" aria-label="Primary">
            {tabs.map((tab) => (
              <Link
                key={tab.to}
                to={tab.to}
                className={`tab-button ${pathname === tab.to ? 'is-active' : ''}`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {children}
    </main>
  )
}

export function HomePage() {
  return (
    <FoundationLayout>
      <section className="hero-grid mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-16">
        <div className="hero-copy">
          <p className="eyebrow">Research, fellowship, and scientific exchange</p>
          <h1>The Charles and Patricia Heidelberger Foundation for Cancer Research</h1>
          <p className="hero-lede">
            Through its support of scientific symposia and collaborations, the Charles and Patricia Heidelberger
            Foundation remains steadfast in its mission to nurture the next generation of cancer researchers and
            contribute meaningfully to the global effort against cancer.
          </p>
          <div className="hero-actions">
            <Link to="/mission" className="primary-action">
              Explore the mission <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link to="/contact" className="secondary-action">
              Contact the foundation
            </Link>
          </div>
        </div>

        <aside className="founder-card" aria-label="Charles Heidelberger biography">
          <div className="founder-photo-wrap">
            <img
              src="/charles-heidelberger.png"
              alt="Portrait of Dr. Charles Heidelberger"
              className="founder-photo"
            />
          </div>
          <div className="founder-copy">
            <h2>Who was Charles Heidelberger?</h2>
            <p>
              Dr. Heidelberger was an internationally recognized leader in the field of cancer chemotherapy. He was a
              prolific researcher, authoring numerous scientific papers and mentoring over 80 postdoctoral fellows and
              graduate students from around the world. He served on committees of the National Cancer Institute and the
              American Association for Cancer Research, where he contributed to shaping cancer research policies and
              practices.
            </p>
          </div>
        </aside>
      </section>
    </FoundationLayout>
  )
}

export function MissionPage() {
  return (
    <FoundationLayout>
      <PageSection icon={<Landmark size={22} />} eyebrow="Mission" title="Supporting work that moves science forward.">
        <div className="mission-copy">
          <p className="medium-copy">
            Through its support of scientific symposia, research grants, and collaborations, the Charles and Patricia
            Heidelberger Foundation remains steadfast in its mission to nurture the next generation of cancer
            researchers and contribute meaningfully to the global effort against cancer.
          </p>
          <p className="small-copy">
            The Charles and Patricia Heidelberger Foundation for Cancer Research honors the scientific contributions of
            Professor Charles Heidelberger, a pioneering figure in cancer research, whose development of 5-fluorouracil
            (5-FU) remains a cornerstone in chemotherapy. His vision of collaborative research continues to drive the
            Foundation's efforts in fostering innovation and advancing the fight against cancer.
          </p>
        </div>
      </PageSection>
    </FoundationLayout>
  )
}

export function HistoryPage() {
  return (
    <FoundationLayout>
      <PageSection icon={<BookOpen size={22} />} eyebrow="History" title="A foundation shaped by scientific legacy.">
        <div className="history-copy">
          <p className="large-copy">
            Dr. Heidelberger was an influential leader in the field of cancer research. He is most famous for developing
            of the chemotherapy drug 5-fluorouracil (5-FU).
          </p>

          <section>
            <h3>Early Life</h3>
            <p>
              Dr Charles David Heidelberger was born on December 23, 1920, in New York City into a scientifically
              distinguished family. His father, Professor Michael Heidelberger, was a renowned immunochemist known as
              the "Father of Immunochemistry." Growing up in this intellectually vibrant environment, Charles was exposed
              to science from an early age, developing a keen interest in the natural sciences. His early education took
              place at the Birch-Wathen School, where he excelled academically and participated in music, drama, and
              journalism.
            </p>
            <p>
              Heidelberger was admitted to Harvard College in 1937, where he pursued a degree in chemistry, graduating
              with a Bachelor of Science in 1942. He continued his graduate studies at Harvard, earning a Master of
              Science (1944) and a Ph.D. in Organic Chemistry (1946) under the mentorship of Professors Louis and Mary
              Fieser, prominent chemists known for their work on carcinogenic compounds. His Ph.D. thesis, which focused
              on the synthesis of naphthoquinones, was influenced by war-related research efforts and laid the groundwork
              for his future studies in chemical carcinogenesis.
            </p>
          </section>

          <section>
            <h3>Postdoctoral Research and Early Career</h3>
            <p>
              After completing his PhD, Dr. Heidelberger joined the laboratory of Nobel laureate Melvin Calvin at the
              University of California, Berkeley, as a postdoctoral researcher. Here, he gained expertise in the use of
              radioactive isotopes to study metabolic processes, synthesizing the first radioactive carcinogen of the
              polycyclic aromatic hydrocarbon series, dibenz(a,h) anthracene, with carbon-14 labeling. His work at
              Berkeley sparked a lifelong interest in studying the mechanisms of chemical carcinogenesis, and he became
              well-versed in the use of carbon-14 as a tracer for studying metabolic reactions.
            </p>
            <p>
              In 1948, Heidelberger moved to the University of Wisconsin-Madison to join the McArdle Laboratory for
              Cancer Research, where he established his research group. His early work at McArdle focused on studying
              the metabolism of polycyclic aromatic hydrocarbons and their covalent binding to cellular macromolecules
              such as DNA, RNA, and proteins. These studies were instrumental in understanding the carcinogenic potential
              of these compounds and how they contribute to cancer development.
            </p>
          </section>

          <section>
            <h3>Contributions to Chemical Carcinogenesis</h3>
            <p>
              Dr Heidelberger's pioneering work in chemical carcinogenesis was foundational to the field. Using
              radiolabeled carcinogens, he and his research group were able to track how polycyclic aromatic
              hydrocarbons interacted with cells and how their binding to cellular macromolecules contributed to
              mutagenesis and cancer formation. One of his notable achievements was developing the permanent mouse embryo
              fibroblast cell line, C3H/10T1/2, which became a crucial model for studying chemical carcinogenesis and
              cellular transformation. This cell line allowed researchers to investigate how specific chemical compounds
              induce morphological and neoplastic transformations in cells.
            </p>
            <p>
              Heidelberger's research on the covalent binding of carcinogens to DNA provided critical insights into the
              mutagenic properties of these compounds and their role in the initiation of cancer. His studies contributed
              to a deeper understanding of how carcinogens are metabolized by the body and how they induce genetic
              mutations that lead to cancerous growths.
            </p>
          </section>

          <section>
            <h3>Development of 5-Fluorouracil and Contributions to Cancer Chemotherapy</h3>
            <p>
              Perhaps Dr Heidelberger's most significant and enduring contribution to cancer science was his development
              of the chemotherapy drug 5-fluorouracil (5-FU). Based on his understanding of the metabolic pathways of
              pyrimidines, Heidelberger hypothesized that a fluorinated derivative of uracil could inhibit thymidylate
              synthetase, an enzyme critical for DNA synthesis. This inhibition would prevent cancer cells from
              proliferating, as they rely heavily on rapid DNA synthesis for growth.
            </p>
            <p>
              In 1957, Dr Heidelberger successfully synthesized 5-FU, which was later shown to be effective in
              inhibiting the growth of various transplanted rodent tumors. The success of 5-FU in preclinical trials led
              to its widespread use in human clinical trials, where it proved to be an effective treatment for several
              cancers, including colorectal, breast, and gastrointestinal cancers. 5-FU remains a cornerstone of cancer
              chemotherapy to this day.
            </p>
            <p>
              In addition to 5-FU, Heidelberger's lab synthesized other fluorinated pyrimidines, such as
              5-fluorodeoxyuridine and 5-fluorocytosine, expanding the scope of chemotherapeutic agents. His research on
              these compounds not only revolutionized cancer treatment but also laid the groundwork for understanding the
              molecular mechanisms underlying chemotherapy's effects, particularly the inhibition of DNA synthesis in
              rapidly dividing cancer cells.
            </p>
          </section>

          <section>
            <h3>Research on Mammalian Cell Transformation</h3>
            <p>
              Dr Heidelberger also made significant contributions to understanding how chemical carcinogens induce
              malignant transformation in mammalian cells. Early in his career, he recognized the limitations of studying
              carcinogenesis in whole animals and turned to cell culture systems. His work with C3H mouse prostate organ
              cultures and later with the C3H/10T1/2 cell line allowed him to study the effects of carcinogens on cells
              in a controlled environment, leading to discoveries about the genetic and molecular changes that accompany
              cancer transformation.
            </p>
            <p>
              Heidelberger's research provided a model system for studying tumour initiation and promotion in vitro, and
              his cell transformation assays became widely adopted in the field. His studies showed a quantitative
              relationship between the carcinogenic potency of polycyclic aromatic hydrocarbons and their ability to
              induce malignant transformation in cultured cells.
            </p>
          </section>

          <section>
            <h3>Awards and Honors</h3>
            <p>
              Dr Heidelberger's contributions to cancer research earned him numerous prestigious awards and honours. In
              1978, he was elected to the U.S. National Academy of Sciences, a testament to his scientific achievements
              and his impact on cancer research. In 1982, he was awarded the inaugural Athayde International Cancer
              Prize, recognizing his contributions to cancer chemotherapy and his development of 5-fluorouracil. His
              peers recognized him as a leading figure in the field, and he was named the American Cancer Society's "1982
              Man of the Year."
            </p>
            <p>
              Other notable honours include the G.H.A. Clowes Award of the American Association for Cancer Research, the
              Walter Hubert Lecture of the British Association for Cancer Research, and the Lila Gruber Award of the
              American Academy of Dermatology.
            </p>
          </section>

          <section>
            <h3>Legacy and Final Years</h3>
            <p>
              Dr Heidelberger passed away on January 18, 1983, after battling nasal sinus cancer. Despite his illness, he
              continued his work in cancer research, driven by his desire to improve cancer treatment for future
              generations. His scientific legacy lives on through the many students and colleagues he mentored, the
              groundbreaking discoveries he made in chemical carcinogenesis and chemotherapy, and the enduring use of
              5-fluorouracil as a critical tool in cancer treatment.
            </p>
            <p>
              He is survived by his wife, Patricia, and their children, Nina, Philip, and Lisa, as well as his extended
              scientific family, who continue to build on the foundation he established in cancer research.
            </p>
          </section>
        </div>
      </PageSection>
    </FoundationLayout>
  )
}

export function ConferencesPage() {
  return (
    <FoundationLayout>
      <PageSection icon={<CalendarDays size={22} />} eyebrow="Conferences" title="The Heidelberger Foundation">
        <div className="conference-grid">
          <article>
            <p className="card-kicker">TESTING gathering</p>
            <h3>Heidelberger Foundation Conference</h3>
            <p>Use this section to announce dates, host institutions, speaker lists, and registration details.</p>
          </article>
          <article>
            <p className="card-kicker">Proceedings</p>
            <h3>Research presentations</h3>
            <p>Publish meeting themes, abstracts, invited talks, and post-conference materials for attendees.</p>
          </article>
          <article>
            <p className="card-kicker">Participation</p>
            <h3>Invitations and inquiries</h3>
            <p>Direct researchers, sponsors, and guests to the contact page for conference-related questions.</p>
          </article>
        </div>
      </PageSection>
    </FoundationLayout>
  )
}

export function BoardPage() {
  return (
    <FoundationLayout>
      <PageSection icon={<UsersRound size={22} />} eyebrow="Board Members" title="Governance with clear responsibility.">
        <div className="board-grid">
          {['Board Chair', 'Treasurer', 'Secretary', 'Scientific Advisor', 'Trustee', 'Trustee'].map((role) => (
            <article key={role} className="board-card">
              <span>{role}</span>
              <h3>Name to be added</h3>
              <p>Short biography, appointment information, or committee responsibilities can be added here.</p>
            </article>
          ))}
        </div>
      </PageSection>
    </FoundationLayout>
  )
}

export function ContactPage() {
  return (
    <FoundationLayout>
      <PageSection icon={<Mail size={22} />} eyebrow="Contact" title="Reach the foundation.">
        <div className="contact-note">
          <h3>
            Please contact wli@usc.edu for general inquiries, conference questions, or board correspondence.
          </h3>
        </div>
      </PageSection>
    </FoundationLayout>
  )
}

function PageSection({
  icon,
  eyebrow,
  title,
  children,
}: {
  icon: ReactNode
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="content-section page-section">
      <div className="section-heading">
        <span className="section-icon">{icon}</span>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}
