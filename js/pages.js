/* CONTENT */
window.pages = [
    {
        id: 201,
        slug: "homepage",
        title: "Homepage",
        contents: [
            {
                url: "dsr24.de/",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks:
                    [
                        {
                            type: "dsrTemplate1.homepage.hero",
                            enabled: true,
                            title: "Du hattest einen unverschuldeten Autounfall?",
                            subtitle: "Die DSR24 hilft dir kostenfrei!",
                            backgroundimage: 123,
                            overlayopacity: 0.6,
                            buttoncaption: "Hier Schadenfall melden",
                            buttonlink: "/schaden-melden",
                            buttonnewtab: true
                        },
                        {
                            type: "dsrTemplate1.homepage.about-us",
                            enabled: true,
                            title: "Ihr zuverlässiger Partner bei Unfallschäden",
                            subtitle: "Professionelle Schadenregulierung mit jahrelanger Erfahrung",
                            bulletpoints: [
                                "Kostenlose Beratung und Betreuung",
                                "Schnelle und unkomplizierte Abwicklung",
                                "Maximale Schadensersatzleistung für Sie",
                            ],
                            paragraph: "Bei DSR24 sind Sie in guten Händen. Wir kümmern uns um alle Aspekte Ihres Schadenfalls und sorgen dafür, dass Sie zu Ihrem Recht kommen.",
                            image: 102,
                            buttoncaption: "Mehr über uns erfahren",
                            buttonlink: "/ueberuns",
                            buttonnewtab: true

                        },
                        {
                            type: "dsrTemplate1.homepage.partners",
                            enabled: true,
                            logos: [201, 202, 203, 204, 205]
                        },
                        {
                            type: "dsrTemplate1.homepage.features",
                            enabled: true,
                            videoid: 301,
                            videoimage: 302,
                            items: [
                                {
                                    icon: "fa-solid fa-clipboard-list",
                                    title: "Kostenfreie Beratung",
                                    text: "Wir beraten Sie umfassend und kostenfrei zu allen Fragen rund um Ihren Schadenfall"
                                },
                                {
                                    icon: "fa-solid fa-gem",
                                    title: "Schnelle Abwicklung",
                                    text: "Durch unsere langjährige Erfahrung wickeln wir Ihren Schadenfall schnell und effizient ab."
                                },
                                {
                                    icon: "fa-solid fa-image",
                                    title: "Maximale Entschädigung",
                                    text: "Wir setzen alle rechtlichen Möglichkeiten ein, um Ihnen die maximale Entschädigung zu sichern"
                                },
                                {
                                    icon: "fa-solid fa-shield",
                                    title: "Persönliche Betreuung",
                                    text: "Sie haben einen festen Ansprechpartner, der Sie während des gesamten Prozesses begleitet"
                                }
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.services",
                            title: "Unsere Leistungen",
                            subtitle: "Leistungen",
                            enabled: true,
                            items: [
                                {
                                    icon: 401,
                                    title: "DSR24 für Werkstatt",
                                    text: "Die Ideallinie für Ihr erfolgreiches Schadenmanagement.",
                                    buttonLink: "/services?id=werksttat",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 402,
                                    title: "DSR24 für Autovermietungen",
                                    text: "So sind Sie in Sachen Ersatz­fahr­zeug der Ansprech­partner Nr.1.",
                                    buttonLink: "/services?id=autovermietungen",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 403,
                                    title: "DSR24 für Rechtsanwälte",
                                    text: "So einfach sichern Sie sich regel­mäßige Mandate.",
                                    buttonLink: "/services?id=rechtsanwaelte",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 404,
                                    title: "DSR24 für Kfz-Sachverständige",
                                    text: "So erhalten Sie Aufträge schnell und unkompliziert.",
                                    buttonLink: "/services?id=sachverstaendige",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 405,
                                    title: "DSR24 für Abschleppdienste",
                                    text: "So sind Sie bei Bergungsbedarf die erste Wahl.",
                                    buttonLink: "/services?id=abschleppdienste",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 406,
                                    title: "Schnelle Hilfe bei Unfallschäden",
                                    text: "Hier bekommen Sie im Fall eines Unfalls alles aus einer Hand!",
                                    buttonLink: "/services?id=unfallschaeden",
                                    buttonnewtab: true
                                }

                            ]

                        },
                        {
                            type: "dsrTemplate1.homepage.call_to_action",
                            enabled: true,
                            title: "Handlungsaufruf",
                            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            icon: "fa-solid fa-bullhorn ",
                            buttoncaption: "Jetzt starten",
                            buttonlink: "/kontakt",
                            buttonnewtab: false
                        },

                        {
                            type: "dsrTemplate1.homepage.portfolio",
                            enabled: true,
                            subtitle: "Portfolio",
                            title: "Unser Portfolio",

                            tabs: [
                                {
                                    label: "Alle",
                                    items: [
                                        { image: 701, title: "Projekt 1" },
                                        { image: 702, title: "Projekt 2" },
                                        { image: 703, title: "Projekt 3" },
                                        { image: 704, title: "Projekt 4" },
                                        { image: 705, title: "Projekt 5" },
                                        { image: 706, title: "Projekt 6" },
                                        { image: 707, title: "Projekt 7" },
                                        { image: 708, title: "Projekt 8" }
                                    ]
                                },
                                {
                                    label: "App",
                                    items: [
                                        { image: 701, title: "App 1" },
                                        { image: 703, title: "App 3" },
                                        { image: 707, title: "App 7" }
                                    ]
                                },
                                {
                                    label: "Karte",
                                    items: [
                                        { image: 704, title: "Karte 4" },
                                        { image: 706, title: "Karte 6" }
                                    ]
                                },
                                {
                                    label: "Web",
                                    items: [
                                        { image: 702, title: "Web 2" },
                                        { image: 705, title: "Web 5" },
                                        { image: 708, title: "Web 8" }
                                    ]
                                }

                            ],
                        },

                        {
                            type: "stats",
                            enabled: true,
                            title: "DSR24 Statistics",
                            subtitle: "Statistics",
                            heading: "DSR24 in Zahlen",
                            paragraph: "Unsere Erfolge sprechen für sich",
                            image: 102,
                            bulletpoints: [
                                {
                                    icon: "fa-regular fa-face-smile",
                                    number: "65",
                                    label: "Zufriedene Kunden -"
                                },
                                {
                                    icon: "fa-regular fa-newspaper",
                                    number: "85",
                                    label: "Projeckte -"
                                },
                                {
                                    icon: "fa-regular fa-clock",
                                    number: "35",
                                    label: "Jahre Erfahrung"
                                },
                                {
                                    icon: "fa-solid fa-trophy",
                                    number: "20",
                                    label: "Auszeichnungen"
                                },
                            ],
                        },
                        {
                            type: "dsrTemplate1.homepage.team",
                            enabled: true,
                            title: "Unser Team",
                            members: [
                                { image: 801, name: "Patrick", role: "CEO" },
                                { image: 802, name: "Katharina", role: "Managerin" },
                                { image: 803, name: "Nadine", role: "Beraterin" }
                            ]
                        },

                        {
                            type: "dsrTemplate1.homepage.newsandjobs",
                            enabled: true,
                            title: "Wie alles begann",
                            subtitle: "Wie alles begann",
                            items: [
                                { icon: 1001, title: "News", buttonLink: "/news", buttonnewtab: true },
                                { icon: 1002, title: "Jobs", buttonLink: "/jobs", buttonnewtab: true },
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.reviews",
                            enabled: true,
                            backgroundimage: 901,
                            items: [
                                {
                                    image: 902,
                                    name: "Jane Doe",
                                    age: "32 Jahre",
                                    job: "Arztin",
                                    text: "DSR24 hat mir geholfen, 2.500€ von der gegnerischen Versicherung zu erhalten!",
                                    buttonLink: "/use-case?id=1",
                                    buttoncaption: "Geschichte lesen",
                                    buttonnewtab: true
                                },
                                {
                                    image: 903,
                                    name: "Michael Schmidt",
                                    age: "45 Jahre",
                                    job: "Ingenieur",
                                    text: "Schnell, professionell und ohne Stress.Ich kann DSR24 wirklich empfehlen!",
                                    buttonLink: "/use-case?id=2",
                                    buttoncaption: "Geschichte lesen",
                                    buttonnewtab: true
                                },
                                {
                                    image: 904,
                                    name: "Sarah Muller",
                                    age: "28 Jahre",
                                    job: "Lehrerin aus Hamburg",
                                    text: "DSR24 hat sich um alles gekümmert. Ich musste mich um nichts sorgen!.",
                                    buttonLink: "/use-case?id=3",
                                    buttoncaption: "Geschichte lesen",
                                    buttonnewtab: true
                                },
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.quickactions",
                            title: "Check our Actions",
                            subtitle: "Quick Actions",
                            enabled: true,
                            items: [
                                { icon: 1003, title: "DsrKlaert", buttonLink: "/dsrklaert", buttonnewtab: true },
                                { icon: 1005, title: "FAQ", buttonLink: "/faq", buttonnewtab: true },
                                { icon: 1006, title: "Blog", buttonLink: "/blog", buttonnewtab: true },
                                { icon: 1007, title: "Downloads", buttonLink: "/download", buttonnewtab: true }
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.contact",
                            enabled: true,
                            title: "KONTAKTIEREN SIE UNS",
                            mapiframe: "https://www.google.com/maps/embed?pb=!1m18!...",
                            addresslabel: "Standort:",
                            iconaddress: 1201,
                            address: "Segelhorster Str. 2, 31840 Hessisch Oldendorf, Germany",
                            emailaddress: 1202,
                            emaillabel: "Email:",
                            email: "info@dsr24.de",
                            phoneicon: 1203,
                            phonelabel: "Anrufen:",
                            phone: "0800 - 321 24 24",
                            formtitle: "Kontaktformular",
                            formbuttoncaption: "Nachricht senden",
                            formsuccessmessage: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet."
                        }
                    ]
            },
            {
                url: "dsr24.de/en/",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks:
                    [
                        {
                            type: "dsrTemplate1.homepage.hero",
                            enabled: true,
                            title: "Did you have an accident that wasn't your fault?",
                            subtitle: "DSR24 helps you for free!",
                            backgroundimage: 123,
                            overlayopacity: 0.6,
                            buttoncaption: "Report damage case",
                            buttonlink: "/report-damage",
                            buttonnewtab: true
                        },
                        {
                            type: "dsrTemplate1.homepage.about-us",
                            enabled: true,
                            title: "Your reliable partner for accident damages",
                            subtitle: "Professional damage settlement with years of experience",
                            bulletpoints: [
                                "Free consultation and support",
                                "Fast and straightforward processing",
                                "Maximum compensation for you",
                            ],
                            paragraph: "With DSR24, you're in good hands. We take care of all aspects of your damage case and ensure you get what you're entitled to.",
                            image: 102,
                            buttoncaption: "Learn more about us",
                            buttonlink: "/about-us",
                            buttonnewtab: true

                        },
                        {
                            type: "dsrTemplate1.homepage.partners",
                            enabled: true,
                            logos: [201, 202, 203, 204, 205]
                        },
                        {
                            type: "dsrTemplate1.homepage.features",
                            enabled: true,
                            videoid: 301,
                            videoimage: 302,
                            items: [
                                {
                                    icon: "fa-solid fa-clipboard-list",
                                    title: "Free Consultation",
                                    text: "We provide comprehensive and free advice on all questions related to your damage case"
                                },
                                {
                                    icon: "fa-solid fa-gem",
                                    title: "Quick Processing",
                                    text: "With our years of experience, we handle your damage case quickly and efficiently."
                                },
                                {
                                    icon: "fa-solid fa-image",
                                    title: "Maximum Compensation",
                                    text: "We use all legal options to ensure you get the maximum compensation"
                                },
                                {
                                    icon: "fa-solid fa-shield",
                                    title: "Personal Support",
                                    text: "You have a dedicated contact person who guides you through the entire process"
                                }
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.services",
                            title: "Our Services",
                            subtitle: "Services",
                            enabled: true,
                            items: [
                                {
                                    icon: 401,
                                    title: "DSR24 for Workshops",
                                    text: "The ideal line for your successful damage management.",
                                    buttonLink: "/services?id=workshops",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 402,
                                    title: "DSR24 for Car Rental",
                                    text: "Be the first contact for replacement vehicle needs.",
                                    buttonLink: "/services?id=car-rental",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 403,
                                    title: "DSR24 for Lawyers",
                                    text: "Easily secure regular client mandates.",
                                    buttonLink: "/services?id=lawyers",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 404,
                                    title: "DSR24 for Appraisers",
                                    text: "Get assignments quickly and easily.",
                                    buttonLink: "/services?id=appraisers",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 405,
                                    title: "DSR24 for Towing Services",
                                    text: "Be the first choice for recovery needs.",
                                    buttonLink: "/services?id=towing",
                                    buttonnewtab: true
                                },
                                {
                                    icon: 406,
                                    title: "Fast Help for Accident Damage",
                                    text: "Get everything from one source in case of an accident!",
                                    buttonLink: "/services?id=accident-damage",
                                    buttonnewtab: true
                                }

                            ]

                        },
                        {
                            type: "dsrTemplate1.homepage.call_to_action",
                            enabled: true,
                            title: "Call to Action",
                            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            icon: "fa-solid fa-bullhorn ",
                            buttoncaption: "Get Started Now",
                            buttonlink: "/contact",
                            buttonnewtab: false
                        },

                        {
                            type: "dsrTemplate1.homepage.portfolio",
                            enabled: true,
                            subtitle: "Portfolio",
                            title: "Our Portfolio",

                            tabs: [
                                {
                                    label: "All",
                                    items: [
                                        { image: 701, title: "Project 1" },
                                        { image: 702, title: "Project 2" },
                                        { image: 703, title: "Project 3" },
                                        { image: 704, title: "Project 4" },
                                        { image: 705, title: "Project 5" },
                                        { image: 706, title: "Project 6" },
                                        { image: 707, title: "Project 7" },
                                        { image: 708, title: "Project 8" }
                                    ]
                                },
                                {
                                    label: "App",
                                    items: [
                                        { image: 701, title: "App 1" },
                                        { image: 703, title: "App 3" },
                                        { image: 707, title: "App 7" }
                                    ]
                                },
                                {
                                    label: "Map",
                                    items: [
                                        { image: 704, title: "Map 4" },
                                        { image: 706, title: "Map 6" }
                                    ]
                                },
                                {
                                    label: "Web",
                                    items: [
                                        { image: 702, title: "Web 2" },
                                        { image: 705, title: "Web 5" },
                                        { image: 708, title: "Web 8" }
                                    ]
                                }

                            ],
                        },

                        {
                            type: "stats",
                            enabled: true,
                            title: "DSR24 Statistics",
                            subtitle: "Statistics",
                            heading: "DSR24 by the Numbers",
                            paragraph: "Our successes speak for themselves",
                            image: 102,
                            bulletpoints: [
                                {
                                    icon: "fa-regular fa-face-smile",
                                    number: "65",
                                    label: "Satisfied Customers -"
                                },
                                {
                                    icon: "fa-regular fa-newspaper",
                                    number: "85",
                                    label: "Projects -"
                                },
                                {
                                    icon: "fa-regular fa-clock",
                                    number: "35",
                                    label: "Years of Experience"
                                },
                                {
                                    icon: "fa-solid fa-trophy",
                                    number: "20",
                                    label: "Awards"
                                },
                            ],
                        },
                        {
                            type: "dsrTemplate1.homepage.team",
                            enabled: true,
                            title: "Our Team",
                            members: [
                                { image: 801, name: "Patrick", role: "CEO" },
                                { image: 802, name: "Katharina", role: "Manager" },
                                { image: 803, name: "Nadine", role: "Consultant" }
                            ]
                        },

                        {
                            type: "dsrTemplate1.homepage.newsandjobs",
                            enabled: true,
                            title: "How it all began",
                            subtitle: "How it all began",
                            items: [
                                { icon: 1001, title: "News", buttonLink: "/news", buttonnewtab: true },
                                { icon: 1002, title: "Jobs", buttonLink: "/jobs", buttonnewtab: true },
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.reviews",
                            enabled: true,
                            backgroundimage: 901,
                            items: [
                                {
                                    image: 902,
                                    name: "Jane Doe",
                                    age: "32 years",
                                    job: "Doctor",
                                    text: "DSR24 helped me get €2,500 from the third-party insurance!",
                                    buttonLink: "/use-case?id=1",
                                    buttoncaption: "Read story",
                                    buttonnewtab: true
                                },
                                {
                                    image: 903,
                                    name: "Michael Schmidt",
                                    age: "45 years",
                                    job: "Engineer",
                                    text: "Quick, professional, and stress-free. I can really recommend DSR24!",
                                    buttonLink: "/use-case?id=2",
                                    buttoncaption: "Read story",
                                    buttonnewtab: true
                                },
                                {
                                    image: 904,
                                    name: "Sarah Muller",
                                    age: "28 years",
                                    job: "Teacher from Hamburg",
                                    text: "DSR24 took care of everything. I didn't have to worry about anything!",
                                    buttonLink: "/use-case?id=3",
                                    buttoncaption: "Read story",
                                    buttonnewtab: true
                                },
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.quickactions",
                            title: "Check our Actions",
                            subtitle: "Quick Actions",
                            enabled: true,
                            items: [
                                { icon: 1003, title: "DSR Clarifies", buttonLink: "/dsr-clarifies", buttonnewtab: true },
                                { icon: 1005, title: "FAQ", buttonLink: "/faq", buttonnewtab: true },
                                { icon: 1006, title: "Blog", buttonLink: "/blog", buttonnewtab: true },
                                { icon: 1007, title: "Downloads", buttonLink: "/download", buttonnewtab: true }
                            ]
                        },
                        {
                            type: "dsrTemplate1.homepage.contact",
                            enabled: true,
                            title: "CONTACT US",
                            mapiframe: "https://www.google.com/maps/embed?pb=!1m18!...",
                            addresslabel: "Location:",
                            iconaddress: 1201,
                            address: "Segelhorster Str. 2, 31840 Hessisch Oldendorf, Germany",
                            emailaddress: 1202,
                            emaillabel: "Email:",
                            email: "info@dsr24.de",
                            phoneicon: 1203,
                            phonelabel: "Call:",
                            phone: "0800 - 321 24 24",
                            formtitle: "Contact Form",
                            formbuttoncaption: "Send Message",
                            formsuccessmessage: "Thank you! Your message has been sent successfully."
                        }
                    ]
            }
        ]

    },

    {
        id: 202,
        slug: "about-us",
        title: "About Us",
        contents:
            [
                {
                    url: "dsr24.de/ueber-uns",
                    lang: "DE",
                    lastUpdated: "2026-02-12 13:45:10",
                    blocks:
                        [
                            {
                                type: "dsrTemplate1.about-us.header",
                                enabled: true,
                                title: "Über uns",
                                subtitle: "Ein Blick auf unsere Geschichte",
                                backgroundimage: 123
                            },
                            {
                                type: "dsrTemplate1.about-us.content",
                                enabled: true,
                                title: "Wer wir sind",
                                paragraph: "DSR24 ist seit über 35 Jahren Ihr zuverlässiger Partner bei Unfallschäden und Schadenregulierung.",
                                image: 102
                            }
                        ]
                },
                {
                    url: "dsr24.de/en/about-us",
                    lang: "EN",
                    lastUpdated: "2026-02-12 13:45:10",
                    blocks:
                        [
                            {
                                type: "dsrTemplate1.about-us.header",
                                enabled: true,
                                title: "Über uns",
                                subtitle: "Ein Blick auf unsere Geschichte",
                                backgroundimage: 123
                            },
                            {
                                type: "dsrTemplate1.about-us.content",
                                enabled: true,
                                title: "Wer wir sind",
                                paragraph: "DSR24 ist seit über 35 Jahren Ihr zuverlässiger Partner bei Unfallschäden und Schadenregulierung.",
                                image: 102
                            }
                        ]
                }
            ]
    },

    {
        id: 203,
        slug: "blog",
        title: "Blog",
        contents: [
            {
                url: "dsr24.de/blog",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.blog.header",
                        enabled: true,
                        title: "Unser Blog",
                        subtitle: "Die neuesten Artikel und Nachrichten",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.blog.search",
                        enabled: true,
                        placeholder: "Blog durchsuchen...",
                        title: "Nach Artikeln suchen"
                    },
                    {
                        type: "dsrTemplate1.blog.grid",
                        enabled: true,
                        title: "Blog Artikel",
                        items: []
                    }
                ]
            },
            {
                url: "dsr24.de/en/blog",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.blog.header",
                        enabled: true,
                        title: "Our Blog",
                        subtitle: "The latest articles and news",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.blog.search",
                        enabled: true,
                        placeholder: "Search blog...",
                        title: "Search Articles"
                    },
                    {
                        type: "dsrTemplate1.blog.grid",
                        enabled: true,
                        title: "Blog Articles",
                        items: []
                    }
                ]
            }
        ]
    },

    {
        id: 204,
        slug: "downloads",
        title: "Downloads",
        contents: [
            {
                url: "dsr24.de/downloads",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.downloads.header",
                        enabled: true,
                        title: "Downloads",
                        subtitle: "Alle Dokumente und Dateien zum Herunterladen",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.downloads.grid",
                        enabled: true,
                        title: "Verfügbare Downloads",
                        items: []
                    }
                ]
            },
            {
                url: "dsr24.de/en/downloads",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.downloads.header",
                        enabled: true,
                        title: "Downloads",
                        subtitle: "All documents and files available for download",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.downloads.grid",
                        enabled: true,
                        title: "Available Downloads",
                        items: []
                    }
                ]
            }
        ]
    },

    {
        id: 205,
        slug: "faq",
        title: "FAQ",
        contents: [
            {
                url: "dsr24.de/haeufig-gestellte-fragen",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.faq.header",
                        enabled: true,
                        title: "Häufig gestellte Fragen",
                        subtitle: "Die Antworten auf Ihre Fragen",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.faq.search",
                        enabled: true,
                        placeholder: "Fragen durchsuchen...",
                        title: "Finden Sie Antworten"
                    },
                    {
                        type: "dsrTemplate1.faq.grid",
                        enabled: true,
                        title: "Fragen und Antworten",
                        items: []
                    }
                ]
            },
            {
                url: "dsr24.de/en/faq",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.faq.header",
                        enabled: true,
                        title: "Frequently Asked Questions",
                        subtitle: "Answers to your questions",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.faq.search",
                        enabled: true,
                        placeholder: "Search questions...",
                        title: "Find Answers"
                    },
                    {
                        type: "dsrTemplate1.faq.grid",
                        enabled: true,
                        title: "Questions and Answers",
                        items: []
                    }
                ]
            }
        ]
    },

    {
        id: 206,
        slug: "jobs",
        title: "Jobs",
        contents: [
            {
                url: "dsr24.de/stellenangebote",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.jobs.header",
                        enabled: true,
                        title: "Stellenangebote",
                        subtitle: "Werden Sie Teil unseres Teams",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.jobs.content",
                        enabled: true,
                        title: "Karriere bei DSR24",
                        paragraph: "Wir suchen motivierte und engagierte Mitarbeiter, die unser Team verstärken möchten.",
                        image: 102
                    },
                    {
                        type: "dsrTemplate1.jobs.grid",
                        enabled: true,
                        title: "Offene Positionen",
                        items: []
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.jobs.header",
                        enabled: true,
                        title: "Job Openings",
                        subtitle: "Become part of our team",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.jobs.content",
                        enabled: true,
                        title: "Careers at DSR24",
                        paragraph: "We are looking for motivated and dedicated employees to strengthen our team.",
                        image: 102
                    },
                    {
                        type: "dsrTemplate1.jobs.grid",
                        enabled: true,
                        title: "Open Positions",
                        items: []
                    }
                ]
            }
        ]
    },

    {
        id: 207,
        slug: "job-details",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/stellendetails",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.job-details.header",
                        enabled: true,
                        title: "Stellendetails",
                        subtitle: "Jobdetails und Anforderungen",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.job-details.content",
                        enabled: true,
                        title: "Stellen Details",
                        paragraph: "Detaillierte Informationen zur Position, zu den Anforderungen und zum Unternehmen.",
                        image: 102
                    }
                ]
            },
            {
                url: "dsr24.de/en/job-details",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.job-details.header",
                        enabled: true,
                        title: "Job Details",
                        subtitle: "Position details and requirements",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.job-details.content",
                        enabled: true,
                        title: "Position Details",
                        paragraph: "Detailed information about the position, requirements, and the company.",
                        image: 102
                    }
                ]
            }
        ]
    },


    {
        id: 208,
        slug: "news",
        title: "News",
        contents: [
            {
                url: "dsr24.de/nachrichten",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news.header",
                        enabled: true,
                        title: "Nachrichten",
                        subtitle: "Die neuesten Meldungen von DSR24",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.news.grid",
                        enabled: true,
                        title: "Neueste Nachrichten",
                        items: []
                    }
                ]
            },
            {
                url: "dsr24.de/en/news",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news.header",
                        enabled: true,
                        title: "News",
                        subtitle: "The latest updates from DSR24",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.news.grid",
                        enabled: true,
                        title: "Latest News",
                        items: []
                    }
                ]
            }
        ]
    },

    {
        id: 209,
        slug: "news-details",
        title: "News Details",
        contents: [
            {
                url: "dsr24.de/nachrichten-details",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news-details.header",
                        enabled: true,
                        title: "Nachrichtendetails",
                        subtitle: "Aktuelle Nachrichten von DSR24",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.news-details.content",
                        enabled: true,
                        title: "Nachrichteninhalt",
                        paragraph: "Vollständiger Inhalt der Nachricht mit allen wichtigen Details.",
                        image: 102
                    }
                ]
            },
            {
                url: "dsr24.de/en/news-details",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news-details.header",
                        enabled: true,
                        title: "News Details",
                        subtitle: "Current news from DSR24",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.news-details.content",
                        enabled: true,
                        title: "News Content",
                        paragraph: "Full news content with all important details.",
                        image: 102
                    }
                ]
            }
        ]
    },

    {
        id: 210,
        slug: "services",
        title: "Services",
        contents: [
            {
                url: "dsr24.de/dienstleistungen",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.header",
                        enabled: true,
                        title: "Unsere Dienstleistungen",
                        subtitle: "Maßgeschneiderte Lösungen für Ihre Bedürfnisse",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.services.content",
                        enabled: true,
                        title: "Service-Übersicht",
                        paragraph: "DSR24 bietet umfassende Dienstleistungen für alle Stakeholder in der Unfallschadenregulierung.",
                        image: 102
                    }
                ]
            },
            {
                url: "dsr24.de/en/services",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.header",
                        enabled: true,
                        title: "Our Services",
                        subtitle: "Tailored solutions for your needs",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.services.content",
                        enabled: true,
                        title: "Service Overview",
                        paragraph: "DSR24 offers comprehensive services for all stakeholders involved in accident claims management.",
                        image: 102
                    }
                ]
            }
        ]
    },

    {
        id: 211,
        slug: "use-case",
        title: "Use Cases",
        contents: [
            {
                url: "dsr24.de/anwendungsfaelle",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.use-case.header",
                        enabled: true,
                        title: "Anwendungsfälle",
                        subtitle: "Echte Erfolgsgeschichten von DSR24",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.use-case.content",
                        enabled: true,
                        title: "Use Case Details",
                        paragraph: "Erfahren Sie, wie DSR24 Kunden bei der Schadenregulierung geholfen hat.",
                        image: 102
                    }
                ]
            },
            {
                url: "dsr24.de/en/use-case",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.use-case.header",
                        enabled: true,
                        title: "Use Cases",
                        subtitle: "Real success stories from DSR24",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.use-case.content",
                        enabled: true,
                        title: "Use Case Details",
                        paragraph: "Learn how DSR24 has supported customers in accident claims management.",
                        image: 102
                    }
                ]
            }
        ]
    },

    {
        id: 212,
        slug: "dsrklaert",
        title: "DSRKLAERT",
        contents: [
            {
                url: "dsr24.de/dsrklaert",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.dsrklaert.header",
                        enabled: true,
                        title: "DSR Klärt auf",
                        subtitle: "Wissen und Informationen rund um Unfallschäden",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.dsrklaert.grid",
                        enabled: true,
                        title: "Aufklärungsartikel",
                        items: []
                    },
                    {
                        type: "dsrTemplate1.dsrklaert.calltoaction",
                        enabled: true,
                        title: "Kontaktieren Sie uns",
                        text: "Haben Sie Fragen? Wir helfen Ihnen gerne weiter.",
                        buttoncaption: "Jetzt Kontakt aufnehmen",
                        buttonlink: "/kontakt",
                        buttonnewtab: false
                    }
                ]
            },
            {
                url: "dsr24.de/en/dsrklaert",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.dsrklaert.header",
                        enabled: true,
                        title: "DSR Explains",
                        subtitle: "Knowledge and information about accident damage",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.dsrklaert.grid",
                        enabled: true,
                        title: "Educational Articles",
                        items: []
                    },
                    {
                        type: "dsrTemplate1.dsrklaert.calltoaction",
                        enabled: true,
                        title: "Contact Us",
                        text: "Do you have questions? We are happy to help.",
                        buttoncaption: "Contact Us Now",
                        buttonlink: "/contact",
                        buttonnewtab: false
                    }
                ]
            }
        ]
    }
];








