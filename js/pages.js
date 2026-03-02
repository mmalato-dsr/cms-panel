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
                    blocks: [
                        {
                            type: "dsrTemplate1.about-us.header",
                            enabled: true,
                            kicker: "#",
                            title: "Über uns",
                            subtitle_1: "Lerne mehr über DSR24",
                            subtitle_2: "Ihr zuverlässiger Partner bei Unfallschäden",
                            text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                        },
                        {
                            type: "dsrTemplate1.about-us.text_image",
                            enabled: true,
                            subtitle: "WIR FÜR EUCH",
                            title: "Lerne uns besser kennen",
                            paragraph: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupida tat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            image: 102
                        },
                        {
                            type: "dsrTemplate1.about-us.video",
                            enabled: true,
                            subtitle: "DSR24 VORSTELLUNGSVIDEO",
                            title: "Unser Unternehmen im Überblick",
                            poster: 0,
                            videoId: 700
                        },
                        {
                            type: "dsrTemplate1.about-us.process_section",
                            enabled: true,
                            subtitle: "ABRECHNUNGSPROZESS",
                            title: "Ablauf der Schadenregulierung",
                            items: [
                                { title: "STEP 1", text: "Du meldest deinen Schaden bei uns und erhältst eine Bestätigungs-E-Mail." },
                                { title: "STEP 2", text: "Wir prüfen deinen Fall und melden uns, wenn Informationen fehlen sollten. Solltest du einen Mietwagen brauchen, führen wir mit dir ein Informationsgespräch." },
                                { title: "STEP 3", text: "Der Sachverständige meldet sich i. d. R. binnen 48 Std. bei dir, um dein Fahrzeug zu begutachten. Sollten wir aufgrund einer geringen Schadenhöhe nur einen Kostenvoranschlag einer Werkstatt benötigen, melden wir uns bei dir." },
                                { title: "STEP 4", text: "Wir ermitteln die Versicherung des Unfallgegners und unsere Rechtsabteilung legitimiert sich ggü. dieser als dein Rechtsbeistand.", readMore: true },
                                { title: "STEP 5", text: "Nach Vorliegen des Gutachtens beziffert unsere Rechtsabteilung deine Schadenersatzansprüche ggü. der gegnerischen Haftpflichtversicherung. Dies hat zwischen 4-8 Wochen Zeit für die Bearbeitung." },
                                { title: "STEP 6", text: "Nach Ablauf der Zahlungsfrist erinnern wir die Versicherung. Evtl. benötigt die Versicherung noch Nachweise (Zeugen, Bilder/Videos oder die E-Akte (Herausgabe durch Behörden kann bis zu 8 Wochen dauern)), um die Haftung bestätigen zu können." },
                                { title: "STEP 7", text: "Haftungsbestätigung der gegnerischen Versicherung und fiktive Zahlung der Schadenssumme oder Reparatur deines Fahrzeugs. Jede Abrechnung der gegnerischen Versicherung wird von uns geprüft (Quote, Kürzung o. Ä.) und Rücksprache mit dir gehalten." },
                            ]
                        }
                    ]
                },
                {
                    url: "dsr24.de/en/about-us",
                    lang: "EN",
                    lastUpdated: "2026-02-12 13:45:10",
                    blocks: [
                        {
                            type: "dsrTemplate1.about-us.header",
                            enabled: true,
                            kicker: "#",
                            title: "About us",
                            subtitle_1: "Learn more about DSR24",
                            subtitle_2: "Your reliable partner for accident claims",
                            text: "Click on a card to view the explanation"
                        },
                        {
                            type: "dsrTemplate1.about-us.text_image",
                            enabled: true,
                            subtitle: "WE’RE HERE FOR YOU",
                            title: "Get to know us better",
                            paragraph:
                                "DSR24 has been a trusted partner in accident damage and claims management for over 35 years. We support you from the first report to the final settlement—clear, fast, and always with your best interest in mind.",
                            image: 102
                        },
                        {
                            type: "dsrTemplate1.about-us.video",
                            enabled: true,
                            subtitle: "DSR24 INTRODUCTION VIDEO",
                            title: "Our company at a glance",
                            poster: 0,
                            videoId: 700
                        },
                        {
                            type: "dsrTemplate1.about-us.process_section",
                            enabled: true,
                            subtitle: "SETTLEMENT PROCESS",
                            title: "How claims settlement works",
                            items: [
                                {
                                    title: "STEP 1",
                                    text: "You report your claim to us and receive a confirmation email."
                                },
                                {
                                    title: "STEP 2",
                                    text: "We review your case and contact you if any information is missing. If you need a rental car, we’ll discuss the next steps with you."
                                },
                                {
                                    title: "STEP 3",
                                    text: "An independent assessor usually contacts you within 48 hours to inspect your vehicle. If the damage is minor and we only need an estimate from a workshop, we will let you know."
                                },
                                {
                                    title: "STEP 4",
                                    text: "We identify the other party’s insurer and our legal department registers as your legal representative.",
                                    readMore: true
                                },
                                {
                                    title: "STEP 5",
                                    text: "Once the assessment is available, our legal team calculates your compensation claims against the opposing liability insurer. Processing typically takes 4–8 weeks."
                                },
                                {
                                    title: "STEP 6",
                                    text: "After the payment deadline, we send a reminder to the insurer. Additional proof may be required (witnesses, photos/videos, or the official case file—requests to authorities can take up to 8 weeks) to confirm liability."
                                },
                                {
                                    title: "STEP 7",
                                    text: "Once liability is confirmed, you receive payment of the assessed damage amount (settlement) or the repair costs are covered. We review every insurer statement (e.g., liability split, reductions) and coordinate with you."
                                }
                            ]
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
                url: "dsr24.de/arbeitsplaetze.html",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.arbeitsplaetze.header",
                        enabled: true,
                        kicker: "#",
                        title: "Jobs",
                        subtitle: "Deine Karriere bei DSR24 beginnt hier."
                    },
                    {
                        type: "dsrTemplate1.arbeitsplaetze.text_image",
                        enabled: true,
                        subtitle: "JOB TITLE",
                        title: "Arbeit dei DSR24",
                        paragraph:
                            "DSR24 steht für verlässliche Prozesse, starke Teams und echte Verantwortung. Bei uns arbeitest du an Lösungen, die Menschen nach einem Unfall wirklich weiterhelfen.\n\nOb Technik, Operations, Legal oder Marketing: Wir suchen motivierte Menschen, die mitdenken und gemeinsam wachsen wollen.",
                        image: 102
                    },
                    {
                        type: "dsrTemplate1.arbeitsplaetze.grid",
                        enabled: true,
                        subtitle: "OFFENE STELLEN",
                        title: "Wir stellen ein",
                        items: [
                            {
                                id: 1,
                                title: "Web Designer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Full time",
                                badgeType: "success", // optional for UI
                                buttoncaption: "Hier bewerben",
                                buttonlink: "/job-details.html?id=web-designer",
                                buttonnewtab: true
                            },
                            {
                                id: 2,
                                title: "Front-end Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Remote",
                                badgeType: "primary",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=front-end-developer"

                            },
                            {
                                id: 3,
                                title: "Back-end Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "WFH",
                                badgeType: "info",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=back-end-developer"
                            },
                            {
                                id: 4,
                                title: "Web Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Full time",
                                badgeType: "success",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=web-developer"
                            },
                            {
                                id: 5,
                                title: "Marketing Trainee",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Contract",
                                badgeType: "warning",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=marketing-trainee"
                            },
                            {
                                id: 6,
                                title: "Analyst",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Contract",
                                badgeType: "warning",
                                buttoncaption: "Hier bewerben",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=analyst"
                            }
                        ]
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs.html",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.jobs.header",
                        enabled: true,
                        kicker: "#",
                        title: "Jobs",
                        subtitle: "Your career at DSR24 starts here.",
                    },
                    {
                        type: "dsrTemplate1.jobs.text_image",
                        enabled: true,
                        subtitle: "JOB TITLE",
                        title: "Working at DSR24",
                        paragraph:
                            "DSR24 stands for reliable processes, strong teams, and real ownership. You’ll work on solutions that genuinely help people after an accident.\n\nFrom tech and operations to legal and marketing: we’re looking for motivated people who take initiative and want to grow together.",
                        image: 102
                    },
                    {
                        type: "dsrTemplate1.jobs.grid",
                        enabled: true,
                        subtitle: "JOBS AVAILABLE",
                        title: "We are hiring",
                        items: [
                            {
                                id: 1,
                                title: "Web Designer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Full time",
                                badgeType: "success",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=web-designer"
                            },
                            {
                                id: 2,
                                title: "Front-end Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Remote",
                                badgeType: "primary",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=front-end-developer"
                            },
                            {
                                id: 3,
                                title: "Back-end Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "WFH",
                                badgeType: "info",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=back-end-developer"
                            },
                            {
                                id: 4,
                                title: "Web Developer",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Full time",
                                badgeType: "success",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=web-developer"
                            },
                            {
                                id: 5,
                                title: "Marketing Trainee",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Contract",
                                badgeType: "warning",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=marketing-trainee"
                            },
                            {
                                id: 6,
                                title: "Analyst",
                                company: "DSR24",
                                location: "Germany",
                                badge: "Contract",
                                badgeType: "warning",
                                buttoncaption: "Apply here",
                                buttonnewtab: true,
                                buttonlink: "/jobs-details.html?id=analyst"
                            }
                        ]
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
                ]
            },
            {
                url: "dsr24.de/en/job-details",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
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
                url: "dsr24.de/news.html",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news.header",
                        enabled: true,
                        kicker: "#",
                        title: "Nachrichten",
                        subtitle: "Aktuelle Tipps, Neuigkeiten und Ratgeber rund um Unfallschäden und deren Abwicklung.",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.news.back",
                        enabled: true,
                        label: "Zurück",
                        url: "index.html"
                    },
                    {
                        type: "dsrTemplate1.news.grid",
                        enabled: true,
                        itemsPerPage: 6,
                        showPagination: true,
                        items: [
                            {
                                id: 1,
                                date: "19. Okt. 2020",
                                category: "Marketing",
                                title: "Schneller Leitfaden für Geschäfte mit Freunden.",
                                excerpt:
                                    "Es gibt mittlerweile eine Vielzahl an Blindtexten. Diese werden häufig verwendet, wenn ein Text benötigt wird, um einen Bereich zu füllen.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=schneller-leitfaden-1"
                            },
                            {
                                id: 2,
                                date: "19. Okt. 2020",
                                category: "Marketing",
                                title: "Tipps zur erfolgreichen Zusammenarbeit.",
                                excerpt:
                                    "Moderne Geschäftsbeziehungen erfordern klare Kommunikation und gegenseitiges Vertrauen. Hier erfahren Sie, worauf es ankommt.",
                                likes: 28,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=zusammenarbeit-tipps"
                            },
                            {
                                id: 3,
                                date: "19. Okt. 2020",
                                category: "Ratgeber",
                                title: "Was tun nach einem Verkehrsunfall?",
                                excerpt:
                                    "Nach einem Unfall ist es wichtig, ruhig zu bleiben und die richtigen Schritte einzuleiten. Dieser Leitfaden hilft Ihnen dabei.",
                                likes: 45,
                                author: "Max Mustermann",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=verkehrsunfall-ratgeber"
                            },
                            {
                                id: 4,
                                date: "19. Okt. 2020",
                                category: "Recht",
                                title: "Ihre Rechte bei einem Haftpflichtschaden.",
                                excerpt:
                                    "Erfahren Sie, welche Ansprüche Ihnen zustehen und wie DSR24 Sie bei der Durchsetzung unterstützt.",
                                likes: 37,
                                author: "Anna Schmidt",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=rechte-haftpflicht"
                            },
                            {
                                id: 5,
                                date: "19. Okt. 2020",
                                category: "Technik",
                                title: "Digitale Schadenmeldung leicht gemacht.",
                                excerpt:
                                    "Mit unserer digitalen Lösung melden Sie Schäden schnell und unkompliziert – jederzeit und überall.",
                                likes: 22,
                                author: "Max Mustermann",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=digitale-schadenmeldung"
                            },
                            {
                                id: 6,
                                date: "19. Okt. 2020",
                                category: "Unternehmen",
                                title: "DSR24 stellt neue Services vor.",
                                excerpt:
                                    "Wir erweitern unser Leistungsportfolio, um unseren Kunden noch effizientere Lösungen anzubieten.",
                                likes: 19,
                                author: "Anna Schmidt",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=neue-services"
                            }
                        ]
                    },
                    {
                        type: "dsrTemplate1.news.pagination",
                        enabled: true,
                        currentPage: 1,
                        totalPages: 3,
                        style: "numbers"
                    }
                ]
            },
            {
                url: "dsr24.de/en/news.html",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.news.header",
                        enabled: true,
                        kicker: "#",
                        title: "News",
                        subtitle: "Latest tips, updates and guides about accident claims and how they’re handled.",
                        backgroundimage: 123
                    },
                    {
                        type: "dsrTemplate1.news.back",
                        enabled: true,
                        label: "Back",
                        url: "index.html"
                    },
                    {
                        type: "dsrTemplate1.news.grid",
                        enabled: true,
                        itemsPerPage: 6,
                        showPagination: true,
                        items: [
                            {
                                id: 1,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-1"
                            },
                            {
                                id: 2,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-2"
                            },
                            {
                                id: 3,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-3"
                            },
                            {
                                id: 4,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-4"
                            },
                            {
                                id: 5,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-5"
                            },
                            {
                                id: 6,
                                date: "19th Oct, 2020",
                                category: "Marketing",
                                title: "Quick guide on business with friends.",
                                excerpt:
                                    "There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.",
                                likes: 33,
                                author: "Lisa Marvel",
                                authorAvatar: 0,
                                image: 0,
                                url: "news-details.html?id=quick-guide-6"
                            }
                        ]
                    },
                    {
                        type: "dsrTemplate1.news.pagination",
                        enabled: true,
                        currentPage: 1,
                        totalPages: 3,
                        style: "numbers"
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
                blocks: []
                
            },
            {
                url: "dsr24.de/en/news-details",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: []
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
                blocks: []
            },
            {
                url: "dsr24.de/en/services",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: []
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

/*=========================================
                    SERVICES
==========================================*/

window.services = [
    {
        slug: "werkstatt",
        title: "Werkstatt",
        contents: [
            {
                url: "dsr24.de/services.html?id=werkstatt",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Werkstatt",
                        subtitle: "Werkstatt - Wichtige Begriffe erklärt"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "WERKSTATT",
                        title: "Werkstatt",
                        paragraph: "In unserer Werkstatt bieten wir eine Vielzahl von Dienstleistungen an, um Ihre Bedürfnisse zu erfüllen. Hier sind einige wichtige Begriffe, die Sie kennen sollten:\n\nDie Werkstatt ist ein Ort, an dem technische Arbeiten durchgeführt werden. Sie können hier Reparaturen, Wartung und andere Dienstleistungen in Anspruch nehmen.",
                        image: 501
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=werkstatt",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Workshop",
                        subtitle: "Workshop - Key terms explained"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "WORKSHOP",
                        title: "Workshop",
                        paragraph: "We offer a wide range of services in our workshop to meet your needs. Here are some important terms you should know:\n\nThe workshop is a place where technical work is carried out. You can have repairs, maintenance, and other services done here.",
                        image: 501
                    }
                ]
            }
        ]
    },

    {
        slug: "autovermietungen",
        title: "Autovermietungen",
        contents: [
            {
                url: "dsr24.de/services.html?id=autovermietungen",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Autovermietungen",
                        subtitle: "Autovermietungen - Wichtige Begriffe erklärt"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "AUTOVERMIETUNGEN",
                        title: "Autovermietungen",
                        paragraph:
                            "Wenn Sie nach einem Unfall mobil bleiben müssen, unterstützen wir Sie bei der Organisation eines passenden Mietwagens...",
                        image: 502,
                        partnerLogo: 700
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=autovermietungen",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Car Rentals",
                        subtitle: "Car rentals - Key terms explained"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "CAR RENTALS",
                        title: "Car Rentals",
                        paragraph:
                            "If you need to stay mobile after an accident, we help you arrange a suitable rental car...",
                        image: 502,
                        partnerLogo: 700
                    }
                ]
            },
        ]
    },


    {
        slug: "rechtsanwalt",
        title: "Rechtsanwalt",
        contents: [
            {
                url: "dsr24.de/services.html?id=rechtsanwalt",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Rechtsanwalt",
                        subtitle: "Rechtsanwalt - Wichtige Begriffe erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "RECHTSANWALT",
                        title: "Rechtsanwalt",
                        paragraph:
                            "Nach einem Unfall ist es wichtig, dass Ihre Ansprüche vollständig und korrekt durchgesetzt werden. Ein Rechtsanwalt unterstützt Sie dabei, die Kommunikation mit der gegnerischen Versicherung zu übernehmen und alle erforderlichen Schritte einzuleiten.\n\nSo werden Fristen eingehalten, Kürzungen geprüft und Ihre Schadenersatzansprüche professionell vertreten.",
                        image: 503,
                        partnerLogo: 701,
                        partnerNote: "in Kooperation mit"
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=rechtsanwalt",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Lawyer",
                        subtitle: "Lawyer - Key terms explained",
                        text: "Click on a card to view the explanation"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "LAWYER",
                        title: "Lawyer",
                        paragraph:
                            "After an accident, it’s important that your claims are asserted fully and correctly. A lawyer supports you by handling communication with the other party’s insurer and initiating the necessary legal steps.\n\nThis helps ensure deadlines are met, reductions are reviewed, and your compensation claims are represented professionally.",
                        image: 503,
                        partnerLogo: 701
                    }
                ]
            }
        ]
    },

    {
        slug: "sachverstaendige",
        title: "Sachverstaendige",
        contents: [
            {
                url: "dsr24.de/services.html?id=sachverstaendige",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Sachverständige",
                        subtitle: "Sachverständige - Wichtige Begriffe erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "SACHVERSTÄNDIGE",
                        title: "Sachverständige",
                        paragraph:
                            "Ein Sachverständiger erstellt ein unabhängiges Gutachten zum Schaden an Ihrem Fahrzeug. Darin werden unter anderem Reparaturkosten, Wertminderung und ggf. Nutzungsausfall dokumentiert.\n\nDas Gutachten ist eine wichtige Grundlage für die Regulierung mit der Versicherung und hilft, Ihre Ansprüche nachvollziehbar zu belegen.",
                        image: 504,
                        partnerLogo: 702
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=sachverstaendige",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Assessors",
                        subtitle: "Assessors - Key terms explained",
                        text: "Click on a card to view the explanation"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "ASSESSORS",
                        title: "Assessors",
                        paragraph:
                            "An assessor prepares an independent report on the damage to your vehicle. This typically includes repair costs, any loss in value, and—if applicable—compensation for loss of use.\n\nThe report is an important basis for settlement with the insurer and helps document your claims clearly.",
                        image: 504,
                        partnerLogo: 702
                    }
                ]
            }
        ]
    },

    {
        slug: "abschleppdienst",
        title: "Abschleppdienst",
        contents: [
            {
                url: "dsr24.de/services.html?id=abschleppdienst",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Abschleppdienst",
                        subtitle: "Abschleppdienst - Wichtige Begriffe erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "ABSCHLEPPDIENST",
                        title: "Abschleppdienst",
                        paragraph:
                            "Wenn Ihr Fahrzeug nach einem Unfall nicht mehr fahrbereit ist, organisiert ein Abschleppdienst den sicheren Transport zur Werkstatt oder zu einem Verwahrplatz.\n\nWir unterstützen Sie dabei, schnell eine passende Lösung zu finden und die nächsten Schritte zuverlässig zu koordinieren.",
                        image: 505
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=abschleppdienst",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Towing Service",
                        subtitle: "Towing service - Key terms explained",
                        text: "Click on a card to view the explanation"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "TOWING SERVICE",
                        title: "Towing Service",
                        paragraph:
                            "If your vehicle is no longer roadworthy after an accident, a towing service arranges safe transport to a workshop or a secure storage location.\n\nWe help you find a suitable solution quickly and coordinate the next steps reliably.",
                        image: 505
                    }
                ]
            }
        ]
    },

    {
        slug: "unfallhilfe",
        title: "Unfalhilfe",
        contents: [
            {
                url: "dsr24.de/services.html?id=unfallhilfe",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Unfallhilfe",
                        subtitle: "Unfallhilfe - Wichtige Begriffe erklärt",
                        text: "Klicken Sie auf eine Karte, um die Erklärung zu sehen"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "UNFALLHILFE",
                        title: "Unfallhilfe",
                        paragraph:
                            "Direkt nach einem Unfall zählen schnelle, klare Schritte. Die Unfallhilfe unterstützt Sie dabei, die Situation richtig einzuschätzen, die notwendigen Informationen zu sichern und die nächsten Maßnahmen einzuleiten.\n\nWir begleiten Sie von der ersten Kontaktaufnahme bis zur weiteren Organisation (z. B. Werkstatt, Gutachten, Mietwagen), damit Sie entlastet sind.",
                        image: 506
                    }
                ]
            },
            {
                url: "dsr24.de/en/services.html?id=unfallhilfe",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.services.detail.header",
                        enabled: true,
                        kicker: "#",
                        title: "Accident Assistance",
                        subtitle: "Accident assistance - Key terms explained",
                        text: "Click on a card to view the explanation"
                    },
                    {
                        type: "dsrTemplate1.services.detail.text_image",
                        enabled: true,
                        subtitle: "ACCIDENT ASSISTANCE",
                        title: "Accident Assistance",
                        paragraph:
                            "Right after an accident, quick and clear steps matter. Accident assistance helps you assess the situation correctly, secure the necessary information, and initiate the next actions.\n\nWe support you from the first contact through further coordination (e.g., workshop, assessment, rental car) so you’re not left dealing with everything alone.",
                        image: 506
                    }
                ]
            }
        ]
    }

];


