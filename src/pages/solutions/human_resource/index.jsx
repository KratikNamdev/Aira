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
    text: "35% increased HR employee capacity.",
  },
  {
    id: 2,
    text: "0% Reduce error rates in compliance programs with the implementation.",
  },
  {
    id: 3,
    text: "8x faster onboarding.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    text: "35% augmentation de la capacité des employés RH",
  },
  {
    id: 2,
    text: "0% Réduisez les taux d’erreur dans les programmes de conformité grâce à la mise en œuvre.",
  },
  {
    id: 3,
    text: "8x une intégration plus rapide",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    text: "35% زيادة قدرة موظفي الموارد البشرية",
  },
  {
    id: 2,
    text: " 0% تقليل معدلات الخطأ في برامج الامتثال عند التنفيذ.",
  },
  {
    id: 3,
    text: "8x تأهيل أسرع",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    text: "35 % erhöhte Kapazität der HR-Mitarbeiter",
  },
  {
    id: 2,
    text: "0% Reduzieren Sie Fehlerquoten in Compliance-Programmen durch die Implementierung.",
  },
  {
    id: 3,
    text: "8x schnelleres Onboarding",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    text: "35% increased HR employee capacity.",
  },
  {
    id: 2,
    text: "0% Reduce error rates in compliance programs with the implementation.",
  },
  {
    id: 3,
    text: "8x faster onboarding.",
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
                    {lang === 'fr' ? `Hyper-automatisation dans la gestion des ressources humaines` : lang === 'sp' ? 'Hiperautomatización en la gestión de recursos humanos' : lang === 'ar' ? 'الأتمتة المفرطة في إدارة الموارد البشرية' : lang === 'gr' ? 'Hyperautomatisierung im Personalmanagement' : ' Hyper-automation in Human Resource Management'}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA` : lang === 'sp' ? 'Con AIRA' : lang === 'ar' ? 'مع آيرا' : lang === 'gr' ? 'Mit AIRA' : ' With AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                   
                      {lang === 'fr' ? `Minimiser les tâches manuelles redondantes, améliorer la prise de décision et l’élaboration de stratégies ainsi qu’accélérer les processus de gestion du ` : lang === 'sp' ? 'Minimizar las tareas manuales redundantes, mejorar la toma de decisiones y la elaboración de estrategias,' : lang === 'ar' ? 'تقليل المهام اليدوية الزائدة عن الحاجة، وتعزيز عملية صنع القرار ووضع الاستراتيجيات بالإضافة إلى' : lang === 'gr' ? 'Minimierung redundanter manueller Aufgaben, Verbesserung der Entscheidungsfindung und Strategieentwicklung sowie Beschleunigung von Änderungsmanagementprozessen. ' : 'Minimising redundant manual tasks, enhancing decision making and strategizing as well as accelerating change '}
                 
                    {lang === 'fr' ? `changement. Hyper-automatisation des processus RH pour s'aligner sur le développement organisationnel` : lang === 'sp' ? 'así como acelerar los procesos de gestión de cambios. Hiperautomatización de procesos de recursos humanos para alinearse con el desarrollo organizacional' : lang === 'ar' ? 'تسريع عمليات إدارة التغيير. أتمتة عمليات الموارد البشرية بشكل مفرط لتتماشى مع التطوير التنظيمي' : lang === 'gr' ? 'Hyperautomatisierung von HR-Prozessen zur Abstimmung mit der Organisationsentwicklung' : 'management processes. Hyper-automating HR Processes to Align with Organisational Development.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader16.png"
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
              {lang === 'fr' ? `Hyper-automatisation` : lang === 'sp' ? 'Hiperautomatización' : lang === 'ar' ? 'توفر الأتمتة المفرطة في ' : lang === 'gr' ? 'Hyperautomatisierung' : ' Hyper-automation in'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `en ressources humaines offre` : lang === 'sp' ? 'en Recursos Humanos entrega' : lang === 'ar' ? 'الموارد البشرية' : lang === 'gr' ? 'in Human Resource liefert' : 'Human Resource delivers'}
              </span>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ my: 1, fontWeight: 600, lineHeight: 2, textAlign: 'center', fontSize: '23px' }}
            >
              {lang === 'fr' ? `Intégration automatisée des employés | Gestion intelligente des profils d'employés | Automatisation du devoir de diligence` : lang === 'sp' ? 'Incorporación automatizada de empleados | Gestión inteligente del perfil de los empleados | Automatización de diligencia debida' : lang === 'ar' ? 'إلحاق الموظف الآلي | إدارة ملف الموظف الذكي | أتمتة العناية الواجبة' : lang === 'gr' ? 'Automatisiertes Mitarbeiter-Onboarding | Intelligente Mitarbeiterprofilverwaltung | Due-Diligence-Automatisierung' : ' Automated Employee On-boarding | Smart Employee Profile Management | Due Diligence Automation'}
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
                  sx={{ my: 1, fontWeight: 600, lineHeight: 2, fontSize: '20px' }}
                >
                  {lang === 'fr' ? `AIRA transforme l'automatisation des RH` : lang === 'sp' ? 'AIRA transforma la automatización de recursos humanos' : lang === 'ar' ? 'تعمل AIRA على تحويل أتمتة الموارد البشرية' : lang === 'gr' ? 'AIRA transformiert die HR-Automatisierung' : 'AIRA transforms HR Automation'}

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Une culture forte soutenue par une main-d’œuvre appréciée constitue l’épine dorsale de toute entreprise prospère. Grâce à l'automatisation des ressources humaines, le personnel peut se concentrer sur la prise de décision stratégique tout en minimisant le temps passé sur la documentation redondante.` : lang === 'sp' ? 'Una cultura sólida respaldada por una fuerza laboral apreciada es la columna vertebral de toda empresa exitosa. Con la automatización de recursos humanos, el personal puede centrarse en la toma de decisiones estratégicas y al mismo tiempo minimizar el tiempo dedicado a documentación redundante.' : lang === 'ar' ? 'إن الثقافة القوية المدعومة بقوة عاملة تحظى بالتقدير هي العمود الفقري لكل مؤسسة ناجحة. باستخدام أتمتة الموارد البشرية، يمكن للموظفين التركيز على اتخاذ القرارات الإستراتيجية مع تقليل الوقت الذي يقضونه في التوثيق الزائد.' : lang === 'gr' ? 'Eine starke Kultur, gestützt durch eine geschätzte Belegschaft, ist das Rückgrat jedes erfolgreichen Unternehmens. Mit HR-Automatisierung können sich die Mitarbeiter auf die strategische Entscheidungsfindung konzentrieren und gleichzeitig den Zeitaufwand für redundante Dokumentation minimieren.' : 'Strong culture backed by an appreciated workforce is the backbone of every successful enterprise. With HR Automation, personnel can focus on strategic decision making while minimising time spent in redundant documentation.'}

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Avec AIRA, l'hyper-automatisation du service des ressources humaines permet des processus transparents et fluides pour chaque partie prenante. Les employés peuvent accéder plus facilement à leurs données tandis que les responsables des ressources humaines peuvent mener des campagnes et des initiatives plus stratégiques avec une meilleure communication et collaboration.` : lang === 'sp' ? 'Con AIRA, la hiperautomatización del departamento de Recursos Humanos permite procesos fluidos y fluidos para todas las partes interesadas. Los empleados pueden acceder a sus datos más fácilmente, mientras que los gerentes de Recursos Humanos pueden ejecutar campañas e iniciativas más estratégicas con una mejor comunicación y colaboración.' : lang === 'ar' ? 'مع AIRA، تتيح الأتمتة المفرطة لقسم الموارد البشرية عمليات سلسة وسلسة لكل أصحاب المصلحة. يمكن للموظفين الوصول إلى بياناتهم بشكل أسهل بينما يمكن لمديري الموارد البشرية تشغيل المزيد من الحملات والمبادرات الإستراتيجية مع تواصل وتعاون أفضل.' : lang === 'gr' ? 'Mit AIRA ermöglicht die Hyperautomatisierung der Personalabteilung nahtlose und reibungslose Prozesse für alle Beteiligten. Mitarbeiter können einfacher auf ihre Daten zugreifen, während Personalmanager strategischere Kampagnen und Initiativen mit besserer Kommunikation und Zusammenarbeit durchführen können.' : ' With AIRA, hyper-automation of Human Resource department enables seamless and smooth processes for every stakeholder. Employees can access their data easier while Human Resource managers can run more strategic campaigns and initiatives with better communication and collaboration.'}
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
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'يساعد الموارد البشرية من خلال' : lang === 'gr' ? 'AIRA' : 'AIRA helps '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `aide les ressources humaines en` : lang === 'sp' ? 'ayuda a Recursos Humanos mediante' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'hilft der Personalabteilung durch' : 'Human Resource by'}
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
                {lang === 'fr' ? `Dans les services des ressources humaines, les capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'une RPA fiable mise à l'échelle par l'IA adaptative, offre des avantages constants tels que : ` : lang === 'sp' ? 'En los departamentos de Recursos Humanos, las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa, ofrece beneficios consistentes como:' : lang === 'ar' ? 'في أقسام الموارد البشرية، توفر إمكانات التشغيل الآلي الفائق لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي، فوائد متسقة مثل:' : lang === 'gr' ? 'In Personalabteilungen sind die Hyperautomatisierungsfähigkeiten vonAIRADie Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI, bietet konsistente Vorteile wie:' : 'In Human Resource departments, the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI deliver consistent benefits such as:'}
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
                      {lang === 'fr' ? `Accélérer la gestion du changement` : lang === 'sp' ? 'Acelere la gestión del cambio' : lang === 'ar' ? 'تسريع إدارة التغيير' : lang === 'gr' ? 'Beschleunigen Sie das Änderungsmanagement' : 'Accelerate Change Management'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Analyse prédictive et en temps réel des employés pour élaborer des stratégies et rationaliser` : lang === 'sp' ? 'Análisis de empleados predictivo y en tiempo real para elaborar estrategias y optimizar' : lang === 'ar' ? 'تحليلات الموظفين في الوقت الحقيقي والتنبؤية لوضع الاستراتيجيات وتبسيطها' : lang === 'gr' ? 'Echtzeit- und prädiktive Mitarbeiteranalysen zur Strategieentwicklung und Rationalisierung' : 'Real-time and Predictive Employee Analytics for strategizing and streamlining.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Gérer les communications inter-équipes entre les départements, les rôles et les hiérarchies` : lang === 'sp' ? 'Gestione las comunicaciones entre equipos en todos los departamentos, roles y jerarquías.' : lang === 'ar' ? 'إدارة الاتصالات بين الفريق عبر الأقسام والأدوار والتسلسلات الهرمية' : lang === 'gr' ? 'Verwalten Sie die teamübergreifende Kommunikation über Abteilungen, Rollen und Hierarchien hinweg' : 'Manage cross-team communications across departments, roles and hierarchies.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Planifiez et élaborez des stratégies pour les activités d’engagement critiques avec une prise de décision améliorée.` : lang === 'sp' ? 'Planifique y diseñe estrategias para actividades de participación críticas con una mejor toma de decisiones.' : lang === 'ar' ? 'تخطيط ووضع استراتيجية لأنشطة المشاركة الهامة مع تعزيز عملية صنع القرار.' : lang === 'gr' ? 'Planen und strategisieren Sie kritische Engagement-Aktivitäten mit verbesserter Entscheidungsfindung.' : ' Plan and strategize critical engagement activities with enhanced decision making.'}
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
                          {lang === 'fr' ? `	Analyses avancées continues pour la gestion des ressources et la planification des décalages horaires` : lang === 'sp' ? '●Análisis avanzado continuo para la gestión de recursos y programación de turnos de tiempo' : lang === 'ar' ? 'التحليلات المتقدمة المستمرة لإدارة الموارد وجدولة التحول الزمني' : lang === 'gr' ? 'Kontinuierliche erweiterte Analysen für Ressourcenmanagement und Zeitschichtplanung' : ' Continuous Advanced Analytics for Resource Management and time shift scheduling.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Suivre et surveiller les présences du personnel et les modèles de comportement pour les corrections stratégiques` : lang === 'sp' ? 'Realizar un seguimiento y monitorear la asistencia del personal y los patrones de comportamiento para realizar correcciones estratégicas.' : lang === 'ar' ? 'تتبع ومراقبة حضور الموظفين والأنماط السلوكية للتصحيحات الاستراتيجية' : lang === 'gr' ? 'Verfolgen und überwachen Sie die Anwesenheiten und Verhaltensmuster des Personals für strategische Korrekturen' : 'Track and monitor personnel attendances and behavioural patterns for strategic corrections.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Créez des règles et des exceptions personnalisées pour une mise en œuvre de gestion sur mesure.` : lang === 'sp' ? 'Cree reglas y excepciones personalizadas para una implementación de gestión personalizada.' : lang === 'ar' ? 'بناء قواعد واستثناءات مخصصة لتنفيذ الإدارة المخصصة.' : lang === 'gr' ? 'Erstellen Sie benutzerdefinierte Regeln und Ausnahmen für eine maßgeschneiderte Managementimplementierung.' : '  Build custom rules and exceptions for tailored management implementation.'}
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
                    {lang === 'fr' ? `Impact à grande échelle` : lang === 'sp' ? 'Impacto de escala' : lang === 'ar' ? 'تأثير النطاق' : lang === 'gr' ? 'Skaleneffekt' : ' Scale Impact'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Tenir à jour les dossiers du personnel pour une gestion plus intelligente des ressources humaines` : lang === 'sp' ? 'Mantenga registros de personal actualizados para una gestión más inteligente de los recursos humanos' : lang === 'ar' ? 'الحفاظ على سجلات الموظفين المحدثة لإدارة الموارد البشرية بشكل أكثر ذكاءً' : lang === 'gr' ? 'Pflegen Sie aktualisierte Personalakten für ein intelligenteres Personalmanagement' : 'Maintain updated personnel records for smarter human resource management.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Améliorez les communications et la productivité entre les équipes` : lang === 'sp' ? 'Mejore las comunicaciones y la productividad entre equipos' : lang === 'ar' ? 'تعزيز الاتصالات بين الفريق والإنتاجية' : lang === 'gr' ? 'Verbessern Sie die teamübergreifende Kommunikation und Produktivität' : 'Enhance cross team communications and productivity.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Créez une intégration et une gestion du personnel plus fluides grâce à une délégation intelligente et à la résolution des problèmes hyper-automatisée.` : lang === 'sp' ? 'Cree una incorporación y una gestión de personal más fluidas mediante la delegación inteligente y la resolución de problemas hiperautomatizada.' : lang === 'ar' ? 'قم بإنشاء عملية تأهيل وإدارة شؤون الموظفين أكثر سلاسة من خلال التفويض الذكي وعناوين المشكلات الآلية للغاية' : lang === 'gr' ? 'Sorgen Sie für ein reibungsloseres Onboarding und Personalmanagement durch intelligente Delegation und hyperautomatisierte Problembearbeitung' : 'Create smoother onboarding and personnel management by intelligent delegation and hyper-automated issue addressals.'}
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
