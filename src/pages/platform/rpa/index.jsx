import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,CircularProgress
} from "@mui/material";
import Slider from "react-slick";

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

const IMGBASEURL = "/images/careers";

const LR_ITEMS = [
  {
    cardTitle: "Automatisation intelligente",
    cardDesc:
      "La RPA d'AIRA intègre une IA avancée et un apprentissage automatique, permettant une prise de décision intelligente pour une efficacité accrue.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Automatisation évolutive",
    cardDesc:
      "Avec une interface conviviale et des capacités low-code, AIRA RPA garantit une évolutivité facile pour répondre aux besoins changeants de l'entreprise.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Intégration robuste",
    cardDesc:
      "Connectez facilement AIRA RPA à divers systèmes, applications et bases de données, rationalisant ainsi l'automatisation de bout en bout dans votre entreprise.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS1 = [
  {
    cardTitle: "Automatización inteligente",
    cardDesc:
      "La RPA de AIRA integra inteligencia artificial avanzada y aprendizaje automático, lo que permite una toma de decisiones inteligente para mejorar la eficiencia.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Automatización escalable",
    cardDesc:
      "Con una interfaz fácil de usar y capacidades de código bajo, AIRA RPA garantiza una fácil escalabilidad para adaptarse a las necesidades empresariales en evolución.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Integración sólida",
    cardDesc:
      "Conecte perfectamente AIRA RPA con diversos sistemas, aplicaciones y bases de datos, optimizando la automatización de un extremo a otro en toda su empresa.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS2 = [
  {
    cardTitle: "الأتمتة الذكية",
    cardDesc:
      "دمج RPA الخاص بـ AIRA الذكاء الاصطناعي المتقدم والتعلم الآلي، مما يتيح اتخاذ قرارات ذكية لتعزيز الكفاءة",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "أتمتة قابلة للتطوير",
    cardDesc:
      "بفضل واجهة سهلة الاستخدام وإمكانيات منخفضة التعليمات البرمجية، يضمن AIRA RPA سهولة التوسع لتلبية احتياجات العمل المتطورة",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "التكامل القوي",
    cardDesc:
      "قم بتوصيل AIRA RPA بسلاسة مع أنظمة وتطبيقات وقواعد بيانات متنوعة، مما يؤدي إلى تبسيط الأتمتة الشاملة عبر مؤسستك",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS3 = [
  {
    cardTitle: "Intelligente Automatisierung",
    cardDesc:
      "AIRAs RPA integriert fortschrittliche KI und maschinelles Lernen und ermöglicht so eine intelligente Entscheidungsfindung für mehr Effizienz.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Skalierbare Automatisierung",
    cardDesc:
      "Mit einer benutzerfreundlichen Oberfläche und Low-Code-Funktionen gewährleistet AIRA RPA eine einfache Skalierbarkeit, um sich ändernden Geschäftsanforderungen gerecht zu werden.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Robuste Integration",
    cardDesc:
      "Verbinden Sie AIRA RPA nahtlos mit verschiedenen Systemen, Anwendungen und Datenbanken und optimieren Sie so die End-to-End-Automatisierung in Ihrem gesamten Unternehmen.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS4 = [
  {
    cardTitle: "Intelligent Automation",
    cardDesc:
      "AIRA's RPA integrates advanced AI and machine learning, enabling intelligent decision-making for enhanced efficiency.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Scalable Automation",
    cardDesc:
      "With a user-friendly interface and low-code capabilities, AIRA RPA ensures easy scalability to accommodate evolving business needs.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Robust Integration",
    cardDesc:
      "Seamlessly connect AIRA RPA with diverse systems, applications, and databases, streamlining end-to-end automation across your enterprise.",
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
                    {lang === 'fr' ? `Robuste. Efficace. Fiable.` : lang === 'sp' ? 'Robusto. Eficiente. Confiable.' : lang === 'ar' ? 'قوي. فعال. موثوق.' : lang === 'gr' ? 'Robust. Effizient. Zuverlässig.' : 'Robust. Efficient. Reliable.'}
                    <br />
                    <span className='span' style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Automatisation des processus robotisés` : lang === 'sp' ? 'Automatización de procesos robóticos' : lang === 'ar' ? 'أتمتة العمليات الروبوتية' : lang === 'gr' ? 'Robotische Prozessautomatisierung' : 'Robotic Process Automation'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `La base d’une hyper-automatisation réussie` : lang === 'sp' ? 'La base de una hiperautomatización exitosa' : lang === 'ar' ? 'أساس الأتمتة المفرطة الناجحة' : lang === 'gr' ? 'Die Grundlage einer erfolgreichen Hyperautomation' : 'The Foundation of successful Hyper-automation'}
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Découvrez les capacités RPA d’AIRA pour des transformations numériques sans interruption.` : lang === 'sp' ? 'Conozca las capacidades RPA de AIRA para transformaciones digitales sin interrupciones.' : lang === 'ar' ? 'تعرف على قدرات RPA الخاصة بـ AIRA للتحولات الرقمية الخالية من الانقطاع.' : lang === 'gr' ? 'Erfahren Sie mehr über die RPA-Funktionen von AIRA für störungsfreie digitale Transformationen.' : 'Learn about AIRA’s RPA capabilities for disruption free digital transformations.'}
                  </Typography>
                  {/* <div className="btn_group">
                  <button className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">Try AIRA Free<span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                  <button className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">Book a Demo Call<span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
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
                style={{ width: '100%', height: 'auto' , borderRadius: 8}}
              />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box className="hh" sx={{ backgroundColor: '#6755DF', pt: 8, pb: 1, mt: 10 }}>
        <Container className='huk' maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, color: "white" }}>
            {lang === 'fr' ? `Automatisation des processus` : lang === 'sp' ? 'Automatización de procesos' : lang === 'ar' ? 'أتمتة العمليات ' : lang === 'gr' ? 'Robotische' : 'Robotic Process'} {' '}
            <span className='span' style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `robotisés` : lang === 'sp' ? 'robóticos' : lang === 'ar' ? 'الروبوتية' : lang === 'gr' ? 'Prozessautomatisierung' : 'Automation'}
            </span>
          </Typography>

          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `L’automatisation robotique des processus transforme les entreprises du monde entier depuis maintenant deux décennies. AIRA, un hub d'hyper-automatisation unifié pour les entreprises, utilise la RPA comme base d'une transformation numérique réussie et évolutive.` : lang === 'sp' ? 'La automatización robótica de procesos lleva dos décadas transformando empresas en todo el mundo. AIRA, un centro unificado de hiperautomatización para empresas, utiliza RPA como base para una transformación digital exitosa y escalable.' : lang === 'ar' ? 'تعمل أتمتة العمليات الروبوتية على إحداث تحول في المؤسسات في جميع أنحاء العالم منذ عقدين من الزمن. يستخدم AIRA، وهو مركز موحد للأتمتة الفائقة للمؤسسات، تقنية RPA كأساس للتحول الرقمي الناجح والقابل للتطوير.' : lang === 'gr' ? 'Robotic Process Automation verändert seit zwei Jahrzehnten Unternehmen auf der ganzen Welt. AIRA, ein einheitlicher Hyperautomatisierungs-Hub für Unternehmen, nutzt RPA als Grundlage für eine erfolgreiche und skalierbare digitale Transformation.' : 'Robotic Process Automation has been transforming enterprises across the globe for two decades now. AIRA, a unified hyper-automation hub for enterprises utilises RPA as the foundation of successful and scalable digital transformation.'}
          </Typography>
        </Container>
      </Box>

      <Box className="tyty" sx={{ backgroundColor: '#6755DF', pb: 8, pt: 3 }}>
        <Container className='ooo' maxWidth="lg">
          <Grid className='ooo'  container spacing={12}>
            <Grid className='ik' item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px', minHeight:"300px" }}>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Typography color={'#6755DF'}>
                  {lang === 'fr' ? `Deloitte` : lang === 'sp' ? 'Deloitte' : lang === 'ar' ? 'ديلويت' : lang === 'gr' ? 'Deloitte' : 'Deloitte'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  25-40%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `La RPA dans le secteur manufacturier entraîne une augmentation notable de l’efficacité opérationnelle, une rationalisation des flux de production et une réduction des erreurs manuelles.` : lang === 'sp' ? 'La RPA en la fabricación da como resultado un aumento notable en la eficiencia operativa, optimizando los flujos de trabajo de producción y reduciendo los errores manuales.' : lang === 'ar' ? 'يؤدي استخدام تقنية RPA في التصنيع إلى زيادة ملحوظة في الكفاءة التشغيلية، وتبسيط سير عمل الإنتاج، وتقليل الأخطاء اليدوية.' : lang === 'gr' ? 'RPA in der Fertigung führt zu einer deutlichen Steigerung der betrieblichen Effizienz, einer Rationalisierung der Produktionsabläufe und einer Reduzierung manueller Fehler.' : 'RPA in manufacturing results in a notable increase in operational efficiency, streamlining production workflows, and reducing manual errors.'}
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
            <Grid className='ik' item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px', minHeight:"300px" }}>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Typography color={'#6755DF'}>
                  {lang === 'fr' ? `Ernst et Young` : lang === 'sp' ? 'Ernst & Young' : lang === 'ar' ? 'إرنست ويونغ' : lang === 'gr' ? 'Ernst' : 'Ernst & Young'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  30-50% 
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `L'industrie textile démontre une réduction remarquable des délais de traitement des commandes, une accélération des cycles de production et une amélioration de l'efficacité globale.` : lang === 'sp' ? 'La industria textil demuestra una notable reducción en los tiempos de procesamiento de pedidos, acelerando los ciclos de producción y mejorando la eficiencia general.' : lang === 'ar' ? 'تُظهر صناعة النسيج انخفاضًا ملحوظًا في أوقات معالجة الطلبات، وتسريع دورات الإنتاج، وتحسين الكفاءة العامة.' : lang === 'gr' ? 'Die Textilindustrie verzeichnet eine bemerkenswerte Verkürzung der Auftragsabwicklungszeiten, eine Beschleunigung der Produktionszyklen und eine Verbesserung der Gesamteffizienz.' : 'The textile industry demonstrates a remarkable reduction in order processing times, accelerating production cycles, and improving overall efficiency.'}
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
            <Grid className='ik' item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px', minHeight:"300px" }}>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Typography color={'#6755DF'}>
                  {lang === 'fr' ? `McKinsey` : lang === 'sp' ? 'McKinsey' : lang === 'ar' ? 'ماكينزي' : lang === 'gr' ? 'McKinsey' : 'McKinsey'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  20-35%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les banques qui tirent parti de la RPA bénéficient d’une réduction significative du temps de traitement des prêts et garantissent des approbations plus rapides.` : lang === 'sp' ? 'Los bancos que aprovechan la RPA experimentan una reducción significativa en el tiempo de procesamiento de préstamos y garantizan aprobaciones más rápidas.' : lang === 'ar' ? 'تشهد البنوك التي تستفيد من تقنية RPA انخفاضًا كبيرًا في وقت معالجة القروض وضمان الموافقات بشكل أسرع.' : lang === 'gr' ? 'Banken, die RPA nutzen, verkürzen die Kreditbearbeitungszeit erheblich und sorgen für schnellere Genehmigungen.' : 'Banks leveraging RPA experience a significant reduction in loan processing time and ensuring faster approvals.'}
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
              {lang === 'fr' ? `Robuste. Efficace.` : lang === 'sp' ? 'Robusto. Eficiente.' : lang === 'ar' ? 'قوي. فعال. ' : lang === 'gr' ? 'Robust. Effizient.' : 'Robust. Efficient.'} {' '}
              <span className='span' style={{ color: Colors.airaSecondary, marginLeft: '0px' }}>
                {lang === 'fr' ? `Fiable.` : lang === 'sp' ? 'Confiable.' : lang === 'ar' ? 'موثوق.' : lang === 'gr' ? 'Zuverlässig.' : 'Reliable.'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
              {lang === 'fr' ? `Découvrez comment la RPA pose les bases de la transformation numérique de votre entreprise sans provoquer de dette opérationnelle ni perturber les processus et l'infrastructure informatique existants.` : lang === 'sp' ? 'Descubra cómo RPA sienta las bases de la transformación digital de su empresa sin generar deuda operativa ni interrumpir los procesos ni la infraestructura de TI existentes.' : lang === 'ar' ? 'تعرف على كيفية إرساء تقنية RPA لأساس التحول الرقمي لمؤسستك دون التسبب في ديون تشغيلية أو تعطيل العمليات الحالية والبنية التحتية لتكنولوجيا المعلومات.' : lang === 'gr' ? 'Erfahren Sie, wie RPA den Grundstein für die digitale Transformation Ihres Unternehmens legt, ohne betriebliche Schulden zu verursachen oder bestehende Prozesse und die IT-Infrastruktur zu stören.' : 'Learn how RPA lays the foundation of the digital transformation for your enterprise without causing operational debt or disrupting existing processes and IT infrastructure.'}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack className='tr1' direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '300px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Compréhension hiérarchique approfondie` : lang === 'sp' ? 'Comprensión jerárquica profunda' : lang === 'ar' ? 'فهم هرمي عميق' : lang === 'gr' ? 'Tiefes hierarchisches Verständnis' : 'Deep Hierarchical Understanding'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Les robots AIRA RPA sont capables de comprendre les processus intégrés dans l'ensemble de l'architecture hiérarchique de votre entreprise.` : lang === 'sp' ? 'Los AIRA RPA Bots son capaces de comprender procesos integrados en toda la arquitectura jerárquica de su empresa.' : lang === 'ar' ? 'إن روبوتات AIRA RPA قادرة على فهم العمليات المضمنة عبر البنية الهرمية لمؤسستك.' : lang === 'gr' ? 'AIRA RPA Bots sind in der Lage, eingebettete Prozesse in der gesamten hierarchischen Architektur Ihres Unternehmens zu verstehen.' : 'AIRA RPA Bots are capable of understanding embedded processes throughout the hierarchical architecture of your enterprise.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack className='tr1' direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '300px' }}>
                <LiaMoneyBillAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Délégation intelligente` : lang === 'sp' ? 'Delegación inteligente' : lang === 'ar' ? 'الوفد الذكي' : lang === 'gr' ? 'Intelligente Delegation' : ' Intelligent Delegation'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `AIRA vous permet de tirer parti d'une main-d'œuvre entièrement numérique capable de détecter et de déléguer automatiquement les tâches de flux de travail à l'aide d'Orchestrator.` : lang === 'sp' ? 'AIRA le permite aprovechar una fuerza laboral completamente digital capaz de detectar y delegar automáticamente tareas de flujo de trabajo utilizando Orchestrator.' : lang === 'ar' ? 'يمكّنك AIRA من الاستفادة من القوى العاملة الرقمية بالكامل القادرة على اكتشاف مهام سير العمل وتفويضها تلقائيًا باستخدام المنسق' : lang === 'gr' ? 'Mit AIRA können Sie eine vollständig digitale Belegschaft nutzen, die Workflow-Aufgaben mithilfe des Orchestrator automatisch erkennen und delegieren kann' : 'AIRA enables you to leverage a completely digital workforce capable of automatically detecting and delegating workflow tasks using the Orchestrator.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack className='tr1' direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '300px' }}>
                <LiaCommentAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Maximisez le retour sur investissement équivalent temps plein` : lang === 'sp' ? 'Maximice el ROI equivalente a tiempo completo' : lang === 'ar' ? 'تعظيم عائد الاستثمار المعادل بدوام كامل' : lang === 'gr' ? 'Maximieren Sie den ROI in Vollzeitäquivalenten' : ' Maximise Full-Time Equivalent ROI'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Avec une hyper-automatisation 24h/24 et 7j/7, AIRA alimente l'automatisation de l'entreprise en continu, même lorsque le personnel humain n'est pas disponible.` : lang === 'sp' ? 'Con hiperautomatización 24 horas al día, 7 días a la semana, AIRA impulsa la automatización empresarial de forma continua, incluso cuando no hay personal humano disponible.' : lang === 'ar' ? 'من خلال الأتمتة المفرطة على مدار الساعة طوال أيام الأسبوع، تعمل AIRA على دعم أتمتة المؤسسة بشكل مستمر، حتى في حالة عدم توفر الموظفين البشريين.' : lang === 'gr' ? 'Mit der 24/7-Hyperautomatisierung treibt AIRA die Unternehmensautomatisierung kontinuierlich voran, auch wenn menschliches Personal nicht verfügbar ist.' : 'With 24/7 Hyper-automation, AIRA fuels enterprise automation continuously, even when human personnel are unavailable.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack className='tr1' direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '300px' }}>
                <LiaArrowDownSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Réduire la dette opérationnelle` : lang === 'sp' ? 'Reducir la deuda operativa' : lang === 'ar' ? 'تقليل الديون التشغيلية' : lang === 'gr' ? 'Betriebsschulden reduzieren' : 'Reduce Operational Debt'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `AIRA détecte, conçoit et déploie les agents RPA dès le premier jour, sans créer de nouvelles dépenses opérationnelles ni solliciter les ressources informatiques, de manière transparente.` : lang === 'sp' ? 'AIRA detecta, diseña e implementa agentes RPA desde el primer día, sin crear nuevos gastos operativos ni sobrecargar los recursos de TI, sin problemas.' : lang === 'ar' ? 'تقوم AIRA باكتشاف وكلاء RPA وتصميمهم ونشرهم من اليوم الأول، دون إنشاء نفقات تشغيلية جديدة أو فرض ضرائب على موارد تكنولوجيا المعلومات، بسلاسة.' : lang === 'gr' ? 'AIRA erkennt, entwirft und implementiert RPA-Agenten vom ersten Tag an, ohne neue Betriebskosten zu verursachen oder IT-Ressourcen zu belasten, und das nahtlos.' : 'AIRA detects, designs and deploys RPA Agents from day one, without creating new operational expenses or taxing IT resources, seamlessly.'}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Box sx={{ backgroundColor: '#F0F0F0', py: 10 }}>
        <Container maxWidth="lg">
          <Grid  container spacing={3}>
            <Grid className='tech1' item xs={12} md={4}>
              <Box className='tech' sx={{
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
                <Typography className='span1' fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
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
                backgroundImage: `url(https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography className='span1' fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
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
                backgroundImage: `url(https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography className='span1' fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
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
              More <span className="span" style={{ color: Colors.airaSecondary }}>in Banking Automation</span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2, mb: 4 }}>
              Dont miss these resources, upcoming events, and recaps
            </Typography>
          </Stack>
          <Grid container spacing={3}>
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
                  CASE STUDY
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
              <Box className='tech'  sx={{
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
                  CASE STUDY
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
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography className='span1' fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
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
      <Box sx={{ backgroundColor: '#F0F0F0', py: 10, mb: 3 }}>
        <Container maxWidth="lg">
          <Stack>
            <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
            
                {lang === 'fr' ? `Éliminez les goulots d’étranglement.` : lang === 'sp' ? 'Eliminar cuellos de botella.' : lang === 'ar' ? 'الاختناقات. تقليل التكرار.' : lang === 'gr' ? 'Beseitigen Sie Engpässe.' : 'Eliminate Bottlenecks.'}
          
              <span className='span' style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Minimiser Redondances.` : lang === 'sp' ? 'Minimizar Despidos.' : lang === 'ar' ? 'القضاء على .' : lang === 'gr' ? 'Minimieren Entlassungen.' : ' Minimise Redundancies.'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2, mb: 4 }}>
              {lang === 'fr' ? `AIRA est une plateforme unique d'automatisation des processus robotiques qui vous permet de tirer parti des avantages sans coûts ni interruptions.` : lang === 'sp' ? 'AIRA es una plataforma integral de automatización robótica de procesos que le permite aprovechar los beneficios sin costos ni interrupciones.' : lang === 'ar' ? 'عبارة عن منصة واحدة لأتمتة العمليات الروبوتية تمكنك من الاستفادة من المزايا دون تكاليف  AIRA أو انقطاعات.' : lang === 'gr' ? 'AIRA ist eine One-Stop-Robotic-Process-Automation-Plattform, die es Ihnen ermöglicht, Vorteile ohne Kosten oder Unterbrechungen zu nutzen.' : 'AIRA is a one stop Robotic Process Automation platform that enables you to leverage benefits without costs or disruptions.'}
            </Typography>

            {/* <Button
              color="primary"
              variant="contained"
              className="text-nowrap"
              onClick={() => {
                setOpenTryAIRADialog(true);
              }}
              sx={{
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 700,
                borderRadius: "30px",
                backgroundColor: "#6755DF"
              }}
            >
              Request your free trial now
            </Button> */}
            <div className="btn_group btn-group1">
              <button onClick={() => {
                router.push('/contact');
              }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                {lang === 'fr' ? `Informations préventives. Impact rationalisé.` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : 'Leverage AIRA for your Enterprise Today'}
                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
              <button onClick={() => {
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
            sx={{
              position: 'absolute',
              top: 100,
              display: { xs: 'none', md: 'block' }
            }}
          // style={{
          //   position: "absolute",
          //   top: 100,
          // }}
          >
            <AIRAMonoLinesLeft />
          </Box>
    </Box>
  );
}

export default Index;
