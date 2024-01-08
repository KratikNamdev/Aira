import React,{useState,useEffect} from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";

import Colors from '@/common/Colorscomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Image from 'next/image';
import ESCircle from '@/components/ESCircle/ESCirclecomponents';
import { useRouter } from 'next/router';

const AIRACANDODATA = [
  {
    id: 1,
    title:"Opérations efficaces",
    text: "AIRA rationalise les processus aéronautiques, du traitement des passagers à la logistique, en optimisant les opérations pour une efficacité accrue et une réduction des coûts.",
  },
  {
    id: 2,
    title:"Conformité réglementaire",
    text: "Assurez le respect des réglementations aéronautiques sans effort grâce à l'automatisation d'AIRA, en minimisant le risque d'erreurs et en améliorant les protocoles de sécurité.",

  },
  {
    id: 3,
    title:"Expérience client",
    text: "Améliorez l'expérience des passagers en tirant parti de l'hyper-automatisation d'AIRA pour améliorer la qualité globale du service dans le secteur de l'aviation.",

  },

];

const AIRACANDODATA1 = [
  {
    id: 1,
    title:"Operaciones eficientes",
    text: "AIRA agiliza los procesos de aviación, desde el manejo de pasajeros hasta la logística, optimizando las operaciones para aumentar la eficiencia y reducir los costos.",
  },
  {
    id: 2,
    title:"Cumplimiento normativo",
    text: "Garantice el cumplimiento de la normativa aeronáutica sin esfuerzo a través de la automatización de AIRA, minimizando el riesgo de errores y mejorando los protocolos de seguridad.",
  },
  {
    id: 3,
    title:"Experiencia del cliente",
    text: "Mejore la experiencia del pasajero aprovechando la hiperautomatización de AIRA para mejorar la calidad general del servicio en el sector de la aviación.",

  },
  
];

const AIRACANDODATA2 = [
  {
    id: 1,
    title:"عمليات فعالة",
    text: "تعمل AIRA على تبسيط عمليات الطيران، بدءًا من التعامل مع الركاب وحتى الخدمات اللوجستية، وتحسين العمليات لزيادة الكفاءة وخفض التكاليف.",

  },
  {
    id: 2,
    title:"التدقيق المطلوب",
    text: "ضمان الامتثال للوائح الطيران دون عناء من خلال أتمتة AIRA، وتقليل مخاطر الأخطاء وتعزيز بروتوكولات السلامة.",

  },
  {
    id: 3,
    title:"تجربة الزبون",
    text: "ارفع مستوى تجربة الركاب من خلال الاستفادة من أتمتة AIRA الفائقة لتعزيز جودة الخدمة الشاملة في قطاع الطيران.",

  },
  
];

const AIRACANDODATA3 = [
  {
    id: 1,
    title:"Effizienter Betrieb",
    text: "AIRA rationalisiert Luftfahrtprozesse, von der Passagierabfertigung bis zur Logistik, und optimiert den Betrieb für mehr Effizienz und geringere Kosten.",

  },
  {
    id: 2,
    title:"Einhaltung gesetzlicher Vorschriften",
    text: "Stellen Sie durch die Automatisierung von AIRA mühelos die Einhaltung von Luftfahrtvorschriften sicher, minimieren Sie das Fehlerrisiko und verbessern Sie Sicherheitsprotokolle.",

  },
  {
    id: 3,
    title:"Kundenerfahrung",
    text: "Steigern Sie das Passagiererlebnis, indem Sie die Hyperautomatisierung von AIRA nutzen, um die allgemeine Servicequalität im Luftfahrtsektor zu verbessern.",

  }
];

