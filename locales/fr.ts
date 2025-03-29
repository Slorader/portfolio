export default {
    available_for_hire: "Disponible pour embauche",
    hello: "Hey, je suis Léo",
    a: "un",
    web_developer: "développeur web.",
    intro: "Je m'appelle Léo TRUX, et je suis un développeur web français passionné par la création de sites web. Actuellement en dernière année d'un diplôme en informatique à l'Université Lyon 1.",
    skills: "J'ai une solide expérience en PHP, notamment avec le framework Symfony. J'élargis actuellement mes compétences en apprenant Next.js et Docker, afin de maîtriser les technologies modernes pour le développement fullstack.",

    career: {
        title: "Parcours professionnel",
        ccsd: {
            label: "CCSD",
            title: "Développeur en alternance",
            organisation: "Centre pour la Communication Scientifique Directe",
            date: "2024 - Aujourd'hui",
            location: "Lyon, France",
            description: "Je travaille sur le projet HALiance.",
        },
        rgu: {
            label: "RGU",
            title: "Chercheur étudiant",
            organisation: "Université Robert Gordon",
            date: "Avril 2024 - Juillet 2024",
            location: "Aberdeen, Écosse",
            description: "J'ai travaillé sur la création de modèles d'IA pour automatiser le processus d'analyse argumentative.",
        },
    },

    studies: {
        title: "Études",
        lyon: {
            label: "Université Lyon 1",
            title: "BUT Informatique",
            organisation: "Université Claude Bernard Lyon 1",
            date: "2022 - 2025",
            location: "Bourg-en-Bresse, France",
        },
    },

    projects: {
        title: "Projets",
        argu_ai: {
            title: "Argu Ai",
            link: "/project/argu-ai",
            date: "2024",
            description: "Argu Ai est une plateforme qui aide les utilisateurs à comprendre les arguments dans les textes qu'ils soumettent.",
        },
    },

    footer: {
        collaborate: "Collaborons ensemble !",
        contact_info: "Vous pouvez me contacter par email en remplissant ce formulaire.",
        copyright: "© 2025 - Léo Trux.",
        tech_stack: "Développé avec Next.js, déployé avec Vercel.",
    },

    form: {
        fields: {
            name: "Nom",
            email: "Email",
            message: "Message",
            submit: "Envoyer",
        },
        message: {
            name: "Le nom doit contenir au moins 3 caractères.",
            email: "Veuillez entrer une adresse e-mail valide.",
            message: "Le message ne peut pas être vide.",
        }
    },

    modal: {
        title: "Statut du formulaire",
        error: {
            subTitle: "Veuillez me contacter plus tard.",
            message: "Pour éviter le spam de messages, vous pourrez me contacter à nouveau dans une heure.",
            button: "Je comprends",
        },
        success: {
            subTitle: "Merci de m'avoir contacté !",
            message: "Un email m'a été envoyé, je vous réponds au plus vite.",
            button: "Retour",
        },
    },

} as const;
