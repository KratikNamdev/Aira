import React,{useState,useEffect} from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container
} from "@mui/material";
import Colors from '@/common/Colorscomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import ESCard from '@/components/ESCard/ESCardcomponents';
import { useRouter } from 'next/router';
const SOLUTIONSDATA = [
  {
    title: "Bancaire et financier",
    desc: "Transformez vos opérations bancaires et financières avec les solutions avancées d'hyper-automatisation d'AIRA.",
    icon: "banking.svg",
    route: "solutions/banking_and_finance",
  },
  {
    title: "Assurance",
    desc: "Révolutionnez les processus d'assurance avec l'automatisation intelligente d'AIRA pour une efficacité et une précision accrues.",
    icon: "insurance.svg",
    route: "solutions/insurance",
  },
  {
    title: "Soins de santé",
    desc: "Innovez dans les flux de travail des soins de santé grâce à l'automatisation sur mesure d'AIRA, garantissant précision et conformité.",
    icon: "healthcare.svg",
    route: "solutions/healthcare",
  },
  {
    title: "Télécom",
    desc: "Élevez les services de télécommunications grâce à l'automatisation de pointe d'AIRA, en optimisant l'expérience client.",
    icon: "telecom.svg",
    route: "solutions/telecom",
  },
  {
    title: "Vente au détail",
    desc: "Optimisez les opérations de vente au détail grâce à l'automatisation transparente d'AIRA, garantissant agilité et satisfaction client.",
    icon: "retail.svg",
    route: "solutions/retail",
  },
  {
    title: "BPO",
    desc: "Améliorez l'efficacité du BPO avec les solutions d'hyper-automatisation transformatrices d'AIRA.",
    icon: "bpo.svg",
    route: "solutions/bpo",
  },
  {
    title: "Fabrication",
    desc: "Modernisez les processus de fabrication grâce à l'automatisation intelligente d'AIRA, qui améliore la productivité et la qualité.",
    icon: "manufacturing.svg",
    route: "solutions/manufacturing",
  },
];

const SOLUTIONSDATA1 = [
  {
    title: "Bancos y finanzas",
    desc: "Transforme sus operaciones bancarias y financieras con las soluciones avanzadas de hiperautomatización de AIRA.",
    icon: "banking.svg",
    route: "solutions/banking_and_finance",
  },
  {
    title: "Seguro",
    desc: "Revolucione los procesos de seguros con la automatización inteligente de AIRA para mejorar la eficiencia y precisión.",
    icon: "insurance.svg",
    route: "solutions/insurance",
  },
  {
    title: "Cuidado de la salud ",
    desc: "Innove los flujos de trabajo de atención médica con la automatización personalizada de AIRA, garantizando precisión y cumplimiento.",
    icon: "healthcare.svg",
    route: "solutions/healthcare",
  },
  {
    title: "telecomunicaciones",
    desc: "Eleve los servicios de telecomunicaciones a través de la automatización de vanguardia de AIRA, optimizando las experiencias de los clientes.",
    icon: "telecom.svg",
    route: "solutions/telecom",
  },
  {
    title: "Minorista",
    desc: "Optimice las operaciones minoristas con la perfecta automatización de AIRA, garantizando agilidad y satisfacción del cliente.",
    icon: "retail.svg",
    route: "solutions/retail",
  },
  {
    title: "BPO ",
    desc: "Mejore la eficiencia de BPO con las soluciones transformadoras de hiperautomatización de AIRA.",
    route: "solutions/bpo",
  },
  {
    title: "Fabricación",
    desc: "Modernice los procesos de fabricación con la automatización inteligente de AIRA, impulsando la productividad y la calidad",
    icon: "manufacturing.svg",
    route: "solutions/manufacturing",
  },
];