/*=========================================
                    jobs
==========================================*/

window.jobs = [
    {
        slug: "web-designer",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=web-designer",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.job-details.header",
                        enabled: true,
                        kicker: "#",
                        title: "Web Designer",
                        meta: "Germany · Vollzeit"
                    },
                    {
                        type: "dsrTemplate1.job-details.back",
                        enabled: true,
                        label: "Zurück",
                        url: "jobs.html" // or your jobs list page
                    },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Wir suchen einen kreativen Web Designer (m/w/d), der unser Team verstärkt.",
                        requirementsTitle: "Requirements",
                        requirements: [
                            "Starke UI/UX Skills",
                            "HTML, CSS, Figma",
                            "Auge fürs Detail"
                        ],
                        paragraph:
                            "Du gestaltest moderne Web-Interfaces, optimierst bestehende Designs und arbeitest eng mit Entwicklung und Marketing zusammen. Dabei achtest du auf Konsistenz, Performance und eine sehr gute Nutzerführung."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=web-designer",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    {
                        type: "dsrTemplate1.job-details.header",
                        enabled: true,
                        kicker: "#",
                        title: "Web Designer",
                        meta: "Germany · Full time"
                    },
                    {
                        type: "dsrTemplate1.job-details.back",
                        enabled: true,
                        label: "Back",
                        url: "jobs.html"
                    },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "We are looking for a creative Web Designer to join our team.",
                        requirementsTitle: "Requirements",
                        requirements: [
                            "Strong UI/UX skills",
                            "HTML, CSS, Figma",
                            "Attention to detail"
                        ],
                        paragraph:
                            "You will design modern web interfaces, improve existing layouts, and work closely with development and marketing. You care about consistency, performance, and a great user experience."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },
    {
        slug: "front-end-developer",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=front-end-developer",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Front-end Developer", meta: "Remote" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Werde Teil unseres Frontend-Teams und arbeite mit modernen Technologien.",
                        requirementsTitle: "Requirements",
                        requirements: ["JavaScript / React", "REST APIs", "Git Erfahrung"],
                        paragraph:
                            "Du entwickelst und pflegst UI-Komponenten, setzt Designs sauber um und achtest auf Performance sowie eine sehr gute User Experience. Gemeinsam mit Backend und Design bringst du Features schnell und zuverlässig in Produktion."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=front-end-developer",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Front-end Developer", meta: "Remote" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Join our frontend team working with modern technologies.",
                        requirementsTitle: "Requirements",
                        requirements: ["JavaScript / React", "REST APIs", "Git experience"],
                        paragraph:
                            "You will build and maintain UI components, implement designs with high fidelity, and focus on performance and a great user experience. Working closely with backend and design, you’ll ship features quickly and reliably."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },

    {
        slug: "back-end-developer",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=back-end-developer",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Back-end Developer", meta: "Remote" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Werde Teil unseres Backend-Teams und arbeite mit modernen Technologien.",
                        requirementsTitle: "Requirements",
                        requirements: ["Node.js / Express", "Database management", "API development"],
                        paragraph:
                            "Du entwickelst skalierbare Services, modellierst Datenstrukturen und sorgst für stabile Schnittstellen. Du arbeitest eng mit Frontend und Operations zusammen und bringst Qualität über Tests, Logging und Monitoring ins Produkt."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=back-end-developer",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Back-end Developer", meta: "Remote" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Join our backend team working with modern technologies.",
                        requirementsTitle: "Requirements",
                        requirements: ["Node.js / Express", "Database management", "API development"],
                        paragraph:
                            "You will build scalable services, model data structures, and ensure stable interfaces. You’ll work closely with frontend and operations, and bring quality through testing, logging, and monitoring."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },

    {
        slug: "web-developer",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=web-developer",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Web Developer", meta: "Germany · Vollzeit" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Wir suchen einen erfahrenen Web Developer, der unsere Plattform weiterentwickelt.",
                        requirementsTitle: "Requirements",
                        requirements: ["Full-stack development", "Node.js, Express", "Database management"],
                        paragraph:
                            "Du arbeitest an Features über den gesamten Stack, setzt Schnittstellen um und verbesserst bestehende Bereiche. Wichtig sind sauberes Engineering, verständlicher Code und ein Auge für Produktqualität."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=web-developer",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Web Developer", meta: "Germany · Full time" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "We are looking for a skilled Web Developer to build our platform.",
                        requirementsTitle: "Requirements",
                        requirements: ["Full-stack development", "Node.js, Express", "Database management"],
                        paragraph:
                            "You’ll work on features across the stack, implement APIs, and improve existing areas. We value clean engineering, readable code, and strong product quality."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },

    {
        slug: "marketing-trainee",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=marketing-trainee",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Marketing Trainee", meta: "Germany · Vollzeit" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Starte deine Marketing-Karriere bei uns als Trainee.",
                        requirementsTitle: "Requirements",
                        requirements: ["Leidenschaft für Marketing", "Starke Kommunikationsfähigkeiten", "Lernbereitschaft"],
                        paragraph:
                            "Du unterstützt bei Kampagnen, Content und Analysen. Du arbeitest mit verschiedenen Teams zusammen und lernst Schritt für Schritt, wie Marketingmaßnahmen geplant, umgesetzt und ausgewertet werden."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=marketing-trainee",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Marketing Trainee", meta: "Germany · Full time" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Kickstart your marketing career with us as a trainee.",
                        requirementsTitle: "Requirements",
                        requirements: ["Passion for marketing", "Strong communication skills", "Eagerness to learn"],
                        paragraph:
                            "You will support campaigns, content, and analysis. Working across teams, you’ll learn how marketing initiatives are planned, executed, and evaluated step by step."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    },

    {
        slug: "analyst",
        title: "Job Details",
        contents: [
            {
                url: "dsr24.de/jobs-details.html?id=analyst",
                lang: "DE",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Analyst", meta: "Germany · Vollzeit" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Zurück", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "Wir suchen einen datengetriebenen Analysten (m/w/d), der unser Team verstärkt.",
                        requirementsTitle: "Requirements",
                        requirements: ["Data analysis skills", "Experience with SQL and Excel", "Critical thinking"],
                        paragraph:
                            "Du analysierst Kennzahlen, erstellst Reports und leitest daraus konkrete Empfehlungen ab. Du arbeitest mit Product und Operations zusammen und hilfst dabei, Prozesse datenbasiert zu optimieren."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            },
            {
                url: "dsr24.de/en/jobs-details.html?id=analyst",
                lang: "EN",
                lastUpdated: "2026-02-12 13:45:10",
                blocks: [
                    { type: "dsrTemplate1.job-details.header", enabled: true, kicker: "#", title: "Analyst", meta: "Germany · Full time" },
                    { type: "dsrTemplate1.job-details.back", enabled: true, label: "Back", url: "jobs.html" },
                    {
                        type: "dsrTemplate1.job-details.description",
                        enabled: true,
                        title: "Job Description",
                        intro: "We are looking for a data-driven Analyst to join our team.",
                        requirementsTitle: "Requirements",
                        requirements: ["Data analysis skills", "Experience with SQL and Excel", "Critical thinking"],
                        paragraph:
                            "You will analyze KPIs, build reports, and turn insights into clear recommendations. You’ll collaborate with product and operations to optimize processes based on data."
                    },
                    {
                        type: "dsrTemplate1.job-details.apply",
                        enabled: true,
                        title: "Apply for this position",
                        fields: {
                            fullNameLabel: "Full name",
                            emailLabel: "Email",
                            cvLabel: "CV (PDF)",
                            messageLabel: "Message",
                            messagePlaceholder: "Write a short message..."
                        },
                        submitLabel: "Submit Application"
                    }
                ]
            }
        ]
    }
];

