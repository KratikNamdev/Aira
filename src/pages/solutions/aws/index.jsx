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
    text: "Hyper-automatisation l'ensemble de votre architecture de processus d'entreprise en intégrant AWS AI dans AIRA",
  },
  {
    id: 2,
    text: "Accélérer des processus intelligents d’inventaire et d’approvisionnement en commandes, éliminant les frictions de votre chaîne d’approvisionnement",
  },
  {
    id: 3,
    text: "Rationaliser Dépenses opérationnelles (OPEX) en établissant un coût total de possession (TCO) étalonné",
  },
  {
    id: 4,
    text: "Développer gestion des accès sans limitations avec authentification unique et sécuriséedans un système intégré interface.",
  },
  {
    id: 5,
    text: "Élaborer une stratégie vos prévisions de retour sur investissement des dépensesminimiser etprioriser moteurs à coût d'impact élevé pour les retours.",
  },
  {
    id: 6,
    text: "Simplifier l’intégralité de vos dépenses de cloud computing avec une facturation unique et des options de paiement simples.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    text: "Hyper-automate your entire enterprise process architecture by integrating AWS AI in AIRA.",
  },
  {
    id: 2,
    text: "Speed up smart inventory and order procurement processes, removing friction from your supply chain.",
  },
  {
    id: 3,
    text: "Streamline Operational Expense (OPEX) by establishing benchmarked Total Cost of Ownership (TCO).",
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
    text: "Simplify your entire cloud computing expenditure with singular billing and easy payment options.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    text: "قم بأتمتة بنية عمليات مؤسستك بالكامل من خلال دمج AWS AI في AIRA",
  },
  {
    id: 2,
    text: "قم بتسريع عملية المخزون الذكي وطلب عمليات الشراء، وإزالة الاحتكاك من سلسلة التوريد الخاصة بك.",
  },
  {
    id: 3,
    text: "تبسيط النفقات التشغيلية (OPEX) من خلال تحديد التكلفة الإجمالية للملكية (TCO) المرجعية",
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
    text: "قم بتبسيط نفقات الحوسبة السحابية بالكامل من خلال الفوترة الفردية وخيارات الدفع السهلة.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    text: "Hyperautomatisieren Ihre gesamte Unternehmensprozessarchitektur durch die Integration von AWS AI in AIRA",
  },
  {
    id: 2,
    text: "Beschleunigen Intelligente Lager- und Auftragsbeschaffungsprozesse, die Reibungsverluste in Ihrer Lieferkette beseitigen.",
  },
  {
    id: 3,
    text: "Rationalisieren Betriebskosten (OPEX) durch Festlegung von Benchmark-Gesamtbetriebskosten (TCO)",
  },
  {
    id: 4,
    text: "Expandieren Zugriffsverwaltung ohne Einschränkungen mit sicherem Single-Sign-Onin ein integriertes Schnittstelle.",
  },
  {
    id: 5,
    text: "Strategisieren Sie Ihre Ausgaben-ROI-Prognosenminimieren Undpriorisieren kosteneffiziente Motoren für Retouren.",
  },
  {
    id: 6,
    text: "Vereinfachen Ihre gesamten Cloud-Computing-Ausgaben mit einheitlicher Abrechnung und einfachen Zahlungsoptionen.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    text: "Hyper-automate your entire enterprise process architecture by integrating AWS AI in AIRA.",
  },
  {
    id: 2,
    text: "Speed up smart inventory and order procurement processes, removing friction from your supply chain.",
  },
  {
    id: 3,
    text: "Streamline Operational Expense (OPEX) by establishing benchmarked Total Cost of Ownership (TCO).",
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
    text: "Simplify your entire cloud computing expenditure with singular billing and easy payment options.",
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
                    {lang === 'fr' ? `AIRA Hyper-automatisation ` : lang === 'sp' ? 'AIRA Hiperautomatización ' : lang === 'ar' ? 'فرط الأتمتة لـ AWS' : lang === 'gr' ? 'AIRA Hyperautomation' : 'AIRA Hyper-automation '}
                    <br />
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `pour AWS` : lang === 'sp' ? 'para AWS' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'für AWS' : 'For AWS'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                  
                      {lang === 'fr' ? `Tirez parti du leader mondial des services cloud intégrés dans la plateforme ` : lang === 'sp' ? 'Transformaciones digitales de la aviación' : lang === 'ar' ? 'استفد من الشركة الرائدة عالميًا في مجال الخدمات السحابية المدمجة في ' : lang === 'gr' ? 'Nutzen Sie den weltweit führenden Cloud-basierten Service, der in die einheitliche' : ' Leverage the global leader of cloud based service integrated in the unified AIRA Hyper-automation platform.'}
                 
                    {/* {lang === 'fr' ? `unifiée d’hyper-automatisation AIRA.` : lang === 'sp' ? 'Aproveche el líder mundial en servicios basados en la nube integrados en' : lang === 'ar' ? 'نظام التشغيل الآلي الموحد AIRA Hyper-Automation.' : lang === 'gr' ? 'AIRA-Hyperautomatisierungsplattform integriert ist.' : ' management processes. Hyper-automating HR Processes to Align with Organisational Development'} */}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader10.png"
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
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5, textAlign: 'center' }}>

              {lang === 'fr' ? `Mondialisez la réussite de l'entreprise et l'accès aux données avec` : lang === 'sp' ? 'Globalice el éxito empresarial y el acceso a datos ' : lang === 'ar' ? 'عولمة نجاح المؤسسة والوصول إلى البيانات الثاقبة مع ' : lang === 'gr' ? 'Globalisieren Sie den Unternehmenserfolg und den aufschlussreichen Datenzugriff mit Amazon Web Services ' : ' Globalise enterprise success and  '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Amazon Web Services (AWS) etAIRA` : lang === 'sp' ? 'detallados con Amazon Web Services (AWS) yAIRE' : lang === 'ar' ? 'Amazon Web Services (AWS) وAIRA' : lang === 'gr' ? '(AWS) &AIRA' : ' insightful data access with Amazon Web Services (AWS) & AIRA'}
              </span>
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
                  sx={{ my: 1, fontWeight: 600, fontSize: '23px', lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Faire évoluer l’infrastructure de service client` : lang === 'sp' ? 'Escalar la infraestructura de servicio al cliente' : lang === 'ar' ? 'توسيع نطاق البنية التحتية لخدمة العملاء' : lang === 'gr' ? 'Skalieren Sie die Kundendienstinfrastruktur' : ' Scale Customer Service Infrastructure'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 , fontSize: '16px'}}
                >
                  {lang === 'fr' ? `Les intégrations AIRA avec Amazon Connect vous permettent de mettre en œuvre une expérience client sans contact, afin que votre personnel de service client puisse réduire les appels interrompus et se concentrer sur des résolutions de problèmes plus complexes et plus humaines pour une satisfaction client enrichie.` : lang === 'sp' ? 'Las integraciones de AIRA con Amazon Connect le permiten implementar una experiencia de cliente sin contacto, de modo que su personal de servicio al cliente pueda reducir las llamadas perdidas y centrarse en resoluciones de problemas más complejas y más humanas para una mayor satisfacción del cliente.' : lang === 'ar' ? 'تمكّنك عمليات تكامل AIRA مع Amazon Connect من تنفيذ تجربة عملاء بدون لمس، بحيث يمكن لموظفي خدمة العملاء لديك تقليل المكالمات المسقطة والتركيز على حلول المشكلات الأكثر تعقيدًا والأكثر إنسانية لتحقيق رضا العملاء بشكل أكبر.' : lang === 'gr' ? 'Durch die AIRA-Integration mit Amazon Connect können Sie ein Zero-Touch-Kundenerlebnis implementieren, sodass Ihr Kundendienstpersonal weniger Anrufe abbrechen und sich auf komplexere, menschlichere Problemlösungen konzentrieren kann, um die Kundenzufriedenheit zu steigern.' : 'AIRA Integrations with Amazon Connect empower you to implement a zero-touch customer experience, so your customer service personnel can reduce dropped calls and focus on more complex, more human problem resolutions for enriched customer satisfaction. '}

                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={5} my={5} flexDirection={'row-reverse'}>
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
                  sx={{ my: 1, fontWeight: 600, fontSize: '23px', lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Tirer parti de l’IA dansAIRA+ IA AWS` : lang === 'sp' ? 'Transformaciones digitales de la aviación' : lang === 'ar' ? 'الاستفادة من الذكاء الاصطناعي في AIRA + AWS AI' : lang === 'gr' ? 'Nutzen Sie KI inAIRA+ AWS AI' : 'Leverage AI in AIRA + AWS AI'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Présentez la puissance de l'intégration d'AWS AI avec l'IA de documents intégrée d'AIRA pour un traitement amélioré des documents basé sur l'OCR et le NLP, faisant évoluer l'hyper-automatisation des documents de votre entreprise par des ordres de grandeur en quelques heures.` : lang === 'sp' ? 'Presente el poder de la integración de AWS AI con la Document AI incorporada de AIRA para mejorar el procesamiento de documentos basado en OCR y NLP, escalando la hiperautomatización de documentos de su empresa en órdenes de magnitud en cuestión de horas.' : lang === 'ar' ? 'قدّم قوة تكامل AWS AI مع Document AI المدمج في AIRA لتحسين معالجة المستندات المستندة إلى OCR وNLP، وتوسيع نطاق الأتمتة المفرطة لمستندات مؤسستك من خلال أوامر الحجم في غضون ساعات.' : lang === 'gr' ? 'Nutzen Sie die Leistungsfähigkeit der AWS-KI-Integration mit der integrierten Dokumenten-KI von AIRA für eine verbesserte OCR- und NLP-basierte Dokumentenverarbeitung und skalieren Sie die Hyperautomatisierung Ihrer Unternehmensdokumente innerhalb weniger Stunden um Größenordnungen.' : 'Introduce the power of AWS AI integration with AIRA’s inbuilt Document AI for enhanced OCR and NLP based document processing, scaling your enterprise document hyper-automation by orders of magnitude within hours. '}

                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={5}>
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
                  sx={{ my: 1, fontWeight: 600, fontSize: '23px', lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Connectez AWS à l'architecture informatique existante` : lang === 'sp' ? 'Escalar la infraestructura de servicio al cliente' : lang === 'ar' ? 'قم بتوصيل AWS ببنية تكنولوجيا المعلومات الحالية' : lang === 'gr' ? 'Verbinden Sie AWS mit der vorhandenen IT-Architektur' : '  Connect AWS with existing IT Architecture'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 }}
                >
                  {lang === 'fr' ? `AIRA représente des opérations low-code flexibles unifiées dans une interface de plate-forme unique, vous permettant notamment d'intégrer tous les processus internes AWS actuels dans AIRA pour commencer l'hyper-automatisation des flux de travail de bout en bout avec notre Workflow Studio par glisser-déposer.` : lang === 'sp' ? 'Las integraciones de AIRA con Amazon Connect le permiten implementar una experiencia de cliente sin contacto, de modo que su personal de servicio al cliente pueda reducir las llamadas perdidas y centrarse en resoluciones de problemas más complejas y más humanas para una mayor satisfacción del cliente.' : lang === 'ar' ? 'حسابات AIRA لعمليات مرنة ذات تعليمات برمجية منخفضة وموحدة في واجهة النظام الأساسي الفردية، بما في ذلك تمكينك من دمج جميع عمليات AWS الداخلية الحالية في AIRA لبدء سير العمل الآلي الفائق من البداية إلى النهاية من خلال السحب والإسقاط Workflow Studio الخاص بنا.' : lang === 'gr' ? 'AIRA ermöglicht flexible Low-Code-Vorgänge, die in der einzigen Plattformschnittstelle vereinheitlicht sind, einschließlich der Möglichkeit, alle aktuellen AWS-internen Prozesse in AIRA zu integrieren, um mit unserem Drag-and-Drop-Workflow-Studio mit der Hyperautomatisierung von End-to-End-Workflows zu beginnen.' : 'AIRA accounts for flexible low-code operations unified in the singular platform interface, including enabling you to integrate all current AWS internal processes into AIRA to start hyper-automating end-to-end workflows with our drag and drop Workflow Studio. '}
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
              {lang === 'fr' ? `AIRA Hyper-automatisation ` : lang === 'sp' ? 'AIRA Hiperautomatización ' : lang === 'ar' ? 'التحولات الرقمية للطيران' : lang === 'gr' ? 'AIRA Hyperautomation ' : ' AIRA Hyper-automation'}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `  pour AWS` : lang === 'sp' ? ' para AWS' : lang === 'ar' ? ' التحولات الرقمية للطيران' : lang === 'gr' ? ' für AWS' : ' for AWS'}
              </span>
            </Typography>
            <Typography variant="subtitl2" sx={{ lineHeight: 2, textAlign: 'center', color: 'white' }}>
              {lang === 'fr' ? `Tirez parti du leader mondial des services cloud intégrés dans la plateforme unifiée d’hyper-automatisation AIRA.` : lang === 'sp' ? 'Aproveche el líder mundial en servicios basados en la nube integrados en la plataforma unificada de hiperautomatización AIRA.' : lang === 'ar' ? 'التحولات الرقمية للطيران' : lang === 'gr' ? 'Nutzen Sie den weltweit führenden Cloud-basierten Service, der in die einheitliche AIRA-Hyperautomatisierungsplattform integriert ist.' : ' Leverage the global leader of cloud based service integrated in the unified AIRA Hyper-automation platform.'}
            </Typography>
          </Stack>
          <Grid container spacing={2} sx={{ my: 3 }}>
            {lang === 'fr' ? AIRACANDODATA?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'sp' ? AIRACANDODATA1.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item.id}>
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
                {lang === 'fr' ? `Augmenter l'impact d'AWS sur l'IA d'entreprise combiné` : lang === 'sp' ? 'Escalar el impacto de AWS en la IA empresarial ' : lang === 'ar' ? 'توسيع نطاق تأثير الذكاء الاصطناعي المؤسسي لـ ' : lang === 'gr' ? 'Skalieren Sie die KI-Auswirkungen von AWS auf ' : 'Scale Enterprise AI impact of '}
              </span>
              {lang === 'fr' ? `avec` : lang === 'sp' ? 'combinado' : lang === 'ar' ? 'AWS مع ' : lang === 'gr' ? 'Unternehmen' : ' of '}
              <br />
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'conAIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'kombiniert mitAIRA' : 'AWS combined with AIRA'}
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
                {lang === 'fr' ? `Transformations numériques de l'aviation` : lang === 'sp' ? 'Transformaciones digitales de la aviación' : lang === 'ar' ? 'التحولات الرقمية للطيران' : lang === 'gr' ? 'Digitale Transformationen in der Luftfahrt' : 'Aviation Digital Transformations'}
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
                      {lang === 'fr' ? `Ventes` : lang === 'sp' ? 'Ventas' : lang === 'ar' ? 'مبيعات' : lang === 'gr' ? 'Verkäufe' : ' Sales'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Utilisez des agents numériques pour automatiser les tâches administratives répétitives telles que les suivis, les recherches et les recherches.` : lang === 'sp' ? 'Utilice agentes digitales para automatizar tareas administrativas repetitivas como seguimientos, búsquedas e investigaciones' : lang === 'ar' ? '●	استخدم الوكلاء الرقميين لأتمتة المهام الإدارية المتكررة مثل ' : lang === 'gr' ? '	Nutzen Sie digitale Agenten, um sich wiederholende Verwaltungsaufgaben wie Nachverfolgungen, Suchen und Recherchen ' : 'Use Digital Agents to automate repetitive administrative tasks like follow-ups, searches, and research.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Hyper-automatisez le traitement des commandes pour le rendre plus rapide.` : lang === 'sp' ? 'Transformaciones digitales de la aviación' : lang === 'ar' ? 'المتابعات وعمليات البحث والبحث.' : lang === 'gr' ? 'Verwaltungsaufgaben wie Nachverfolgungen, Suchen und Recherchen zu automatisieren' : 'Hyper-automate sales order processing to make it faster.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Hyper-automatisez le traitement des commandes pour le rendre plus rapide.` : lang === 'sp' ? '	Hiperautomatice el procesamiento de pedidos para hacerlo más rápido.' : lang === 'ar' ? 'فرط أتمتة معالجة الطلبات لجعلها أسرع.' : lang === 'gr' ? '	Automatisieren Sie die Auftragsabwicklung, um sie schneller zu machen.' : 'Speed up fulfilment and delivery of orders. Make sure all your systems have consistent data.'}
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
                          {lang === 'fr' ? `	Traitez automatiquement les demandes du service client.` : lang === 'sp' ? '	Procese las solicitudes de servicio al cliente de forma automática.' : lang === 'ar' ? 'معالجة طلبات خدمة العملاء تلقائيًا.' : lang === 'gr' ? '	Verarbeiten Sie Kundendienstanfragen automatisch.' : 'Process customer service requests automatically.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Résolvez les problèmes des clients en un seul appel.` : lang === 'sp' ? 'Resuelva los problemas de los clientes en una sola llamada.' : lang === 'ar' ? 'حل مشاكل العملاء بمكالمة واحدة.' : lang === 'gr' ? '	Lösen Sie Kundenprobleme in einem Anruf.' : 'Solve customer problems in one call.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Voyez tout sur le client en un seul endroit.` : lang === 'sp' ? 'Vea todo sobre el cliente en un solo lugar.' : lang === 'ar' ? '	شاهد كل شيء عن العميل في مكان واحد.' : lang === 'gr' ? '	Sehen Sie alles über den Kunden an einem Ort.' : 'See everything about the customer in one place.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Permettez aux clients de s’aider eux-mêmes.` : lang === 'sp' ? '	Permita que los clientes se ayuden a sí mismos.' : lang === 'ar' ? 'السماح للعملاء بمساعدة أنفسهم' : lang === 'gr' ? '	Erlauben Sie den Kunden, sich selbst zu helfen.' : 'Allow customers to help themselves.'}
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
                      {lang === 'fr' ? `Commercialisation` : lang === 'sp' ? 'Marketing' : lang === 'ar' ? 'تسويق' : lang === 'gr' ? 'Marketing' : ' Marketing'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Automatisez les téléchargements de leads` : lang === 'sp' ? '	Automatizar las cargas de clientes potenciales' : lang === 'ar' ? 'أتمتة تحميلات الرصاص' : lang === 'gr' ? '	Automatisieren Sie Lead-Uploads' : '  Automate lead uploads.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Gérer les campagnes` : lang === 'sp' ? '	Manejar campañas' : lang === 'ar' ? 'التعامل مع الحملات' : lang === 'gr' ? '	Behandeln Sie Kampagnen' : 'Handle campaigns.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Combiner les rapports` : lang === 'sp' ? '	Combinar informes' : lang === 'ar' ? 'الجمع بين التقارير' : lang === 'gr' ? '	Kombinieren Sie Berichte' : '  Combine reports.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Maintenir la cohérence des données sur toutes les plateformes marketing.` : lang === 'sp' ? 'Mantenga la coherencia de los datos en todas las plataformas de marketing.' : lang === 'ar' ? 'الحفاظ على اتساق البيانات عبر منصات التسويق.' : lang === 'gr' ? '	Sorgen Sie für die Datenkonsistenz auf allen Marketingplattformen.' : '  Maintain data consistency across marketing platforms.'}
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
              flexDirection={'row-reverse'}
            >
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/benefit4.png"
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
                      {lang === 'fr' ? `Administrateur SalesForce` : lang === 'sp' ? ' Administrador de SalesForce ' : lang === 'ar' ? 'مسؤول قوة المبيعات' : lang === 'gr' ? 'SalesForce-Administrator' : 'SalesForce Admin'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Gérer les comptes d'utilisateurs : ajouter, supprimer, mettre à jour des rôles et des profils` : lang === 'sp' ? '	Administrar cuentas de usuario: agregar, eliminar, actualizar roles y perfiles' : lang === 'ar' ? 'إدارة حسابات المستخدمين: إضافة وإزالة وتحديث الأدوار والملفات الشخصية' : lang === 'gr' ? 'Benutzerkonten verwalten: Rollen und Profile hinzufügen, entfernen, aktualisieren' : 'Manage user accounts: add, remove, update roles and profiles.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Garantir l’exactitude des données` : lang === 'sp' ? '●Garantizar la precisión de los datos' : lang === 'ar' ? 'التأكد من دقة البيانات' : lang === 'gr' ? 'Stellen Sie die Datengenauigkeit sicher' : 'Ensure data accuracy.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `	Réinitialiser les mots de passe si nécessaire` : lang === 'sp' ? '	Restablecer contraseñas si es necesario' : lang === 'ar' ? 'إعادة تعيين كلمات المرور إذا لزم الأمر' : lang === 'gr' ? 'Setzen Sie Passwörter bei Bedarf zurück' : 'Reset passwords if needed.'}
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
