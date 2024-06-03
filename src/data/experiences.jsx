import moment from "moment";

const targetDate = new moment('2023-09-01');
const today = new moment();

const diffDuration = moment.duration(today.diff(targetDate));

const yearsDifference = diffDuration.years();
const monthsDifference = diffDuration.months();

const experiences = [
    {
        'position': 'Spring boot/React Software Engineer and Development Study',
        'entreprise': 'EURAFRIC INFORMATION · Full-time',
        'duration': 'Sep 2023 - Present · ' + (yearsDifference > 0 ? (yearsDifference + ' year ') : ' ') + monthsDifference + ' months',
        'mode': 'Hybird',
        'missions': [
            'Developing and coding software applications using React & Spring boot .',
            'Designing and architecting software systems, taking into account scalability, performance, and security considerations.',
            'developing and maintaining batch jobs using the Spring Batch framework .',
            'Analyze and resolve software bugs .',
            'Conducting thorough testing and debugging to ensure the quality and reliability of the software.',
            'Providing technical support and troubleshooting assistance to resolve software and system issues.',
        ]
    },

    {
        'position': 'Software Engineer',
        'entreprise': 'VOYAGES FALHI-ESPACE-TOURISME · Full-time',
        'duration': 'Nov 2021 - Aug 2023 · 2 years & 5 months',
        'mode': 'Remote',
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
        'entreprise': 'Softechers · Full-time',
        'duration': 'Dec 2020 - Mar 2021 · 4 months',
        'mode': 'On-site',
        'missions': [
            'Collaborating with the team to understand business requirements and translate them into functional website templates.',

            'Developing frontend interfaces using HTML, CSS, and JavaScript, ensuring a seamless and intuitive user experience.',

            'Implementing backend functionalities using PHP Laravel framework to create robust and scalable web applications.',

            'Writing clean and maintainable code following industry best practices and coding standards.',
        ]
    },
    {
        'position': 'Web Developer',
        'entreprise': 'VIGON SYSTEMS · Internship',
        'duration': 'Nov 2020 · 1 month',
        'mode': 'On-site',
        'missions': [

            'Collaborating with the development team to understand the requirements for adding new functionalities to the existing website',

            'Integrating the new functionalities seamlessly into the existing website\'s architecture.',

            'Adhering to coding standards and best practices to maintain clean and maintainable code.'
        ]
    },
    {
        'position': 'Web Developer',
        'entreprise': 'Engenering Inside · Internship',
        'duration': 'Apr 2020 - May 2020 · 2 months',
        'mode': 'On-site',
        'missions': [

            'Collaborating with the team to understand client requirements and translate them into visually appealing website templates.',

            'Using HTML, CSS, and JavaScript to design and develop responsive and user-friendly website templates.',

            'Implementing the designed templates into the WordPress content management system.',

            'Customizing and configuring WordPress themes and plugins to meet client specifications.',

            'Collaborating with the design team to ensure a seamless integration of UI/UX designs into the website templates.',

        ]
    },

]

export default experiences;