const AIRACANDODATA4 = [
  {
    id: 1,
    title:"Efficient Operations",
    text: "AIRA streamlines aviation processes, from passenger handling to logistics, optimising operations for increased efficiency and reduced costs.",

  },
  {
    id: 2,
    title:"Regulatory Compliance",
    text: "Ensure compliance with aviation regulations effortlessly through AIRA's automation, minimising the risk of errors and enhancing safety protocols.",
  },
  {
    id: 3,
    title:"Customer Experience",
    text: "Elevate the passenger experience by leveraging AIRA's hyper-automation to enhance overall service quality in the aviation sector.",

  }
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage.getItem('lang'));
  }, []);

  const router = useRouter();

  return (
    <Box width="100" >
      <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: { xs: 0, lg: 10 } }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={2}></Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container maxWidth="lg">
              <Stack sx={{ mt: 10 }}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {lang === 'fr' ? `Transformations numériques de l'aviation` : lang === 'sp' ? 'Transformaciones digitales de la aviación' : lang === 'ar' ? 'التحولات الرقمية للطيران' : lang === 'gr' ? 'Digitale Transformationen in der Luftfahrt' : 'Aviation Digital Transformations'} {' '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA Hyperautomation' : 'with AIRA Hyper-automation'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                  {lang === 'fr' ? `Garantissez des voyages sûrs, des trajets plus agréables et des expériences client plus fluides dans tous les processus commerciaux critiques grâce à l'hyper-automatisation avec notre plateforme..` : lang === 'sp' ? 'Garantice viajes seguros, viajes más felices y experiencias de cliente más fluidas en todos los procesos comerciales críticos mediante la hiperautomatización con nuestra plataforma..' : lang === 'ar' ? 'تأكد من رحلات آمنة ورحلات أكثر سعادة وتجارب أكثر سلاسة للعملاء عبر جميع العمليات التجارية الهامة من خلال الأتمتة الفائقة باستخدام منصتنا.' : lang === 'gr' ? 'Sorgen Sie durch Hyperautomatisierung mit unserer Plattform für sicheres Reisen, glücklichere Reisen und reibungslosere Kundenerlebnisse in allen wichtigen Geschäftsprozessen.' : 'Ensure safe travels, happier journeys and smoother customer experiences across all critical business processes by hyper-automating with our platform.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Container maxWidth="lg">
        <Box
          sx={{ my: 10 }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5 }}>
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Hyper-automatisation ` : lang === 'sp' ? 'Hiperautomatización' : lang === 'ar' ? 'الأتمتة المفرطة ' : lang === 'gr' ? 'Hyperautomatisierung' : 'Hyper-automation'}
              </span> {" "}
              {lang === 'fr' ? `vous aide avec` : lang === 'sp' ? 'Construir. Plan. Desplegar.' : lang === 'ar' ? 'تساعدك على' : lang === 'gr' ? 'hilft dir dabei' : ' helps you with'}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5, textAlign: 'center' }}>
            {lang === 'fr' ? `Automatisation du traitement des bagages | Accélération de l'enregistrement des clients | Profilage client à 360 degrés` : lang === 'sp' ? 'Automatización del procesamiento de equipaje | Aceleración del registro de clientes | Perfilado de 360 grados del cliente' : lang === 'ar' ? 'أتمتة معالجة الأمتعة | تسريع تسجيل وصول العملاء | ملف تعريف العملاء بزاوية 360 درجة' : lang === 'gr' ? 'Automatisierung der Gepäckabfertigung | Beschleunigung des Kunden-Check-ins | 360-Grad-Kundenprofilierung' : 'Baggage Processing Automation | Customer Check-in Acceleration | Customer 360-degree Profiling'}
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/solutionmid.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, lineHeight: 2, fontSize: '20px' }}
                >
                  {lang === 'fr' ? `AIRA transforme l'aviation` : lang === 'sp' ? 'AIRA transforma la aviación' : lang === 'ar' ? 'AIRA يحول الطيران' : lang === 'gr' ? 'AIRA verändert die Luftfahrt' : 'AIRA transforms Aviation'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                {lang === 'fr' ? `La technologie d'automatisation peut améliorer l'industrie aéronautique en libérant les employés des tâches répétitives, leur permettant ainsi de fournir un meilleur service client. Les grandes compagnies aéronautiques ont intégré l'automatisation des processus robotiques (RPA) à des services d'externalisation des processus métier pour améliorer les performances organisationnelles, l'efficacité, les bénéfices, la conformité et la fidélisation des clients.` : lang === 'sp' ? 'La tecnología de automatización puede mejorar la industria de la aviación al liberar tiempo de los empleados de tareas repetitivas, permitiéndoles brindar un mejor servicio al cliente. Las principales empresas de aviación han incorporado la automatización robótica de procesos (RPA) con servicios de subcontratación de procesos comerciales para mejorar el desempeño organizacional, la eficiencia, las ganancias, el cumplimiento y la retención de clientes.' : lang === 'ar' ? 'يمكن لتكنولوجيا الأتمتة أن تعزز صناعة الطيران من خلال تحرير وقت الموظفين من المهام المتكررة، وتمكينهم من تقديم خدمة أفضل للعملاء. قامت شركات الطيران الكبرى بدمج أتمتة العمليات الروبوتية (RPA) مع خدمات الاستعانة بمصادر خارجية للعمليات التجارية لتحسين الأداء التنظيمي والكفاءة والأرباح والامتثال والاحتفاظ بالعملاء.' : lang === 'gr' ? 'Automatisierungstechnologie kann die Luftfahrtindustrie verbessern, indem sie die Zeit der Mitarbeiter von sich wiederholenden Aufgaben entlastet und es ihnen ermöglicht, einen besseren Kundenservice zu bieten. Große Luftfahrtunternehmen haben Robotic Process Automation (RPA) mit Outsourcing-Diensten für Geschäftsprozesse integriert, um die Unternehmensleistung, Effizienz, Gewinne, Compliance und Kundenbindung zu verbessern.' : 'Automation technology can enhance the aviation industry by freeing up employees time from repetitive tasks, enabling them to provide better customer service. Major aviation companies have incorporated robotic process automation (RPA) with business process outsourcing services to improve organisational performance, efficiency, profits, compliance, and customer retention.'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Transformez les processus de l'entreprise aéronautique, qu'il s'agisse de goulots d'étranglement critiques à l'enregistrement ou de capacités de traitement des bagages plus rapides et plus intelligentes, pour faciliter l'embarquement et le débarquement des clients grâce aux capacités d'AIRA.` : lang === 'sp' ? 'Transforme los procesos empresariales de la aviación, ya sean cuellos de botella críticos en el check-in o capacidades de manejo de equipaje más rápidas e inteligentes para facilitar el embarque y desembarque de los clientes con las capacidades de AIRA.' : lang === 'ar' ? 'قم بتحويل عمليات مؤسسة الطيران، سواء كانت اختناقات حرجة في تسجيل الوصول أو قدرات أسرع وأكثر ذكاءً في التعامل مع الأمتعة، إلى صعود العملاء ونزولهم من الطائرة بسلاسة باستخدام إمكانات AIRA.' : lang === 'gr' ? 'Transformieren Sie die Unternehmensprozesse in der Luftfahrt, sei es bei kritischen Check-in-Engpässen oder schnelleren, intelligenteren Gepäckabfertigungsfunktionen, bis hin zum reibungslosen Ein- und Aussteigen von Kunden mit den Funktionen von AIRA.' : ' Transform the Aviation enterprise processes, be they critical check-in bottlenecks or faster, smarter baggage handling capabilities to customer boarding and deboarding smoothening with AIRA’s capabilities. '}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: Colors.airaPrimary }}>
        <Box
          sx={{
            margin: "0 auto",
            width: "50%",
            py: 5,
          }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#fff" }}>
              <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : ' AIRA'}
              </span> {" "}
              {lang === 'fr' ? `vous permet de` : lang === 'sp' ? 'te permite' : lang === 'ar' ? 'تمكنك من' : lang === 'gr' ? 'ermöglicht es Ihnen' : ' enables you to'}
            </Typography>
          </Stack>
          <Grid container spacing={2} sx={{ my: 3 }}>
            {lang === 'fr' ? AIRACANDODATA.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'sp' ? AIRACANDODATA1.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'ar' ? AIRACANDODATA2.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'gr' ? AIRACANDODATA3.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : AIRACANDODATA4.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#f8f9fb", py: 6 }}>
        <Container maxWidth="lg">
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, textAlign: "center" }}
            >
              <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `Avantagesde` : lang === 'sp' ? 'Beneficios' : lang === 'ar' ? 'فوائد' : lang === 'gr' ? 'Vorteilevon' : 'Benefits'}
              </span> of{" "}
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'deAIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : ' AIRA'}
            </Typography>

            <Box sx={{ width: { xs: "100%", lg: "85%" } }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  width: { xs: "100%", lg: "85%" },
                  lineHeight: 2,
                  textAlign: "center",
                  mx: "auto"
                }}
              >
                {lang === 'fr' ? `Avec échelle et les expériences client basées sur l'accélération sont la clé, Aviationl’industrie bénéficie grandement des capacités d’hyper-automatisation deAIRA, avec la combinaison double rafale d'un RPA fiable mis à l'échelle par l'IA adaptative. ` : lang === 'sp' ? 'Con escala y las experiencias del cliente basadas en la aceleración son la clave, AviaciónLa industria se beneficia enormemente de las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa. ' : lang === 'ar' ? 'نظرًا لأن تجارب العملاء القائمة على النطاق والتسارع هي الأساس، تستفيد صناعة الطيران بشكل كبير من قدرات الأتمتة الفائقة لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي.' : lang === 'gr' ? 'Mit Skala und beschleunigungsbasierte Kundenerlebnisse sind der Schlüssel, LuftfahrtDie Industrie profitiert in hohem Maße von den Hyperautomatisierungsfähigkeiten vonAIRA, mit der Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI. ' : ' With scale and acceleration based customer experiences being the key, Aviation industry benefits highly from the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI'}
              </Typography>
            </Box>

            <Grid
              direction="row-reverse"
              sx={{ pt: 4 }}
              container
              spacing={5}
              justifyContent="left"
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/benefit1.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card raised>
                  <CardContent sx={{ p: 5 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                    >
                      {lang === 'fr' ? `Garantissez des trajets plus rapides et plus fluides` : lang === 'sp' ? 'Garantice viajes más rápidos y fluidos' : lang === 'ar' ? 'ضمان رحلات أسرع وأكثر سلاسة' : lang === 'gr' ? 'Sorgen Sie für schnellere und reibungslosere Fahrten' : '  Ensure faster, smoother journeys'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `	Automatisez les enregistrements des clients tout en conservant la facilité d'utilisation.` : lang === 'sp' ? 'Automatice los registros de clientes manteniendo la facilidad de uso.' : lang === 'ar' ? '	أتمتة تسجيلات وصول العملاء مع الحفاظ على سهولة الاستخدام.' : lang === 'gr' ? '	Automatisieren Sie Kunden-Check-ins und behalten Sie gleichzeitig die Benutzerfreundlichkeit bei.' : ' Hyper-automate 360-degree Frequent Travellers profiling for best personalizations.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `●	Profilage hyper-automatisé à 360 degrés des voyageurs fréquents pour une meilleure personnalisation` : lang === 'sp' ? 'Hiperautomatización de perfiles de viajeros frecuentes de 360 grados para obtener las mejores personalizaciones' : lang === 'ar' ? '	أتمتة ملفات تعريف المسافرين الدائمين بزاوية 360 درجة للحصول على أفضل التخصيصات' : lang === 'gr' ? 'Hyperautomatisieren Sie die 360-Grad-Profilerstellung von Vielreisenden für optimale Personalisierungen' : 'Automate Customer Check-ins while maintaining ease of use.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `	Participez à des expériences plus heureuses grâce à une gestion des bagages plus rapide et plus intelligente afin de réduire les temps d'attente.` : lang === 'sp' ? 'Ayude a lograr experiencias más felices mediante un manejo de equipaje más rápido e inteligente para reducir los tiempos de espera.' : lang === 'ar' ? '	المساعدة في تجارب أكثر سعادة من خلال التعامل بشكل أسرع وأكثر ذكاءً مع الأمتعة لتقليل أوقات الانتظار.' : lang === 'gr' ? 'Sorgen Sie für ein glücklicheres Erlebnis durch eine schnellere und intelligentere Gepäckabfertigung, um Wartezeiten zu verkürzen.' : 'Assist with happier experiences by faster, smarter baggage handling to reduce waiting times.'}
                        </Typography>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Container>

        <Container maxWidth="lg">
          <Grid
            sx={{ pt: 4 }}
            container
            spacing={5}
            justifyContent="left"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Image
                src="/images/solutions/banking/benefit3.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card raised>
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                  >
                    {lang === 'fr' ? `Un impact de haut vol basé sur les données` : lang === 'sp' ? 'Impacto de alto vuelo basado en datos' : lang === 'ar' ? 'يعتمد على البيانات، وتأثير عالي الطيران' : lang === 'gr' ? 'Datengesteuerte, hochfliegende Wirkung' : 'Data-driven, High-flying Impact'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `●	Rapports de données en temps opportun pour une meilleure visibilité sur l'ensemble de la production` : lang === 'sp' ? '	Informes de datos oportunos para una mejor visibilidad en toda la producción' : lang === 'ar' ? '	تقارير البيانات في الوقت المناسب لتحسين الرؤية عبر الإنتاج' : lang === 'gr' ? '	Zeitnahe Datenberichte für eine bessere Transparenz in der gesamten Produktion' : 'Timely data reports for better visibility across production.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Rapports et analyses en temps réel` : lang === 'sp' ? '	Informes y análisis en tiempo real' : lang === 'ar' ? '	تقارير الوقت الأمثل لتحسين رؤية الإنتاج عبر البيانات' : lang === 'gr' ? '●Echtzeitberichte und -analysen' : 'Real-time reporting and analytics.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `	Prise de décision intelligente pour une rentabilité optimale` : lang === 'sp' ? '	Toma de decisiones inteligente para una rentabilidad óptima' : lang === 'ar' ? 'اتخاذ قرارات ذكية لتحقيق الربحية المثلى' : lang === 'gr' ? 'Intelligente Entscheidungsfindung für optimale Rentabilität' : 'Smart decision making for optimum profitability.'}
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg">
          <Grid
            direction="row-reverse"
            sx={{ pt: 4 }}
            container
            spacing={5}
            justifyContent="left"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Image
                src="/images/solutions/banking/benefit2.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: 8}}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card raised>
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                  >
                    {lang === 'fr' ? `Créez une couverture continue pour tout le monde` : lang === 'sp' ? 'Cree una cobertura continua para todos' : lang === 'ar' ? 'بناء تغطية مستمرة للجميع' : lang === 'gr' ? 'Bauen Sie eine kontinuierliche Abdeckung für alle auf' : 'Build Continuous Coverage for everyone'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Des robots numériques pour suivre les stocks 24h/24 et 7j/7` : lang === 'sp' ? '	Bots digitales para rastrear el inventario 24 horas al día, 7 días a la semana' : lang === 'ar' ? '	الروبوتات الرقمية لتتبع المخزون 24/7' : lang === 'gr' ? '	Digitale Bots zur Bestandsverfolgung rund um die Uhr' : ' Digital bots to track inventory 24/7.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Suivi de tous les coûts de logistique et de transport` : lang === 'sp' ? '	Seguimiento de todos los costes de logística y transporte.' : lang === 'ar' ? '	مراقبة جميع التكاليف اللوجستية والنقل' : lang === 'gr' ? '	Überwachung aller Logistik- und Transportkosten' : '  Monitoring of all logistics and transportation costs.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Processus agile pour intégrer les fournisseurs` : lang === 'sp' ? '	Proceso ágil para incorporar proveedores' : lang === 'ar' ? 'عملية رشيقة لضم البائعين' : lang === 'gr' ? 'Agiles Verfahren zur Einbindung von Anbietern' : 'Agile process to onboard vendors.'}
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* <div className="" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <div className="btn_group">
            <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : ' Leverage AIRA for your Enterprise Today'}
            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
            <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang === 'sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang === 'ar' ? 'احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang === 'gr' ? 'Buchen Sie ein Demo-Beratungsgespräch mit unserem Produktteam' : 'Book a Demo Consultation Call with our Product Team'}
            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
          </div>
        </div> */}
      </Box>
<br/>
      <Box
        style={{
          position: "absolute",
          top: 50,
          zIndex: -1
        }}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <AIRAMonoLinesLeft />
      </Box>
    </Box>
  );
};

export default Index;
