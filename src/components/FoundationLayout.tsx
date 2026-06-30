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
      {/* Split Hero Section with Background Photo */}
      <section 
        className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat py-12 px-5 flex items-center"
        style={{ 
          backgroundImage: "url('/heid1.png')" // Replace with your actual background photo file path in /public
        }}
      >
        {/* Subtle dark tint layer over the background image */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        {/* 2-Column Responsive Grid: Stacks on mobile, splits 50/50 on desktop */}
        <div className="relative z-10 mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
          
          {/* Translucent White Box Container (Now anchored strictly to the Left side) */}
          <div className="bg-white/70 border border-white/40 p-8 md:p-12 rounded-3xl shadow-xl flex flex-col items-start text-left gap-5">
            
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
              Research, fellowship, and scientific exchange
            </p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--ink)] leading-tight">
              The Charles and Patricia Heidelberger Foundation for Cancer Research
            </h1>
            
            <p className="text-base text-[var(--ink)] opacity-90 leading-relaxed font-sans">
              Through its support of scientific symposia and collaborations, the Charles and Patricia Heidelberger
              Foundation remains steadfast in its mission to nurture the next generation of cancer researchers and
              contribute meaningfully to the global effort against cancer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Link to="/mission" className="primary-action flex items-center justify-center gap-2">
                Explore the mission <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="secondary-action flex items-center justify-center">
                Contact the foundation
              </Link>
            </div>

          </div>

          {/* Empty Right Column: This empty space allows the background photo to show through clearly on desktop */}
          <div className="hidden md:block pointer-events-none" aria-hidden="true" />

        </div>
      </section>

      {/* Biography Section Below the Split Banner */}
      <section className="mx-auto max-w-7xl px-5 py-20">
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
      <PageSection icon={<CalendarDays size={22} />} eyebrow="Conferences" title="The Heidelberger Symposium">
        
        {/* Main Conference Grid - Removed borders, background cards, and extra padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Photo Column - Removed fixed height, centering wrappers, and background colors */}
          <div className="w-full">
            <img 
              src="/sympos.png" 
              alt="Scientific Conference Presentation" 
              className="w-full h-auto rounded-xl shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) parent.innerHTML = '<span class="text-sm text-[var(--muted)] uppercase tracking-wider font-medium">Conference Photo</span>';
              }}
            />
          </div>

          {/* Text Content on Right */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <article>
              <h4 className="text-xl font-serif mb-2">The Charles Heidelberger Symposia on Cancer Research (CHSCR) 
                have been supported in part by the Foundation, continuing its 
                vital role in bringing together leading cancer researchers around the world. The purpose of the Heidelberger 
                Symposium is to encourage information sharing, foster interdisciplinary collaboration, 
                and accelerate advancements in cancer research—carrying forward the legacy of Professor 
                Charles Heidelberger. These symposia serve as a platform for exploring cutting-edge research, 
                discussing novel therapeutic strategies, and expediting the translation of discoveries 
                from bench to bedside in the pursuit of eradicating human cancer.</h4>
            </article>
          </div>
        </div>

        {/* Previous Locations Text Box Section Below */}
        <div className="mt-12 border-t border-[var(--line)] pt-8 max-w-xl mx-auto flex flex-col items-start justify-center">
          <h3 className="text-xl font-serif text-[var(--ink)] mb-4 text-center w-full">
            To date, the symposium has been held in the following locations:
          </h3>
          <p className="text-sm text-[var(--muted)] tracking-wide leading-relaxed pl-4 md:pl-8">
            1985 1st International Heidelberger Symposium, Argonne, Illinois, USA <br />
            1987 2nd International Heidelberger Symposium, Honolulu, Hawaii, USA<br />
            1989 3rd International Heidelberger Symposium, Kyoto, Japan<br />
            1991 4th International Heidelberger Symposium, Marina Del Rey, CA, USA<br />
            1994 5th International Heidelberger Symposium, Essen, Germany<br />
            1996 6th International Heidelberger Symposium, Honolulu, Hawaii, USA<br />
            1997 7th International Heidelberger Symposium, Gunzburg, Germany<br />
            2000 8th International Heidelberger Symposium, Marina Del Rey, CA, USA<br />
            2002 9th International Heidelberger Symposium, Bergen, Norway<br />
            2004 10th International Heidelberger Symposium, Yokohama, Japan<br />
            2006 11th International Heidelberger Symposium, Phitsanulok, Thailand<br />
            2007 12th International Heidelberger Symposium, Jerusalem, Israel<br />
            2007 13th International Heidelberger Symposium, New York City, NY, USA<br />
            2008 14th International Heidelberger Symposium, Urumqi, China<br />
            2010 15th International Heidelberger Symposium, Phitsanulok, Thailand<br />
            2010 16th International Heidelberger Symposium, Coimbra, Portugal<br />
            2011 17th International Heidelberger Symposium, Xi’an, China<br />
            2012 18th International Heidelberger Symposium, Ulm, Germany<br />
            2013 19th International Heidelberger Symposium, Kagoshima, Japan<br />
            2014 20th International Heidelberger Symposium, Arica, Chile<br />
            2016 21st International Heidelberger Symposium, Moscow, Russia<br />
            2017 22nd International Heidelberger Symposium, Urumqi, China<br />
            2019 23rd International Heidelberger Symposium, Sardinia, Italy<br />
            2022 24th International Heidelberger Symposium, Arica, Chile<br />
            2023 25th International Heidelberger Symposium, Hiroshima, Japan<br />
            2024 26th International Heidelberger Symposium, Belfast, Northern Ireland, UK
          </p>
        </div>
      </PageSection>
    </FoundationLayout>
  )
}

