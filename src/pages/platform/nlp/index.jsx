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
    cardTitle: "Compréhension contextuelle",
    cardDesc:
      "Le NLP d'AIRA permet aux systèmes de saisir le sens au-delà des mots, fournissant des informations riches en contexte pour des décisions plus éclairées.",
    imgSrc: `reach_out_7.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Interaction humaine",
    cardDesc:
      "Obtenez une communication naturelle et intuitive avec le NLP d'AIRA, améliorant l'expérience utilisateur grâce à un traitement linguistique avancé.",
    imgSrc: `reach_out_8.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Traitement multimodal",
    cardDesc:
      "Transformez les données non structurées en informations exploitables en intégrant et en traitant de manière transparente des informations provenant de divers formats grâce aux capacités NLP d'AIRA.",
    imgSrc: `reach_out_9.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS1 = [
  {
    cardTitle: "Comprensión contextual",
    cardDesc:
      "La PNL de AIRA permite a los sistemas captar el significado más allá de las palabras, proporcionando información rica en contexto para tomar decisiones más informadas.",
    imgSrc: `reach_out_7.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Interacción similar a la humana",
    cardDesc:
      "Logre una comunicación natural e intuitiva con la PNL de AIRA, mejorando las experiencias del usuario a través del procesamiento avanzado del lenguaje.",
    imgSrc: `reach_out_8.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Procesamiento multimodal",
    cardDesc:
      "Transforme datos no estructurados en conocimientos procesables integrando y procesando perfectamente información de diversos formatos con las capacidades de PNL de AIRA.",
    imgSrc: `reach_out_9.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS2 = [
  {
    cardTitle: "الفهم السياقي",
    cardDesc:
      "تعمل تقنية البرمجة اللغوية العصبية (NLP) الخاصة بـ AIRA على تمكين الأنظمة من فهم المعنى وراء الكلمات، مما يوفر رؤى غنية بالسياق لاتخاذ قرارات أكثر استنارة",
    imgSrc: `reach_out_7.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "التفاعل الشبيه بالإنسان",
    cardDesc:
      "حقق تواصلًا طبيعيًا وبديهيًا مع البرمجة اللغوية العصبية (NLP) الخاصة بـ AIRA، مما يعزز تجارب المستخدم من خلال معالجة اللغة المتقدمة",
    imgSrc: `reach_out_8.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "المعالجة المتعددة الوسائط",
    cardDesc:
      "قم بتحويل البيانات غير المنظمة إلى رؤى قابلة للتنفيذ من خلال دمج المعلومات ومعالجتها بسلاسة من تنسيقات متنوعة باستخدام إمكانات البرمجة اللغوية العصبية (NLP) الخاصة بـ AIRA.",
    imgSrc: `reach_out_9.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS3 = [
  {
    cardTitle: "Kontextuelles Verständnis",
    cardDesc:
      "Das NLP von AIRA ermöglicht es Systemen, die Bedeutung jenseits von Worten zu erfassen, und liefert kontextreiche Erkenntnisse für fundiertere Entscheidungen.",
    imgSrc: `reach_out_7.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Menschenähnliche Interaktion",
    cardDesc:
      "Erzielen Sie eine natürliche und intuitive Kommunikation mit AIRAs NLP und verbessern Sie die Benutzererfahrung durch fortschrittliche Sprachverarbeitung.",
    imgSrc: `reach_out_8.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Multimodale Verarbeitung",
    cardDesc:
      "Verwandeln Sie unstrukturierte Daten in umsetzbare Erkenntnisse, indem Sie Informationen aus verschiedenen Formaten mit den NLP-Funktionen von AIRA nahtlos integrieren und verarbeiten.",
    imgSrc: `reach_out_9.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS4 = [
  {
    cardTitle: "Contextual Understanding",
    cardDesc:
      " AIRA's NLP empowers systems to grasp the meaning beyond words, providing context-rich insights for more informed decisions",
    imgSrc: `reach_out_7.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Human-Like Interaction",
    cardDesc:
      "Achieve natural and intuitive communication with AIRA's NLP, enhancing user experiences through advanced language processing.",
    imgSrc: `reach_out_8.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Multimodal Processing",
    cardDesc:
      "Transform unstructured data into actionable insights by seamlessly integrating and processing information from diverse formats with AIRA's NLP capabilities.      ",
    imgSrc: `reach_out_9.png`,
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



  useEffect(() => {
    getData();
  }, [val.category, val.type]);
  const [loading, setLoading] = useState(true);

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
                    {lang === 'fr' ? `Significatif. Contextuel. Humain-Comme.` : lang === 'sp' ? 'Significativo. Contextual. Humano.' : lang === 'ar' ? 'ذو معنى. سياقية. شبيه بالإنسان.' : lang === 'gr' ? 'Sinnvoll. Kontextbezogen. Menschenähnlich.' : 'Meaningful. Contextual. Human-like.'}
                    <br />
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Traitement du langage naturel dans AIRA` : lang === 'sp' ? 'Procesamiento del lenguaje natural en AIRA' : lang === 'ar' ? 'معالجة اللغات الطبيعية في AIRA' : lang === 'gr' ? 'Verarbeitung natürlicher Sprache in AIRA' : 'Natural Language Processing in AIRA'}

                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Multimodal. Tout droit. Avant-gardiste.` : lang === 'sp' ? 'Modifique y administre datos empresariales no estructurados para lograr una comprensión significativa a nivel de documento y conocimientos a nivel de proceso.' : lang === 'ar' ? 'قم بتعديل وإدارة بيانات المؤسسة غير المنظمة إلى فهم مفيد على مستوى المستند ورؤى على مستوى العملية.' : lang === 'gr' ? 'Modifizieren und verwalten Sie unstrukturierte Unternehmensdaten in aussagekräftige Erkenntnisse auf Dokumentebene und Erkenntnisse auf Prozessebene.' : 'Modify and manage unstructured enterprise data into meaningful document level understanding and process level insights.'}
                  </Typography>

                  {/* <div className="btn_group">
                    <button onClick={() => {
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                      {lang === 'fr' ? `Essayez AIRA pour votre entreprise` : lang === 'sp' ? 'Pruebe AIRA para su empresa' : lang === 'ar' ? 'جرب AIRA لمؤسستك' : lang === 'gr' ? 'Testen Sie AIRA für Ihr Unternehmen' : 'Try AIRA for your Enterprise'}
                      <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                    <button onClick={() => {
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
                src="/images/solutions/banking/bankingheader3.png"
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
            {lang === 'fr' ? `Signification centrée sur l’humain. Compréhension ` : lang === 'sp' ? 'Significado centrado en lo humano.' : lang === 'ar' ? 'الإنسانية تتمحور حول ا' : lang === 'gr' ? 'Menschenzentrierte Sinnhaftigkeit. ' : 'Human centric Meaningfulness.'}
            {' '}
            <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `alimentée par la machine.` : lang === 'sp' ? 'Comprensión impulsada por máquinas.' : lang === 'ar' ? 'المعنى. فهم مدعوم بالآلة.' : lang === 'gr' ? 'Maschinengestütztes Verstehen.' : 'Machine powered Understanding.'}
            </span>
          </Typography>

          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Le traitement du langage naturel (NLP) permet à AIRA d'extraire plus que de simples données optiques. Avec la PNL, vous pouvez approfondir la signification contextuelle et le positionnement d'un document pour mieux comprendre l'impact de l'hyper-automatisation.` : lang === 'sp' ? 'El procesamiento del lenguaje natural (NLP) permite a AIRA extraer más que solo datos ópticos. Con PNL, puede profundizar en el significado basado en el contexto y el posicionamiento del proceso de un documento para comprender mejor el impacto de la hiperautomatización.' : lang === 'ar' ? 'تتيح معالجة اللغات الطبيعية (NLP) لـ AIRA استخراج أكثر من مجرد بيانات بصرية. باستخدام البرمجة اللغوية العصبية (NLP)، يمكنك التعمق في المعنى المستند إلى السياق وتحديد موضع العملية للمستند لفهم تأثير الأتمتة الفائقة بشكل أفضل.' : lang === 'gr' ? 'Natural Language Processing (NLP) ermöglicht es AIRA, mehr als nur optische Daten zu extrahieren. Mit NLP können Sie sich mit der kontextbasierten Bedeutung und Prozesspositionierung eines Dokuments befassen, um die Auswirkungen der Hyperautomatisierung besser zu verstehen.' : 'Natural Language Processing (NLP) enables AIRA to extract more than just optical data. With NLP, you can delve into the context based meaning and process positioning of a document for better understanding hyper-automation impact.'}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Le traitement du langage naturel permet à votre entreprise de prendre ses grands volumes de données non structurées dans des documents et de les transformer en Business Intelligence.` : lang === 'sp' ? 'El procesamiento del lenguaje natural permite a su empresa tomar grandes volúmenes de datos no estructurados en documentos y transformarlos en Business Intelligence.' : lang === 'ar' ? 'تمكن معالجة اللغات الطبيعية مؤسستك من أخذ كميات كبيرة من البيانات غير المنظمة في المستندات وتحويلها إلى ذكاء أعمال.' : lang === 'gr' ? 'Mithilfe der Verarbeitung natürlicher Sprache kann Ihr Unternehmen große Mengen unstrukturierter Daten in Dokumenten in Business Intelligence umwandeln.' : ' Natural Language Processing enables your enterprise to take its large volumes of unstructured.'}
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
                  20%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les fabricants intégrant le NLP constatent une réduction des temps d’arrêt des équipements.` : lang === 'sp' ? 'Los fabricantes que incorporan PNL experimentan una reducción en el tiempo de inactividad de los equipos.' : lang === 'ar' ? 'الشركات المصنعة التي تدمج البرمجة اللغوية العصبية تشهد انخفاضًا في وقت توقف المعدات.' : lang === 'gr' ? 'Hersteller, die NLP einsetzen, verzeichnen eine Reduzierung der Ausfallzeiten ihrer Geräte.' : 'Manufacturers incorporating NLP experience a reduction in equipment downtime.'}
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
                  {lang === 'fr' ? `Gartner` : lang === 'sp' ? 'Gartner' : lang === 'ar' ? 'جارتنر' : lang === 'gr' ? 'Gärtner' : 'Gartner'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  30%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les entreprises textiles mettant en œuvre la PNL dans le service client observent une réduction du temps de réponse.` : lang === 'sp' ? 'Las empresas textiles que implementan PNL en la atención al cliente observan una reducción en el tiempo de respuesta.' : lang === 'ar' ? 'تلاحظ شركات النسيج التي تطبق البرمجة اللغوية العصبية في خدمة العملاء انخفاضًا في وقت الاستجابة.' : lang === 'gr' ? 'Textilunternehmen, die NLP im Kundenservice einsetzen, beobachten eine Verkürzung der Reaktionszeit.' : 'Textile businesses implementing NLP in customer service observe a reduction in response time.'}
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
                  {lang === 'fr' ? `IBM` : lang === 'sp' ? 'IBM' : lang === 'ar' ? 'آي بي إم' : lang === 'gr' ? 'IBM' : 'IBM'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                    40%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les banques intégrant la PNL dans leur service client constatent une réduction du temps de réponse aux demandes.` : lang === 'sp' ? 'Los bancos que incorporan PNL en el servicio al cliente experimentan una reducción en el tiempo de respuesta a las consultas.' : lang === 'ar' ? 'البنوك التي تدمج البرمجة اللغوية العصبية في خدمة العملاء تواجه انخفاضًا في وقت الاستجابة للاستفسار.' : lang === 'gr' ? 'Banken, die NLP in den Kundenservice integrieren, verzeichnen eine Verkürzung der Antwortzeit auf Anfragen.' : 'Banks incorporating NLP in customer service experience a reduction in inquiry response time.'}
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
              {lang === 'fr' ? `Extrait. Comprendre.` : lang === 'sp' ? 'Extracto. Entender.' : lang === 'ar' ? 'يفهم. تحول.' : lang === 'gr' ? 'Extrakt. Verstehen. ' : 'Extract. Understand.'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Transformer.` : lang === 'sp' ? 'Transformar.' : lang === 'ar' ? 'يستخرج.' : lang === 'gr' ? 'Verwandeln.' : 'Transform.'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
              {lang === 'fr' ? `Découvrez comment le traitement du langage naturel dans AIRA vous aide à améliorer la compréhension des documents pour votre entreprise.` : lang === 'sp' ? 'Descubra cómo el procesamiento del lenguaje natural en AIRA le ayuda a mejorar la comprensión de los documentos de su empresa.' : lang === 'ar' ? 'تعرف على كيف تساعدك معالجة اللغات الطبيعية في AIRA على تحسين فهم المستندات لمؤسستك.' : lang === 'gr' ? 'Erfahren Sie, wie die Verarbeitung natürlicher Sprache in AIRA Ihnen dabei hilft, das Dokumentverständnis für Ihr Unternehmen zu verbessern.' : 'Learn how Natural Language Processing in AIRA helps you enhance document understanding for your enterprise.'}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Compréhension cognitive` : lang === 'sp' ? 'Comprensión cognitiva ' : lang === 'ar' ? 'الفهم المعرفي' : lang === 'gr' ? 'Kognitives Verständnis ' : 'Comprensión cognitiva '}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Extrayez plus que de simples données identifiables. AIRA permet une analyse contextuelle et une compréhension de la signification des documents basée sur le traitement du langage naturel. .` : lang === 'sp' ? 'Extraiga más que solo datos identificables. AIRA permite el análisis contextual y la comprensión del significado de documentos basado en el procesamiento del lenguaje natural. .' : lang === 'ar' ? 'استخراج أكثر من مجرد بيانات يمكن تحديدها. يتيح AIRA التحليل السياقي وفهم معنى الوثيقة المستندة إلى معالجة اللغة الطبيعية. .' : lang === 'gr' ? 'Extrahieren Sie mehr als nur identifizierbare Daten. AIRA ermöglicht eine kontextbezogene Analyse und ein auf der Verarbeitung natürlicher Sprache basierendes Verständnis der Dokumentbedeutung. .' : 'Extract more than just identifiable data. AIRA enables contextual analysis and Natural Language Processing based document meaning understanding.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaMoneyBillAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Intelligence enrichie` : lang === 'sp' ? 'Inteligencia enriquecida' : lang === 'ar' ? 'الذكاء المخصب' : lang === 'gr' ? 'Angereicherte Intelligenz' : 'Enriched Intelligence'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `La puissance combinée du clustering basé sur l’apprentissage automatique et de la compréhension basée sur le traitement du langage naturel signifie des informations de Business Intelligence enrichies et améliorées. .` : lang === 'sp' ? 'El poder combinado de la agrupación basada en el aprendizaje automático y la comprensión basada en el procesamiento del lenguaje natural significa conocimientos de inteligencia empresarial enriquecidos y mejorados. .' : lang === 'ar' ? 'إن الجمع بين قوة التجميع القائم على التعلم الآلي والفهم القائم على معالجة اللغات الطبيعية يعني رؤى ذكاء الأعمال المخصبة والمحسنة. .' : lang === 'gr' ? 'Die kombinierte Leistungsfähigkeit von auf maschinellem Lernen basierendem Clustering und auf der Verarbeitung natürlicher Sprache basierendem Verständnis ermöglicht bereicherte und verbesserte Business-Intelligence-Einblicke. .' : 'Combined power of Machine Learning based Clustering and Natural Language Processing based understanding means enriched and enhanced Business Intelligence insights.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaCommentAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Planifier le succès.` : lang === 'sp' ? 'Programar el éxito.' : lang === 'ar' ? 'جدولة النجاح.' : lang === 'gr' ? 'Planen Sie den Erfolg.' : 'Schedule Success.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `La compréhension sémantique avec la PNL permet à AIRA d'équiper votre entreprise des sélections de déclencheurs basées sur les actions les plus appropriées pour une variété de processus et de flux de travail.` : lang === 'sp' ? 'La comprensión semántica con PNL permite a AIRA equipar a su empresa con las selecciones de desencadenadores basadas en acciones más apropiadas en una variedad de procesos y flujos de trabajo.' : lang === 'ar' ? 'يتيح الفهم الدلالي مع البرمجة اللغوية العصبية (NLP) لـ AIRA تزويد مؤسستك باختيارات المشغلات الأكثر ملائمة المستندة إلى الإجراء عبر مجموعة متنوعة من العمليات وسير العمل.' : lang === 'gr' ? 'Das semantische Verständnis mit NLP ermöglicht es AIRA, Ihr Unternehmen mit der am besten geeigneten aktionsbasierten Triggerauswahl für eine Vielzahl von Prozessen und Arbeitsabläufen auszustatten.' : 'Semantic understanding with NLP enables AIRA to equip your enterprise with the most appropriate action based trigger selections across a variety of processes and workflows.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaArrowDownSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Personnalisez l'excellence.` : lang === 'sp' ? 'Personaliza la excelencia.' : lang === 'ar' ? 'إضفاء الطابع الشخصي على التميز.' : lang === 'gr' ? 'Personalisieren Sie Exzellenz.' : 'Personalise excellence.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Grâce à l'intelligence de marché basée sur la PNL, votre entreprise peut véritablement personnaliser et personnaliser les propositions de valeur commerciale, garantissant ainsi l'engagement des bonnes cohortes de clients de la meilleure manière possible. .` : lang === 'sp' ? 'Con la inteligencia de mercado basada en PNL, su empresa puede realmente personalizar las propuestas de valor empresarial, garantizando que los grupos de clientes adecuados participen de la mejor manera posible. .' : lang === 'ar' ? 'باستخدام ذكاء السوق القائم على البرمجة اللغوية العصبية (NLP)، يمكن لمؤسستك تخصيص عروض قيمة الأعمال وتخصيصها حقًا، مما يضمن مشاركة مجموعات العملاء المناسبة بأفضل الطرق الممكنة. .' : lang === 'gr' ? 'Mit NLP-basierten Marktinformationen kann Ihr Unternehmen die geschäftlichen Wertversprechen wirklich personalisieren und anpassen und so sicherstellen, dass die richtigen Kundengruppen bestmöglich angesprochen werden. .' : 'With NLP based market intelligence, your enterprise can truly personalise and customise the business value propositions, ensuring the right customer cohorts are engaged in the best ways possible.'}
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
      <Box sx={{ backgroundColor: '#F0F0F0', py: 10, mb: 3 }}>
        <Container maxWidth="lg">
          <Stack>
            <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>

              {lang === 'fr' ? `
Encadrez l’excellence centrée sur l’humain avec une compréhension pilotée par la machine pour les 
                ` : lang === 'sp' ? 'Enmarque la excelencia centrada en las personas con una comprensión impulsada por las máquinas ' : lang === 'ar' ? 'تأطير التميز المرتكز على الإنسان من خلال الفهم الموجه ' : lang === 'gr' ? ' Gestalten Sie die Human Centric Excellence mit maschinengesteuertem Verständnis für' : ' Rame the Human Centric Excellence with Machine'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `transformations au niveau de l’entreprise.` : lang === 'sp' ? 'para transformaciones a nivel empresarial.' : lang === 'ar' ? 'آليًا للتحولات على مستوى المؤسسة.' : lang === 'gr' ? 'Transformationen auf Unternehmensebene.' : 'driven Understanding for Enterprise Level Transformations.'}
              </span>
            </Typography>
            {/* <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2, mb: 4 }}>
              AIRA is a one stop Robotic Process Automation platform that enables you to leverage benefits without costs or disruptions.
            </Typography> */}

            <div className="btn_group btn-group1">
              <button onClick={() => {
                router.push('/contact');
              }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : ' Leverage AIRA for your Enterprise Today'}
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

export default Index