import React,{useState,useEffect} from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  CircularProgress
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
    cardTitle: "Technologie de pointe",
    cardDesc:
      "Le traitement intelligent des documents AIRA exploite des technologies avancées telles que l'OCR amélioré et le traitement du langage naturel pour garantir une gestion précise et efficace des documents.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Compatibilité multiformat",
    cardDesc:
      "Grâce à une architecture multipile robuste, AIRA traite de manière transparente divers formats de documents, notamment les PDF, .jpegs, .pngs et autres documents lisibles par machine, offrant ainsi une solution complète pour les besoins variés des entreprises.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Hyper-automatisation efficace",
    cardDesc:
      "Accélérez les processus d’entreprise en hyper-automatisant le traitement des documents. Le traitement intelligent des documents d'AIRA optimise les flux de travail, améliore la productivité et offre des opérations rationalisées aux entreprises à la recherche de solutions d'automatisation avancées.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS1 = [
  {
    cardTitle: "Tecnología de vanguardia",
    cardDesc:
      "AIRA Intelligent Document Processing aprovecha tecnologías avanzadas como OCR mejorado y procesamiento de lenguaje natural para garantizar un manejo de documentos preciso y eficiente.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Compatibilidad multiformato",
    cardDesc:
      "Con una sólida arquitectura multipila, AIRA procesa sin problemas diversos formatos de documentos, incluidos PDF, .jpegs, .pngs y otros documentos legibles por máquina, proporcionando una solución integral para diversas necesidades empresariales.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Hiperautomatización eficiente",
    cardDesc:
      "Acelere los procesos empresariales hiperautomatizando el procesamiento de documentos. El procesamiento inteligente de documentos de AIRA optimiza los flujos de trabajo, mejora la productividad y ofrece operaciones optimizadas para empresas que buscan soluciones de automatización avanzadas.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS2 = [
  {
    cardTitle: "أحدث التقنيات",
    cardDesc:
      "تستفيد المعالجة الذكية للمستندات من AIRA من التقنيات المتقدمة مثل التعرف الضوئي على الحروف المحسّن ومعالجة اللغات الطبيعية لضمان معالجة المستندات بدقة وكفاءة",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "التوافق متعدد التنسيقات",
    cardDesc:
      "فضل البنية القوية متعددة الحزم، يقوم AIRA بمعالجة تنسيقات المستندات المتنوعة بسلاسة، بما في ذلك ملفات PDF و.jpegs و.pngs وغيرها من المستندات القابلة للقراءة آليًا، مما يوفر حلاً شاملاً لاحتياجات المؤسسات المتنوعة.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "الأتمتة المفرطة الفعالة",
    cardDesc:
      "قم بتسريع عمليات المؤسسة من خلال التشغيل الآلي الفائق لمعالجة المستندات. تعمل المعالجة الذكية للمستندات من AIRA على تحسين سير العمل وتعزيز الإنتاجية وتوفير عمليات مبسطة للشركات التي تبحث عن حلول أتمتة متقدمة.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS3 = [
  {
    cardTitle: "Neuste Technologie",
    cardDesc:
      " AIRA Intelligent Document Processing nutzt fortschrittliche Technologien wie Enhanced OCR und Natural Language Processing, um eine genaue und effiziente Dokumentenverarbeitung zu gewährleisten",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Multiformat-Kompatibilität",
    cardDesc:
      "Mit einer robusten Multi-Stack-Architektur verarbeitet AIRA nahtlos verschiedene Dokumentformate, darunter PDFs, JPEGs, PNGs und andere maschinenlesbare Dokumente, und bietet so eine umfassende Lösung für unterschiedliche Unternehmensanforderungen.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Effiziente Hyperautomation",
    cardDesc:
      "Beschleunigen Sie Unternehmensprozesse durch Hyperautomatisierung der Dokumentenverarbeitung. Die intelligente Dokumentenverarbeitung von AIRA optimiert Arbeitsabläufe, steigert die Produktivität und sorgt für optimierte Abläufe für Unternehmen, die fortschrittliche Automatisierungslösungen suchen.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS4 = [
  {
    cardTitle: "Cutting-Edge Technology",
    cardDesc:
      "AIRA Intelligent Document Processing leverages advanced technologies such as Enhanced OCR and Natural Language Processing to ensure accurate and efficient document handling.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Multi-Format Compatibility",
    cardDesc:
      "With a robust multi-stack architecture, AIRA seamlessly processes diverse document formats, including PDFs, .jpegs, .pngs, and other machine-readable documents, providing a comprehensive solution for varied enterprise needs.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Efficient Hyper-Automation",
    cardDesc:
      "Accelerate enterprise processes by hyper-automating document processing. AIRA's Intelligent Document Processing optimises workflows, enhances productivity, and delivers streamlined operations for businesses seeking advanced automation solutions.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];
const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage.getItem('lang'));
  }, []);
  // console.log(lang);
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
                    {lang === 'fr' ? `Multimodal. Tout droit. Avant-gardiste.` : lang === 'sp' ? 'Multimodal. Directo. Innovador.' : lang === 'ar' ? 'متعدد الوسائط. مباشرة من خلال. المتطور والحديث.' : lang === 'gr' ? 'Multimodal. Gerade durch. Innovativ, auf dem neuesten Stand.' : 'Multimodal. Straight-through. Cutting-edge.'}
                    <br />
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Traitement intelligent des documents dans AIRA` : lang === 'sp' ? 'Procesamiento inteligente de documentos en AIRA' : lang === 'ar' ? 'معالجة المستندات الذكية في AIRA' : lang === 'gr' ? 'Intelligente Dokumentenverarbeitung in AIRA' : ' Intelligent Document Processing in AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                  {lang === 'fr' ? `Transformez les documents de processus métier statiques en briques d'hyper-automatisation dynamiques améliorant l'activité.` : lang === 'sp' ? 'Transforme documentos estáticos de procesos de negocio en bloques dinámicos de hiperautomatización que mejoren el negocio.' : lang === 'ar' ? 'قم بتحويل مستندات عمليات الأعمال الثابتة إلى أعمال ديناميكية تعمل على تعزيز وحدات الأتمتة الفائقة.' : lang === 'gr' ? 'Verwandeln Sie statische Geschäftsprozessdokumente in dynamische, geschäftssteigernde Hyperautomatisierungsbausteine.' : 'Transform static business process documents into dynamic business enhancing hyper-automation bricks.'}
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
                    {lang === 'fr' ? `Réservez un appel de démonstration` : lang === 'sp' ? 'Reserve una llamada de demostración' : lang === 'ar' ? 'حجز مكالمة تجريبية' : lang === 'gr' ? 'Testen Sie AIRA für Ihr Unternehmen	Buchen Sie einen Demo-Anruf' : 'Book a Demo Call'}
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                  </div> */}
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/bankingheader8.png"
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
            {lang === 'fr' ? `Traitement dynamique.` : lang === 'sp' ? 'Procesamiento dinámico.' : lang === 'ar' ? 'المعالجة الديناميكية.' : lang === 'gr' ? 'Dynamische Verarbeitung.' : 'Dynamic Processing.'} {' '}
            <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `Compréhension unifiée.` : lang === 'sp' ? 'Comprensión unificada.' : lang === 'ar' ? 'التفاهم الموحد.' : lang === 'gr' ? 'Einheitliches Verständnis.' : 'Unified Understanding.'}
            </span>
          </Typography>

          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Le traitement intelligent des documents dans AIRA exploite une architecture technologique multi-pile avec des technologies de pointe telles que l'OCR amélioré et le traitement du langage naturel.` : lang === 'sp' ? 'El procesamiento inteligente de documentos en AIRA aprovecha una arquitectura tecnológica de múltiples pilas con tecnologías de vanguardia como OCR mejorado y procesamiento del lenguaje natural.' : lang === 'ar' ? 'تستفيد المعالجة الذكية للمستندات في AIRA من البنية التكنولوجية متعددة الحزم مع التقنيات المتطورة مثل التعرف الضوئي على الحروف المحسن ومعالجة اللغات الطبيعية.' : lang === 'gr' ? 'Die intelligente Dokumentenverarbeitung in AIRA nutzt eine Multi-Stack-Technologiearchitektur mit modernsten Technologien wie Enhanced OCR und Natural Language Processing.' : 'Intelligent Document Processing in AIRA leverages a multi-stack technological architecture with cutting-edge technologies such as Enhanced OCR and Natural Language Processing.'}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Hyper-automatisez le traitement des documents dans plusieurs formats essentiels de l'entreprise tels que les PDF, .jpegs, .pngs et autres lisibles par machine. documents pour des processus d’entreprise efficaces et accélérés.` : lang === 'sp' ? 'Hiperautomatice el procesamiento de documentos en múltiples formatos empresariales esenciales, como PDF, .jpegs, .pngs y otros documentos legibles por máquina para procesos empresariales eficientes y acelerados.' : lang === 'ar' ? 'معالجة المستندات بشكل آلي للغاية عبر العديد من التنسيقات الأساسية للمؤسسات مثل ملفات PDF و.jpegs و.pngs وغيرها من المستندات القابلة للقراءة آليًا لإجراء عمليات مؤسسية فعالة ومتسارعة.' : lang === 'gr' ? 'Hyperautomatisieren Sie die Dokumentenverarbeitung in mehreren unternehmenswichtigen Formaten wie PDFs, JPEGs, PNGs und anderen maschinenlesbaren Dokumenten für effiziente und beschleunigte Unternehmensprozesse.' : 'Hyper-automate document processing across multiple enterprise essential formats such as PDFs, .jpegs, .pngs and other machine readable documents for efficient and accelerated enterprise processes.'}
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
                  40-60%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les fabricants mettant en œuvre l’IDP constatent une réduction du temps de traitement des documents, améliorant ainsi l’efficacité opérationnelle.` : lang === 'sp' ? 'Los fabricantes que implementan IDP experimentan una reducción en el tiempo de procesamiento de documentos, lo que mejora la eficiencia operativa.' : lang === 'ar' ? 'تواجه الشركات المصنعة التي تطبق IDP انخفاضًا في وقت معالجة المستندات، مما يعزز الكفاءة التشغيلية.' : lang === 'gr' ? 'Hersteller, die IDP implementieren, verkürzen die Bearbeitungszeit für Dokumente und steigern so die betriebliche Effizienz.' : 'Manufacturers implementing IDP experience a reduction in document processing time, enhancing operational efficiency.'}
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
                  {lang === 'fr' ? `IDC` : lang === 'sp' ? 'IDC' : lang === 'ar' ? 'آي دي سي' : lang === 'gr' ? 'IDC' : 'IDC'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  30-50%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Multimodal. Tout droit. Avant-gardiste.` : lang === 'sp' ? 'Las empresas textiles que utilizan IDP informan de una disminución en los tiempos de procesamiento de pedidos, lo que mejora la eficiencia general del flujo de trabajo.' : lang === 'ar' ? 'تشير شركات النسيج التي تستخدم IDP إلى انخفاض في أوقات معالجة الطلب، مما يؤدي إلى تحسين كفاءة سير العمل بشكل عام.' : lang === 'gr' ? 'Textilunternehmen, die IDP nutzen, berichten von einer Verkürzung der Auftragsabwicklungszeiten und einer Verbesserung der Gesamteffizienz der Arbeitsabläufe.' : `Textile businesses using IDP report a decrease in order processing times, improving overall workflow efficiency.`}
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
                  {lang === 'fr' ? `Groupe Everest` : lang === 'sp' ? 'Grupo Everest' : lang === 'ar' ? 'مجموعة ايفرست' : lang === 'gr' ? 'Everest-Gruppe' : 'Everest Group'}
                  </Typography>
                  <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                  25-40%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Multimodal. Tout droit. Avant-gardiste.` : lang === 'sp' ? 'Los bancos que incorporan IDP son testigos de una reducción en el tiempo de procesamiento de cumplimiento, lo que mejora el cumplimiento normativo.' : lang === 'ar' ? 'تشهد البنوك التي تضم IDP انخفاضًا في وقت معالجة الامتثال، مما يؤدي إلى تحسين الالتزام التنظيمي.' : lang === 'gr' ? 'Banken, die IDP einbeziehen, verzeichnen eine Verkürzung der Compliance-Bearbeitungszeit und eine verbesserte Einhaltung gesetzlicher Vorschriften.' : 'Banks incorporating IDP witness a reduction in compliance processing time, improving regulatory adherence.'}
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
              {lang === 'fr' ? `Adapter. Extrait.` : lang === 'sp' ? 'Adaptar. Extracto.' : lang === 'ar' ? 'يستخرج. تحول.' : lang === 'gr' ? 'Anpassen. Extrakt.' : 'Adapt. Extract.'}
              {' '} <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `Transformer.` : lang === 'sp' ? 'Transformar.' : lang === 'ar' ? 'يتكيف.' : lang === 'gr' ? 'Verwandeln.' : '  Transform.'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
             {lang === 'fr' ? `Découvrez comment le traitement intelligent des documents dans AIRA vous aide à offrir une expérience commerciale véritablement transformationnelle.` : lang === 'sp' ? 'Descubra cómo el procesamiento inteligente de documentos en AIRA le ayuda a ofrecer una experiencia empresarial verdaderamente transformadora.' : lang === 'ar' ? 'تعرف على كيف تساعدك المعالجة الذكية للمستندات في AIRA على تقديم تجربة أعمال تحويلية حقيقية.' : lang === 'gr' ? 'Erfahren Sie, wie die intelligente Dokumentenverarbeitung in AIRA Ihnen dabei hilft, ein wirklich transformatives Geschäftserlebnis zu bieten.' : 'Learn how Intelligent Document Processing in AIRA helps you deliver truly transformational business experience.'}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px', minHeight:'300px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                {lang === 'fr' ? `Compréhension cognitive` : lang === 'sp' ? 'Comprensión cognitiva ' : lang === 'ar' ? 'الفهم المعرفي' : lang === 'gr' ? 'Kognitives Verständnis' : 'Cognitive Understanding'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Extrayez plus que de simples données identifiables. AIRA permet une analyse contextuelle et une compréhension de la signification des documents basée sur le traitement du langage naturel.` : lang === 'sp' ? 'Extraiga más que solo datos identificables. AIRA permite el análisis contextual y la comprensión del significado de documentos basado en el procesamiento del lenguaje natural. .' : lang === 'ar' ? 'استخراج أكثر من مجرد بيانات يمكن تحديدها. يتيح AIRA التحليل السياقي وفهم معنى الوثيقة المستندة إلى معالجة اللغة الطبيعية. ' : lang === 'gr' ? 'Extrahieren Sie mehr als nur identifizierbare Daten. AIRA ermöglicht eine kontextbezogene Analyse und ein auf der Verarbeitung natürlicher Sprache basierendes Verständnis der Dokumentbedeutung. .' : 'Extract more than just identifiable data. AIRA enables contextual analysis and Natural Language Processing based document meaning understanding.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaMoneyBillAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Diversité dynamique.` : lang === 'sp' ? 'Dinámicamente diverso.' : lang === 'ar' ? 'متنوعة ديناميكيا.' : lang === 'gr' ? 'Dynamisch vielfältig.' : 'Dynamically diverse.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Grâce au traitement multimodal des documents, les données de votre entreprise peuvent être extraites, analysées, traitées et prêtes à être transformées, que ce soit en texte ou en images. ` : lang === 'sp' ? 'Con el procesamiento de documentos multimodal, los datos de su empresa se pueden extraer, analizar, procesar y preparar para transformar, ya sea en texto o imágenes. .' : lang === 'ar' ? 'من خلال معالجة المستندات متعددة الوسائط، يمكن استخراج بيانات مؤسستك وتحليلها ومعالجتها وتجهيزها للتحويل سواء في شكل نص أو صور. .' : lang === 'gr' ? 'Mit der multimodalen Dokumentenverarbeitung können Ihre Unternehmensdaten extrahiert, analysiert, verarbeitet und für die Umwandlung in Text oder Bilder bereitgestellt werden. .' : 'With multimodal document processing, your enterprise data can be extracted, analysed, processed and ready for transform whether in text or images.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaCommentAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Infusez l’excellence.` : lang === 'sp' ? 'Infundir excelencia.' : lang === 'ar' ? 'Infuse excellence.' : lang === 'gr' ? 'Verleihen Sie Exzellenz.' : 'Infuse excellence.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Un traitement plus rapide et une compréhension en temps réel signifient que vos clients et partenaires bénéficient d’une expérience enrichie tout au long du parcours.` : lang === 'sp' ? 'Un procesamiento más rápido y una comprensión en tiempo real significan que sus clientes y socios obtienen una experiencia enriquecida durante todo el recorrido.' : lang === 'ar' ? 'تعني المعالجة الأسرع والفهم في الوقت الفعلي أن عملائك وشركائك سيحصلون على تجربة غنية طوال الرحلة.' : lang === 'gr' ? 'Eine schnellere Verarbeitung und ein Echtzeitverständnis bedeuten, dass Ihre Kunden und Partner während der gesamten Reise bereichernde Erfahrungen sammeln. ' : 'Faster processing and real-time understanding means your customers and partners gain enriched experience throughout the journey.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaArrowDownSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Immunisez les marges d’erreur.` : lang === 'sp' ? 'Inmunizar los márgenes de error.' : lang === 'ar' ? 'Immunise error margins.' : lang === 'gr' ? 'Fehlermargen immunisieren.' : 'Immunise error margins.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                {lang === 'fr' ? `La reconnaissance optique de caractères (OCR) améliorée permet un traitement précis des documents, même avec des échantillons légèrement asymétriques/bruyants, atténuant ainsi les marges d'erreur.` : lang === 'sp' ? 'El reconocimiento óptico de caracteres (OCR) mejorado ofrece un procesamiento de documentos preciso incluso con muestras ligeramente torcidas o ruidosas, lo que mitiga los márgenes de error. .' : lang === 'ar' ? 'يوفر التعرف البصري المحسّن على الأحرف (OCR) معالجة دقيقة للمستندات حتى مع العينات المنحرفة/المزعجة قليلاً، مما يخفف هوامش الخطأ. .' : lang === 'gr' ? 'Die verbesserte optische Zeichenerkennung (OCR) ermöglicht eine präzise Dokumentenverarbeitung selbst bei leicht verzerrten/verrauschten Proben und verringert so Fehlermargen. .' : 'Enhanced Optical Character Recognition (OCR) delivers accurate document processing even with slightly skewed/noisy samples, mitigating error margins.'}
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
            {/* <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
                
              <span style={{ color: Colors.airaSecondary }}> Transformations like never before.
              </span>
            </Typography> */}
            <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
              {lang === 'fr' ? `Tirez parti de la capacité à offrir les meilleures expériences du marché grâce à des transformations documentaires comme jamais auparavant.` : lang === 'sp' ? 'Aproveche la capacidad de ofrecer las mejores experiencias del mercado a través de transformaciones de documentos como nunca antes.' : lang === 'ar' ? 'استفد من القدرة على تقديم أفضل التجارب في السوق من خلال تحويلات المستندات بشكل لم يسبق له مثيل.' : lang === 'gr' ? 'Nutzen Sie die Möglichkeit, durch Dokumententransformationen die besten Erfahrungen auf dem Markt zu liefern wie nie zuvor.' : 'Leverage the ability to deliver best-in-the-market Experiences '}
           
           
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `transformations au niveau de l’entreprise.` : lang === 'sp' ? 'para transformaciones a nivel empresarial.' : lang === 'ar' ? 'آليًا للتحولات على مستوى المؤسسة.' : lang === 'gr' ? 'Transformationen auf Unternehmensebene.' : 'through Document Transformations like never before.'}
              </span>
            </Typography>

            <div className="btn_group btn-group1">
              <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
              {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : 'Leverage AIRA for your Enterprise Today'}
                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root" >

             
                </span></button>
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
  );
}

export default Index;
