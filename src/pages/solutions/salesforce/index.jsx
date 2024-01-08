import React, { useState, useEffect } from 'react';
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

const AIRACANDODATA = [
  {
    id: 1,
    text: "Hyperautomatisieren Workflows Ihrer Salesforce-basierten Unternehmensinfrastruktur innerhalb von AIRA selbst",
  },
  {
    id: 2,
    text: "Verwalten Ihre Compliance- und Regulierungsaktualisierungen automatisch.",
  },
  {
    id: 3,
    text: "Rationalisieren Ihre Sicherheitsprotokolle für eine schnellere Implementierung ohne Kompromisse bei Tiefe und Stabilität.",
  },
  {
    id: 4,
    text: "Expandieren Zugriffsverwaltung ohne Einschränkungen mit sicherem Single-Sign-On in einer integrierten Schnittstelle.",
  },
  {
    id: 5,
    text: "Strategisieren Sie Ihre Ausgaben-ROI-Prognosen zur Minimierung und Priorisierung hochwirksamer Kostenfaktoren für Renditen.",
  },
  {
    id: 6,
    text: "Vereinfachen Ihre Kundendatenbank vonAnpassen Felder und Filter für relevantere undpersonalisiert Verkäufe.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    text: "Hiperautomatizar flujos de trabajo de su infraestructura empresarial basada en Salesforce dentro de la propia AIRA.",
  },
  {
    id: 2,
    text: "Administrar sus actualizaciones regulatorias y de cumplimiento automáticamente.",
  },
  {
    id: 3,
    text: "Línea de corriente sus protocolos de seguridad para una implementación más rápida sin comprometer la profundidad y la estabilidad.",
  },
  {
    id: 4,
    text: "Expandir Gestión de acceso sin limitaciones con inicio de sesión único y seguro en una interfaz integrada.",
  },
  {
    id: 5,
    text: "Elaborar estrategias sus previsiones de retorno de la inversión (ROI) de sus gastos para minimizar y priorizar los motores de costos de alto impacto para las devoluciones.",
  },
  {
    id: 6,
    text: "Simplificar su base de datos de clientes porpersonalizar campos y filtros para obtener información más relevante ypersonalizado ventas.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    text: "أتمتة عمليات سير العمل بشكل مفرط للبنية الأساسية لمؤسستك المستندة إلى Salesforce داخل AIRA نفسها.",
  },
  {
    id: 2,
    text: "إدارة الامتثال والتحديثات التنظيمية تلقائيًا.",
  },
  {
    id: 3,
    text: "قم بتبسيط بروتوكولات الأمان لديك لتنفيذ أسرع دون المساس بالعمق والاستقرار.",
  },
  {
    id: 4,
    text: "قم بتوسيع إدارة الوصول دون قيود من خلال تسجيل الدخول الآمن والموحد في واجهة متكاملة.",
  },
  {
    id: 5,
    text: "قم بوضع إستراتيجيات لتوقعات عائد الاستثمار للإنفاق لتقليل محركات التكلفة عالية التأثير وإعطائها الأولوية لتحقيق العائدات.",
  },
  {
    id: 6,
    text: "قم بتبسيط قاعدة بيانات العملاء الخاصة بك عن طريق تخصيص الحقول والمرشحات لتحقيق مبيعات أكثر ملاءمة وتخصيصًا.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    text: "Hyperautomatisieren Workflows Ihrer Salesforce-basierten Unternehmensinfrastruktur innerhalb von AIRA selbst.",
  },
  {
    id: 2,
    text: "Verwalten Ihre Compliance- und Regulierungsaktualisierungen automatisch.",
  },
  {
    id: 3,
    text: "Rationalisieren Ihre Sicherheitsprotokolle für eine schnellere Implementierung ohne Kompromisse bei Tiefe und Stabilität.",
  },
  {
    id: 4,
    text: "Expandieren Zugriffsverwaltung ohne Einschränkungen mit sicherem Single-Sign-On in einer integrierten Schnittstelle.",
  },
  {
    id: 5,
    text: "Strategisieren Sie Ihre Ausgaben-ROI-Prognosen zur Minimierung und Priorisierung hochwirksamer Kostenfaktoren für Renditen.",
  },
  {
    id: 6,
    text: "Vereinfachen Ihre Kundendatenbank vonAnpassen Felder und Filter für relevantere undpersonalisiert Verkäufe.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    text: "Hyper-automate workflows of your Salesforce based enterprise infrastructure within AIRA itself.",
  },
  {
    id: 2,
    text: "Manage your compliance and regulatory updates automatically.",
  },
  {
    id: 3,
    text: "Streamline your security protocols for faster implementation without compromising depth and stability.",
  },
  {
    id: 4,
    text: "Expand access management without limitations with secure and single sign-on into an integrated interface.",
  },
  {
    id: 5,
    text: "Strategize your spend ROI forecasts to minimise and prioritise high impact cost engines for returns.",
  },
  {
    id: 6,
    text: "Simplify your customer database by customising fields and filters for more relevant and personalised sales.",
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
  }, []);

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
                    {lang === 'fr' ? `AIRA Hyper-automatisation ` : lang === 'sp' ? 'AIRA Hiperautomatización ' : lang === 'ar' ? 'أتمتة فرط AIRA ' : lang === 'gr' ? 'AIRA Hyperautomation ' : ' AIRA Hyper-automation '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `pour Salesforce` : lang === 'sp' ? 'para Salesforce' : lang === 'ar' ? 'لـ Salesforce' : lang === 'gr' ? 'für Salesforce' : '  for Salesforce'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Facilitez les tâches de vente et de service ` : lang === 'sp' ? 'Simplifique las tareas de ventas y servicio al ' : lang === 'ar' ? 'اجعل مهام المبيعات وخدمة العملاء أكثر سلاسة من خلال دمج ' : lang === 'gr' ? 'Erleichtern Sie Vertriebs- und Kundendienstaufgaben ' : ' Make sales and customer service tasks smoother by integrating AIRA with Salesforce.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader4.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
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
              {lang === 'fr' ? `Accélérez les ventes et optimisez ` : lang === 'sp' ? 'Acelere las ventas y' : lang === 'ar' ? 'تسريع المبيعات وتحسين العمليات باستخدام' : lang === 'gr' ? 'Beschleunigen Sie den Verkauf ' : 'Maximise ROI with Salesforce combined with '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `les processus avec` : lang === 'sp' ? 'optimice los procesos con' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'und optimieren Sie Prozesse mit' : ' AIRA'}
              </span>
            </Typography>
            {/* <Typography
              variant="subtitle2"
              sx={{ my: 1, fontWeight: 600, lineHeight: 2, fontSize: "23px", textAlign: "center" }}
            >
              {lang === 'fr' ? `Force de vente &AIRA` : lang === 'sp' ? 'Fuerza de ventas &AIRE' : lang === 'ar' ? 'قوة المبيعات و AIRA' : lang === 'gr' ? 'Zwangsversteigerung &AIRA' : 'Automated Employee On-boarding | Smart Employee Profile Management | Due Diligence Automation'}
            </Typography> */}

            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/solutionmid.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ my: 1, fontWeight: 700 }}>

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, fontSize: '20px', lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Fournissez à chaque vendeur un assistant bot.` : lang === 'sp' ? 'Proporcione a cada vendedor un asistente bot.' : lang === 'ar' ? 'تزويد كل مندوب مبيعات بمساعد روبوت' : lang === 'gr' ? 'Stellen Sie jedem Verkäufer einen Bot-Assistenten zur Verfügung.' : 'Provide every salesperson with a bot assistant.'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 , fontSize: '16px'}}
                >
                  {lang === 'fr' ? `Cela permettra à vos employés de se concentrer sur des ventes plus importantes et de ne pas s'enliser dans des détails mineurs. L'assistant robotique peut effectuer des tâches répétitives dans Salesforce et d'autres systèmes, telles que rechercher des informations, saisir des données et remplir des formulaires et des rapports.` : lang === 'sp' ? 'Esto permitirá que sus empleados se concentren en ventas más importantes y no se atasquen en detalles menores. El asistente robótico puede realizar tareas repetitivas en Salesforce y otros sistemas, como buscar información, ingresar datos y completar formularios e informes.' : lang === 'ar' ? 'سيسمح هذا لموظفيك بالتركيز على المبيعات الأكبر وعدم التورط في التفاصيل الصغيرة. يمكن للمساعد الآلي أداء مهام متكررة في Salesforce والأنظمة الأخرى، مثل البحث عن المعلومات وإدخال البيانات واستكمال النماذج والتقارير.' : lang === 'gr' ? 'So können sich Ihre Mitarbeiter auf größere Umsätze konzentrieren und verlieren sich nicht in Kleinigkeiten. Der Roboterassistent kann sich wiederholende Aufgaben in Salesforce und anderen Systemen ausführen, beispielsweise nach Informationen suchen, Daten eingeben und Formulare und Berichte ausfüllen.' : ' This will allow your employees to concentrate on larger sales and not get bogged down by minor details. The robotic assistant can perform repetitive tasks in Salesforce and other systems, such as searching for information, entering data, and completing forms and reports.'}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box
          sx={{ my: 10 }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Grid container spacing={5} flexDirection={'row-reverse'}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/solutionmid3.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ my: 1, fontWeight: 700 }}>

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, fontSize: '20px', lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Utilisez des robots pour gérer les suivis.` : lang === 'sp' ? 'Utilice robots para gestionar los seguimientos.' : lang === 'ar' ? 'استخدم الروبوتات للتعامل مع المتابعات.' : lang === 'gr' ? 'Nutzen Sie Roboter für die Nachverfolgung.' : ' Use robots to handle follow-ups.'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Utilisez AIRA Digital Agents for Salesforce pour automatiser les processus de suivi en fonction des événements et des changements de statut. Cela permet aux robots de prendre en charge le suivi des ventes et du service, ce qui permet de gagner du temps et d'améliorer la vitesse de réponse en éliminant le travail manuel.` : lang === 'sp' ? 'Utilice AIRA Digital Agents para Salesforce para automatizar procesos de seguimiento basados en eventos y cambios de estado. Esto permite a los bots hacerse cargo del seguimiento de ventas y servicios, ahorrando tiempo y mejorando la velocidad de respuesta al eliminar el trabajo manual.' : lang === 'ar' ? 'استخدم وكلاء AIRA الرقميين لـ Salesforce لأتمتة عمليات المتابعة بناءً على الأحداث وتغييرات الحالة. يتيح ذلك للروبوتات تولي مسؤولية المبيعات ومتابعة الخدمة، مما يوفر الوقت ويحسن سرعة الاستجابة من خلال التخلص من العمل اليدوي.' : lang === 'gr' ? 'Nutzen Sie AIRA Digital Agents für Salesforce, um Folgeprozesse basierend auf Ereignissen und Statusänderungen zu automatisieren. Dadurch können die Bots Vertriebs- und Service-Nachverfolgungen übernehmen, wodurch Zeit gespart und die Reaktionsgeschwindigkeit durch den Wegfall manueller Arbeit verbessert wird.' : ' Use AIRA Digital Agents for Salesforce to automate follow-up processes based on events and status changes. This allows the bots to take over sales and service follow-ups, saving time and improving response speed by eliminating manual work. '}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>

      <Container maxWidth="lg">
        <Box
          sx={{ my: 10 }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            {/* <Typography variant="h5" sx={{ fontWeight: 600, mb: 5 }}>
              {lang === 'fr' ? `Accélérez les ventes et optimisez ` : lang === 'sp' ? 'Acelere las ventas y' : lang === 'ar' ? 'تسريع المبيعات وتحسين العمليات باستخدام' : lang === 'gr' ? 'Beschleunigen Sie den Verkauf ' : 'Hyper-automation in'}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `les processus avec` : lang === 'sp' ? 'optimice los procesos con' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'und optimieren Sie Prozesse mit' : ' Human Resource delivers'}
              </span>
            </Typography> */}

            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/solutionmid2.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ my: 1, fontWeight: 700 }}>

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, fontSize: '20px', lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Connectez facilement Salesforce à vos autres systèmes.` : lang === 'sp' ? 'Conecte Salesforce con sus otros sistemas fácilmente.' : lang === 'ar' ? 'قم بتوصيل Salesforce بأنظمتك الأخرى بسهولة.' : lang === 'gr' ? 'Verbinden Sie Salesforce ganz einfach mit Ihren anderen Systemen.' : 'Connect Salesforce with your other systems easily.'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Partagez rapidement et facilement les informations sur les ventes et les clients dans toute votre organisation. Automatisez même les processus de vente et de service complexes qui impliquent plusieurs systèmes. AIRA fonctionne avec la plupart des principales technologies, applications et logiciels et vous permet de vous connecter dans n'importe quelle combinaison à l'aide de l'API, de l'interface utilisateur et de l'IA.` : lang === 'sp' ? 'Comparta información de ventas y clientes de forma rápida y fluida en toda su organización. Automatice incluso los procesos de ventas y servicios complicados que involucran múltiples sistemas. AIRA funciona con la mayoría de las principales tecnologías, aplicaciones y software y le permite conectarse en cualquier combinación mediante API, UI e IA.' : lang === 'ar' ? 'شارك معلومات المبيعات والعملاء بسرعة وسلاسة في جميع أنحاء مؤسستك. أتمتة عمليات المبيعات والخدمات المعقدة التي تتضمن أنظمة متعددة. يعمل AIRA مع معظم التقنيات والتطبيقات والبرامج الرئيسية ويتيح لك الاتصال بأي مجموعة باستخدام واجهة برمجة التطبيقات (API) وواجهة المستخدم (UI) والذكاء الاصطناعي (AI).' : lang === 'gr' ? 'Teilen Sie Verkaufs- und Kundeninformationen schnell und reibungslos in Ihrem gesamten Unternehmen. Automatisieren Sie selbst komplizierte Vertriebs- und Serviceprozesse, an denen mehrere Systeme beteiligt sind. AIRA funktioniert mit den meisten wichtigen Technologien, Apps und Software und ermöglicht Ihnen die Verbindung in beliebiger Kombination mithilfe von API, Benutzeroberfläche und KI.' : 'Share sales and customer information quickly and smoothly throughout your organisation. Automate even complicated sales and service processes that involve multiple systems. AIRA works with most major technologies, apps, and software and allows you to connect in any combination using API, UI, and AI.'}

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
              {lang === 'fr' ? `AIRA Hyper-automatisation pour Salesforce` : lang === 'sp' ? 'AIRA Hiperautomatización ' : lang === 'ar' ? 'أتمتة فرط AIRA لـ Salesforce' : lang === 'gr' ? 'AIRA Hyperautomation für Salesforce' : 'Provide every'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Facilitez les tâches de vente et de service client en intégrant AIRA à Salesforce.` : lang === 'sp' ? 'para Salesforce' : lang === 'ar' ? 'اجعل مهام المبيعات وخدمة العملاء أكثر سلاسة من خلال دمج AIRA مع Salesforce' : lang === 'gr' ? 'Erleichtern Sie Vertriebs- und Kundendienstaufgaben durch die Integration von AIRA mit Salesforce.' : 'by integrating AIRA with Salesforce.'}
              </span>
            </Typography>
          </Stack>
          <Grid container spacing={2} sx={{ my: 3 }}>
            {lang === 'fr' ? AIRACANDODATA?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'sp' ? AIRACANDODATA1?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'ar' ? AIRACANDODATA2?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'gr' ? AIRACANDODATA3?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : AIRACANDODATA4?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Box
          sx={{ my: 10, }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, textAlign: "center" }}
            >
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Maximice el ROI con Salesforce ' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA Hyperautomation' : 'Maximise ROI with Salesforce'} {' '}
              </span>

              {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA Hyperautomation' : 'combined with AIRA'}
            </Typography>
            {/* <Box sx={{ width: { xs: "100%", lg: "85%" } }}>
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
                In Human Resource departments, the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI deliver consistent benefits such as:
                {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA Hyperautomation' : 'with AIRA Hyper-automation'}
              </Typography>
            </Box> */}
            <Grid sx={{ pt: 4 }} container spacing={5} justifyContent="center" alignItems="center">
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
                      {lang === 'fr' ? `Ventes` : lang === 'sp' ? 'Ventas' : lang === 'ar' ? 'مبيعات' : lang === 'gr' ? 'Verkäufe' : 'Sales'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Utilisez des agents numériques pour automatiser les tâches administratives répétitives telles que les suivis, les recherches et les recherches.` : lang === 'sp' ? 'Utilice Agentes Digitales para automatizar tareas administrativas repetitivas como seguimientos, búsquedas e investigaciones.' : lang === 'ar' ? 'استخدم الوكلاء الرقميين لأتمتة المهام الإدارية المتكررة مثل المتابعات وعمليات البحث والبحث.' : lang === 'gr' ? 'Verwenden Sie digitale Agenten, um sich wiederholende Verwaltungsaufgaben wie Nachverfolgungen, Suchen und Recherchen zu automatisieren.' : 'Use Digital Agents to automate repetitive administrative tasks like follow-ups, searches, and research.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Hyper-automatisez le traitement des commandes client pour le rendre plus rapide.` : lang === 'sp' ? 'Hiperautomatice el procesamiento de pedidos de ventas para hacerlo más rápido.' : lang === 'ar' ? 'فرط أتمتة معالجة أوامر المبيعات لجعلها أسرع.' : lang === 'gr' ? 'Vollautomatisieren Sie die Auftragsabwicklung, um sie schneller zu machen.' : 'Hyper-automate sales order processing to make it faster.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Accélérez l’exécution et la livraison des commandes. Assurez-vous que tous vos systèmes disposent de données cohérentes.` : lang === 'sp' ? 'Speed up fulfilment and delivery of orders. Make sure all your systems have consistent data.' : lang === 'ar' ? 'تسريع إنجاز وتسليم الطلبات. تأكد من أن جميع أنظمتك تحتوي على بيانات متسقة.' : lang === 'gr' ? 'Beschleunigen Sie die Erfüllung und Lieferung von Bestellungen. Stellen Sie sicher, dass alle Ihre Systeme über konsistente Daten verfügen.' : 'Speed up fulfilment and delivery of orders. Make sure all your systems have consistent data.'}
                        </Typography>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

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
                      {lang === 'fr' ? `Service client` : lang === 'sp' ? 'Servicio al Cliente' : lang === 'ar' ? 'خدمة الزبائن' : lang === 'gr' ? 'Kundendienst' : 'Customer Service'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Traitez automatiquement les demandes du service client.` : lang === 'sp' ? 'Procese las solicitudes de servicio al cliente de forma automática.' : lang === 'ar' ? 'معالجة طلبات خدمة العملاء تلقائيًا.' : lang === 'gr' ? 'Verarbeiten Sie Kundendienstanfragen automatisch.' : '  Process customer service requests automatically.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Résolvez les problèmes des clients en un seul appel.` : lang === 'sp' ? 'Resuelva los problemas de los clientes en una sola llamada.' : lang === 'ar' ? 'حل مشاكل العملاء بمكالمة واحدة.' : lang === 'gr' ? 'Lösen Sie Kundenprobleme in einem Anruf.' : 'Solve customer problems in one call.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Voyez tout sur le client en un seul endroit.` : lang === 'sp' ? 'Vea todo sobre el cliente en un solo lugar.' : lang === 'ar' ? 'شاهد كل شيء عن العميل في مكان واحد.' : lang === 'gr' ? 'Sehen Sie alles über den Kunden an einem Ort.' : 'See everything about the customer in one place.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Permettez aux clients de s’aider eux-mêmes.` : lang === 'sp' ? 'Permita que los clientes se ayuden a sí mismos.' : lang === 'ar' ? 'السماح للعملاء بمساعدة أنفسهم.' : lang === 'gr' ? 'Erlauben Sie den Kunden, sich selbst zu helfen.' : 'Allow customers to help themselves.'}
                        </Typography>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

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
                    {lang === 'fr' ? `Commercialisation` : lang === 'sp' ? 'Marketing' : lang === 'ar' ? 'تسويق' : lang === 'gr' ? 'Marketing' : 'Marketing'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Automatisez les téléchargements de leads` : lang === 'sp' ? 'Automatizar las cargas de clientes potenciales' : lang === 'ar' ? 'أتمتة تحميلات الرصاص' : lang === 'gr' ? 'Automatisieren Sie Lead-Uploads' : 'Automate lead uploads.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Gérer les campagnes` : lang === 'sp' ? 'Manejar campañas' : lang === 'ar' ? 'التعامل مع الحملات' : lang === 'gr' ? 'Behandeln Sie Kampagnen' : 'Handle campaigns.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Combiner les rapports` : lang === 'sp' ? 'Combinar informes' : lang === 'ar' ? '●	الجمع بين التقارير' : lang === 'gr' ? 'Kombinieren Sie Berichte' : ' Combine reports.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Maintenir la cohérence des données sur toutes les plateformes marketing.` : lang === 'sp' ? 'Mantenga la coherencia de los datos en todas las plataformas de marketing.' : lang === 'ar' ? 'الحفاظ على اتساق البيانات عبر منصات التسويق.' : lang === 'gr' ? 'Sorgen Sie für die Datenkonsistenz auf allen Marketingplattformen.' : 'Maintain data consistency across marketing platforms.'}
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </Stack>
        </Box>
      </Container>

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
  )
}

export default Index;
