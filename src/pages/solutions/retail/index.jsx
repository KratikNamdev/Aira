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
    title:"Opérations agiles",
    text: "Transformez vos opérations de vente au détail grâce à l'hyper-automatisation d'AIRA, garantissant l'agilité dans la gestion des stocks, le traitement des commandes et le service client.",
  },
  {
    id: 2,
    title:"Automatisation centrée sur le client",
    text: "Améliorez l'expérience client grâce à des solutions d'automatisation sur mesure, en fournissant des services personnalisés et une exécution efficace des commandes.",
  },
  {
    id: 3,
    title:"Informations basées sur les données",
    text: "Obtenez des informations précieuses sur les préférences des clients, les tendances des stocks et les demandes du marché, facilitant ainsi la prise de décision stratégique dans le secteur de la vente au détail."
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    title:"Operaciones ágiles",
    text: "Transforme sus operaciones minoristas con la hiperautomatización de AIRA, garantizando agilidad en la gestión de inventario, procesamiento de pedidos y servicio al cliente.",
  },
  {
    id: 2,
    title:"Automatización centrada en el cliente",
    text: "Mejore las experiencias de los clientes a través de soluciones de automatización personalizadas, brindando servicios personalizados y cumplimiento eficiente de pedidos.",
  },
  {
    id: 3,
    title:"Información basada en datos",
    text: "Obtenga información valiosa sobre las preferencias de los clientes, las tendencias de inventario y las demandas del mercado, lo que potencia la toma de decisiones estratégicas en el sector minorista."
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    title:"عمليات رشيقة",
    text: "قم بتحويل عمليات البيع بالتجزئة لديك من خلال التشغيل الآلي الفائق لـ AIRA، مما يضمن سرعة إدارة المخزون ومعالجة الطلبات وخدمة العملاء.",
  },
  {
    id: 2,
    title:"أتمتة تتمحور حول العملاء",
    text: "يمكنك الارتقاء بتجارب العملاء من خلال حلول الأتمتة المخصصة، وتوفير الخدمات الشخصية والتنفيذ الفعال للطلبات.",
  },
  {
    id: 3,
    title:"رؤى تعتمد على البيانات",
    text: "احصل على رؤى قيمة حول تفضيلات العملاء، واتجاهات المخزون، ومتطلبات السوق، وتمكين اتخاذ القرارات الاستراتيجية في قطاع البيع بالتجزئة."
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    title:"Agile Operationen",
    text: "Transformieren Sie Ihre Einzelhandelsabläufe mit der Hyperautomatisierung von AIRA und sorgen Sie für Agilität bei der Bestandsverwaltung, Auftragsabwicklung und dem Kundenservice.",
  },
  {
    id: 2,
    title:"Kundenzentrierte Automatisierung",
    text: "Verbessern Sie das Kundenerlebnis durch maßgeschneiderte Automatisierungslösungen, die Bereitstellung personalisierter Services und eine effiziente Auftragsabwicklung.",
  },
  {
    id: 3,
    title:"Datengesteuerte Erkenntnisse",
    text: "Gewinnen Sie wertvolle Einblicke in Kundenpräferenzen, Bestandstrends und Marktanforderungen und unterstützen Sie so bei der strategischen Entscheidungsfindung im Einzelhandel."
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    title:"Agile Operations",
    text: "Transform your retail operations with AIRA's hyper-automation, ensuring agility in inventory management, order processing, and customer service.",
  },
  {
    id: 2,
    title:"Customer-Centric Automation",
    text: "Elevate customer experiences through tailored automation solutions, providing personalised services and efficient order fulfilment.",
  },
  {
    id: 3,
    title:"Data-Driven Insights",
    text: "Gain valuable insights into customer preferences, inventory trends, and market demands, empowering strategic decision-making in the retail sector."
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
                    {lang === 'fr' ? `Transformations numériques du commerce électronique et de la vente au détail ` : lang === 'sp' ? 'Transformaciones digitales del comercio electrónico y el comercio minorista ' : lang === 'ar' ? 'التجارة الإلكترونية والتحولات الرقمية بالتجزئة ' : lang === 'gr' ? 'Digitale Transformationen im E-Commerce und Einzelhandel ' : ' E-commerce & Retail Digital Transformations  '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA Hyperautomation' : 'with AIRA Hyper-automation'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Atteignez les clients plus rapidement, plus intelligemment et mieux grâce à notre plateforme d'hyper-automatisation de vente au détail.` : lang === 'sp' ? 'Llegue a los clientes de forma más rápida, inteligente y mejor con nuestra plataforma de hiperautomatización minorista.' : lang === 'ar' ? 'يمكنك الوصول إلى العملاء بشكل أسرع وأكثر ذكاءً وأفضل من خلال نظام التشغيل الآلي الفائق الخاص بنا للبيع بالتجزئة.' : lang === 'gr' ? 'Erreichen Sie Kunden schneller, intelligenter und besser mit unserer Hyperautomatisierungsplattform für den Einzelhandel.' : ' Reach Customers faster, smarter, better with our retail hyper-automation platform.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader9.png"
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
                {lang === 'fr' ? `Hyper-automatisation ` : lang === 'sp' ? 'Hiperautomatización' : lang === 'ar' ? 'تساعدك الأتمتة ' : lang === 'gr' ? 'Hyperautomatisierung' : ' Hyper-automation'}
              </span> {" "}
              {lang === 'fr' ? `vous aide à mettre en œuvre` : lang === 'sp' ? 'te ayuda a implementar' : lang === 'ar' ? 'المفرطة على التنفيذ' : lang === 'gr' ? 'hilft Ihnen bei der Umsetzung' : ' helps you implement'}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5, textAlign: 'center' }}>
              {lang === 'fr' ? `Optimisations de l'entonnoir client | Segmentation produit-marché | Publicité dynamique | Cartographie comportementale du commerce électronique` : lang === 'sp' ? 'Optimizaciones del embudo de clientes | Segmentación de productos-mercado | Publicidad dinámica | Mapeo del comportamiento del comercio electrónico' : lang === 'ar' ? 'تحسينات مسار تحويل العملاء | تجزئة المنتج والسوق | الإعلان الديناميكي | رسم خرائط التجارة الإلكترونية السلوكية' : lang === 'gr' ? 'Optimierungen des Kundentrichters | Produkt-Marktsegmentierung | Dynamische Werbung | Verhaltensbezogenes E-Commerce-Mapping' : 'Customer Funnel Optimizations | Product-Market Segmentation | Dynamic Advertising | Behavioural E-commerce Mapping'}
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
                  {lang === 'fr' ? `AIRA transforme la vente au détail et le commerce électronique` : lang === 'sp' ? 'AIRA transforma el comercio minorista y el comercio electrónico' : lang === 'ar' ? 'تعمل AIRA على إحداث تحول في تجارة التجزئة والتجارة الإلكترونية' : lang === 'gr' ? 'AIRA transformiert Einzelhandel und E-Commerce' : 'AIRA transforms Retail & E-commerce'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `De la facturation et du traitement plus rapides des factures à la livraison des produits les meilleurs et les plus pertinents aux clients au bon moment. De l’automatisation de la gestion des stocks aux analyses de ventes prédictives et avancées approfondies.` : lang === 'sp' ? 'Desde facturación y procesamiento de facturas más rápido hasta entregar los mejores y más relevantes productos a los clientes en el momento adecuado. Desde la automatización de la gestión de inventario hasta análisis de ventas avanzados y predictivos en profundidad.' : lang === 'ar' ? 'بدءًا من إعداد الفواتير ومعالجة الفواتير بشكل أسرع وحتى تقديم أفضل المنتجات وأكثرها صلة بالعملاء في الوقت المناسب. من أتمتة إدارة المخزون إلى تحليلات المبيعات التنبؤية والمتقدمة المتعمقة.' : lang === 'gr' ? 'Von der schnelleren Abrechnung und Rechnungsbearbeitung bis hin zur Lieferung der besten und relevantesten Produkte an die Kunden zum richtigen Zeitpunkt. Von der Automatisierung der Bestandsverwaltung bis hin zu tiefgreifenden prädiktiven und erweiterten Verkaufsanalysen.' : 'From faster billing and invoice processing to delivering the best and most relevant products to the customers at the right time. From automating inventory management to in depth predictive and advanced sales analytics.  '}

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 , fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Transformez l'expérience de votre entreprise de vente au détail à travers les processus internes tels que l'intégration des employés et le traitement des factures, ainsi que les processus externes tels que l'optimisation de la portée client et les initiatives de marketing dynamiques grâce à notre plateforme d'hyper-automatisation qui produit un impact via une interface unifiée.` : lang === 'sp' ? 'Transforme su experiencia empresarial minorista a través de procesos internos, como la incorporación de empleados y el procesamiento de facturas, así como procesos externos, como la optimización del alcance del cliente y las iniciativas de marketing dinámicas, con nuestra plataforma de hiperautomatización que genera impacto a través de una interfaz unificada.' : lang === 'ar' ? 'قم بتحويل تجربة مؤسسة البيع بالتجزئة الخاصة بك عبر العمليات الداخلية مثل إعداد الموظفين ومعالجة الفواتير بالإضافة إلى العمليات الخارجية مثل تحسين الوصول إلى العملاء ومبادرات التسويق الديناميكية من خلال نظام التشغيل الآلي الفائق الخاص بنا الذي يوفر التأثير من خلال واجهة موحدة.' : lang === 'gr' ? 'Transformieren Sie Ihr Einzelhandelserlebnis in internen Prozessen wie der Mitarbeitereinstellung und Rechnungsbearbeitung sowie in externen Prozessen wie der Optimierung der Kundenreichweite und dynamischen Marketinginitiativen mit unserer Hyperautomatisierungsplattform, die über eine einheitliche Schnittstelle Wirkung erzielt.' : 'Transform your retail enterprise experience across internal processes such as employee onboarding and invoice processing as well as external processes such as customer reach optimization and dynamic marketing initiatives with our hyper-automation platform delivering impact through a unified interface. '}
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
              </span>
              {" "}
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
               
                {lang === 'fr' ? `Avec des comportements numériques en constante évolution et des exigences toujours croissantes de personnalisation accrue, le commerce de détail l’industrie bénéficie grandement des capacités d’hyper-automatisation deAIRA, avec la combinaison double rafale d'un RPA fiable mis à l'échelle par l'IA adaptative. ` : lang === 'sp' ? 'Con comportamientos digitales en constante evolución y demandas cada vez mayores de mayor personalización, el comercio minorista La industria se beneficia enormemente de las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa. ' : lang === 'ar' ? 'مع السلوكيات الرقمية المتطورة باستمرار والطلبات المتزايدة باستمرار لمزيد من التخصيص، تستفيد صناعة البيع بالتجزئة بشكل كبير من قدرات الأتمتة المفرطة لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي.' : lang === 'gr' ? 'Angesichts der sich ständig weiterentwickelnden digitalen Verhaltensweisen und der ständig steigenden Anforderungen an mehr Personalisierung ist der Einzelhandel immer wichtiger geworden Die Industrie profitiert in hohem Maße von den Hyperautomatisierungsfähigkeiten vonAIRA, mit der Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI. ' : ' With digital behaviors ever evolving and ever increasing demands of more personalization, the retail industry benefits highly from the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI. '}
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
                          {lang === 'fr' ? `Analyse prédictive et en temps réel des agents numériques pour l'élaboration de stratégies et la rationalisation` : lang === 'sp' ? 'Análisis de agentes digitales predictivos y en tiempo real para elaborar estrategias y optimizar' : lang === 'ar' ? 'تحليلات الوكيل الرقمي التنبؤية في الوقت الفعلي لوضع الاستراتيجيات وتبسيطها' : lang === 'gr' ? 'Echtzeit- und prädiktive Digital Agent Analytics zur Strategieentwicklung und Rationalisierung' : ' Real-time and Predictive Digital Agent Analytics for strategizing and streamlining.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Gérer les communications internes et externes à travers les catégories de produits en référence croisée avec les segments de clientèle` : lang === 'sp' ? 'Gestionar las comunicaciones internas y externas en todas las categorías de productos con referencias cruzadas con segmentos de clientes.' : lang === 'ar' ? 'إدارة الاتصالات الداخلية والخارجية عبر فئات المنتجات المرجعية مع شرائح العملاء' : lang === 'gr' ? 'Verwalten Sie interne und externe Kommunikation über Produktkategorien hinweg mit Querverweisen zu Kundensegmenten' : '  Manage internal and external communications across product categories cross referenced with customer segments.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Rationalisez vos initiatives marketing à la fois numériques et hors ligne sur tous les entonnoirs et points de contact numériques pertinents.` : lang === 'sp' ? 'Optimice sus iniciativas de marketing, tanto digitales como fuera de línea, en todos los embudos y puntos de contacto digitales relevantes.' : lang === 'ar' ? 'قم بتبسيط مبادراتك التسويقية سواء الرقمية أو غير المتصلة بالإنترنت عبر جميع مسارات التحويل ونقاط الاتصال الرقمية ذات الصلة.' : lang === 'gr' ? 'Optimieren Sie Ihre Marketinginitiativen sowohl digital als auch offline über alle relevanten Trichter und digitalen Touchpoints hinweg.' : 'Streamline your marketing initiatives both digital and offline across all relevant funnels and digital touchpoints.'}
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
                    {lang === 'fr' ? `Améliorer l'excellence du commerce de détail` : lang === 'sp' ? 'Mejorar la excelencia minorista' : lang === 'ar' ? 'تعزيز التميز في مجال البيع بالتجزئة' : lang === 'gr' ? 'Verbessern Sie die Einzelhandelsexzellenz' : '  Enhance Retail Excellence'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Analyses avancées continues pour la gestion des stocks et les comportements des clients` : lang === 'sp' ? 'Análisis avanzado continuo tanto para la gestión de inventario como para el comportamiento de los clientes.' : lang === 'ar' ? 'التحليلات المتقدمة المستمرة لكل من إدارة المخزون وسلوكيات العملاء' : lang === 'gr' ? 'Kontinuierliche erweiterte Analysen sowohl für die Bestandsverwaltung als auch für das Kundenverhalten' : 'Continuous Advanced Analytics for both inventory management and customer behaviours.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Prévoyez les goulots d'étranglement du parcours client et évitez les frictions dans les entonnoirs` : lang === 'sp' ? 'Prediga los cuellos de botella en el recorrido del cliente y evite la fricción en los embudos' : lang === 'ar' ? 'توقع الاختناقات في رحلة العميل واستبق الاحتكاك في مسارات التحويل' : lang === 'gr' ? 'Prognostizieren Sie Engpässe bei der Customer Journey und verhindern Sie Reibungen in den Trichtern' : 'Predict Customer Journey bottlenecks and preempt friction in the funnels.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Créez des règles et des exceptions personnalisées pour les campagnes et les événements basés sur le temps et les déclencheurs.` : lang === 'sp' ? 'Cree reglas y excepciones personalizadas para campañas y eventos basados en tiempo y activadores.' : lang === 'ar' ? 'قم ببناء قواعد واستثناءات مخصصة للحملات والأحداث المستندة إلى الوقت وتشغيلها.' : lang === 'gr' ? 'Erstellen Sie benutzerdefinierte Regeln und Ausnahmen für zeitbasierte und auslöserbasierte Kampagnen und Ereignisse.' : 'Build custom rules and exceptions for time based and trigger based campaigns and events.'}
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
                    {lang === 'fr' ? `Améliorer l'excellence du service` : lang === 'sp' ? 'Escalar la excelencia en el servicio' : lang === 'ar' ? 'مقياس التميز في الخدمة' : lang === 'gr' ? 'Skalieren Sie Service-Exzellenz' : 'Scale Service Excellence'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Accélérez le traitement des factures et la maintenance des dossiers de facturation` : lang === 'sp' ? 'Acelere el procesamiento de facturas y el mantenimiento de registros de facturación' : lang === 'ar' ? 'تسريع معالجة الفواتير وصيانة سجل الفواتير' : lang === 'gr' ? 'Beschleunigen Sie die Rechnungsverarbeitung und die Pflege von Rechnungsdatensätzen' : ' Accelerate invoice processing and billing record maintenance.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Supprimez les ambiguïtés logistiques et maintenez des inventaires robustes et sécurisés de manière préventive` : lang === 'sp' ? 'Eliminar ambigüedades logísticas y mantener inventarios sólidos y seguros de forma preventiva' : lang === 'ar' ? 'إزالة الغموض اللوجستي والحفاظ على مخزونات قوية وآمنة بشكل استباقي' : lang === 'gr' ? 'Beseitigen Sie logistische Unklarheiten und pflegen Sie präventiv robuste und sichere Bestände' : ' Remove logistical ambiguities and maintain robust and secure inventories preemptively.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Planifiez et adaptez les fréquences de commandes optimales pour éliminer le gaspillage de ressources et opérationnel` : lang === 'sp' ? 'Planificar y escalar frecuencias de pedidos óptimas para eliminar el desperdicio operativo y de recursos.' : lang === 'ar' ? 'تخطيط وتوسيع نطاق ترددات الطلب الأمثل لإزالة هدر الموارد والتشغيل' : lang === 'gr' ? 'Planen und skalieren Sie optimale Bestellfrequenzen, um Ressourcen- und Betriebsverschwendung zu vermeiden' : ' Plan and scale optimal order frequencies to remove resource and operational wastage.'}
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
            {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Mit AIRA' : 'Leverage AIRA for your Enterprise Today'}
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
