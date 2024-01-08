import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Divider,
  CircularProgress 
} from "@mui/material";
import "../../../styles/Home.module.css";

import Colors from "@/common/Colorscomponents";
import AIRAMonoLinesLeft from "@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  LiaArrowDownSolid,
  LiaCoinsSolid,
  LiaCommentAltSolid,
  LiaMoneyBillAltSolid,
  LiaTicketAltSolid,
} from "react-icons/lia";
import BtnLeftImageRightCard from "@/common/BtnLeftImageRightCardcomponents";
import BtnRightImageLeftCard from "@/common/BtnRightImageLeftCardcomponents";
import _ from "lodash";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import Slider from "react-slick";
// import TabsBox from './TabsBox';

const IMGBASEURL = "/images/careers";

const LR_ITEMS = [
  {
    cardTitle: "Internship Programs",
    cardDesc:
      "Explore a wide range of opportunities for graduate and postgraduate students to get a perfect kickstart for their technical career.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Entry Level Opportunities",
    cardDesc:
      "Inviting entry level professionals for a chance to start your career and explore how you can transform the world.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Senior Level Opportunities",
    cardDesc:
      "Inviting exceptional leaders and subject matter experts to guide the teams at AIRA and help them take the brand to the next level.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Card sx={{ p: 3 }}>
          <Stack direction={"row"} alignItems={"center"}>
            <HiChevronLeft size={16} color={Colors.airaSecondary} />
            <Typography sx={{ px: 2 }} color={Colors.airaSecondary}>
              {index + 1} / 4
            </Typography>
            <HiChevronRight size={16} color={Colors.airaSecondary} />
          </Stack>
          {children}
        </Card>
      )}
    </div>
  );
}

