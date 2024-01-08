import React,{useState,useEffect} from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Container
} from "@mui/material";
import Colors from "../../common/Colors";
import ESCard from '@/components/ESCard/ESCardcomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import { useRouter } from 'next/router';

const SOLUTIONSDATA = [
  {
    title: "Solution d'hyperautomatisation",
    desc: "Élever les entreprises grâce à une hyperautomatisation transparente",
    icon: "banking.svg",
    route: "platform/hyperautomationsolution"
  },
  {
    title: "Automatisation des processus robotisés",
    desc: "Solutions RPA efficaces, transformant les processus métier.",
    icon: "insurance.svg",
    route: "platform/rpa"
  },
  {
    title: "IA/ML",
    desc: ":Élever les entreprises avec l’excellence en IA/ML.",
    icon: "healthcare.svg",
    route: "platform/aiml"
  },
  {
    title: "IDP",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "telecom.svg",
    route: "platform/idp",
  },
  {
    title: "PNL",
    desc: "Élever les données au rang d’intelligence.",
    icon: "retail.svg",
    route: "platform/nlp",
  },
  {
    title: "Flux de travail",
    desc: "Renforcez les flux de travail et rationalisez les tâches avec Aira Orchestrateur : Libérer l’excellence en matière de gestion de l’automatisation transparente.",
    icon: "bpo.svg",
    route: "platform/workflow",
  },
  {
    title: "Orchestrateur",
    desc: "Libérer l’excellence en matière de gestion de l’automatisation transparente.",
    icon: "manufacturing.svg",
    route: "platform/orchestrator",
  },
  {
    title: "Analyses prédictives",
    desc: " Aira prédit, optimise et transforme les opérations.",
    icon: "manufacturing.svg",
    route: "platform/predictive_analytics",
  },
  {
    title: "Exploitation minière de processus",
    desc: "ira affine les processus avec Process Mining et garantit l'efficacité.",
    icon: "manufacturing.svg",
    route: "platform/process_mining",
  },
  {
    title: "Analyse avancée",
    desc: "Donner aux entreprises les moyens d’analyses avancées.",
    icon: "manufacturing.svg",
    route: "platform/advancedAnalytics",
  },
];

const SOLUTIONSDATA1 = [
  {
    title: "Solución de hiperautomatización",
    desc: "Elevar las empresas a través de una hiperautomatización perfecta",
    icon: "banking.svg",
    route: "platform/hyperautomationsolution"
  },
  {
    title: "Automatización Robótica de Procesos",
    desc: "Soluciones RPA eficientes, transformando los procesos de negocio.",
    icon: "insurance.svg",
    route: "platform/rpa"
  },
  {
    title: "IA/ML",
    desc: "Elevando las empresas con excelencia en IA/ML.",
    icon: "healthcare.svg",
    route: "platform/aiml"
  },
  {
    title: "desplazado interno",
    desc: "Transformando Documentos en Inteligencia.",
    icon: "telecom.svg",
    route: "platform/idp",
  },
  {
    title: "PNL",
    desc: "Elevando los datos a la inteligencia.",
    icon: "retail.svg",
    route: "platform/nlp",
  },
  {
    title: "Flujo de trabajo",
    desc: "Potencia los flujos de trabajo y optimiza las tareas con Aira",
    icon: "bpo.svg",
    route: "platform/workflow",
  },
  {
    title: "Orquestador",
    desc: "Liberando la excelencia en la gestión de la automatización perfecta.",
    icon: "manufacturing.svg",
    route: "platform/orchestrator",
  },
  {
    title: "Análisis predictivo",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "manufacturing.svg",
    route: "platform/predictive_analytics",
  },
  {
    title: "Minería de procesos",
    desc: "Aira refina los procesos con Process Mining y garantiza la eficiencia.",
    icon: "manufacturing.svg",
    route: "platform/process_mining",
  },
  {
    title: "Análisis avanzado",
    desc: " Empoderar a las empresas con análisis avanzados.",
    icon: "manufacturing.svg",
    route: "platform/advancedAnalytics",
  },
];

