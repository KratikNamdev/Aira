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
    cardTitle: "Intégration transparente",
    cardDesc:
      "AIRA Orchestrator garantit une intégration sans effort sur divers systèmes, facilitant ainsi une plate-forme d'orchestration unifiée pour des processus rationalisés.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Flux de travail automatisés",
    cardDesc:
      "Activez l'automatisation intelligente avec AIRA Orchestrator, en orchestrant les flux de travail de bout en bout, en réduisant les efforts manuels et en améliorant l'efficacité opérationnelle.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Analyses prédictives",
    cardDesc:
      "Exploitez la puissance de l'analyse prédictive dans AIRA Orchestrator, permettant aux entreprises d'anticiper les tendances, d'optimiser les processus et de garder une longueur d'avance dans un paysage commercial en évolution dynamique.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS1 = [
  {
    cardTitle: "Integración perfecta",
    cardDesc:
      "AIRA Orchestrator garantiza una integración sencilla entre diversos sistemas, facilitando una plataforma de orquestación unificada para procesos optimizados.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Flujos de trabajo automatizados",
    cardDesc:
      "Habilite la automatización inteligente con AIRA Orchestrator, organizando flujos de trabajo de un extremo a otro, reduciendo los esfuerzos manuales y mejorando la eficiencia operativa.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Análisis predictivo",
    cardDesc:
      "Aproveche el poder del análisis predictivo dentro de AIRA Orchestrator, lo que permite a las empresas anticipar tendencias, optimizar procesos y mantenerse a la vanguardia en un panorama empresarial que evoluciona dinámicamente.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];
const LR_ITEMS2 = [
  {
    cardTitle: "التكامل السلس",
    cardDesc:
      "يضمن برنامج AIRA Orchestrator التكامل السهل عبر الأنظمة المتنوعة، مما يسهل منصة التنسيق الموحدة للعمليات المبسطة",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "سير العمل الآلي",
    cardDesc:
      "تمكين التشغيل الآلي الذكي باستخدام AIRA Orchestrator، وتنظيم سير العمل الشامل، وتقليل الجهود اليدوية، وتعزيز الكفاءة التشغيلية",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "التحليلات التنبؤية",
    cardDesc:
      "تسخير قوة التحليلات التنبؤية داخل AIRA Orchestrator، مما يسمح للمؤسسات بتوقع الاتجاهات وتحسين العمليات والبقاء في المقدمة في مشهد الأعمال المتطور ديناميكيًا",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS3 = [
  {
    cardTitle: "Nahtlose Integration",
    cardDesc:
      "AIRA Orchestrator gewährleistet eine mühelose Integration über verschiedene Systeme hinweg und ermöglicht eine einheitliche Orchestrierungsplattform für optimierte Prozesse.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Automatisierte Arbeitsabläufe",
    cardDesc:
      "Ermöglichen Sie intelligente Automatisierung mit AIRA Orchestrator, indem Sie End-to-End-Workflows orchestrieren, den manuellen Aufwand reduzieren und die betriebliche Effizienz steigern.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Prädiktive Analysen",
    cardDesc:
      "Nutzen Sie die Leistungsfähigkeit der prädiktiven Analyse innerhalb von AIRA Orchestrator und ermöglichen Sie Unternehmen, Trends zu antizipieren, Prozesse zu optimieren und in einer sich dynamisch entwickelnden Geschäftslandschaft die Nase vorn zu behalten.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

const LR_ITEMS4 = [
  {
    cardTitle: "Seamless Integration",
    cardDesc:
      "AIRA Orchestrator ensures effortless integration across diverse systems, facilitating a unified orchestration platform for streamlined processes.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Automated Workflows",
    cardDesc:
      "Enable intelligent automation with AIRA Orchestrator, orchestrating end-to-end workflows, reducing manual efforts, and enhancing operational efficiency.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Predictive Analytics",
    cardDesc:
      "Harness the power of predictive analytics within AIRA Orchestrator, allowing enterprises to anticipate trends, optimise processes, and stay ahead in a dynamically evolving business landscape.",
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
                    {lang === 'fr' ? `Numérique. Centralisé. Autonome.` : lang === 'sp' ? 'Digital. Centralizado. Autónomo.' : lang === 'ar' ? 'رقمي. مركزية. واثق من نفسه.' : lang === 'gr' ? 'Digital. Zentralisiert. Autonom.' : 'Digital. Centralised. Autonomous.'}
                    <br />
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Orchestrateur chez AIRA` : lang === 'sp' ? 'Orquestador en AIRA' : lang === 'ar' ? 'منسق في AIRA' : lang === 'gr' ? 'Orchestrator in AIRA' : 'Orchestrator in AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Déployez, surveillez, attribuez et déléguez rapidement des tâches d'hyper-automatisation à partir d'un environnement centralisé.` : lang === 'sp' ? 'Implemente, supervise, asigne y delegue rápidamente tareas de hiperautomatización desde un entorno centralizado.' : lang === 'ar' ? 'يمكنك نشر مهام الأتمتة الفائقة ومراقبتها وتعيينها وتفويضها بسرعة من بيئة مركزية.' : lang === 'gr' ? 'Hyperautomatisierungsaufgaben können in einer zentralen Umgebung schnell bereitgestellt, überwacht, zugewiesen und delegiert werden.' : 'Rapidly deploy, monitor, assign and delegate hyper-automation tasks from a centralised environment.'}
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
                    {lang === 'fr' ? `Essayez AIRA pour votre entreprise	Réservez un appel de démonstration` : lang === 'sp' ? 'Reserve una llamada de demostración' : lang === 'ar' ? 'حجز مكالمة تجريبية' : lang === 'gr' ? 'Testen Sie AIRA für Ihr Unternehmen	Buchen Sie einen Demo-Anruf' : 'Book a Demo Call'}
                    <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                  </div> */}
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/bankingheader11.png"
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
            {lang === 'fr' ? `Délégué intelligemment, déployé en toute sécurité et ` : lang === 'sp' ? 'Delegado inteligentemente, implementado de forma ' : lang === 'ar' ? 'ونشرها بشكل آمن، ومراقبتها باستمرار.' : lang === 'gr' ? 'Intelligent delegiert, sicher bereitgestellt, kontinuierlich ' : 'Intelligently Delegated, Securely Deployed,'}
           <br/>
            <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `surveillé en permanence.` : lang === 'sp' ? 'segura y monitoreado continuamente.' : lang === 'ar' ? 'تم تفويضها بذكاء، ' : lang === 'gr' ? 'überwacht.' : 'Continuously Monitored.'}
            </span>
          </Typography>

          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `Haute responsabilité L'orchestration définit le succès de toutes les initiatives d'hyper-automatisation.` : lang === 'sp' ? 'La orquestación de alta responsabilidad define el éxito de todas las iniciativas de hiperautomatización.' : lang === 'ar' ? 'إن التنسيق والمساءلة العالية هو الذي يحدد نجاح جميع مبادرات الأتمتة الفائقة.' : lang === 'gr' ? 'Hohe Verantwortlichkeit und Orchestrierung bestimmen den Erfolg aller Hyperautomatisierungsinitiativen.' : '  High accountability Orchestration defines the success of all hyper-automation initiatives.'}
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === 'fr' ? `
Chez AIRA, notre orchestrateur apprend, améliore et déploie constamment des performances améliorées, que ce soit en matière de délégation ou d'analyse.
` : lang === 'sp' ? 'La orquestación de alta responsabilidad define el éxito de todas las iniciativas de hiperautomatización.' : lang === 'ar' ? 'في AIRA، يتعلم منسقنا باستمرار ويحسن وينشر الأداء المعزز، سواء كان ذلك في التفويض أو التحليلات. ' : lang === 'gr' ? 'In AIRA lernt unser Orchestrator ständig dazu, verbessert sich und stellt eine verbesserte Leistung bereit, sei es bei der Delegation oder Analyse.' : 'Natural Language Processing enables your enterprise to take its large volumes of unstructured.'}
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
                  30%
                  </Typography>
                  <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                  {lang === 'fr' ? `Orchestrator dans le secteur manufacturier centralise la gestion des processus, réduisant ainsi les erreurs opérationnelles` : lang === 'sp' ? 'Orchestrator en fabricación centraliza la gestión de procesos, lo que lidera la reducción de errores operativos' : lang === 'ar' ? 'يقوم المنسق في التصنيع بمركزية إدارة العمليات، مما يؤدي إلى تقليل الأخطاء التشغيلية' : lang === 'gr' ? 'Orchestrator in der Fertigung zentralisiert das Prozessmanagement und führt so zu einer Reduzierung von Betriebsfehlern' : 'Orchestrator in manufacturing centralises process management, leading reduction in operational errors.'}
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
                  {lang === 'fr' ? `Orchestrator rationalise l'exécution des commandes dans l'industrie textile, ce qui réduit les délais de livraison` : lang === 'sp' ? 'Orchestrator agiliza el cumplimiento de pedidos en la industria textil, lo que resulta en una reducción de los plazos de entrega' : lang === 'ar' ? 'تعمل شركة Orchestrator على تبسيط تنفيذ الطلبات في صناعة النسيج، مما يؤدي إلى تقليل المهل الزمنية' : lang === 'gr' ? 'Orchestrator optimiert die Auftragsabwicklung in der Textilindustrie und verkürzt so die Durchlaufzeiten' : 'Orchestrator streamlines order fulfilment in the textile industry, resulting reduction in lead times.'}
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
                  {lang === 'fr' ? `Orchestrator dans le secteur bancaire optimise le traitement des transactions, entraînant une réduction des délais de traitement` : lang === 'sp' ? 'Orchestrator en banca optimiza el procesamiento de transacciones, lo que lleva a una disminución en los tiempos de procesamiento' : lang === 'ar' ? 'يعمل المنسق في الخدمات المصرفية على تحسين معالجة المعاملات، مما يؤدي إلى تقليل أوقات المعالجة' : lang === 'gr' ? 'Orchestrator im Bankwesen optimiert die Transaktionsverarbeitung und führt so zu einer Verkürzung der Bearbeitungszeiten' : 'Orchestrator in banking optimises transaction processing, leading decrease in processing times.'}
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
              {lang === 'fr' ? `Déléguer. Moniteur.` : lang === 'sp' ? 'Delegar. Monitor. ' : lang === 'ar' ? 'مندوب. شاشة. ' : lang === 'gr' ? 'Delegieren. Monitor.' : 'Delegate. Monitor.'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `Gérer.` : lang === 'sp' ? 'Administrar.' : lang === 'ar' ? 'يدير.' : lang === 'gr' ? 'Verwalten.' : 'Manage.'}
              </span>
            </Typography>
            <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
              {lang === 'fr' ? `Dirigez votre équipe d’hyper-automatisation numérique avec une cohérence à l’échelle de l’entreprise à partir d’une seule plateforme.` : lang === 'sp' ? 'Dirija su equipo de hiperautomatización digital con coherencia en toda la empresa desde una única plataforma.' : lang === 'ar' ? 'قم بإجراء طاقم الأتمتة الرقمية الفائقة الخاص بك مع الاتساق على مستوى المؤسسة من منصة واحدة.' : lang === 'gr' ? 'Leiten Sie Ihr digitales Hyperautomatisierungsteam mit unternehmensweiter Konsistenz von einer einzigen Plattform aus.' : 'Conduct your digital hyper-automation crew with enterprise wide consistency from one single platform.'}
            </Typography>
          </Stack>
          <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                {lang === 'fr' ? `Conserver la propriété` : lang === 'sp' ? 'Conservar la propiedad' : lang === 'ar' ? 'الاحتفاظ بالملكية' : lang === 'gr' ? 'Eigentum behalten' : 'Retain Ownership'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                {lang === 'fr' ? `Notre Orchestrator est doté à la fois d'une délégation intelligente hyper-automatisée et de contrôles et contrepoids humains pour la sécurité de votre entreprise.` : lang === 'sp' ? 'Nuestro Orchestrator viene con delegación inteligente hiperautomatizada y controles y equilibrios humanos en el circuito para la seguridad de su empresa.' : lang === 'ar' ? 'يأتي منسقنا مزودًا بكل من التفويض الآلي الفائق الذكي بالإضافة إلى عمليات التحقق والتوازنات البشرية في الحلقة من أجل أمان مؤسستك.' : lang === 'gr' ? 'Unser Orchestrator verfügt sowohl über eine intelligente, hyperautomatisierte Delegation als auch über Human-in-the-Loop-Checks und -Balancen für die Sicherheit Ihres Unternehmens.' : 'Our Orchestrator comes with both intelligent hyper-automated delegation as well as human-in-the-loop checks and balances for your enterprise security.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px' }}>
                <LiaMoneyBillAltSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                {lang === 'fr' ? `Traçabilité améliorée` : lang === 'sp' ? 'Trazabilidad mejorada' : lang === 'ar' ? 'إمكانية التتبع المحسنة' : lang === 'gr' ? 'Verbesserte Rückverfolgbarkeit' : 'Enhanced Traceability'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                {lang === 'fr' ? `Atténuez l'ambiguïté de vos initiatives d'hyper-automatisation en tirant parti des journaux de flux de travail continus, du suivi en temps réel et d'une surveillance étendue de l'hyper-automatisation.` : lang === 'sp' ? 'Mitigue la ambigüedad de sus iniciativas de hiperautomatización aprovechando los registros continuos del flujo de trabajo, el seguimiento en tiempo real y la supervisión exhaustiva de la hiperautomatización.' : lang === 'ar' ? 'خفف من الغموض الذي يكتنف مبادرات الأتمتة الفائقة لديك من خلال الاستفادة من سجلات سير العمل المستمرة والتتبع في الوقت الفعلي ومراقبة الأتمتة الفائقة الشاملة.' : lang === 'gr' ? 'Reduzieren Sie Unklarheiten bei Ihren Hyperautomatisierungsinitiativen, indem Sie kontinuierliche Workflow-Protokolle, Echtzeitverfolgung und umfassende Hyperautomatisierungsüberwachung nutzen.' : 'Mitigate ambiguity from your hyper-automation initiatives by leveraging the continuous workflow logs, real-time tracking and extensive hyper-automation monitoring.'}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px' }}>
                <LiaArrowDownSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                {lang === 'fr' ? `Initiatives sécurisées` : lang === 'sp' ? 'Iniciativas seguras' : lang === 'ar' ? 'المبادرات الآمنة' : lang === 'gr' ? 'Sichere Initiativen' : 'Secure initiatives'}
                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                {lang === 'fr' ? `Avec un cryptage adapté à l'entreprise, y compris une intégration tierce vérifiée, vous pouvez faire confiance à AIRA Orchestrator pour fournir les protocoles de sécurité les plus élevés. .` : lang === 'sp' ? 'Con un cifrado adecuado para la empresa, incluida la integración verificada de terceros, puede confiar en AIRA Orchestrator para ofrecer los protocolos de seguridad más altos. .' : lang === 'ar' ? 'من خلال التشفير المناسب للمؤسسة بما في ذلك التكامل المعتمد مع طرف ثالث، يمكنك الوثوق في AIRA Orchestrator لتقديم أعلى بروتوكولات الأمان. .' : lang === 'gr' ? 'Dank der unternehmensgerechten Verschlüsselung einschließlich der verifizierten Integration von Drittanbietern können Sie sich darauf verlassen, dass der AIRA Orchestrator höchste Sicherheitsprotokolle liefert. .' : 'With enterprise appropriate encryption including verified third-party integration, you can trust the AIRA Orchestrator to deliver highest security protocols.'}
                </Typography>
              </Stack>
            </Grid>
            {/* <Grid item xs={12} md={3}>
              <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px' }}>
                <LiaCoinsSolid size={30} color='#ffffff' />
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                  Personalise excellence.

                </Typography>
                <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                  With NLP based market intelligence, your enterprise can truly personalise and customise the business value propositions, ensuring the right customer cohorts are engaged in the best ways possible. .
                </Typography>
              </Stack>
            </Grid> */}
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
            <Typography fontSize={'40px'} variant="p" sx={{ fontWeight: 700, textAlign: 'center' }}>
            {lang === 'fr' ? `Centralisez l'intelligence de l'automatisation de vos flux de travail, surveillez vos ressources ` : lang === 'sp' ? 'Centralice la inteligencia de automatización de su flujo de trabajo, monitoree sus recursos digitales y ' : lang === 'ar' ? 'قم بتجميع المعلومات المتعلقة بأتمتة سير العمل لديك بشكل مركزي، ومراقبة مواردك الرقمية وتأكد من ' : lang === 'gr' ? 'Zentralisieren Sie Ihre Workflow-Automatisierungsintelligenz, überwachen Sie Ihre digitalen ' : 'Centralise your workflow automation intelligence, '}
              <span style={{ color: Colors.airaSecondary }}> 
              {lang === 'fr' ? `numériques et garantissez des hyper-automatisations à faible coût et à fort impact, comme jamais auparavant.` : lang === 'sp' ? 'garantice hiperautomatizaciones de bajo costo y alto impacto, como nunca antes.' : lang === 'ar' ? 'إجراء عمليات أتمتة فائقة التكلفة ومنخفضة التكلفة، كما لم يحدث من قبل.' : lang === 'gr' ? 'Ressourcen und sorgen Sie für kostengünstige, wirkungsvolle Hyperautomatisierungen wie nie zuvor.' : '  monitor your digital resources and ensure low-cost high-impact hyper-automations, like never before. '}
              </span>
            </Typography>
         

            <div className="btn_group btn-group1">
              <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
              {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Nutzen Sie AIRA noch heute für Ihr Unternehmen' : ' Leverage AIRA for your Enterprise Today'}

                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
              <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
              {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang === 'sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang === 'ar' ? 'احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang === 'gr' ? 'Buchen Sie ein Demo-Beratungsgespräch mit unserem Produktteam' : 'Book a Demo Consultation Call with our Product Team'}
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