export const en = {
  lang: 'en' as const,
  localeName: 'English',
  otherLocale: 'ta' as const,
  otherLocaleLabel: 'தமிழ்',
  dir: 'ltr' as const,

  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    book: 'Book',
    contact: 'Contact',
  },

  paths: {
    home: '/en/',
    services: '/en/services/',
    about: '/en/about/',
    book: '/en/book/',
    contact: '/en/contact/',
    share: '/en/share/',
    privacy: '/en/privacy/',
    terms: '/en/terms/',
  },

  meta: {
    homeTitle:
      'Find My Nakshatra | Jothida Sironmani — Online Worldwide',
    homeDesc:
      'Jothida Sironmani Sivaraman (MA, Shree Maharishi College of Vedic Astrology). Online Parashari consultations worldwide via Zoom & Google Meet — English & Tamil. Based in Bangalore.',
    servicesTitle:
      'Vedic Astrology Services Online Worldwide | Marriage, Career, Muhurta',
    servicesDesc:
      'Online Vedic astrology: general reading, marriage compatibility, career, muhurta, prashna. Zoom / Google Meet. English and Tamil. Jothida Sironmani · MA astrologer.',
    aboutTitle:
      'About Sivaraman — Jothida Sironmani, MA Vedic Astrology | Find My Nakshatra',
    aboutDesc:
      'Sivaraman, Jothida Sironmani (Sri Ramanujar Astrology Institute, Chennai), holds an MA from Shree Maharishi College of Vedic Astrology. Online consultations worldwide in English and Tamil.',
    bookTitle: 'Book Online Astrology Consultation Worldwide | Find My Nakshatra',
    bookDesc:
      'Book a Zoom or Google Meet Vedic astrology consultation. English and Tamil. Jothida Sironmani · based in Bangalore, serving clients globally.',
    contactTitle: 'Contact Jothida Sironmani | Find My Nakshatra',
    contactDesc:
      'Contact Find My Nakshatra — email contact@findmynakshatra.com or WhatsApp. Global Zoom / Google Meet consultations. Bangalore-based.',
  },

  hero: {
    brand: 'Find My Nakshatra',
    headline: 'Vedic guidance for the questions that matter',
    sub: 'Jothida Sironmani · Parashari consultations worldwide — marriage, career, timing, and clarity — in English and Tamil via Zoom or Google Meet.',
    trust: 'Sidereal · Lahiri · Vimshottari · Parashari',
    ctaBook: 'Book consultation',
    ctaEmail: 'Email us',
    location: 'Based in Bangalore · Consultations across the globe',
    geoChips: ['Bangalore', 'India', 'Worldwide · Online', 'Zoom / Google Meet'],
    ganeshaAlt: 'Auspicious Lord Ganesha with Om — Find My Nakshatra',
    /** Row 1: Ganesha (centred). Row 2: Draupadi + Seetha Rama (same line, spaced). */
    mantraRow1: 'ॐ महागणपतये नमः',
    mantraRow2a: 'श्री द्रौपदिये नमः',
    mantraRow2b: 'श्री सीतारामजयम्',
    credentials:
      'Jothida Sironmani · MA — Shree Maharishi College of Vedic Astrology',
  },

  how: {
    title: 'How it works',
    steps: [
      {
        title: 'Share birth details',
        desc: 'Name, date, time, and place of birth — plus your question.',
      },
      {
        title: 'Chart review',
        desc: 'D1/D9, dasha, and relevant yogas reviewed before the session.',
      },
      {
        title: 'Live consultation',
        desc: 'Clear guidance on Zoom, Google Meet, or WhatsApp — wherever you are in the world.',
      },
    ],
  },

  services: {
    title: 'Services',
    subtitle: 'Focused readings for real life decisions',
    items: [
      {
        id: 'general',
        title: 'General life reading',
        duration: '45 min',
        desc: 'Birth chart overview, current dasha, and practical next steps.',
      },
      {
        id: 'marriage',
        title: 'Marriage & compatibility',
        duration: '60 min',
        desc: 'Matching, timing, and relationship clarity from a Parashari lens.',
      },
      {
        id: 'career',
        title: 'Career guidance',
        duration: '45 min',
        desc: 'Profession themes, dasha windows, and decision support.',
      },
      {
        id: 'muhurta',
        title: 'Muhurta',
        duration: '30 min',
        desc: 'Auspicious timing for wedding, travel, business, or new beginnings.',
      },
      {
        id: 'prashna',
        title: 'Prashna (one question)',
        duration: '20–30 min',
        desc: 'Horary clarity when birth time is uncertain or the question is urgent.',
      },
    ],
    note: 'Fees shared after you confirm the service. Online worldwide via Zoom / Google Meet.',
    cta: 'See booking steps',
  },

  about: {
    title: 'About',
    lead: 'I am Sivaraman, son of Rajagopal — carrying a Trichy family legacy of Vedic astrology.',
    body: [
      'My father was a seasoned astrologer and Vedic pandit in Trichy. That lineage shapes how I read charts today — with discipline, clarity, and respect for classical Parashari methods.',
      'I hold an MA in Astrology from Shree Maharishi College of Vedic Astrology. I was titled Jothida Sironmani at Sri Ramanujar Astrology Institute, Chennai. My MA research focused on career prediction and peak-performance windows for high-achieving personalities — plus how the Moon reflects mood swings in everyday life.',
      'From Bangalore, I consult worldwide in English and Tamil via Zoom or Google Meet — practical guidance you can use.',
    ],
    points: [
      'Family legacy — Trichy Vedic pandit lineage (Rajagopal)',
      'Jothida Sironmani — Sri Ramanujar Astrology Institute, Chennai',
      'MA in Astrology — Shree Maharishi College of Vedic Astrology',
      'Special focus: career timing & peak performance',
      'Research interest: Moon & mood patterns',
      'English & Tamil · Zoom / Google Meet · Worldwide',
    ],
  },

  book: {
    title: 'Book a consultation',
    subtitle: 'Send your details — I will confirm the slot and payment.',
    whatsappCta: 'Message on WhatsApp',
    emailCta: 'Email contact@findmynakshatra.com',
    whatsappPrefill:
      'Namaste, I would like to book a consultation.\n\n1. Name:\n2. DOB (DD-MM-YYYY):\n3. Birth time:\n4. Birth place:\n5. Service: General / Marriage / Career / Muhurta / Prashna\n6. Language: English / Tamil\n7. Preferred slot:',
    checklistTitle: 'Please send',
    checklist: [
      'Full name',
      'Date of birth (DD-MM-YYYY)',
      'Time of birth (as accurate as possible)',
      'Place of birth (city)',
      'Service needed',
      'Preferred language: English or Tamil',
      'Preferred date and time',
    ],
    note: 'Sessions are online worldwide (Zoom / Google Meet / WhatsApp).',
  },

  contact: {
    title: 'Contact',
    subtitle: 'Reach out for bookings and questions — anywhere in the world.',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    locationLabel: 'Based in',
    locationValue: 'Bangalore, India — consultations across the globe (Zoom / Google Meet)',
    languagesLabel: 'Languages',
    languagesValue: 'English · Tamil',
  },

  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Do you consult only in Bangalore?',
        a: 'No. I am based in Bangalore and offer online consultations across India (and for clients abroad when needed).',
      },
      {
        q: 'Can the session be in Tamil?',
        a: 'Yes. Sessions are available in English and Tamil.',
      },
      {
        q: 'What if my birth time is uncertain?',
        a: 'Share what you know. We can work with rectification discussion or Prashna for a focused question.',
      },
      {
        q: 'How do I pay?',
        a: 'Payment details (UPI / bank) are shared after your slot is confirmed.',
      },
    ],
  },

  footer: {
    tagline: 'Online Vedic astrology · English & Tamil · Across India',
    rights: 'All rights reserved.',
    disclaimer:
      'Astrology is for guidance and reflection. It is not a substitute for medical, legal, or financial advice. Consultations are for adults (18+). No outcome is guaranteed.',
    privacy: 'Privacy',
    terms: 'Terms',
    share: 'Share / QR',
  },

  share: {
    title: 'Share & book with QR',
    subtitle:
      'Scan the green WhatsApp QR to book in one step — or share the website QR for Google, ChatGPT, and friends.',
    download: 'Download QR image',
    downloadWa: 'Download WhatsApp QR',
    downloadSite: 'Download website QR',
    linkLabel: 'Website link',
    tip: 'Use the website QR for posts, bios, and SEO-friendly sharing.',
    whatsappShare: 'Share site on WhatsApp',
    emailShare: 'Share by email',
    emailSubject: 'Find My Nakshatra — Vedic astrology consultation',
    message:
      'Find My Nakshatra — Vedic astrology consultation in English & Tamil. Visit https://findmynakshatra.com',
    bookQrTitle: 'Book on WhatsApp',
    bookQrLead: 'Fastest path — scan and chat. No forms.',
    bookQrTip: 'Print this on visiting cards, posters, and Google Business. Look for the WhatsApp mark.',
    bookQrAlt: 'WhatsApp QR — scan to book a consultation',
    bookQrCompact: 'Scan to book',
    websiteQrTitle: 'Share website',
    websiteQrLead: 'Opens findmynakshatra.com — best for SEO & AI discovery.',
    whatsappQrPrefill: 'Namaste, I want to book a consultation with Find My Nakshatra.',
  },

  contactPrivacyNote:
    'For privacy, we do not publish the mobile number as text. Use WhatsApp or email — only the site owner can change booking contacts.',

  ctaBand: {
    title: 'Ready for a clear reading?',
    sub: 'Book online in English or Tamil.',
    button: 'Book consultation',
  },
};
