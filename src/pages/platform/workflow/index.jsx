import React, { useEffect, useState } from 'react';
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
    cardTitle: "Automatisation par glisser-déposer",
    cardDesc:
      "Simplifiez le processus d'automatisation avec une interface intuitive, permettant aux utilisateurs de sélectionner, glisser et déposer sans effort des modules pour une optimisation instantanée du flux de travail.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Utilisabilité continue",
    cardDesc:
      "Les modules intégrés et pré-entraînés garantissent des ajustements transparents du flux de travail sans qu'il soit nécessaire de repartir de zéro, facilitant ainsi des adaptations rapides et efficaces.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Facilité d'intégration",
    cardDesc:
      "Des disques d'entreprise aux bases de données et aux outils bureautiques populaires, AIRA Workflow s'intègre de manière transparente, garantissant un flux de travail fluide qui s'aligne sur les divers besoins de l'entreprise",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS1 = [
  {
    cardTitle: "Automatización de arrastrar y solta",
    cardDesc:
      "Simplifique el proceso de automatización con una interfaz intuitiva, que permite a los usuarios seleccionar, arrastrar y soltar módulos sin esfuerzo para optimizar el flujo de trabajo al instante.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Usabilidad continua",
    cardDesc:
      "Los módulos integrados y previamente entrenados garantizan ajustes perfectos en el flujo de trabajo sin necesidad de empezar desde cero, lo que facilita adaptaciones rápidas y eficientes.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Facilidad de integración",
    cardDesc:
      "Desde unidades empresariales hasta bases de datos y herramientas de oficina populares, AIRA Workflow se integra a la perfección, garantizando un flujo de trabajo fluido que se alinea con diversas necesidades comerciales.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS2 = [
  {
    cardTitle: "أتمتة السحب والإفلات",
    cardDesc:
      "قم بتبسيط عملية الأتمتة من خلال واجهة بديهية، مما يتيح للمستخدمين تحديد الوحدات النمطية وسحبها وإفلاتها دون عناء لتحسين سير العمل بشكل فوري",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "سهولة الاستخدام المستمر",
    cardDesc:
      "ضمن الوحدات المدمجة والمدربة مسبقًا إجراء تعديلات سلسة على سير العمل دون الحاجة إلى البدء من الصفر، مما يسهل عمليات التكيف السريعة والفعالة",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "سهولة التكامل",
    cardDesc:
      "بدءًا من محركات أقراص المؤسسات ووصولاً إلى قواعد البيانات والأدوات المكتبية الشائعة، يتكامل سير عمل AIRA بسلاسة، مما يضمن سير عمل سلسًا يتماشى مع احتياجات العمل المتنوعة.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS3 = [
  {
    cardTitle: "Drag-and-Drop-Automatisierung",
    cardDesc:
      "Vereinfachen Sie den Automatisierungsprozess mit einer intuitiven Benutzeroberfläche, die es Benutzern ermöglicht, Module für eine sofortige Workflow-Optimierung mühelos auszuwählen, per Drag-and-Drop auszuwählen.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Kontinuierliche Nutzbarkeit",
    cardDesc:
      "Integrierte und vorab trainierte Module sorgen für nahtlose Workflow-Anpassungen, ohne dass bei Null begonnen werden muss, und ermöglichen so schnelle und effiziente Anpassungen.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Einfache Integration",
    cardDesc:
      "Von Unternehmenslaufwerken bis hin zu Datenbanken und beliebten Office-Tools lässt sich AIRA Workflow nahtlos integrieren und sorgt so für einen reibungslosen Workflow, der auf die unterschiedlichen Geschäftsanforderungen abgestimmt ist.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS4 = [
  {
    cardTitle: "Drag-and-Drop Automation",
    cardDesc:
      "Simplify the automation process with an intuitive interface, enabling users to effortlessly select, drag, and drop modules for instant workflow optimization.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Continuous Usability",
    cardDesc:
      "Built-in and pre-trained modules ensure seamless workflow adjustments without the need to start from scratch, facilitating swift and efficient adaptations.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Ease of Integration",
    cardDesc:
      "From enterprise drives to databases and popular office tools, AIRA Workflow integrates seamlessly, ensuring a smooth workflow that aligns with diverse business needs.",
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

                    {lang === 'fr' ? `Construire. Plan. Déployer.` : lang === 'sp' ? 'Construir. Plan. Desplegar.' : lang === 'ar' ? 'يبني. يخطط. نشر.' : lang === 'gr' ? 'Bauen. Planen. Einsetzen.' : 'Build. Plan. Deploy.'}
                    <br />
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Studio de flux de travail dans AIRA` : lang === 'sp' ? 'Estudio de flujo de trabajo en AIRA' : lang === 'ar' ? 'استوديو سير العمل في AIRA' : lang === 'gr' ? 'Workflow-Studio in AIRA' : 'Workflow Studio in AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Workflow Automation Designer, low-code et haute accessibilité, pour l'optimisation des processus à l'échelle de l'entreprise.` : lang === 'sp' ? 'Diseñador de automatización de flujo de trabajo de bajo código y alta accesibilidad para la optimización de procesos en toda la empresa.' : lang === 'ar' ? 'مصمم أتمتة سير العمل ذو التعليمات البرمجية المنخفضة وإمكانية الوصول العالية لتحسين العمليات على مستوى المؤسسة.' : lang === 'gr' ? 'Low-Code-Workflow-Automatisierungsdesigner mit hoher Zugänglichkeit für die unternehmensweite Prozessoptimierung.' : 'Low-code, high accessibility Workflow Automation Designer for Enterprise wide process optimization.'}
                  </Typography>
                  
                  {/* <div className="btn_group">
                    <button onClick={() => {
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                      {lang === 'fr' ? `Essayez AIRA pour votre entreprise` : lang === 'sp' ? 'Pruebe AIRA para su empresa' : lang === 'ar' ? 'جرب AIRA لمؤسستك' : lang === 'gr' ? 'Testen Sie AIRA für Ihr Unternehmen' : ' Try AIRA Free'}
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
                src="/images/solutions/banking/bankingheader9.png"
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
            {lang === 'fr' ? `L'hyper-automatisation,` : lang === 'sp' ? 'Hiperautomatización, para todos,' : lang === 'ar' ? '، للجميع، كل شيء.' : lang === 'gr' ? 'Hyperautomatisierung für' : '  Hyper-automation'} {' '}
            <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `pour tout le monde et pour tout.` : lang === 'sp' ? 'para todo.' : lang === 'ar' ? 'الأتمتة المفرطة' : lang === 'gr' ? 'alle und alles.' : ' for everyone, everything.'}
            </span>
          </Typography>

          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `L'accessibilité est le principe central de la philosophie du cycle de vie d'AIRA. Notre Workflow Studio est conçu en gardant à l’esprit la sensibilité de l’utilisateur et la convivialité.` : lang === 'sp' ? 'La accesibilidad es el principio fundamental de la filosofía del ciclo de vida de AIRA. Nuestro Workflow Studio está diseñado teniendo en cuenta la sensibilidad y la facilidad de uso del usuario.' : lang === 'ar' ? 'تعد إمكانية الوصول هي المبدأ الأساسي لفلسفة دورة حياة AIRA. تم تصميم Workflow Studio الخاص بنا مع الأخذ في الاعتبار حساسية المستخدم وسهولة الاستخدام.' : lang === 'gr' ? 'Zugänglichkeit ist der zentrale Grundsatz der AIRA-Lebenszyklusphilosophie. Unser Workflow Studio ist unter Berücksichtigung der Benutzersensibilität und Benutzerfreundlichkeit konzipiert.' : 'Accessibility is the heart tenet of AIRA lifecycle philosophy. Our Workflow Studio is designed keeping in mind user sensitivity and user friendliness.'}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Des utilisateurs d'entreprise aux développeurs RPA, Workflow Studio fournit un environnement basé sur un navigateur facile à utiliser pour planifier, lancer et faire évoluer l'hyper-automatisation.` : lang === 'sp' ? 'Desde usuarios empresariales hasta desarrolladores de RPA, Workflow Studio proporciona un entorno basado en navegador fácil de usar para planificar, lanzar y escalar la hiperautomatización.' : lang === 'ar' ? 'بدءًا من مستخدمي المؤسسات وحتى مطوري تقنية RPA، يوفر Workflow Studio بيئة سهلة الاستخدام تعتمد على المستعرض لتخطيط الأتمتة الفائقة وإطلاقها وتوسيع نطاقها.' : lang === 'gr' ? 'Von Unternehmensbenutzern bis hin zu RPA-Entwicklern bietet Workflow Studio eine benutzerfreundliche browserbasierte Umgebung zum Planen, Starten und Skalieren von Hyperautomatisierung.' : '  From enterprise users to RPA developers, Workflow Studio provides an easy to use browser-based environment to plan, launch and scale hyper-automation.'}
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
                    20%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `L'automatisation des flux de travail dans la fabrication réduit les interventions manuelles, entraînant une augmentation de l'efficacité de la production.` : lang === 'sp' ? 'La automatización del flujo de trabajo en la fabricación reduce la intervención manual, lo que conduce a un aumento de la eficiencia de la producción.' : lang === 'ar' ? 'تعمل أتمتة سير العمل في التصنيع على تقليل التدخل اليدوي، مما يؤدي إلى زيادة كفاءة الإنتاج.' : lang === 'gr' ? 'Durch die Automatisierung von Arbeitsabläufen in der Fertigung werden manuelle Eingriffe reduziert, was zu einer Steigerung der Produktionseffizienz führt.' : 'Workflow automation in manufacturing reduces manual intervention, leading to an increase in production efficiency.'}
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
                    25%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les flux de travail automatisés dans l'industrie textile optimisent le traitement des commandes, ce qui entraîne une réduction des délais d'exécution des commandes.` : lang === 'sp' ? 'Los flujos de trabajo automatizados en la industria textil optimizan el procesamiento de pedidos, lo que resulta en una reducción en los tiempos de cumplimiento de los mismos.' : lang === 'ar' ? 'يعمل سير العمل الآلي في صناعة النسيج على تحسين معالجة الطلب، مما يؤدي إلى تقليل أوقات تنفيذ الطلب.' : lang === 'gr' ? 'Automatisierte Arbeitsabläufe in der Textilindustrie optimieren die Auftragsabwicklung und führen zu einer Verkürzung der Auftragsabwicklungszeiten.' : 'Automated workflows in the textile industry optimise order processing, resulting in a reduction in order fulfilment times.'}
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
                    40%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Les flux de travail automatisés dans le secteur bancaire rationalisent l’intégration des clients et améliorent l’expérience client globale` : lang === 'sp' ? 'Los flujos de trabajo automatizados en la banca agilizan la incorporación de clientes y mejoran la experiencia general del cliente.' : lang === 'ar' ? 'يعمل سير العمل الآلي في الخدمات المصرفية على تبسيط عملية تأهيل العملاء وتحسين تجربة العملاء بشكل عام' : lang === 'gr' ? 'Automatisierte Arbeitsabläufe im Bankwesen optimieren das Kunden-Onboarding und verbessern das gesamte Kundenerlebnis' : 'Automated workflows in banking streamline customer onboarding and improving overall customer experience.'}
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
              {lang === 'fr' ? `Détecter. Conception.` : lang === 'sp' ? 'Detectar. Diseño.' : lang === 'ar' ? 'تصميم. نشر.' : lang === 'gr' ? 'Erkennen. Design. ' : '  Detect. Design.  '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Déployer.` : lang === 'sp' ? 'Desplegar.' : lang === 'ar' ? 'قوي. فعال. موثوق.' : lang === 'gr' ? 'Einsetzen.' : '   Deploy.'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
              {lang === 'fr' ? `Catapultez vos initiatives d’hyper-automatisation sans avoir besoin d’un savoir-faire technique complexe.` : lang === 'sp' ? 'Catapulte sus iniciativas de hiperautomatización sin la necesidad de conocimientos técnicos complejos.' : lang === 'ar' ? 'حفز مبادرات الأتمتة الفائقة الخاصة بك دون الحاجة إلى معرفة فنية معقدة.' : lang === 'gr' ? 'Bringen Sie Ihre Hyperautomatisierungsinitiativen voran, ohne dass komplexes technisches Know-how erforderlich ist.' : 'Catapult your hyper-automation initiatives without the need for complex technical know-how.'}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Concepteur glisser-déposer` : lang === 'sp' ? 'Diseñador de arrastrar y soltar' : lang === 'ar' ? 'مصمم السحب والإفلات' : lang === 'gr' ? 'Drag-&-Drop-Designer' : 'Drag-&-Drop Designer'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `AIRA Workflow Studio offre une interface d'hyper-automatisation simplifiée mais puissante dans laquelle vous pouvez sélectionner, glisser et déposer vos modules préférés pour démarrer instantanément l'optimisation des processus.` : lang === 'sp' ? 'AIRA Workflow Studio ofrece una interfaz de hiperautomatización simplificada pero potente donde puede seleccionar, arrastrar y soltar sus módulos preferidos para iniciar la optimización del proceso al instante.' : lang === 'ar' ? 'يوفر AIRA Workflow Studio واجهة مبسطة وقوية للأتمتة الفائقة حيث يمكنك تحديد الوحدات المفضلة لديك وسحبها وإسقاطها لبدء تحسين العملية على الفور.' : lang === 'gr' ? 'Das AIRA Workflow Studio bietet eine vereinfachte, aber leistungsstarke Hyperautomatisierungsoberfläche, über die Sie Ihre bevorzugten Module per Drag & Drop auswählen und sofort mit der Prozessoptimierung beginnen können.' : ' The AIRA Workflow Studio delivers a simplified but powerful hyper-automation interface where you can select, drag and drop your preferred modules to start process optimization instantly.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaMoneyBillAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Utilisabilité continue` : lang === 'sp' ? 'Usabilidad continua' : lang === 'ar' ? 'سهولة الاستخدام المستمر' : lang === 'gr' ? 'Kontinuierliche Benutzerfreundlichkeit' : '  Continuous Usability'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Avec Workflow Studio, vous n'avez pas besoin de retourner à la planche à dessin à chaque fois. Des modules intégrés et pré-formés vous permettent de choisir les meilleures options sans délai.` : lang === 'sp' ? 'Con Workflow Studio, no es necesario volver a la mesa de dibujo cada vez. Los módulos integrados y previamente entrenados le permiten elegir las mejores opciones sin demora.' : lang === 'ar' ? 'مع Workflow Studio، لن تحتاج إلى العودة إلى لوحة الرسم في كل مرة. تمكنك الوحدات المضمنة والمدربة مسبقًا من اختيار أفضل الخيارات دون تأخير.' : lang === 'gr' ? 'Mit Workflow Studio müssen Sie nicht jedes Mal wieder ans Zeichenbrett gehen. Integrierte und vorab trainierte Module ermöglichen es Ihnen, ohne Verzögerung die besten Optionen auszuwählen.' : ' With Workflow Studio, you need not go back to the drawing board every time. In-built and pre-trained modules enable you to pick the best options without delay.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaCommentAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Facilité d'intégration.` : lang === 'sp' ? 'Facilidad de integración.' : lang === 'ar' ? 'سهولة التكامل' : lang === 'gr' ? 'Einfache Integration.' : ' Ease of Integration.'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Des disques de votre entreprise à la base de données pertinente, des outils de marketing par e-mail préférés du marché aux outils bureautiques standard de l'industrie, Workflow Studio intègre tout.` : lang === 'sp' ? 'Desde las unidades de su empresa hasta la base de datos relevante, desde las herramientas de marketing por correo electrónico favoritas del mercado hasta las herramientas de oficina estándar de la industria, Workflow Studio lo integra todo. .' : lang === 'ar' ? 'بدءًا من محركات أقراص مؤسستك وحتى قاعدة البيانات ذات الصلة، ومن أدوات التسويق عبر البريد الإلكتروني المفضلة في السوق إلى الأدوات المكتبية القياسية الصناعية، يدمج Workflow Studio كل شيء. .' : lang === 'gr' ? 'Von Ihren Unternehmenslaufwerken bis zur relevanten Datenbank, von den am Markt beliebtesten E-Mail-Marketing-Tools bis hin zu branchenüblichen Office-Tools – Workflow Studio integriert alles. .' : ' From your enterprise drives to the relevant database, from market favourite email marketing tools to industry standard office tools, Workflow Studio integrates everything.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px',minHeight:'300px' }}>
                <LiaArrowDownSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  {lang === 'fr' ? `Déploiement rapide` : lang === 'sp' ? 'Implementación rápida' : lang === 'ar' ? 'الطرح السريع' : lang === 'gr' ? 'Schneller Rollout' : ' Rapid Rollout'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  {lang === 'fr' ? `Grâce aux fonctionnalités low-code et à faibles ressources, vous pouvez économiser des semaines d'ETP en utilisant Workflow Designer sansavoir besoin vérifier chaque ligne de code pour garantir une automatisation précise et durable. .` : lang === 'sp' ? 'Con funcionalidades de bajo código y bajos recursos, puede ahorrar semanas de FTE utilizando el Diseñador de flujo de trabajo sinnecesitando verificar tres veces cada línea de código para garantizar una automatización precisa y sostenible. .' : lang === 'ar' ? 'بفضل الوظائف منخفضة الموارد ذات التعليمات البرمجية المنخفضة، يمكنك توفير أسابيع من FTEs باستخدام مصمم سير العمل دون الحاجة إلى التحقق ثلاث مرات من كل سطر من التعليمات البرمجية لضمان أتمتة دقيقة ومستدامة. .' : lang === 'gr' ? 'Dank der Low-Code-Funktionen mit geringem Ressourcenaufwand können Sie mit Workflow Designer Wochen an Vollzeitäquivalenten einsparenbrauchen jede Codezeile dreifach zu überprüfen, um eine genaue und nachhaltige Automatisierung sicherzustellen. .' : ' With low-code low-resource functionalities, you can save weeks worth of FTEs using Workflow designer without needing to triple check every line of code to ensure accurate and sustainable automation.'}
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
          <Stack sx={{ textAlign: 'center' , fontWeight: 700  }} fontSize={'40px'} variant="p" >
            <b>
              {lang === 'fr' ? `oncevoir les Hyper-automatismes, développer l'expérience,offrir l'excellence, comme jamais ` : lang === 'sp' ? 'Diseñar las Hiperautomatizaciones, desarrollar la experiencia,' : lang === 'ar' ? '، وقم بتطوير الخبرة، وتقديم التميز، كما لم يحدث من قبل.' : lang === 'gr' ? 'Entwerfen Sie die Hyperautomatisierungen, entwickeln Sie das Erlebnis,Exzellenz liefern, wie ' : ' Design the Hyper-automations, develop the experience, '}
           
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `transformations au niveau de l’entreprise.` : lang === 'sp' ? 'para transformaciones a nivel empresarial.' : lang === 'ar' ? 'آليًا للتحولات على مستوى المؤسسة.' : lang === 'gr' ? 'Transformationen auf Unternehmensebene.' : 'deliver excellence, like never before. '}
              </span>
            </b>
            <div className="btn_group btn-group1">
              <button onClick={() => {
                router.push('/contact');
              }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : 'Leverage AIRA for your Enterprise Today'}
                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
              <button onClick={() => {
                router.push('/contact');
              }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang === 'sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang === 'ar' ? 'احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang === 'gr' ? 'Buchen Sie ein Demo-Beratungsgespräch mit unserem Produktteam' : ' Book a Demo Consultation Call with our Product Team'}
                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
            </div>
          </Stack>
         
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