const SOLUTIONSDATA2 = [
  {
    title: "الخدمات المصرفية والمالية",
    desc: "قم بتحويل عملياتك المصرفية والمالية باستخدام حلول الأتمتة الفائقة المتقدمة من AIRA.",
    icon: "banking.svg",
    route: "solutions/banking_and_finance",
  },
  {
    title: "تأمين",
    desc: "قم بإحداث ثورة في عمليات التأمين من خلال الأتمتة الذكية لـ AIRA لتعزيز الكفاءة والدقة.",
    icon: "insurance.svg",
    route: "solutions/insurance",
  },
  {
    title: "الرعاىة الصحية ",
    desc: "ابتكار مسارات عمل الرعاية الصحية من خلال الأتمتة المخصصة لـ AIRA، مما يضمن الدقة والامتثال.",
    icon: "healthcare.svg",
    route: "solutions/healthcare",
  },
  {
    title: "اتصالات",
    desc: "ارفع مستوى خدمات الاتصالات من خلال أتمتة AIRA المتطورة، مما يعمل على تحسين تجارب العملاء.",
    icon: "telecom.svg",
    route: "solutions/telecom",
  },
  {
    title: "بيع بالتجزئة",
    desc: "قم بتحسين عمليات البيع بالتجزئة من خلال التشغيل الآلي السلس لـ AIRA، مما يضمن سرعة الحركة ورضا العملاء.",
    icon: "retail.svg",
    route: "solutions/retail",
  },
  {
    title: "تعهيد العمليات التجارية ",
    desc: "عزز كفاءة تعهيد العمليات التجارية (BPO) من خلال حلول الأتمتة الفائقة التحويلية من AIRA.",
    icon: "bpo.svg",
    route: "solutions/bpo",
  },
  {
    title: "تصنيع",
    desc: "قم بتحديث عمليات التصنيع من خلال الأتمتة الذكية لـ AIRA، مما يؤدي إلى زيادة الإنتاجية والجودة.",
    icon: "manufacturing.svg",
    route: "solutions/manufacturing",
  },
];

const SOLUTIONSDATA3 = [
  {
    title: "Banken und Finanzen",
    desc: "Transformieren Sie Ihre Bank- und Finanzabläufe mit den fortschrittlichen Hyperautomatisierungslösungen von AIRA.",
    icon: "banking.svg",
    route: "solutions/banking_and_finance",
  },
  {
    title: "Versicherung",
    desc: "Revolutionieren Sie Versicherungsprozesse mit der intelligenten Automatisierung von AIRA für mehr Effizienz und Genauigkeit.",
    icon: "insurance.svg",
    route: "solutions/insurance",
  },
  {
    title: "Gesundheitspflege",
    desc: "Erneuern Sie Arbeitsabläufe im Gesundheitswesen mit der maßgeschneiderten Automatisierung von AIRA und sorgen Sie so für Präzision und Compliance.",
    icon: "healthcare.svg",
    route: "solutions/healthcare",
  },
  {
    title: "Telekommunikation",
    desc: "Erweitern Sie Telekommunikationsdienste durch die hochmoderne Automatisierung von AIRA und optimieren Sie so das Kundenerlebnis.",
    icon: "telecom.svg",
    route: "solutions/telecom",
  },
  {
    title: "Einzelhande",
    desc: "Optimieren Sie den Einzelhandelsbetrieb mit der nahtlosen Automatisierung von AIRA und sorgen Sie so für Agilität und Kundenzufriedenheit.",
    icon: "retail.svg",
    route: "solutions/retail",
  },
  {
    title: "BPO ",
    desc: "Steigern Sie die BPO-Effizienz mit den transformativen Hyperautomatisierungslösungen von AIRA.",
    icon: "bpo.svg",
    route: "solutions/bpo",
  },
  {
    title: "Herstellung",
    desc: "Modernisieren Sie Fertigungsprozesse mit der intelligenten Automatisierung von AIRA und steigern Sie so Produktivität und Qualität",
    icon: "manufacturing.svg",
    route: "solutions/manufacturing",
  },
];

