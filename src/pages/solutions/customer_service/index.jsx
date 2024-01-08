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
    text: "Hyper-automatisation des communications clients avec des processus de communication plus personnalisés et personnalisés",
  },
  {
    id: 2,
    text: "Hyper-automatisez l’accusé de réception et le traitement des demandes de service, réduisant ainsi les coûts de service et le gaspillage des ressources.",
  },
  {
    id: 3,
    text: "Hyper-automatisez la délégation des tâches des ressources humaines à un agent numérique intelligent conçu et formé de manière personnalisée pour les objectifs et les processus de votre entreprise.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    text: "Hiperautomatización de las comunicaciones con los clientes con procesos de comunicación más personalizados y personalizados.",
  },
  {
    id: 2,
    text: "Hiperautomatice el reconocimiento y procesamiento de solicitudes de servicio, reduciendo los costos de servicio y el desperdicio de recursos.",
  },
  {
    id: 3,
    text: "Hiperautomatice la delegación de tareas de recursos humanos a un agente digital inteligente creado y capacitado personalizado para los objetivos y procesos de su empresa.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    text: "أتمتة اتصالات العملاء بشكل مفرط من خلال عمليات اتصالات أكثر تخصيصًا وتخصيصًا",
  },
  {
    id: 2,
    text: "أتمتة فائقة لإقرار طلبات الخدمة ومعالجتها، مما يقلل من تكاليف الخدمة وإهدار الموارد.",
  },
  {
    id: 3,
    text: "تفويض مهام الموارد البشرية بشكل آلي للغاية إلى وكيل رقمي ذكي تم تصميمه وتدريبه خصيصًا لتحقيق أهداف وعمليات مؤسستك.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    text: "Hyperautomatisierung der Kundenkommunikation mit personalisierteren und individuelleren Kommunikationsprozessen",
  },
  {
    id: 2,
    text: "Automatisieren Sie die Bestätigung und Verarbeitung von Serviceanfragen und reduzieren Sie so Servicekosten und Ressourcenverschwendung.",
  },
  {
    id: 3,
    text: "Hyperautomatisieren Sie die Delegation von Personalaufgaben an einen intelligenten digitalen Agenten, der speziell für Ihre Unternehmensziele und -prozesse entwickelt und geschult wird.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    text: "Hyper-automating customer communications with more personalised and custom communications processes. ",
  },
  {
    id: 2,
    text: "Hyper-automate service request acknowledgement and processing, reducing service costs and resource wastage.",
  },
  {
    id: 3,
    text: "Hyper-automate human resource task delegation to an intelligent digital agent built and trained customised for your enterprise goals and processes.",
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage.getItem('lang'));
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
                    {lang === 'fr' ? `Hyper-automatisation dans l’optimisation du service client` : lang === 'sp' ? 'Hiperautomatización en la optimización del servicio al cliente' : lang === 'ar' ? 'الأتمتة المفرطة في تحسين خدمة العملاء' : lang === 'gr' ? 'Hyperautomatisierung in der Kundenserviceoptimierung' : 'Hyper-automation in Customer Service Optimization'} {' '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA` : lang === 'sp' ? 'Con AIRA' : lang === 'ar' ? 'مع آيرا' : lang === 'gr' ? 'Mit AIRA' : 'With AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Supprimez les erreurs humaines et les ambiguïtés tout en renforçant l'engagement de la marque et en améliorant l'expérience client..` : lang === 'sp' ? 'Elimine el error humano y la ambigüedad mientras aumenta el compromiso con la marca y mejora las experiencias de los clientes..' : lang === 'ar' ? 'قم بإزالة الأخطاء البشرية والغموض أثناء توسيع نطاق مشاركة العلامة التجارية وتعزيز تجارب العملاء.' : lang === 'gr' ? 'Beseitigen Sie menschliches Versagen und Unklarheiten, skalieren Sie gleichzeitig das Markenengagement und verbessern Sie das Kundenerlebnis.' : 'Remove human error and ambiguity while scaling brand engagement and enhancing customer experiences.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader13.png"
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
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              {lang === 'fr' ? `Hyper-automatisation ` : lang === 'sp' ? 'Hiperautomatización' : lang === 'ar' ? 'توفر الأتمتة المفرطة ' : lang === 'gr' ? 'Hyperautomatisierung' : ' Hyper-automation in'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `dans le service client offre` : lang === 'sp' ? 'en Servicio al Cliente entrega' : lang === 'ar' ? 'في خدمة العملاء' : lang === 'gr' ? 'im Kundenservice liefert' : 'Customer Service delivers'}
              </span>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ my: 3, fontWeight: 600, lineHeight: 2 }}
            >
              {lang === 'fr' ? `Service interne continu | Service après les heures normales | Coûts de service réduits | Cohérence améliorée | Augmentation des taux de réponse et de la qualité des réponses` : lang === 'sp' ? 'Servicio interno continuo | Servicio fuera de horario | Costos de servicio reducidos | Consistencia mejorada | Mayores tasas de respuesta y calidad de respuesta' : lang === 'ar' ? 'الخدمة الداخلية المستمرة | خدمة ما بعد ساعات العمل | انخفاض تكاليف الخدمة | تعزيز الاتساق | زيادة معدلات الاستجابة وجودة الاستجابة' : lang === 'gr' ? 'Kontinuierlicher Inhouse-Service | Service außerhalb der Geschäftszeiten | Reduzierte Servicekosten | Verbesserte Konsistenz | Erhöhte Antwortraten und Antwortqualität' : ' Continuous In-house Service | After-hours Service | Reduced Service Costs | Enhanced Consistency | Increased Response Rates and Response Quality'}
            </Typography>
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
                  sx={{ my: 1, fontWeight: 600, lineHeight: 2 , fontSize: '18px'}}
                >
                  {lang === 'fr' ? `AIRA transforme le service client` : lang === 'sp' ? 'AIRA transforma el servicio al cliente' : lang === 'ar' ? 'AIRA تحول خدمة العملاء' : lang === 'gr' ? 'AIRA verändert den Kundenservice' : ' AIRA transforms Customer Service'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 , fontSize: '15px'}}
                >
                  {lang === 'fr' ? `Avec l'optimisation du service client, les entreprises suppriment l'ambiguïté et les marges d'erreur plus élevées tout en améliorant la cohérence et la rapidité des processus de service client.` : lang === 'sp' ? 'Con la optimización del servicio al cliente, las empresas eliminan la ambigüedad y los mayores márgenes de error al tiempo que mejoran la coherencia y la velocidad de los procesos de servicio al cliente.' : lang === 'ar' ? 'من خلال تحسين خدمة العملاء، تقوم المؤسسات بإزالة الغموض وهوامش الخطأ الأعلى مع تعزيز اتساق وسرعة عمليات خدمة العملاء.' : lang === 'gr' ? 'Mit Customer Service Optimization beseitigen Unternehmen Unklarheiten und höhere Fehlermargen und verbessern gleichzeitig die Konsistenz und Geschwindigkeit der Kundenserviceprozesse.' : ' With Customer Service Optimization, enterprises remove the ambiguity and higher error margins while enhancing consistency and speed of customer service processes.'}

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Avec AIRA, l'hyper-automatisation du service client est une activité perspicace basée sur les données et axée sur une plus grande personnalisation, livrée plus rapidement à grande échelle avec la même cohérence tout en réduisant les coûts de service et le temps de traitement.` : lang === 'sp' ? 'Con AIRA, el servicio al cliente hiperautomatizado es una actividad reveladora basada en datos centrada en una mayor personalización entregada más rápido a escala con la misma coherencia y al mismo tiempo reduce los costos del servicio y el tiempo de proceso.' : lang === 'ar' ? 'مع AIRA، تعد خدمة العملاء الآلية للغاية نشاطًا ثاقبًا يعتمد على البيانات ويركز على تخصيص أكبر يتم تقديمه بشكل أسرع على نطاق واسع وبنفس الاتساق مع تقليل تكاليف الخدمة ووقت المعالجة.' : lang === 'gr' ? 'Mit AIRA ist die Hyperautomatisierung des Kundenservice eine aufschlussreiche, datengesteuerte Aktivität, die sich auf eine stärkere Personalisierung konzentriert, die schneller und in größerem Umfang bei gleichbleibender Konsistenz bereitgestellt wird und gleichzeitig Servicekosten und Prozesszeit reduziert.' : 'With AIRA, hyper-automating customer service is an insightful data-driven activity focused on greater personalization delivered faster at scale with same consistency while reducing service costs and process time.'}
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
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIREayuda' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : 'AIRA helps'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `aide le service client en` : lang === 'sp' ? 'al servicio de atención al cliente mediante' : lang === 'ar' ? 'يساعد خدمة العملاء من خلال' : lang === 'gr' ? 'AIRAhilft dem Kundenservice durch' : 'Customer Service by'}
              </span>
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
              </span>
              {' '}
              {lang === 'fr' ? `de` : lang === 'sp' ? 'de' : lang === 'ar' ? 'ائد' : lang === 'gr' ? 'von' : 'of'}
              {' '}
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'Transformaciones digitales de la aviación' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : 'AIRA'}
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
                {lang === 'fr' ? `Dans les départements du Service Client, les capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'une RPA fiable mise à l'échelle par l'IA adaptative, offre des avantages constants tels que : ` : lang === 'sp' ? 'En los departamentos de Atención al Cliente, las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa, ofrece beneficios consistentes como: ' : lang === 'ar' ? 'في أقسام خدمة العملاء، توفر إمكانات التشغيل الآلي الفائق لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي، فوائد متسقة مثل:' : lang === 'gr' ? 'In Kundendienstabteilungen sind die Hyperautomatisierungsfunktionen vonAIRADie Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI, bietet konsistente Vorteile wie: ' : 'In Customer Service departments, the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI deliver consistent benefits such as:'}
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
                      {lang === 'fr' ? `Accélérez la réussite des clients` : lang === 'sp' ? 'Acelere el éxito del cliente' : lang === 'ar' ? 'تسريع نجاح العملاء' : lang === 'gr' ? 'Beschleunigen Sie den Kundenerfolg' : 'Accelerate Customer Success'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Analyses prédictives et en temps réel pour l'élaboration de stratégies et la rationalisation` : lang === 'sp' ? 'Análisis predictivo y en tiempo real para elaborar estrategias y optimizar' : lang === 'ar' ? 'التحليلات في الوقت الحقيقي والتنبؤية لوضع الاستراتيجيات وتبسيطها' : lang === 'gr' ? 'Echtzeit- und prädiktive Analysen zur Strategieentwicklung und Rationalisierung' : 'Real-time and Predictive Analytics for strategizing and streamlining.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Gérer les communications inter-équipes sur les problèmes dans tous les départements, rôles et hiérarchies` : lang === 'sp' ? 'Gestione las comunicaciones entre equipos sobre problemas en cualquier departamento, rol y jerarquía.' : lang === 'ar' ? '	إدارة التواصل بين الفريق عبر المشكلات في أي قسم وأدوار وتسلسلات هرمية' : lang === 'gr' ? '	Verwalten Sie die teamübergreifende Kommunikation über Probleme in allen Abteilungen, Rollen und Hierarchien' : 'Manage cross-team communications across issues in any departments, roles and hierarchies.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Planifiez et élaborez une stratégie pour les problèmes critiques des clients avec une prise de décision améliorée.` : lang === 'sp' ? 'Planifique y diseñe estrategias para problemas críticos de los clientes con una mejor toma de decisiones.' : lang === 'ar' ? 'تخطيط ووضع إستراتيجيات لقضايا العملاء الهامة مع تحسين عملية اتخاذ القرار.' : lang === 'gr' ? 'Planen und strategisieren Sie kritische Kundenprobleme mit verbesserter Entscheidungsfindung.' : 'Plan and strategize critical customer issues with enhanced decision making.'}
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
                      {lang === 'fr' ? `Excellence en optimisation des ressources` : lang === 'sp' ? 'Excelencia en optimización de recursos' : lang === 'ar' ? 'التميز في تحسين الموارد' : lang === 'gr' ? 'Exzellente Ressourcenoptimierung' : 'Resource Optimization Excellence'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Analyse avancée continue pour la base de données clients afin de personnaliser les résolutions` : lang === 'sp' ? 'Análisis avanzado continuo de la base de datos de clientes para personalizar las resoluciones.' : lang === 'ar' ? 'التحليلات المتقدمة المستمرة لقاعدة بيانات العملاء لتخصيص الحلول' : lang === 'gr' ? 'Kontinuierliche Advanced Analytics für die Kundendatenbank zur Personalisierung von Lösungen' : 'Continuous Advanced Analytics for customer database to personalise resolutions.'}

                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Suivre et surveiller les modèles de comportement pour les initiatives stratégiques et l'optimisation proactive des services` : lang === 'sp' ? 'Seguimiento y monitoreo de patrones de comportamiento para iniciativas estratégicas y optimización proactiva del servicio.' : lang === 'ar' ? 'تتبع ومراقبة الأنماط السلوكية للمبادرات الإستراتيجية والتحسين الاستباقي للخدمة' : lang === 'gr' ? 'Verfolgen und überwachen Sie Verhaltensmuster für strategische Initiativen und proaktive Serviceoptimierung' : 'Track and monitor behavioural patterns for strategic initiatives and proactive service optimization.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Créez des règles et des exceptions personnalisées pour une mise en œuvre sur mesure.` : lang === 'sp' ? 'Cree reglas y excepciones personalizadas para una implementación personalizada.' : lang === 'ar' ? 'بناء قواعد واستثناءات مخصصة للتنفيذ المخصص.' : lang === 'gr' ? 'Erstellen Sie benutzerdefinierte Regeln und Ausnahmen für eine maßgeschneiderte Implementierung.' : ' Build custom rules and exceptions for tailored implementation.'}
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
                  style={{ width: '100%', height: 'auto' }}
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
                          {lang === 'fr' ? `Maintenir des dossiers de service client à jour pour une gestion plus intelligente du service client` : lang === 'sp' ? 'Mantenga registros de servicio al cliente actualizados para una gestión más inteligente del servicio al cliente' : lang === 'ar' ? 'الاحتفاظ بسجلات خدمة العملاء المحدثة لإدارة خدمة العملاء بشكل أكثر ذكاءً' : lang === 'gr' ? 'Pflegen Sie aktualisierte Kundendienstaufzeichnungen für ein intelligenteres Kundendienstmanagement' : 'Maintain updated customer service records for smarter customer service management.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Améliorez les communications et la productivité entre les équipes` : lang === 'sp' ? '	Mejore las comunicaciones y la productividad entre equipos' : lang === 'ar' ? 'تعزيز الاتصالات بين الفريق والإنتاجية' : lang === 'gr' ? 'Verbessern Sie die teamübergreifende Kommunikation und Produktivität' : 'Enhance cross team communications and productivity.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Créez une intégration plus fluide des nouveaux clients et une fidélisation plus élevée des clients grâce à une meilleure communication, une productivité améliorée et un meilleur retour sur investissement en termes de service et de coût.` : lang === 'sp' ? 'Cree una incorporación de nuevos clientes más fluida y una mayor retención de clientes con una mejor comunicación, mayor productividad y un mayor retorno de la inversión en términos de servicio y costo.' : lang === 'ar' ? 'قم بإنشاء عملية تأهيل عملاء جدد أكثر سلاسة ومستوى أعلى من الاحتفاظ بالعملاء من خلال اتصالات أفضل وإنتاجية معززة وخدمة أعلى لعائد التكلفة على الاستثمار.' : lang === 'gr' ? 'Sorgen Sie für ein reibungsloseres Onboarding neuer Kunden und eine höhere Kundenbindung mit besserer Kommunikation, höherer Produktivität und höherem Service-to-Cost-Return-on-Investment.' : '  Create smoother new customer onboarding and higher customer retention with better communication, enhanced productivity and higher service to cost return on investment.'}
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
  );
}

export default Index;
