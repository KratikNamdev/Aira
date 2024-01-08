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
    title:"Efficacité opérationnelle",
    text: "AIRA transforme les opérations bancaires et financières, en rationalisant les processus et en réduisant les efforts manuels, conduisant à une efficacité opérationnelle accrue.",
  },
  {
    id: 2,
    title:"Précision des données",
    text: "Améliorez l'exactitude et la fiabilité des données grâce à l'hyper-automatisation d'AIRA, en minimisant les erreurs dans les transactions financières et les rapports.",
  },
  {
    id: 3,
    title:"Assurance de conformité",
    text: "Garantissez la conformité grâce aux processus automatisés d'AIRA, réduisant ainsi le risque de problèmes réglementaires dans le secteur bancaire et financier.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    title:"Eficiencia operacional",
    text: "AIRA transforma las operaciones bancarias y financieras, agilizando los procesos y reduciendo los esfuerzos manuales, lo que lleva a una mayor eficiencia operativa.",
  },
  {
    id: 2,
    title:"Precisión de los datos",
    text: "Mejore la precisión y confiabilidad de los datos con la hiperautomatización de AIRA, minimizando errores en transacciones e informes financieros.",
  },
  {
    id: 3,
    title:"Garantía de cumplimiento",
    text: "Garantice el cumplimiento a través de los procesos automatizados de AIRA, reduciendo el riesgo de problemas regulatorios en el sector bancario y financiero.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    title:"كفاءة العملية",
    text: "يقوم AIRA بتحويل العمليات المصرفية والمالية، وتبسيط العمليات وتقليل الجهود اليدوية، مما يؤدي إلى زيادة الكفاءة التشغيلية.",
  },
  {
    id: 2,
    title:"دقة البيانات",
    text: "يمكنك تعزيز دقة البيانات وموثوقيتها من خلال التشغيل الآلي الفائق لـ AIRA، مما يقلل من الأخطاء في المعاملات المالية وإعداد التقارير.",
  },
  {
    id: 3,
    title:"ضمان الامتثال",
    text: "ضمان الامتثال من خلال العمليات الآلية لـ AIRA، مما يقلل من مخاطر المشكلات التنظيمية في القطاع المصرفي والمالي.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    title:"Betriebseffizienz",
    text: "AIRA transformiert Bank- und Finanzabläufe, rationalisiert Prozesse und reduziert den manuellen Aufwand, was zu einer höheren betrieblichen Effizienz führt.",
  },
  {
    id: 2,
    title:"Datengenauigkeit",
    text: "Verbessern Sie die Datengenauigkeit und -zuverlässigkeit mit der Hyperautomatisierung von AIRA und minimieren Sie Fehler bei Finanztransaktionen und Berichten.",
  },
  {
    id: 3,
    title:"Compliance-Sicherung",
    text: "Stellen Sie die Compliance durch die automatisierten Prozesse von AIRA sicher und reduzieren Sie so das Risiko regulatorischer Probleme im Banken- und Finanzsektor.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    title:"Operational Efficiency",
    text: "AIRA transforms banking and finance operations, streamlining processes and reducing manual efforts, leading to increased operational efficiency.",
  },
  {
    id: 2,
    title:"Data Accuracy",
    text: "Enhance data accuracy and reliability with AIRA's hyper-automation, minimising errors in financial transactions and reporting.",
  },
  {
    id: 3,
    title:"Compliance Assurance",
    text: "Ensure compliance through AIRA's automated processes, reducing the risk of regulatory issues in the banking and finance sector.",
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
                    {lang === 'fr' ? `Transformations numériques financières` : lang === 'sp' ? 'Transformaciones digitales financieras' : lang === 'ar' ? 'التحولات الرقمية للطيران' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Financial Digital Transformations'} {' '}
                    <span style={{ color: Colors.airaSecondary }}> 
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA Hyperautomation' : 'With AIRA Hyper-automation'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Obtenez un véritable impact transformationnel pour les processus financiers manuels et gourmands en données grâce à notre hyper-automatisation des processus financiers.` : lang === 'sp' ? 'Ofrezca un impacto verdaderamente transformador para los procesos financieros manuales con uso intensivo de datos con nuestra hiperautomatización de procesos financieros.' : lang === 'ar' ? 'يمكنك تحقيق تأثير تحويلي حقيقي لعمليات التمويل اليدوية كثيفة البيانات من خلال الأتمتة المفرطة للعمليات المالية لدينا' : lang === 'gr' ? 'Erzielen Sie mit unserer Hyperautomatisierung von Finanzprozessen eine wirklich transformative Wirkung für datenintensive, manuelle Finanzprozesse' : 'Deliver truly transformational impact for data-intense, manual finance processes with our financial process hyper-automation.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader11.png"
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
                {lang === 'fr' ? `vous aide à réduire la friction de` : lang === 'sp' ? 'le ayuda a reducir la fricción de' : lang === 'ar' ? 'على تقليل الاحتكاك' : lang === 'gr' ? 'hilft Ihnen, die Reibung zu reduzieren' : 'helps you reduce friction from'}
              </span>
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5, textAlign: 'center' }}>
              {lang === 'fr' ? `Traitement manuel des documents | Friction des opérations financières | Goulots d’étranglement en matière de conformité réglementaire` : lang === 'sp' ? 'Procesamiento manual de documentos | Fricción en operaciones financieras | Cuellos de botella en el cumplimiento normativo' : lang === 'ar' ? 'معالجة المستندات يدويًا | احتكاك العمليات المالية | اختناقات الامتثال التنظيمي' : lang === 'gr' ? 'Manuelle Dokumentenverarbeitung | Reibung bei Finanzoperationen | Engpässe bei der Einhaltung gesetzlicher Vorschriften' : 'Demand & Supply Trend Analysis | Inventory Management Optimization | Vendor Scheduling | Assembly Line Quality Assurance'}
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
                  {lang === 'fr' ? `AIRA transforme les opérations des entreprises financières` : lang === 'sp' ? 'AIRA transforma las operaciones de empresas financieras' : lang === 'ar' ? 'تعمل AIRA على تحويل عمليات المؤسسات المالية' : lang === 'gr' ? 'AIRA transformiert den Finanzunternehmensbetrieb' : 'AIRA transforms Financial Enterprise Operations'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Notre hub d'hyper-automatisation unifié aide les entreprises financières dans les principales catégories bancaires telles que la banque de détail, la banque commerciale, ainsi que d'autres segments financiers tels que les notations de crédit, les prêts hypothécaires et plus encore.` : lang === 'sp' ? 'Nuestro centro unificado de hiperautomatización ayuda a las empresas financieras en las principales categorías bancarias, como banca minorista, banca comercial, así como otros segmentos financieros como calificaciones crediticias, préstamos hipotecarios y más.' : lang === 'ar' ? 'يساعد مركز الأتمتة الفائقة الموحد لدينا المؤسسات المالية في الفئات المصرفية الرئيسية مثل الخدمات المصرفية للأفراد والخدمات المصرفية التجارية، بالإضافة إلى القطاعات المالية الأخرى مثل التصنيفات الائتمانية والإقراض العقاري والمزيد.' : lang === 'gr' ? 'Unser einheitlicher Hyperautomatisierungs-Hub unterstützt Finanzunternehmen in wichtigen Bankkategorien wie Retail Banking, Commercial Banking sowie anderen Finanzsegmenten wie Kreditratings, Hypothekendarlehen und mehr.' : 'Our unified Hyper-automation hub helps Financial Enterprises in major Banking categories such as Retail Banking, Commercial Banking, as well as other Financial segments such as Credit Ratings, Mortgage Lending and more.'}

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Gérez, surveillez et maintenez la dynamique d'impact grâce à l'hyper-automatisation de tous les processus clés en main, allant des opérations financières manuelles à la mise à jour hyper-automatisée de la conformité réglementaire.` : lang === 'sp' ? 'Administre, supervise y mantenga el impulso impactante con hiperautomatización en todos los procesos llave en mano, desde operaciones financieras manuales hasta cumplimiento normativo actualizado hiperautomatizado' : lang === 'ar' ? 'قم بإدارة الزخم المؤثر ومراقبته والحفاظ عليه من خلال الأتمتة المفرطة عبر جميع العمليات الجاهزة بدءًا من العمليات المالية اليدوية وحتى الامتثال التنظيمي المحدث الآلي للغاية' : lang === 'gr' ? 'Verwalten, überwachen und erhalten Sie die wirkungsvolle Dynamik durch Hyperautomatisierung in allen schlüsselfertigen Prozessen, von manuellen Finanzvorgängen bis hin zur hyperautomatisierten, aktualisierten Einhaltung gesetzlicher Vorschriften' : 'Manage, monitor and maintain the impactful momentum with hyper-automation across all turnkey processes ranging from manual financial operations to hyper-automated updated regulatory compliance.'}
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
              <span style={{ color: Colors.airaSecondary, marginRight: '6px' }}>
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'AIRA ' : lang === 'gr' ? 'AIRA' : 'AIRA'}
              </span>
              {lang === 'fr' ? `vous permet de` : lang === 'sp' ? 'te permite' : lang === 'ar' ? 'تمكنك من' : lang === 'gr' ? 'ermöglicht es Ihnen' : 'enables you to'}
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
                {lang === 'fr' ? `Avec des processus d'entreprise répétitifs se produisant à grande échelle, le secteur bancaire et financier bénéficie grandement des capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'un RPA fiable mis à l'échelle par l'IA adaptative. ` : lang === 'sp' ? 'Dado que los procesos empresariales repetitivos se producen a gran escala, la industria bancaria y financiera se beneficia enormemente de las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa. ' : lang === 'ar' ? 'ومع حدوث عمليات مؤسسية متكررة على نطاق واسع، تستفيد صناعة الخدمات المصرفية والمالية بشكل كبير من قدرات الأتمتة الفائقة لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي.' : lang === 'gr' ? 'Da sich wiederholende Unternehmensprozesse in großem Umfang ablaufen, profitiert die Banken- und Finanzbranche in hohem Maße von den Hyperautomatisierungsfunktionen vonAIRA, mit der Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI. ' : 'With repetitive enterprise processes occurring at large scale, Banking and Finance industry benefits highly from the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI.'}
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
                      {lang === 'fr' ? `Relations clients améliorées` : lang === 'sp' ? 'Relaciones mejoradas con los clientes' : lang === 'ar' ? 'تعزيز علاقات العملاء' : lang === 'gr' ? 'Verbesserte Kundenbeziehungen' : 'Enhanced Customer Relationships'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Gestion du profil client à 360 degrés en temps réel` : lang === 'sp' ? 'Gestión de perfiles de clientes de 360 grados en tiempo real' : lang === 'ar' ? 'إدارة ملفات تعريف العملاء في الوقت الفعلي بزاوية 360 درجة' : lang === 'gr' ? '360-Grad-Kundenprofilverwaltung in Echtzeit' : ' Real-time 360-degree Customer Profile Management.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Optimisation accélérée de la prestation du service client` : lang === 'sp' ? '	Optimización acelerada de la prestación de servicios al cliente' : lang === 'ar' ? '	تسريع تحسين تقديم خدمة العملاء' : lang === 'gr' ? '	Beschleunigte Optimierung der Kundendienstbereitstellung' : 'Accelerated Customer Service Delivery Optimization.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Marketing et livraison des ventes personnalisés avec un alignement segment-offre pertinent` : lang === 'sp' ? 'Entrega personalizada de marketing y ventas con alineación relevante de oferta y segmento' : lang === 'ar' ? 'تسويق شخصي وتسليم المبيعات مع محاذاة عرض القطاع ذي الصلة' : lang === 'gr' ? '	Personalisierte Marketing- und Vertriebslieferung mit relevanter Segment-Angebotsausrichtung' : '  Personalized Marketing & Sales Delivery with relevant Segment-Offer alignment.'}
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
                    {lang === 'fr' ? `Détection de fraude hyper-automatisée` : lang === 'sp' ? 'Detección de fraude hiperautomatizada' : lang === 'ar' ? 'كشف الاحتيال الآلي بشكل مفرط' : lang === 'gr' ? 'Hyperautomatisierte Betrugserkennung' : ' Hyper-automated Fraud Detection'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `	Automatisez le profilage des entités, y compris l'évaluation de la marge de risque` : lang === 'sp' ? '	Automatizar la creación de perfiles de entidades, incluida la evaluación del margen de riesgo' : lang === 'ar' ? '	أتمتة عملية تحديد مواصفات الكيانات بما في ذلك تقييم هامش المخاطر' : lang === 'gr' ? 'Automatisieren Sie die Erstellung von Unternehmensprofilen einschließlich der Bewertung der Risikomarge' : 'Automate Entity Profiling including Risk Margin Assessment.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `	Optimisez les protocoles de détection de fraude pour des interventions sans intervention manuelle.` : lang === 'sp' ? 'Optimice los protocolos de detección de fraude para evitar intervenciones manuales.' : lang === 'ar' ? 'تحسين بروتوكولات اكتشاف الاحتيال للتدخلات ' : lang === 'gr' ? 'Optimieren Sie Betrugserkennungsprotokolle für null manuelle Eingriffe.' : 'Optimise Fraud Detection Protocols for zero-manual interventions.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `	Mise à jour et gestion continue du profil à 360 degrés` : lang === 'sp' ? '	Actualización y gestión continua de perfiles de 360 grados' : lang === 'ar' ? 'اليدوية الصفرية.' : lang === 'gr' ? 'Kontinuierliche 360-Grad-Profilaktualisierung und -verwaltung' : 'Continuous 360-Degree Profile Updating and Management.'}
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
                    {lang === 'fr' ? `Restez au top de la conformité réglementaire` : lang === 'sp' ? 'Manténgase al tanto del cumplimiento normativo' : lang === 'ar' ? 'البقاء على رأس الامتثال التنظيمي' : lang === 'gr' ? 'Behalten Sie den Überblick über die Einhaltung gesetzlicher Vorschriften' : 'Stay on top of Regulatory Compliance'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `	Compréhension de la conformité adaptée aux entreprises hyper-automatisées` : lang === 'sp' ? '	Comprensión de cumplimiento adaptada a la empresa hiperautomatizada' : lang === 'ar' ? 'فهم الامتثال المصمم خصيصًا للمؤسسات والمؤتمت للغاية' : lang === 'gr' ? 'Hyperautomatisiertes, auf Unternehmen zugeschnittenes Compliance-Verständnis' : 'Hyper-automated Enterprise tailored Compliance Understanding.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `	Concevoir des règles métier et des flux de travail pour tous les détails de conformité` : lang === 'sp' ? 'Diseñe reglas comerciales y flujos de trabajo para todos los detalles de cumplimiento' : lang === 'ar' ? 'تصميم قواعد العمل وسير العمل لجميع تفاصيل الامتثال' : lang === 'gr' ? 'Entwerfen Sie Geschäftsregeln und Arbeitsabläufe für alle Compliance-Details' : 'Design Business Rules and Workflows for all Compliance details.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `	Recevez des alertes préventives et en temps réel sur les problèmes et résolutions de conformité à venir` : lang === 'sp' ? 'Obtenga alertas preventivas y en tiempo real sobre próximos problemas y resoluciones de cumplimiento' : lang === 'ar' ? '	احصل على تنبيهات استباقية وفي الوقت الفعلي بشأن مشكلات وقرارات الامتثال القادمة' : lang === 'gr' ? 'Erhalten Sie präventive und Echtzeitwarnungen zu bevorstehenden Compliance-Problemen und -Lösungen' : 'Get Preemptive and Real-time alerts on upcoming Compliance issues and resolutions.'}
                        
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
            {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : 'Try AIRA for your Enterprise'}
            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
            <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang === 'sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang === 'ar' ? 'احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang === 'gr' ? 'Buchen Sie ein Demo-Beratungsgespräch mit unserem Produktteam' : 'Book a Demo Call'}
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
}

export default Index;
