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
    title:"Précision du traitement des politiques",
    text: "AIRA garantit un traitement précis et efficace des polices, réduisant ainsi les erreurs et améliorant la précision globale du flux de travail dans le secteur de l'assurance.",
  },
  {
    id: 2,
    title:"Efficacité de la gestion des réclamations",
    text: "Transformez le traitement des réclamations grâce à l'automatisation intelligente d'AIRA, en rationalisant les flux de travail et en accélérant la gestion des réclamations pour des résultats fiables.",
  },
  {
    id: 3,
    title:"Assurance de conformité réglementaire",
    text: "Naviguez de manière transparente dans les paysages réglementaires avec AIRA, en garantissant que les opérations répondent systématiquement aux normes de conformité et aux exigences réglementaires.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    title:"Precisión del procesamiento de políticas",
    text: "AIRA garantiza un procesamiento de pólizas preciso y eficiente, reduciendo errores y mejorando la precisión general del flujo de trabajo en el sector de seguros.",
  },
  {
    id: 2,
    title:"Eficiencia en la gestión de reclamaciones",
    text: "Transforme el procesamiento de reclamos con la automatización inteligente de AIRA, optimizando los flujos de trabajo y acelerando la gestión de reclamos para obtener resultados confiables.",
  },
  {
    id: 3,
    title:"Garantía de Cumplimiento Normativo",
    text: "Navegue por los panoramas regulatorios sin problemas con AIRA, garantizando que las operaciones cumplan constantemente con los estándares de cumplimiento y los requisitos regulatorios.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    title:"دقة معالجة السياسات",
    text: "تضمن AIRA معالجة سياسات دقيقة وفعالة، مما يقلل الأخطاء ويعزز دقة سير العمل بشكل عام في قطاع التأمين.",
  },
  {
    id: 2,
    title:"كفاءة إدارة المطالبات",
    text: "قم بتحويل معالجة المطالبات من خلال الأتمتة الذكية لـ AIRA، وتبسيط سير العمل وتسريع إدارة المطالبات للحصول على نتائج موثوقة.",
  },
  {
    id: 3,
    title:"ضمان الامتثال التنظيمي",
    text: "يمكنك التنقل عبر البيئات التنظيمية بسلاسة باستخدام AIRA، مما يضمن أن العمليات تلبي باستمرار معايير الامتثال والمتطلبات التنظيمية.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    title:"Präzision der Richtlinienverarbeitung",
    text: "AIRA sorgt für eine genaue und effiziente Policenbearbeitung, reduziert Fehler und verbessert die allgemeine Workflow-Präzision im Versicherungssektor.",
  },
  {
    id: 2,
    title:"Effizienz im Schadenmanagement",
    text: "Transformieren Sie die Schadensbearbeitung mit der intelligenten Automatisierung von AIRA, rationalisieren Sie Arbeitsabläufe und beschleunigen Sie das Schadensmanagement für zuverlässige Ergebnisse",
  },
  {
    id: 3,
    title:"Sicherstellung der Einhaltung gesetzlicher Vorschriften",
    text: "Navigieren Sie mit AIRA nahtlos durch regulatorische Landschaften und stellen Sie sicher, dass der Betrieb konsequent Compliance-Standards und regulatorische Anforderungen erfüllt.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    title:"Policy Processing Precision",
    text: "AIRA ensures accurate and efficient policy processing, reducing errors and enhancing overall workflow precision in the insurance sector.",
  },
  {
    id: 2,
    title:"Claims Management Efficiency",
    text: "Transform claims processing with AIRA's intelligent automation, streamlining workflows and accelerating claims management for reliable outcomes.",
  },
  {
    id: 3,
    title:"Regulatory Compliance Assurance",
    text: "Navigate regulatory landscapes seamlessly with AIRA, ensuring that operations consistently meet compliance standards and regulatory requirements.",
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
                    {lang === 'fr' ? `Transformations numériques axées sur les contrats et les entités ` : lang === 'sp' ? 'Transformaciones digitales centradas en contratos y entidades ' : lang === 'ar' ? 'التحولات الرقمية التي تركز على العقود والكيانات ' : lang === 'gr' ? 'Vertrags- und unternehmensorientierte digitale Transformationen ' : 'Contract & Entity focused Digital Transformations  '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA Hyperautomation' : ' with AIRA Hyper-automation'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Tirer parti de la compréhension contextuelle significative des contrats étendus et des règles commerciales personnalisées des processus du secteur de l'assurance.` : lang === 'sp' ? 'Aproveche la comprensión contextual significativa de contratos extensos y reglas comerciales personalizadas de los procesos de la industria de seguros.' : lang === 'ar' ? 'الاستفادة من الفهم السياقي الهادف للعقود الشاملة وقواعد العمل المخصصة لعمليات صناعة التأمين' : lang === 'gr' ? 'Nutzen Sie das kontextbezogene, aussagekräftige Verständnis umfangreicher Verträge und benutzerdefinierter Geschäftsregeln der Prozesse der Versicherungsbranche' : 'Leverage the contextual meaningful understanding of extensive contracts and custom business rules of Insurance industry processes.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader2.png"
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
                {lang === 'fr' ? `Hyper-automatisation ` : lang === 'sp' ? 'Hiperautomatización' : lang === 'ar' ? 'تساعدك الأتمتة المفرطة ' : lang === 'gr' ? 'Hyperautomatisierung' : 'Hyper-automation'}
              </span> {" "}
              {lang === 'fr' ? `vous aide à réduire la friction de` : lang === 'sp' ? 'le ayuda a reducir la fricción de' : lang === 'ar' ? 'على تقليل الاحتكاك' : lang === 'gr' ? 'Mit AIRA' : ' helps you reduce friction from'}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5, textAlign: 'center' }}>
              {lang === 'fr' ? `Entente du contrat | Détection de fraude | Profilage client à 360 degrés` : lang === 'sp' ? 'Entendimiento del contrato | Detección de fraude | Perfilado de clientes de 360 grados' : lang === 'ar' ? 'فهم العقد | كشف الاحتيال | ملف تعريف العملاء بزاوية 360 درجة' : lang === 'gr' ? 'Vertragsverständnis | Betrugserkennung | 360-Grad-Kundenprofilierung' : ' Contract Understanding | Fraud Detection | 360-degree Customer Profiling'}
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
                  {lang === 'fr' ? `AIRA transforme les opérations basées sur l'assurance` : lang === 'sp' ? 'AIRA transforma las operaciones basadas en seguros' : lang === 'ar' ? 'تقوم AIRA بتحويل العمليات القائمة على التأمين' : lang === 'gr' ? 'AIRA transformiert den versicherungsbasierten Betrieb' : 'AIRA transforms Insurance based Operations'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                 {lang === 'fr' ? `Relevez et répondez aux défis du marché tels que la demande d'offres plus personnalisées, de traitement plus rapide et d'activations instantanées, et atténuez les risques liés aux conditions dynamiques du marché grâce aux capacités d'hyper-automatisation d'AIRA.` : lang === 'sp' ? 'Aborde y cumpla con los desafíos del mercado, como la demanda de ofertas más personalizadas, procesamiento más rápido y activaciones instantáneas, además de mitigar el riesgo de las condiciones dinámicas del mercado con las capacidades de hiperautomatización de AIRA.' : lang === 'ar' ? 'قم بمواجهة تحديات السوق وتنفيذها مثل الطلب على عروض أكثر تخصيصًا ومعالجة أسرع وتنشيط فوري بالإضافة إلى تخفيف المخاطر الناجمة عن ظروف السوق الديناميكية من خلال إمكانات الأتمتة الفائقة الخاصة بـ AIRA' : lang === 'gr' ? 'Bewältigen Sie Marktherausforderungen wie die Nachfrage nach personalisierteren Angeboten, schnellerer Verarbeitung und sofortiger Aktivierung und mindern Sie das Risiko dynamischer Marktbedingungen mit den Hyperautomatisierungsfunktionen von AIRA.' : ' Address and deliver on market challenges such as demand for more personalised offerings, faster processing and instant activations as well as mitigate the risk from dynamic market conditions with AIRA’s hyper-automation capabilities. '}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px'  }}
                >
                  {lang === 'fr' ? `La création, la gestion et l'exploitation de profils clients à 360 degrés de haute précision pour de meilleures expériences et une détection améliorée des fraudes sont simples et évolutives.` : lang === 'sp' ? 'Crear, gestionar y aprovechar perfiles de clientes de 360 grados de alta precisión para obtener mejores experiencias y mejores detecciones de fraude es fácil y escalable.' : lang === 'ar' ? 'يعد إنشاء وإدارة والاستفادة من ملفات تعريف العملاء ذات الدقة العالية بزاوية 360 درجة للحصول على تجارب أفضل واكتشافات الاحتيال المحسنة أمرًا سهلاً وقابلاً للتطوير.' : lang === 'gr' ? 'Das Erstellen, Verwalten und Nutzen hochpräziser 360-Grad-Kundenprofile für bessere Erlebnisse und verbesserte Betrugserkennung ist einfach und skalierbar.' : 'Creating, managing and leveraging high accuracy 360-degree Customer Profiles for both better experiences and enhanced fraud detections is easy and scalable. '}
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
              </span> {" "}
              {lang === 'fr' ? `vous permet de` : lang === 'sp' ? 'AIREte permite' : lang === 'ar' ? 'تمكنك من' : lang === 'gr' ? 'AIRAermöglicht es Ihnen' : ' enables you to'}
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
                {lang === 'fr' ? `Avec des processus d'entreprise répétitifs se produisant à grande échelle, le secteur de l'assurance bénéficie grandement des capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'un RPA fiable mis à l'échelle par l'IA adaptative. ` : lang === 'sp' ? 'Dado que los procesos empresariales repetitivos se producen a gran escala, la industria de seguros se beneficia enormemente de las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa. ' : lang === 'ar' ? 'مع حدوث عمليات مؤسسية متكررة على نطاق واسع، تستفيد صناعة التأمين بشكل كبير من إمكانات الأتمتة الفائقة لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي.' : lang === 'gr' ? 'Da sich wiederholende Unternehmensprozesse in großem Umfang ablaufen, profitiert die Versicherungsbranche in hohem Maße von den Hyperautomatisierungsfunktionen vonAIRA, mit der Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI. ' : 'With repetitive enterprise processes occurring at large scale, Insurance industry benefits highly from the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI. '}
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
                      {lang === 'fr' ? `Améliorer les processus d’assurance de base` : lang === 'sp' ? 'Mejorar los procesos centrales de seguros' : lang === 'ar' ? 'تعزيز عمليات التأمين الأساسية' : lang === 'gr' ? 'Verbessern Sie die Kernprozesse im Versicherungswesen' : ' Enhance core insurance processes'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Gestion du profil client à 360 degrés en temps réel` : lang === 'sp' ? 'Gestión de perfiles de clientes de 360 grados en tiempo real' : lang === 'ar' ? 'إدارة ملفات تعريف العملاء في الوقت الفعلي بزاوية 360 درجة' : lang === 'gr' ? '360-Grad-Kundenprofilverwaltung in Echtzeit' : 'Real-time 360-degree Customer Profile Management.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Optimisation accélérée de la prestation du service client` : lang === 'sp' ? 'Optimización acelerada de la prestación de servicios al cliente' : lang === 'ar' ? 'تسريع تحسين تقديم خدمة العملاء' : lang === 'gr' ? 'Beschleunigte Optimierung der Kundendienstbereitstellung' : 'Accelerated Customer Service Delivery Optimization.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Gérez des données non structurées à grande échelle dans des ensembles de données perspicaces` : lang === 'sp' ? 'Administre datos no estructurados a gran escala en conjuntos de datos reveladores' : lang === 'ar' ? 'إدارة البيانات غير المنظمة واسعة النطاق وتحويلها إلى مجموعات بيانات ثاقبة' : lang === 'gr' ? 'Verwalten Sie große unstrukturierte Daten in aufschlussreichen Datensätzen' : 'Manage large-scale unstructured data into insightful datasets.'}
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
                    {lang === 'fr' ? `Automatisez le traitement des réclamations` : lang === 'sp' ? 'Automatizar el procesamiento de reclamos' : lang === 'ar' ? 'أتمتة معالجة المطالبات' : lang === 'gr' ? 'Automatisieren Sie die Schadensbearbeitung' : 'Automate claim processing'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Automatisez le traitement des réclamations d’assurance et le traitement des documents` : lang === 'sp' ? 'Automatizar el procesamiento de reclamaciones de seguros y de documentos' : lang === 'ar' ? 'أتمتة معالجة مطالبات التأمين ومعالجة المستندات' : lang === 'gr' ? 'Automatisieren Sie die Bearbeitung von Versicherungsansprüchen und Dokumenten' : ' Automate Insurance Claim Processing & Document Processing.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `	Optimisez les protocoles de détection de fraude pour des interventions sans intervention manuelle.` : lang === 'sp' ? 'Optimice los protocolos de detección de fraude para evitar intervenciones manuales.' : lang === 'ar' ? 'تحسين بروتوكولات اكتشاف الاحتيال للتدخلات اليدوية الصفرية.' : lang === 'gr' ? 'Optimieren Sie Betrugserkennungsprotokolle für null manuelle Eingriffe.' : 'Optimise Fraud Detection Protocols for zero-manual interventions.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Mise à jour et gestion continue du profil à 360 degrés` : lang === 'sp' ? 'Actualización y gestión continua de perfiles de 360 grados' : lang === 'ar' ? 'التحديث المستمر للملف الشخصي وإدارته بزاوية 360 درجة' : lang === 'gr' ? 'Kontinuierliche 360-Grad-Profilaktualisierung und -verwaltung' : 'Continuous 360-Degree Profile Updating and Management.'}
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
                    {lang === 'fr' ? `Développer l’excellence du service client` : lang === 'sp' ? 'Desarrolle la excelencia en el servicio al cliente' : lang === 'ar' ? 'بناء التميز في خدمة العملاء' : lang === 'gr' ? 'Bauen Sie herausragenden Kundenservice auf' : 'Build Customer Service Excellence'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Segmentation client hyper-automatisée et adéquation avec l’offre de marché` : lang === 'sp' ? 'Segmentación de clientes hiperautomatizada y ajuste de la oferta de mercado' : lang === 'ar' ? 'تقسيم العملاء بشكل آلي للغاية وملاءمة عروض السوق' : lang === 'gr' ? 'Hyperautomatisierte Kundensegmentierung und passendes Marktangebot' : ' Hyper-automated Customer segmentation and market offering fit.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Concevoir des communications, du marketing et d'autres campagnes de personnalisation` : lang === 'sp' ? '	Diseño de comunicaciones, marketing y otras campañas de personalización.' : lang === 'ar' ? 'تصميم الاتصالات والتسويق والحملات الأخرى للتخصيص' : lang === 'gr' ? 'Entwerfen Sie Kommunikations-, Marketing- und andere Kampagnen zur Personalisierung' : 'Design Communications, Marketing and other campaigns for personalization.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Entretenez des relations en temps réel avec un engagement plus profond et des intégrations plus rapides.` : lang === 'sp' ? 'Mantenga relaciones en tiempo real con un compromiso más profundo e incorporaciones más rápidas.' : lang === 'ar' ? 'حافظ على العلاقات في الوقت الفعلي من خلال مشاركة أعمق وعمليات تأهيل أسرع.' : lang === 'gr' ? 'Pflegen Sie Beziehungen in Echtzeit mit tieferem Engagement und schnelleren Onboardings.' : 'Maintain real-time relationships with deeper engagement and faster onboardings.'}
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
            {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang === 'sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang === 'ar' ? 'احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang === 'gr' ? 'Buchen Sie ein Demo-Beratungsgespräch mit unserem Produktteam' : ' Book a Demo Consultation Call with our Product Team'}
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
