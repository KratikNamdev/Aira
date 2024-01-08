import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
  Button,
  Container,
} from "@mui/material";
import Image from "next/image";
import AIRAMonoLinesLeft from "@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents";
import Colors from "@/common/Colorscomponents";
import { IoDocumentTextOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [lang, setLang] = useState("en");
  useEffect(() => {
    setLang(localStorage?.getItem("lang"));
  }, []);

  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 9 }}>
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
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.2,
                    color: "#200E32",
                    // marginLeft: "100px",
                  }}
                >
                  <span style={{ color: Colors.airaSecondary }}>
                    Testimonials
                  </span>
                </Typography>
                <Typography fontSize={18} sx={{ pr: 10, mt: 2 }}>
                  We take great pride in the satisfaction of our customers, and
                  this page is dedicated to showcasing their experiences and
                  feedback. We believe that theres no better way to understand
                  the value of our products/services than through the words of
                  those who have already benefited from them
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`/images/testimonials/image.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Grid>
      </Grid>

      <Box sx={{ my: 15 }}>
        <Container maxWidth="lg">
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={7}>
              <Slider {...settings}>
                <Card>
                  <CardContent>
                    <Stack direction={"column"} alignItems={"center"}>
                      <Image
                        src="/images/james.jpg"
                        style={{ borderRadius: "50%" }}
                        alt="testimonial-user"
                        width={80}
                        height={80}
                      />
                      <Typography
                        sx={{ py: 1.5 }}
                        fontSize={"32px"}
                        color={"#6755DF"}
                        fontWeight={700}
                      >
                        {/* Jeanne Dern */}
                        {lang === "fr"
                          ? `Catherine Davis`
                          : lang === "sp"
                          ? "catherine davis"
                          : lang === "ar"
                          ? "كاثرين ديفيس"
                          : lang === "gr"
                          ? "Catherine Davis"
                          : "Catherin Davis"}
                      </Typography>
                      <Typography
                        sx={{ pb: 1 }}
                        fontSize={"24px"}
                        color={"#FFAF00"}
                        fontWeight={500}
                      >
                        {/* ABC Company */}
                        {lang === "fr"
                          ? `Industrie financière`
                          : lang === "sp"
                          ? "Industria financiera"
                          : lang === "ar"
                          ? "صناعة التمويل"
                          : lang === "gr"
                          ? "Finanzbranche"
                          : "Finance Industry"}
                      </Typography>
                    </Stack>
                    <Typography textAlign={"center"}>
                      {/* “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur” */}
                      {lang === "fr"
                        ? `AIRA a vraiment changénotre affaire d'argent. Sa technologie automatisée supérieure a entraîné des réductions significatives des coûts d'exploitation et des précisions élevées. Il s'intègre parfaitement dans nos systèmes existants et constitue une excellente base sur laquelle bâtir d'autres nouveaux développements financiers qui pourraient survenir. AIRA constitue véritablement une étape révolutionnaire pour le secteur financier.`
                        : lang === "sp"
                        ? "AIRA realmente ha cambiadonuestro negocio de dinero. Su tecnología automatizada superior ha resultado en reducciones significativas en los costos operativos y altas precisiones. Encaja perfectamente en nuestros sistemas existentes y proporciona una base excelente sobre la cual aprovechar otros nuevos desarrollos financieros que puedan ocurrir. AIRA es verdaderamente un hito revolucionario para el sector financiero."
                        : lang === "ar"
                        ? "لقد تغيرت AIRA حقًاملكنا أعمال المال. وقد أدت تقنيتها الآلية المتفوقة إلى تخفيضات كبيرة في تكاليف التشغيل ودقة عالية. وهو يتناسب تمامًا مع أنظمتنا الحالية ويوفر أساسًا ممتازًا يمكن البناء عليه على التطورات المالية الجديدة الأخرى التي قد تحدث. يعد AIRA حقًا علامة فارقة ثورية للقطاع المالي."
                        : lang === "gr"
                        ? "AIRA hat sich wirklich verändertunser Geldgeschäft. Seine überlegene automatisierte Technologie hat zu einer erheblichen Reduzierung der Betriebskosten und einer hohen Genauigkeit geführt. Es fügt sich perfekt in unsere bestehenden Systeme ein und bietet eine hervorragende Grundlage, auf der wir auf eventuell auftretende neue Finanzentwicklungen aufbauen können. AIRA ist wirklich ein revolutionärer Meilenstein für den Finanzsektor."
                        : "The introduction of AIRA has significantly transformed our financial operations. Its superior automated technology has resulted in significant reductions in operating cost and high accuracies. It fits perfectly in our existing systems providing an excellent foundation upon which to build on other new financial developments that may occur. AIRA truly is a revolutionary milestone for the financial sector."}
                    </Typography>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Stack direction={"column"} alignItems={"center"}>
                      <Image
                        src="/images/ellipse47.png"
                        alt="testimonial-user"
                        width={80}
                        height={80}
                      />
                      <Typography
                        sx={{ py: 1.5 }}
                        fontSize={"32px"}
                        color={"#6755DF"}
                        fontWeight={700}
                      >
                        {/* Jeanne Dern */}
                        {lang === "fr"
                          ? `Laura López`
                          : lang === "sp"
                          ? "Laura Lopez"
                          : lang === "ar"
                          ? "لورا لوبيز"
                          : lang === "gr"
                          ? "Laura Lopez"
                          : "Laura Lopez"}
                      </Typography>
                      <Typography
                        sx={{ pb: 1 }}
                        fontSize={"24px"}
                        color={"#FFAF00"}
                        fontWeight={500}
                      >
                        {/* ABC Company */}
                        {lang === "fr"
                          ? `Télécommunications`
                          : lang === "sp"
                          ? "Telecomunicaciones"
                          : lang === "ar"
                          ? "الاتصالات"
                          : lang === "gr"
                          ? "Telekommunikation"
                          : "Telecommunications"}
                      </Typography>
                    </Stack>
                    <Typography textAlign={"center"}>
                      {/* “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur” */}
                      {lang === "fr"
                        ? `L'adoption d'AIRA comme dans la communication a été une décision délibérée. L'intégration du potentiel d'automatisation intelligente et d'apprentissage automatique a rendu nos flux de travail vraiment exceptionnels en termes d'efficacité et de précision. L'industrie des télécommunications est dynamique et dynamique, avec de nombreux changements dont l'AIRA a été utile pour favoriser l'innovation et l'excellence.`
                        : lang === "sp"
                        ? "La adopción de AIRA como herramienta de comunicación ha sido una cuestión deliberada. La incorporación del potencial de automatización inteligente y aprendizaje automático ha hecho que nuestros flujos de trabajo sean realmente sobresalientes en eficiencia y precisión. La industria de las telecomunicaciones es vibrante y dinámica con muchos cambios, y AIRA ha sido útil para fomentar la innovación y la excelencia."
                        : lang === "ar"
                        ? "لقد كان اعتماد AIRA كما هو الحال في الاتصالات أمرًا متعمدًا. إن دمج الأتمتة الذكية وإمكانات التعلم الآلي جعل سير العمل لدينا متميزًا حقًا من حيث الكفاءة والدقة. صناعة الاتصالات نابضة بالحياة وديناميكية مع الكثير من التغيير الذي كان AIRA مفيدًا في تعزيز الابتكارات والتميز."
                        : lang === "gr"
                        ? "Die Einführung von AIRA in der Kommunikation war eine bewusste Entscheidung. Durch die Einbindung des Potenzials intelligenter Automatisierung und maschinellen Lernens sind unsere Arbeitsabläufe hinsichtlich Effizienz und Präzision wirklich hervorragend geworden. Die Telekommunikationsbranche ist lebendig und dynamisch und weist viele Veränderungen auf. AIRA hat dabei geholfen, Innovationen und Exzellenz zu fördern."
                        : "Choosing AIRA for communication has been a strategic decision. The integration of smart automation and machine learning capabilities has significantly enhanced the efficiency and precision of our workflows. In the dynamic and vibrant telecom industry, AIRA has played a crucial role in fostering innovation and excellence."}
                    </Typography>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Stack direction={"column"} alignItems={"center"}>
                      <Image
                        style={{ borderRadius: "50%" }}
                        src="/images/1.jpeg"
                        alt="testimonial-user"
                        width={80}
                        height={80}
                      />
                      <Typography
                        sx={{ py: 1.5 }}
                        fontSize={"32px"}
                        color={"#6755DF"}
                        fontWeight={700}
                      >
                        {/* Jeanne Dern */}
                        {lang === "fr"
                          ? `James García`
                          : lang === "sp"
                          ? "James Garcia"
                          : lang === "ar"
                          ? "جيمس جارسيا"
                          : lang === "gr"
                          ? "James Garcia"
                          : "James Garcia"}
                      </Typography>
                      <Typography
                        sx={{ pb: 1 }}
                        fontSize={"24px"}
                        color={"#FFAF00"}
                        fontWeight={500}
                      >
                        {/* ABC Company */}
                        {lang === "fr"
                          ? `Textile`
                          : lang === "sp"
                          ? "Textil"
                          : lang === "ar"
                          ? "الغزل والنسيج"
                          : lang === "gr"
                          ? "Textil"
                          : "Textile"}
                      </Typography>
                    </Stack>
                    <Typography textAlign={"center"}>
                      {/* “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur” */}
                      {lang === "fr"
                        ? `L'introduction d'AIRA dans nos pratiques textiles a transformé nos vies. En combinant l'intelligence artificielle avec des processus robotiques automatisés, nous avons amélioré notre efficacité et affiné nos processus, ce qui nous a donné un avantage unique sur le marché. Grâce à sa stratégie révolutionnaire, AIRA a redéfini l'industrie et a remporté des succès inattendus. Sans aucun doute, il s’agit d’un produit révolutionnaire pour l’industrie textile !`
                        : lang === "sp"
                        ? "La introducción de AIRA en nuestras prácticas textiles transformó nuestras vidas. Al combinar la inteligencia artificial con procesos robóticos automatizados, mejoramos nuestra efectividad y refinamos nuestros procesos, lo que nos ha brindado una ventaja única sobre el mercado. A través de su estrategia innovadora, AIRA ha redefinido la industria y ha logrado éxitos inesperados. ¡Sin duda, se trata de un producto revolucionario para la industria textil!"
                        : lang === "ar"
                        ? "أدى إدخال AIRA في ممارسات المنسوجات لدينا إلى تغيير حياتنا. ومن خلال الجمع بين الذكاء الاصطناعي والعمليات الآلية الآلية، قمنا بتحسين فعاليتنا وتحسين عملياتنا مما زودنا بميزة فريدة في السوق. ومن خلال استراتيجيتها الرائدة، أعادت AIRA تعريف الصناعة وحققت نجاحات غير متوقعة. لا شك أن هذا منتج ثوري في صناعة النسيج!"
                        : lang === "gr"
                        ? "Die Einführung von AIRA in unseren Textilbetrieben hat unser Leben verändert. Durch die Kombination künstlicher Intelligenz mit automatisierten Roboterprozessen haben wir unsere Effektivität verbessert und unsere Prozesse verfeinert, was uns einen einzigartigen Vorsprung gegenüber dem Markt verschafft hat. Durch seine bahnbrechende Strategie hat AIRA die Branche neu definiert und unerwartete Erfolge hervorgebracht. Ohne Zweifel ist dies ein revolutionäres Produkt für die Textilindustrie!"
                        : "The introduction of AIRA in our textile practices transformed our lives. By combining artificial intelligence with robotic processes automated we improved our effectiveness and refined our processes which have provided us with a unique edge over the market. Through its groundbreaking strategy, AIRA has redefined the industry and brought forth unexpected successes. Without doubt, this is a revolutionary product for the textile industry!"}
                    </Typography>
                  </CardContent>
                </Card>
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* <Box sx={{ my: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Stack direction={'column'} sx={{ backgroundColor: '#F0F0F0' }}>
                <Image
                  src="/images/rectangle43.png"
                  alt="testimonial"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
                <Stack direction={'column'} sx={{ padding: 3 }}>
                  <IoDocumentTextOutline size={25} color='#6755DF' />
                  <Typography color={'#6755DF'} sx={{ py: 2 }} fontSize={'20px'}>
                    A Complete Guide to AIRA—made in collaboration with ERP Today
                  </Typography>
                  <Typography>
                    Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction={'column'} sx={{ backgroundColor: '#F0F0F0' }}>
                <Image
                  src="/images/rectangle43.png"
                  alt="testimonial"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <Stack direction={'column'} sx={{ padding: 3 }}>
                  <IoDocumentTextOutline size={25} color='#6755DF' />
                  <Typography color={'#6755DF'} sx={{ py: 2 }} fontSize={'20px'}>
                    A Complete Guide to AIRA—made in collaboration with ERP Today
                  </Typography>
                  <Typography>
                    Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction={'column'} sx={{ backgroundColor: '#F0F0F0' }}>
                <Image
                  src="/images/rectangle43.png"
                  alt="testimonial"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <Stack direction={'column'} sx={{ padding: 3 }}>
                  <IoDocumentTextOutline size={25} color='#6755DF' />
                  <Typography color={'#6755DF'} sx={{ py: 2 }} fontSize={'20px'}>
                    A Complete Guide to AIRA—made in collaboration with ERP Today
                  </Typography>
                  <Typography>
                    Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to AIRA” to see how our products are enabli...
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

      <Box
        style={{
          position: "absolute",
          top: 50,
          zIndex: -1,
        }}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <AIRAMonoLinesLeft />
      </Box>
    </Box>
  );
};

export default Index;
