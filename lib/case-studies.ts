export type CaseStudyApproach = {
  heading: string;
  body: string;
};

export type CaseStudyStory = {
  label: string;
  title: string;
  situation: string;
  decided: string;
  built: string[];
  result: string;
  demonstrates: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  product: string;
  lede?: string;
  focus: string;
  stack: string;
  seoTitle: string;
  seoDescription: string;
  overview: string;
  problem: string;
  goals: string[];
  capabilities?: CaseStudyApproach[];
  capabilitiesHeading?: string;
  principles?: CaseStudyApproach[];
  principlesHeading?: string;
  approach: CaseStudyApproach[];
  shipped: string[];
  engineering: string[];
  results: string;
  outcomes?: string[];
  stories?: CaseStudyStory[];
  storiesHeading?: string;
  storiesIntro?: string;
  whyItMatters: string;
  ctaHeading: string;
  ctaBody: string;
  liveUrl?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
  featuredRank: number;
  date?: string;
  modified?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "next11",
    title: "Building live football performance software for coaches and players",
    client: "Next11",
    industry: "Sports technology / football performance",
    product:
      "A coach tablet app and a player mobile app connected to wearable tags and Edge hardware",
    focus:
      "Live tracking UX, sports-science analytics, real-time connectivity, release reliability",
    stack:
      "React Native, Expo EAS, TypeScript, Redux, Firebase, MQTT, Socket.IO, React Navigation, Expo Updates",
    seoTitle: "Next11 Sports Tracking App | WonderIT Case Study",
    seoDescription:
      "WonderIT helped build Next11’s React Native coach and player apps for live football performance tracking with wearable sensors, Edge hardware, and sports-science analytics.",
    overview:
      "Next11 is a football performance-tracking platform that helps coaches and players understand real training and match load — live, on the pitch, without relying on expensive GPS-only setups. The company set out to democratize football tracking: affordable, portable, and accurate enough to matter on the training pitch. Calf-mounted sensors and an Edge device capture intensity and related performance signals live.\n\nWonderIT contributed to the mobile product experience: a coach-facing tablet application for live sessions and team analytics, and a player-facing mobile app for progress, wellness, and personal performance feedback. The apps connect to Next11’s wearable tags and Edge hardware so physical, technical, and tactical signals can be captured, visualized, and acted on in real time.\n\nThis page covers the product as it shipped. It also covers how we approached a dual-audience React Native system, real-time hardware communication, sports-science presentation, and the operational maturity needed for a commercial app.",
    problem:
      "Traditional GPS tracking systems are often expensive, torso-based, and hard to operationalize for many clubs. Next11’s hardware already solves a hard sports-science problem: measuring true player load from the legs — where much of football’s intensity happens — rather than torso GPS alone, and pushing results to the sideline.\n\nThe software challenge was equally demanding. Dense live sensor streams had to become calm, coach-ready decisions on a tablet, while players needed a clear mobile experience after the session. Great hardware fails if the software is fragile: coaches need live views under pressure, players need trust in the numbers, networks drop, tags go offline, and sessions end in a mess. Updates must ship without breaking pitch-day workflows.\n\nThat meant building for unreliable pitch Wi-Fi, live Edge connectivity, multi-environment releases, dual audiences (coach vs player), and sports metrics that must stay trustworthy under match-day pressure. The product needed software that behaves like a professional coaching tool, not a lab demo.",
    goals: [
      "Support coaches during live sessions with readable intensity and team context",
      "Give players a mobile experience for progress, wellness, and personal load insight",
      "Integrate reliably with Edge hardware and wearable tags",
      "Present sports-science concepts (weekly load, acute:chronic, intensity zones, benchmarks) clearly",
      "Ship through controlled environments with room for continuous iteration",
    ],
    capabilities: [
      {
        heading: "Live sideline coaching",
        body: "Coaches can follow intensity and session progress while training or matches are underway, with flows designed for lost connections, incomplete datasets, and end-of-session handoff into reports.",
      },
      {
        heading: "Load management and injury-aware planning",
        body: "Acute:chronic workload ratio, weekly load overviews, and custom benchmarks help staff plan smarter without drowning in raw sensor noise.",
      },
      {
        heading: "Player engagement loop",
        body: "Players see their own progression, wellness, and team context — closing the loop between what coaches track and what athletes understand.",
      },
      {
        heading: "Hardware-aware mobile engineering",
        body: "MQTT-based Edge integration, tag management, firmware and update flows, and offline-tolerant sync patterns keep the product usable in real football environments.",
      },
    ],
    approach: [
      {
        heading: "Dual product surfaces, one engineering system",
        body: "The codebase serves two distinct experiences: a coach-facing tablet workflow and a player-facing phone app. Coaches manage live sessions, tags, reports, and team structure; players consume progress, wellness, and activity detail. We structured navigation, state, and UX around those realities rather than forcing one generic sports app onto both audiences.",
      },
      {
        heading: "Real-time as a product feature, not a side effect",
        body: "Live coaching depends on continuous communication with the Edge device. MQTT messaging for commands, status, and output data sits alongside broader real-time patterns so the UI can reflect tag health, session state, and emerging load information as conditions change on the pitch.",
      },
      {
        heading: "Make sports science usable",
        body: "Metrics like acute:chronic workload ratio only help if coaches can interpret them quickly. We invested in charts, explanations, weekly overviews, intensity zoning, and benchmark comparisons so the product teaches while it informs.",
      },
      {
        heading: "Design for failure modes",
        body: "Match-day software must handle lost connections, incomplete datasets, wrong durations, missing tags, and interrupted sessions. Dedicated flows and modals turn those moments into recoverable coaching workflows instead of dead ends.",
      },
      {
        heading: "Ship like a product company",
        body: "Expo EAS build and update channels across testing, staging, pre-production, and production made it possible to iterate safely — critical when software is coupled to physical devices and real club usage.",
      },
    ],
    shipped: [
      "Coach application (tablet-first) for live sessions, weekly load, reports, tags, and team settings",
      "Player application for activity history, progress, wellness check-ins, and personal load insights",
      "Real-time Edge communication for live tag status, session data, and device updates",
      "Sports-science visualizations: intensity zones, acute:chronic workload, weekly effort, and benchmarks",
      "Live session lifecycle handling, event and report flows, and dataset completeness checks",
      "Tag management, Edge update awareness, and connection troubleshooting surfaces",
      "Custom benchmarks and team/season configuration for clubs",
      "Production delivery pipeline across testing, staging, pre-production, and production channels",
    ],
    engineering: [
      "React Native + Expo for cross-platform delivery with native Firebase modules",
      "MQTT service layer for Edge broker communication",
      "Socket-based real-time support for live operational needs",
      "Redux state management with persistence patterns for coach workflows",
      "React Navigation across coach tablet and player phone surfaces",
      "Firebase Auth/Firestore plus analytics and Crashlytics for production observability",
      "OTA update strategy aligned to Expo EAS environment channels",
    ],
    results:
      "The result is a production sports-tech mobile system. Coaches can run live sessions with hardware in the loop, then review load and performance afterward. Players can stay engaged with personal progress and wellness. The product team can release through a mature multi-environment pipeline.\n\nFrom an engineering and product perspective, the durable win is a trustworthy real-time coaching surface backed by a maintainable dual-app architecture.",
    outcomes: [
      "A production-ready dual-app experience for coaches and players",
      "Real-time hardware integration suitable for live training and match use",
      "Multi-environment release process supporting continuous product iteration",
      "Sports-science UX that makes complex load data understandable on the sideline and on a phone",
    ],
    whyItMatters:
      "If you are building software that must talk to hardware, survive imperfect networks, serve more than one user type, and still feel simple — Next11 is a strong reference for how WonderIT works.\n\nWe specialize in the hard middle of product engineering: real-time systems, mobile craftsmanship, and domain UX that non-engineers can actually use.",
    ctaHeading: "Need a hardware-connected mobile product?",
    ctaBody:
      "Contact WonderIT to discuss architecture, delivery, and UX for sports-tech, IoT, and real-time systems that have to work in the real world.",
    image:
      "https://cdn.prod.website-files.com/609a6a87708057326383b774/65a643e5c56b48d35b9382c7_Tiles.webp",
    imageAlt: "Next11 football performance tracking app built with React Native",
    featured: true,
    featuredRank: 1,
  },
  {
    slug: "servicebrief-ai",
    title:
      "An AI operations layer for HVAC, plumbing, electrical, and other field teams",
    client: "ServiceBrief AI",
    industry: "Field service / AI product",
    product:
      "Multi-tenant SaaS for field teams — intake, reports, follow-ups, and quote drafts",
    lede:
      "Technicians and the office capture work through voice, email, phone, and a website form. AI turns that mess into structured jobs, reports, follow-ups, and quote drafts. A manager reviews and approves before anything is sent to a customer.",
    focus:
      "Intake, structured reporting, follow-up tracking, quote drafts, and customer-ready summaries",
    stack:
      "Next.js, React, Tailwind, Express, TypeScript, PostgreSQL, Prisma, pgvector, OpenAI, Paddle",
    seoTitle:
      "ServiceBrief AI — an AI operations layer for field service | WonderIT",
    seoDescription:
      "We designed and built ServiceBrief AI, a multi-tenant product that turns voice, email, phone, and web leads into structured jobs, reports, follow-ups, and quote drafts — with a human approval step before anything reaches a customer.",
    overview:
      "ServiceBrief AI is a real multi-tenant SaaS, not a demo chatbot. Each company gets its own workspace, users, knowledge, jobs, and billing. Roles are owner, manager, technician, and platform admin. Technicians capture and view assigned work. Owners and managers review, approve, run the inbox, quotes, customers, team, and billing.\n\nThe product sits beside existing operations tools. It does not pretend to be a full accounting, dispatch, GPS fleet, or payments suite. It focuses on intake, structured reporting, follow-up tracking, quote drafts, and customer-ready summaries.\n\nWonderIT designed and built the product end to end: the four intake channels, the queued AI pipeline, knowledge and price-book rules, review gates, billing, and the public site. This page is the product as it shipped. The three stories below are the decisions that made it something a service company can trust.",
    problem:
      "Field work does not start in a tidy form. It starts as a voicemail, a rushed voice note after a job, a customer email, a missed after-hours call, or a short message on the company website. The detail that matters — diagnosis, parts, tests, what to tell the customer, whether a quote or a return visit is needed — often dies in that first capture.\n\nBroad field platforms already cover scheduling, dispatch, invoicing, and payments. The gap we kept seeing was documentation and follow-through: incomplete notes, reports that never get written, follow-ups that never get tasked, and quote opportunities that never reach a review queue.\n\nThe brief was not “add transcription.” Transcription is the starting point. The product had to become company-aware job intelligence with review gates: structure the work, ground it in that company’s SOPs and price book, and keep a human in control of anything a customer will see.",
    goals: [
      "Turn messy capture into one job record the office can review",
      "Ground AI in that company’s SOPs and price book, not a generic textbook",
      "Keep a human in control of anything a customer will see",
      "Never invent prices — unmatched items are flagged for a person",
      "Ship multi-tenant SaaS with roles, queues, billing, and an audit trail",
    ],
    capabilitiesHeading: "What the product does in the field.",
    capabilities: [
      {
        heading: "Voice",
        body: "On New Job, a technician uploads audio or types notes, optionally adds photos, picks or creates a customer, and sends it into the queue. The app is a PWA, so capture can happen when the signal is poor and sync when it returns.",
      },
      {
        heading: "Email",
        body: "The office connects IMAP. Mail is synced in the background, classified, and reviewed. A manager converts a thread into a job, follow-up, or quote, or ignores it. The product does not silently turn a customer email into a finished service report.",
      },
      {
        heading: "Phone",
        body: "The company keeps its published number and forwards to a ServiceBrief intake line. The call is recorded as an intake event with a transcript. A job is created only when an owner or manager clicks Create Job, so after-hours coverage does not mean unsupervised job creation.",
      },
      {
        heading: "Website",
        body: "Settings generate a floating or inline snippet. The public form is configurable: fields, services, optional per-service variations, and a simple style system. Submissions become leads and can enter the same job intake path.",
      },
    ],
    principlesHeading: "The rules the product is not allowed to break.",
    principles: [
      {
        heading: "AI must not invent prices",
        body: "Quotes use matched price-book items only. If there is no match, the item is flagged for a person. Fluent copy is not a rate.",
      },
      {
        heading: "Nothing ships without approval",
        body: "AI must not send customer-facing content on its own. Reports, summaries, and quotes stay in draft until a manager acts.",
      },
      {
        heading: "Every query is tenant-scoped",
        body: "Jobs, knowledge, inboxes, and memory do not leak across companies. Retrieval and search stay inside that organization’s boundary.",
      },
      {
        heading: "Edits keep history",
        body: "Report edits are stored as versions. Approvals, exports, and sends are written to an audit trail.",
      },
      {
        heading: "Policy outranks memory",
        body: "Official SOPs and the price book outrank “what we usually did on past jobs.” Approved memory can inform patterns. It cannot override policy. Drafts are never indexed.",
      },
    ],
    approach: [
      {
        heading: "Capture",
        body: "Work enters through four doors: a technician recording or typing a job, a connected email inbox, a phone intake call, or a public website form. All of those paths can become the same kind of job record, with a first visit attached, so the office is not running four separate tools.",
      },
      {
        heading: "Organize",
        body: "AI structures what came in: customer, issue, service type, urgency, location, and source. For a technician visit, it drafts a report with diagnosis, work completed, parts, tests, missing information, a customer-safe summary, follow-up tasks, and quote opportunities when the price book supports them.",
      },
      {
        heading: "Review",
        body: "A manager opens the job. The transcript, sources, files, timeline, follow-ups, and quotes stay in one workspace. They edit, approve, or reject. Edits are stored as report versions. Customer-facing PDFs omit internal notes, confidence scores, and missing-info flags.",
      },
      {
        heading: "Follow through",
        body: "Approved work can be exported or emailed. Quotes can be sent with a public approve/decline link. Follow-ups land on a queue and calendar. Nothing customer-facing goes out just because the model finished a draft.",
      },
    ],
    shipped: [
      "Voice and typed job capture, including photos and job context",
      "Email inbox via IMAP: classify, review, convert to a job, follow-up, or quote",
      "Phone intake with a dedicated number and a human Create Job step",
      "Embeddable website lead form with live preview and install snippets",
      "AI pipeline: transcribe, extract with company knowledge, summarize, detect follow-ups and quote opportunities",
      "Report review, version history, customer-safe PDF, send only after approval",
      "Quote workbench with price-book matching, versions, send, and a public customer decision link",
      "Follow-ups, calendar, and a light customer record across jobs and quotes",
      "Knowledge base, SOP retrieval, price book, and company memory that never overrides policy",
      "English and Spanish UI, PWA with offline job capture, Paddle billing, and a platform admin console",
    ],
    engineering: [
      "Next.js 15 and React 19 on the front end, with Tailwind, next-intl, and PWA support",
      "Express and TypeScript on the API",
      "PostgreSQL with Prisma and pgvector for tenant data and retrieval",
      "pg-boss for queues: visit processing, document ingest, follow-ups, close-out summaries",
      "MinIO for audio, photos, and documents",
      "OpenAI for transcription, structured extraction, embeddings, and drafts — multi-step, not one prompt",
      "Paddle for checkout and the customer portal",
      "Docker and CapRover for deployment",
    ],
    results:
      "The outcome is a shippable product: sign-up and email verification, onboarding, role-aware UI, the full intake-to-report loop, knowledge and quotes with the trust rules above, billing, admin, and a public site.\n\nInternal acceptance work verified technician-visit extraction, SOP-backed missing-info flags, price-book-matched quotes, manager edit/approve/reject, PDF export, and version history.\n\nThe proof is the product and the rules it can keep under pressure.",
    outcomes: [
      "A live multi-tenant SaaS at servicebrief.ai",
      "Four intake channels that can become one job record",
      "Human review before anything customer-facing is sent",
      "Quotes that match a price book instead of inventing a rate",
    ],
    storiesHeading: "Three deeper cuts from the same product.",
    storiesIntro:
      "The sections above are the product. These three stories are the decisions underneath it: how a voice note becomes an approved report, how quotes stay honest, and how four messy front doors still land in one job workspace.",
    stories: [
      {
        label: "Case study 01 · Field documentation",
        title: "Voice to approved service report",
        situation:
          "Field technicians are hired to diagnose and fix equipment, not to write office-ready documents in a driveway. The notes that do get recorded are short, spoken, and incomplete. The office still needs a report: what the customer said, what was found, what was done, what is missing, what the customer can be told, and what happens next.\n\nAfter a visit, the useful detail is in the technician’s head for about as long as the van is still on site. Typical workarounds fail in different ways. A blank form is too slow on a phone. A voice memo in a shared inbox is not searchable and never becomes a quote. Generic transcription dumps a wall of text onto a manager who still has to write the report. None of those options detect a follow-up or a price-book match on the way through.\n\nFor ServiceBrief AI, we treated that gap as the whole product wedge. Not a recorder. Not a chatbot. A path from messy capture to a reviewed business record.",
        decided:
          "Capture has to be fast: audio or a typed note, optional photos, optional customer link. Processing cannot block the upload. The HTTP request creates the job and queues work. A worker transcribes, extracts a structured report, and drafts a customer summary. The job is marked for review. A person edits, approves, or rejects.\n\nWe split the AI into steps instead of one giant prompt. Transcription is separate from extraction. Extraction can use company SOPs. Summary can be skipped if the company turns it off. If summarization fails, the report still saves. If a visit is already processing, a second click does not start a duplicate run. Failures resume from the last good checkpoint so a good transcript is not thrown away because the next step died.\n\nThe in-app brief is the internal record. The customer PDF is a safer telling of the same story. Internal notes, model confidence, and missing-info flags stay in the workspace. Teams will not let a model email their customers. Review is the path. Speed comes from better drafts and fewer missing fields, not from skipping the manager.",
        built: [
          "New Job capture with audio or manual transcript, photos, and customer picker",
          "Queued pipeline: queued → transcribing → extracting → summarizing → completed, with explicit failure states",
          "Structured extraction: issue, diagnosis, equipment, work, parts, tests, safety, recommendations",
          "SOP-backed missing-information flags when the company has uploaded those rules",
          "Customer summary drafted in company tone, from customer-safe content only",
          "Follow-up task created when the report says more work is needed and the company allows it",
          "Manager edit, approve, reject-with-reason, PDF export, optional email send after approval",
          "Report version snapshots on edit, audit events on export and send",
        ],
        result:
          "A technician can leave a voice note on site. The office gets a structured brief, sources, a timeline, and a customer summary they can actually send. Follow-ups and quote drafts can appear in the same job instead of in someone’s memory.\n\nVerified on the technician-visit path: classification as a visit, extraction of diagnosis and parts, SOP missing-info flags, clean customer summary, follow-up detection, manager edit/approve/reject, PDF export, and version history.",
        demonstrates:
          "We can design an AI workflow around a real job, not around a prompt playground: queues, retries, role-aware review, document generation, and an audit trail. If you need a product where the model is useful and not in charge, this is the pattern.",
      },
      {
        label: "Case study 02 · Trust / retrieval",
        title: "AI that does not invent prices",
        situation:
          "The fastest way to lose a field-service buyer is to show them a fluent quote with a number nobody in the company would stand behind. Models are good at sounding sure. They are not a price list.\n\nTwo bad outcomes show up in this product category. The first is a generic model that writes a nice report and invents a capacitor price. The second is a dump of PDFs into a chat box, with no sense of what is safe to tell a customer and what is an internal troubleshooting step.\n\nField companies already have the truth in awkward places: a CSV from the parts desk, a PDF from a manufacturer, an SOP a senior tech wrote five years ago. The job was to use those sources during extraction and quoting, without letting yesterday’s approved job quietly override today’s written policy.",
        decided:
          "Knowledge is not one bucket. Official documents are uploaded, classified, and given a visibility scope: internal only, customer safe, quote only, or technician only. They are ingested asynchronously: chunk, embed, store in Postgres with vectors, scoped to the organization.\n\nDuring report extraction the pipeline classifies the service category, retrieves relevant chunks, injects SOP context, validates required fields, and shows citations in the UI. Customer summaries are not allowed to be built from internal-only text.\n\nPricing is not the model’s best guess from the document dump. Line items have to match price-book rows. The book is structured data, with generated aliases so spoken names can still hit the right SKU. No match means flag for a person, not a creative number.\n\nCompany memory is separate. Approved reports and completed follow-ups can be indexed as examples of how this team works. Memory is retrieved with lower precedence than SOPs and the price book. Unapproved drafts are never indexed. Operators can disable memory. They cannot use memory to invent a rate.\n\nThe hierarchy, in plain language: SOP, price book, and warranty documents are the source of truth. Approved jobs and completed follow-ups are historical patterns. Drafts and rejected AI output do not become training material for the next job.",
        built: [
          "Knowledge upload for PDF, CSV, TXT, MD, and DOCX, stored in object storage",
          "Queued ingest into pgvector chunks, with re-ingest and delete",
          "Semantic search inside the company boundary",
          "Price book CRUD and CSV import, plus alias generation for messy names",
          "RAG citations on the report — where this came from",
          "Quote drafts that only include matched items",
          "Memory index on approve/complete, with an explicit hierarchy in the prompts",
        ],
        result:
          "Extraction can flag a missing SOP field. Quotes can show a matched item instead of a hallucinated one. Managers see sources, not a black box. The customer-facing summary can stay clean of internal procedure language.\n\nThis was verified with SOP retrieval, a visible source list, a price-book match on a quote draft, and a customer summary that did not leak internal notes. The result is a rule the product can keep under pressure.",
        demonstrates:
          "Production RAG is a product problem: tenancy, visibility, ingest queues, citations, and a pricing path that is not “ask the LLM.” We can build AI that is allowed to retrieve and not allowed to freelance.",
      },
      {
        label: "Case study 03 · Operations / intake",
        title: "Four intake channels, one job record",
        situation:
          "Service companies do not have a single front door. Customers call, email, and fill out website forms. Technicians send voice notes. If each of those lands in a different inbox, the system of record is whoever remembered.\n\nTreat each door as its own inbox, or auto-create work from every inbound event, and the office spends Saturday cleaning up. The design problem was unification with brakes: the same object model, different amounts of automation, and a person still deciding when an inbound event becomes operational work.",
        decided:
          "Internally there is one factory for “job plus initial visit.” Manual voice, converted email, converted intake call, and website lead all can go through it. Source is stored, so the office can see how the work arrived.\n\nAutomation stops short of unsupervised job creation where that would hurt. Email is classified and parked for review. Phone calls become intake records; Create Job is a click. Website submissions are leads that can become jobs under the company’s form settings. Voice is the path where the technician is already intending to open a job.\n\nWhen audio or a transcript exists, visit processing is the same pipeline as a technician visit. An intake call is typically a scheduled job, not a finished visit report with invented “work completed” fields.",
        built: [
          "New Job as the high-control voice path: assignee, customer create-or-link, photos, audio or typed notes",
          "IMAP inbox: interval sync, classification, tabs for new / needs review / converted / linked / ignored",
          "Email conversion to job, follow-up, or quote — a customer email is not a finished technician report unless it really is a technician update",
          "Intake number with webhooks: no job until Create Job, no conversion without a transcript",
          "Public website form, floating or inline, with configurable fields, services, theme, and an install snippet",
          "Preview that does not create real leads; the same widget is used as a live demo on the product marketing pages",
        ],
        result:
          "The office can run one job workspace whether the work started as a voice note, a forwarded call, a message to the shop email, or a form on the marketing site. Review-first intake means the AI is allowed to sort and draft, not to invent a Saturday schedule from a robocall.",
        demonstrates:
          "We can model a messy real-world intake surface, integrate third-party telephony and mail, ship a public embed, and still keep a single domain object the rest of the product understands. That is product architecture, not four disconnected widgets.",
      },
    ],
    whyItMatters:
      "<p>This page is for two readers: field-service operators evaluating the live product, and companies who want a studio that can ship multi-tenant SaaS with queues, retrieval, billing, and approval workflows — a serious AI product, not a wrapper around a chatbot API.</p><p>If you are a field-service owner, the live product is at <a href=\"https://servicebrief.ai/\" target=\"_blank\" rel=\"noopener noreferrer\">servicebrief.ai</a>. If you are hiring WonderIT to build something in this class — intake, knowledge, review gates, billing — that is the conversation this page is for.</p>",
    ctaHeading: "Build a product like this.",
    ctaBody:
      "Contact WonderIT to discuss multi-tenant SaaS, AI workflows with human approval, and products that have to earn trust in the field.",
    liveUrl: "https://servicebrief.ai/",
    image:
      "https://wonderit-wp-wordpress.server.wonderit.io/wp-content/uploads/2026/07/fb-cover.png",
    imageAlt: "ServiceBrief AI — field service operations product",
    featured: true,
    featuredRank: 2,
  },
];

export function stackTags(stack: string, limit = 8) {
  return stack
    .split(/,|\band\b/i)
    .map((tag) => tag.trim().replace(/^and\s+/i, ""))
    .filter(Boolean)
    .slice(0, limit);
}

export function featuredCaseStudies(studies: CaseStudy[] = CASE_STUDIES, limit = 2) {
  const featured = studies
    .filter((study) => study.featured)
    .sort((a, b) => a.featuredRank - b.featuredRank);
  const source = featured.length ? featured : studies;
  return source.slice(0, limit);
}

export function getCaseStudies(): CaseStudy[] {
  return CASE_STUDIES;
}

export function getCaseStudy(slug: string): CaseStudy | null {
  return CASE_STUDIES.find((study) => study.slug === slug) || null;
}