const SOLUTIONSDATA2 = [
  {
    title: "حل الأتمتة المفرطة",
    desc: "الارتقاء بالمؤسسات من خلال الأتمتة الفائقة والسلسة",
    icon: "banking.svg",
    route: "platform/hyperautomationsolution"
  },
  {
    title: "أتمتة العمليات الروبوتية",
    desc: "RPA الفعالة، تحول العمليات التجارية.",
    icon: "insurance.svg",
    route: "platform/rpa"
  },
  {
    title: "الذكاء الاصطناعي/التعلم الآلي",
    desc: "لارتقاء بالمؤسسات مع التميز في الذكاء الاصطناعي/التعلم الآلي",
    icon: "healthcare.svg",
    route: "platform/aiml"
  },
  {
    title: "النازحين",
    desc: " تحويل المستندات إلى ذكاء",
    icon: "telecom.svg",
    route: "platform/idp",
  },
  {
    title: "البرمجة اللغوية العصبية",
    desc: "الارتقاء بالبيانات إلى الذكاء",
    icon: "retail.svg",
    route: "platform/nlp",
  },
  {
    title: "سير العمل Aira",
    desc: "تمكين سير العمل وتبسيط المهام باستخدام",
    icon: "bpo.svg",
    route: "platform/workflow",
  },
  {
    title: "منسق تقوم",
    desc: "إطلاق العنان للتميز في إدارة الأتمتة السلسة",
    icon: "manufacturing.svg",
    route: "platform/orchestrator",
  },
  {
    title: "التحليلات التنبؤية",
    desc: "Aira بالتنبؤ بالعمليات وتحسينها وتحويلها.",
    icon: "manufacturing.svg",
    route: "platform/predictive_analytics",
  },
  {
    title: "عملية التعدين :تقوم",
    desc: "تحسين العمليات باستخدام عملية التعدين وتضمن الكفاءة.",
    icon: "manufacturing.svg",
    route: "platform/process_mining",
  },
  {
    title: "التحليلات المتقدمة",
    desc: "تمكين المؤسسات من خلال التحليلات المتقدمة",
    icon: "manufacturing.svg",
    route: "platform/advancedAnalytics",
  },
];

const SOLUTIONSDATA3 = [
  {
    title: "Hyper-Automatisierungslösung",
    desc: " Unternehmen durch nahtlose Hyperautomatisierung voranbringen",
    icon: "banking.svg",
    route: "platform/hyperautomationsolution"
  },
  {
    title: "Robotische Prozessautomatisierung",
    desc: " Effiziente RPA-Lösungen, die Geschäftsprozesse transformieren.",
    icon: "insurance.svg",
    route: "platform/rpa"
  },
  {
    title: "KI/ML",
    desc: "Unternehmen mit KI/ML-Exzellenz voranbringen.",
    icon: "healthcare.svg",
    route: "platform/aiml"
  },
  {
    title: "IDP",
    desc: "Dokumente in Intelligenz verwandeln.",
    icon: "telecom.svg",
    route: "platform/idp",
  },
  {
    title: "NLP",
    desc: "Daten zu Intelligenz machen.",
    icon: "retail.svg",
    route: "platform/nlp",
  },
  {
    title: "Arbeitsablauf ",
    desc: "Ermöglichen Sie Arbeitsabläufe und optimieren Sie Aufgaben mit Aira",
    icon: "bpo.svg",
    route: "platform/workflow",
  },
  {
    title: "Orchestrator",
    desc: "Entfesselung nahtloser Automatisierungsmanagement-Exzellenz.",
    icon: "manufacturing.svg",
    route: "platform/orchestrator",
  },
  {
    title: "Prädiktive Analytik",
    desc: "Aira prognostiziert, optimiert und transformiert Abläufe.",
    icon: "manufacturing.svg",
    route: "platform/predictive_analytics",
  },
  {
    title: "Prozess-Mining",
    desc: "Aira verfeinert Prozesse mit Process Mining und sorgt für Effizienz.",
    icon: "manufacturing.svg",
    route: "platform/process_mining",
  },
  {
    title: "Erweiterte Analyse",
    desc: "Stärken Sie Unternehmen mit fortschrittlichen Analysen.",
    icon: "manufacturing.svg",
    route: "platform/advancedAnalytics",
  },
];