function TabPanelNew(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Card sx={{ p: 3 }}>
          <Stack direction={"row"} alignItems={"center"}>
            <HiChevronLeft size={16} color={Colors.airaSecondary} />
            <Typography sx={{ px: 2 }} color={Colors.airaSecondary}>
              {index + 1} / 4
            </Typography>
            <HiChevronRight size={16} color={Colors.airaSecondary} />
          </Stack>
          {children}
        </Card>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Index = () => {
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
  const [lang, setLang] = useState("en");
  useEffect(() => {
    setLang(localStorage?.getItem("lang"));
  }, []);
  // console.log(lang);

  const [value, setValue] = React?.useState(0);
  const [newValue, setNewValue] = React?.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeNew = (event, newValue) => {
    setNewValue(newValue);
  };

  const router = useRouter();
  
  const [BLOGS, setBLOGS] = useState([]);
  const [data1, setData1] = useState([]);
  const [cats, setCats] = useState([]);
  const [val, setVal] = useState({
    category: "",
    type: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData1();
  }, []);

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

  const getData1 = async () => {
    let resp = await fetch(
      "https://aira-zij7.onrender.com/category/getCategorys"
    );
    // let resp = await fetch('http://localhost:5000/category/getCategorys');
    let data = await resp?.json();
    // console.log(data.data);
    setCats(data?.data);
  };

  return (
    <Box width="100">
      <Box
        sx={{
          backgroundColor: "##F8F9FB",
          position: "relative",
          pt: { xs: 0, lg: 10 },
        }}
      >
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
                    {/* Hyper-automation by AIRA */}
                    {lang === "fr"
                      ? `Hyper-automatisation par AIRA`
                      : lang === "sp"
                      ? "Hiperautomatización por AIRA"
                      : lang === "ar"
                      ? "الأتمتة المفرطة بواسطة AIRA"
                      : lang === "gr"
                      ? "Hyperautomation von AIRA"
                      : "Hyper-automation by AIRA "}
                    <br />
                    <span
                      className="span"
                      style={{ color: Colors.airaSecondary }}
                    >
                      {lang === "fr"
                        ? `La prochaine étape de la transformation numérique de l'entreprise`
                        : lang === "sp"
                        ? "El siguiente paso en la transformación digital empresarial"
                        : lang === "ar"
                        ? "الأتمتة المفرطة بواسطة AIRA"
                        : lang === "gr"
                        ? "Der nächste Schritt in der digitalen Transformation von Unternehmen"
                        : "The Next Step in Enterprise Digital Transformation"}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === "fr"
                      ? `Découvrez les capacités d'hyper-automatisation de nouvelle génération réunissant le meilleur de la RPA et de l'IA sur une seule plateforme.`
                      : lang === "sp"
                      ? "Sea testigo de las capacidades de hiperautomatización de próxima generación que ofrecen lo mejor de RPA e IA en una sola plataforma."
                      : lang === "ar"
                      ? "الخطوة التالية في التحول الرقمي للمؤسسات"
                      : lang === "gr"
                      ? "Erleben Sie die Hyperautomatisierungsfunktionen der nächsten Generation, die das Beste aus RPA und KI auf einer Plattform vereinen."
                      : "Hyper automation by Aira transforms manual processes into intelligent, streamlined workflows, unlocking efficiency and driving business excellence through advanced technologies."}
                  </Typography>

                  {/* <div className="btn_group">
                    <button onClick={() => {
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
                      {lang === 'fr' ? `Essayez AIRA pour votre entreprise` : lang === 'sp' ? 'Pruebe AIRA para su empresa	Reserve una llamada de demostración' : lang === 'ar' ? 'شاهد الجيل التالي من إمكانيات التشغيل الآلي الفائق الذي يوفر أفضل ما في RPA والذكاء الاصطناعي في نظام أساسي واحد.' : lang === 'gr' ? 'Testen Sie AIRA für Ihr Unternehmen' : 'Try AIRA for your Enterprise'}
                      <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                    <button onClick={() => {
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">

                      {lang === 'fr' ? `Réservez un appel de démonstration` : lang === 'sp' ? 'Pruebe AIRA para su empresa	Reserve una llamada de demostración' : lang === 'ar' ? 'حجز مكالمة تجريبية' : lang === 'gr' ? 'Testen Sie AIRA für Ihr Unternehmen	Buchen Sie einen Demo-Anruf' : 'Book a Demo Call'}
                      <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
                  </div> */}
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/bankingheader6.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", borderRadius: 8 }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box
        className="hh"
        sx={{ backgroundColor: "#6755DF", pt: 8, pb: 1, mt: 10 }}
      >
        <Container className="huk" maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, color: "white" }}>
            {lang === "fr"
              ? `Élaborez une stratégie. Rationaliser.`
              : lang === "sp"
              ? "Las transformaciones digitales son más inteligentes, más"
              : lang === "ar"
              ? "أصبحت التحولات الرقمية أكثر ذكاءً وأسرع وأسهل."
              : lang === "gr"
              ? "Digitale Transformationen werden intelligenter,"
              : " Digital Transformations"}{" "}
            <span className="span" style={{ color: Colors.airaSecondary }}>
              {lang === "fr"
                ? `Transformer.`
                : lang === "sp"
                ? "rápidas y más fáciles."
                : lang === "ar"
                ? "الأتمتة المفرطة بواسطة AIRA"
                : lang === "gr"
                ? "schneller und einfacher."
                : "made smarter, faster, easier."}
              <br />
            </span>
          </Typography>
          <Typography variant="body1" sx={{ my: 3, color: "white" }}>
            {lang === "fr"
              ? `Découvrez comment l'hyper-automatisation alimente une transformation numérique résiliente et évolutive pour votre entreprise.`
              : lang === "sp"
              ? "La robusta confiabilidad de la Automatización Robótica de Procesos combinada con la agilidad y velocidad de la Inteligencia Artificial. AIRA reúne lo mejor de ambos en una plataforma singular para que usted aproveche la hiperautomatización para planificar, implementar y escalar transformaciones digitales en toda la empresa."
              : lang === "ar"
              ? "الموثوقية القوية لأتمتة العمليات الآلية جنبًا إلى جنب مع مرونة وسرعة الذكاء الاصطناعي. تجمع AIRA أفضل ما في كليهما في منصة واحدة لتتمكن من الاستفادة من الأتمتة الفائقة لتخطيط وتنفيذ وتوسيع نطاق التحولات الرقمية على مستوى المؤسسة."
              : lang === "gr"
              ? "Die robuste Zuverlässigkeit der Robotic Process Automation kombiniert mit der Agilität und Geschwindigkeit der künstlichen Intelligenz. AIRA vereint das Beste aus beidem in einer einzigen Plattform, damit Sie Hyperautomatisierung nutzen können, um unternehmensweite digitale Transformationen zu planen, umzusetzen und zu skalieren."
              : "The robust reliability of Robotic Process Automation combined with agile and speed of Artificial Intelligence. AIRA brings together the best of both in one singular platform for you to leverage hyper-automation to plan, implement and scale enterprise wide digital transformations."}
          </Typography>
        </Container>
      </Box>

      <Box className="tyty" sx={{ backgroundColor: "#6755DF", pb: 8, pt: 3 }}>
        <Container className="ooo" maxWidth="lg">
          <Grid className="ooo" container spacing={12}>
            <Grid className="ik" item xs={12} md={4}>
              <Box
                sx={{ p: 4, backgroundColor: "#f1f1f1", borderRadius: "24px" }}
              >
                <Stack
                  className=""
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography color={"#6755DF"}>
                    {lang === "fr"
                      ? `Forum économique mondial`
                      : lang === "sp"
                      ? "foro Economico Mundial"
                      : lang === "ar"
                      ? "المنتدى الاقتصادي العالمي"
                      : lang === "gr"
                      ? "Weltwirtschaftsforum"
                      : "World Economic Forum"}
                  </Typography>
                  <Typography
                    variant="h2"
                    color={"#6755DF"}
                    fontWeight={"bold"}
                  >
                    30-50%
                  </Typography>
                  <Typography color={"#6755DF"} sx={{ textAlign: "center" }}>
                    {lang === "fr"
                      ? `Les usines de fabrication mettant en œuvre l’hyperautomatisation signalent une amélioration moyenne de leur efficacité`
                      : lang === "sp"
                      ? "Las plantas de fabricación que implementan la hiperautomatización informan una mejora promedio de la eficiencia"
                      : lang === "ar"
                      ? "تشير مصانع التصنيع التي تطبق الأتمتة الفائقة إلى تحسن متوسط ​​في الكفاءة"
                      : lang === "gr"
                      ? "Fertigungsbetriebe, die Hyperautomatisierung implementieren, verzeichnen eine durchschnittliche Effizienzsteigerung"
                      : "Manufacturing plants implementing hyper automation report an average efficiency improvement."}
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
            <Grid className="ik" item xs={12} md={4}>
              <Box
                sx={{ p: 4, backgroundColor: "#f1f1f1", borderRadius: "24px" }}
              >
                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography color={"#6755DF"}>
                    {lang === "fr"
                      ? `Deloitte`
                      : lang === "sp"
                      ? "Deloitte"
                      : lang === "ar"
                      ? "ديلويت"
                      : lang === "gr"
                      ? "Deloitte"
                      : "Deloitte"}
                  </Typography>
                  <Typography
                    variant="h2"
                    color={"#6755DF"}
                    fontWeight={"bold"}
                  >
                    20-40%
                  </Typography>
                  <Typography color={"#6755DF"} sx={{ textAlign: "center" }}>
                    {lang === "fr"
                      ? `Les entreprises textiles tirant parti de l’hyperautomatisation constatent une réduction des délais de livraison`
                      : lang === "sp"
                      ? "Las empresas textiles que aprovechan la hiperautomatización están presenciando una reducción en los plazos de entrega"
                      : lang === "ar"
                      ? "تشهد شركات النسيج التي تستفيد من الأتمتة المفرطة انخفاضًا في المهل الزمنية"
                      : lang === "gr"
                      ? "Textilunternehmen, die Hyperautomatisierung nutzen, verzeichnen eine Verkürzung der Durchlaufzeiten"
                      : "Textile companies leveraging hyper-automation are witnessing a reduction in lead times."}
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
            <Grid className="ik" item xs={12} md={4}>
              <Box
                sx={{ p: 4, backgroundColor: "#f1f1f1", borderRadius: "24px" }}
              >
                <Stack
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Typography color={"#6755DF"}>
                    {lang === "fr"
                      ? `Accenture`
                      : lang === "sp"
                      ? "acento"
                      : lang === "ar"
                      ? "أكسنتشر"
                      : lang === "gr"
                      ? "Accenture"
                      : "Accenture"}
                  </Typography>
                  <Typography
                    variant="h2"
                    color={"#6755DF"}
                    fontWeight={"bold"}
                  >
                    25-40%
                  </Typography>
                  <Typography color={"#6755DF"} sx={{ textAlign: "center" }}>
                    {lang === "fr"
                      ? `Les banques qui adoptent des technologies d’hyperautomatisation signalent une réduction des délais de traitement des transactions.`
                      : lang === "sp"
                      ? "Los bancos que adoptan tecnologías de hiperautomatización informan de una reducción en los tiempos de procesamiento de transacciones."
                      : lang === "ar"
                      ? "تشير البنوك التي تتبنى تقنيات الأتمتة الفائقة إلى انخفاض في أوقات معالجة المعاملات."
                      : lang === "gr"
                      ? "Banken, die Hyperautomatisierungstechnologien einführen, berichten von einer Verkürzung der Transaktionsverarbeitungszeiten."
                      : "Banks adopting hyper automation technologies report a reduction in transaction processing times."}
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

      <Box sx={{ background: "#fff", py: 10 }}>
        <Container maxWidth="lg">
          <Stack>
            <Typography
              fontSize={"40px"}
              variant="h4"
              sx={{ fontWeight: 700, textAlign: "center" }}
            >
              {lang === "fr"
                ? `Élaborez une stratégie. Rationaliser.`
                : lang === "sp"
                ? "Elaborar estrategias. Línea de corriente"
                : lang === "ar"
                ? "استراتيجية. انسيابية. تحول"
                : lang === "gr"
                ? "Strategisieren Sie. Rationalisieren."
                : "Strategize. Streamline."}{" "}
              <span className="span" style={{ color: Colors.airaSecondary }}>
                {lang === "fr"
                  ? `Transformer.`
                  : lang === "sp"
                  ? "Transformar."
                  : lang === "ar"
                  ? "تعرف على كيفية قيام التشغيل الآلي الفائق بتعزيز التحول الرقمي المرن والقابل للتطوير لمؤسستك."
                  : lang === "gr"
                  ? "Verwandeln."
                  : "Transform."}
              </span>
            </Typography>
            <Typography textAlign={"center"} fontSize={"20"} sx={{ mt: 2.5 }}>
              {lang === "fr"
                ? `Découvrez comment l'hyper-automatisation alimente une transformation numérique résiliente et évolutive pour votre entreprise.`
                : lang === "sp"
                ? "Descubra cómo la hiperautomatización impulsa una transformación digital resiliente y escalable para su empresa."
                : lang === "ar"
                ? "تعرف على كيفية قيام التشغيل الآلي الفائق بتعزيز التحول الرقمي المرن والقابل للتطوير لمؤسستك."
                : lang === "gr"
                ? "Erfahren Sie, wie Hyperautomation die belastbare und skalierbare digitale Transformation Ihres Unternehmens vorantreibt."
                : " Learn how Hyper-automation fuels resilient and scalable digital transformation for your enterprise."}
            </Typography>
          </Stack>

          <Grid container spacing={2} justifyContent={"center"} sx={{ mt: 3 }}>
            <Grid item xs={12} md={3}>
              <Stack
                className="tr1"
                direction={"column"}
                alignItems={"center"}
                sx={{
                  backgroundColor: "#6755DF",
                  p: 3,
                  borderRadius: "16px",
                  height: "320px",
                }}
              >
                <LiaCoinsSolid size={30} color="#ffffff" />
                <Typography
                  sx={{ mt: 0.5 }}
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={"700"}
                  color={"#fff"}
                >
                  {lang === "fr"
                    ? `Hyper-automatisez tous les aspects des processus de base de l’entreprise.`
                    : lang === "sp"
                    ? "Hiperautomatice todos los aspectos de los procesos empresariales centrales."
                    : lang === "ar"
                    ? "أتمتة فائقة لكل جانب من جوانب عمليات المؤسسة الأساسية."
                    : lang === "gr"
                    ? "Hyperautomatisieren Sie jeden Aspekt zentraler Unternehmensprozesse. "
                    : "Automate Enterprise Process"}
                </Typography>
                <Typography
                  sx={{ mt: 0.5 }}
                  textAlign={"center"}
                  fontSize={"14px"}
                  fontWeight={"400"}
                  color={"#fff"}
                >
                  {lang === "fr"
                    ? `Utilisez les capacités IA/ML d’AIRA avec la mise en œuvre pratique de la RPA pour garantir une automatisation évolutive.`
                    : lang === "sp"
                    ? "Utilice las capacidades de AI/ML de AIRA con una implementación práctica de RPA para garantizar una automatización escalable."
                    : lang === "ar"
                    ? "استخدم إمكانات AI/ML الخاصة بـ AIRA مع التنفيذ العملي لـ RPA لضمان التشغيل الآلي القابل للتطوير"
                    : lang === "gr"
                    ? "Nutzen Sie die KI/ML-Funktionen von AIRA mit praktischer Implementierung von RPA, um eine skalierbare Automatisierung sicherzustellen."
                    : "Hyper automate core enterprise processes, leveraging AIRAs AI/ML and RPA for scalable automation."}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack
                className="tr1"
                direction={"column"}
                alignItems={"center"}
                sx={{
                  backgroundColor: "#6755DF",
                  p: 3,
                  borderRadius: "16px",
                  height: "320px",
                }}
              >
                <LiaMoneyBillAltSolid size={30} color="#ffffff" />
                <Typography
                  sx={{ mt: 0.5 }}
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={"700"}
                  color={"#fff"}
                >
                  {lang === "fr"
                    ? `Économisez sur les coûts opérationnels.`
                    : lang === "sp"
                    ? "Ahorre costos operativos."
                    : lang === "ar"
                    ? "حفظ التكاليف التشغيلية."
                    : lang === "gr"
                    ? "Sparen Sie Betriebskosten."
                    : "Save Operational Cost"}
                </Typography>
                <Typography
                  sx={{ mt: 0.5 }}
                  textAlign={"center"}
                  fontSize={"14px"}
                  fontWeight={"400"}
                  color={"#fff"}
                >
                  {lang === "fr"
                    ? `Que ce soit sur le cloud ou sur site, bénéficiez de l'activation instantanée et des intégrations low-code pour maximiser la rentabilité.`
                    : lang === "sp"
                    ? "Ya sea en la nube o en las instalaciones, benefíciese de la activación instantánea y las integraciones de código bajo para maximizar la rentabilidad."
                    : lang === "ar"
                    ? "سواء كنت على السحابة أو محليًا، يمكنك الاستفادة من التنشيط الفوري والتكاملات ذات التعليمات البرمجية المنخفضة لزيادة كفاءة التكلفة إلى أقصى "
                    : lang === "gr"
                    ? "Ob in der Cloud oder vor Ort – profitieren Sie von der sofortigen Aktivierung und Low-Code-Integrationen zur Maximierung der Kosteneffizienz."
                    : "Save up to 30% operational costs, whether On Cloud or On-Premise, with instant activation and low-code integrations for efficiency."}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack
                className="tr1"
                direction={"column"}
                alignItems={"center"}
                sx={{
                  backgroundColor: "#6755DF",
                  p: 3,
                  borderRadius: "16px",
                  height: "320px",
                }}
              >
                <LiaCommentAltSolid size={30} color="#ffffff" />
                <Typography
                  sx={{ mt: 0.5 }}
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={"700"}
                  color={"#fff"}
                >
                  {lang === "fr"
                    ? `Rescue équivalents temps plein.`
                    : lang === "sp"
                    ? "Rescate equivalentes a tiempo completo."
                    : lang === "ar"
                    ? "إنقاذ معادلات الدوام الكامل."
                    : lang === "gr"
                    ? "Vollzeitäquivalente retten."
                    : "Rescue Time Equivalents"}
                </Typography>
                <Typography
                  sx={{ mt: 0.5 }}
                  textAlign={"center"}
                  fontSize={"14px"}
                  fontWeight={"400"}
                  color={"#fff"}
                >
                  {lang === "fr"
                    ? `Planifiez, prévoyez, rationalisez et élaborez une stratégie pour chaque aspect de l’hyper-automatisation d’entreprise sans tests inutiles sur le terrain.`
                    : lang === "sp"
                    ? "Planifique, pronostique, optimice y diseñe estrategias para todos los aspectos de la hiperautomatización empresarial sin desperdicio de pruebas de campo."
                    : lang === "ar"
                    ? "قم بالتخطيط والتنبؤ والتبسيط ووضع إستراتيجيات لكل جانب من جوانب التشغيل الآلي الفائق للمؤسسة دون إجراء اختبارات ميدانية مهدرة. ."
                    : lang === "gr"
                    ? "Planen, prognostizieren, optimieren und strategisieren Sie jeden Aspekt der Hyperautomatisierung von Unternehmen ohne verschwenderische Feldtests."
                    : "The client was able to save over 800 monthly hours, boost efficiency by 5 full-time equivalents (FTEs) by hyper automation."}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack
                className="tr1"
                direction={"column"}
                alignItems={"center"}
                sx={{
                  backgroundColor: "#6755DF",
                  p: 3,
                  borderRadius: "16px",
                  height: "320px",
                }}
              >
                <LiaArrowDownSolid size={30} color="#ffffff" />
                <Typography
                  sx={{ mt: 0.5 }}
                  textAlign={"center"}
                  fontSize={"16px"}
                  fontWeight={"700"}
                  color={"#fff"}
                >
                  {lang === "fr"
                    ? `Rationalisez les collaborations entre équipes.`
                    : lang === "sp"
                    ? "Optimice las colaboraciones entre equipos"
                    : lang === "ar"
                    ? "تبسيط التعاون بين الفريق."
                    : lang === "gr"
                    ? "Optimieren Sie die teamübergreifende Zusammenarbeit."
                    : "Streamline Collaboration"}
                </Typography>
                <Typography
                  sx={{ mt: 0.5 }}
                  textAlign={"center"}
                  fontSize={"14px"}
                  fontWeight={"400"}
                  color={"#fff"}
                >
                  {lang === "fr"
                    ? `Améliorez les collaborations entre équipes à l’aide de notre plate-forme unifiée basée sur un navigateur, capable de gérer les accès à plusieurs niveaux en fonction des rôles pour une délégation intelligente.`
                    : lang === "sp"
                    ? "Mejore las colaboraciones entre equipos utilizando nuestra plataforma unificada basada en navegador capaz de gestionar el acceso basado en roles de varios niveles para una delegación inteligente."
                    : lang === "ar"
                    ? "قم بتعزيز التعاون بين الفرق باستخدام نظامنا الأساسي الموحد القائم على المستعرض والقادر على إدارة الوصول المستند إلى الأدوار المتعددة المستويات للتفويض الذكي."
                    : lang === "gr"
                    ? "Verbessern Sie die teamübergreifende Zusammenarbeit mithilfe unserer browserbasierten einheitlichen Plattform, die eine mehrstufige rollenbasierte Zugriffsverwaltung für intelligente Delegation ermöglicht."
                    : "Streamline cross-team collaborations using AIRAs unified platform with multi-level role-based access management."}
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
      </Box>

      <Container maxWidth="lg" sx={{ my: 10 }}>
        <Stack gap={4}>
          {LR_ITEMS.map((lrItem, lrIdx) => {
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
          })}
        </Stack>
      </Container> */}

      <Box sx={{ backgroundColor: "#F0F0F0", py: 10, mb: 5 }}>
        <Container maxWidth="lg">
          <Stack>
            <Typography
              fontSize={"40px"}
              variant="h4"
              sx={{ fontWeight: 700, textAlign: "center" }}
            >
              {lang === "fr"
                ? `e hub d'hyper-automatisation unique permet à votre entreprise de planifier, de lancer et de faire `
                : lang === "sp"
                ? "El centro integral de hiperautomatización que permite a su empresa planificar, lanzar y escalar"
                : lang === "ar"
                ? "مركز الأتمتة الفائقة الشامل الذي يمكّن مؤسستك من تخطيط التحولات الرقمية وإطلاقها وتوسيع نطاقها بشكل "
                : lang === "gr"
                ? "Der One-Stop-Hyperautomatisierungs-Hub, der es Ihrem Unternehmen ermöglicht, digitale "
                : "The One-Stop Hyper-automation Hub that"}{" "}
              <span className="span" style={{ color: Colors.airaSecondary }}>
                {lang === "fr"
                  ? `évoluer des transformations numériques comme jamais auparavant.`
                  : lang === "sp"
                  ? "transformaciones digitales como nunca antes."
                  : lang === "ar"
                  ? "لم يسبق له مثيل."
                  : lang === "gr"
                  ? "Transformationen wie nie zuvor zu planen, zu starten und zu skalieren."
                  : "enables your enterprise to plan, launch and scale Digital Transformations like never before."}
              </span>
            </Typography>
            <div className="btn_group btn-group1">
              <button
                onClick={() => {
                  router?.push("/contact");
                }}
                className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root"
                tabindex="0"
                type="button"
              >
                {lang === "fr"
                  ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui`
                  : lang === "sp"
                  ? "Aproveche AIRA para su empresa hoy"
                  : lang === "ar"
                  ? "استفد من AIRA لمؤسستك اليوم"
                  : lang === "gr"
                  ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                  : "Leverage AIRA for your Enterprise Today"}

                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
              </button>
              <button
                onClick={() => {
                  router?.push("/contact");
                }}
                className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root"
                tabindex="0"
                type="button"
              >
                {lang === "fr"
                  ? `Réservez un appel de consultation de démonstration avec notre équipe produit`
                  : lang === "sp"
                  ? "Reserve una llamada de consulta de demostración con nuestro equipo de producto"
                  : lang === "ar"
                  ? "استفد من AIRA لمؤسستك اليوم	احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا"
                  : lang === "gr"
                  ? "Buchen Sie ein Demo-Beratungsgespräch mit unserem Produktteam"
                  : "Book a Demo Consultation Call with our Product Team"}
                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
              </button>
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

      <Container maxWidth="lg">
        <Box sx={{ mb: 10, mt: 5 }}>
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5 }}>
              RPA to ease off
              <br />
              <span className="span" style={{ color: Colors.airaSecondary }}>
                compliance issues
              </span>
            </Typography>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Box sx={{ backgroundColor: "#f1f1f1", height: "100%" }}>
                  <Image
                    src="/images/solutions/banking/compliance2.png"
                    alt="bankingheader"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto", borderRadius: 8 }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ my: 1, fontWeight: 700 }}>
                  {lang === "fr"
                    ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui`
                    : lang === "sp"
                    ? "Aproveche AIRA para su empresa hoy"
                    : lang === "ar"
                    ? "استفد من AIRA لمؤسستك اليوم"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "AIRA RPA - Your Agile Solution for Efficient, Error-Free Compliance Management"}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, lineHeight: 2 }}
                >
                  {lang === "fr"
                    ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui`
                    : lang === "sp"
                    ? "Aproveche AIRA para su empresa hoy"
                    : lang === "ar"
                    ? "استفد من AIRA لمؤسستك اليوم"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "AIRA RPA revolutionises compliance management by combining precision, speed, and adaptability. Its implementation results in a 95% reduction in errors, ensuring heightened data accuracy and minimising compliance risks."}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 }}
                >
                  {lang === "fr"
                    ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui`
                    : lang === "sp"
                    ? "Aproveche AIRA para su empresa hoy"
                    : lang === "ar"
                    ? "استفد من AIRA لمؤسستك اليوم"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "AIRA accelerates complex compliance workflows, boasting a 50% decrease in completion times through the automation of tasks like cross-referencing and report generation. Real-time monitoring and reporting features reduce manual efforts by 60%, providing instant insights into compliance metrics and enabling proactive issue resolution. Notably, AIRA`s adaptability shines by swiftly adjusting to regulatory changes using machine learning algorithms, ensuring organisations navigate evolving landscapes seamlessly. As a comprehensive solution, AIRA RPA emerges as a strategic imperative for businesses aiming to tackle compliance challenges efficiently and with future-proof adaptability."}
                </Typography>
                {/* <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 400, lineHeight: 2 }}
                >
                  From sales processes to loan repayment, automation is changing
                  each aspect of the banking and finance industry. That’s where
                  AIRA’s digital solutions help you. Powered by advanced
                  technologies, AIRA sets you free from past limitations and
                  allows you to gain complete control over your compliance costs
                  so that you can make the process more intelligent than it ever
                  was.
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 400, lineHeight: 2 }}
                >
                  From sales processes to loan repayment, automation is changing
                  each aspect of the banking and finance industry. That’s where
                  AIRA’s digital solutions help you. Powered by advanced
                  technologies, AIRA sets you free from past limitations and
                  allows you to gain complete control over your compliance costs
                  so that you can make the process more intelligent than it ever
                  was.
                </Typography> */}
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>

      <Box sx={{ my: 5 }}>
        <Container maxWidth="lg">
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={4}
          >
            <Grid item xs={12} md={5}>
              <Image
                src={"/images/has/rectangle48.png"}
                alt="has"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography fontSize={32} fontWeight={700} color={Colors.black}>
                <span className="span" style={{ color: Colors.airaSecondary }}>
                  {lang === "fr"
                    ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui`
                    : lang === "sp"
                    ? "Aproveche AIRA para su empresa hoy"
                    : lang === "ar"
                    ? "استفد من AIRA لمؤسستك اليوم"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "Elevate Your Business with Cutting-Edge Robotic Process Automation"}
                </span>{" "}
                with Truist, Wells Fargo, Bain & Company, BNY Mellon | Pershing,
                JP Morgan Chase, Cowen, and more
              </Typography>
              {/* <Button
                variant='contained'
                endIcon={<ArrowForwardIcon />}
                sx={{ borderRadius: '50px', backgroundColor: Colors.airaPrimary, mt: 2 }}
              >
                Send me the recording
              </Button> */}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Divider sx={{ my: 8 }} light />
      </Container>

      <Box sx={{ my: 10 }}>
        <Container maxWidth="lg">
          <Typography textAlign={"center"} fontSize={18}>
            TOP AUTOMATION AREAS
          </Typography>
          <Typography textAlign={"center"} fontSize={40} fontWeight={700}>
            <span className="span1" style={{ color: Colors.airaPrimary }}>
              Banking and Financial
            </span>{" "}
            Services Automation
          </Typography>

          <Box sx={{ mx: "auto", my: 3 }} gap={1}>
            <Grid container direction="row">
              <Grid item xs={12} sm={5}>
                <Image
                  src="/images/has/rectangle49.png"
                  alt="rectangle49"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "12px",
                    zindex: -1,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={5} justifySelf="center" alignSelf="center">
                <Card
                  raised
                  sx={{
                    borderRadius: "12px",
                    ml: { xs: "0%", md: "-20%" },
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <CardContent sx={{ pl: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: Colors.airaSecondary,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {lang === "fr"
                        ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui`
                        : lang === "sp"
                        ? "Aproveche AIRA para su empresa hoy"
                        : lang === "ar"
                        ? "استفد من AIRA لمؤسستك اليوم"
                        : lang === "gr"
                        ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                        : " Consumer Banking"}
                    </Typography>
                    <Typography fontSize={20} fontWeight={600}>
                      {lang === "fr"
                        ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui`
                        : lang === "sp"
                        ? "Aproveche AIRA para su empresa hoy"
                        : lang === "ar"
                        ? "استفد من AIRA لمؤسستك اليوم"
                        : lang === "gr"
                        ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                        : "AIRA Sets a New Standard, Accelerating Journeys, Streamlining Lending, and Revolutionising Operations in the Digital Age."}
                    </Typography>
                    <Typography sx={{ mt: 3 }} fontSize={16} fontWeight={400}>
                      {lang === "fr"
                        ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui`
                        : lang === "sp"
                        ? "Aproveche AIRA para su empresa hoy"
                        : lang === "ar"
                        ? "استفد من AIRA لمؤسستك اليوم"
                        : lang === "gr"
                        ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                        : " AIRA delivers a new standard in efficiency. By elevating customer journeys, accelerating lending timelines, and modernizing KYC, automation brings Consumer Banks into todays digital age. And shortly thereafter, helps them revolutionize their entire way of operating (and innovating!)"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
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

      {/* <Container maxWidth="lg" sx={{ my: 10 }}>
        <Stack gap={4}>
          {LR_ITEMS.map((lrItem, lrIdx) => {
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
          })}
        </Stack>
      </Container> */}

      <Container maxWidth="lg">
        {/* <TabsBox /> */}
        <Grid container className="grid-class">
          <Grid className="grid-left-item" item xs={12} md={5}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
            >
              <Link href="#scroll5" className="scroll-link">
                <button className="scroll-btn">Lending</button>
              </Link>
              <Link href="#scroll6" className="scroll-link">
                <button className="scroll-btn">Customer Experience</button>
              </Link>
              <Link href="#scroll7" className="scroll-link">
                <button className="scroll-btn">Cards and Payments</button>
              </Link>
              <Link href="#scroll8" className="scroll-link">
                <button className="scroll-btn">Risk & Compliance</button>
              </Link>
              {/* <Tab label="Lending" {...a11yProps(0)} />
              <Tab label="Customer Experience" {...a11yProps(1)} />
              <Tab label="Cards and Payments" {...a11yProps(2)} />
              <Tab label="Risk & Compliance" {...a11yProps(3)} /> */}
            </Tabs>
          </Grid>
          <Grid item xs={12} md={7} className="grid-right-item">
            {/* <TabPanel> */}
            <div id="scroll5">
              <Stack direction={"column"}>
                <Typography
                  color={Colors.airaPrimary}
                  fontWeight={700}
                  fontSize={"24px"}
                >
                  {lang === "fr"
                    ? `Prêt`
                    : lang === "sp"
                    ? "Préstamo"
                    : lang === "ar"
                    ? "الإقراض"
                    : lang === "gr"
                    ? "Kreditvergabe"
                    : "Lending"}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {lang === "fr"
                    ? `Prêt à redéfinir les prêts bancaires à la consommation avec AIRA ?`
                    : lang === "sp"
                    ? "¿Listo para redefinir los préstamos de banca de consumo con AIRA?"
                    : lang === "ar"
                    ? "هل أنت مستعد لإعادة تعريف الإقراض المصرفي الاستهلاكي مع AIRA؟"
                    : lang === "gr"
                    ? "Sind Sie bereit, mit AIRA die Kreditvergabe an Privatkunden neu zu definieren?"
                    : "Ready to redefine consumer banking lending with AIRA?"}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={400}
                  fontSize={"16px"}
                >
                  {lang === "fr"
                    ? `Découvrez une nouvelle ère de prêt avec AIRA. Des approbations accélérées aux évaluations précises des risques, AIRA automatise les processus, garantissant un décaissement efficace des fonds et améliorant l'expérience client globale en matière de prêts bancaires à la consommation.`
                    : lang === "sp"
                    ? "Experimente una nueva era en préstamos con AIRA. Desde aprobaciones aceleradas hasta evaluaciones de riesgos precisas, AIRA automatiza los procesos, garantizando un desembolso de fondos eficiente y mejorando la experiencia general del cliente en los préstamos de banca de consumo."
                    : lang === "ar"
                    ? "استمتع بعصر جديد في الإقراض مع AIRA. بدءًا من الموافقات المعجلة وحتى التقييمات الدقيقة للمخاطر، تقوم AIRA بأتمتة العمليات، مما يضمن صرف الأموال بكفاءة ورفع مستوى تجربة العملاء الشاملة في الإقراض المصرفي الاستهلاكي."
                    : lang === "gr"
                    ? "Erleben Sie mit AIRA eine neue Ära der Kreditvergabe. Von beschleunigten Genehmigungen bis hin zu präzisen Risikobewertungen automatisiert AIRA Prozesse, sorgt für eine effiziente Auszahlung von Geldern und verbessert das gesamte Kundenerlebnis bei der Kreditvergabe im Privatkundengeschäft."
                    : "Experience a new era in lending with AIRA. From accelerated approvals to precise risk assessments, AIRA automates processes, ensuring efficient fund disbursement and elevating the overall customer experience in consumer banking lending."}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {lang === "fr"
                    ? `Cas d'utilisation commerciale`
                    : lang === "sp"
                    ? "Casos de uso empresarial"
                    : lang === "ar"
                    ? "حالات الاستخدام التجاري"
                    : lang === "gr"
                    ? "Geschäftsanwendungsfälle"
                    : "Business Use Cases:"}
                </Typography>
                <ul>
                  <li>
                    {lang === "fr"
                      ? `Cycles de prêt accélérés`
                      : lang === "sp"
                      ? "Ciclos de préstamo acelerados"
                      : lang === "ar"
                      ? "دورات الإقراض المتسارعة"
                      : lang === "gr"
                      ? "Beschleunigte Kreditvergabezyklen"
                      : "Accelerated Lending Cycles"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Précision améliorée`
                      : lang === "sp"
                      ? "Precisión mejorada"
                      : lang === "ar"
                      ? "دقة محسنة"
                      : lang === "gr"
                      ? "Erhöhte Genauigkeit"
                      : "Enhanced Accuracy"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Opérations rationalisées`
                      : lang === "sp"
                      ? "Operaciones optimizadas"
                      : lang === "ar"
                      ? "عمليات مبسطة"
                      : lang === "gr"
                      ? "Optimierte Abläufe"
                      : "Streamlined Operations"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Processus de financement automatisés`
                      : lang === "sp"
                      ? "Procesos de financiación automatizados"
                      : lang === "ar"
                      ? "عمليات التمويل الآلية"
                      : lang === "gr"
                      ? "Automatisierte Finanzierungsprozesse"
                      : "Automated Funding Processes"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Traitement efficace des prêts`
                      : lang === "sp"
                      ? "Procesamiento eficiente de préstamos"
                      : lang === "ar"
                      ? "معالجة القروض بكفاءة"
                      : lang === "gr"
                      ? "Effiziente Kreditbearbeitung"
                      : "Efficient Loan Processing"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Gestion proactive des défauts`
                      : lang === "sp"
                      ? "Gestión proactiva de impagos"
                      : lang === "ar"
                      ? "الإدارة الافتراضية الاستباقية"
                      : lang === "gr"
                      ? "Proaktives Ausfallmanagement"
                      : "Proactive Management"}
                  </li>
                </ul>
              </Stack>
            </div>
            {/* </TabPanel>
            <TabPanel> */}
            <div id="scroll6">
              <Typography
                color={Colors.airaPrimary}
                fontWeight={700}
                fontSize={"24px"}
              >
                {lang === "fr"
                  ? `Expérience client`
                  : lang === "sp"
                  ? "Experiencia del cliente"
                  : lang === "ar"
                  ? "تجربة الزبون"
                  : lang === "gr"
                  ? "Kundenerfahrung"
                  : "Customer Experience"}
              </Typography>
              <Typography
                sx={{ pt: 2 }}
                color={Colors.black}
                fontWeight={600}
                fontSize={"20px"}
              >
                {lang === "fr"
                  ? `Comment AIRA remodèle-t-elle l’expérience client dans le secteur bancaire grand public ?`
                  : lang === "sp"
                  ? "¿Cómo remodela AIRA las experiencias de los clientes en la banca de consumo?"
                  : lang === "ar"
                  ? "كيف تقوم AIRA بإعادة تشكيل تجارب العملاء في الخدمات المصرفية الاستهلاكية؟"
                  : lang === "gr"
                  ? "Wie verändert AIRA das Kundenerlebnis im Consumer Banking?"
                  : "How does AIRA reshape customer experiences in consumer banking?"}
              </Typography>
              <Typography
                sx={{ pt: 2 }}
                color={Colors.black}
                fontWeight={400}
                fontSize={"16px"}
              >
                {lang === "fr"
                  ? `Dans le monde en évolution rapide des services bancaires aux consommateurs, l’automatisation AIRA apparaît comme le catalyseur d’expériences client transformatrices. En intégrant de manière transparente des technologies avancées, AIRA améliore chaque point de contact, garantissant efficacité, précision et un parcours personnalisé.`
                  : lang === "sp"
                  ? "En el acelerado mundo de la banca de consumo, la automatización de AIRA emerge como el catalizador para experiencias transformadoras de los clientes. Al integrar perfectamente tecnologías avanzadas, AIRA mejora cada punto de contacto, garantizando eficiencia, precisión y un viaje personalizado."
                  : lang === "ar"
                  ? "في عالم الخدمات المصرفية الاستهلاكية سريع الخطى، تظهر أتمتة AIRA كمحفز لتجارب العملاء التحويلية. من خلال دمج التقنيات المتقدمة بسلاسة، تعمل تقنية AIRA على تحسين كل نقطة اتصال، مما يضمن الكفاءة والدقة والرحلة الشخصية."
                  : lang === "gr"
                  ? "In der schnelllebigen Welt des Consumer Banking erweist sich die AIRA-Automatisierung als Katalysator für transformative Kundenerlebnisse. Durch die nahtlose Integration fortschrittlicher Technologien verbessert AIRA jeden Berührungspunkt und sorgt so für Effizienz, Genauigkeit und eine personalisierte Reise."
                  : "In the fast-paced world of consumer banking, AIRA automation emerges as the catalyst for transformative customer experiences. By seamlessly integrating advanced technologies, AIRA enhances every touchpoint, ensuring efficiency, accuracy, and a personalised journey."}
              </Typography>
              <Typography
                sx={{ pt: 2 }}
                color={Colors.black}
                fontWeight={600}
                fontSize={"20px"}
              >
                {lang === "fr"
                  ? `Cas d'utilisation commerciale`
                  : lang === "sp"
                  ? "Casos de uso empresarial"
                  : lang === "ar"
                  ? "حالات الاستخدام التجاري"
                  : lang === "gr"
                  ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                  : " Business Use Cases:"}
              </Typography>
              <ul>
                <li>
                  {lang === "fr"
                    ? `Intégration automatisée`
                    : lang === "sp"
                    ? "Incorporación automatizada"
                    : lang === "ar"
                    ? "الإعداد الآلي"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "Automated Onboarding"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Informations personnalisées`
                    : lang === "sp"
                    ? "Información personalizada"
                    : lang === "ar"
                    ? "رؤى شخصية"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "Personalised Insights"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Transactions sans effort`
                    : lang === "sp"
                    ? "Transacciones sin esfuerzo"
                    : lang === "ar"
                    ? "معاملات سهلة"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "Effortless Transactions"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Résolution proactive des problèmes`
                    : lang === "sp"
                    ? "Resolución proactiva de problemas"
                    : lang === "ar"
                    ? "حل المشكلات الاستباقي"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "Proactive Issue Resolution"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Recommandations de produits sur mesure`
                    : lang === "sp"
                    ? "Recomendaciones de productos personalizados"
                    : lang === "ar"
                    ? "توصيات المنتجات المخصصة"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "Tailored Product Recommendations"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Assistance client 24h/24 et 7j/7`
                    : lang === "sp"
                    ? "Atención al cliente 24 horas al día, 7 días a la semana"
                    : lang === "ar"
                    ? "دعم العملاء على مدار 24 ساعة طوال أيام الأسبوع"
                    : lang === "gr"
                    ? "Nutzen Sie AIRA noch heute für Ihr Unternehmen"
                    : "24/7 Customer Support"}
                </li>
              </ul>
            </div>
            {/* </TabPanel>
            <TabPanel> */}
            <div id="scroll7">
              <Typography
                color={Colors.airaPrimary}
                fontWeight={700}
                fontSize={"24px"}
              >
                {/* Customer Experience */}
                {lang === "fr"
                  ? `Paiement par carte`
                  : lang === "sp"
                  ? "Pago con tarjeta"
                  : lang === "ar"
                  ? "بطاقه ائتمان"
                  : lang === "gr"
                  ? "Kartenzahlung"
                  : "Card Payment"}
              </Typography>
              <Typography
                sx={{ pt: 2 }}
                color={Colors.black}
                fontWeight={600}
                fontSize={"20px"}
              >
                {lang === "fr"
                  ? `Comment AIRA redéfinit-elle les paiements par carte dans les services bancaires aux particuliers ?`
                  : lang === "sp"
                  ? "¿Cómo redefine AIRA los pagos con tarjeta en la banca de consumo?"
                  : lang === "ar"
                  ? "كيف تعيد AIRA تعريف مدفوعات البطاقات في الخدمات المصرفية الاستهلاكية؟"
                  : lang === "gr"
                  ? "Wie definiert AIRA Kartenzahlungen im Consumer Banking neu?"
                  : "How does AIRA redefine card payments in consumer banking?"}
              </Typography>
              <Typography
                sx={{ pt: 2 }}
                color={Colors.black}
                fontWeight={400}
                fontSize={"16px"}
              >
                {lang === "fr"
                  ? `L'automatisation d'AIRA apparaît comme un acteur clé dans l'amélioration des processus de paiement par carte. En intégrant de manière transparente des technologies avancées, AIRA transforme le paysage des paiements, garantissant efficacité, précision et une expérience client améliorée.`
                  : lang === "sp"
                  ? "La automatización de AIRA emerge como un actor clave para mejorar los procesos de pago con tarjeta. Al integrar perfectamente tecnologías avanzadas, AIRA transforma el panorama de pagos, garantizando eficiencia, precisión y una mejor experiencia del cliente."
                  : lang === "ar"
                  ? "تظهر أتمتة AIRA كلاعب رئيسي في تعزيز عمليات الدفع بالبطاقة. من خلال دمج التقنيات المتقدمة بسلاسة، تعمل AIRA على تحويل مشهد الدفع، مما يضمن الكفاءة والدقة وتحسين تجربة العملاء."
                  : lang === "gr"
                  ? "Die AIRA-Automatisierung erweist sich als wichtiger Akteur bei der Verbesserung von Kartenzahlungsprozessen. Durch die nahtlose Integration fortschrittlicher Technologien verändert AIRA die Zahlungslandschaft und sorgt für Effizienz, Genauigkeit und ein verbessertes Kundenerlebnis."
                  : "AIRA automation emerges as a key player in enhancing card payment processes. By seamlessly integrating advanced technologies, AIRA transforms the payment landscape, ensuring efficiency, accuracy, and an improved customer experience."}
              </Typography>
              <Typography
                sx={{ pt: 2 }}
                color={Colors.black}
                fontWeight={600}
                fontSize={"20px"}
              >
                {lang === "fr"
                  ? `Cas d'utilisation commerciale`
                  : lang === "sp"
                  ? "Casos de uso empresarial"
                  : lang === "ar"
                  ? "حالات الاستخدام التجاري"
                  : lang === "gr"
                  ? "Geschäftsanwendungsfälle"
                  : " Business Use Cases:"}
              </Typography>
              <ul>
                <li>
                  {lang === "fr"
                    ? `Traitement rapide des transactions`
                    : lang === "sp"
                    ? "Procesamiento rápido de transacciones"
                    : lang === "ar"
                    ? "معالجة المعاملات السريعة"
                    : lang === "gr"
                    ? "Schnelle Transaktionsverarbeitung"
                    : "Swift Transaction Processing"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Détection et prévention de la fraude`
                    : lang === "sp"
                    ? "Detección y prevención de fraude"
                    : lang === "ar"
                    ? "كشف الاحتيال ومنعه"
                    : lang === "gr"
                    ? "Betrugserkennung und -prävention"
                    : "Fraud Detection and Prevention"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Facturation et facturation automatisées`
                    : lang === "sp"
                    ? "Facturación y facturación automatizadas"
                    : lang === "ar"
                    ? "الفواتير الآلية والفواتير"
                    : lang === "gr"
                    ? "Automatisierte Abrechnung und Rechnungsstellung"
                    : "Automated Billing and Invoicing"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Plans de paiement personnalisés`
                    : lang === "sp"
                    ? "Planes de pago personalizados"
                    : lang === "ar"
                    ? "خطط الدفع الشخصية"
                    : lang === "gr"
                    ? "Personalisierte Zahlungspläne"
                    : "Personalized Payment Plans"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Gestion de la conformité`
                    : lang === "sp"
                    ? "Gestión de cumplimiento"
                    : lang === "ar"
                    ? "إدارة الامتثال"
                    : lang === "gr"
                    ? "Compliance-Management"
                    : "Compliance Management"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Amélioration du service client`
                    : lang === "sp"
                    ? "Mejora del servicio al cliente"
                    : lang === "ar"
                    ? "تعزيز خدمة العملاء"
                    : lang === "gr"
                    ? "Verbesserung des Kundenservice"
                    : "Customer Service Enhancement"}
                </li>
              </ul>
            </div>
            {/* </TabPanel>
            <TabPanel> */}
            <div id="scroll8">
              <Typography
                color={Colors.airaPrimary}
                fontWeight={700}
                fontSize={"24px"}
              >
                {/* Customer Experience */}
                {lang === "fr"
                  ? `Risque et conformité`
                  : lang === "sp"
                  ? "Riesgo y cumplimiento"
                  : lang === "ar"
                  ? "المخاطر والامتثال"
                  : lang === "gr"
                  ? "Risiko & Compliance"
                  : "Risk & Compliance"}
              </Typography>
              <Typography
                sx={{ pt: 2 }}
                color={Colors.black}
                fontWeight={600}
                fontSize={"20px"}
              >
                {lang === "fr"
                  ? `Comment l’AIRA fait-elle la différence ?`
                  : lang === "sp"
                  ? "¿Cómo marca la diferencia AIRA?"
                  : lang === "ar"
                  ? "كيف تُحدث AIRA فرقًا؟"
                  : lang === "gr"
                  ? "Wie macht AIRA einen Unterschied?"
                  : "How does AIRA make a difference?"}
              </Typography>
              <Typography
                sx={{ pt: 2 }}
                color={Colors.black}
                fontWeight={400}
                fontSize={"16px"}
              >
                {lang === "fr"
                  ? `L’automatisation de l’AIRA apparaît comme une force centrale pour atténuer les risques et garantir la conformité. En intégrant de manière transparente des technologies avancées, AIRA élève le paysage de la gestion des risques et de la conformité, offrant une efficacité et une précision sans précédent.`
                  : lang === "sp"
                  ? "La automatización de AIRA surge como una fuerza fundamental para mitigar los riesgos y garantizar el cumplimiento. Al integrar perfectamente tecnologías avanzadas, AIRA eleva el panorama de cumplimiento y gestión de riesgos, ofreciendo eficiencia y precisión sin precedentes."
                  : lang === "ar"
                  ? "تظهر أتمتة AIRA كقوة محورية في تخفيف المخاطر وضمان الامتثال. من خلال دمج التقنيات المتقدمة بسلاسة، تعمل AIRA على رفع مستوى إدارة المخاطر والامتثال، مما يوفر كفاءة ودقة غير مسبوقة."
                  : lang === "gr"
                  ? "Die AIRA-Automatisierung erweist sich als entscheidende Kraft bei der Risikominimierung und der Sicherstellung der Compliance. Durch die nahtlose Integration fortschrittlicher Technologien verbessert AIRA die Risikomanagement- und Compliance-Landschaft und bietet beispiellose Effizienz und Genauigkeit."
                  : "AIRA automation emerges as a pivotal force in mitigating risks and ensuring compliance. By seamlessly integrating advanced technologies, AIRA elevates the risk management and compliance landscape, offering unprecedented efficiency and accuracy."}
              </Typography>
              <Typography
                sx={{ pt: 2 }}
                color={Colors.black}
                fontWeight={600}
                fontSize={"20px"}
              >
                {lang === "fr"
                  ? `Cas d'utilisation commerciale`
                  : lang === "sp"
                  ? "Casos de uso empresarial"
                  : lang === "ar"
                  ? "حالات الاستخدام التجاري"
                  : lang === "gr"
                  ? "Geschäftsanwendungsfälle"
                  : " Business Use Cases:"}
              </Typography>
              <ul>
                <li>
                  {lang === "fr"
                    ? `Surveillance en temps réel`
                    : lang === "sp"
                    ? "Monitoreo en tiempo real"
                    : lang === "ar"
                    ? "المراقبة في الوقت الحقيقي"
                    : lang === "gr"
                    ? "Echtzeitüberwachung"
                    : "Real-time Monitoring"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Précision des données`
                    : lang === "sp"
                    ? "Precisión de los datos"
                    : lang === "ar"
                    ? "دقة البيانات"
                    : lang === "gr"
                    ? "Datengenauigkeit"
                    : "Data Accuracy"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Respect de la réglementation`
                    : lang === "sp"
                    ? "Cumplimiento regulatorio"
                    : lang === "ar"
                    ? "الالتزام التنظيمي"
                    : lang === "gr"
                    ? "Einhaltung gesetzlicher Vorschriften"
                    : "Regulatory Adherence"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Piste d'audit`
                    : lang === "sp"
                    ? "Pista de auditoría"
                    : lang === "ar"
                    ? "سجل تدقيق"
                    : lang === "gr"
                    ? "Buchungskontrolle"
                    : "Audit trial"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Processus KYC efficaces`
                    : lang === "sp"
                    ? "Procesos KYC eficientes"
                    : lang === "ar"
                    ? "عمليات KYC الفعالة"
                    : lang === "gr"
                    ? "Effiziente KYC-Prozesse"
                    : "Efficient KYC Processes"}
                </li>
                <li>
                  {lang === "fr"
                    ? `Rapports en temps opportun`
                    : lang === "sp"
                    ? "Informes oportunos"
                    : lang === "ar"
                    ? "تقديم التقارير في الوقت المناسب"
                    : lang === "gr"
                    ? "Rechtzeitige Berichterstattung"
                    : "Timely Reporting"}
                </li>
              </ul>
            </div>
            {/* </TabPanel> */}
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ my: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ mx: "auto" }} gap={1}>
            <Grid container direction="row-reverse">
              <Grid item xs={12} sm={5}>
                <Image
                  src="/images/has/rectangle50.png"
                  alt="rectangle49"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "12px",
                    zindex: -1,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={5} justifySelf="center" alignSelf="center">
                <Card
                  raised
                  sx={{
                    borderRadius: "12px",
                    mr: { xs: "0%", md: "-20%" },
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <CardContent sx={{ pl: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: Colors.airaSecondary,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {lang === "fr"
                        ? `La Banque commerciale`
                        : lang === "sp"
                        ? "Banca comercial"
                        : lang === "ar"
                        ? "الخدمات المصرفية التجارية"
                        : lang === "gr"
                        ? "Werbetechnik"
                        : " Commercial Banking"}
                    </Typography>
                    <Typography fontSize={20} fontWeight={600}>
                      {lang === "fr"
                        ? `AIRA transforme les services bancaires commerciaux et améliore l'efficacité et la précision`
                        : lang === "sp"
                        ? "AIRA transforma la banca comercial y aumenta la eficiencia y la precisión"
                        : lang === "ar"
                        ? "AIRA يُحدث تحولًا في الخدمات المصرفية التجارية ويرفع الكفاءة والدقة"
                        : lang === "gr"
                        ? "AIRA transformiert das Geschäftsbankwesen und steigert Effizienz und Präzision"
                        : "AIRA Transforms Commercial Banking & Elevating Efficiency and Precision"}
                    </Typography>
                    <Typography sx={{ mt: 3 }} fontSize={16} fontWeight={400}>
                      {lang === "fr"
                        ? `L’automatisation AIRA apparaît comme une force de transformation. En intégrant de manière transparente une technologie de pointe, AIRA améliore l'efficacité opérationnelle, garantit la précision de la gestion des risques et rationalise les processus de conformité. De la surveillance en temps réel aux stratégies de conformité adaptatives, AIRA établit une nouvelle norme, offrant aux banques commerciales une solution agile et intelligente pour naviguer dans les complexités du paysage financier.`
                        : lang === "sp"
                        ? "La automatización de AIRA surge como una fuerza transformadora. Al integrar perfectamente tecnología de vanguardia, AIRA mejora la eficiencia operativa, garantiza la precisión en la gestión de riesgos y agiliza los procesos de cumplimiento. Desde monitoreo en tiempo real hasta estrategias de cumplimiento adaptables, AIRA establece un nuevo estándar, ofreciendo a los bancos comerciales una solución ágil e inteligente para navegar las complejidades del panorama financiero."
                        : lang === "ar"
                        ? "تبرز أتمتة AIRA كقوة تحويلية. من خلال دمج التكنولوجيا المتطورة بسلاسة، تعمل AIRA على تعزيز الكفاءة التشغيلية، وتضمن الدقة في إدارة المخاطر، وتبسيط عمليات الامتثال. بدءًا من المراقبة في الوقت الفعلي وحتى استراتيجيات الامتثال التكيفية، تضع AIRA معيارًا جديدًا، حيث تقدم للبنوك التجارية حلاً ذكيًا وذكيًا للتغلب على تعقيدات المشهد المالي."
                        : lang === "gr"
                        ? "AIRA-Automatisierung erweist sich als transformative Kraft. Durch die nahtlose Integration modernster Technologie steigert AIRA die betriebliche Effizienz, sorgt für Präzision im Risikomanagement und rationalisiert Compliance-Prozesse. Von der Echtzeitüberwachung bis hin zu adaptiven Compliance-Strategien setzt AIRA einen neuen Standard und bietet Geschäftsbanken eine agile und intelligente Lösung für die Bewältigung der Komplexität der Finanzlandschaft."
                        : "AIRA automation emerges as a transformative force. By seamlessly integrating cutting-edge technology, AIRA enhances operational efficiency, ensures precision in risk management, and streamlines compliance processes. From real-time monitoring to adaptive compliance strategies, AIRA sets a new standard, offering commercial banks an agile and intelligent solution for navigating the complexities of the financial landscape."}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container className="grid-class">
          <Grid item xs={12} md={5} className="grid-left-item">
            <Tabs
              orientation="vertical"
              value={newValue}
              onChange={handleChangeNew}
              aria-label="Vertical tabs example"
              // TabIndicatorProps={{
              //   style: {
              //     backgroundColor: '#6755DF',
              //     color: "fff",
              //     borderRadius: '8px',
              //     width: '100%',
              //     zindex: '-1 !important'
              //   }
              // }}
            >
              <Link href="#scroll1" className="scroll-link">
                <button className="scroll-btn">Liquidity & Treasury</button>
              </Link>
              <Link href="#scroll2" className="scroll-link">
                <button className="scroll-btn">Commercial Lending</button>
              </Link>
              <Link href="#scroll3" className="scroll-link">
                <button className="scroll-btn">Client Management</button>
              </Link>
              <Link href="#scroll4" className="scroll-link">
                <button className="scroll-btn">Risk & Compliance</button>
              </Link>
              {/* <Tab label="Liquidity & Treasury" {...a11yProps(0)} />
              <Tab label="Commercial Lending" {...a11yProps(1)} />
              <Tab label="Client Management" {...a11yProps(2)} />
              <Tab label="Risk & Compliance" {...a11yProps(3)} /> */}
            </Tabs>
          </Grid>
          <Grid item xs={12} md={7} className="grid-right-item">
            {/* <TabPanelNew value={newValue} index={0}> */}
            <Stack direction={"column"}>
              <div id="scroll1">
                <Typography
                  color={Colors.airaPrimary}
                  fontWeight={700}
                  fontSize={"24px"}
                >
                  {/* Liquidity & Treasury */}
                  {lang === "fr"
                    ? `Liquidité et trésorerie`
                    : lang === "sp"
                    ? "Liquidez y Tesorería"
                    : lang === "ar"
                    ? "السيولة والخزينة"
                    : lang === "gr"
                    ? "Liquidität und Treasury"
                    : "Liquidity and Treasury"}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {/* Trade risky and tedious for streamlined and secured */}
                  {lang === "fr"
                    ? `Prêt à révolutionner vos opérations bancaires commerciales ?`
                    : lang === "sp"
                    ? "¿Listo para revolucionar sus operaciones de banca comercial?"
                    : lang === "ar"
                    ? "هل أنت مستعد لإحداث ثورة في عملياتك المصرفية التجارية؟"
                    : lang === "gr"
                    ? "Sind Sie bereit, Ihren Geschäftsbankbetrieb zu revolutionieren?"
                    : "Ready to revolutionise your commercial banking operations?"}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={400}
                  fontSize={"16px"}
                >
                  {/* Automation helps banks streamline treasury operations by increasing productivity for front office traders, enabling better risk management, and improving customer experience. */}
                  {lang === "fr"
                    ? `AIRA Automation apparaît comme un catalyseur pour transformer les opérations de liquidité et de trésorerie. En intégrant de manière transparente des technologies avancées, AIRA améliore l'efficacité, la précision et la prise de décision stratégique, garantissant ainsi que les institutions financières gardent une longueur d'avance dans l'optimisation de la gestion des liquidités et de la trésorerie.`
                    : lang === "sp"
                    ? "AIRA Automation surge como un catalizador para transformar las operaciones de liquidez y tesorería. Al integrar perfectamente tecnologías avanzadas, AIRA eleva la eficiencia, la precisión y la toma de decisiones estratégicas, garantizando que las instituciones financieras se mantengan a la vanguardia en la optimización de la gestión de liquidez y tesorería."
                    : lang === "ar"
                    ? "تظهر أتمتة AIRA كمحفز لتحويل عمليات السيولة والخزينة. من خلال دمج التقنيات المتقدمة بسلاسة، تعمل AIRA على رفع الكفاءة والدقة واتخاذ القرارات الإستراتيجية، مما يضمن بقاء المؤسسات المالية في المقدمة في تحسين إدارة السيولة والخزانة."
                    : lang === "gr"
                    ? "AIRA Automation erweist sich als Katalysator für die Umgestaltung der Liquiditäts- und Treasury-Abläufe. Durch die nahtlose Integration fortschrittlicher Technologien steigert AIRA die Effizienz, Genauigkeit und strategische Entscheidungsfindung und stellt sicher, dass Finanzinstitute bei der Optimierung des Liquiditäts- und Treasury-Managements an der Spitze bleiben."
                    : "AIRA Automation emerges as a catalyst for transforming liquidity and treasury operations. By seamlessly integrating advanced technologies, AIRA elevates efficiency, accuracy, and strategic decision-making, ensuring that financial institutions stay ahead in optimising liquidity and treasury management."}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {lang === "fr"
                    ? `Cas d'utilisation commerciale`
                    : lang === "sp"
                    ? "Casos de uso empresarial"
                    : lang === "ar"
                    ? "حالات الاستخدام التجاري"
                    : lang === "gr"
                    ? "Geschäftsanwendungsfälle"
                    : "Business Use Cases:"}
                </Typography>
                <ul>
                  <li>
                    {lang === "fr"
                      ? `Optimisation de la position de trésorerie`
                      : lang === "sp"
                      ? "Optimización de la posición de efectivo"
                      : lang === "ar"
                      ? "تحسين الوضع النقدي"
                      : lang === "gr"
                      ? "Optimierung der Cash-Position"
                      : "Cash Position Optimization"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Gestion des risques`
                      : lang === "sp"
                      ? "Gestión de riesgos"
                      : lang === "ar"
                      ? "إدارة المخاطر"
                      : lang === "gr"
                      ? "Risikomanagement"
                      : "Risk Management"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Accélération des transactions`
                      : lang === "sp"
                      ? "Aceleración de transacciones"
                      : lang === "ar"
                      ? "تسريع المعاملات"
                      : lang === "gr"
                      ? "Transaktionsbeschleunigung"
                      : "Transaction Acceleration"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Prévision dynamique`
                      : lang === "sp"
                      ? "Previsión dinámica"
                      : lang === "ar"
                      ? "التنبؤ الديناميكي"
                      : lang === "gr"
                      ? "Dynamische Prognose"
                      : "Dynamic Forecasting"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Surveillance de la conformité`
                      : lang === "sp"
                      ? "Monitoreo de cumplimiento"
                      : lang === "ar"
                      ? "مراقبة الامتثال"
                      : lang === "gr"
                      ? "Compliance-Überwachung"
                      : "Compliance Monitoring"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Prise de décision basée sur l'analyse`
                      : lang === "sp"
                      ? "Toma de decisiones basada en análisis"
                      : lang === "ar"
                      ? "اتخاذ القرارات المبنية على التحليلات"
                      : lang === "gr"
                      ? "Analysebasierte Entscheidungsfindung"
                      : "Analytics-Driven Decision-Making"}
                  </li>
                </ul>
              </div>
            </Stack>

            {/* </TabPanelNew>
            <TabPanelNew value={newValue} index={1}> */}
            <Stack direction={"column"}>
              <div id="scroll2">
                <Typography
                  color={Colors.airaPrimary}
                  fontWeight={700}
                  fontSize={"24px"}
                >
                  {/* Liquidity & Treasury */}
                  {lang === "fr"
                    ? `Prêts commerciaux`
                    : lang === "sp"
                    ? "Prestamo comercial"
                    : lang === "ar"
                    ? "استفد من AIRA لمؤسستك اليوم"
                    : lang === "gr"
                    ? "Kommerzielle Kreditvergabe"
                    : "Commercial Lending "}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {/* Trade risky and tedious for streamlined and secured */}
                  {lang === "fr"
                    ? `Vous souhaitez transformer les prêts commerciaux avec l’automatisation AIRA ?`
                    : lang === "sp"
                    ? "¿Quiere transformar los préstamos comerciales con AIRA Automation?"
                    : lang === "ar"
                    ? "هل ترغب في تحويل الإقراض التجاري باستخدام أتمتة AIRA؟"
                    : lang === "gr"
                    ? "Möchten Sie die gewerbliche Kreditvergabe mit AIRA Automation transformieren?"
                    : "Want to Transform Commercial Lending with AIRA Automation ?"}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={400}
                  fontSize={"16px"}
                >
                  {/* Automation helps banks streamline treasury operations by increasing productivity for front office traders, enabling better risk management, and improving customer experience. */}
                  {lang === "fr"
                    ? `L’automatisation de l’AIRA apparaît comme un catalyseur de changement transformateur dans les opérations de prêt commercial. En intégrant de manière transparente des technologies avancées, AIRA optimise les processus, améliore la prise de décision et garantit une expérience rationalisée tant pour les institutions financières que pour leurs clients.`
                    : lang === "sp"
                    ? "La automatización de AIRA surge como un catalizador para un cambio transformador en las operaciones de préstamos comerciales. Al integrar perfectamente tecnologías avanzadas, AIRA optimiza los procesos, mejora la toma de decisiones y garantiza una experiencia optimizada tanto para las instituciones financieras como para sus clientes."
                    : lang === "ar"
                    ? "تظهر أتمتة AIRA كمحفز للتغيير التحويلي في عمليات الإقراض التجاري. من خلال دمج التقنيات المتقدمة بسلاسة، تعمل AIRA على تحسين العمليات وتعزيز عملية صنع القرار وتضمن تجربة مبسطة لكل من المؤسسات المالية وعملائها."
                    : lang === "gr"
                    ? "Die AIRA-Automatisierung erweist sich als Katalysator für transformative Veränderungen im kommerziellen Kreditgeschäft. Durch die nahtlose Integration fortschrittlicher Technologien optimiert AIRA Prozesse, verbessert die Entscheidungsfindung und sorgt für ein optimiertes Erlebnis sowohl für Finanzinstitute als auch für ihre Kunden."
                    : "AIRA automation emerges as a catalyst for transformative change in commercial lending operations. By seamlessly integrating advanced technologies, AIRA optimises processes, enhances decision-making, and ensures a streamlined experience for both financial institutions and their clients."}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {lang === "fr"
                    ? `Cas d'utilisation commerciale`
                    : lang === "sp"
                    ? "Casos de uso empresarial"
                    : lang === "ar"
                    ? "حالات الاستخدام التجاري"
                    : lang === "gr"
                    ? "Geschäftsanwendungsfälle"
                    : "Business Use Cases:"}
                </Typography>
                <ul>
                  <li>
                    {lang === "fr"
                      ? `Création de prêt`
                      : lang === "sp"
                      ? "Originación de préstamos"
                      : lang === "ar"
                      ? "نشأة القرض"
                      : lang === "gr"
                      ? "Kreditvergabe"
                      : "Loan Origination"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Analyse de crédit.`
                      : lang === "sp"
                      ? "Analisis de CREDITO."
                      : lang === "ar"
                      ? "حليل الائتمان"
                      : lang === "gr"
                      ? "Kreditanalyse."
                      : "Credit Analysis."}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Gestion de documents`
                      : lang === "sp"
                      ? "Gestión de documentos"
                      : lang === "ar"
                      ? "استفد من AIRA لمؤسستك اليوم"
                      : lang === "gr"
                      ? "Dokumenten-Management"
                      : "Document Management"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Processus de financement`
                      : lang === "sp"
                      ? "Procesos de financiación"
                      : lang === "ar"
                      ? "عمليات التمويل"
                      : lang === "gr"
                      ? "Förderprozesse"
                      : "Funding Processes"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Gestion de la relation client`
                      : lang === "sp"
                      ? "Gestión de relaciones con el cliente"
                      : lang === "ar"
                      ? "إدارة علاقات العملاء"
                      : lang === "gr"
                      ? "Kundenbeziehungsmanagement"
                      : "Customer Relationship Management"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Surveillance de la conformité`
                      : lang === "sp"
                      ? "Monitoreo de cumplimiento"
                      : lang === "ar"
                      ? "مراقبة الامتثال"
                      : lang === "gr"
                      ? "Compliance-Überwachung"
                      : "Compliance Monitoring"}
                  </li>
                </ul>
              </div>
            </Stack>
            {/* </TabPanelNew>
            <TabPanelNew value={newValue} index={2}> */}
            <Stack direction={"column"}>
              <div id="scroll3">
                <Typography
                  color={Colors.airaPrimary}
                  fontWeight={700}
                  fontSize={"24px"}
                >
                  {/* Liquidity & Treasury */}
                  {lang === "fr"
                    ? `La gestion des clients`
                    : lang === "sp"
                    ? "Gestión de clientes"
                    : lang === "ar"
                    ? "إدارة العملاء"
                    : lang === "gr"
                    ? "Client-Management"
                    : "Client Management"}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {/* Trade risky and tedious for streamlined and secured */}
                  {lang === "fr"
                    ? `Comment AIRA améliore la gestion des clients grâce à une intégration transparente ?`
                    : lang === "sp"
                    ? "¿Cómo AIRA mejora la gestión de clientes con una incorporación perfecta?"
                    : lang === "ar"
                    ? "كيف تعمل AIRA على رفع مستوى إدارة العملاء من خلال الإعداد السلس؟"
                    : lang === "gr"
                    ? "Wie AIRA das Kundenmanagement durch nahtloses Onboarding verbessert?"
                    : "How AIRA elevates client management with seamless onboarding ?"}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={400}
                  fontSize={"16px"}
                >
                  {/* Automation helps banks streamline treasury operations by increasing productivity for front office traders, enabling better risk management, and improving customer experience. */}
                  {lang === "fr"
                    ? `AIRA Automation apparaît comme un catalyseur d’efficacité et d’excellence dans la gestion des clients. En intégrant de manière transparente des technologies avancées, AIRA optimise les interactions avec les clients, rationalise les processus et améliore la satisfaction globale..`
                    : lang === "sp"
                    ? "AIRA Automation surge como catalizador de la eficiencia y la excelencia en la gestión de clientes. Al integrar perfectamente tecnologías avanzadas, AIRA optimiza las interacciones con los clientes, agiliza los procesos y mejora la satisfacción general.."
                    : lang === "ar"
                    ? "تظهر أتمتة AIRA كمحفز للكفاءة والتميز في إدارة العملاء. من خلال دمج التقنيات المتقدمة بسلاسة، تعمل AIRA على تحسين تفاعلات العملاء وتبسيط العمليات وتعزيز الرضا العام."
                    : lang === "gr"
                    ? "AIRA Automation erweist sich als Katalysator für Effizienz und Exzellenz im Kundenmanagement. Durch die nahtlose Integration fortschrittlicher Technologien optimiert AIRA die Kundeninteraktionen, rationalisiert Prozesse und steigert die Gesamtzufriedenheit."
                    : "AIRA Automation emerges as a catalyst for efficiency and excellence in client management. By seamlessly integrating advanced technologies, AIRA optimises client interactions, streamlines processes, and enhances overall satisfaction."}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {lang === "fr"
                    ? `Cas d'utilisation commerciale`
                    : lang === "sp"
                    ? "Casos de uso empresarial"
                    : lang === "ar"
                    ? "حالات الاستخدام التجاري"
                    : lang === "gr"
                    ? "Geschäftsanwendungsfälle"
                    : "Business Use Cases:"}
                </Typography>
                <ul>
                  <li>
                    {lang === "fr"
                      ? `Intégration transparente`
                      : lang === "sp"
                      ? "Incorporación perfecta"
                      : lang === "ar"
                      ? "تأهيل سلس"
                      : lang === "gr"
                      ? "Nahtloses Onboarding"
                      : "Seamless Onboarding"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Services personnalisés`
                      : lang === "sp"
                      ? "Servicios personalizados"
                      : lang === "ar"
                      ? "خدمات شخصية"
                      : lang === "gr"
                      ? "Personalisierte Dienstleistungen"
                      : "Personalized Services"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Mises à jour en temps réel`
                      : lang === "sp"
                      ? "Actualizaciones en tiempo real"
                      : lang === "ar"
                      ? "تحديثات في الوقت الحقيقي"
                      : lang === "gr"
                      ? "Echtzeit-Updates"
                      : "Real-time Updates"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Communication efficace`
                      : lang === "sp"
                      ? "Comunicación eficiente"
                      : lang === "ar"
                      ? "التواصل الفعال"
                      : lang === "gr"
                      ? "Effiziente Kommunikation"
                      : "Efficient Communication"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Gestion des risques`
                      : lang === "sp"
                      ? "Gestión de riesgos"
                      : lang === "ar"
                      ? "إدارة المخاطر"
                      : lang === "gr"
                      ? "Risikomanagement"
                      : "Risk Management"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Sécurité des données`
                      : lang === "sp"
                      ? "Seguridad de datos"
                      : lang === "ar"
                      ? "أمن البيانات"
                      : lang === "gr"
                      ? "Datensicherheit"
                      : "Data Security"}
                  </li>
                </ul>
              </div>
            </Stack>
            {/* </TabPanelNew>
            <TabPanelNew value={newValue} index={3}> */}

            <Stack direction={"column"}>
              <div id="scroll4">
                <Typography
                  color={Colors.airaPrimary}
                  fontWeight={700}
                  fontSize={"24px"}
                >
                  {/* Liquidity & Treasury */}
                  {lang === "fr"
                    ? `Risque et conformité`
                    : lang === "sp"
                    ? "Riesgo y cumplimiento"
                    : lang === "ar"
                    ? "المخاطر والامتثال"
                    : lang === "gr"
                    ? "Risiko und Compliance"
                    : "Risk and Compliance "}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {/* Trade risky and tedious for streamlined and secured */}
                  {lang === "fr"
                    ? `Découvrez comment débloquer l'excellence en matière de risque et de conformité avec AIRA.`
                    : lang === "sp"
                    ? "Aprenda cómo desbloquear la excelencia en riesgos y cumplimiento con AIRA."
                    : lang === "ar"
                    ? "تعرف على كيفية إطلاق العنان للتميز في المخاطر والامتثال باستخدام AIRA."
                    : lang === "gr"
                    ? "Erfahren Sie, wie Sie mit AIRA Risiko- und Compliance-Exzellenz erzielen."
                    : "Learn How to Unlock Risk and Compliance Excellence With AIRA."}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={400}
                  fontSize={"16px"}
                >
                  {/* Automation helps banks streamline treasury operations by increasing productivity for front office traders, enabling better risk management, and improving customer experience. */}
                  {lang === "fr"
                    ? `L'automatisation d'AIRA apparaît comme un acteur clé dans la transformation de la gestion des risques et de la conformité pour les banques commerciales. En intégrant de manière transparente des technologies avancées, AIRA garantit précision, rapidité et adaptabilité dans le paysage complexe des exigences réglementaires.`
                    : lang === "sp"
                    ? "La automatización de AIRA emerge como un actor clave en la transformación de la gestión de riesgos y cumplimiento para la banca comercial. Al integrar perfectamente tecnologías avanzadas, AIRA garantiza precisión, velocidad y adaptabilidad al navegar por el complejo panorama de requisitos regulatorios."
                    : lang === "ar"
                    ? "تظهر أتمتة AIRA كلاعب رئيسي في تحويل إدارة المخاطر والامتثال للخدمات المصرفية التجارية. ومن خلال دمج التقنيات المتقدمة بسلاسة، تضمن AIRA الدقة والسرعة والقدرة على التكيف في التنقل في المشهد المعقد للمتطلبات التنظيمية."
                    : lang === "gr"
                    ? "Die AIRA-Automatisierung erweist sich als wichtiger Akteur bei der Umgestaltung des Risiko- und Compliance-Managements für das Geschäftsbankwesen. Durch die nahtlose Integration fortschrittlicher Technologien gewährleistet AIRA Präzision, Geschwindigkeit und Anpassungsfähigkeit bei der Navigation durch die komplexe Landschaft regulatorischer Anforderungen."
                    : "AIRA automation emerges as a key player in transforming risk and compliance management for commercial banking. By seamlessly integrating advanced technologies, AIRA ensures precision, speed, and adaptability in navigating the complex landscape of regulatory requirements."}
                </Typography>
                <Typography
                  sx={{ pt: 2 }}
                  color={Colors.black}
                  fontWeight={600}
                  fontSize={"20px"}
                >
                  {lang === "fr"
                    ? `Cas d'utilisation commerciale`
                    : lang === "sp"
                    ? "Casos de uso empresarial"
                    : lang === "ar"
                    ? "حالات الاستخدام التجاري"
                    : lang === "gr"
                    ? "Geschäftsanwendungsfälle"
                    : "Business Use Cases:"}
                </Typography>
                <ul>
                  <li>
                    {lang === "fr"
                      ? `Surveillance en temps réel`
                      : lang === "sp"
                      ? "Monitoreo en tiempo real"
                      : lang === "ar"
                      ? "المراقبة في الوقت الحقيقي"
                      : lang === "gr"
                      ? "Echtzeitüberwachung"
                      : "Real-time Monitoring"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Stratégies de conformité adaptatives`
                      : lang === "sp"
                      ? "Estrategias de cumplimiento adaptativo"
                      : lang === "ar"
                      ? "استراتيجيات الامتثال التكيفية"
                      : lang === "gr"
                      ? "Adaptive Compliance-Strategien"
                      : "Adaptive Compliance Strategies"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Validation et exactitude des données`
                      : lang === "sp"
                      ? "Validación y precisión de datos"
                      : lang === "ar"
                      ? "التحقق من صحة البيانات ودقتها"
                      : lang === "gr"
                      ? "Datenvalidierung und Genauigkeit"
                      : "Data Validation and Accuracy"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Détection et prévention de la fraude`
                      : lang === "sp"
                      ? "Detección y prevención de fraude"
                      : lang === "ar"
                      ? "كشف الاحتيال ومنعه"
                      : lang === "gr"
                      ? "Betrugserkennung und -prävention"
                      : "Fraud Detection and Prevention"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Automatisation des rapports réglementaires`
                      : lang === "sp"
                      ? "Automatización de informes regulatorios"
                      : lang === "ar"
                      ? "أتمتة التقارير التنظيمية"
                      : lang === "gr"
                      ? "Automatisierung der regulatorischen Berichterstattung"
                      : "Regulatory Reporting Automation"}
                  </li>
                  <li>
                    {lang === "fr"
                      ? `Automatisation de la piste d'audit`
                      : lang === "sp"
                      ? "Automatización del seguimiento de auditoría"
                      : lang === "ar"
                      ? "أتمتة مسار التدقيق"
                      : lang === "gr"
                      ? "Audit-Trail-Automatisierung"
                      : "Audit Trail Automation"}
                  </li>
                </ul>
              </div>
            </Stack>
            {/* </TabPanelNew> */}
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ py: 2 }}></Box>

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
      <br/>

      <Box
        sx={{
          position: "absolute",
          top: 100,
          display: { xs: "none", md: "block" },
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
};

export default Index;
