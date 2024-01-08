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
    title:"Flux de travail de production efficaces",
    text: "AIRA rationalise les processus de fabrication, réduisant ainsi les goulots d'étranglement opérationnels et améliorant l'efficacité globale de la production",
  },
  {
    id: 2,
    title:"Contrôle et assurance qualité",
    text: "Utilisant une automatisation avancée, AIRA garantit des mesures de contrôle de qualité précises, minimisant les défauts et optimisant la production de fabrication.",
  },
  {
    id: 3,
    title:"Optimisation des ressources",
    text: "L'hyper-automatisation d'AIRA dans la fabrication permet d'optimiser l'allocation des ressources, garantissant la rentabilité et maximisant la production.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    title:"Flujos de trabajo de producción eficientes",
    text: "AIRA agiliza los procesos de fabricación, reduce los cuellos de botella operativos y mejora la eficiencia general de la producción.",
  },
  {
    id: 2,
    title:"Control y garantía de calidad",
    text: "Al emplear automatización avanzada, AIRA garantiza medidas precisas de control de calidad, minimizando los defectos y optimizando la producción de fabricación.",
  },
  {
    id: 3,
    title:"Optimización de recursos",
    text: "La hiperautomatización de AIRA en la fabricación ayuda a optimizar la asignación de recursos, garantizando la rentabilidad y maximizando la producción.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    title:"سير عمل الإنتاج الفعال",
    text: "يعمل AIRA على تبسيط عمليات التصنيع، مما يقلل من الاختناقات التشغيلية ويعزز كفاءة الإنتاج بشكل عام.",
  },
  {
    id: 2,
    title:"مراقبة الجودة وضمانها",
    text: "من خلال استخدام الأتمتة المتقدمة، تضمن AIRA إجراءات دقيقة لمراقبة الجودة، وتقليل العيوب وتحسين مخرجات التصنيع.",
  },
  {
    id: 3,
    title:"تحسين الموارد",
    text: "تساعد الأتمتة المفرطة لـ AIRA في التصنيع على تحسين تخصيص الموارد، وضمان فعالية التكلفة وزيادة الإنتاج إلى الحد الأقصى.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    title:"Effiziente Produktionsabläufe",
    text: "AIRA rationalisiert Fertigungsprozesse, reduziert betriebliche Engpässe und steigert die Gesamteffizienz der Produktion.",
  },
  {
    id: 2,
    title:"Qualitätskontrolle und -sicherung",
    text: "Durch den Einsatz fortschrittlicher Automatisierung gewährleistet AIRA präzise Qualitätskontrollmaßnahmen, minimiert Fehler und optimiert die Produktionsleistung.",
  },
  {
    id: 3,
    title:"Ressourcenoptimierung",
    text: "Die Hyperautomatisierung von AIRA in der Fertigung trägt dazu bei, die Ressourcenzuteilung zu optimieren, Kosteneffizienz sicherzustellen und den Output zu maximieren.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    title:"Efficient Production Workflows",
    text: "AIRA streamlines manufacturing processes, reducing operational bottlenecks and enhancing overall production efficiency.",
  },
  {
    id: 2,
    title:"Quality Control and Assurance",
    text: "Employing advanced automation, AIRA ensures precise quality control measures, minimising defects and optimising manufacturing output.",
  },
  {
    id: 3,
    title:"Resource Optimization",
    text: "AIRA's hyper-automation in manufacturing helps optimise resource allocation, ensuring cost-effectiveness and maximising output.",
  },
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
                    {lang === 'fr' ? `Transformations numériques axées sur la fabrication` : lang === 'sp' ? 'Transformaciones digitales enfocadas en la fabricación' : lang === 'ar' ? 'التحولات الرقمية التي تركز على التصنيع' : lang === 'gr' ? 'Fertigungsorientierte digitale Transformationen' : '  Manufacturing focused Digital Transformations'} {' '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA Hyperautomation' : 'with AIRA Hyper-automation'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Prévoyez la demande, prévoyez les goulots d'étranglement logistiques, garantissez des stocks intelligents et anticipez l'accélération des ventes grâce à nos capacités d'hyper-automatisation à votre service..` : lang === 'sp' ? 'Pronostique la demanda, prediga cuellos de botella logísticos, garantice un inventario inteligente y anticipe la aceleración de las ventas con nuestras capacidades de hiperautomatización a su servicio..' : lang === 'ar' ? 'توقع الطلب، وتوقع الاختناقات اللوجستية، وتأكد من المخزون الذكي واستبق تسريع المبيعات من خلال إمكانات الأتمتة الفائقة لدينا في خدمتك.' : lang === 'gr' ? 'Prognostizieren Sie die Nachfrage, prognostizieren Sie logistische Engpässe, sorgen Sie für intelligente Bestände und verhindern Sie Verkaufsbeschleunigungen – mit unseren Hyperautomatisierungsfunktionen zu Ihren Diensten.' : 'Forecast demand, predict logistical bottlenecks, ensure smart inventory and preempt sales acceleration with our hyper-automation capabilities at your service.'}
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
              {lang === 'fr' ? `Hyper-automatisation ` : lang === 'sp' ? 'Hiperautomatización' : lang === 'ar' ? 'الأتمتة المفرطة ' : lang === 'gr' ? 'Hyperautomatisierung' : 'Hyper-automation'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `vous aide avec` : lang === 'sp' ? 'te ayuda con' : lang === 'ar' ? 'تساعدك على' : lang === 'gr' ? 'hilft dir dabei' : 'helps you with'}
              </span>
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5, textAlign: 'center' }}>
              {lang === 'fr' ? `Analyse des tendances de l'offre et de la demande | Optimisation de la gestion des stocks | Planification des fournisseurs | Assurance qualité de la chaîne de montage` : lang === 'sp' ? 'Análisis de tendencias de oferta y demanda | Optimización de la gestión de inventario | Programación de proveedores | Garantía de calidad de la línea de montaje' : lang === 'ar' ? 'تحليل اتجاه الطلب والعرض | تحسين إدارة المخزون | جدولة البائع | ضمان جودة خط التجميع' : lang === 'gr' ? 'Nachfrage- und Angebotstrendanalyse | Optimierung des Bestandsmanagements | Lieferantenplanung | Qualitätssicherung am Fließband' : '  Demand & Supply Trend Analysis | Inventory Management Optimization | Vendor Scheduling | Assembly Line Quality Assurance'}
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
                  {lang === 'fr' ? `AIRA transforme la fabrication` : lang === 'sp' ? 'AIRA transforma la fabricación' : lang === 'ar' ? 'AIRA يُحدث تحولًا في التصنيع' : lang === 'gr' ? 'AIRA verändert die Fertigung' : 'AIRA transforms Manufacturing'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `La fabrication, source d'un niveau de vie solide, repose sur de nombreux processus bien coordonnés, qu'il s'agisse des stocks ou de l'assemblage, des fournisseurs ou des ventes.` : lang === 'sp' ? 'La fabricación, fuente de un nivel de vida sólido, depende de muchos procesos bien coordinados, ya sea en el inventario o el ensamblaje, desde los proveedores o hasta las ventas.' : lang === 'ar' ? 'يعتمد التصنيع، وهو مصدر مستوى المعيشة القوي، على الكثير من العمليات جيدة التنسيق، سواء كان ذلك على المخزون أو التجميع، من البائعين أو المبيعات.' : lang === 'gr' ? 'Die Fertigung, die Quelle eines robusten Lebensstandards, ist auf viele gut koordinierte Prozesse angewiesen, sei es bei der Lagerhaltung oder Montage, beim Lieferanten oder beim Verkauf.' : 'Manufacturing, the source of robust standard of living, relies on a lot of well coordinated processes, be it on inventory or assembly, from vendors or to sales.'}

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                {lang === 'fr' ? `Transformez l'entreprise de fabrication grâce à l'hyper-automatisation d'AIRA, offrant la capacité de répondre aux prévisions de la demande, d'assurer une disponibilité et une gestion intelligentes des stocks, une gestion des risques d'approvisionnement des fournisseurs et bien plus encore.` : lang === 'sp' ? 'Transforme la empresa de fabricación con la hiperautomatización de AIRA, que ofrece la capacidad de abordar la previsión de la demanda, garantizar la disponibilidad y gestión inteligente del inventario, la gestión del riesgo de suministro de los proveedores y más.' : lang === 'ar' ? 'قم بتحويل مؤسسة التصنيع من خلال الأتمتة المفرطة بواسطة AIRA مما يوفر القدرة على معالجة توقعات الطلب، وضمان توافر وإدارة المخزون الذكي، وإدارة مخاطر توريد البائعين والمزيد.' : lang === 'gr' ? 'Verwandeln Sie das Fertigungsunternehmen mit Hyperautomatisierung durch AIRA, indem Sie die Möglichkeit bieten, Nachfrageprognosen zu erfüllen, eine intelligente Bestandsverfügbarkeit und -verwaltung sicherzustellen, das Lieferantenrisikomanagement zu verwalten und vieles mehr.' : 'Transform the Manufacturing enterprise with hyper-automation by AIRA delivering ability to address demand forecast, ensure smart inventory availability and management, vendor supply risk management and more. '}
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
              <span style={{ color: Colors.airaSecondary, marginRight: '7px' }}>
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : ' AIRA'}
              </span>
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
                {lang === 'fr' ? `Avec la source racine de nombreuses industries et dépendantsur robuste chaîne d'approvisionnement ainsi que la compréhension de la demande, l'industrie manufacturière bénéficie grandement des capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'un RPA fiable mis à l'échelle par l'IA adaptative. ` : lang === 'sp' ? 'Con fuente raíz de muchas industrias y dependienteen robusto cadena de suministro, así como la comprensión de la demanda, la industria manufacturera se beneficia enormemente de las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa. ' : lang === 'ar' ? 'مع وجود مصدر أساسي للعديد من الصناعات واعتمادها على سلسلة توريد قوية بالإضافة إلى فهم الطلب، تستفيد صناعة التصنيع بشكل كبير من قدرات الأتمتة المفرطة لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي.' : lang === 'gr' ? 'Mit Wurzelquelle vieler Industrien und zuverlässigauf robust Lieferkette sowie Nachfrageverständnis. Die Fertigungsindustrie profitiert in hohem Maße von den Hyperautomatisierungsfähigkeiten vonAIRA, mit der Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI. ' : 'With root source of many industries and reliant on robust supply chain as well as demand understanding, Manufacturing industry benefits highly from the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI.'}
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
                      {lang === 'fr' ? `Migrez les données d'entreprise plus rapidement et plus intelligemment` : lang === 'sp' ? 'Migre datos empresariales de forma más rápida e inteligente' : lang === 'ar' ? 'ترحيل بيانات المؤسسة بشكل أسرع وأكثر ذكاءً' : lang === 'gr' ? 'Unternehmensdaten schneller und intelligenter migrieren' : 'Migrate Enterprise Data Faster, Smarter'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Accumulez, stockez et traitez des données sans investir d’efforts manuels` : lang === 'sp' ? 'Acumule, almacene y procese datos sin invertir esfuerzos manuales' : lang === 'ar' ? '●تجميع البيانات وتخزينها ومعالجتها دون استثمار الجهود اليدوية' : lang === 'gr' ? 'Sammeln, speichern und verarbeiten Sie Daten ohne manuellen Aufwand' : 'Accumulate, store, and process data without investing manual efforts'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Inventaire généré par des robots et enregistrements des fournisseurs sans erreur pour la préparation à l'audit` : lang === 'sp' ? 'Registros de proveedores e inventario generados por bots sin errores para estar preparados para las auditorías' : lang === 'ar' ? 'سجلات البائعين والموردين التي تم إنشاؤها بواسطة الروبوت خالية من الأخطاء من أجل الاستعداد للتدقيق' : lang === 'gr' ? 'Fehlerfreie, vom Bot generierte Bestands- und Lieferantendatensätze zur Prüfungsbereitschaft' : ' Error-free bot-generated inventory and vendor records for audit readiness'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Audit en temps réel pour éliminer les retards et les erreurs` : lang === 'sp' ? 'Auditoría en tiempo real para eliminar retrasos y errores' : lang === 'ar' ? 'التدقيق في الوقت الحقيقي للقضاء على التأخير والأخطاء' : lang === 'gr' ? 'Echtzeitprüfung zur Vermeidung von Verzögerungen und Fehlern' : '  Real-time auditing to eliminate delays and errors'}
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
                    {lang === 'fr' ? `Accélérez l’impact basé sur les données` : lang === 'sp' ? 'Acelere el impacto impulsado por los datos' : lang === 'ar' ? 'تسريع التأثير المبني على البيانات' : lang === 'gr' ? 'Beschleunigen Sie die datengesteuerte Wirkung' : ' Accelerate Data Driven Impact'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Rapports de données en temps opportun pour une meilleure visibilité sur l'ensemble de la production` : lang === 'sp' ? 'Informes de datos oportunos para una mejor visibilidad en toda la producción' : lang === 'ar' ? 'تقارير البيانات في الوقت المناسب لتحسين الرؤية عبر الإنتاج' : lang === 'gr' ? 'Zeitnahe Datenberichte für eine bessere Transparenz in der gesamten Produktion' : ' Timely data reports for better visibility across production'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Rapports et analyses en temps réel` : lang === 'sp' ? 'Informes y análisis en tiempo real' : lang === 'ar' ? 'التقارير والتحليلات في الوقت الحقيقي' : lang === 'gr' ? 'Echtzeitberichte und -analysen' : 'Real-time reporting and analytics'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Prise de décision intelligente pour une rentabilité optimale` : lang === 'sp' ? 'Toma de decisiones inteligente para una rentabilidad óptima' : lang === 'ar' ? 'اتخاذ قرارات ذكية لتحقيق الربحية المثلى' : lang === 'gr' ? 'Intelligente Entscheidungsfindung für optimale Rentabilität' : ' Smart decision making for optimum profitability'}
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
                    {lang === 'fr' ? `Immuniser la chaîne d’approvisionnement contre les risques` : lang === 'sp' ? 'Inmunizar la cadena de suministro contra el riesgo' : lang === 'ar' ? 'تحصين سلسلة التوريد من المخاطر' : lang === 'gr' ? 'Immunisieren Sie die Lieferkette vor Risiken' : 'Immunize Supply Chain from Risk'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Des robots numériques pour suivre les stocks 24h/24 et 7j/7` : lang === 'sp' ? 'Bots digitales para rastrear el inventario 24 horas al día, 7 días a la semana' : lang === 'ar' ? '●الروبوتات الرقمية لتتبع المخزون 24/7' : lang === 'gr' ? 'Digitale Bots zur Bestandsverfolgung rund um die Uhr' : ' Digital bots to track inventory 24/7'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Suivi de tous les coûts de logistique et de transport` : lang === 'sp' ? 'Seguimiento de todos los costes de logística y transporte.' : lang === 'ar' ? 'مراقبة جميع التكاليف اللوجستية والنقل' : lang === 'gr' ? 'Überwachung aller Logistik- und Transportkosten' : 'Monitoring of all logistics and transportation costs'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Processus agile pour intégrer les fournisseurs` : lang === 'sp' ? 'Proceso ágil para incorporar proveedores' : lang === 'ar' ? 'عملية رشيقة لضم البائعين' : lang === 'gr' ? 'Agiles Verfahren zur Einbindung von Anbietern' : 'Agile process to onboard vendors inventory 24/7'}
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* <div className="" style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
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
  );
};

export default Index;
