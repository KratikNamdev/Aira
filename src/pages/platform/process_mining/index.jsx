import React, { useState, useEffect } from 'react';
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
    cardTitle: "Visibilité transparente des processus",
    cardDesc:
      "AIRA Process Mining offre une vue claire de l'ensemble de vos processus commerciaux, vous permettant d'identifier sans effort les goulots d'étranglement et les inefficacités.",
    imgSrc: `reach_out_13.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Analyse des performances en temps réel",
    cardDesc:
      "Obtenez des informations sur vos opérations grâce à des analyses en temps réel, permettant une prise de décision rapide et une amélioration continue des processus.",
    imgSrc: `reach_out_14.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Optimisation du flux de travail automatisé",
    cardDesc:
      "Utilisez les algorithmes intelligents d'AIRA pour optimiser automatiquement les flux de travail, garantissant ainsi une efficacité et des ressources maximales.",
    imgSrc: `reach_out_15.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS1 = [
  {
    cardTitle: "Visibilidad perfecta del proceso",
    cardDesc:
      "AIRA Process Mining proporciona una visión nítida de todos sus procesos comerciales, lo que le permite identificar cuellos de botella e ineficiencias sin esfuerzo.",
    imgSrc: `reach_out_13.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Análisis de rendimiento en tiempo real",
    cardDesc:
      "Obtenga información sobre sus operaciones con análisis en tiempo real, lo que permite una toma de decisiones oportuna y una mejora continua de los procesos.",
    imgSrc: `reach_out_14.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Optimización automatizada del flujo de trabajo",
    cardDesc:
      "Utilice los algoritmos inteligentes de AIRA para optimizar automáticamente los flujos de trabajo, garantizando la máxima eficiencia y recursos.",
    imgSrc: `reach_out_15.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS2 = [
  {
    cardTitle: "رؤية سلسة للعملية",
    cardDesc:
      "وفر AIRA Process Mining رؤية واضحة تمامًا لعمليات عملك بأكملها، مما يسمح لك بتحديد الاختناقات وأوجه القصور دون عناء",
    imgSrc: `reach_out_13.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "تحليل الأداء في الوقت الحقيقي",
    cardDesc:
      "احصل على رؤى حول عملياتك من خلال التحليلات في الوقت الفعلي، مما يتيح اتخاذ القرار في الوقت المناسب والتحسين المستمر للعملية",
    imgSrc: `reach_out_14.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "تحسين سير العمل الآلي",
    cardDesc:
      "استخدم خوارزميات AIRA الذكية لتحسين سير العمل تلقائيًا، مما يضمن أقصى قدر من الكفاءة والموارد. ",
    imgSrc: `reach_out_15.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS3 = [
  {
    cardTitle: "Nahtlose Prozesstransparenz",
    cardDesc:
      "AIRA Process Mining bietet eine kristallklare Sicht auf Ihre gesamten Geschäftsprozesse und ermöglicht Ihnen die mühelose Identifizierung von Engpässen und Ineffizienzen.",
    imgSrc: `reach_out_13.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Echtzeit-Leistungsanalyse",
    cardDesc:
      "Gewinnen Sie mit Echtzeitanalysen Einblicke in Ihre Abläufe und ermöglichen Sie so eine zeitnahe Entscheidungsfindung und kontinuierliche Prozessverbesserung.",
    imgSrc: `reach_out_14.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Automatisierte Workflow-Optimierung",
    cardDesc:
      "Nutzen Sie die intelligenten Algorithmen von AIRA, um Arbeitsabläufe automatisch zu optimieren und so maximale Effizienz und Ressourcen zu gewährleisten.",
    imgSrc: `reach_out_15.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS4 = [
  {
    cardTitle: "Seamless Process Visibility",
    cardDesc:
      "AIRA Process Mining provides a crystal-clear view of your entire business processes, allowing you to identify bottlenecks and inefficiencies effortlessly.",
    imgSrc: `reach_out_13.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Real-Time Performance Analysis",
    cardDesc:
      "Gain insights into your operations with real-time analytics, enabling timely decision-making and continuous process improvement.",
    imgSrc: `reach_out_14.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Automated Workflow Optimization",
    cardDesc:
      " Utilise AIRA's intelligent algorithms to automatically optimise workflows, ensuring maximum efficiency and resource .",
    imgSrc: `reach_out_15.png`,
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


  const [val, setVal] = useState({
    category: "",
    type: "",
  });

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getData();
  }, [val.category, val.type]);

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
                    {lang === 'fr' ? `Découvrez des informations. Produisez un impact.` : lang === 'sp' ? 'Descubra ideas. Generar impacto.' : lang === 'ar' ? 'اكتشف الرؤى. تحقيق التأثير.' : lang === 'gr' ? 'Entdecken Sie Erkenntnisse. Wirkung erzielen.' : ' Discover insights. Deliver impact.'}
                    <br />
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Exploration de processus dans AIRA` : lang === 'sp' ? 'Minería de procesos en AIRA' : lang === 'ar' ? 'عملية التعدين في AIRA' : lang === 'gr' ? 'Process Mining in AIRA' : 'Process Mining in AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Exploration de processus hyper-automatisée utilisant les données d'entreprise pour découvrir des possibilités et avoir un impact. .` : lang === 'sp' ? 'Minería de procesos hiperautomatizada que utiliza datos empresariales para descubrir posibilidades y generar impacto. .' : lang === 'ar' ? 'تعدين العمليات بشكل آلي للغاية باستخدام بيانات المؤسسة لاكتشاف الإمكانيات وإحداث التأثير. .' : lang === 'gr' ? 'Hyperautomatisiertes Process Mining unter Verwendung von Unternehmensdaten, um Möglichkeiten zu entdecken und Wirkung zu erzielen. .' : 'Hyper-automated process mining using Enterprise data for discovering possibilities and delivering impact.'}
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
                      {lang === 'fr' ? `Réservez un appel de démonstration` : lang === 'sp' ? 'Perspectivas preventivas. Impacto optimizado.' : lang === 'ar' ? 'حجز مكالمة تجريبية' : lang === 'gr' ? 'Testen Sie AIRA für Ihr Unternehmen	Buchen Sie einen Demo-Anruf' : 'Book a Demo Call'}
                      <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                  </div> */}
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/bankingheader5.png"
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
            {lang === 'fr' ? `Transformez automatiquement vos connaissances en` : lang === 'sp' ? 'Convierta los conocimientos en impacto,' : lang === 'ar' ? 'تحويل الرؤى إلى تأثير،' : lang === 'gr' ? 'Verwandeln Sie Erkenntnisse' : 'Turn insights into'} {' '}
            <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `impact.` : lang === 'sp' ? 'automáticamente.' : lang === 'ar' ? 'تلقائيًا.' : lang === 'gr' ? 'automatisch in Wirkung.' : 'impact, automatically.'}
            </span>
          </Typography>

          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Processus métier complexes et données non structurées. Ce n’est plus un défi grâce aux capacités avancées d’exploration de processus d’AIRA.` : lang === 'sp' ? 'Procesos de negocio complejos y datos no estructurados. Ya no es un desafío con las capacidades avanzadas de minería de procesos de AIRA.' : lang === 'ar' ? 'العمليات التجارية المعقدة والبيانات غير المنظمة. لم يعد يمثل تحديًا مع قدرات التعدين العملية المتقدمة لـ AIRA.' : lang === 'gr' ? 'Komplexe Geschäftsprozesse und unstrukturierte Daten. Mit den fortschrittlichen Process-Mining-Funktionen von AIRA ist das keine Herausforderung mehr.' : 'Complex business processes and unstructured data. No longer a challenge with AIRA’s advanced process mining capabilities. '}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Plongez dans la complexité de votre entreprise pour découvrir des informations simplifiées et des renseignements exploitables en temps réel pour des transformations numériques réussies.` : lang === 'sp' ? 'Sumérjase en la complejidad de su empresa para descubrir conocimientos simplificados e inteligencia procesable en tiempo real para transformaciones digitales exitosas.' : lang === 'ar' ? 'انغمس في تعقيد مؤسستك لاكتشاف الرؤى المبسطة والذكاء القابل للتنفيذ في الوقت الفعلي من أجل التحولات الرقمية الناجحة.' : lang === 'gr' ? 'Tauchen Sie ein in die Komplexität Ihres Unternehmens und entdecken Sie vereinfachte Erkenntnisse und umsetzbare Informationen in Echtzeit für erfolgreiche digitale Transformationen.' : 'Dive into the complexity of your enterprise to discover simplified insights and real-time actionable intelligence for successful digital transformations.'}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Le Process Mining d’AIRA vous aide à voir ce que vous avez manqué.` : lang === 'sp' ? 'Process Mining de AIRA le ayuda a ver lo que se perdió.' : lang === 'ar' ? 'يساعدك تعدين العمليات في AIRA على رؤية ما فاتك.' : lang === 'gr' ? 'AIRAs Process Mining hilft Ihnen zu erkennen, was Sie verpasst haben.' : 'AIRA’s Process Mining helps you see what you missed.  '}
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
                  {lang === 'fr' ? `McKinsey` : lang === 'sp' ? 'McKinsey' : lang === 'ar' ? 'ماكينزي' : lang === 'gr' ? 'McKinsey' : 'McKinsey'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  25%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Le Process Mining dans la fabrication améliore l’efficacité des processus, entraînant une réduction des coûts opérationnels.` : lang === 'sp' ? 'La minería de procesos en la fabricación mejora la eficiencia del proceso, lo que lleva a una reducción de los costos operativos.' : lang === 'ar' ? 'يعمل تعدين العمليات في التصنيع على تحسين كفاءة العمليات، مما يؤدي إلى تقليل تكاليف التشغيل.' : lang === 'gr' ? 'Process Mining in der Fertigung verbessert die Prozesseffizienz und führt zu einer Reduzierung der Betriebskosten.' : 'Process Mining in manufacturing improves process efficiency, leading to a reduction in operational costs.'}
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
                  {lang === 'fr' ? `Deloitte` : lang === 'sp' ? 'Deloitte' : lang === 'ar' ? 'ديلويت' : lang === 'gr' ? 'Deloitte' : 'Deloitte'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  20%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Le Process Mining dans l’industrie textile améliore la visibilité de la chaîne d’approvisionnement, réduisant ainsi les délais de livraison.` : lang === 'sp' ? 'La minería de procesos en la industria textil mejora la visibilidad de la cadena de suministro y reduce el tiempo de entrega.' : lang === 'ar' ? 'تعمل عملية التعدين في صناعة النسيج على تعزيز رؤية سلسلة التوريد، مما يقلل من المهلة الزمنية.' : lang === 'gr' ? 'Process Mining in der Textilindustrie verbessert die Transparenz der Lieferkette und verkürzt die Durchlaufzeit.' : 'Process Mining in the textile industry enhances supply chain visibility, reducing lead time.'}
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
                  {lang === 'fr' ? `Accenture` : lang === 'sp' ? 'acento' : lang === 'ar' ? 'أكسنتشر' : lang === 'gr' ? 'Accenture' : 'Accenture'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  30%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Le Process Mining dans le secteur bancaire optimise le traitement des transactions, ce qui réduit les délais de traitement` : lang === 'sp' ? 'Process Mining en banca optimiza el procesamiento de transacciones, lo que resulta en una disminución en los tiempos de procesamiento' : lang === 'ar' ? 'يعمل تعدين العمليات في الخدمات المصرفية على تحسين معالجة المعاملات، مما يؤدي إلى تقليل أوقات المعالجة' : lang === 'gr' ? 'Process Mining im Bankwesen optimiert die Transaktionsverarbeitung, was zu einer Verkürzung der Bearbeitungszeiten führt' : 'Process Mining in banking optimises transaction processing, resulting decrease in processing times.'}
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
              {lang === 'fr' ? `Analyser. Rationaliser.` : lang === 'sp' ? 'Analizar. Línea de corriente.' : lang === 'ar' ? 'تحليل. انسيابية.' : lang === 'gr' ? 'Analysieren. Rationalisieren.' : ' Predict. Preempt.'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Synthétiser` : lang === 'sp' ? 'sintetizar' : lang === 'ar' ? 'تركيب' : lang === 'gr' ? 'Synthetisieren' : ' Prioritise.'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
              {lang === 'fr' ? `Le Process Mining va au-delà de la simple cartographie avec AIRA. Voici comment votre entreprise exploite cette capacité` : lang === 'sp' ? 'Process Mining va más allá del simple mapeo con AIRA. Así es como su empresa aprovecha esa capacidad' : lang === 'ar' ? 'يتجاوز تعدين العمليات مجرد رسم الخرائط باستخدام AIRA. وإليك كيفية استفادة مؤسستك من هذه الإمكانية' : lang === 'gr' ? 'Process Mining geht mit AIRA über das reine Mapping hinaus. So nutzt Ihr Unternehmen diese Fähigkeit' : 'Remove ambiguity from your hyper-automation strategy using Predictive Analytics and leverage benefits such as:'}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Communications améliorées` : lang === 'sp' ? 'Comunicaciones mejoradas' : lang === 'ar' ? 'الاتصالات المحسنة' : lang === 'gr' ? 'Verbesserte Kommunikation' : 'Remove time gaps'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Le Process Mining permet une compréhension plus claire des coûts et des délais des processus dans différents départements et équipes, ce qui entraîne des communications plus productives et minimise l'ambiguïté.` : lang === 'sp' ? 'Process Mining permite una comprensión más clara de los costos y los requisitos de tiempo de los procesos en diferentes departamentos y equipos, lo que resulta en comunicaciones más productivas y minimiza la ambigüedad.' : lang === 'ar' ? 'يتيح التنقيب في العمليات فهمًا أوضح للتكاليف ومتطلبات الوقت للعمليات عبر الأقسام والفرق المختلفة، مما يؤدي إلى اتصالات أكثر إنتاجية وتقليل الغموض' : lang === 'gr' ? 'Process Mining ermöglicht ein klareres Verständnis der Kosten- und Zeitanforderungen von Prozessen in verschiedenen Abteilungen und Teams, was zu einer produktiveren Kommunikation führt und Unklarheiten minimiert' : 'With no-code integrations, cloud-native continuous updation and browser-based custom interface, launching and adapting AIRA for enterprise becomes exceedingly fast and easy, reducing time gaps between planning and implementation.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaMoneyBillAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Impact étendu` : lang === 'sp' ? 'Impacto expansivo' : lang === 'ar' ? 'تأثير توسعي' : lang === 'gr' ? 'Expansive Wirkung' : 'Preemptive Insights. Streamlined Impact.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Offrez des expériences meilleures, plus rapides et plus fluides à vos clients, partenaires et fournisseurs avec une plus grande rapidité, une clarté durable et une évolutivité alignées à la fois sur les objectifs commerciaux et sur la croissance de l'entreprise.` : lang === 'sp' ? 'Ofrezca experiencias mejores, más rápidas y más fluidas a sus clientes, socios y proveedores con mayor velocidad, claridad sostenible y escalabilidad alineadas tanto con los objetivos comerciales como con el crecimiento empresarial.' : lang === 'ar' ? 'يمكنك تقديم تجارب أفضل وأسرع وأكثر سلاسة لعملائك وشركائك ومورديك بسرعة أكبر ووضوح مستدام وقابلية للتوسع تتماشى مع أهداف العمل ونمو الأعمال.' : lang === 'gr' ? 'Bieten Sie Ihren Kunden, Partnern und Lieferanten bessere, schnellere und reibungslosere Erlebnisse mit höherer Geschwindigkeit, nachhaltiger Klarheit und Skalierbarkeit, abgestimmt auf Geschäftsziele und Geschäftswachstum.' : 'Monitoring is half the battle, having the right metrics to gauge impact is the other half. Customizable data filters and dashboards along with community and custom templates help you fingerprint impact accurately.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaCommentAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Éliminer le taux de désabonnement.` : lang === 'sp' ? 'Eliminar la deserción.' : lang === 'ar' ? 'القضاء على الزبد.' : lang === 'gr' ? 'Eliminieren Sie die Abwanderung.' : 'Eliminate Churn.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Donnez la priorité aux points de contact critiques de l’hyper-automatisation et attribuez les ressources proportionnées, qu’il s’agisse de coûts, de temps, de personnel ou de technologie.` : lang === 'sp' ? 'Priorice los puntos de contacto críticos de hiperautomatización y asigne los recursos proporcionales, ya sea en costos, tiempo, personal o tecnología.' : lang === 'ar' ? 'قم بإعطاء الأولوية لنقاط الاتصال المهمة للأتمتة الفائقة وتخصيص الموارد المناسبة، سواء كان ذلك في التكاليف أو الوقت أو الموظفين أو التكنولوجيا.' : lang === 'gr' ? 'Priorisieren Sie kritische Hyperautomatisierungs-Touchpoints und weisen Sie die entsprechenden Ressourcen zu, sei es in Bezug auf Kosten, Zeit, Personal oder Technologie.' : 'With Predictive Analytics, resource churn becomes a thing of the past due to a crystal clear understanding of where to divert, invest, and monitor critical resources without having to conduct hyper-automation implementation with guesswork.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', height: '380px' }}>
                <LiaArrowDownSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Planifiez aujourd’hui, transformez demain.` : lang === 'sp' ? 'Planifique hoy, transforme mañana.' : lang === 'ar' ? 'خطط اليوم، وتحول غدًا.' : lang === 'gr' ? 'Planen Sie heute, transformieren Sie morgen.' : 'Plan Today, Transform tomorrow.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Avec Process Mining, identifiez où l’hyper-automatisation a le plus d’impact à l’aide d’une surveillance en temps réel et d’analyses évolutives pour atténuer les goulots d’étranglement.` : lang === 'sp' ? 'Con Process Mining, identifique dónde la hiperautomatización genera el mayor impacto con la ayuda de monitoreo en tiempo real y análisis preparados para el futuro para mitigar los cuellos de botella.' : lang === 'ar' ? 'باستخدام عملية التنقيب، حدد المكان الذي تحقق فيه الأتمتة المفرطة التأثير الأكبر بمساعدة المراقبة في الوقت الفعلي والتحليلات المستقبلية للتخفيف من الاختناقات.' : lang === 'gr' ? 'Mit Process Mining können Sie mithilfe von Echtzeitüberwachung und zukunftssicheren Analysen genau feststellen, wo die Hyperautomatisierung die größte Wirkung erzielt, um Engpässe zu mindern.' : ' With Predictive Analytics, pinpoint where the hyper-automation delivers most impact with help of real-time monitoring and future-proof analytics to mitigate bottlenecks.'}
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
          }) : lang === "sp" ? LR_ITEMS1?.map((lrItem, lrIdx) => {
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
          }) : lang === "ar" ? LR_ITEMS2?.map((lrItem, lrIdx) => {
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
          }) : lang === "gr" ? LR_ITEMS3?.map((lrItem, lrIdx) => {
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
              {lang === 'fr' ? `Une vision complète des processus avec un impact global sur l’entreprise, comme jamais` : lang === 'sp' ? 'Conocimiento integral del proceso con un impacto empresarial holístico, ' : lang === 'ar' ? 'رؤية شاملة للعملية مع تأثير شامل على المؤسسة،' : lang === 'gr' ? 'Umfassende Prozesseinblicke mit ganzheitlichen Auswirkungen auf das Unternehmen, wie nie ' : 'Gather insight and implement crystal clear'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `auparavant.` : lang === 'sp' ? 'como nunca antes.' : lang === 'ar' ? 'لم يسبق له مثيل.' : lang === 'gr' ? 'zuvor.' : 'initiatives, like never before.'}
              </span>
            </Typography>
            {/* <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2, mb: 4 }}>
              AIRA is a one stop Robotic Process Automation platform that enables you to leverage benefits without costs or disruptions.


            </Typography> */}

            <div className="btn_group btn-group1">
              <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                {lang === 'fr' ? `Informations préventives. Impact rationalisé.` : lang === 'sp' ? 'Tirez parti d’AIRA pour votre entreprise dès aujourd’hui' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : 'Preemptive Insights. Streamlined Impact.'}

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