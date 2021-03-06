import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// TRADUCCIONES FALTANTE DEL DOCUMENTO:
//  DESDE LA NUMERO 12 HASTA LA NUMERO 19

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "index_results": "Index Results",
                    "text_methodology": "Measurement",
                    "text_measurement": " Methodology",
                    "benefits_of_participating": "Benefits of participating",
                    "institution_categories": "Institution categories",
                    "text_Resultados": "Index",
                    "text_Index": "Results",
                    "measurement_methodology": "Measurement Methodology",
                    "text_benefits": "Participation",
                    "text_of_participating": "Benefits",
                    "text_institution": "Institution",
                    "text_categories": "Categories",
                    "text_index_tittle": "Index Results",
                    "text_index_text": "You may know the public renewal index as the performance of 37 Chilean public services and their capabilities for innovation. These results are grouped by the institution’s categories, and you will be able to access the detail of each one of the 10 measured sub-dimensions.",
                    "amount_of_utilities": "Amount of utilities ",
                    "according_to_total_score_range_of_the_index": "| Average of the public renewal index",
                    "according_to_total_score_range_of_the_index100pt": "| Average of the public renewal index according to category of institutions on a maximum of 100 points.",
                    "reference_year_acc_1": "Year of reference 2019-37 participant services.",
                    "more_info_acc_1": "see participating public services",
                    "cadastre_initiatives_of_innovations_developed": "Inventory of developed initiatives",
                    "reference_year_acc_2": "Year of reference 2019 - Participants services.",
                    "innovation_initiatives": "innovation initiatives",
                    "text_acc_2": "Developed by the 37 public services. Each of they have different levels of development, considering the stages of a process public innovation. Of them:",
                    "results_acc_3": "Results ",
                    "by_categories_of_institutions": "| By categories of institutions",
                    "acc_3_tittle_1": "Next we present the grouped results according to category of institutions. Consider that the results between institutions are only comparable if they take part in the same category; these are: Pillars, Centralized, or New.",
                    "tittleDimensions": "Each category’s average of institutions for 3 dimensions measured in the public renewal index. The dimensions have a maximum score of 20, 40, and 40 points respectively, adding a maximum of 100.",
                    "tittleInstitutionals": "INSTITUTIONAL RESOURCES",
                    "tittleProcess": "PRACTICES AND PROCESSES",
                    "tittleCollaboration": "COLLABORATION AND OPENING",
                    "dimensionsInstitutionalsText": "Correspond to the most basic aspects or habilitating for the development in innovation capabilities. Without its existence, the following dimensions have low probability to strengthen up, there the reason for its relevance. Considers related elements with human talent. The institutional frame the resources and digital infrastructure, along with elements of logistics and governing of each service’s innovation.",
                    "dimensionsProcessText": "Corresponds to the capabilities for the innovation initiative development. On a general level, the index stimulates the initiative development that achieved a higher level of maturity, meaning that has been implemented and assessed, ideally. Also considers the degree of formalization for the proceedings and processes of innovation based in the logic of services design, that is to say the prototyping and testing for early detection of faults.",
                    "dimensionsCollaborationText": "Considers the interaction capacity of public services with its environment, which allows learning and adaptation to changing contexts. Seeks to identify the collaborative job with users or beneficiaries, with other institutions within the sphere of public administration, and with organizations that conform the organizational environment. The purpose is to contravene the work in the silos that characterize the public administrations in general.",
                    "dimensionsdetailsTittle": "see detail subdimensions",
                    "dimensionsAnalysisText": "See analysis",
                    "dimensionsInformationPlus": "more information about dimensions",
                    "collaborationUserTittle": "USER PARTICIPATION",
                    "collaborationCoordinationTittle": "COORDINATION BETWEEN INSTITUTIONS",
                    "collaborationManagmentTittle": "ENVIRONMENT MANAGEMENT",
                    "collaborationUserText": "Incentives the use of clear language and even in channels and communications, it promotes mechanisms of participation, and considers the involvement of users of each entity in the diverse innovation fazes, like: breech identification participation through investigation processes, participation as solution co-creators participation as solution evaluators and so on.",
                    "collaborationCoordinationText": "It measures the collaboration and possible interoperability among services. Concretely, it incentives the participation of different services in collaborative identification processes of innovation opportunities, solution co-creation, implementation, or joint evaluation.",
                    "collaborationManagmentText": "Measures the existence of spaces to collaborate with organizations that are out the State’s sphere being these civil society entities or the private sector, with the goal to incentive the incorporation of learning from a innovative perspective.",
                    "interpretation_of_the_graph": " INTERPRETATION OF THE GRAPH",
                    "return_to_main_graph": "Return to Main Graph",
                    "spanish": "SPA",
                    "english": "ENG",
                    "tab2": "DIMENSIONS",
                    "tab1": "GENERAL",
                    "general_tittle": "Distribution of the score of the Public Innovation Index according to category of institutions out of a maximum of 100 points. Year of reference 2019 - 37 participating services.",
                    "pillars": "PILLARS",
                    "pillars_text": "Corresponds to 15 public services on the first measuring. These are characterized by a high budget, executed majorly in a decentralized manner. Some examples are: The health care fund (FONASA). And the internal revenue service IRS, in Spanish (S.I.I).",
                    "centralized": "CENTRALIZED",
                    "centralized_text": "Corresponds to 7 public services, characterized by one form of organization that tends to decentralization. Also gives a wide quantity of products or strategic services, like: The direction of public works and National Office of Emergencies in Spanish:(ONEMI).",
                    "new": "NEW",
                    "new_text": "There are 15 public services in the first measurement, defined mainly by their year of creation, mostly after 1980. Institutions such as the National Service for the Elderly (Senama) and the Public Criminal Defender (DPP) belong to this category.",
                    "downloads": "Downloads",
                    "all_docs": "all the documents",
                    "database": "Database",
                    "technical_note_of_results": "Technical note of results",
                    "more_category": "more information about the categories",
                    "footer_down_1": "ABOUT THE PUBLIC INNOVATION INDEX",
                    "footer_down_2": "USE POLICIES",
                    "footer_down_3": "IF YOU ARE PART OF THE PARTICIPATING INSTITUTIONS",
                    "footer_down_4": "ENTER HERE",
                    "title_Human_Talent": "HUMAN TALENT",
                    "description_Human_Talent": "It is habilitating, as the innovations require capable people to carry out initiatives that contemplate activities of creation, testing, implementation, assessment, between others. Also measures the multidisciplinary component, fundamental to coup with the challenges from different perspectives.",
                    "graphic_interpretation_Human_Talent": "Scores are below expected levels in this subdimension. This is due both to the low multidisciplinarity in the teams and to the lack of training associated with innovation management at a general level. Only 18 of 37 services promoted training during 2019. These trainings should address methodologies to identify problems related to the experience of users or beneficiaries, the generation and design of innovative solutions, the application and / or implementation of innovative solutions, and the evaluation and control of the results of innovations.",
                    "title_Institutional_Frame": "INSTITUTIONAL FRAME",
                    "description_Institutional_Frame": "Measures the existence of internal collaborative networks to manage the innovation in the service, saying that, it is the incentive of the conformation of tables or systematic work groups intra-areas to carry out innovation initiatives. On the other hand, inquires about availability of open data, meaning, the publication of information that is beyond the one contained in the transparency Law, with a high periodicity and in different and editable data format manner by the service.",
                    "graphic_interpretation_Institutional_Frame": "Although two categories show progress, there are still opportunities for improvement in this subdimension. In particular, because there are few public services that have internal formal and transversal collaboration networks between areas to develop innovation initiatives, only 17 out of 37. In addition to this, there are also 17 institutions that publish open data beyond those requested by the Transparence law.",
                    "title_Digital_Resources": "DIGITAL RESOURCES",
                    "description_Digital_Resources": "Includes referred aspects specifically to competencies of the teams on digital scope, the digitalization of procedures and certain processes, along with key elements of the digital infrastructure. The Digital Division of the Chilean Government captures this information mainly through administrative data.",
                    "graphic_interpretation_Digital_Resources": "The performance in this subdimention is relatively high in relation to the others. The gaps are due to the fact that there are still services that do not use the Unique Key as a means of authentication, or that do not have a business continuity plan (BCP), a disaster recovery plan (DRP), or that their teams handle programming or types of databases still limited to develop information systems. On the other hand, there is a relevant advance in the use of open source technology in 31 of the 37 services.",
                    "title_Strategy_and_Governability": "STRATEGY AND GOVERNABILITY",
                    "description_Strategy_and_Governability": "Has by objective to stand out those services that consider that innovation is a fundamental part of its strategy and that also established a form of governability for those effects. The existence of both elements is habilitating as to the extent of its relevance is defined in a clearer and more explicit way, it is possible that this becomes more habitual, transversal and present within the activities of the institution.",
                    "graphic_interpretation_Strategy_and_Governability": "The results of this subdimension are well below the maximum possible score. This is because services in general do not have governance for innovation management. In fact, this function is associated with a team in only 11 services. On the other hand, only 12 out of 37 services include innovation within their strategic definitions or their action plan -explicitly or implicitly-, a situation that hinders their continuity in the event of changes in leadership.",
                    "title_Activities_or_practices": "ACTIVITIES OR PRACTICES",
                    "description_Activities_or_practices": "Are those that are done in a spontaneous or sporadic way in the services and that, as they normalize; allow advances in the consolidation of capacities. In the specific matter it measures the quantity of initiatives done in a year and the quality of the process of innovation that took place, saying that, if it fulfills the stages of a experimental design process: prototyped design, testing, adjustments, implementation, assessment and actions of change management that may contribute,",
                    "graphic_interpretation_Activities_or_practices": "Although the scores for the three categories are well below the maximum possible, in general all public services carried out at least one innovation initiative -31 out of 37 services-. However, these initiatives did not necessarily consider all the ideal phases of the innovation process; In particular, the prototyping, testing, piloting and post-implementation evaluation phases are not usually carried out. All these are essential to achieve learning and recursion in experimental innovation processes.",
                    "title_Proceedings": "PROCEEDINGS",
                    "description_Proceedings": "Are an effort to organize the activities that might develop in a sporadic way. In specific, the proceedings are measured to identify the needs of users, and develop prototypes to be put at testing and assess the performance of the innovation initiatives. The existence of proceedings in these areas is relevant because it orients the work and it supposes a periodicity in its execution.",
                    "graphic_interpretation_Proceedings": "The public services that have established procedures for the development of innovation initiatives are a minority, particularly with regard to meeting user needs, prototyping and testing solutions. This makes it difficult to incorporate public innovation as part of the daily work of the institution, meaning that each initiative must be developed by hand and intuitively by the teams.",
                    "title_Processes": "PROCESSES",
                    "description_Processes": "Are the most advanced step on activity formalization under a systematic flow that guides as a chain each one of the needed tasks to make an innovation initiative in the service. As far as the processes are clearer and simpler respect to the mechanisms used and the expected results, it facilitates to incorporate the capacity to innovate on a transversal way in the service.",
                    "graphic_interpretation_Processes": "The definition of processes to manage innovation within services is key to provide the corresponding spaces and routes for the systematic development of initiatives. In general, public services have not defined processes for innovation: only 9 of the 37 services measured show some level of progress in this area.",
                    "title_SUBDIMENSION_ENVIRONMENT_MANAGEMENT": "SUBDIMENSION ENVIRONMENT MANAGEMENT",
                    "title_SUBDIMENSION_HUMAN_TALENT": "SUBDIMENSION HUMAN TALENT",
                    "title_INSTITUTIONAL_FRAME_SUBDIMENSION": "INSTITUTIONAL FRAME SUBDIMENSION",
                    "title_DIGITAL_RESOURCES_SUBDIMENSION": "DIGITAL RESOURCES SUBDIMENSION",
                    "title_STRATEGY_AND_GOVERNANCE_SUBDIMENSION": "STRATEGY AND GOVERNANCE SUBDIMENSION",
                    "title_SUBDIMENSION_ACTIVITIES_OR_PRACTICES": "SUBDIMENSION ACTIVITIES OR PRACTICES",
                    "title_PROCESS_SUBDIMENSION": "PROCESSES SUBDIMENSION",
                    "title_SUBDIMENSION_PROCEEDINGS": "SUBDIMENSION PROCEEDINGS",
                    "title_USER_PARTICIPATION_SUBDIMENSION": "USER PARTICIPATION SUBDIMENSION",
                    "title_COORDINATION_BETWEEN_INSTITUTIONS_SUBDIMENSION": "COORDINATION BETWEEN INSTITUTIONS SUBDIMENSION",
                    "graphic_interpretation_ENVIRONMENT_MANAGEMENT": "The importance of incorporating new perspectives to the problems of the Estano is not limited to the work of other public institutions or of users or beneficiaries, it is also essential to incorporate civil society, academia and the private sector. These instances, as can be seen, are rare and therefore we must encourage them. The development of open innovation competitions are an excellent opportunity to achieve this type of activity.",
                    "graphic_interpretation_INTERINSTITUTIONAL_COORDINATION": "Collaboration translates into more than generating collaboration agreements between services, it also includes the development of innovation initiatives that incorporate experiences from other public departments, in order to counteract the logic of disconnected silos, characteristic of public administration.",
                    "graphic_interpretation_USER_PARTICIPATION": "The services provide evidence that they have made progress in including the perspective of the users or beneficiaries, however it is important to continue developing this capacity. It is also important to advance in the incorporation of users or beneficiaries in the testing and piloting processes, in order to ensure that innovation initiatives effectively respond to their needs and expectations.",

                }
            },
            es: {
                translation: {
                    "downloads": "Descargas",
                    "all_docs": "todos los documentos",
                    "database": "Base de datos",
                    "technical_note_of_results": "Nota técnica de resultados",
                    "more_category": " más información sobre las categorías",
                    "footer_down_1": "ACERCA DEL ÍNDICE DE INNOVACIÓN PÚBLICA",
                    "footer_down_2": "POLÍTICAS DE USO",
                    "footer_down_3": "SI ERES PARTE DE LAS INSTITUCIONES PARTICIPANTES ",
                    "footer_down_4": "INGRESA ACÁ",
                    "general_tittle": "Distribución del puntaje del Índice de Innovación Pública según categoría de instituciones sobre un máximo de 100 puntos. Año de referencia 2019 - 37 servicios participantes.",
                    "pillars": "PILARES",
                    "pillars_text": "Corresponde a 15 servicios públicos en la primera medición. Se caracterizan por tener un presupuesto alto, ejecutado mayoritariamente de manera descentralizada. Algunos ejemplos son: el Fondo Nacional de Salud (Fonasa) y el Servicio de Impuestos Internos (SII).",
                    "centralized": "CENTRALIZADAS",
                    "centralized_text": "Corresponde a 7 servicios públicos, caracterizados por una forma de organización que tiende a la centralización. Además otorgan una cantidad amplia de productos o servicios estratégicos, como son: la Dirección General de Obras Públicas (DGOP) y la Oficina Nacional de Emergencia (ONEMI).",
                    "new": "NUEVAS",
                    "new_text": "Son 15 servicios públicos en la primera medición, definidos principalmente por su año de creación, en su mayoría posterior a 1980. A esta categoría pertenecen instituciones como el Servicio Nacional del Adulto Mayor (Senama) y la Defensora Penal Pública (DPP).",
                    "index_results": "Resultados del índice",
                    "text_methodology": "Metodología",
                    "text_measurement": " de medición",
                    "benefits_of_participating": "Beneficios de participar",
                    "text_Resultados": "Resultados",
                    "text_Index": " del Índice",
                    "measurement_methodology": "Metodología de medición",
                    "text_benefits": "Beneficios",
                    "text_of_participating": "de participar",
                    "institution_categories": "Categorías de instituciones",
                    "text_institution": "Categorías",
                    "text_categories": "de instituciones",

                    "text_index_tittle": "Resultados del Índice",
                    "text_index_text": "Podrás conocer  los resultados del Índice de Innovación Pública, es decir el desempeño de 37 servicios públicos chilenos  en cuanto a sus capacidades para innovar. Estos resultados están agrupados por categorías de instituciones, y podrás  acceder al detalle de cada una de las 10 subdimensiones medidas.",
                    "amount_of_utilities": "Cantidad de servicios públicos ",
                    "according_to_total_score_range_of_the_index": "| Según rango de puntaje total del índice",
                    "according_to_total_score_range_of_the_index100pt": "| Según rango de puntaje total del índice sobre un máximo de 100 puntos",
                    "reference_year_acc_1": "Año de referencia 2019 - 37 servicios participantes",
                    "more_info_acc_1": "ver servicios públicos participantes",
                    "cadastre_initiatives_of_innovations_developed": "Catastro iniciativas de innovaciones desarrolladas",
                    "reference_year_acc_2": "Año de referencia 2019 - Servicios participantes",
                    "innovation_initiatives": "iniciativas de innovación",
                    "text_acc_2": "Desarrolladas por los 37 servicios públicos. Cada una de ellas tiene diverso nivel de desarrollo, considerando las etapas de un proceso de innovación pública. De ellas:",
                    "results_acc_3": "Resultados ",
                    "by_categories_of_institutions": "| Por categorías de instituciones",
                    "acc_3_tittle_1": "A continuación, se presentan los resultados agrupados según categoría de instituciones. Considerar que los resultados entre instituciones sólo son comparables si forman parte de la misma categoría; éstas son: Pilares, Centralizadas o Nuevas.",
                    "tittleDimensions": "Promedio de cada categoría de instituciones para las 3 dimensiones medidas en el Índice de Innovación Pública. Las dimensiones tienen un puntaje máximo de 20, 40 y 40 puntos respectivamente, sumando un máximo de 100.",
                    "tittleInstitutionals": "RECURSOS INSTITUCIONALES",
                    "tittleProcess": "PRÁCTICAS Y PROCESOS",
                    "tittleCollaboration": "COLABORACIÓN Y APERTURA",
                    "dimensionsInstitutionalsText": "Corresponde a los aspectos más básicos o habilitantes para el desarrollo de las capacidades para innovar. Sin su existencia, las siguientes dimensiones tienen baja probabilidad de fortalecerse, de ahí su relevancia. Considera elementos relacionados con el talento humano, el marco institucional, los recursos e infraestructura digital, junto con elementos de estrategia y gobernanza de la innovación en cada servicio.",
                    "dimensionsProcessText": "Corresponde a las capacidades necesarias para el desarrollo de iniciativas de innovación. A nivel general, el Índice estimula el desarrollo de iniciativas que hayan logrado un nivel alto de madurez, es decir que hayan sido implementadas y evaluadas, idealmente. Además, considera el grado de formalización de los procedimientos y procesos de innovación basadas en la lógica del diseño de servicios, es decir de prototipado y testeo para la detección temprana de fallas.",
                    "dimensionsCollaborationText": "Considera la capacidad de interacción de los servicios públicos con su entorno, lo que les permite aprender y adaptarse a contextos cambiantes. Busca identificar el trabajo colaborativo con usuarios o beneficiarios, con otras instituciones dentro de la esfera de la administración pública, y con organizaciones que conforman el entorno organizacional. El propósito es contravenir el trabajo en los silos que caracteriza a las administraciones públicas en general.",
                    "dimensionsdetailsTittle": "ver detalle subdimensiones",
                    "dimensionsAnalysisText": "Ver análisis",
                    "dimensionsInformationPlus": "más información sobre las dimensiones",
                    "collaborationUserTittle": "PARTICIPACIÓN DE USUARIOS",
                    "collaborationCoordinationTittle": " COORDINACIÓN INTERINSTITUCIONAL",
                    "collaborationManagmentTittle": "GESTION DEL ENTORNO",
                    "collaborationUserText": "Incentiva el uso de lenguaje claro e inclusivo en comunicaciones y canales, promueve mecanismos de participación, y considera el involucramiento de usuarios de cada entidad en las diversas fases de innovación, como son: participación en la identificación de brechas a través de procesos de investigación, participación como co-creadores de soluciones, participación como evaluadores de las soluciones, etc",
                    "graphic_interpretation_USER_PARTICIPATION": "Los servicios dan evidencia de que han avanzado en el incluir la perspectiva de las personas usuarias o beneficiarias, sin embargo es importante continuar desarrollando esta capacidad. Es importante asimismo, avanzar en la incorporación de personas usuarias o beneficiarias en los procesos de testeo y pilotaje, de manera de lograr que las iniciativas de innovación efectivamente respondan a sus necesidades y expectativas.",
                    "collaborationCoordinationText": "Busca medir la colaboración y eventual interoperabilidad entre servicios. En concreto, incentiva la participación de distintos servicios en procesos colaborativos de identificación de oportunidades para innovar, co- creación de soluciones, implementación y/o evaluación conjunta.",
                    "graphic_interpretation_INTERINSTITUTIONAL_COORDINATION": "La colaboración se traduce en más que generar convenios de colaboración entre servicios, incluye también el desarrollo de iniciaitivas de innovación que incorporen experiencias de otras depdendencias públicas, a fin de contrarrestar la lógica de silos desconectados, característica de la administración pública.",
                    "collaborationManagmentText": "Mide la existencia de espacios para colaborar con organizaciones que se encuentran fuera de la esfera del Estado, pudiendo ser tratarse de entidades de la sociedad civil o sector privado, a fin de incentivar la incorporación de aprendizajes desde una perspectiva de innovación abierta.",
                    "graphic_interpretation_ENVIRONMENT_MANAGEMENT": "La importancia de incorporar perspectivas nuevas a las problemáticas del Estano no se limitan al trabajo de otras instituciones públicas o de las personas usuarias o beneficiarias, es fundamental también incorporar a la sociedad civil, la academia y el sector privado. Estas instancias, tal como se observa, son escasas y por ello debemos fomentarlas. El desarollo de concursos de innovación abierta son una excelente oportunidad para lograr este tipo de actividades.",
                    "interpretation_of_the_graph": " INTERPRETACIÓN DEL GRÁFICO",
                    "return_to_main_graph": "Volver al Gráfico Principal",
                    "title_Human_Talent": "TALENTO HUMANO",
                    "description_Human_Talent": "Es habilitante ya que las innovaciones requieren de personas capacitadas para llevar a cabo iniciativas que contemplen actividades de cocreación, testeo, implementación, evaluación, entre otras. Además mide la multidisciplinariedad, como un componente fundamental para abordar los desafíos desde diversos enfoques",
                    "graphic_interpretation_Human_Talent": "Los puntajes se encuentran por debajo de los niveles esperados en esta subdimensión. Esto se debe tanto a la baja multidisciplinaridad en los equipos como a la falta de capacitaciones asociadas a la gestión de la innovación a nivel general. Solo 18 de 37 servicios promovieron capacitaciones durante 2019. Estas capacitaciones debieran abordar metodologías para identificar problemas relacionados a la experiencia de las personas usuarias o beneficiarias, la generación y diseño de soluciones innovadoras, la aplicación y/o implementación de soluciones innovadoras, y la evaluación y control de los resultados de innovaciones.",
                    "title_Institutional_Frame": "MARCO INSTITUCIONAL",
                    "description_Institutional_Frame": "Mide la existencia de redes internas de colaboración para gestionar la innovación en el servicio, es decir, incentiva la conformación de mesas o grupos de trabajo sistemáticos interáreas para llevar a cabo iniciativas de innovación. Por otro lado, indaga acerca de la disponibilidad de datos abiertos, o sea, la publicación de información más allá de la contenida en la Ley de Transparencia, con alta periodicidad y en formato de datos diferentes y editables por parte del servicio.",
                    "graphic_interpretation_Institutional_Frame": "Si bien dos categorías muestran avances, todavía hay oportunidades de mejora en esta subdimensión. En particular porque son pocos los servcios públicos que cuentan con redes de colaboración internas formales y transversales entre áreas para desarrollar iniciativas de innovación, solo 17 de 37. Sumado a esto, también son 17 instituciones que publican datos abiertos más allá de los solicitados por la Ley de transparencia. ",
                    "title_Digital_Resources": "RECURSOS DIGITALES",
                    "description_Digital_Resources": "Incluye aspectos referidos específicamente a competencias de los equipos en ámbitos digitales, la digitalización de trámites y ciertos procesos, junto con elementos clave de infraestructura digital. Esta información es capturada principalmente de datos administrativos, de la División de Gobierno Digital de Chile",
                    "graphic_interpretation_Digital_Resources": "El desempeño en esta subdimención es relativamente alto en relación a las demás. Las brechas se deben a que aún existen servicios que no utilizan Clave Única como medio de autenticación, o que no cuentan con un plan de continuidad del negocio (BCP) un plan para recuperación ante desastres (DRP), o que sus equipos manejan lenguajes de programación o tipos de bases de datos aún limitadas para desarrollar sistemas de información. Por otra parte, hay un avance relevante en el uso de tecnología de código abierto, en 31 de los 37 servicios. ",
                    "title_Strategy_and_Governability": "ESTRATEGIA Y GOBERNANZA",
                    "description_Strategy_and_Governability": "Tiene por objetivo destacar aquellos servicios que consideran que la innovación es parte fundamental de su estrategia y que además establecen una gobernanza para dichos efectos. La existencia de ambos elementos es habilitante ya que en la medida que su relevancia es definida de manera más clara y explícita, es posible que ésta se torne más habitual, transversal y presente en el quehacer de la institución.",
                    "graphic_interpretation_Strategy_and_Governability": "Los resultados de esta subdimensión se encuentran muy por debajo del puntaje máximo posible. Esto se debe a que los servicios en general no cuentan con una gobernanza para la gestión de la innovación. De hecho esta función está asociada a un equipo en solo 11 servicios. Por otro lado, solo 12 de 37 servicios incluyen la innovación dentro de sus definiciones estratégicas o su plan de acción -explícita o implícitamente-, situación que dificulta su continuidad ante eventuales cambios de jefaturas.",
                    "title_Activities_or_practices": "ACTIVIDADES O PRÁCTICAS",
                    "description_Activities_or_practices": "Son aquellas que se realizan de manera espontánea o esporádica dentro de los servicios y que, a medida que se normalizan, permiten avanzar en la consolidación de capacidades. En específico, mide la cantidad de iniciativas realizadas en el año y la calidad del proceso de innovación llevado a cabo, es decir, si cumple con las etapas de un proceso de diseño experimental: diseño, prototipado, testeo, ajustes, implementación, evaluación posterior y acciones de gestión del cambio que puedan contribuir.",
                    "graphic_interpretation_Activities_or_practices": "Si bien los puntajes de las tres categorías se encuentran muy por debajo del máximo posible, en general todos los servicios públicos realizaron al menos una inciativa de innovación -31 de 37 servicios-. Sin embargo, estas iniciativas no necesariamente consideraron todas las fases ideales del proceso de innovación; particularmente se suele no realizar las fases de prototipado, testeo, pilotaje y evaluación post-implementación. Todas estas son fundamentales para lograr un aprendizaje y recursividad en procesos de innovación experimentales. ",
                    "title_Proceedings": "PROCEDIMIENTOS",
                    "description_Proceedings": "Son un esfuerzo por organizar las actividades que pueden desarrollarse de manera esporádica. En específico, se mide la existencia de procedimientos para identificar necesidades de usuarios/as, desarrollar prototipos para ser puestos a prueba y evaluar el desempeño de las iniciativas de innovación. La existencia de procedimientos en estos ámbitos es relevante puesto que orienta el trabajo y supone una periodicidad en su ejecución.",
                    "graphic_interpretation_Proceedings": "Son minoritarios los servicios públicos que han establecido procedimientos para el desarrollo de iniciativas de innovación, particularmente en lo referido a conocer necesidades de usuarios, prototipar y testear soluciones. Esto dificulta la posibilidad de incorporar la innovación pública como parte del quehacer cotidiano de la institución, haciéndo que cada iniciativa deba ser desarrollada a pulso y de manera intuitiva por parte de los equipos.",
                    "title_Processes": "PROCESOS",
                    "description_Processes": "Son el paso más avanzado en cuanto a la formalización de actividades bajo un flujo sistemático, que guía de manera encadenada cada una de las tareas necesarias para llevar a cabo una iniciativa de innovación en el servicio. En la medida que los procesos son más claros y simples con respecto a los mecanismos a utilizar y los resultados esperados, se facilita incorporar la capacidad de innovar de manera transversal en el servicio.",
                    "graphic_interpretation_Processes": "La definición de procesos para gestionar la innovación dentro de los servicios es clave para brindar los espacios y rutas correspondiente para el desarrollo sistemático de iniciativas. En general, los servicios públicos no han definido procesos para la innovación: sólo 9 de los 37 servicios medidos muestran algún nivel de avance en esta materia.",
                    "title_SUBDIMENSION_ENVIRONMENT_MANAGEMENT": "SUBDIMENSIÓN GESTIÓN DEL ENTORNO",
                    "title_SUBDIMENSION_HUMAN_TALENT": "SUBDIMENSIÓN TALENTO HUMANO",
                    "title_INSTITUTIONAL_FRAME_SUBDIMENSION": "SUBDIMENSIÓN MARCO INSTITUCIONAL",
                    "title_DIGITAL_RESOURCES_SUBDIMENSION": "SUBDIMENSIÓN RECURSOS DIGITALES",
                    "title_STRATEGY_AND_GOVERNANCE_SUBDIMENSION": "SUBDIMENSIÓN ESTRATEGIA Y GOBERNANZA",
                    "title_SUBDIMENSION_ACTIVITIES_OR_PRACTICES": "SUBDIMENSIÓN ACTIVIDADES O PRÁCTICAS",
                    "title_PROCESS_SUBDIMENSION": "SUBDIMENSIÓN PROCESOS",
                    "title_SUBDIMENSION_PROCEEDINGS": "SUBDIMENSIÓN PROCEDIMIENTOS",
                    "title_USER_PARTICIPATION_SUBDIMENSION": "SUBDIMENSIÓN PARTICIPACIÓN DE USUARIOS",
                    "title_COORDINATION_BETWEEN_INSTITUTIONS_SUBDIMENSION": "SUBDIMENSIÓN COORDINACIÓN INTERINSTITUCIONAL",
                    "spanish": "ESP",
                    "english": "ING",
                    "tab2": "DIMENSIONES",
                    "tab1": "GENERALES",
                }
            }
        },
        lng: "es",
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        }
    })