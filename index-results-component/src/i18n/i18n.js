import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en:{
                translation:{
                    "tab2": "Dimensions",
                    "index_results": "Index Results",
                    "measurement_methodology": "Measurement Methodology",
                    "benefits_of_participating": "Benefits of participating"                
                }
            },
            es:{
                translation:{
                    "tab2": "Dimensiones",
                    "index_results": "Resultados del índice",
                    "measurement_methodology": "Metodología de medición",
                    "benefits_of_participating": "Beneficios de participar",
                
                }
            }
        },
        lng: "es",
        fallbackLng: "es",
        interpolation:{
            escapeValue:false
        }
    })