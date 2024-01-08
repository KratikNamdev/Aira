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
import { useRouter } from 'next/router';

const AIRACANDODATA = [
  {
    id: 1,
    text: "35% increased HR employee capacity",
  },
  {
    id: 2,
    text: "0% Reduce error rates in compliance programs with the implementation",
  },
  {
    id: 3,
    text: "8x faster onboarding",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    text: "Tirez parti de la RPA pour automatiser sans effort l’intégration des données clients et tierces sur divers systèmes.",
  },
  {
    id: 2,
    text: "Accélérez le processus d'attribution des leads et concluez des transactions plus rapidement en automatisant des tâches telles que la recherche client, la génération de devis et la documentation juridique.",
  },
  {
    id: 3,
    text: "Intégrez des données provenant de plusieurs sources pour améliorer la précision des campagnes marketing et permettre des interactions commerciales plus personnalisées.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    text: "استفد من تقنية RPA لأتمتة عملية دمج بيانات العملاء والجهات الخارجية عبر الأنظمة المختلفة دون عناء.",
  },
  {
    id: 2,
    text: "قم بتسريع عملية تعيين العملاء المتوقعين وإتمام الصفقات بشكل أسرع من خلال أتمتة المهام مثل البحث عن العملاء وإنشاء عروض الأسعار والوثائق القانونية.",
  },
  {
    id: 3,
    text: "دمج البيانات من مصادر متعددة لتحسين دقة الحملات التسويقية وتمكين تفاعلات المبيعات الأكثر تخصيصًا.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    text: "Nutzen Sie RPA, um die Integration von Kunden- und Drittanbieterdaten in verschiedenen Systemen mühelos zu automatisieren.",
  },
  {
    id: 2,
    text: "Beschleunigen Sie den Lead-Zuweisungsprozess und schließen Sie Geschäfte schneller ab, indem Sie Aufgaben wie Kundenrecherche, Angebotserstellung und rechtliche Dokumentation automatisieren.",
  },
  {
    id: 3,
    text: "Integrieren Sie Daten aus mehreren Quellen, um die Genauigkeit von Marketingkampagnen zu verbessern und personalisiertere Verkaufsinteraktionen zu ermöglichen.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    text: "Leverage RPA to effortlessly automate the integration of customer and third-party data across various systems.",
  },
  {
    id: 2,
    text: "Speed up the lead assignment process and close deals faster by automating tasks such as customer research, quote generation, and legal documentation.",
  },
  {
    id: 3,
    text: "Integrate data from multiple sources to improve the accuracy of marketing campaigns and enable more personalized sales interactions.",
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
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
                    {lang === 'fr' ? `Hyper-automatisation dans le marketing et les ventes` : lang === 'sp' ? 'Hiperautomatización en marketing y ventas' : lang === 'ar' ? 'فرط الأتمتة في التسويق والمبيعات' : lang === 'gr' ? 'Hyperautomatisierung in Marketing und Vertrieb' : 'Hyper-automation in Marketing & Sales '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA` : lang === 'sp' ? 'Con AIRA' : lang === 'ar' ? 'مع آيرا' : lang === 'gr' ? 'Mit AIRA' : ' With AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Permettez à vos équipes commerciales et marketing sur le terrain d’automatiser leurs processus de manière indépendante et en toute ` : lang === 'sp' ? 'Permita que sus equipos de ventas y' : lang === 'ar' ? 'قم بتمكين فرق المبيعات والتسويق الميداني لديك من أتمتة عملياتهم بشكل مستقل وبكل ثقة. امنحهم القدرة ' : lang === 'gr' ? 'Ermöglichen Sie Ihren Vertriebs- und Außendienstteams, ihre Prozesse unabhängig und zuverlässig zu automatisieren.' : 'Enable your sales and field marketing teams to independently automate their processes with confidence. Give them the power to automate without relying on external support.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader5.png"
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
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              {lang === 'fr' ? `Hyper-automatisation ` : lang === 'sp' ? 'Hiperautomatización' : lang === 'ar' ? 'الأتمتة المفرطة في التسويق و' : lang === 'gr' ? 'Hyperautomatisierung' : '  Hyper-automation in '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `en Marketing et Ventes offre` : lang === 'sp' ? '' : lang === 'ar' ? 'والمبيعات تقدم' : lang === 'gr' ? 'in Marketing & Vertrieb liefert' : 'Marketing & Sales delivers'}
              </span>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ my: 1, fontWeight: 600, lineHeight: 2, textAlign: 'center' }}
            >
              {lang === 'fr' ? `Génération de leads améliorée | Gestion intelligente des campagnes marketing | Prévision du retour sur investissement et efficacité des ressources | Meilleure fidélisation des clients | Satisfaction client accrue` : lang === 'sp' ? 'Generación de leads mejorada | Gestión inteligente de campañas de marketing | Previsión de retorno de la inversión y eficiencia de recursos | Mayor retención de clientes | Mayor satisfacción del cliente' : lang === 'ar' ? 'تعزيز توليد العملاء المحتملين | إدارة الحملات التسويقية الذكية | توقعات عائد الاستثمار وكفاءة الموارد | ارتفاع معدل الاحتفاظ بالعملاء | ارتفاع رضا العملاء' : lang === 'gr' ? 'Verbesserte Lead-Generierung | Intelligentes Marketingkampagnenmanagement | ROI-Prognose und Ressourceneffizienz | Höhere Kundenbindung | Höhere Kundenzufriedenheit' : ' Enhanced Lead Generation | Smart Marketing Campaign Management | ROI Forecast and Resource Efficiency | Higher Customer Retention | Higher Customer Satisfaction '}
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/solutionmid.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', borderRadius: 8}}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ my: 1, fontWeight: 700 }}>

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, lineHeight: 2 }}
                >
                  {lang === 'fr' ? `AIRA transforme le marketing et les ventes` : lang === 'sp' ? 'AIRA transforma el marketing y las ventas' : lang === 'ar' ? 'تعمل AIRA على إحداث تحول في التسويق والمبيعات' : lang === 'gr' ? 'AIRA transformiert Marketing und Vertrieb' : ' AIRA transforms Marketing & Sales'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Tirez parti de la puissance de l’IA et de la RPA pour permettre à vos équipes commerciales et marketing d’étendre leur portée et d’améliorer leurs relations avec les clients. Automatisez les tâches chronophages et répétitives telles que le filtrage des leads, les mises à jour CRM, la recherche de prospects et la création de devis, permettant ainsi à vos équipes de se concentrer sur des tâches plus importantes.` : lang === 'sp' ? 'Aproveche el poder de la IA y la RPA para capacitar a sus equipos de ventas y marketing para ampliar su alcance y mejorar las relaciones con los clientes. Automatice tareas repetitivas y que consumen mucho tiempo, como el filtrado de clientes potenciales, las actualizaciones de CRM, la investigación de clientes potenciales y la creación de cotizaciones, permitiendo a sus equipos centrarse en tareas más importantes.' : lang === 'ar' ? 'استفد من قوة الذكاء الاصطناعي وتقنية RPA لتمكين فرق المبيعات والتسويق لديك من توسيع نطاق وصولهم وتعزيز علاقاتهم مع العملاء. قم بأتمتة المهام التي تستغرق وقتًا طويلاً والمتكررة مثل تصفية العملاء المحتملين وتحديثات إدارة علاقات العملاء (CRM) والبحث عن العملاء المتوقعين وإنشاء عروض الأسعار، مما يسمح لفرقك بالتركيز على المهام الأكثر أهمية.' : lang === 'gr' ? 'Nutzen Sie die Leistungsfähigkeit von KI und RPA, um Ihren Vertriebs- und Marketingteams die Möglichkeit zu geben, ihre Reichweite zu vergrößern und die Kundenbeziehungen zu verbessern. Automatisieren Sie zeitaufwändige und sich wiederholende Aufgaben wie Lead-Filterung, CRM-Aktualisierungen, Interessentenrecherche und Angebotserstellung, damit sich Ihre Teams auf wichtigere Aufgaben konzentrieren können.' : ' Leverage the power of AI and RPA to empower your sales and marketing teams to expand their reach and enhance client relationships. Automate time-consuming and repetitive tasks such as lead filtering, CRM updates, prospect research, and quote creation, allowing your teams to focus on more important tasks.'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Avec AIRA, l'hyper-automatisation du marketing et des ventes permet des avantages d'automatisation du marketing tels qu'une génération améliorée de leads, une meilleure compréhension des clients et des entonnoirs de marketing plus fluides, tandis que l'automatisation des ventes offre une fidélisation plus élevée des clients, des marges de vente accrues et une intégration plus rapide des clients.` : lang === 'sp' ? 'Con AIRA, la hiperautomatización de marketing y ventas permite beneficios de automatización de marketing, como una mejor generación de leads, una mejor comprensión del cliente y embudos de marketing más fluidos, mientras que la automatización de ventas ofrece una mayor retención de clientes, mayores márgenes de ventas y una incorporación de clientes más rápida.' : lang === 'ar' ? 'مع AIRA، تتيح الأتمتة المفرطة للتسويق والمبيعات فوائد أتمتة التسويق مثل توليد عملاء محتملين محسّنين وفهم أفضل للعملاء ومسارات أكثر سلاسة للتسويق، بينما توفر أتمتة المبيعات معدل احتفاظ أعلى بالعملاء وتعزيز هوامش المبيعات وتأهيل العملاء بشكل أسرع.' : lang === 'gr' ? 'Mit AIRA ermöglicht die Hyperautomatisierung von Marketing und Vertrieb Marketingautomatisierungsvorteile wie eine verbesserte Lead-Generierung, ein besseres Kundenverständnis und reibungslosere Marketing-Trichter, während die Vertriebsautomatisierung eine höhere Kundenbindung, höhere Verkaufsmargen und ein schnelleres Kunden-Onboarding ermöglicht.' : 'With AIRA, hyper-automation of Marketing and Sales enables marketing automation benefits such as enhanced lead generation, better customer understanding and smoother funnels for marketing while sales automation delivers higher customer retention, boosted sales margins and faster customer onboarding.'}
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
          <Stack direction="column" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#fff" }}>
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRA' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : 'AIRA helps '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `aide le marketing et les ventes en` : lang === 'sp' ? 'ayuda a Marketing y Ventas al' : lang === 'ar' ? 'AIRA يساعد في التسويق والمبيعات من خلال' : lang === 'gr' ? 'hilft Marketing & Vertrieb durch' : 'helps Marketing & Sales by'}
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
                {lang === 'fr' ? `Avantages` : lang === 'sp' ? 'Beneficios' : lang === 'ar' ? 'فو' : lang === 'gr' ? 'Vorteile' : 'Benefits'}
              </span> {' '}

              {lang === 'fr' ? `de` : lang === 'sp' ? 'de' : lang === 'ar' ? 'ائد' : lang === 'gr' ? 'von' : 'of'}
              {' '}
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRA' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : 'AIRA'}
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
                {lang === 'fr' ? `Dans les départements Marketing & Ventes, les capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'une RPA fiable mise à l'échelle par l'IA adaptative, offre des avantages constants tels que : ` : lang === 'sp' ? 'En los departamentos de marketing y ventas, las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa, ofrece beneficios consistentes como: ' : lang === 'ar' ? 'في أقسام التسويق والمبيعات، توفر إمكانات التشغيل الآلي الفائق لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والمتطورة بواسطة الذكاء الاصطناعي التكيفي، فوائد متسقة مثل:' : lang === 'gr' ? 'In Marketing- und Vertriebsabteilungen sind die Hyperautomatisierungsfunktionen vonAIRADie Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI, bietet konsistente Vorteile wie: ' : 'In Marketing & Sales departments, the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI deliver consistent benefits such as: '}
              </Typography>
            </Box>

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
                      {lang === 'fr' ? `Accélérez votre réussite sur le marché` : lang === 'sp' ? 'Acelere el éxito del mercado' : lang === 'ar' ? 'تسريع نجاح السوق' : lang === 'gr' ? 'Beschleunigen Sie den Markterfolg' : 'Accelerate Market Success'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Analyses prédictives et en temps réel pour l'élaboration de stratégies et la rationalisation` : lang === 'sp' ? 'Análisis predictivo y en tiempo real para elaborar estrategias y optimizar' : lang === 'ar' ? 'التحليلات في الوقت الحقيقي والتنبؤية لوضع الاستراتيجيات وتبسيطها' : lang === 'gr' ? 'Echtzeit- und prädiktive Analysen zur Strategieentwicklung und Rationalisierung' : 'Real-time and Predictive Analytics for strategizing and streamlining.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Gérer les communications inter-équipes entre les départements, les rôles et les hiérarchies` : lang === 'sp' ? 'Gestione las comunicaciones entre equipos en todos los departamentos, roles y jerarquías.' : lang === 'ar' ? 'إدارة الاتصالات بين الفريق عبر الأقسام والأدوار والتسلسلات الهرمية' : lang === 'gr' ? 'Verwalten Sie die teamübergreifende Kommunikation über Abteilungen, Rollen und Hierarchien hinweg' : 'Manage cross-team communications across departments, roles and hierarchies. '}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Générez des rapports interfonctionnels en quelques secondes pour faciliter une prise de décision éclairée.` : lang === 'sp' ? 'Genere informes multifuncionales en segundos para facilitar la toma de decisiones informada.' : lang === 'ar' ? 'قم بإنشاء تقارير متعددة الوظائف في ثوانٍ لتسهيل اتخاذ القرارات المستنيرة.' : lang === 'gr' ? 'Erstellen Sie in Sekundenschnelle funktionsübergreifende Berichte, um eine fundierte Entscheidungsfindung zu erleichtern.' : 'Generate cross-functional reports in seconds to facilitate informed decision-making.'}
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
                      {lang === 'fr' ? `Excellence en optimisation des ressources` : lang === 'sp' ? 'Excelencia en optimización de recursos' : lang === 'ar' ? 'التميز في تحسين الموارد' : lang === 'gr' ? 'Exzellente Ressourcenoptimierung' : ' Resource Optimization Excellence'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Analyses avancées continues pour la gestion des ressources et des campagnes ainsi que la planification des appels commerciaux` : lang === 'sp' ? 'Análisis avanzado continuo para gestión de recursos y campañas, así como programación de llamadas de ventas.' : lang === 'ar' ? 'التحليلات المتقدمة المستمرة لإدارة الموارد والحملات وكذلك جدولة مكالمات المبيعات' : lang === 'gr' ? 'Kontinuierliche erweiterte Analysen für Ressourcenmanagement und Kampagnen sowie die Planung von Verkaufsgesprächen' : ' Continuous Advanced Analytics for Resource Management and time shift scheduling.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Suivez et surveillez les audiences, les campagnes, les marchés, les catégories de produits et les modèles de comportement pour des corrections stratégiques` : lang === 'sp' ? 'Seguimiento y seguimiento de audiencias, campañas, mercados y categorías de productos y patrones de comportamiento para realizar correcciones estratégicas.' : lang === 'ar' ? 'تتبع ومراقبة الجماهير والحملات والأسواق وفئات المنتجات والأنماط السلوكية لإجراء التصحيحات الإستراتيجية' : lang === 'gr' ? 'Verfolgen und überwachen Sie Zielgruppen, Kampagnen, Märkte und Produktkategorien sowie Verhaltensmuster für strategische Korrekturen' : '  Track and monitor personnel attendances and behavioural patterns for strategic corrections.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Créez des règles et des exceptions personnalisées pour une mise en œuvre sur mesure.` : lang === 'sp' ? 'Cree reglas y excepciones personalizadas para una implementación personalizada.' : lang === 'ar' ? 'بناء قواعد واستثناءات مخصصة للتنفيذ المخصص.' : lang === 'gr' ? 'Erstellen Sie benutzerdefinierte Regeln und Ausnahmen für eine maßgeschneiderte Implementierung.' : 'Build custom rules and exceptions for tailored management implementation.'}
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
                    {lang === 'fr' ? `Impact à grande échelle` : lang === 'sp' ? 'Impacto de escala' : lang === 'ar' ? 'تأثير النطاق' : lang === 'gr' ? 'Skaleneffekt' : 'Scale Impact'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Augmentez la productivité des employés en intégrant les agents numériques AIRA à votre logiciel CRM, tel que Salesforce.` : lang === 'sp' ? 'Aumente la productividad de los empleados integrando AIRA Digital Agents con su software CRM, como Salesforce.' : lang === 'ar' ? 'عزز إنتاجية الموظفين من خلال دمج وكلاء AIRA الرقميين مع برنامج CRM الخاص بك، مثل Salesforce.' : lang === 'gr' ? 'Steigern Sie die Produktivität Ihrer Mitarbeiter, indem Sie AIRA Digital Agents in Ihre CRM-Software wie Salesforce integrieren.' : 'Maintain updated personnel records for smarter human resource management.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Automatisez les tâches répétitives, telles que la mise à jour des données CRM, la recherche de prospects et le suivi des approbations des responsables, pour gagner du temps et accroître l'efficacité.` : lang === 'sp' ? 'Automatice tareas repetitivas, como actualizar datos de CRM, investigar prospectos y rastrear las aprobaciones de los gerentes, para ahorrar tiempo y aumentar la eficiencia.' : lang === 'ar' ? 'قم بأتمتة المهام المتكررة، مثل تحديث بيانات إدارة علاقات العملاء (CRM)، والبحث عن العملاء المحتملين، وتعقب موافقات المدير، لتوفير الوقت وزيادة الكفاءة.' : lang === 'gr' ? 'Automatisieren Sie wiederkehrende Aufgaben wie das Aktualisieren von CRM-Daten, das Recherchieren potenzieller Kunden und das Aufspüren von Managergenehmigungen, um Zeit zu sparen und die Effizienz zu steigern.' : 'Enhance cross team communications and productivity.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Créez une intégration plus fluide des nouveaux clients et une fidélisation plus élevée des clients avec une meilleure génération de leads et des clients plus engagés.` : lang === 'sp' ? 'Cree una incorporación de nuevos clientes más fluida y una mayor retención de clientes con una mejor generación de leads y clientes más comprometidos.' : lang === 'ar' ? 'قم بإنشاء عملية تأهيل عملاء جدد أكثر سلاسة ومستوى أعلى من الاحتفاظ بالعملاء من خلال توليد عملاء محتملين أفضل وعملاء أكثر تفاعلاً.' : lang === 'gr' ? 'Sorgen Sie für ein reibungsloseres Onboarding neuer Kunden und eine höhere Kundenbindung durch bessere Lead-Generierung und engagiertere Kunden.' : 'Create smoother onboarding and personnel management by intelligent delegation and hyper-automated issue addressals.'}
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

      {/* <Box sx={{ backgroundColor: "#f8f9fb", py: 6 }}>
        <div className="btn_group btn-group1">
          <button onClick={() => {
            router.push('/contact');
          }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : ' Leverage AIRA for your Enterprise Today'}

            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
          <button onClick={() => {
            router.push('/contact');
          }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang === 'sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang === 'ar' ? 'احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang === 'gr' ? 'Buchen Sie ein Demo-Beratungsgespräch mit unserem Produktteam' : 'Book a Demo Consultation Call with our Product Team'}
            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
        </div>
      </Box> */}

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
