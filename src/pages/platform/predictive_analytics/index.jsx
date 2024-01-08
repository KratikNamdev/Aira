import React,{useState,useEffect} from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,CircularProgress
} from "@mui/material";

import Colors from '@/common/Colorscomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";
import { LiaArrowDownSolid, LiaCoinsSolid, LiaCommentAltSolid, LiaMoneyBillAltSolid } from "react-icons/lia";
import BtnLeftImageRightCard from '@/common/BtnLeftImageRightCardcomponents';
import BtnRightImageLeftCard from '@/common/BtnRightImageLeftCardcomponents';
import _ from "lodash";
import { useRouter } from 'next/router';
import Slider from "react-slick";


const IMGBASEURL = "/images/careers";

const LR_ITEMS = [
  {
    cardTitle: "Anticiper les tendances",
    cardDesc:
      "AIRA Predictive Analytics exploite des données historiques et en temps réel pour dévoiler les tendances, fournissant ainsi des informations exploitables pour la prise de décision stratégique.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Optimiser les opérations",
    cardDesc:
      "Bénéficiez d'un avantage stratégique en anticipant les évolutions du marché, en optimisant les opérations et en gardant une longueur d'avance dans un paysage commercial en évolution dynamique grâce aux prouesses prédictives d'AIRA.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Perspectives stratégiques",
    cardDesc:
      "Découvrez des informations précieuses à partir de vos données, permettant à votre entreprise de prendre des décisions éclairées et de s'adapter de manière proactive aux changements du marché avec AIRA Predictive Analytics.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS1 = [
  {
    cardTitle: "Anticiparse a las tendencias",
    cardDesc:
      "AIRA Predictive Analytics aprovecha los datos históricos y en tiempo real para revelar tendencias y proporcionar información útil para la toma de decisiones estratégicas.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Optimizar operaciones",
    cardDesc:
      "Obtenga una ventaja estratégica anticipándose a los cambios del mercado, optimizando las operaciones y manteniéndose a la vanguardia en un panorama empresarial que evoluciona dinámicamente con la destreza predictiva de AIRA.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Perspectivas estratégicas",
    cardDesc:
      "Descubra información valiosa a partir de sus datos, lo que permitirá a su empresa tomar decisiones informadas y adaptarse a los cambios del mercado de forma proactiva con AIRA Predictive Analytics.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS2 = [
  {
    cardTitle: "توقع الاتجاهات",
    cardDesc:
      "تستفيد التحليلات التنبؤية من AIRA من البيانات التاريخية وفي الوقت الفعلي للكشف عن الاتجاهات، وتوفير رؤى قابلة للتنفيذ لاتخاذ القرارات الإستراتيجية",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "تحسين العمليات",
    cardDesc:
      "احصل على ميزة استراتيجية من خلال توقع تحولات السوق، وتحسين العمليات، والبقاء في المقدمة في مشهد أعمال متطور ديناميكيًا مع براعة AIRA التنبؤية.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "رؤى استراتيجية",
    cardDesc:
      "اكتشف رؤى قيمة من بياناتك، مما يسمح لمؤسستك باتخاذ قرارات مستنيرة والتكيف مع تغيرات السوق بشكل استباقي باستخدام تحليلات AIRA التنبؤية.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS3 = [
  {
    cardTitle: "Trends antizipieren",
    cardDesc:
      "AIRA Predictive Analytics nutzt historische Daten und Echtzeitdaten, um Trends aufzudecken und umsetzbare Erkenntnisse für die strategische Entscheidungsfindung zu liefern.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Abläufe optimieren",
    cardDesc:
      "Verschaffen Sie sich mit der Prognosefähigkeit von AIRA einen strategischen Vorteil, indem Sie Marktveränderungen antizipieren, Abläufe optimieren und in einer sich dynamisch entwickelnden Geschäftslandschaft an der Spitze bleiben.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Strategische Einblicke",
    cardDesc:
      "Gewinnen Sie wertvolle Erkenntnisse aus Ihren Daten, damit Ihr Unternehmen mit AIRA Predictive Analytics fundierte Entscheidungen treffen und sich proaktiv an Marktveränderungen anpassen kann.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS4 = [
  {
    cardTitle: "Anticipate Trends",
    cardDesc:
      "AIRA Predictive Analytics leverages historical and real-time data to unveil trends, providing actionable insights for strategic decision-making.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Optimise Operations",
    cardDesc:
      " Gain a strategic advantage by anticipating market shifts, optimising operations, and staying ahead in a dynamically evolving business landscape with AIRA's predictive prowess.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Strategic Insights",
    cardDesc:
      "Uncover valuable insights from your data, allowing your enterprise to make informed decisions and adapt to market changes proactively with AIRA Predictive Analytics.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
  }, []);
  const router = useRouter();
  const [BLOGS, setBLOGS] = useState([]);
  const [loading, setLoading] = useState(true);


  const [val, setVal] = useState({
    category: "",
    type: "",
  });



  useEffect(() => {
    getData();
  }, [val?.category, val?.type]);

  const getData = async () => {
    setLoading(true); // Set loading to true when starting to fetch data
    try {
      let resp = await fetch(`https://aira-zij7.onrender.com/useCase/getUseCases?status=true&category=${val.category}&type=${val.type}`);
      let data = await resp?.json();
      setBLOGS(data?.data);
      setData1(data?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after data is fetched (whether successful or not)
    }
  };
  
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

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
                    {lang === 'fr' ? `Informations préventives. Impact rationalisé.` : lang === 'sp' ? 'Perspectivas preventivas. Impacto optimizado.' : lang === 'ar' ? 'رؤى استباقية. تأثير مبسط.' : lang === 'gr' ? 'Präventive Erkenntnisse. Optimierte Wirkung.' : 'Preemptive Insights. Streamlined Impact.'}
                    <br />
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Analyse prédictive dans AIRA` : lang === 'sp' ? 'Análisis predictivo en AIRA' : lang === 'ar' ? 'التحليلات التنبؤية في AIRA' : lang === 'gr' ? 'Prädiktive Analysen in AIRA' : 'Predictive Analytics in AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Prévoyez les anomalies et rationalisez l’automatisation des processus sans gaspillage de ressources.` : lang === 'sp' ? 'Prediga anomalías y agilice la automatización de procesos sin desperdiciar recursos.' : lang === 'ar' ? 'توقع الحالات الشاذة وتبسيط أتمتة العمليات دون إهدار الموارد.' : lang === 'gr' ? 'Sagen Sie Anomalien voraus und optimieren Sie die Prozessautomatisierung ohne Ressourcenverschwendung.' : 'Predict anomalies and streamline process automation without resource wastage.'}
                  </Typography>

                  {/* <div className="btn_group">
                    <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                    {lang === 'fr' ? `Essayez AIRA pour votre entreprise` : lang === 'sp' ? 'Pruebe AIRA para su empresa' : lang === 'ar' ? 'جرب AIRA لمؤسستك' : lang === 'gr' ? 'Testen Sie AIRA für Ihr Unternehmen' : 'Try AIRA for your Enterprise'}
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                    <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                    {lang === 'fr' ? `Réservez un appel de démonstration` : lang === 'sp' ? 'Reserve una llamada de demostración' : lang === 'ar' ? 'حجز مكالمة تجريبية' : lang === 'gr' ? 'Buchen Sie einen Demo-Anruf' : 'Book a Demo Call'}
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                  </div> */}
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/bankingheader10.png"
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

      <Box sx={{ backgroundColor: '#6755DF', pt: 8, pb: 1, mt: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, color: "white" }}>
            {lang === 'fr' ? `Supprimez les ambiguïtés,` : lang === 'sp' ? 'Eliminar ambigüedades,' : lang === 'ar' ? 'واكتشاف الاحتمالات.' : lang === 'gr' ? 'Unklarheiten beseitigen,' : '  Remove ambiguities,'} {' '}
            <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `découvrez les possibilités.` : lang === 'sp' ? 'descubrir posibilidades.' : lang === 'ar' ? 'إزالة الغموض،' : lang === 'gr' ? 'Möglichkeiten entdecken.' : 'discover possibilities.'}
            </span>
          </Typography>

          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Réalisez une hyper-automatisation basée sur les données avec une compréhension parfaitement claire des défis, des goulots d’étranglement et des obstacles sur la voie à suivre.` : lang === 'sp' ? 'Lleve a cabo una hiperautomatización basada en datos con una comprensión clara de los desafíos, cuellos de botella y obstáculos en el camino a seguir.' : lang === 'ar' ? 'قم بإجراء أتمتة مفرطة تعتمد على البيانات مع فهم واضح تمامًا للتحديات والاختناقات والحواجز في الطريق إلى الأمام.' : lang === 'gr' ? 'Führen Sie eine datengesteuerte Hyperautomatisierung mit einem kristallklaren Verständnis der Herausforderungen, Engpässe und Hindernisse auf dem weiteren Weg durch.' : 'Conduct data-driven hyper-automation with crystal clear understanding of the challenges, bottlenecks and roadblocks in the way forward.'}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `L'analyse prédictive permet à la transformation de votre entreprise non seulement de savoir où et où l'hyper-automatisation a le plus d'impact, mais également de sélectionner les mesures appropriées à évaluer, surveiller et améliorer.` : lang === 'sp' ? 'El análisis predictivo permite que la transformación de su empresa no solo sepa dónde y dónde la hiperautomatización genera el mayor impacto, sino que también seleccione las métricas adecuadas para medir, monitorear y mejorar.' : lang === 'ar' ? 'تعمل التحليلات التنبؤية على تمكين تحول مؤسستك ليس فقط من معرفة أين وأين تحقق الأتمتة الفائقة التأثير الأكبر، ولكن أيضًا تحديد المقاييس المناسبة للقياس والمراقبة والتحسين.' : lang === 'gr' ? 'Predictive Analytics ermöglicht es Ihrer Unternehmenstransformation, nicht nur zu wissen, wo und wo die Hyperautomatisierung die größte Wirkung erzielt, sondern auch die richtigen Metriken auszuwählen, um sie zu messen, zu überwachen und zu verbessern.' : 'Predictive Analytics enables your enterprise transformation to not only know where and where the hyper-automation delivers the most impact, but also select the right metrics to gauge, monitor and improve.'}
          </Typography>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#6755DF', pb: 8, pt: 3 }}>
        <Container maxWidth="lg">
          <Grid container spacing={12}>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px',minHeight:'300px' }}>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Typography color={'#6755DF'}>
                  {lang === 'fr' ? `Deloitte` : lang === 'sp' ? 'Deloitte' : lang === 'ar' ? 'ديلويت' : lang === 'gr' ? 'Deloitte' : 'Deloitte'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  20-40%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `L'analyse prédictive dans le secteur manufacturier réduit les temps d'arrêt` : lang === 'sp' ? 'El análisis predictivo en la fabricación reduce el tiempo de inactividad' : lang === 'ar' ? 'التحليل التنبؤي في التصنيع يقلل من وقت التوقف عن العمل' : lang === 'gr' ? 'Vorausschauende Analysen in der Fertigung reduzieren Ausfallzeiten' : 'Predictive analysis in manufacturing reduces downtime.'}
                  </Typography>
                  {/* <Link style={{ textDecoration: 'none', color: '#6755DF' }} href="/">
                    <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                      <Typography sx={{ mr: 1 }}>
                        Learn more
                      </Typography>
                      <BsArrowRight size={25} color='#6755DF' />
                    </Stack>
                  </Link> */}
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px',minHeight:'300px' }}>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Typography color={'#6755DF'}>
                  {lang === 'fr' ? `McKinsey` : lang === 'sp' ? 'McKinsey' : lang === 'ar' ? 'ماكينزي' : lang === 'gr' ? 'McKinsey' : 'McKinsey'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  20-30%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `L'analyse prédictive dans l'industrie textile améliore la précision des prévisions de la demande` : lang === 'sp' ? 'El análisis predictivo en la industria textil mejora la precisión de la previsión de la demanda' : lang === 'ar' ? 'يعمل التحليل التنبئي في صناعة النسيج على تحسين دقة التنبؤ بالطلب' : lang === 'gr' ? 'Prädiktive Analysen in der Textilindustrie verbessern die Genauigkeit der Nachfrageprognose' : 'Predictive analysis in the textile industry improves demand forecasting accuracy.'}
                  </Typography>
                  {/* <Link style={{ textDecoration: 'none', color: '#6755DF' }} href="/">
                    <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                      <Typography sx={{ mr: 1 }}>
                        Learn more
                      </Typography>
                      <BsArrowRight size={25} color='#6755DF' />
                    </Stack>
                  </Link> */}
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px',minHeight:'300px' }}>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Typography color={'#6755DF'}>
                  {lang === 'fr' ? `PWC` : lang === 'sp' ? 'PwC' : lang === 'ar' ? 'برايس ووترهاوس كوبرز' : lang === 'gr' ? 'PwC' : 'PwC'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                    30-40%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `L'analyse prédictive dans le secteur bancaire améliore la précision de la détection des fraudes` : lang === 'sp' ? 'El análisis predictivo en banca mejora la precisión de la detección de fraude' : lang === 'ar' ? 'التحليل التنبؤي في الأعمال المصرفية يعزز دقة الكشف عن الاحتيال' : lang === 'gr' ? 'Prädiktive Analysen im Bankwesen erhöhen die Genauigkeit der Betrugserkennung' : 'Predictive analysis in banking enhances fraud detection accuracy.'}
                  </Typography>
                  {/* <Link style={{ textDecoration: 'none', color: '#6755DF' }} href="/">
                    <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                      <Typography sx={{ mr: 1 }}>
                        Learn more
                      </Typography>
                      <BsArrowRight size={25} color='#6755DF' />
                    </Stack>
                  </Link> */}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ background: '#fff', py: 10 }}>
        <Container maxWidth='lg'>
          <Stack>
            <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
              {lang === 'fr' ? `Prédire. Devancer.` : lang === 'sp' ? 'Predecir. Adelantarse a. ' : lang === 'ar' ? 'استباق. تحديد الأولويات.' : lang === 'gr' ? 'Vorhersagen. Vorbeugen. ' : 'Predict. Preempt.'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `Priorisez.` : lang === 'sp' ? 'Priorizar.' : lang === 'ar' ? 'يتنبأ.' : lang === 'gr' ? 'Priorisieren.' : 'Prioritise.'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
              {lang === 'fr' ? `Supprimez toute ambiguïté de votre stratégie d'hyper-automatisation à l'aide de l'analyse prédictive et profitez d'avantages tels que :` : lang === 'sp' ? 'Elimine la ambigüedad de su estrategia de hiperautomatización utilizando Predictive Analytics y aproveche beneficios como:' : lang === 'ar' ? 'قم بإزالة الغموض من إستراتيجية الأتمتة المفرطة الخاصة بك باستخدام التحليلات التنبؤية والاستفادة من المزايا مثل:' : lang === 'gr' ? 'Beseitigen Sie Unklarheiten aus Ihrer Hyperautomatisierungsstrategie mithilfe von Predictive Analytics und nutzen Sie Vorteile wie:' : 'Remove ambiguity from your hyper-automation strategy using Predictive Analytics and leverage benefits such as:'}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Supprimer les écarts de temps` : lang === 'sp' ? 'Eliminar brechas de tiempo' : lang === 'ar' ? 'إزالة الفجوات الزمنية' : lang === 'gr' ? 'Zeitlücken beseitigen' : 'Remove time gaps'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Grâce aux intégrations sans code, à la mise à jour continue native dans le cloud et à l'interface personnalisée basée sur un navigateur, le lancement et l'adaptation d'AIRA pour les entreprises deviennent extrêmement rapides et faciles, réduisant ainsi les écarts de temps entre la planification et la mise en œuvre.` : lang === 'sp' ? 'Con integraciones sin código, actualización continua nativa de la nube y una interfaz personalizada basada en navegador, lanzar y adaptar AIRA para empresas se vuelve extremadamente rápido y fácil, lo que reduce los intervalos de tiempo entre la planificación y la implementación.' : lang === 'ar' ? 'من خلال عمليات التكامل بدون تعليمات برمجية، والتحديث المستمر السحابي الأصلي والواجهة المخصصة القائمة على المتصفح، يصبح إطلاق AIRA وتكييفه للمؤسسات سريعًا وسهلاً للغاية، مما يقلل الفجوات الزمنية بين التخطيط والتنفيذ.' : lang === 'gr' ? 'Mit No-Code-Integrationen, Cloud-nativer kontinuierlicher Aktualisierung und einer browserbasierten benutzerdefinierten Schnittstelle wird die Einführung und Anpassung von AIRA für Unternehmen außerordentlich schnell und einfach, wodurch die Zeitlücken zwischen Planung und Implementierung reduziert werden.' : 'With no-code integrations, cloud-native continuous updation and browser-based custom interface, launching and adapting AIRA for enterprise becomes exceedingly fast and easy, reducing time gaps between planning and implementation.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaMoneyBillAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Impact des empreintes digitales` : lang === 'sp' ? 'Impacto de las huellas dactilares' : lang === 'ar' ? 'تأثير البصمة' : lang === 'gr' ? 'Auswirkungen von Fingerabdrücken' : ' Fingerprinting Impact'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `La surveillance représente la moitié de la bataille, l’autre moitié étant de disposer des bons indicateurs pour évaluer l’impact. Des filtres de données et des tableaux de bord personnalisables ainsi que des modèles communautaires et personnalisés vous aident à avoir un impact précis sur les empreintes digitales. .` : lang === 'sp' ? 'El monitoreo es la mitad de la batalla, tener las métricas adecuadas para medir el impacto es la otra mitad. Los paneles y filtros de datos personalizables, junto con las plantillas comunitarias y personalizadas, le ayudan a determinar el impacto de las huellas dactilares con precisión. .' : lang === 'ar' ? 'إن المراقبة هي نصف المعركة، أما الحصول على المقاييس الصحيحة لقياس التأثير فهو النصف الآخر. تساعدك عوامل تصفية البيانات ولوحات المعلومات القابلة للتخصيص إلى جانب القوالب المجتمعية والمخصصة على التأثير بدقة على بصمات الأصابع. .' : lang === 'gr' ? 'Überwachung ist die halbe Miete, die richtige Metrik zur Messung der Wirkung ist die andere Hälfte. Anpassbare Datenfilter und Dashboards sowie Community- und benutzerdefinierte Vorlagen helfen dabei, die Auswirkungen genau zu erfassen. .' : 'Monitoring is half the battle, having the right metrics to gauge impact is the other half. Customizable data filters and dashboards along with community and custom templates help you fingerprint impact accurately.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaCommentAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Éliminez le taux de désabonnement.` : lang === 'sp' ? 'Eliminar la deserción.' : lang === 'ar' ? 'القضاء على الزبد.' : lang === 'gr' ? 'Eliminieren Sie die Abwanderung.' : 'Eliminate Churn.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Avec Predictive Analytics, la perte de ressources devient une chose du passé grâce à une compréhension parfaitement claire de l'endroit où réorienter, investir et surveiller les ressources critiques sans avoir à procéder à une mise en œuvre d'hyper-automatisation avec des conjectures.` : lang === 'sp' ? 'Con Predictive Analytics, la pérdida de recursos se convierte en una cosa del pasado debido a una comprensión muy clara de dónde desviar, invertir y monitorear los recursos críticos sin tener que realizar una implementación de hiperautomatización con conjeturas.' : lang === 'ar' ? 'باستخدام التحليلات التنبؤية، يصبح تغيير الموارد شيئًا من الماضي بسبب الفهم الواضح تمامًا لمكان تحويل الموارد الحيوية واستثمارها ومراقبتها دون الاضطرار إلى إجراء تنفيذ أتمتة مفرطة باستخدام التخمين.' : lang === 'gr' ? 'Mit Predictive Analytics gehört die Abwanderung von Ressourcen der Vergangenheit an, da ein kristallklares Verständnis dafür entsteht, wohin kritische Ressourcen umgeleitet, investiert und überwacht werden müssen, ohne dass eine Hyperautomatisierungsimplementierung mit Vermutungen durchgeführt werden muss.' : 'With Predictive Analytics, resource churn becomes a thing of the past due to a crystal clear understanding of where to divert, invest, and monitor critical resources without having to conduct hyper-automation implementation with guesswork.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaArrowDownSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Planifiez aujourd’hui, transformez demain.` : lang === 'sp' ? 'Con Predictive Analytics, identifique dónde la hiperautomatización genera el mayor impacto con la ayuda de monitoreo en tiempo real y análisis preparados para el futuro para mitigar los cuellos de botella.' : lang === 'ar' ? 'خطط اليوم، وتحول غدًا.' : lang === 'gr' ? 'Planen Sie heute, transformieren Sie morgen.' : 'Predictive Analytics'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                {lang === 'fr' ? `Avec l'analyse prédictive, identifiez les domaines où l'hyper-automatisation a le plus d'impact à l'aide d'une surveillance en temps réel et d'analyses évolutives pour atténuer les goulots d'étranglement.` : lang === 'sp' ? 'Con Predictive Analytics, identifique dónde la hiperautomatización genera el mayor impacto con la ayuda de monitoreo en tiempo real y análisis preparados para el futuro para mitigar los cuellos de botella.' : lang === 'ar' ? 'باستخدام التحليلات التنبؤية، حدد المكان الذي تحقق فيه الأتمتة الفائقة التأثير الأكبر بمساعدة المراقبة في الوقت الفعلي والتحليلات المستقبلية للتخفيف من الاختناقات.' : lang === 'gr' ? 'Mit Predictive Analytics können Sie mithilfe von Echtzeitüberwachung und zukunftssicheren Analysen genau feststellen, wo die Hyperautomatisierung die größte Wirkung erzielt, um Engpässe zu mindern.' : 'With Predictive Analytics, pinpoint where the hyper-automation delivers most impact with help of real-time monitoring and future-proof analytics to mitigate bottlenecks.'}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Box sx={{ backgroundColor: '#F0F0F0', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      <Container maxWidth="lg" sx={{ my: 10 }}>
        <Stack gap={4}>
        {
          lang === "fr" ? LR_ITEMS.map((lrItem, lrIdx) => {
            let { direction, imgSrc, ...restItems } = lrItem;
            imgSrc = `${IMGBASEURL}/${imgSrc}`;
            return (
              <Box key={lrIdx} gap={1}>
                {_.isEqual(direction, "left") ? (
                  <BtnLeftImageRightCard imgSrc={imgSrc} {...restItems} />
                ) : (
                  <BtnRightImageLeftCard imgSrc={imgSrc} {...restItems} />
                )}
              </Box>
            );
          }) : lang === "sp" ? LR_ITEMS1.map((lrItem, lrIdx) => {
            let { direction, imgSrc, ...restItems } = lrItem;
            imgSrc = `${IMGBASEURL}/${imgSrc}`;
            return (
              <Box key={lrIdx} gap={1}>
                {_.isEqual(direction, "left") ? (
                  <BtnLeftImageRightCard imgSrc={imgSrc} {...restItems} />
                ) : (
                  <BtnRightImageLeftCard imgSrc={imgSrc} {...restItems} />
                )}
              </Box>
            );
          }) : lang === "ar" ? LR_ITEMS2.map((lrItem, lrIdx) => {
            let { direction, imgSrc, ...restItems } = lrItem;
            imgSrc = `${IMGBASEURL}/${imgSrc}`;
            return (
              <Box key={lrIdx} gap={1}>
                {_.isEqual(direction, "left") ? (
                  <BtnLeftImageRightCard imgSrc={imgSrc} {...restItems} />
                ) : (
                  <BtnRightImageLeftCard imgSrc={imgSrc} {...restItems} />
                )}
              </Box>
            );
          }) : lang === "gr" ? LR_ITEMS3.map((lrItem, lrIdx) => {
            let { direction, imgSrc, ...restItems } = lrItem;
            imgSrc = `${IMGBASEURL}/${imgSrc}`;
            return (
              <Box key={lrIdx} gap={1}>
                {_.isEqual(direction, "left") ? (
                  <BtnLeftImageRightCard imgSrc={imgSrc} {...restItems} />
                ) : (
                  <BtnRightImageLeftCard imgSrc={imgSrc} {...restItems} />
                )}
              </Box>
            );
          }) : LR_ITEMS4?.map((lrItem, lrIdx) => {
            let { direction, imgSrc, ...restItems } = lrItem;
            imgSrc = `${IMGBASEURL}/${imgSrc}`;
            return (
              <Box key={lrIdx} gap={1}>
                {_.isEqual(direction, "left") ? (
                  <BtnLeftImageRightCard imgSrc={imgSrc} {...restItems} />
                ) : (
                  <BtnRightImageLeftCard imgSrc={imgSrc} {...restItems} />
                )}
              </Box>
            );
          })
        } 
          
        </Stack>
      </Container>

     

      <Box sx={{py: 2}}></Box>
      {/* <Box sx={{ backgroundColor: '#F0F0F0', py: 10, mb: 5 }}>
        <Container maxWidth="lg">
          <Stack>
            <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
              More <span style={{ color: Colors.airaSecondary }}>in Banking Automation</span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2, mb: 4 }}>
              Dont miss these resources, upcoming events, and recaps
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
      <Box sx={{ backgroundColor: "#F0F0F0", py: 10 }}>
        <Container maxWidth="lg">
          <Stack>
            <Typography
              fontSize={"40px"}
              variant="h4"
              sx={{ fontWeight: 700, textAlign: "center" }}
            >
              CASE STUDY
            </Typography>
            <Typography
              textAlign={"center"}
              fontSize={"20"}
              sx={{ mt: 2, mb: 4 }}
            >
              Dont miss these resources, upcoming events, and recaps
            </Typography>
          </Stack>
          {BLOGS?.length > 0 ? (
            <Slider {...settings}>
              {BLOGS?.map((blogItem, blogIdx) => {
                return (
                  <>
                    <div style={{marginRight: "20px", height: "400px", backgroundColor: "#FFF" , position: "relative"}}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "200px",
                          backgroundImage: `url(${blogItem?.img?.url})`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                      ></Box>
                      <Stack
                        className="stack1"
                        direction={"column"}
                        sx={{ backgroundColor: "#fff", p: 3 }}
                      >
                        <Typography
                          className="span1"
                          fontSize={"14px"}
                          color={"#6755DF"}
                          sx={{ mt: 1 }}
                        >
                          CASE STUDY
                        </Typography>
                        <Typography
                          className="span1"
                          lineHeight={"28px"}
                          fontSize={"20px"}
                          color={"#6755DF"}
                          sx={{ mt: 1 }}
                        >
                          {blogItem?.title}
                        </Typography>
                        {/* <Typography fontSize={"16px"} sx={{ mt: 1 }} dangerouslySetInnerHTML={{ __html: blogItem?.desc.slice(0, 100) + "..." }}>
                        
                        </Typography> */}
                        <Link
                          className="span"
                          style={{ textDecoration: "none", color: "#FFAF00" }}
                          href={`/success_stories/${blogItem?.slug}`}
                        >
                          <Stack
                          sx={{ position: "absolute", bottom: 30, left: 30, width: "100%" }}
                            direction={"row"}
                            alignItems={"center"}
                          >
                            <Typography className="span" sx={{ mr: 1 }}>
                              Read More
                            </Typography>
                            <BsArrowRight size={25} color="#FFAF00" />
                          </Stack>
                        </Link>
                      </Stack>
                    </div>
                  </>
                );
              })}
            </Slider>
          ) : (
            "No data found"
          )}
          <Grid container spacing={3}>
            {/* <Grid className='tech1' item xs={12} md={4}>
              <Box className="tech" sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack className='stack1' direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography className='span1' fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  WHITE PAPER
                </Typography>
                <Typography className='span1' lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link className='span' style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography className='span' sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid className='tech1' item xs={12} md={4}>
              <Box className='tech' sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack className='stack1' direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography className='span1' fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  WEBINAR
                </Typography>
                <Typography className='span1' lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link className='span' style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography className='span' sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid className='tech1' item xs={12} md={4}>
              <Box className='tech' sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography className='span1' fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  WHITE PAPER
                </Typography>
                <Typography className='span1' lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link className='span' style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography className='span' sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid> */}
          </Grid>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: '#F0F0F0', py: 10, mb: 3 }}>
        <Container maxWidth="lg">
          <Stack>
            <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
              {lang === 'fr' ? `Recueillez des informations et mettez en œuvre des initiatives claires,` : lang === 'sp' ? 'Obtenga información e implemente iniciativas muy claras' : lang === 'ar' ? 'اجمع المعرفة ونفذ مبادرات واضحة تمامًا' : lang === 'gr' ? 'Sammeln Sie Einblicke und setzen Sie kristallklare Initiativen' : 'Gather insight and implement crystal clear'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `comme jamais auparavant.` : lang === 'sp' ? 'como nunca antes.' : lang === 'ar' ? '، كما لم يحدث من قبل.' : lang === 'gr' ? 'um wie nie zuvor.' : 'initiatives, like never before.'}
              </span>
            </Typography>
            {/* <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2, mb: 4 }}>
              AIRA is a one stop Robotic Process Automation platform that enables you to leverage benefits without costs or disruptions.


            </Typography> */}

            <div className="btn_group btn-group1">
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
          </Stack>
          {/* <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to AIRA—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
          </Grid> */}
        </Container>
      </Box>

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

export default Index