export function BoardPage() {
  const boardMembers = [
    {
      name: "Eliezer Huberman, PhD",
      role: "President and Member of the Board of Directors",
      description: "Founder, scientific director, and CEO of Novadrug LLC",
      image: "/images.jpeg", // Replace with your actual image path in /public
    },
    {
      name: "Joseph R Landolph, Jr, PhD",
      role: "Secretary, Treasurer, and Member of the Board of Directors",
      description: "Professor of Departments of Immunology and Immunological Therapeutics and Pathology, Member of USC/Norris Comprehensive Cancer Center, Keck School of Medicine",
      image: "/joseph-landolph.avif", // Replace with your actual image path in /public
    },
    {
      name: "Wei Li, PhD",
      role: "Member of the Board of Directors",
      description: "Professor and Director of Genetics, Molecular & Cell Biology Graduate Program, Department of Dermatology and Member of USC-Norris Comprehensive Cancer Center, the University of Southern California",
      image: "/Wei-Li-328.webp", // Replace with your actual image path in /public
    },
  ]

  return (
    <FoundationLayout>
      <PageSection icon={<UsersRound size={22} />} eyebrow="Board Members" title="Meet the Board of Directors">
        
        {/* Responsive Grid Container: 1 column on mobile, 3 columns on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mt-8">
          {boardMembers.map((member) => (
            <article key={member.name} className="flex flex-col gap-4">
              
              {/* Image Block Container with a subtle grey fallback frame */}
              <div className="w-full aspect-square bg-[#e5e7eb] rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
                <img 
                  src={member.image} 
                  alt={`Portrait of ${member.name}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fail-safe wrapper if you haven't uploaded the image asset file yet
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-xs text-[var(--muted)] font-medium uppercase tracking-wider px-4 text-center">${member.name} Photo</span>`;
                    }
                  }}
                />
              </div>

              {/* Text Layout Stacked Underneath Image */}
              <div className="flex flex-col gap-2">
                <span className="text-xs text-[var(--muted)] font-medium uppercase tracking-wide leading-relaxed">
                  {member.role}
                </span>
                <h3 className="text-xl font-serif text-[var(--ink)] font-bold">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--ink)] opacity-90 leading-relaxed font-sans">
                  {member.description}
                </p>
              </div>

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