const SOLUTIONSDATA4 = [
  {
    title: "Banking & Finance",
    desc: "Transform your Banking and Finance operations with AIRA's advanced hyper-automation solutions.",
    icon: "banking.svg",
    route: "solutions/banking_and_finance",
  },
  {
    title: "Insurance",
    desc: "Revolutionise Insurance processes with AIRA's intelligent automation for enhanced efficiency and accuracy.",
    icon: "insurance.svg",
    route: "solutions/insurance",
  },
  {
    title: "Healthcare",
    desc: "Innovate Healthcare workflows with AIRA's tailored automation, ensuring precision and compliance.",
    icon: "healthcare.svg",
    route: "solutions/healthcare",
  },
  {
    title: "Telecom",
    desc: "Elevate Telecom services through AIRA's cutting-edge automation, optimising customer experiences.",
    icon: "telecom.svg",
    route: "solutions/telecom",
  },
  {
    title: "Retail",
    desc: "Optimise Retail operations with AIRA's seamless automation, ensuring agility and customer satisfaction.",
    icon: "retail.svg",
    route: "solutions/retail",
  },
  {
    title: "BPO",
    desc: "Enhance BPO efficiency with AIRA's transformative hyper-automation solutions.",
    icon: "bpo.svg",
    route: "solutions/bpo",
  },
  {
    title: "Manufacturing",
    desc: "Modernise Manufacturing processes with AIRA's intelligent automation, driving productivity and quality.",
    icon: "manufacturing.svg",
    route: "solutions/manufacturing",
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(()=>{
    setLang(localStorage?.getItem('lang'));
  },[]);
  const router = useRouter();
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
              <Stack sx={{ my: 10 }}>
                <Box sx={{ width: "40%" }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {/* Our{" "}
                    <span style={{ color: Colors.airaSecondary }}>
                      Solutions
                    </span> */}
                    {lang === 'fr' ? `SOLUTIONS` : lang==='sp' ? 'SOLUCIONES' : lang==='ar'? 'حلول' : lang==='gr' ? 'LÖSUNGEN' : 'SOLUTIONS'}
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                  {lang === 'fr' ? `AIRA propose une suite complète de solutions d'hyper-automatisation, intégrant de manière transparente l'IA, le ML et la RPA pour élever les processus d'entreprise. Découvrez l'avenir de l'automatisation avec les solutions de pointe d'AIRA, conçues pour une efficacité transformatrice, une évolutivité et une prise de décision intelligente.` : lang==='sp' ? 'AIRA ofrece un conjunto completo de soluciones de hiperautomatización, que integran a la perfección IA, ML y RPA para mejorar los procesos empresariales. Experimente el futuro de la automatización con las soluciones de vanguardia de AIRA, diseñadas para brindar eficiencia transformadora, escalabilidad y toma de decisiones inteligente.' : lang==='ar'? 'تقدم AIRA مجموعة شاملة من حلول الأتمتة الفائقة، والتي تدمج الذكاء الاصطناعي والتعلم الآلي وRPA بسلاسة لرفع مستوى عمليات المؤسسة. استمتع بتجربة مستقبل الأتمتة مع حلول AIRA المتطورة، المصممة لتحقيق الكفاءة التحويلية وقابلية التوسع واتخاذ القرارات الذكية.' : lang==='gr' ? 'AIRA bietet eine umfassende Suite von Hyperautomatisierungslösungen, die KI, ML und RPA nahtlos integrieren, um Unternehmensprozesse zu verbessern. Erleben Sie die Zukunft der Automatisierung mit den hochmodernen Lösungen von AIRA, die auf transformative Effizienz, Skalierbarkeit und intelligente Entscheidungsfindung ausgelegt sind.' : 'AIRA offers a comprehensive suite of hyper-automation solutions, seamlessly integrating AI, ML, and RPA to elevate enterprise processes. Experience the future of automation with AIRA`s cutting-edge solutions, designed for transformative efficiency, scalability, and intelligent decision-making.'}
                  </Typography>
                </Box>
                <Grid container gap={1}>
                  {SOLUTIONSDATA4?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
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
  )
};

export default Index;
