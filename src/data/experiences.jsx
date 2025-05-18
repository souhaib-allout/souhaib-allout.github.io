import moment from "moment";

const targetDate = new moment('2023-09-01');
const today = new moment();

const diffDuration = moment.duration(today.diff(targetDate)).add(1,'month');

const yearsDifference = diffDuration.years();
const monthsDifference = diffDuration.months();

const experiences = [
    {
        'position': 'Spring boot/React Software Engineer',
        'entreprise': 'EURAFRIC INFORMATION  · Casablanca, Morocco',
        'duration': 'Sep 2023 - Present · ' + (yearsDifference > 0 ? (yearsDifference + ' year ') : ' ') + monthsDifference + ' months',
        'missions': [
            'Led multiple projects from conception to delivery .',
            'Collaborated with a cross-functional team to develop scalable enterprise software solutions, ensuring efficient system performance and reliability\n',
            'Designed and maintained complex batch processing workflows using Spring Batch, streamlining data handling for critical operations',
            'Diagnosed and resolved software issues and bugs, minimizing disruptions and enhancing system stability',
            'Supervised and mentored a team of interns throughout development projects',
            'Deployed projects using various tools such as WebSphere, Jenkins, and command-line interfaces',
        ]
    },

    {
        'position': 'Software Engineer',
        'entreprise': 'VOYAGES FALHI-ESPACE-TOURISME · Marseille - France (Remote)',
        'duration': 'Nov 2021 - Aug 2023 · 2 years & 5 months',
        'missions': [
            'Responsible for managing the IT department, ensuring smooth operation and efficient functioning of the systems.',
            'Designing and architecting software systems, taking into account scalability, performance, and security considerations.',
            'Developing and coding software applications using industry-standard programming languages and frameworks.',
            'Conducting thorough testing and debugging to ensure the quality and reliability of the software.',
            'Taking charge of database administration, including database design, optimization, and maintenance.',
            'Providing technical support and troubleshooting assistance to resolve software and system issues.',
            'Staying updated with the latest industry trends, technologies, and best practices to continuously improve software development processes and methodologies.',
        ]
    },
    {
        'position': 'Web Developer',
        'entreprise': 'Softechers · Marrakech - Morocco',
        'duration': 'Dec 2020 - Mar 2021 · 4 months',
        'missions': [
            'Collaborating with the team to understand business requirements and translate them into functional website templates.',

            'Developing frontend interfaces using HTML, CSS, and JavaScript, ensuring a seamless and intuitive user experience.',

            'Implementing backend functionalities using PHP Laravel framework to create robust and scalable web applications.',

            'Writing clean and maintainable code following industry best practices and coding standards.',
        ]
    },
]

export default experiences;
