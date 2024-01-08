import React, { useState, useEffect } from 'react';
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
  Container
} from "@mui/material";
import Image from 'next/image';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';

const DISCOVER_ITEMS = [
  {
    title: "Unification",
    desc: "AIRA People et AIRA Platforms fonctionnent toutes deux selon le principe de l’unification. La capacité de rassembler des éléments disparates et divers au service d’un même objectif,Excellence. ",
    icon: "goal.png",
  },
  {
    title: "Excellence",
    desc: "AIRA croit aux efforts et à l’excellence itérative. Chez AIRA, nous croyons que tout le monde et toute chose a le potentiel d'être excellent, sans barre. Dans cette quête, nous utilisons notre compétence la plus importante,La créativité.",
    icon: "creativity.png",
  },
  {
    title: "La créativité",
    desc: "AIRA est composée de personnes qui ont et mettent en œuvre des perspectives uniques. Ainsi, nous relevons également ensemble les défis et les obstacles uniques de notre quotidien. Et nous réussissons. Parce que nous faisons tout avecIntégrité",
    icon: "integrity.png",
  },
  {
    title: "Intégrité",
    desc: "La responsabilité est au cœur de tout ce que nous faisons. Les engagements, quels qu’ils soient, sont sacrés et nous nous efforçons rigoureusement de les remplir, au mieux de nos capacités. Cette confiance est ce qui fait de nous ce que nous sommes.AIRA",
    icon: "communication.png",
  },
];

const DISCOVER_ITEMS1 = [
  {
    title: "Unificación",
    desc: "AIRA People y AIRA Platforms se basan en el principio de unificación. La capacidad de reunir elementos dispares y diversos al servicio de un objetivo,Excelencia. ",
    icon: "goal.png",
  },
  {
    title: "Excelencia",
    desc: "AIRA cree en el esfuerzo y la excelencia iterativa. En AIRA creemos que todo y todos tienen el potencial de ser excelentes, sin barreras. En esa búsqueda, utilizamos nuestra habilidad más importante,Creatividad.",
    icon: "creativity.png",
  },
  {
    title: "Creatividad",
    desc: "AIRA está formada por personas que tienen e implementan perspectivas únicas. Y así, también abordamos juntos desafíos y obstáculos únicos en nuestro día a día. Y lo logramos. Porque lo hacemos todo conIntegridad",
    icon: "integrity.png",
  },
  {
    title: "Integridad",
    desc: "La rendición de cuentas está en el centro de todo lo que hacemos. Los compromisos, de cualquier tipo, son sagrados y nos esforzamos rigurosamente por cumplirlos, lo mejor que podamos. Esa confianza es lo que nos hace quienes somos.AIRE",
    icon: "communication.png",
  },
];

const DISCOVER_ITEMS2 = [
  {
    title: "توحيد",
    desc: "يعمل كل من أفراد AIRA ومنصات AIRA على مبدأ التوحيد. القدرة على جمع العناصر المتباينة والمتنوعة لخدمة هدف واحد وهو التميز.",
    icon: "goal.png",
  },
  {
    title: "تفوق",
    desc: "تؤمن AIRA بالجهود والتميز المتكرر. في AIRA، نحن نؤمن بأن كل شخص وكل شيء لديه القدرة على أن يكون ممتازًا، بلا أي عوائق. وفي هذا المسعى، نستخدم أهم مهاراتنا، وهي الإبداع.",
    icon: "creativity.png",
  },
  {
    title: "إِبداع",
    desc: "يتكون AIRA من الأشخاص الذين لديهم وجهات نظر فريدة وينفذونها. وبالتالي، فإننا نتعامل معًا أيضًا مع التحديات والحواجز الفريدة التي نواجهها يومًا بعد يوم. وننجح. لأننا نفعل كل ذلك بنزاهة",
    icon: "integrity.png",
  },
  {
    title: "نزاهة",
    desc: "المساءلة تكمن في قلب كل ما نقوم به. إن الالتزامات، أيًا كان نوعها، مقدسة ونحن نسعى جاهدين للوفاء بها، بأفضل ما في وسعنا. هذه الثقة هي ما يجعلنا ما نحن عليه. إيرا",
    icon: "communication.png",
  },
];

