// window.jobs (collection for jobs.html?id=... OR page-content.html?id=jobs tabs)

window.jobs = [
    {
        slug: "jobs", // overview/list page (same layout as screenshot)
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
                        backLabel: "Back to Jobs",
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
                        backLabel: "Back to Jobs",
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
    }
];