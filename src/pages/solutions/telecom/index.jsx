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
    title:"Service client agile",
    text: "L'hyper-automatisation d'AIRA rationalise les interactions avec les clients, fournissant des services de télécommunications agiles et réactifs, améliorant ainsi la satisfaction des clients.",
  },
  {
    id: 2,
    title:"Efficacité opérationnelle",
    text: "Transformez les opérations de télécommunications avec AIRA, en optimisant les processus pour une efficacité, une utilisation des ressources et une rentabilité accrues.",
  },
  {
    id: 3,
    title:"Offres innovantes",
    text: "Gardez une longueur d'avance dans le secteur dynamique des télécommunications en tirant parti des solutions d'AIRA pour introduire des services innovants et devancer la concurrence.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    title:"Servicio al cliente ágil",
    text: "La hiperautomatización de AIRA agiliza las interacciones con los clientes, brindando servicios de telecomunicaciones ágiles y receptivos, mejorando la satisfacción del cliente.",
  },
  {
    id: 2,
    title:"Eficiencia operacional",
    text: "Transforme las operaciones de telecomunicaciones con AIRA, optimizando los procesos para aumentar la eficiencia, la utilización de recursos y la rentabilidad.",
  },
  {
    id: 3,
    title:"Ofertas innovadoras",
    text: "Manténgase a la vanguardia en la dinámica industria de las telecomunicaciones aprovechando las soluciones de AIRA para introducir servicios innovadores y superar a la competencia.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    title:"خدمة العملاء رشيقة",
    text: "تعمل أتمتة AIRA المفرطة على تبسيط تفاعلات العملاء، وتوفير خدمات اتصالات سريعة الاستجابة، مما يعزز رضا العملاء.",
  },
  {
    id: 2,
    title:"كفاءة العملية",
    text: "قم بتحويل عمليات الاتصالات باستخدام AIRA، وتحسين العمليات لزيادة الكفاءة، واستخدام الموارد، وفعالية التكلفة.",
  },
  {
    id: 3,
    title:"عروض مبتكرة",
    text: "حافظ على تقدمك في صناعة الاتصالات الديناميكية من خلال الاستفادة من حلول AIRA لتقديم خدمات مبتكرة والتفوق على المنافسة.",
  },
];