const SOLUTIONSDATA4 = [
  {
    title: "Hyper-automation Solution",
    desc: "Elevating enterprises through seamless hyper automation",
    icon: "banking.svg",
    route: "platform/hyperautomationsolution"
  },
  {
    title: "Robotic Process automation",
    desc: "Efficient RPA Solutions, Transforming Business Processes.",
    icon: "insurance.svg",
    route: "platform/rpa"
  },
  {
    title: "AI / ML",
    desc: "Elevating Enterprises with AI/ML Excellence.",
    icon: "healthcare.svg",
    route: "platform/aiml"
  },
  {
    title: "IDP",
    desc: "Transforming Documents into Intelligence.",
    icon: "telecom.svg",
    route: "platform/idp",
  },
  {
    title: "NLP",
    desc: "Elevating Data to Intelligence.",
    icon: "retail.svg",
    route: "platform/nlp",
  },
  {
    title: "Workflow",
    desc: "Empower workflows, streamline tasks with Aira",
    icon: "bpo.svg",
    route: "platform/workflow",
  },
  {
    title: "Orchestrator",
    desc: "Unleashing Seamless Automation Management Excellence.",
    icon: "manufacturing.svg",
    route: "platform/orchestrator",
  },
  {
    title: "Predictive Analytics",
    desc: "Aira predicts, optimises, and transforms operations. ",
    icon: "manufacturing.svg",
    route: "platform/predictive_analytics",
  },
  {
    title: "Process mining",
    desc: "Aira refines processes with Process Mining and ensures efficiency.",
    icon: "manufacturing.svg",
    route: "platform/process_mining",
  },
  {
    title: "Advanced Analytics",
    desc: " Empowering Enterprises with Advanced Analytics.",
    icon: "manufacturing.svg",
    route: "platform/advancedAnalytics",
  },
];

const Index = () => {
  // const router = useRouter()

  // const navigateToRoute = (route) => {
  //   router.push(`/${route}`)
  // }

  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
  }, []);

  return (
    <Box sx={{
      display: "flex",
      backgroundImage: "url(/images/solutions/solutiongirl.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
    }}>
      <Container maxWidth="lg">
        <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 4 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
          >
            {/* <Grid item xs={2}></Grid> */}
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <Box sx={{ my: 10 }}>
                <Box sx={{ width: "40%" }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {/* Our{" "} */} 
                    {lang === 'fr' ? `Plate-forme` : lang === 'sp' ? 'Plataforma' : lang === 'ar' ? 'منصة' : lang === 'gr' ? 'Plattform' : 'Platform'}
                    {/* <span style={{ color: Colors.airaSecondary }}>
                    
                    </span> */}
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Bénéficiez d’un avantage concurrentiel grâce aux divers services d’hyperautomatisation d’AIRA. De l’optimisation des flux de travail à l’intégration avancée de l’IA, nous permettons à votre entreprise de devenir leader dans le paysage commercial dynamique d’aujourd’hui.` : lang === 'sp' ? 'Experimente una ventaja competitiva con los diversos servicios de hiperautomatización de AIRA. Desde la optimización del flujo de trabajo hasta la integración avanzada de la IA, capacitamos a su empresa para que lidere el dinámico panorama empresarial actual.' : lang === 'ar' ? 'استمتع بميزة تنافسية مع خدمات الأتمتة الفائقة المتنوعة التي تقدمها AIRA. بدءًا من تحسين سير العمل وحتى تكامل الذكاء الاصطناعي المتقدم، فإننا نمكن مؤسستك من الريادة في مشهد الأعمال الديناميكي اليوم.' : lang === 'gr' ? 'Erleben Sie einen Wettbewerbsvorteil mit den vielfältigen Hyperautomatisierungsdiensten von AIRA. Von der Workflow-Optimierung bis hin zur erweiterten KI-Integration versetzen wir Ihr Unternehmen in die Lage, in der dynamischen Geschäftslandschaft von heute eine Führungsrolle zu übernehmen.' : ' Experience a competitive advantage with AIRA’s diverse hyper automation services. From workflow optimization to advanced AI integration, we empower your enterprise to lead in today’s dynamic business landscape.'}
                  </Typography>
                </Box>

                <Grid container gap={1}>
                 {
                  lang === "fr" ?  SOLUTIONSDATA?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  }) : lang === "sp" ? SOLUTIONSDATA1?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  }) : lang === "ar" ? SOLUTIONSDATA2?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  }) : lang === "gr" ? SOLUTIONSDATA3?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  }) :  SOLUTIONSDATA4?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  })
                 }
                  
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <div
        style={{
          position: "absolute",
          top: 100,
        }}
      >
        <AIRAMonoLinesLeft />
      </div>
    </Box>
  );
};

export default Index;
