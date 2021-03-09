import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "index_results": "Index Results",
                    "measurement_methodology": "Measurement Methodology",
                    "benefits_of_participating": "Benefits of participating",
                    "institution_categories": "Institution categories",
                    "text_index_tittle": "Index Results",
                    "text_index_text": "You will be able to know the results of the Public Innovation Index, that is, the performance of 37 Chilean public services in terms of their capacities to innovate. These results are grouped by categories of institutions, and you will be able to access the details of each of the 10 subdimensions measured.",
                    "amount_of_utilities": "Amount of utilities ",
                    "according_to_total_score_range_of_the_index": "| According to total score range of the index",
                    "according_to_total_score_range_of_the_index100pt": "| According to the total score range of the index over a maximum of 100 points",
                    "reference_year_acc_1": "Year of reference 2019 - 37 participating services",
                    "more_info_acc_1": "+ see participating public services",
                    "cadastre_initiatives_of_innovations_developed": "Cadastre initiatives of innovations developed",
                    "reference_year_acc_2": "Reference year 2019 - Participating services",
                    "innovation_initiatives" : "innovation initiatives",
                    "text_acc_2": "Developed by the 37 public services. Each of they have different levels of development, considering the stages of a process public innovation. Of them:",

                    "tittleDimensions": "Average of each category of institutions for the 3 dimensions measured in the Public Innovation Index. The dimensions have a maximum score of 20, 40 and 40 points respectively, adding up to a maximum of 100.",
                    "tittleInstitutionals": "INSTITUTIONAL RESOURCES",
                    "tittleProcess": "PRACTICES AND PROCESSES",
                    "tittleCollaboration": "COLLABORATION AND OPENING",
                    "dimensionsInstitutionalsText": "It corresponds to the most basic or enabling aspects for the development of capacities to innovate. Without its existence, the following dimensions have a low probability of strengthening, hence their relevance. It considers elements related to human talent, the institutional framework, resources and digital infrastructure, together with elements of strategy and governance of innovation in each service.",
                    "dimensionsProcessText": "It corresponds to the capacities necessary for the development of innovation initiatives. At a general level, the Index stimulates the development of initiatives that have achieved a high level of maturity, that is, ideally implemented and evaluated. In addition, it considers the degree of formalization of the procedures and innovation processes based on the logic of the design of services, that is, prototyping and testing for the early detection of failures.",
                    "dimensionsCollaborationText": "It considers the ability of public services to interact with their environment, allowing them to learn and adapt to changing contexts. It seeks to identify collaborative work with users or beneficiaries, with other institutions within the sphere of",
                    "dimensionsdetailsTittle": "see detail subdimensions",
                    "dimensionsAnalysisText": "See analysis",
                    "dimensionsInformationPlus": "+ more information about dimensions",
                    "collaborationUserTittle": "USER PARTICIPATION",
                    "collaborationCoordinationTittle": "INTERINSTITUTIONAL COORDINATION",
                    "collaborationManagmentTittle": "ENVIRONMENT MANAGEMENT",
                    "collaborationUserText": "It encourages the use of clear and inclusive language in communications and channels, promotes participation mechanisms, and considers the involvement of users of each entity in the various phases of innovation, such as: participation in the identification of gaps through research processes, participation as co-creators of solutions, participation as evaluators of solutions, etc.",
                    "collaborationCoordinationText": "It seeks to measure collaboration and eventual interoperability between services. Specifically, it encourages the participation of different services in collaborative processes of identification of opportunities to innovate, co-creation of solutions, implementation and / or joint evaluation.",
                    "collaborationManagmentText": "It measures the existence of spaces to collaborate with organizations that are outside the sphere of the State, which may be entities of civil society or the private sector, in order to encourage the incorporation of learning from an open innovation perspective.",
                    "interpretation_of_the_graph":" INTERPRETATION OF THE GRAPH",
                    "return_to_main_graph": "return to main graph",


                    "tab2": "Dimensions"
                }
            },
            es: {
                translation: {
                    "index_results": "Resultados del índice",
                    "measurement_methodology": "Metodología de medición",
                    "benefits_of_participating": "Beneficios de participar",
                    "institution_categories": "Categorías de instituciones",
                    "text_index_tittle": "Resultados del Índice",
                    "text_index_text": "Podrás conocer  los resultados del Índice de Innovación Pública, es decir el desempeño de 37 servicios públicos chilenos  en cuanto a sus capacidades para innovar. Estos resultados están agrupados por categoríasde instituciones, y podrás  acceder al detalle de cada una de las 10 subdimensiones medidas",
                    "amount_of_utilities": "Cantidad de servicios públicos ",
                    "according_to_total_score_range_of_the_index": "| Según rango de puntaje total del índice",
                    "according_to_total_score_range_of_the_index100pt": "| Según rango de puntaje total del índice sobre un máximo de 100 puntos",
                    "reference_year_acc_1": "Año de referencia 2019 - 37 servicios participantes",
                    "more_info_acc_1": "+ ver servicios públicos participantes",
                    "cadastre_initiatives_of_innovations_developed": "Catastro iniciativas de innovaciones desarrolladas",
                    "reference_year_acc_2": "Año de referencia 2019 - Servicios participantes",
                    "innovation_initiatives" : "innovation initiatives",
                    "text_acc_2": "Desarrolladas por los 37 servicios públicos. Cada una de ellas tiene diverso nivel de desarrollo, considerando las etapas de un proceso de innovación pública. De ellas:",
                    

                    "tittleDimensions": "Promedio de cada categoría de instituciones para las 3 dimensiones medidas en el Índice de Innovación Pública. Las dimensiones tienen un puntaje máximo de 20, 40 y 40 puntos respectivamente, sumando un máximo de 100.",
                    "tittleInstitutionals": "RECURSOS INSTITUCIONALES",
                    "tittleProcess": "PRÁCTICAS Y PROCESOS",
                    "tittleCollaboration": "COLABORACIÓN Y APERTURA",
                    "dimensionsInstitutionalsText": "Corresponde a los aspectos más básicos o habilitantes para el desarrollo de las capacidades para innovar. Sin su existencia, las siguientes dimensiones tienen baja probabilidad de fortalecerse, de ahí su relevancia. Considera elementos relacionados con el talento humano, el marco institucional, los recursos e infraestructura digital, junto con elementos de estrategia y gobernanza de la innovación en cada servicio.",
                    "dimensionsProcessText": "Corresponde a las capacidades necesarias para el desarrollo de iniciativas de innovación. A nivel general, el Índice estimula el desarrollo de iniciativas que hayan logrado un nivel alto de madurez, es decir que hayan sido implementadas y evaluadas, idealmente. Además, considera el grado de formalización de los procedimientos y procesos de innovación basadas en la lógica del diseño de servicios, es decir de prototipado y testeo para la detección temprana de fallas.",
                    "dimensionsCollaborationText": "Considera la capacidad de interacción de los servicios públicos con su entorno, lo que les permite aprender y adaptarse a contextos cambiantes. Busca identificar el trabajo colaborativo con usuarios o beneficiarios, con otras instituciones dentro de la esfera de la",
                    "dimensionsdetailsTittle": "ver detalle subdimensiones",
                    "dimensionsAnalysisText": "Ver análisis",
                    "dimensionsInformationPlus": "+ más información sobre las dimensiones",
                    "collaborationUserTittle": "PARTICIPACIÓN DE USUARIOS",
                    "collaborationCoordinationTittle": " COORDINACIÓN INTERINSTITUCIONAL",
                    "collaborationManagmentTittle": "GESTION DEL ENTORNO",
                    "collaborationUserText": "Incentiva el uso de lenguaje claro e inclusivo en comunicaciones y canales, promueve mecanismos de participación, y considera el involucramiento de usuarios de cada entidad en las diversas fases de innovación, como son: participación en la identificación de brechas a través de procesos de investigación, participación como co-creadores de soluciones, participación como evaluadores de las soluciones, etc",
                    "collaborationCoordinationText": "Busca medir la colaboración y eventual interoperabilidad entre servicios. En concreto, incentiva la participación de distintos servicios en procesos colaborativos de identificación de oportunidades para innovar, co- creación de soluciones, implementación y/o evaluación conjunta.",
                    "collaborationManagmentText": "Mide la existencia de espacios para colaborar con organizaciones que se encuentran fuera de la esfera del Estado, pudiendo ser tratarse de entidades de la sociedad civil o sector privado, a fin de incentivar la incorporación de aprendizajes desde una perspectiva de innovación abierta.",
                    "interpretation_of_the_graph":" INTERPRETACIÓN DEL GRÁFICO",
                    "return_to_main_graph":"volver a gráfico principal",

                    "tab2": "Dimensiones"
                }
            }
        },
        lng: "en",
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        }
    })