const DISCOVER_ITEMS3 = [
  {
    title: "Unification",
    desc: "AIRA People and AIRA Platforms both perform on the tenet of unification. The ability of bringing together disparate and diverse elements in service of one goal, Excellence.",
    icon: "goal.png",
  },
  {
    title: "Excellence",
    desc: "AIRA believes in efforts and iterative excellence. At AIRA, we believe that everyone and everything has the potential of being excellent, no bar. In that pursuit, we utilise our most important skill, Creativity.",
    icon: "creativity.png",
  },
  {
    title: "Creativity",
    desc: "AIRA is made of people who have and implement unique perspectives. And thus, we also tackle unique challenges and roadblocks in our day to day, together. And we succeed. Because we do it all with Integrity.",
    icon: "integrity.png",
  },
  {
    title: "Integrity",
    desc: "Accountability lies at the heart of everything we do. Commitments, of any kind, are sacred and we rigorously strive to fulfil them, to the best of our ability. That trust is what makes us who we are. AIRA",
    icon: "communication.png",
  },
];

const DISCOVER_ITEMS4 = [
  {
    title: "Unification",
    desc: ` AIRA People and
    AIRA Platforms
    both perform on
    the tenet of
    unification. The
    ability of bringing
    together
    disparate and
    diverse elements
    in service of one goal, Excellence.
    `,
    icon: "goal.png",
  },
  {
    title: "Excellence",
    desc: `AIRA believes in
    efforts and
    iterative
    excellence. At
    AIRA, we believe
    that everyone
    and everything
    has the potential
    of being
    excellent, no bar.
    In that pursuit,
    we utilise our
    most important
    skill, Creativity.`,
    icon: "creativity.png",
  },
  {
    title: "Creativity",
    desc: `AIRA is made of
    people who have
    and implement
    unique
    perspectives. And
    thus, we also
    tackle unique
    challenges and
    roadblocks in our
    day to day,
    together. And we
    succeed. Because
    we do it all with
    Integrity
    `,
    icon: "integrity.png",
  },
  {
    title: "Integrity",
    desc: `Accountability
    lies at the heart of
    everything we do.
    Commitments, of
    any kind, are
    sacred and we
    rigorously strive
    to fulfil them, to
    the best of our
    ability. That trust
    is what makes us
    who we are.`,
    icon: "communication.png",
  },
];

// ============team=============

const OUR_TEAM = [
  { id: "1", name: "Aziz", position: "Chairman", image: "aziz.png" },
  {
    id: "1",
    name: "Shashwat",
    position: "Managing Director",
    image: "shashwat.png",
  },
  {
    id: "1",
    name: "Franck",
    position: "Chief Financial Officer",
    image: "franck.png",
  },
  {
    id: "1",
    name: "Kubra",
    position: "Head of Administration",
    image: "kubra.png",
  },
  {
    id: "1",
    name: "Thomas",
    position: "Head of Sales and Marketing",
    image: "thomas.png",
  },
];

const OUR_TEAM1 = [
  { id: "1", name: "Aziz", position: "Chairman", image: "aziz.png" },
  {
    id: "1",
    name: "Shashwat",
    position: "Managing Director",
    image: "shashwat.png",
  },
  {
    id: "1",
    name: "Franck",
    position: "Chief Financial Officer",
    image: "franck.png",
  },
  {
    id: "1",
    name: "Kubra",
    position: "Head of Administration",
    image: "kubra.png",
  },
  {
    id: "1",
    name: "Thomas",
    position: "Head of Sales and Marketing",
    image: "thomas.png",
  },
];

const OUR_TEAM2 = [
  { id: "1", name: "Aziz", position: "Chairman", image: "aziz.png" },
  {
    id: "1",
    name: "Shashwat",
    position: "Managing Director",
    image: "shashwat.png",
  },
  {
    id: "1",
    name: "Franck",
    position: "Chief Financial Officer",
    image: "franck.png",
  },
  {
    id: "1",
    name: "Kubra",
    position: "Head of Administration",
    image: "kubra.png",
  },
  {
    id: "1",
    name: "Thomas",
    position: "Head of Sales and Marketing",
    image: "thomas.png",
  },
];

