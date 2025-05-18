import moment from "moment";

const targetDate = new moment('2023-09-01');
const today = new moment();

const diffDuration = moment.duration(today.diff(targetDate)).add(1, 'month');

const yearsDifference = diffDuration.years();
const monthsDifference = diffDuration.months();

const projects = [
    {
        'title': 'Open a bank account entirely online.',
        'entreprise': 'EURAFRIC INFORMATION',
        'description': 'This project is a comprehensive digital platform that allows users to\n' +
            'open a bank account entirely online, eliminating the need to visit a\n' +
            'branch. Through secure digital verification and guided steps, it offers a\n' +
            'fully remote account opening experience, making banking more\n' +
            'accessible and flexible for users, anytime and anywhere.',
        'tools': [
            'Backend: Java, Spring boot, Spring Data, Spring Security, Rest APIS, GraphQL, Maven, MariaDB',
            'Frontend: React, TypeScript, Yarn',
            'Other: Git, Jenkins, SonarQube, Docker, Testing, Websphere, Trello',
        ]
    },
    {
        'title': 'DGSN Web Service (My Digital Identity).',
        'entreprise': 'EURAFRIC INFORMATION',
        'description': 'This web service acts as a middleware between projects and the DGSN\n' +
            'system, facilitating the authentication of Moroccan residents and\n' +
            'access to their official information (name, date of birth, etc.) from the\n' +
            'government database.',
        'tools': [
            'Backend: Java, Spring boot, Spring Data, Rest APIS, Maven',
            'Other: Git, Jenkins, SonarQube, Testing, Trello',
        ]
    },
    {
        'title': 'Automatic Follow-Up Call Batch.',
        'entreprise': 'EURAFRIC INFORMATION',
        'description': 'This batch is part of a process designed to re-engage customers who\n' +
            'started opening their account online but did not complete the process.\n' +
            'It targets those who meet specific criteria by calling them through an\n' +
            'automated bot.',
        'tools': [
            'Backend: Java, Spring Batch, Maven, MariaDB',
            'Other: Git, Jenkins, SonarQube, Docker, Testing, Trello',
        ]
    },
    {
        'title': 'Web Service Monitoring',
        'entreprise': 'EURAFRIC INFORMATION',
        'description': 'ServiceMonitor is a system that monitors critical services and alerts the\n' +
            'team in case of outages. It uses scheduled cron jobs, supports manual\n' +
            'checks via an API, and sends summary emails to ensure rapid incident\n' +
            'resolution.',
        'tools': [
            'Backend: Java, Spring boot, Spring Data, Rest APIS, GraphQL, Maven, MariaDB',
            'Other: Git, Jenkins, SonarQube, Docker, Testing, Websphere, Trello',
        ]
    },
    {
        'title': 'Excel Report Generation Batch.',
        'entreprise': 'EURAFRIC INFORMATION',
        'description': 'This project is a comprehensive digital platform that allows users to\n' +
            'open a bank account entirely online, eliminating the need to visit a\n' +
            'branch. Through secure digital verification and guided steps, it offers a\n' +
            'fully remote account opening experience, making banking more\n' +
            'accessible and flexible for users, anytime and anywhere.',
        'tools': [
            'Backend: Java, Spring Batch, Maven, MariaDB',
            'Other: Git, Jenkins, SonarQube, Docker, Testing, Websphere, Trello',
        ]
    },
    {
        'title': 'Processing of data and conversion for analysis Batch.',
        'entreprise': 'EURAFRIC INFORMATION',
        'description': 'This project is a batch processing system that extracts, maps, and\n' +
            'converts data from a complex database into a specific format for the\n' +
            'analysis team. Built with Spring Batch, it operates on a scheduled basis\n' +
            'for efficient and timely processing, facilitating workflows and datadriven decision-making.',
        'tools': [
            'Backend: Java, Spring Batch, Maven, MariaDB',
            'Other: Git, Jenkins, SonarQube, Docker, Testing, Websphere, Trello',
        ]
    },
    {
        'position': 'Management and Booking Dashboard',
        'entreprise': 'VOYAGES FALHI-ESPACE-TOURISME',
        'description': 'This project is an all-in-one dashboard designed to optimize travel\n' +
            'agents\' operations. It allows flight bookings, provides access to\n' +
            'essential information (schedules, reservations, passengers, insurance,\n' +
            'etc.), and enhances agent productivity, thus facilitating the\n' +
            'management of customer needs and service delivery.',
        'tools': [
            'Backend: Java, Spring boot, Spring Data, Spring Security, Rest APIS, Maven, MariaDB, Amadeus APIS',
            'Frontend: React, TypeScript, Npm',
            'Other: Git, Testing, Trello',
        ]
    },
    {
        'title': 'Online Flight Booking Platform for Agency and Amadeus Flights',
        'entreprise': 'VOYAGES FALHI-ESPACE-TOURISME',
        'description': 'A web platform that allows customers to book flights online, either\n' +
            'through the agency or the Amadeus system, without the need to visit in\n' +
            'person. It provides a simple and accessible experience for comparing\n' +
            'and choosing the best travel options.',
        'tools': [
            'Frontend: Next js, Redux, TypeScript, npm',
            'Other: Git, Trello, Vercel',
        ]
    },

]

export default projects;