const AIRACANDODATA3 = [
  {
    id: 1,
    title:"Agile Kundenservice",
    text: "Die Hyperautomatisierung von AIRA rationalisiert die Kundeninteraktionen, bietet agile und reaktionsfähige Telekommunikationsdienste und steigert die Kundenzufriedenheit.",
  },
  {
    id: 2,
    title:"Betriebseffizienz",
    text: "Hochautomatisieren Sie die Datenverwaltung und Übertragungsaufzeichnungen für eine kontinuierliche Prüfungsbereitschaft.",
  },
  {
    id: 3,
    title:"Innovative Angebote",
    text: "Bleiben Sie in der dynamischen Telekommunikationsbranche an der Spitze, indem Sie die Lösungen von AIRA nutzen, um innovative Dienste einzuführen und die Konkurrenz hinter sich zu lassen.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    title: "Agile Customer Service",
    text: "AIRA's hyper-automation streamlines customer interactions, providing agile and responsive telecom services, enhancing customer satisfaction.",
  },
  {
    id: 2,
    title: "Operational Efficiency",
    text: "Transform telecom operations with AIRA, optimising processes for increased efficiency, resource utilisation, and cost-effectiveness.",
  },
  {
    id: 3,
    title: "Innovative Offerings",
    text: "Stay ahead in the dynamic telecom industry by leveraging AIRA's solutions to introduce innovative services and outpace the competition.",
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
                    {lang === 'fr' ? `Transformations numériques axées sur les télécommunications` : lang === 'sp' ? 'Transformaciones Digitales enfocadas en las Telecomunicaciones' : lang === 'ar' ? 'التحولات الرقمية التي تركز على الاتصالات' : lang === 'gr' ? 'Telekommunikationsorientierte digitale Transformationen' : ' Telecommunications focused Digital Transformations'} {' '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA Hyperautomation' : ' With AIRA Hyper-automation'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Faites évoluer et obtenez un impact transformationnel des télécommunications grâce au profilage intelligent, à une plus grande ` : lang === 'sp' ? 'Escale y genere un impacto transformador en las telecomunicaciones utilizando perfiles inteligentes, mayor inteligencia de marketing y ' : lang === 'ar' ? 'يمكنك توسيع نطاق التأثير التحويلي للاتصالات وتقديمه باستخدام ملفات التعريف الذكية وذكاء ' : lang === 'gr' ? 'Skalieren und liefern Sie transformative Auswirkungen auf die Telekommunikation durch intelligentes Profiling, größere ' : 'Scale and deliver telecommunications transformational impact using intelligent profiling, greater marketing intelligence and smarter delegation with our hyper-automation platform.'}
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `intelligence marketing et à une délégation plus intelligente avec notre plateforme d'hyper-automatisation.` : lang === 'sp' ? 'delegación más inteligente con nuestra plataforma de hiperautomatización.' : lang === 'ar' ? 'تسويقي أكبر وتفويض أكثر ذكاءً من خلال نظام التشغيل الآلي الفائق الخاص بنا.' : lang === 'gr' ? 'Marketinginformationen und intelligentere Delegation mit unserer Hyperautomatisierungsplattform.' : '  Transform the telecommunications excellence with hyper-automation delivering the best of reliable RPA engineering combined with adaptive AI scalability and agility.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader20.png"
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
              {lang === 'fr' ? `Hyper-automatisation ` : lang === 'sp' ? 'Hiperautomatización' : lang === 'ar' ? 'تساعدك الأتمتة المفرطة ' : lang === 'gr' ? 'Hyperautomatisierung' : 'Hyper-automation '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `vous aide à mettre en œuvre` : lang === 'sp' ? 'te ayuda a implementar' : lang === 'ar' ? 'على التنفيذ' : lang === 'gr' ? 'hilft Ihnen bei der Umsetzung' : 'helps you implement'}
              </span>
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5, textAlign: 'center' }}>
              {lang === 'fr' ? `Optimisation opérationnelle agile | Flux de travail évolutifs et rentables | Transmissions de données et communications améliorées` : lang === 'sp' ? 'Optimización operativa ágil | Flujos de trabajo escalables y rentables | Comunicaciones y transmisiones de datos mejoradas' : lang === 'ar' ? 'رشيقة التشغيل الأمثل | سير عمل فعال من حيث التكلفة وقابل للتطوير | تعزيز عمليات نقل البيانات والاتصالات' : lang === 'gr' ? 'Agile Betriebsoptimierung | Skalierbare, kosteneffiziente Arbeitsabläufe | Verbesserte Datenübertragung und Kommunikation' : 'Agile Operational Optimization | Scalable Cost Effective Workflows | Enhanced Data Transmissions & Communications'}
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
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, lineHeight: 2, fontSize: '20px' }}
                >
                  {lang === 'fr' ? `AIRA transforme les opérations basées sur les télécommunications` : lang === 'sp' ? 'AIRA transforma las operaciones basadas en telecomunicaciones' : lang === 'ar' ? 'تعمل AIRA على تحويل العمليات القائمة على الاتصالات' : lang === 'gr' ? 'AIRA transformiert den Telekommunikationsbetrieb' : ' AIRA transforms Telecom based Operations'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Dans un secteur critique tel que celui des télécommunications, il est essentiel de conserver les meilleurs avantages du segment sur des aspects critiques tels que de meilleurs indices opérationnels, une intégration et des recours plus rapides des clients ainsi que des enregistrements de facturation traçables avec les automatisations nécessaires.` : lang === 'sp' ? 'En un sector crítico como el de las Telecomunicaciones, la clave es mantener las mejores ventajas del segmento en aspectos críticos, como mejores índices operativos, incorporación y reparación de clientes más rápidas, así como registros de facturación rastreables con las automatizaciones necesarias.' : lang === 'ar' ? 'في قطاع حيوي مثل الاتصالات، يعد الحفاظ على أفضل المزايا في هذا القطاع عبر الجوانب المهمة مثل مؤشرات التشغيل الأفضل، وتأهيل العملاء بشكل أسرع ومعالجتهم بالإضافة إلى سجلات الفواتير التي يمكن تتبعها مع الأتمتة اللازمة، هو المفتاح.' : lang === 'gr' ? 'In einem kritischen Sektor wie der Telekommunikation ist die Beibehaltung der branchenführenden Vorteile in kritischen Aspekten wie bessere Betriebsindizes, schnelleres Kunden-Onboarding und schnellere Abhilfemaßnahmen sowie nachvollziehbare Abrechnungsaufzeichnungen mit notwendigen Automatisierungen der Schlüssel.' : 'In a critical sector such as Telecommunications, maintaining best in the segment advantages across critical aspects such as better operational indices, faster customer onboarding and redressals as well as traceable billing records with necessary automations is the key. '}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Transformez l'excellence des télécommunications avec l'hyper-automatisation offrant le meilleur de l'ingénierie RPA fiable combinée à l'évolutivité et à l'agilité de l'IA adaptative.` : lang === 'sp' ? 'Transforme la excelencia en las telecomunicaciones con hiperautomatización que ofrece lo mejor de la ingeniería RPA confiable combinada con escalabilidad y agilidad de IA adaptable.' : lang === 'ar' ? 'قم بتحويل التميز في مجال الاتصالات من خلال الأتمتة المفرطة التي تقدم أفضل ما في هندسة RPA الموثوقة بالإضافة إلى قابلية التوسع والذكاء الاصطناعي التكيفي.' : lang === 'gr' ? 'Verwandeln Sie die Telekommunikationsexzellenz durch Hyperautomatisierung und bieten Sie das Beste aus zuverlässiger RPA-Technik kombiniert mit adaptiver KI-Skalierbarkeit und Agilität.' : 'Transform the telecommunications excellence with hyper-automation delivering the best of reliable RPA engineering combined with adaptive AI scalability and agility.'}
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
                {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : 'AIRA'}
              </span> {' '}
              {lang === 'fr' ? `VOUS PERMET DE` : lang === 'sp' ? 'LE PERMITE' : lang === 'ar' ? 'تمكنك من ذلك' : lang === 'gr' ? 'ERMÖGLICHT ES IHNEN' : 'ENABLE YOU TO'}
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

      <Box sx={{ backgroundColor: "#f8f9fb", py: 6 }}>
        <Container maxWidth="lg">
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
                {lang === 'fr' ? `Avec les besoins étendus et importants en matière de données et de réseaux, le secteur des télécommunications bénéficie grandement des capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'un RPA fiable mis à l'échelle par l'IA adaptative. ` : lang === 'sp' ? 'Con los requisitos de red y datos de gran volumen y expansión, la industria de las telecomunicaciones se beneficia enormemente de las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa. ' : lang === 'ar' ? 'بفضل البيانات ومتطلبات الشبكة ذات الحجم الكبير والواسع، تستفيد صناعة الاتصالات بشكل كبير من قدرات الأتمتة الفائقة لـ AIRA، مع مجموعة الاندفاع المزدوج من RPA الموثوق به والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي.' : lang === 'gr' ? 'Angesichts der umfangreichen und umfangreichen Daten- und Netzwerkanforderungen profitiert die Telekommunikationsbranche in hohem Maße von den Hyperautomatisierungsfähigkeiten vonAIRA, mit der Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI. ' : ' With the expansive and large volume data and network requirements, the Telecommunications industry benefits highly from the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI.'}
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
                      {lang === 'fr' ? `Obtenez des informations à fort impact` : lang === 'sp' ? 'Obtenga información de alto impacto' : lang === 'ar' ? 'احصل على رؤى عالية التأثير' : lang === 'gr' ? 'Gewinnen Sie wirkungsvolle Erkenntnisse' : 'Gain High Impact Insights'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Analyse prédictive et en temps réel des agents numériques pour l'élaboration de stratégies et la rationalisation` : lang === 'sp' ? 'Análisis de agentes digitales predictivos y en tiempo real para elaborar estrategias y optimizar' : lang === 'ar' ? 'تحليلات الوكيل الرقمي التنبؤية في الوقت الفعلي لوضع الاستراتيجيات وتبسيطها' : lang === 'gr' ? 'Echtzeit- und prädiktive Digital Agent Analytics zur Strategieentwicklung und Rationalisierung' : 'Real-time and Predictive Digital Agent Analytics for strategizing and streamlining'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Gérer les communications internes et externes à travers les hiérarchies` : lang === 'sp' ? 'Gestionar las comunicaciones internas y externas en todas las jerarquías.' : lang === 'ar' ? 'إدارة الاتصالات الداخلية والخارجية عبر التسلسلات الهرمية' : lang === 'gr' ? 'Verwalten Sie die interne und externe Kommunikation über die Hierarchien hinweg' : ' Manage internal and external communications across the hierarchies'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Hyper-automatisation de la confidentialité des données et de la stabilité de la chaîne de communication` : lang === 'sp' ? 'Hiperautomatización de la confidencialidad de los datos y la estabilidad de la cadena de comunicación' : lang === 'ar' ? 'سرية البيانات واستقرار سلسلة الاتصالات الأتمتة المفرطة' : lang === 'gr' ? 'Datenvertraulichkeit und Hyperautomatisierung der Stabilität der Kommunikationskette' : 'Data Confidentiality and Chain of Communication stability hyper-automation'}
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
                    {lang === 'fr' ? `Surveiller et améliorer l’excellence du réseau` : lang === 'sp' ? 'Supervise y mejore la excelencia de la red' : lang === 'ar' ? 'مراقبة وتعزيز تميز الشبكة' : lang === 'gr' ? 'Überwachen und verbessern Sie die Netzwerkexzellenz' : 'Monitor and Enhance Network Excellence'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Analyse avancée continue pour la gestion du réseau et la détection des erreurs` : lang === 'sp' ? 'Análisis avanzado continuo para gestión de redes y detección de errores' : lang === 'ar' ? 'التحليلات المتقدمة المستمرة لإدارة الشبكة واكتشاف الأخطاء' : lang === 'gr' ? 'Kontinuierliche erweiterte Analyse für Netzwerkmanagement und Fehlererkennung' : '  Continuous Advanced Analytics for Network Management and error detection'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Prévoyez les goulots d'étranglement du parcours client et évitez les frictions dans les entonnoirs` : lang === 'sp' ? 'Prediga los cuellos de botella en el recorrido del cliente y evite la fricción en los embudos' : lang === 'ar' ? 'توقع الاختناقات في رحلة العميل واستبق الاحتكاك في مسارات التحويل' : lang === 'gr' ? 'Prognostizieren Sie Engpässe bei der Customer Journey und verhindern Sie Reibungen in den Trichtern' : 'Predict Customer Journey bottlenecks and preempt friction in the funnels'}
                      </Typography>
                    </li>
                    {/* <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Créez des règles et des exceptions personnalisées pour les adresses personnalisées.` : lang === 'sp' ? 'Cree reglas y excepciones personalizadas para direcciones personalizadas.' : lang === 'ar' ? 'إنشاء قواعد واستثناءات مخصصة للعناوين المخصصة.' : lang === 'gr' ? 'Erstellen Sie benutzerdefinierte Regeln und Ausnahmen für personalisierte Adressen.' : 'with AIRA'}
                      </Typography>
                    </li> */}
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

                    {lang === 'fr' ? `Augmenter l'impact de l'excellence du service` : lang === 'sp' ? 'Impacto de la excelencia del servicio de escala' : lang === 'ar' ? 'نطاق تأثير التميز في الخدمة' : lang === 'gr' ? 'Skalieren Sie die Auswirkungen von Service Excellence' : 'Scale Service Excellence Impact'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Connectez des cohortes de clients pertinentes avec des offres et des campagnes personnalisées` : lang === 'sp' ? 'Conecte cohortes de clientes relevantes con ofertas y campañas personalizadas' : lang === 'ar' ? 'قم بتوصيل مجموعات العملاء ذات الصلة بالعروض والحملات المخصصة' : lang === 'gr' ? 'Verbinden Sie relevante Kundengruppen mit personalisierten Angeboten und Kampagnen' : 'Connect relevant customer cohorts with personalised offers and campaigns'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Innover en toute transparence en itérant constamment les informations sur les clients et le marché` : lang === 'sp' ? 'Innovar sin problemas mediante la iteración constante de la inteligencia de mercado y de clientes' : lang === 'ar' ? 'ابتكر بسلاسة من خلال التكرار المستمر لمعلومات العملاء والسوق' : lang === 'gr' ? 'Führen Sie nahtlos Innovationen durch, indem Sie Kunden- und Marktinformationen ständig iterieren' : 'Innovate seamlessly by constantly iterating customer and market intelligence'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Créez une gestion plus fluide des tickets grâce à une délégation intelligente et à des adresses de service hyper-automatisées` : lang === 'sp' ? 'Cree una gestión de tickets más fluida mediante delegación inteligente y direcciones de servicio hiperautomatizadas.' : lang === 'ar' ? 'قم بإنشاء إدارة أكثر سلاسة للتذاكر من خلال التفويض الذكي وعناوين الخدمة الآلية للغاية' : lang === 'gr' ? 'Schaffen Sie ein reibungsloseres Ticketmanagement durch intelligente Delegation und hyperautomatisierte Serviceadressen' : 'Create smoother ticket management by intelligent delegation and hyper-automated service addressals'}
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
            {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : 'Leverage AIRA for your Enterprise Today'}
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
  )
};

export default Index;