// NEWS DETAILS collection
window.news = [
  {
    slug: "quick-guide-on-business-with-friends",
    title: "Quick guide on business with friends.",
    contents: [
      {
        url: "dsr24.de/news-details.html?id=1",
        lang: "DE",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          {
            type: "dsrTemplate1.news-details.header",
            enabled: true,
            kicker: "#",
            title: "Schneller Leitfaden für Geschäfte mit Freunden.",
            meta: {
              date: "2024-06-01",
              author: "John Doe 1"
            }
          },
          {
            type: "dsrTemplate1.news-details.back",
            enabled: true,
            label: "Zurück zu News",
            url: "news.html"
          },
          {
            type: "dsrTemplate1.news-details.hero_card",
            enabled: true,
            title: "DSR24 News",
            backgroundimage: 0
          },
          {
            type: "dsrTemplate1.news-details.body",
            enabled: true,
            intro:
              "Dies ist der Einleitungsabsatz des Artikels. Er sollte die wichtigsten Informationen zusammenfassen und sofort Aufmerksamkeit erzeugen.",
            paragraph1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            section: {
              title: "Untertitel Beispiel",
              text:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            },
            quote:
              "Dies ist ein hervorgehobenes Zitat aus dem Artikel, um wichtige Informationen zu betonen.",
            paragraph2:
              "Abschließender Abschnitt des Inhalts. Sie können weitere strukturierte Abschnitte, Bilder, Listen oder eingebettete Inhalte hinzufügen."
          },
          {
            type: "dsrTemplate1.news-details.tags",
            enabled: true,
            label: "Tags:",
            items: ["Sicherheit", "Versicherung", "Update"]
          },
          {
            type: "dsrTemplate1.news-details.sidebar",
            enabled: true,
            shareTitle: "DIESEN ARTIKEL TEILEN",
            share: {
              facebook: true,
              twitter: true,
              linkedin: true
            },
            latestTitle: "AKTUELLE NEWS",
            latest: [
              { title: "So bearbeitet man Versicherungsfälle effizient", date: "10. Feb. 2026", url: "news-details.html?id=handle-claims-efficiently" },
              { title: "Neuer Service-Ausbau angekündigt", date: "08. Feb. 2026", url: "news-details.html?id=service-expansion" },
              { title: "DSR24 erreicht neuen Meilenstein", date: "05. Feb. 2026", url: "news-details.html?id=new-milestone" }
            ]
          }
        ]
      },
      {
        url: "dsr24.de/en/news-details.html?id=quick-guide-on-business-with-friends",
        lang: "EN",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          {
            type: "dsrTemplate1.news-details.header",
            enabled: true,
            kicker: "#",
            title: "Quick guide on business with friends.",
            meta: {
              date: "2024-06-01",
              author: "John Doe 1"
            }
          },
          {
            type: "dsrTemplate1.news-details.back",
            enabled: true,
            label: "Back to News",
            url: "news.html"
          },
          {
            type: "dsrTemplate1.news-details.hero_card",
            enabled: true,
            title: "DSR24 News",
            backgroundimage: 0
          },
          {
            type: "dsrTemplate1.news-details.body",
            enabled: true,
            intro:
              "This is the article introduction paragraph. It should summarize the most important information and immediately capture attention.",
            paragraph1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            section: {
              title: "Subtitle Example",
              text:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            },
            quote:
              "This is a highlighted quote from the article to emphasize key information.",
            paragraph2:
              "Final section of the article content. You can continue adding structured sections, images, lists or embedded content."
          },
          {
            type: "dsrTemplate1.news-details.tags",
            enabled: true,
            label: "Tags:",
            items: ["Security", "Insurance", "Update"]
          },
          {
            type: "dsrTemplate1.news-details.sidebar",
            enabled: true,
            shareTitle: "SHARE THIS ARTICLE",
            share: {
              facebook: true,
              twitter: true,
              linkedin: true
            },
            latestTitle: "LATEST NEWS",
            latest: [
              { title: "How to handle insurance claims efficiently", date: "Feb 10, 2026", url: "news-details.html?id=handle-claims-efficiently" },
              { title: "New service expansion announced", date: "Feb 08, 2026", url: "news-details.html?id=service-expansion" },
              { title: "DSR24 reaches new milestone", date: "Feb 05, 2026", url: "news-details.html?id=new-milestone" }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "news 2",
    title: "News 2",
    contents: [
      {
        url: "dsr24.de/news-details.html?id=2",
        lang: "DE",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          {
            type: "dsrTemplate1.news-details.header",
            enabled: true,
            kicker: "#",
            title: "News 2",
            meta: {
              date: "2024-06-01",
              author: "John Doe 1"
            }
          },
          {
            type: "dsrTemplate1.news-details.back",
            enabled: true,
            label: "Zurück zu News",
            url: "news.html"
          },
          {
            type: "dsrTemplate1.news-details.hero_card",
            enabled: true,
            title: "DSR24 News",
            backgroundimage: 0
          },
          {
            type: "dsrTemplate1.news-details.body",
            enabled: true,
            intro:
              "Dies ist der Einleitungsabsatz des Artikels. Er sollte die wichtigsten Informationen zusammenfassen und sofort Aufmerksamkeit erzeugen.",
            paragraph1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            section: {
              title: "Untertitel Beispiel",
              text:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            },
            quote:
              "Dies ist ein hervorgehobenes Zitat aus dem Artikel, um wichtige Informationen zu betonen.",
            paragraph2:
              "Abschließender Abschnitt des Inhalts. Sie können weitere strukturierte Abschnitte, Bilder, Listen oder eingebettete Inhalte hinzufügen."
          },
          {
            type: "dsrTemplate1.news-details.tags",
            enabled: true,
            label: "Tags:",
            items: ["Sicherheit", "Versicherung", "Update"]
          },
          {
            type: "dsrTemplate1.news-details.sidebar",
            enabled: true,
            shareTitle: "DIESEN ARTIKEL TEILEN",
            share: {
              facebook: true,
              twitter: true,
              linkedin: true
            },
            latestTitle: "AKTUELLE NEWS",
            latest: [
              { title: "So bearbeitet man Versicherungsfälle effizient", date: "10. Feb. 2026", url: "news-details.html?id=handle-claims-efficiently" },
              { title: "Neuer Service-Ausbau angekündigt", date: "08. Feb. 2026", url: "news-details.html?id=service-expansion" },
              { title: "DSR24 erreicht neuen Meilenstein", date: "05. Feb. 2026", url: "news-details.html?id=new-milestone" }
            ]
          }
        ]
      },
      {
        url: "dsr24.de/en/news-details.html?id=quick-guide-on-business-with-friends",
        lang: "EN",
        lastUpdated: "2026-02-12 13:45:10",
        blocks: [
          {
            type: "dsrTemplate1.news-details.header",
            enabled: true,
            kicker: "#",
            title: "Quick guide on business with friends.",
            meta: {
              date: "2024-06-01",
              author: "John Doe 1"
            }
          },
          {
            type: "dsrTemplate1.news-details.back",
            enabled: true,
            label: "Back to News",
            url: "news.html"
          },
          {
            type: "dsrTemplate1.news-details.hero_card",
            enabled: true,
            title: "DSR24 News",
            backgroundimage: 0
          },
          {
            type: "dsrTemplate1.news-details.body",
            enabled: true,
            intro:
              "This is the article introduction paragraph. It should summarize the most important information and immediately capture attention.",
            paragraph1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            section: {
              title: "Subtitle Example",
              text:
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
            },
            quote:
              "This is a highlighted quote from the article to emphasize key information.",
            paragraph2:
              "Final section of the article content. You can continue adding structured sections, images, lists or embedded content."
          },
          {
            type: "dsrTemplate1.news-details.tags",
            enabled: true,
            label: "Tags:",
            items: ["Security", "Insurance", "Update"]
          },
          {
            type: "dsrTemplate1.news-details.sidebar",
            enabled: true,
            shareTitle: "SHARE THIS ARTICLE",
            share: {
              facebook: true,
              twitter: true,
              linkedin: true
            },
            latestTitle: "LATEST NEWS",
            latest: [
              { title: "How to handle insurance claims efficiently", date: "Feb 10, 2026", url: "news-details.html?id=handle-claims-efficiently" },
              { title: "New service expansion announced", date: "Feb 08, 2026", url: "news-details.html?id=service-expansion" },
              { title: "DSR24 reaches new milestone", date: "Feb 05, 2026", url: "news-details.html?id=new-milestone" }
            ]
          }
        ]
      }
    ]
  }
];


