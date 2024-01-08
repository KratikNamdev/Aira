import React,{useState,useEffect} from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  CircularProgress
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
    cardTitle: "Précision prédictive",
    cardDesc:
      "L'analyse avancée d'AIRA exploite la puissance de la modélisation prédictive, offrant à votre entreprise la capacité de prévoir les tendances, de prendre des décisions éclairées et de garder une longueur d'avance dans des paysages commerciaux dynamiques.",
    imgSrc: `reach_out_10.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Informations personnalisées",
    cardDesc:
      "Adaptez les analyses à vos besoins spécifiques. L'analyse avancée d'AIRA fournit des mesures et des filtres de données personnalisables, vous permettant d'accéder à des informations exploitables alignées sur vos objectifs et stratégies commerciales.",
    imgSrc: `reach_out_11.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Optimisation des ressources",
    cardDesc:
      "Dites adieu à la perte de ressources. Grâce à la surveillance en temps réel et à l'analyse prédictive, identifiez les domaines dans lesquels l'hyper-automatisation a le plus d'impact. Rationalisez les opérations, éliminez les goulots d’étranglement et optimisez l’allocation des ressources sans effort.",
    imgSrc: `reach_out_12.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS1 = [
  {
    cardTitle: "Precisión predictiva",
    cardDesc:
      " El análisis avanzado de AIRA aprovecha el poder del modelado predictivo y ofrece a su empresa la capacidad de prever tendencias, tomar decisiones informadas y mantenerse a la vanguardia en panoramas comerciales dinámicos.",
    imgSrc: `reach_out_10.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Información personalizada",
    cardDesc:
      "Adapte los análisis a sus necesidades específicas. El análisis avanzado de AIRA proporciona métricas y filtros de datos personalizables, lo que le permite acceder a información procesable alineada con sus objetivos y estrategias comerciales.",
    imgSrc: `reach_out_11.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Optimización de recursos",
    cardDesc:
      "Diga adiós a la pérdida de recursos. Con monitoreo en tiempo real y análisis predictivo, identifique áreas donde la hiperautomatización genera el mayor impacto. Optimice las operaciones, elimine los cuellos de botella y optimice la asignación de recursos sin esfuerzo.",
    imgSrc: `reach_out_12.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS2 = [
  {
    cardTitle: "الدقة التنبؤية",
    cardDesc:
      "عمل التحليلات المتقدمة من AIRA على تسخير قوة النمذجة التنبؤية، مما يوفر لمؤسستك القدرة على التنبؤ بالاتجاهات، واتخاذ قرارات مستنيرة، والبقاء في المقدمة في بيئات الأعمال الديناميكية",
    imgSrc: `reach_out_10.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: " مخصصة",
    cardDesc:
      "تخصيص التحليلات لاحتياجاتك المحددة. توفر التحليلات المتقدمة من AIRA مقاييس ومرشحات بيانات قابلة للتخصيص، مما يسمح لك بالوصول إلى رؤى قابلة للتنفيذ تتماشى مع أهداف واستراتيجيات عملك",
    imgSrc: `reach_out_11.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "تحسين الموارد",
    cardDesc:
      "قل وداعًا لتقلب الموارد. من خلال المراقبة في الوقت الفعلي والتحليلات التنبؤية، حدد المناطق التي يحقق فيها التشغيل الآلي الفائق التأثير الأكبر. يمكنك تبسيط العمليات والقضاء على الاختناقات وتحسين تخصيص الموارد دون عناء.",
    imgSrc: `reach_out_12.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS3 = [
  {
    cardTitle: "Prädiktive Präzision",
    cardDesc:
      "AIRAs Advanced Analytics nutzt die Leistungsfähigkeit der prädiktiven Modellierung und bietet Ihrem Unternehmen die Möglichkeit, Trends vorherzusehen, fundierte Entscheidungen zu treffen und in dynamischen Geschäftslandschaften immer einen Schritt voraus zu sein.",
    imgSrc: `reach_out_10.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Maßgeschneiderte Einblicke",
    cardDesc:
      "Passen Sie die Analysen an Ihre spezifischen Bedürfnisse an. AIRAs Advanced Analytics bietet anpassbare Metriken und Datenfilter, sodass Sie auf umsetzbare Erkenntnisse zugreifen können, die auf Ihre Geschäftsziele und -strategien abgestimmt sind.",
    imgSrc: `reach_out_11.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Ressourcenoptimierung",
    cardDesc:
      "Verabschieden Sie sich von der Ressourcenabwanderung. Mit Echtzeitüberwachung und prädiktiven Analysen können Sie Bereiche ermitteln, in denen Hyperautomatisierung die größte Wirkung erzielt. Optimieren Sie Abläufe, beseitigen Sie Engpässe und optimieren Sie die Ressourcenzuteilung mühelos.",
    imgSrc: `reach_out_12.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS4 = [
  {
    cardTitle: "Predictive Precision",
    cardDesc:
      "AIRA's Advanced Analytics harnesses the power of predictive modelling, offering your enterprise the ability to foresee trends, make informed decisions, and stay steps ahead in dynamic business landscapes.",
    imgSrc: `reach_out_10.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Customised Insights",
    cardDesc:
      "Tailor analytics to your specific needs. AIRA's Advanced Analytics provides customizable metrics and data filters, allowing you to access actionable insights aligned with your business goals and strategies.",
    imgSrc: `reach_out_11.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Resource Optimization",
    cardDesc:
      "Say goodbye to resource churn. With real-time monitoring and predictive analytics, pinpoint areas where hyper-automation delivers the most impact. Streamline operations, eliminate bottlenecks, and optimise resource allocation effortlessly.",
    imgSrc: `reach_out_12.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(()=>{
    setLang(localStorage.getItem('lang'));
  },[]);
  const router = useRouter();
  const [BLOGS, setBLOGS] = useState([]);


  const [val, setVal] = useState({
    category: "",
    type: "",
  });
  const [loading, setLoading] = useState(true);



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
                    {lang === 'fr' ? `Mettre en œuvre. Moniteur. Échelle.` : lang==='sp' ? 'Implementar. Monitor. Escala.' : lang==='ar'? 'تنفيذ. مراقب. مقياس.' : lang==='gr' ? 'Implementieren. Monitor. Skala.' : 'Implement. Monitor. Scale.'}
                    <br />
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Analyse avancée dans AIRA` : lang==='sp' ? 'Análisis avanzado en AIRA' : lang==='ar'? 'التحليلات المتقدمة في AIRA' : lang==='gr' ? 'Erweiterte Analysen in AIRA' : ' Advanced Analytics in AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Analyse d’impact approfondie avec fonctionnalités de personnalisation et de priorisation pour une précision d’impact.` : lang==='sp' ? 'Análisis de impacto completo con funcionalidades de personalización y priorización para una precisión del impacto. .' : lang==='ar'? 'تحليلات تأثير العمق الكامل مع وظائف التخصيص وتحديد الأولويات لدقة التأثير. .' : lang==='gr' ? 'Umfassende Wirkungsanalyse mit Anpassungs- und Priorisierungsfunktionen für Wirkungsgenauigkeit.' : 'Full depth impact analytics with customization and prioritisation functionalities for impact accuracy.'}
                  </Typography>

                  {/* <div className="btn_group">
                    <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                    {lang === 'fr' ? `Essayez AIRA pour votre entreprise` : lang==='sp' ? 'Pruebe AIRA para su empresa' : lang==='ar'? 'جرب AIRA لمؤسستك' : lang==='gr' ? 'Testen Sie AIRA für Ihr Unternehmen' : ' Try AIRA for your Enterprise'}
                   
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                    <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                    {lang === 'fr' ? `Réservez un appel de démonstration` : lang==='sp' ? 'Reserve una llamada de demostración' : lang==='ar'? 'حجز مكالمة تجريبية' : lang==='gr' ? 'Buchen Sie einen Demo-Anruf' : ' Book a Demo Call'}
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                  </div> */}
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/bankingheader4.png"
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

      <Box sx={{ backgroundColor: '#6755DF', pt: 8, pb: 1, mt: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, color: "white" }}>
            {lang === 'fr' ? `Creuser en profondeur.` : lang==='sp' ? 'Cavar profundo.' : lang==='ar'? 'أحفر اعمق. صقل' : lang==='gr' ? 'Tief graben.' : ' Dig deep.'} {' '}
            <span style={{ color: Colors.airaSecondary }}>
              
              {lang === 'fr' ? `Affiner l'or.` : lang==='sp' ? 'Refinar oro.' : lang==='ar'? 'الذهب.' : lang==='gr' ? 'Gold veredeln.' : 'Refine gold.'}
            </span>
          </Typography>

          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Non seulement il est nécessaire de garantir des écarts minimaux tout en maintenant une couverture analytique continue, mais il est également essentiel de sélectionner des mesures d'analyse d'impact spécifiquement adaptées à votre entreprise.` : lang==='sp' ? 'No solo es necesario garantizar brechas mínimas y al mismo tiempo mantener una cobertura analítica continua, sino que también es fundamental seleccionar métricas de análisis de impacto adaptadas específicamente a su empresa.' : lang==='ar'? 'ليس من الضروري فقط ضمان الحد الأدنى من الفجوات مع الحفاظ على تغطية التحليلات المستمرة، ولكن من المهم أيضًا تحديد مقاييس تحليلات التأثير المصممة خصيصًا لمؤسستك.' : lang==='gr' ? 'Es ist nicht nur notwendig, minimale Lücken zu gewährleisten und gleichzeitig eine kontinuierliche Analyseabdeckung aufrechtzuerhalten, sondern es ist auch wichtig, speziell auf Ihr Unternehmen zugeschnittene Impact-Analyse-Metriken auszuwählen.' : ' Not only is it necessary to ensure minimal gaps while maintaining continuous analytics coverage, but it is also critical to select impact analytics metrics tailored to your enterprise specifically.'}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
          {lang === 'fr' ? `Avec Advanced Analytics dans AIRA, la surveillance, le reporting, la collaboration et l'amélioration de votre succès d'hyper-automatisation au niveau supérieur deviennent non seulement possibles, mais simplifiés au-delà de toute mesure.` : lang==='sp' ? 'Con Advanced Analytics en AIRA, monitorear, generar informes, colaborar y mejorar el éxito de su hiperautomatización al siguiente nivel no solo es posible, sino que se simplifica sin medida.' : lang==='ar'? 'باستخدام التحليلات المتقدمة في AIRA، لا تصبح المراقبة وإعداد التقارير والتعاون وتحسين نجاح الأتمتة الفائقة إلى المستوى التالي أمرًا ممكنًا فحسب، بل تصبح مبسطة إلى أبعد الحدود.' : lang==='gr' ? 'Mit Advanced Analytics in AIRA wird die Überwachung, Berichterstellung, Zusammenarbeit und Verbesserung Ihres Hyperautomatisierungserfolgs auf die nächste Stufe nicht nur möglich, sondern über alle Maßen vereinfacht.' : 'With Advanced Analytics in AIRA, monitoring, reporting, collaborating and improving your hyper-automation success to the next level becomes not merely possible, but simplified beyond measure.'}
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
                  {lang === 'fr' ? `Deloitte` : lang==='sp' ? 'Deloitte' : lang==='ar'? 'ديلويت' : lang==='gr' ? 'Deloitte' : 'Deloitte'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  20-30%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `L'analyse avancée dans la fabrication réduit les coûts de maintenance` : lang==='sp' ? 'La analítica avanzada en la fabricación reduce los costes de mantenimiento' : lang==='ar'? 'التحليلات المتقدمة في التصنيع تقلل من تكاليف الصيانة' : lang==='gr' ? 'Fortschrittliche Analysen in der Fertigung senken die Wartungskosten' : 'Advanced analytics in manufacturing reduces maintenance costs.'}
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
                  {lang === 'fr' ? `McKinsey` : lang==='sp' ? 'McKinsey' : lang==='ar'? 'ماكينزي' : lang==='gr' ? 'McKinsey' : 'McKinsey'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                    25-35%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `L'analyse avancée dans l'industrie textile améliore la précision des prévisions de la demande` : lang==='sp' ? 'El análisis avanzado en la industria textil mejora la precisión de la previsión de la demanda' : lang==='ar'? 'تعمل التحليلات المتقدمة في صناعة النسيج على تحسين دقة التنبؤ بالطلب' : lang==='gr' ? 'Fortschrittliche Analysen in der Textilindustrie verbessern die Genauigkeit der Nachfrageprognosen' : 'Advanced analytics in the textile industry improves demand forecasting accuracy.'}
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
                  {lang === 'fr' ? `PWC` : lang==='sp' ? 'PwC' : lang==='ar'? 'برايس ووترهاوس كوبرز' : lang==='gr' ? 'PwC' : 'PwC'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  35-45%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `L'analyse avancée dans le secteur bancaire améliore la précision de la détection des fraudes` : lang==='sp' ? 'El análisis avanzado en banca mejora la precisión de la detección de fraude' : lang==='ar'? 'تعمل التحليلات المتقدمة في مجال الخدمات المصرفية على تعزيز دقة الكشف عن الاحتيال' : lang==='gr' ? 'Fortschrittliche Analysen im Bankwesen verbessern die Genauigkeit der Betrugserkennung' : 'Advanced analytics in banking enhances fraud detection accuracy.'}
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
              {lang === 'fr' ? `Moniteur. Gérer.` : lang==='sp' ? 'Monitor. Administrar.' : lang==='ar'? 'شاشة. يدير. تحقيق ' : lang==='gr' ? 'Monitor. Verwalten.' : 'Monitor. Manage.'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `Maximiser.` : lang==='sp' ? 'Maximizar.' : lang==='ar'? 'أقصى قدر.' : lang==='gr' ? 'Maximieren.' : 'Maximise'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
              {lang === 'fr' ? `Certains des avantages essentiels qu'Advanced Analytics offre à votre entreprise sont les suivants :  ` : lang==='sp' ? 'Algunos de los beneficios clave que ofrece Advanced Analytics para su empresa son:' : lang==='ar'? 'بعض الفوائد الرئيسية التي توفرها التحليلات المتقدمة لمؤسستك هي:' : lang==='gr' ? 'Zu den wichtigsten Vorteilen, die Advanced Analytics Ihrem Unternehmen bietet, gehören:' : 'Some of the key benefits that Advanced Analytics deliver for your enterprise are: '}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                {lang === 'fr' ? `Priorisation` : lang==='sp' ? 'Priorización' : lang==='ar'? 'تحديد الأولويات' : lang==='gr' ? 'Priorisierung' : ' Transform Data into Decisions'}
                 
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                {lang === 'fr' ? `Avec Advanced Analytics, il devient plus facile d'analyser et de supprimer les processus inutiles et les étapes spécifiques, ce qui permet de donner la priorité aux processus métier clés dans les stratégies.` : lang==='sp' ? 'Con Advanced Analytics, profundizar y deshacerse de procesos innecesarios y pasos específicos se vuelve más fácil, lo que permite priorizar los procesos de negocio clave para que se coloquen en una mayor prioridad dentro de las estrategias.' : lang==='ar'? 'باستخدام التحليلات المتقدمة، يصبح التعمق في العمليات المهدرة والخطوات المحددة والتخلص منها أسهل، مما يسمح بوضع أولويات العمليات التجارية الأساسية في أولوية أعلى ضمن الاستراتيجيا' : lang==='gr' ? 'Mit Advanced Analytics wird es einfacher, sich mit verschwenderischen Prozessen und spezifischen Schritten auseinanderzusetzen und diese zu beseitigen, sodass die wichtigsten Geschäftsprozesse innerhalb der Strategien priorisiert werden können.' : 'With Advanced Analytics, delving into and divesting wasteful processes and specific steps becomes easier, allowing for prioritising the keystone business processes to be placed at a higher priority within the strategies.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaMoneyBillAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                 
                  {lang === 'fr' ? `Personnalisatio` : lang==='sp' ? 'Personalización' : lang==='ar'? 'التخصيص' : lang==='gr' ? 'Anpassung' : 'Customization'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                {lang === 'fr' ? `AIRA fournit une interface modulaire de reporting et d'analyse, capable d'être personnalisée en fonction des processus de l'entreprise et de fournir des filtres de données qui mettent en avant les analyses commerciales les plus critiques et clés en main.` : lang==='sp' ? 'AIRA proporciona una interfaz modular de análisis e informes, capaz de personalizarse específicamente para los procesos empresariales y ofrecer filtros de datos que dan protagonismo a los análisis empresariales más críticos y llave en mano.' : lang==='ar'? 'توفر AIRA واجهة معيارية لإعداد التقارير والتحليلات، قابلة للتخصيص خصيصًا لعمليات المؤسسة وتقديم مرشحات البيانات التي تضفي أهمية على تحليلات الأعمال الأكثر أهمية والجاهزة.' : lang==='gr' ? 'AIRA bietet eine modulare Berichts- und Analyseschnittstelle, die speziell an Unternehmensprozesse angepasst werden kann und Datenfilter bereitstellt, die den kritischsten und schlüsselfertigsten Geschäftsanalysen den Vorzug geben.' : 'AIRA provides a modular reporting and analytics interface, capable of being customised specific to enterprise processes and delivering data filters that lend prominence to the most critical and turnkey business analytics.'}
                 
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaCommentAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Intelligence exploitable` : lang==='sp' ? 'Inteligencia procesable' : lang==='ar'? 'تجارب محسنة' : lang==='gr' ? 'Umsetzbare Intelligenz' : ' Actionable Intelligence'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                {lang === 'fr' ? `Les analyses avancées dans AIRA se répercutent et se reflètent dans les transformations numériques réussies de l'entreprise, y compris des mesures commerciales clés telles que la satisfaction client (CSAT) et une adéquation plus approfondie entre les produits/services et l'audience. ` : lang==='sp' ? 'El análisis avanzado en AIRA se filtra y se refleja en transformaciones digitales empresariales exitosas, incluidas métricas comerciales clave como la satisfacción del cliente (CSAT) y una mayor adecuación entre producto/servicio y audiencia. .' : lang==='ar'? 'تتدفق التحليلات المتقدمة في AIRA وتنعكس في التحولات الرقمية الناجحة للمؤسسة، بما في ذلك مقاييس الأعمال الرئيسية مثل رضا العملاء (CSAT) والملاءمة الأعمق للمنتج/الخدمة مع الجمهور. .' : lang==='gr' ? 'Durch die Reduzierung und Konzentration auf fortschrittliche Analysen ist die AIRA-Hyperautomatisierung in der Lage, in Echtzeit umsetzbare Erkenntnisse zu liefern, um die digitale Transformation für Unternehmen weiter zu optimieren, ohne Chancenlücken zu schaffen und Wettbewerbsvorteile aufrechtzuerhalten.' : 'Paring down and focusing on advanced analytics makes AIRA hyper-automation capable of providing real-time actionable insights to further optimise the digital transformation for enterprises without creating opportunity gaps and maintaining competitive advantages.'}
                {/* {lang === 'fr' ? `En réduisant et en se concentrant sur les analyses avancées, l'hyper-automatisation d'AIRA est capable de fournir des informations exploitables en temps réel pour optimiser davantage la transformation numérique des entreprises sans créer de lacunes d'opportunités et sans maintenir des avantages concurrentiels.` : lang==='sp' ? 'Reducir y centrarse en análisis avanzados hace que la hiperautomatización de AIRA sea capaz de proporcionar información procesable en tiempo real para optimizar aún más la transformación digital de las empresas sin crear brechas de oportunidades y mantener ventajas competitivas.' : ''} */}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaArrowDownSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                
                  {lang === 'fr' ? `Expériences améliorées` : lang==='sp' ? 'Experiencias mejoradas' : lang==='ar'? 'الأتمتة المفرطة بواسطة AIRA' : lang==='gr' ? 'Erweiterte Erlebnisse' : 'Enhanced Experiences'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                {lang === 'fr' ? `Les analyses avancées dans AIRA se répercutent et se reflètent dans les transformations numériques réussies de l'entreprise, y compris des mesures commerciales clés telles que la satisfaction client (CSAT) et une adéquation plus approfondie entre les produits/services et l'audience.` : lang==='sp' ? 'El análisis avanzado en AIRA se filtra y se refleja en transformaciones digitales empresariales exitosas, incluidas métricas comerciales clave como la satisfacción del cliente (CSAT) y una mayor adecuación entre producto/servicio y audiencia. .' : lang==='ar'? 'الأتمتة المفرطة بواسطة AIRA' : lang==='gr' ? 'Advanced Analytics in AIRA dringt durch und spiegelt sich in erfolgreichen digitalen Transformationen von Unternehmen wider, einschließlich wichtiger Geschäftskennzahlen wie Kundenzufriedenheit (CSAT) und einer tieferen Passung von Produkt/Dienstleistung und Zielgruppe.' : 'Advanced Analytics in AIRA trickles down and reflects in successful enterprise digital transformations, including key business metrics such as Customer Satisfaction (CSAT) and deeper product/service-audience fit.'}
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
          }) : LR_ITEMS4.map((lrItem, lrIdx) => {
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

   

      {/* <Box sx={{py: 2}}></Box> */}
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

          {loading ? (
          // Show loader when data is still loading
          <CircularProgress sx={{ display: 'block', margin: 'auto', color: '#FFAF00' }} />
        ) : (
          <>
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
          </>
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


      
      <Box sx={{ backgroundColor: '#F0F0F0', py: 10 , mb: 3}}>
        <Container maxWidth="lg">
          <Stack>
            <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
              {lang === 'fr' ? `Allez au-delà de ce que vous pensiez possible grâce à la modélisation de décisions basées sur les ` : lang==='sp' ? 'Vaya más allá de lo que creía posible con decisiones basadas en datosmodelado, ' : lang==='ar'? 'اذهب إلى أبعد مما كنت تعتقد أنه ممكن من خلال نمذجة القرارات المستندة إلى البيانات، كما لم يحدث من' : lang==='gr' ? 'Gehen Sie mit datengesteuerten Entscheidungen weiter und über das hinaus, was Sie für möglich' : 'Go further and beyond what you thought possible'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
               
                {lang === 'fr' ? `données, comme jamais auparavant.` : lang==='sp' ? 'como nunca antes.' : lang==='ar'? 'قبل.' : lang==='gr' ? 'gehalten habenModellieren, wie niemals zuvor.' : ' with data driven decision modelling, like never before.'}
              </span>
            </Typography>
            {/* <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2, mb: 4 }}>
              AIRA is a one stop Robotic Process Automation platform that enables you to leverage benefits without costs or disruptions.
            </Typography> */}

            <div className="btn_group btn-group1">
              <button onClick={()=>{
                      router?.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
              {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang==='sp' ? 'como nunca antes.' : lang==='ar'? 'استفد من AIRA لمؤسستك اليوم' : lang==='gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : 'Leverage AIRA for your Enterprise Today'}
                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
              <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
              {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang==='sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang==='ar'? 'احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang==='gr' ? 'Buchen Sie ein Demo-Beratungsgespräch mit unserem Produktteam' : 'Book a Demo Consultation Call with our Product Team'}
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
  );
}

export default Index;