const OUR_TEAM3 = [
  { id: "1", name: "Aziz", position: "Chairman", image: "aziz.png" },
  {
    id: "1",
    name: "Shashwat",
    position: "Managing Director",
    image: "shashwat.png",
  },
  {
    id: "1",
    name: "Franck",
    position: "Chief Financial Officer",
    image: "franck.png",
  },
  {
    id: "1",
    name: "Kubra",
    position: "Head of Administration",
    image: "kubra.png",
  },
  {
    id: "1",
    name: "Thomas",
    position: "Head of Sales and Marketing",
    image: "thomas.png",
  },
];

const OUR_TEAM4 = [
  { id: "1", name: "Aziz", position: "Chairman", image: "aziz.png" },
  {
    id: "1",
    name: "Shashwat",
    position: "Managing Director",
    image: "shashwat.png",
  },
  {
    id: "1",
    name: "Franck",
    position: "Chief Financial Officer",
    image: "franck.png",
  },
  {
    id: "1",
    name: "Kubra",
    position: "Head of Administration",
    image: "kubra.png",
  },
  {
    id: "1",
    name: "Thomas",
    position: "Head of Sales and Marketing",
    image: "thomas.png",
  },
];


// ==============quick facts===============
const QUICKFACTS = [
  { id: 1, title: "Nous accordons la priorité à votre réussite comme notre objectif final.", icon: "customer.png" },
  {
    id: 2,
    title: "Nous fournissons une solution complète et unifiée.",
    icon: "marketplace.png",
  },
  {
    id: 3,
    title: "Nous testons, effectuons et résolvons des problèmes du monde réel.",
    icon: "solution.png",
  },
  { id: 4, title: "Nous sommes connectés et accessibles 24h/24 et 7j/7.", icon: "support.png" },
];

const QUICKFACTS1 = [
  { id: 1, title: "Priorizamos su éxito como nuestro objetivo final.", icon: "customer.png" },
  {
    id: 2,
    title: "Entregamos una solución completa y unificada.",
    icon: "marketplace.png",
  },
  {
    id: 3,
    title: "Probamos, realizamos y solucionamos problemas del mundo real.",
    icon: "solution.png",
  },
  { id: 4, title: "Probamos, realizamos y solucionamos problemas del mundo real.", icon: "support.png" },
];

const QUICKFACTS2 = [
  { id: 1, title: "نحن نعطي الأولوية لنجاحك باعتباره هدفنا النهائي.", icon: "customer.png" },
  {
    id: 2,
    title: "نحن نقدم حلا كاملا وموحدا.",
    icon: "marketplace.png",
  },
  {
    id: 3,
    title: "نحن نختبر وننفذ ونحل مشاكل العالم الحقيقي.",
    icon: "solution.png",
  },
  { id: 4, title: "نحن على تواصل ويمكن الوصول إلينا على مدار الساعة طوال أيام الأسبوع.", icon: "support.png" },
];

const QUICKFACTS3 = [
  { id: 1, title: "We prioritise your success as our end goal.", icon: "customer.png" },
  {
    id: 2,
    title: "We deliver a complete and unified solution.",
    icon: "marketplace.png",
  },
  {
    id: 3,
    title: "We test, perform and solve in real-world problems.",
    icon: "solution.png",
  },
  { id: 4, title: "We’re connected and accessible, 24/7. ", icon: "support.png" },
];

