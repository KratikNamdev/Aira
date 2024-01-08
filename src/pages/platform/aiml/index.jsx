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
    cardTitle: "Compréhension cognitive",
    cardDesc:
      "AIRA va au-delà de l'identification des données, permettant l'analyse contextuelle et le traitement du langage naturel (NLP) pour une compréhension plus approfondie de la signification des documents.",
    cardDesc1:
      "french",
    imgSrc: `reach_out_4.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Diversité dynamique",
    cardDesc:
      "Grâce au traitement multimodal des documents, AIRA extrait, analyse et traite les données provenant de diverses sources, qu'il s'agisse de textes ou d'images, garantissant flexibilité et adaptabilité.",
    imgSrc: `reach_out_5.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Infuser l’excellence",
    cardDesc:
      "La reconnaissance optique de caractères (OCR) améliorée dans AIRA permet un traitement précis des documents, même avec des échantillons asymétriques ou bruyants, éliminant les marges d'erreur pour une précision accrue.",
    imgSrc: `reach_out_6.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS1 = [
  {
    cardTitle: "Comprensión cognitiva",
    cardDesc:
      "AIRA va más allá de la identificación de datos, permitiendo el análisis contextual y el procesamiento del lenguaje natural (NLP) para una comprensión más profunda del significado de los documentos.      ",
    cardDesc1:
      "french",
    imgSrc: `reach_out_4.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Dinámicamente diversos",
    cardDesc:
      "Con el procesamiento de documentos multimodal, AIRA extrae, analiza y procesa datos de diversas fuentes, ya sea texto o imágenes, garantizando flexibilidad y adaptabilidad.",
    imgSrc: `reach_out_5.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Infundir excelencia",
    cardDesc:
      "El reconocimiento óptico de caracteres (OCR) mejorado en AIRA ofrece un procesamiento de documentos preciso, incluso con muestras torcidas o ruidosas, eliminando los márgenes de error para una mayor precisión.",
    imgSrc: `reach_out_6.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS2 = [
  {
    cardTitle: "الفهم المعرفي",
    cardDesc:
      "يتجاوز AIRA تحديد البيانات، حيث يتيح التحليل السياقي ومعالجة اللغات الطبيعية (NLP) لفهم أعمق لمعاني المستندات.",
    cardDesc1:
      "french",
    imgSrc: `reach_out_4.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "متنوعة ديناميكيا",
    cardDesc:
      "من خلال معالجة المستندات متعددة الوسائط، يقوم AIRA باستخراج البيانات وتحليلها ومعالجتها من مصادر مختلفة، سواء كانت نصًا أو صورًا، مما يضمن المرونة والقدرة على التكيف.",
    imgSrc: `reach_out_5.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "غرس التميز",
    cardDesc:
      "يوفر التعرف البصري المحسّن على الأحرف (OCR) في AIRA معالجة دقيقة للمستندات، حتى مع العينات المنحرفة أو المزعجة، مما يزيل هوامش الخطأ للحصول على دقة عالية.",
    imgSrc: `reach_out_6.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS3 = [
  {
    cardTitle: "Kognitives Verständnis",
    cardDesc:
      "AIRA geht über die Datenidentifizierung hinaus und ermöglicht kontextbezogene Analyse und Verarbeitung natürlicher Sprache (NLP) für ein tieferes Verständnis der Dokumentbedeutungen.",
    cardDesc1:
      "french",
    imgSrc: `reach_out_4.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Dynamisch vielfältig",
    cardDesc:
      "Mit der multimodalen Dokumentenverarbeitung extrahiert, analysiert und verarbeitet AIRA Daten aus verschiedenen Quellen, sei es Text oder Bilder, und gewährleistet so Flexibilität und Anpassungsfähigkeit",
    imgSrc: `reach_out_5.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Exzellenz einbringen",
    cardDesc:
      "Die verbesserte optische Zeichenerkennung (OCR) in AIRA sorgt für eine präzise Dokumentenverarbeitung, selbst bei verzerrten oder verrauschten Proben, wodurch Fehlermargen eliminiert und die Präzision erhöht wird.",
    imgSrc: `reach_out_6.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];


const LR_ITEMS4 = [
  {
    cardTitle: "Cognitive Understanding",
    cardDesc:
      "AIRA goes beyond data identification, enabling contextual analysis and Natural Language Processing (NLP) for a deeper understanding of document meanings.",
    cardDesc1:
      "french",
    imgSrc: `reach_out_4.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Dynamically Diverse",
    cardDesc:
      "With multimodal document processing, AIRA extracts, analyses, and processes data from various sources, be it text or images, ensuring flexibility and adaptability.",
    imgSrc: `reach_out_5.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Infuse Excellence",
    cardDesc:
      "Enhanced Optical Character Recognition (OCR) in AIRA delivers accurate document processing, even with skewed or noisy samples, eliminating error margins for heightened precision.",
    imgSrc: `reach_out_6.png`,
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
  // console.log(lang);
  const router = useRouter();
  const [BLOGS, setBLOGS] = useState([]);
  const [loading, setLoading] = useState(true);


  const [val, setVal] = useState({
    category: "",
    type: "",
  });



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

                    {lang === 'fr' ? `Adaptatif. Évolutif. Transformateur.` : lang === 'sp' ? 'Adaptado. Escalable. Transformador.' : lang === 'ar' ? 'تنفيذ. مراقب. مقياس.' : lang === 'gr' ? 'Adaptiv. Skalierbar. Transformativ.' : 'Adaptive. Scalable. Transformative.'}
                    <br />
                    <span className='span' style={{ color: Colors.airaSecondary }}>

                      {lang === 'fr' ? `Intelligence artificielle et apprentissage automatique dans AIRA` : lang === 'sp' ? 'Inteligencia artificial y aprendizaje automático en AIRA' : lang === 'ar' ? 'الذكاء الاصطناعي والتعلم الآلي في AIRA' : lang === 'gr' ? 'Künstliche Intelligenz und maschinelles Lernen in AIRA' : 'Artificial Intelligence & Machine Learning in AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Découvrez comment AIRA exploite les capacités adaptatives de l’IA/ML pour enrichir l’automatisation des processus robotiques pour les entreprises.` : lang === 'sp' ? 'Obtenga más información sobre cómo AIRA aprovecha las capacidades adaptativas de AI/ML para enriquecer la automatización robótica de procesos para empresas.' : lang === 'ar' ? 'تعرف على المزيد حول كيفية استفادة AIRA من القدرات التكيفية للذكاء الاصطناعي/التعلم الآلي لإثراء أتمتة العمليات الروبوتية للمؤسسات.' : lang === 'gr' ? 'Erfahren Sie mehr darüber, wie AIRA die adaptiven Fähigkeiten von KI/ML nutzt, um die robotergestützte Prozessautomatisierung für Unternehmen zu bereichern.' : 'Learn more about how AIRA leverages the adaptive capabilities of AI/ML to enrich Robotic Process Automation for Enterprises.'}
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
                src="/images/solutions/banking/bankingheader2.png"
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
            {lang === 'fr' ? `Découvrez les possibilités.` : lang === 'sp' ? 'Descubra posibilidades.' : lang === 'ar' ? 'الاحتمالات. تبسيط المبادرات.' : lang === 'gr' ? 'Entdecken Sie Möglichkeiten.' : 'Discover Possibilities.'} {' '}
            <span className='span' style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `Rationaliser les initiatives.` : lang === 'sp' ? 'Agilizar iniciativas.' : lang === 'ar' ? 'اكتشف' : lang === 'gr' ? 'Optimieren Sie Initiativen.' : 'Streamline Initiatives.'}
            </span>
          </Typography>

          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Grâce à l'intelligence artificielle qui enrichit la fiabilité de l'automatisation robotique des processus, AIRA fournit un centre de transformation numérique unifié permettant aux entreprises de faire évoluer l'automatisation des processus de manière transparente.` : lang === 'sp' ? 'Con la inteligencia artificial que enriquece la confiabilidad de la automatización robótica de procesos, AIRA proporciona un centro de transformación digital unificado para que las empresas escalen la automatización de procesos sin problemas.' : lang === 'ar' ? 'بفضل الذكاء الاصطناعي الذي يعمل على إثراء موثوقية أتمتة العمليات الروبوتية، توفر AIRA مركزًا موحدًا للتحول الرقمي للمؤسسات لتوسيع نطاق أتمتة العمليات بسلاسة.' : lang === 'gr' ? 'Da künstliche Intelligenz die Zuverlässigkeit der robotergestützten Prozessautomatisierung erhöht, bietet AIRA einen einheitlichen Hub für die digitale Transformation für Unternehmen, um die Prozessautomatisierung nahtlos zu skalieren.' : 'With Artificial Intelligence enriching the reliability of Robotic Process Automation, AIRA provides a unified digital transformation hub for enterprises to scale process automation seamlessly.'}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Vous permettant non seulement d’exploiter, mais également de personnaliser la puissance du machine learning en fonction des objectifs de votre entreprise et de vos objectifs de transformation.` : lang === 'sp' ? 'Permitiéndole no solo aprovechar sino también personalizar el poder del aprendizaje automático según sus metas empresariales y objetivos de transformación.' : lang === 'ar' ? 'لا يتيح لك الاستفادة من قوة التعلم الآلي فحسب، بل أيضًا تخصيصها بما يتوافق مع أهداف مؤسستك وأهداف التحول.' : lang === 'gr' ? 'So können Sie die Leistungsfähigkeit des maschinellen Lernens nicht nur nutzen, sondern auch an Ihre Unternehmensziele und Transformationsziele anpassen.' : ' Enabling you to not only leverage but also customise the power of machine learning to your enterprise goals and transformation objectives.'}
          </Typography>

        </Container>
      </Box>

      <Box className="tyty" sx={{ backgroundColor: '#6755DF', pb: 8, pt: 3 }}>
        <Container className='ooo' maxWidth="lg">
          <Grid className='ooo' container spacing={12}>
            <Grid className='ik' item xs={12} md={4}>
              <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px', minHeight:"300px" }}>
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                  <Typography color={'#6755DF'}>
                  {lang === 'fr' ? `McKinsey` : lang === 'sp' ? 'McKinsey' : lang === 'ar' ? 'ماكينزي' : lang === 'gr' ? 'McKinsey' : 'McKinsey'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  15-20%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les fabricants intégrant un contrôle qualité basé sur l’IA signalent une réduction des défauts des produits.` : lang === 'sp' ? 'Los fabricantes que incorporan control de calidad basado en IA informan de una reducción en los defectos de los productos.' : lang === 'ar' ? 'تشير الشركات المصنعة التي تدمج مراقبة الجودة المعتمدة على الذكاء الاصطناعي إلى انخفاض في عيوب المنتج.' : lang === 'gr' ? 'Hersteller, die eine KI-gesteuerte Qualitätskontrolle einführen, berichten von einer Verringerung der Produktfehler.' : 'Manufacturers incorporating AI-driven quality control report a reduction in product defects.'}
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
                  {lang === 'fr' ? `Accenture` : lang === 'sp' ? 'acento' : lang === 'ar' ? 'أكسنتشر' : lang === 'gr' ? 'Accenture' : 'Accenture'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  20-25%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les entreprises textiles mettant en œuvre une personnalisation basée sur l’IA observent une augmentation de l’engagement client.` : lang === 'sp' ? 'Las empresas textiles que implementan la personalización impulsada por la IA observan un aumento en la participación del cliente.' : lang === 'ar' ? 'لاحظت شركات النسيج التي تطبق التخصيص القائم على الذكاء الاصطناعي زيادة في مشاركة العملاء.' : lang === 'gr' ? 'Textilunternehmen, die KI-gesteuerte Personalisierung implementieren, beobachten eine Zunahme der Kundenbindung.' : 'Textile businesses implementing AI-driven personalization observe an increase in customer engagement.'}
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
                  {lang === 'fr' ? `IBM` : lang === 'sp' ? 'IBM' : lang === 'ar' ? 'آي بي إم' : lang === 'gr' ? 'IBM' : 'IBM'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  30-40%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les banques intégrant l’IA dans leur service client constatent une réduction du temps de réponse.` : lang === 'sp' ? 'Los bancos que incorporan IA en la atención al cliente experimentan una reducción en el tiempo de respuesta.' : lang === 'ar' ? 'تواجه البنوك التي تدمج الذكاء الاصطناعي في خدمة العملاء انخفاضًا في وقت الاستجابة.' : lang === 'gr' ? 'Banken, die KI in den Kundenservice integrieren, verzeichnen eine Verkürzung der Reaktionszeit.' : 'Banks incorporating AI in customer service experience a reduction in response time.'}
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
              {lang === 'fr' ? `Élaborez une stratégie. Rationaliser.` : lang === 'sp' ? 'Elaborar estrategias. Línea de corriente.' : lang === 'ar' ? 'انسيابية. تحول.' : lang === 'gr' ? 'Strategisieren Sie. Rationalisieren.' : 'Strategize. Streamline.'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Transformer.` : lang === 'sp' ? 'Transformar.' : lang === 'ar' ? 'تنفيذ. مراقب. مقياس.' : lang === 'gr' ? 'Verwandeln.' : 'Transform.'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
              {lang === 'fr' ? `Découvrez comment AI/Ml permet une transformation numérique évolutive pour votre entreprise.` : lang === 'sp' ? 'Descubra cómo AI/Ml ofrece una transformación digital escalable para su empresa.' : lang === 'ar' ? 'وضع استراتيجية.' : lang === 'gr' ? 'Erfahren Sie, wie KI/Ml eine skalierbare digitale Transformation für Ihr Unternehmen ermöglicht.' : ' Learn how AI/Ml delivers scalable digital transformation for your enterprise.'}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', minHeight:'300px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Transformez les données en décisions` : lang === 'sp' ? 'Transformar datos en decisiones ' : lang === 'ar' ? 'تحويل البيانات إلى قرارات' : lang === 'gr' ? 'Daten in Entscheidungen umwandeln ' : ' Transform Data into Decisions'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Catapultez les matrices de business intelligence et de prise de décision en tirant parti du Machine Learning pour obtenir des informations commerciales à partir des données d’entreprise. ` : lang === 'sp' ? 'Catapulte la inteligencia empresarial y las matrices de toma de decisiones aprovechando el aprendizaje automático para obtener información empresarial a partir de datos empresariales. .' : lang === 'ar' ? 'ذكاء الأعمال ومصفوفات اتخاذ القرار من خلال الاستفادة من التعلم الآلي لاكتساب رؤى الأعمال من بيانات المؤسسة. .' : lang === 'gr' ? 'Katapultieren Sie Business Intelligence und Entscheidungsmatrizen, indem Sie maschinelles Lernen nutzen, um geschäftliche Erkenntnisse aus Unternehmensdaten zu gewinnen. .' : 'Catapult business intelligence and decision making matrices by leverage Machine Learning to gain business insights from enterprise data.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', minHeight:'300px'}}>
                <LiaMoneyBillAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Automatisez à l’échelle mondiale.` : lang === 'sp' ? 'Automatizar globalmente.' : lang === 'ar' ? 'أتمتة على مستوى العالم.' : lang === 'gr' ? 'Global automatisieren.' : 'Automate globally.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Le Machine Learning vous permet de télécharger tous les aspects des données d’entreprise basées sur les processus pour la formation, les tests et le déploiement de modèles, offrant ainsi des transformations numériques sur mesure. ` : lang === 'sp' ? 'Machine Learning le permite cargar todos los aspectos de los datos empresariales basados en procesos para la capacitación, prueba e implementación de modelos, brindando transformaciones digitales personalizadas. .' : lang === 'ar' ? 'يمكّنك التعلم الآلي من تحميل كل جانب من جوانب بيانات المؤسسة القائمة على العمليات للتدريب النموذجي والاختبار والنشر، وتقديم تحويلات رقمية مخصصة. .' : lang === 'gr' ? 'Mit maschinellem Lernen können Sie jeden Aspekt prozessbasierter Unternehmensdaten für Modelltraining, Tests und Bereitstellung hochladen und so maßgeschneiderte digitale Transformationen ermöglichen.' : ' Machine Learning enables you to upload every aspect of process based enterprise data for model training, testing and deployment, delivering tailored digital transformations.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaCommentAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Amplifiez l’efficacité.` : lang === 'sp' ? 'Amplificar la eficiencia.' : lang === 'ar' ? 'تضخيم الكفاءة.' : lang === 'gr' ? 'Effizienz steigern.' : ' Amplify efficiency.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Planifiez, prévoyez, rationalisez et élaborez des stratégies pour chaque aspect de l’hyper-automatisation d’entreprise sans tests inutiles sur le terrain.  ` : lang === 'sp' ? 'Planifique, pronostique, optimice y diseñe estrategias para todos los aspectos de la hiperautomatización empresarial sin desperdicio de pruebas de campo. .' : lang === 'ar' ? 'قم بالتخطيط والتنبؤ والتبسيط ووضع إستراتيجيات لكل جانب من جوانب التشغيل الآلي الفائق للمؤسسة دون إجراء اختبارات ميدانية مهدرة. .' : lang === 'gr' ? 'Planen, prognostizieren, optimieren und strategisieren Sie jeden Aspekt der Hyperautomatisierung von Unternehmen ohne verschwenderische Feldtests. . ' : 'Plan, forecast, streamline and strategize every aspect of enterprise hyper-automation without wasteful field tests.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', minHeight:'300px' }}>
                <LiaArrowDownSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Maximisez la productivité.` : lang === 'sp' ? 'Amplificar la eficiencia.' : lang === 'ar' ? 'تعظيم الإنتاجية.' : lang === 'gr' ? 'Maximieren Sie die Produktivität.' : 'Maximise productivity.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Grâce aux fonctionnalités d’apprentissage automatique hyper-automatisées, votre organisation peut maximiser la productivité sans créer d’inertie du personnel.` : lang === 'sp' ? 'Con funcionalidades de aprendizaje automático hiperautomatizadas, suorganización puede maximizar la productividad sin crear inercia en el personal.' : lang === 'ar' ? 'بفضل وظائف التعلم الآلي فائقة الأتمتة، يمكن لمؤسستك زيادة الإنتاجية إلى الحد الأقصى دون التسبب في الجمود لدى الموظفين.' : lang === 'gr' ? 'Mit hyperautomatisierten Funktionen für maschinelles Lernen können SieOrganisation kann die Produktivität maximieren, ohne Personalträgheit zu erzeugen.' : 'With hyper-automated machine learning functionalities, your organisation can maximise productivity without creating personnel inertia.'}
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
          lang === "fr" ? LR_ITEMS?.map((lrItem, lrIdx) => {
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
              {lang === 'fr' ? `Découvrez l’impact et les avantages de transformations numériques complètes basées sur l’IA/ML ` : lang === 'sp' ? 'Descubra como nunca antes el impacto y las ventajas de las transformaciones digitales integrales ' : lang === 'ar' ? 'اكتشف تأثير ومزايا التحولات الرقمية الشاملة المدعومة بالذكاء الاصطناعي/التعلم الآلي بشكل لم يسبق' : lang === 'gr' ? 'Entdecken Sie die Auswirkungen und Vorteile umfassender KI/ML-gestützter digitaler' : ' Discover the impact and advantages of comprehensive AI/ML powered Digital'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `comme jamais auparavant.` : lang === 'sp' ? 'impulsadas por IA/ML.' : lang === 'ar' ? 'له مثيل.' : lang === 'gr' ? 'Transformationen wie nie zuvor.' : 'Transformations like never before.'}
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
                {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang === 'sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم	احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang === 'gr' ? 'Buchen Sie ein Demo-Beratungsgespräch mit unserem Produktteam' : 'Book a Demo Consultation Call with our Product Team'}
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
  )
}

export default Index;
