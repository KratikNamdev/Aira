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
    text: "Hyper-automate your marketing funnels and optimise customer journeys faster, at scale.",
  },
  {
    id: 2,
    text: "Speed up smart marketing campaign scheduling and customer segmentation analysis for personalization.",
  },
  {
    id: 3,
    text: "Streamline Marketing campaign management within the unified platform.",
  },
  {
    id: 4,
    text: "Expand insight into your historical and future customer data by aligning and managing from one window.",
  },
  {
    id: 5,
    text: "Strategize your spend ROI forecasts to minimise and prioritise high impact cost engines for returns.",
  },
  {
    id: 6,
    text: "Simplify your entire brand experience with excellence prioritised for higher customer satisfaction.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    text: "Hiperautomatizar sus embudos de marketing y optimice los recorridos de los clientes más rápido y a escala.",
  },
  {
    id: 2,
    text: "Acelerar programación inteligente de campañas de marketing y análisis de segmentación de clientes para personalización.",
  },
  {
    id: 3,
    text: "Línea de corriente Gestión de campañas de marketing dentro de la plataforma unificada.",
  },
  {
    id: 4,
    text: "Expandir información sobre los datos históricos y futuros de sus clientes alineándolos y administrándolos desde una sola ventana.",
  },
  {
    id: 5,
    text: "Elaborar estrategias sus previsiones de retorno de la inversión (ROI) de sus gastos para minimizar y priorizar los motores de costos de alto impacto para las devoluciones.",
  },
  {
    id: 6,
    text: "Simplificar toda su experiencia de marca con excelencia priorizada para una mayor satisfacción del cliente.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    text: "قم بأتمتة مسارات التسويق الخاصة بك بشكل مفرط وتحسين رحلات العملاء بشكل أسرع وعلى نطاق واسع.",
  },
  {
    id: 2,
    text: "تسريع جدولة الحملات التسويقية الذكية وتحليل تجزئة العملاء من أجل التخصيص.",
  },
  {
    id: 3,
    text: "تبسيط إدارة الحملات التسويقية ضمن النظام الأساسي الموحد.",
  },
  {
    id: 4,
    text: "قم بتوسيع المعرفة ببيانات العملاء التاريخية والمستقبلية من خلال المواءمة والإدارة من نافذة واحدة.",
  },
  {
    id: 5,
    text: "قم بوضع إستراتيجيات لتوقعات عائد الاستثمار للإنفاق لتقليل محركات التكلفة عالية التأثير وإعطائها الأولوية لتحقيق العائدات.",
  },
  {
    id: 6,
    text: "قم بتبسيط تجربة علامتك التجارية بالكامل مع إعطاء الأولوية للتميز لتحقيق مستوى أعلى من رضا العملاء.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    text: "Hyper-automatisation vos entonnoirs marketing et optimisez les parcours clients plus rapidement et à grande échelle.",
  },
  {
    id: 2,
    text: "Accélérer planification intelligente des campagnes marketing et analyse de la segmentation des clients pour la personnalisation.",
  },
  {
    id: 3,
    text: "Rationaliser Gestion des campagnes marketing au sein de la plateforme unifiée.",
  },
  {
    id: 4,
    text: "Développer un aperçu de vos données clients historiques et futures en les alignant et en les gérant à partir d'une seule fenêtre.",
  },
  {
    id: 5,
    text: "Élaborer une stratégie vos prévisions de retour sur investissement des dépenses afin de minimiser et de prioriser les moteurs de coûts à fort impact pour les retours.",
  },
  {
    id: 6,
    text: "Simplifier l’ensemble de votre expérience de marque avec l’excellence priorisée pour une plus grande satisfaction client.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    text: "Hyper-automate your marketing funnels and optimise customer journeys faster, at scale.",
  },
  {
    id: 2,
    text: "Speed up smart marketing campaign scheduling and customer segmentation analysis for personalization.",
  },
  {
    id: 3,
    text: "Streamline Marketing campaign management within the unified platform.",
  },
  {
    id: 4,
    text: "Expand insight into your historical and future customer data by aligning and managing from one window.",
  },
  {
    id: 5,
    text: "Strategize your spend ROI forecasts to minimise and prioritise high impact cost engines for returns.",
  },
  {
    id: 6,
    text: "Simplify your entire brand experience with excellence prioritised for higher customer satisfaction.",
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
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : 'AIRA'}
                    </span>
                    {lang === 'fr' ? `Avec Hyper-automatisation` : lang === 'sp' ? ' Hiperautomatización para Hubspot' : lang === 'ar' ? 'فرط الأتمتة لـ Hubspot' : lang === 'gr' ? 'Hyper-automatisation pour Hubspot' : ' Hyper-automation for Hubspot '}
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                   
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Libere la inteligencia de marketing enriquecida de Hubspot integrada en la plataforma ' : lang === 'ar' ? 'أطلق العنان للذكاء التسويقي المعزز لـ Hubspot المدمج في نظام التشغيل الآلي الموحد ' : lang === 'gr' ? 'Libérez l’intelligence marketing enrichie de Hubspot intégrée dans la plateforme ' : 'Unleash enriched Marketing Intelligence of Hubspot integrated in the unified AIRA Hyper-automation platform.'}
                  
                    {/* {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'unificada de hiperautomatización AIRA.' : lang === 'ar' ? 'AIRA Hyper-automation' : lang === 'gr' ? 'unifiée d’hyper-automatisation AIRA.' : 'management processes. Hyper-automating HR Processes to Align with Organisational Development'} */}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader15.png"
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
              {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Canalice la inteligencia de marketing y la experiencia del cliente ' : lang === 'ar' ? 'توجيه الاستخبارات التسويقية وتجربة العملاء باستخدام ' : lang === 'gr' ? 'Canalisez lintelligence marketing et l expérience ' : '  Channelise Marketing Intelligence and Customer Experience with Hubspot & AIRA  '}
              <br />
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'con Hubspot yAIRE' : lang === 'ar' ? 'Hubspot وAIRA' : lang === 'gr' ? 'client avec Hubspot etAIRA' : 'Scale Customer Happiness'}
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
                  {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Escalar la felicidad del cliente' : lang === 'ar' ? 'مقياس سعادة العملاء' : lang === 'gr' ? 'Augmentez le bonheur des clients' : '  Scale Customer Happiness'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 , fontSize: '16px'}}
                >
                  {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Integraciones de AIRA con Hubspot para hiperautomatizar sus mejores comunicaciones de marketing entregadas a escala a los clientes en el momento y la forma adecuados.' : lang === 'ar' ? 'تتكامل AIRA مع Hubspot لأتمتة أفضل اتصالاتك التسويقية والتي يتم تسليمها على نطاق واسع للعملاء في الوقت المناسب وبالطريقة الصحيحة.' : lang === 'gr' ? 'Intégrations AIRA avec Hubspot pour hyper-automatiser vos meilleures communications marketing fournies à grande échelle aux clients, au bon moment et de la bonne manière.' : 'AIRA Integrations with Hubspot to hyper-automate your best marketing communications delivered at scale to the customers at the right time and right way.'}

                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={5} flexDirection={'row-reverse'} my={5}>
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
                  {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Aproveche la automatización de marketing de Hubspot' : lang === 'ar' ? 'الاستفادة من أتمتة التسويق Hubspot' : lang === 'gr' ? 'Tirez parti de l’automatisation du marketing Hubspot' : '  Leverage Hubspot Marketing Automation'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Presente el poder de la hiperautomatización basada en RPA e IA con flujos de trabajo integrados de Husbpot diseñados en AIRA Workflow Designer de bajo código.' : lang === 'ar' ? 'قدّم قوة التشغيل الآلي الفائق القائم على تقنية RPA والذكاء الاصطناعي مع مسارات عمل Husbpot المدمجة المصممة في AIRA Workflow Designer ذي التعليمات البرمجية المنخفضة.' : lang === 'gr' ? 'Présentez la puissance de l’hyper-automatisation basée sur la RPA et l’IA avec les flux de travail Husbpot intégrés conçus dans AIRA Workflow Designer low-code.' : ' Introduce the power of  RPA and AI based hyper-automation with integrated Husbpot workflows designed in low-code AIRA Workflow Designer. '}

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
                  {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Conecte Hubspot con AIRA para perfeccionar CRM' : lang === 'ar' ? 'قم بتوصيل Hubspot مع AIRA لتحسين إدارة علاقات العملاء (CRM).' : lang === 'gr' ? 'Connectez Hubspot à AIRA pour affiner le CRM' : ' Connect Hubspot with AIRA to refine CRM'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 }}
                >
                  {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'AIRA representa operaciones flexibles de bajo código unificadas en una interfaz de plataforma singular, lo que incluye permitirle integrar todos los procesos actuales de Hubspot Marketing en AIRA para comenzar a hiperautomatizar los flujos de trabajo de un extremo a otro con nuestro Workflow Studio de arrastrar y soltar.' : lang === 'ar' ? 'حسابات AIRA لعمليات مرنة ذات تعليمات برمجية منخفضة وموحدة في واجهة النظام الأساسي الفردية، بما في ذلك تمكينك من دمج جميع عمليات تسويق Hubspot الحالية في AIRA لبدء سير العمل الآلي الفائق من البداية إلى النهاية من خلال السحب والإسقاط Workflow Studio الخاص بنا.' : lang === 'gr' ? 'AIRA représente des opérations low-code flexibles unifiées dans une interface de plate-forme unique, vous permettant notamment dintégrer tous les processus marketing Hubspot actuels dans AIRA pour commencer l hyper-automatisation des flux de travail de bout en bout avec notre Workflow Studio par glisser-déposer.' : ' AIRA accounts for flexible low-code operations unified in the singular platform interface, including enabling you to integrate all current Hubspot Marketing processes into AIRA to start hyper-automating end-to-end workflows with our drag and drop Workflow Studio. '}
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
              {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'AIRE ' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'AIRA' : ' AIRA Hyper-automation '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Hiperautomatización para Hubspot' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'Mit AIRA' : '  for Hubspot'}
              </span>
            </Typography>
            <Typography variant="subtitl2" sx={{ lineHeight: 2, textAlign: 'center', color: 'white' }}>
              {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Libere la inteligencia de marketing enriquecida de Hubspot integrada en la plataforma unificada de hiperautomatización AIRA.' : lang === 'ar' ? 'أطلق العنان للذكاء التسويقي المعزز لـ Hubspot المدمج في نظام التشغيل الآلي الموحد AIRA Hyper-automation' : lang === 'gr' ? 'Hyper-automatisation pour Hubspot' : 'Unleash enriched Marketing Intelligence of Hubspot integrated in the unified AIRA Hyper-automation platform'}
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
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Inteligencia' : lang === 'ar' ? 'ذكاء' : lang === 'gr' ? 'Intelligence' : ' Intelligence'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Realice pronósticos de Marketing Intelligence sin problemas' : lang === 'ar' ? 'إجراء تنبؤات الاستخبارات التسويقية بسلاسة' : lang === 'gr' ? 'Réalisez des prévisions d’intelligence marketing en toute transparence' : 'Conduct Marketing Intelligence forecasts seamlessly.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Mantenga archivos de informes unificados para análisis comparativos.' : lang === 'ar' ? 'الحفاظ على أرشيف التقارير الموحدة للتحليل المقارن' : lang === 'gr' ? 'Maintenir des archives de reporting unifiées pour une analyse comparative' : 'Maintain unified reporting archives for comparative analysis.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? '	Reúna fácilmente análisis de tendencias y análisis de sentimientos' : lang === 'ar' ? 'يمكنك الجمع بين تحليلات الاتجاه وتحليلات المشاعر بسهولة' : lang === 'gr' ? 'Réunissez facilement l’analyse des tendances et l’analyse des sentiments' : 'Bring together trend analytics and sentiment analytics easily.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Planificación hiperautomatizada del rendimiento, refinamiento de métricas y más.' : lang === 'ar' ? 'أتمتة تخطيط الأداء وتحسين المقاييس والمزيد.' : lang === 'gr' ? 'Planification hyper-automatisée des performances, affinement des métriques et bien plus encore.' : 'Hyper-automate performance planning, metric refinement and more.'}
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
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Marketing' : lang === 'ar' ? 'تسويق' : lang === 'gr' ? 'Commercialisation' : ' Marketing '}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Automatizar las cargas de clientes potenciales' : lang === 'ar' ? '	أتمتة تحميلات الرصاص' : lang === 'gr' ? 'Automatisez les téléchargements de leads' : '	Automate lead uploads.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? '	Manejar campañas' : lang === 'ar' ? 'التعامل مع الحملات' : lang === 'gr' ? 'Gérer les campagnes' : 'Handle campaigns.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Combinar informes' : lang === 'ar' ? 'الجمع بين التقارير' : lang === 'gr' ? 'Combiner les rapports' : 'Combine reports.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Mantenga la coherencia de los datos en todas las plataformas de marketing.' : lang === 'ar' ? 'الحفاظ على اتساق البيانات عبر منصات التسويق.' : lang === 'gr' ? 'Maintenir la cohérence des données sur toutes les plateformes marketing.' : 'Maintain data consistency across marketing platforms.'}
                        </Typography>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* <Grid
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
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
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
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
                        </Typography>
                      </li>

                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid> */}
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