const QUICKFACTS4 = [
  {
    id: 1, title: `We prioritise your success as our end goal.
  `, icon: "customer.png"
  },
  {
    id: 2,
    title: `We deliver a complete and unified solution.
    `,
    icon: "marketplace.png",
  },
  {
    id: 3,
    title: `We test, perform and solve in real-world
    problems`,
    icon: "solution.png",
  },
  {
    id: 4, title: `We’re connected and accessible, 24/7`, icon: "support.png"
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage.getItem('lang'));
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
                  {/* Democratizing Automation  */}
                  {lang === 'fr' ? `Fournir des solutions d’hyper-` : lang === 'sp' ? 'Ofreciendo soluciones de hiperautomatización de ' : lang === 'ar' ? 'تقديم حلول الأتمتة ' : lang === 'gr' ? 'Bereitstellung von Hyperautomatisierungslösungen ' : 'Delivering Next-Gen Hyper-automation '}{''}
                  <span style={{ color: Colors.airaSecondary }}>
                    {/* for Future-Ready */}
                    {lang === 'fr' ? `automatisation de nouvelle génération ` : lang === 'sp' ? 'próxima generación ' : lang === 'ar' ? 'الفائقة من الجيل التالي ' : lang === 'der nächsten Generation ' ? 'Unsere' : 'Solutions '}
                    
                    {/* Performance */}
                    {lang === 'fr' ? `Pour les entreprises d'aujourd'hui` : lang === 'sp' ? 'Para las empresas de hoy' : lang === 'ar' ? 'للشركات اليوم' : lang === 'gr' ? 'Für Unternehmen heute' : 'For Businesses Today'}
                  </span>
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`/images/aboutus/about_us_header2.jpg`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </div>
        </Grid>
      </Grid>

      <Container maxWidth="lg">
        <Grid
          sx={{ pt: 4 }}
          container
          spacing={5}
          justifyContent="left"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <div style={{ position: "relative" }}>
              {/* <div
                style={{
                  height: "140px",
                  width: "40px",
                  position: "absolute",
                  transform: "rotate(35deg)",
                  borderRadius: "50px",
                  backgroundColor: Colors.airaPrimary,
                  top: 150,
                  marginLeft: "-30px",
                }}
              ></div>
              <div
                style={{
                  height: "140px",
                  width: "40px",
                  top: 200,
                  transform: "rotate(35deg)",
                  position: "absolute",
                  borderRadius: "50px",
                  backgroundColor: Colors.airaSecondary,
                }}
              ></div>
              <div
                style={{
                  height: "140px",
                  width: "40px",
                  transform: "rotate(35deg)",
                  top: 250,
                  position: "absolute",
                  borderRadius: "50px",
                  marginLeft: "35px",
                  border: `1px solid ${Colors.airaPrimary}`,
                }}
              ></div> */}
              <Grid item container justifyContent={{ xs: "center", md: "flex-end" }}>
                <Image
                  src="/vision.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '75%', height: 'auto', zIndex: 2, borderRadius: 250 }}
                />
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" sx={{ py: 2 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                {/* {lang === 'fr' ? `AIRA: Réunir le potentiel de ` : lang === 'sp' ? 'AIRE: Reunir el potencial del ' : lang === 'ar' ? 'جمع بين إمكانات الغد وإمكانيات اليوم معًا للجميع.' : lang === 'gr' ? 'AIRA : Bringing tomorrow’s potential and today’s possibilities ' : ' The Vision'} */}
                {lang === 'fr' ? `La vision` : lang === 'sp' ? 'La visión' : lang === 'ar' ? 'الرؤية' : lang === 'gr' ? 'The Vision' : 'The Vision'}
              </Typography>

              <Typography variant="subtitle1" sx={{ lineHeight: 2 }}>
                {lang === 'fr' ? `demain et les possibilités d’aujourd’hui pour tous.` : lang === 'sp' ? 'mañana y las posibilidades de hoy para todos.' : lang === 'ar' ? 'المهمة' : lang === 'gr' ? 'together for everyone.' : ' Bringing tomorrow’s potential and today’s possibilities together for everyone.'} {' '}
                <span style={{ fontWeight: 400 }}>
                  {lang === 'fr' ? `La mission` : lang === 'sp' ? 'La misión' : lang === 'ar' ? 'لبناء وسد الفجوة بين ما هو ممكن وما يتم إنجازه. تحافظ تقنيات الأتمتة الفائقة لدينا على تحسين العالم الذي نعيش فيه في قلوبنا. مع AIRA، تمتد مهمتنا إلى تحسين جودة الوقت ' : lang === 'gr' ? 'The vision ' : 'The vision'}
                </span>{" "}
                
                {lang === 'fr' ? `Construire et combler le fossé entre ce qui est possible et ce qui est accompli. Nos technologies d’hyper-automatisation gardent à cœur l’amélioration du monde dans lequel nous vivons. Avec AIRA, notre mission s'étend à l'amélioration de la qualité du temps et de l'impact des résultats, que ce soit en accélérant les progrès ou en améliorant la productivité.` : lang === 'sp' ? 'Construir y cerrar la brecha entre lo que es posible y lo que se logra. Nuestras tecnologías de hiperautomatización mantienen en nuestro corazón la mejora del mundo en el que vivimos. Con AIRA, nuestra misión se extiende a mejorar la calidad del tiempo y el impacto de los resultados, ya sea acelerando el progreso o mejorando la productividad.' : lang === 'ar' ? 'وتأثير النتائج، سواء كان ذلك من خلال تسريع التقدم أو تعزيز الإنتاجية' : lang === 'gr' ? 'To build and bridge the gap between what is possible and what is accomplished. Our Hyper-automation technologies keep the betterment of the world we live in, at our heart. With AIRA, our mission extends to enhancing the quality of time and impact of results, be it by accelerating progress or enhancing productivity. ' : 'To build and bridge the gap between what is possible and what is accomplished. Our Hyper-automation technologies keep the betterment of the world we livein, at our heart. With AIRA, our mission extends to enhancing the quality of time and impact of results,be it by accelerating progress or enhancing productivity.'}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        {/* <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, textAlign: "center", lineheight: 2, my: 2 }}
        >
          {lang === 'fr' ? `Our` : lang === 'sp' ? 'Nuestra' : lang === 'ar' ? 'عملائنا' : lang === 'gr' ? 'Unsere' : 'AIRA : Bringing tomorrow’s potential and today’s possibilities together for everyone'}
        </Typography> */}
      </Container>

      <Container maxWidth="lg">
        <Grid
          sx={{ pt: 4 }}
          container
          spacing={5}
          justifyContent="left"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <div style={{ position: "relative" }}>
              {/* <div
                style={{
                  height: "140px",
                  width: "40px",
                  position: "absolute",
                  transform: "rotate(35deg)",
                  borderRadius: "50px",
                  backgroundColor: Colors.airaPrimary,
                  top: 150,
                  marginLeft: "-30px",
                }}
              ></div>
              <div
                style={{
                  height: "140px",
                  width: "40px",
                  top: 200,
                  transform: "rotate(35deg)",
                  position: "absolute",
                  borderRadius: "50px",
                  backgroundColor: Colors.airaSecondary,
                }}
              ></div>
              <div
                style={{
                  height: "140px",
                  width: "40px",
                  transform: "rotate(35deg)",
                  top: 250,
                  position: "absolute",
                  borderRadius: "50px",
                  marginLeft: "35px",
                  border: `1px solid ${Colors.airaPrimary}`,
                }}
              ></div> */}
              <Grid item container justifyContent={{ xs: "center", md: "flex-end" }}>
                <Image
                  src="/images/aboutus/au_commitment2.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '75%', height: 'auto', zIndex: 2, borderRadius: 250 }}
                />
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" sx={{ py: 2 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                {/* AIRA: Committed to build a technology driven future */}
                {lang === 'fr' ? `La Mission` : lang === 'sp' ? 'La misión' : lang === 'ar' ? 'الرؤية' : lang === 'gr' ? 'The Mission' : 'The Mission'}
              </Typography>

              <Typography variant="subtitle1" sx={{ lineHeight: 2 }}>
                {lang === 'fr' ? `Avec nos collaborateurs, avec nos partenaires et avec nos passions. AIRA vise à faire avancer le monde, plus près d’une meilleure communauté mondiale. Qu'il s'agisse de libérer l'esprit humain de la répétition et de permettre la créativité et la liberté, ou encore d'aider les entreprises à adoucir leurs expériences et à améliorer leur culture. AIRA envisage un impact partout où nous pouvons livrer.` : lang === 'sp' ? 'Con nuestra gente, con nuestros socios y con nuestras pasiones. AIRA tiene como objetivo hacer avanzar al mundo, acercándolo a una mejor comunidad a nivel mundial. Desde liberar el espíritu humano de la repetición y permitir la creatividad y la libertad hasta ayudar a las empresas a mejorar sus experiencias y mejorar sus culturas. AIRA visualiza un impacto dondequiera que podamos lograrlo.' : lang === 'ar' ? 'مع شعبنا، مع شركائنا ومع عواطفنا. تهدف AIRA إلى دفع العالم إلى الأمام، أقرب إلى مجتمع أفضل على مستوى العالم. من تحرير الروح الإنسانية من التكرار وتمكين الإبداع والحرية إلى مساعدة المنشآت في صقل تجاربها وتعزيز ثقافاتها. تتصور AIRA التأثير أينما يمكننا تقديمه.' : lang === 'gr' ? 'With our people, with our partners and with our passions. AIRA aims at moving the world forward, nearer to a better community globally. From freeing the human spirit from repetition and enabling creativity and freedom to assisting enterprises in smoothening their experiences and enhancing their cultures. AIRA envisions impact wherever we can deliver.' : 'With our people, with our partners and with our passions. AIRA aims at moving world forward, nearer to a better community globally. From freeing the human spirit from repetition and enabling creativity and freedom to assisting enterprises in smoothening their experiences and enhancing their cultures. AIRA envisions impact wherever we can deliver.'}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#F8F9FB", mt: 5 }}>
        <Container maxWidth="lg">
          <Box sx={{ pb: 8, }}>
            <Stack
              direction="row"
              gap={1}
              sx={{ pt: 4 }}
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                <span style={{ color: Colors.airaSecondary }}>
                  {/* Values  */}
                  {lang === 'fr' ? `Les valeurs de` : lang === 'sp' ? 'Los valores de' : lang === 'ar' ? 'قيم ' : lang === 'gr' ? 'The Values of' : 'The Values of'}
                </span>
                {" "}
                {/* of AIRA */}
                {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : 'AIRA'}
              </Typography>
            </Stack>

            <Grid container spacing={3} sx={{ my: 3 }}>
              {
                lang === "fr" ? DISCOVER_ITEMS?.map((item, idx) => {
                  let { title, desc, icon } = item;
                  return (
                    <Grid item xs={12} sm={3} key={idx}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <div>
                          <Image
                            src={`/images/aboutus/airavalues/${icon}`}
                            alt={title}
                            height={60}
                            width={60}
                          />
                        </div>
                        <Typography
                          variant="caption"
                          sx={{
                            pt: 1,
                            fontSize: "16px",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            textAlign: "center",
                            color: "#200E32",
                            lineHeight: "22px",
                          }}
                        >
                          {desc}
                        </Typography>
                      </Stack>
                    </Grid>
                  );
                }) : lang === "sp" ? DISCOVER_ITEMS1?.map((item, idx) => {
                  let { title, desc, icon } = item;
                  return (
                    <Grid item xs={12} sm={3} key={idx}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <div>
                          <Image
                            src={`/images/aboutus/airavalues/${icon}`}
                            alt={title}
                            height={60}
                            width={60}
                          />
                        </div>
                        <Typography
                          variant="caption"
                          sx={{
                            pt: 1,
                            fontSize: "16px",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            textAlign: "center",
                            color: "#200E32",
                            lineHeight: "22px",
                          }}
                        >
                          {desc}
                        </Typography>
                      </Stack>
                    </Grid>
                  );
                }) : lang === "ar" ? DISCOVER_ITEMS2?.map((item, idx) => {
                  let { title, desc, icon } = item;
                  return (
                    <Grid item xs={12} sm={3} key={idx}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <div>
                          <Image
                            src={`/images/aboutus/airavalues/${icon}`}
                            alt={title}
                            height={60}
                            width={60}
                          />
                        </div>
                        <Typography
                          variant="caption"
                          sx={{
                            pt: 1,
                            fontSize: "16px",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            textAlign: "center",
                            color: "#200E32",
                            lineHeight: "22px",
                          }}
                        >
                          {desc}
                        </Typography>
                      </Stack>
                    </Grid>
                  );
                }) : lang === "gr" ? DISCOVER_ITEMS3?.map((item, idx) => {
                  let { title, desc, icon } = item;
                  return (
                    <Grid item xs={12} sm={3} key={idx}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <div>
                          <Image
                            src={`/images/aboutus/airavalues/${icon}`}
                            alt={title}
                            height={60}
                            width={60}
                          />
                        </div>
                        <Typography
                          variant="caption"
                          sx={{
                            pt: 1,
                            fontSize: "16px",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            textAlign: "center",
                            color: "#200E32",
                            lineHeight: "22px",
                          }}
                        >
                          {desc}
                        </Typography>
                      </Stack>
                    </Grid>
                  );
                }) : DISCOVER_ITEMS4?.map((item, idx) => {
                  let { title, desc, icon } = item;
                  return (
                    <Grid item xs={12} sm={3} key={idx}>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <div>
                          <Image
                            src={`/images/aboutus/airavalues/${icon}`}
                            alt={title}
                            height={60}
                            width={60}
                          />
                        </div>
                        <Typography
                          variant="caption"
                          sx={{
                            pt: 1,
                            fontSize: "16px",
                            fontWeight: 600,
                            textAlign: "center",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            textAlign: "center",
                            color: "#200E32",
                            lineHeight: "22px",
                          }}
                        >
                          {desc}
                        </Typography>
                      </Stack>
                    </Grid>
                  );
                })
              }

            </Grid>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ py: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "center" }}>
            <span style={{ color: Colors.airaSecondary }}>
              {/* Values  */}
              {lang === 'fr' ? `Les dirigeants de` : lang === 'sp' ? 'Los líderes de' : lang === 'ar' ? 'قادة' : lang === 'gr' ? 'The Leaders' : 'The Leaders of'} {" "}
            </span>
            {/* of AIRA */}
            {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'of AIRA' : 'AIRA'}
          </Typography>
          <br />

          <Grid container spacing={2} justifyContent="center">
            {
              lang === "fr" ? OUR_TEAM?.map((person, idx) => {
                const { name, image, position } = person;
                return (
                  <Grid
                    key={idx}
                    item
                    container
                    xs={6}
                    md={12 / 5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                  >
                    <Box>
                      <Image
                        src={`/images/aboutus/ourteam/${image}`}
                        alt={"shashwat.png"}
                        height={130}
                        width={130}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: Colors.airaPrimary,
                          textAlign: "center",
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                          color: "text.primary",
                        }}
                      >
                        {position}
                      </Typography>
                    </Box>

                  </Grid>
                );
              }) : lang === "sp" ? OUR_TEAM1?.map((person, idx) => {
                const { name, image, position } = person;
                return (
                  <Grid
                    key={idx}
                    item
                    container
                    xs={6}
                    md={12 / 5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                  >
                    <Box>
                      <Image
                        src={`/images/aboutus/ourteam/${image}`}
                        alt={"shashwat.png"}
                        height={130}
                        width={130}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: Colors.airaPrimary,
                          textAlign: "center",
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                          color: "text.primary",
                        }}
                      >
                        {position}
                      </Typography>
                    </Box>

                  </Grid>
                );
              }) : lang === "ar" ? OUR_TEAM2?.map((person, idx) => {
                const { name, image, position } = person;
                return (
                  <Grid
                    key={idx}
                    item
                    container
                    xs={6}
                    md={12 / 5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                  >
                    <Box>
                      <Image
                        src={`/images/aboutus/ourteam/${image}`}
                        alt={"shashwat.png"}
                        height={130}
                        width={130}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: Colors.airaPrimary,
                          textAlign: "center",
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                          color: "text.primary",
                        }}
                      >
                        {position}
                      </Typography>
                    </Box>

                  </Grid>
                );
              }) : lang === "gr" ? OUR_TEAM3?.map((person, idx) => {
                const { name, image, position } = person;
                return (
                  <Grid
                    key={idx}
                    item
                    container
                    xs={6}
                    md={12 / 5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                  >
                    <Box>
                      <Image
                        src={`/images/aboutus/ourteam/${image}`}
                        alt={"shashwat.png"}
                        height={130}
                        width={130}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: Colors.airaPrimary,
                          textAlign: "center",
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                          color: "text.primary",
                        }}
                      >
                        {position}
                      </Typography>
                    </Box>

                  </Grid>
                );
              }) : OUR_TEAM4?.map((person, idx) => {
                const { name, image, position } = person;
                return (
                  <Grid
                    key={idx}
                    item
                    container
                    xs={6}
                    md={12 / 5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    flexDirection={"column"}
                  >
                    <Box>
                      <Image
                        src={`/images/aboutus/ourteam/${image}`}
                        alt={"shashwat.png"}
                        height={130}
                        width={130}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: Colors.airaPrimary,
                          textAlign: "center",
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          textAlign: "center",
                          fontSize: "13px",
                          color: "text.primary",
                        }}
                      >
                        {position}
                      </Typography>
                    </Box>

                  </Grid>
                );
              })
            }


          </Grid>
        </Box>
      </Container>
      
      <Box sx={{ backgroundColor: "#6755DF", my: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ py: 5, pb: 10 }}>
            <Grid item xs={12} sm={6}>
              <Stack direction="column">
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600 }}
                  style={{color:'white'}}
                // color="common.white"
                >
                  {/* AIRA  */}
                  {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : 'AIRA'}
                  <br />
                  {/* Quick Facts */}
                  {lang === 'fr' ? `Faits rapides` : lang === 'sp' ? 'Hechos rápidos' : lang === 'ar' ? 'حقائق سريعة' : lang === 'gr' ? 'Quick Facts' : 'Quick Facts'}
                </Typography>

                <Typography variant="subtitle2" sx={{ my: 2 }} color="common.white">
                  {/* When you work with us, transformation becomes more rigorous,
                  dynamic, and powerful than ever. */}
                  {lang === 'fr' ? `Avec AIRA, les transformations sont dynamiques, les gens sont collaboratifs et ont un impact est exponentielle. Voici pourquoi :` : lang === 'sp' ? 'Con AIRA, las Transformaciones son dinámicas, las personas son colaborativas e impactan es exponencial. He aquí por qué:' : lang === 'ar' ? 'مع AIRA، تكون التحولات ديناميكية، والناس متعاونون، والتأثير هائل. هنا هو السبب:' : lang === 'gr' ? 'With AIRA, Transformations are dynamic, people are collaborative and impact is exponential. Here is why:' : `With AIRA,Transformations are dynamic, people are collaborative and impact is exponential. Here is why:`}

                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction="column" gap={2}>
                {
                  lang === "fr" ? QUICKFACTS.map((factItem, idx) => {
                    const { title, id, icon } = factItem;
                    return (
                      <Stack direction="row" gap={1} alignItems="center" key={id}>
                        <Image
                          src={`/images/aboutus/airaquickfact/${icon}`}
                          alt={title}
                          height={30}
                          width={30}
                        />
                        <Typography variant="subtitle2" color="common.white">
                          {title}
                        </Typography>
                      </Stack>
                    );
                  }) : lang === "sp" ? QUICKFACTS1.map((factItem, idx) => {
                    const { title, id, icon } = factItem;
                    return (
                      <Stack direction="row" gap={1} alignItems="center" key={id}>
                        <Image
                          src={`/images/aboutus/airaquickfact/${icon}`}
                          alt={title}
                          height={30}
                          width={30}
                        />
                        <Typography variant="subtitle2" color="common.white">
                          {title}
                        </Typography>
                      </Stack>
                    );
                  }) : lang === "ar" ? QUICKFACTS2.map((factItem, idx) => {
                    const { title, id, icon } = factItem;
                    return (
                      <Stack direction="row" gap={1} alignItems="center" key={id}>
                        <Image
                          src={`/images/aboutus/airaquickfact/${icon}`}
                          alt={title}
                          height={30}
                          width={30}
                        />
                        <Typography variant="subtitle2" color="common.white">
                          {title}
                        </Typography>
                      </Stack>
                    );
                  }) : lang === "gr" ? QUICKFACTS3.map((factItem, idx) => {
                    const { title, id, icon } = factItem;
                    return (
                      <Stack direction="row" gap={1} alignItems="center" key={id}>
                        <Image
                          src={`/images/aboutus/airaquickfact/${icon}`}
                          alt={title}
                          height={30}
                          width={30}
                        />
                        <Typography variant="subtitle2" color="common.white">
                          {title}
                        </Typography>
                      </Stack>
                    );
                  }) : QUICKFACTS4.map((factItem, idx) => {
                    const { title, id, icon } = factItem;
                    return (
                      <Stack direction="row" gap={1} alignItems="center" key={id}>
                        <Image
                          src={`/images/aboutus/airaquickfact/${icon}`}
                          alt={title}
                          height={30}
                          width={30}
                        />
                        <Typography variant="subtitle2" color="common.white">
                          {title}
                        </Typography>
                      </Stack>
                    );
                  })
                }
              </Stack>
            </Grid>
          </Grid>
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
};

export default Index;
