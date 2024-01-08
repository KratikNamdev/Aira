import React, { useState, useEffect } from 'react';
import { Box, Grid, Stack, Typography, Container } from "@mui/material";
import Colors from '@/common/Colorscomponents';
import Image from 'next/image'

const DISCOVER_ITEMS = [
  {
    title: "Élaborer une stratégie",
    icon: "search.svg",
    desc: "Renforcez votre entreprise grâce à l'approche stratégique d'AIRA, en tirant parti d'analyses avancées et d'informations prédictives pour une planification et une prise de décision optimales.",
  },
  {
    title: "Transformer",
    icon: "paintbrush.svg",
    desc: "Vivez une transformation numérique holistique alors qu'AIRA intègre les technologies d'IA et de ML pour redéfinir les processus, favorisant ainsi l'efficacité et l'innovation dans votre entreprise.",
  },
  {
    title: "Rationaliser",
    icon: "deploy.svg",
    desc: "Maximisez l'efficacité opérationnelle avec AIRA, en offrant des interfaces conviviales et des solutions évolutives pour rationaliser les flux de travail, garantissant ainsi des processus transparents et efficaces.",
  },
];

const DISCOVER_ITEMS1 = [
  {
    title: "Elaborar estrategias",
    icon: "search.svg",
    desc: "Potencie su negocio con el enfoque estratégico de AIRA, aprovechando análisis avanzados e información predictiva para una planificación y toma de decisiones óptimas.",
  },
  {
    title: "Transformar",
    icon: "paintbrush.svg",
    desc: "Experimente una transformación digital holística mientras AIRA integra tecnologías de inteligencia artificial y aprendizaje automático para redefinir los procesos, impulsando la eficiencia y la innovación en toda su empresa.",
  },
  {
    title: "Línea de corriente",
    icon: "deploy.svg",
    desc: "Maximice la eficiencia operativa con AIRA, que ofrece interfaces fáciles de usar y soluciones escalables para optimizar los flujos de trabajo, garantizando procesos fluidos y eficaces.",
  },
];

const DISCOVER_ITEMS2 = [
  {
    title: "وضع استراتيجية",
    icon: "search.svg",
    desc: " بتمكين أعمالك من خلال النهج الاستراتيجي لـ AIRA، والاستفادة من التحليلات المتقدمة والرؤى التنبؤية للتخطيط الأمثل واتخاذ القرار.",
  },
  {
    title: "تحول",
    icon: "paintbrush.svg",
    desc: "استمتع بتجربة تحول رقمي شامل حيث تقوم AIRA بدمج تقنيات الذكاء الاصطناعي والتعلم الآلي لإعادة تعريف العمليات وزيادة الكفاءة والابتكار عبر مؤسستك.",
  },
  {
    title: "انسيابية",
    icon: "deploy.svg",
    desc: "قم بزيادة الكفاءة التشغيلية إلى أقصى حد مع AIRA، مما يوفر واجهات سهلة الاستخدام وحلول قابلة للتطوير لتبسيط سير العمل، مما يضمن عمليات سلسة وفعالة.",
  },
];

const DISCOVER_ITEMS3 = [
  {
    title: "Strategisieren Sie ",
    icon: "search.svg",
    desc: "Stärken Sie Ihr Unternehmen mit dem strategischen Ansatz von AIRA und nutzen Sie fortschrittliche Analysen und prädiktive Erkenntnisse für eine optimale Planung und Entscheidungsfindung.",
  },
  {
    title: "Verwandeln",
    icon: "paintbrush.svg",
    desc: "Erleben Sie eine ganzheitliche digitale Transformation, indem AIRA KI- und ML-Technologien integriert, um Prozesse neu zu definieren und so die Effizienz und Innovation in Ihrem gesamten Unternehmen voranzutreiben.",
  },
  {
    title: "Rationalisieren ",
    icon: "deploy.svg",
    desc: "Maximieren Sie die betriebliche Effizienz mit AIRA und bieten Sie benutzerfreundliche Schnittstellen und skalierbare Lösungen zur Rationalisierung von Arbeitsabläufen und sorgen Sie so für nahtlose und effektive Prozesse.",
  },
];

const DISCOVER_ITEMS4 = [
  {
    title: "Strategize",
    icon: "search.svg",
    desc: "Empower your business with AIRA's strategic approach, leveraging advanced analytics and predictive insights for optimal planning and decision-making.",
  },
  {
    title: "Transform",
    icon: "paintbrush.svg",
    desc: "Experience a holistic digital transformation as AIRA integrates AI and ML technologies to redefine processes, driving efficiency and innovation across your enterprise.",
  },
  {
    title: "Streamline",
    icon: "deploy.svg",
    desc: "Maximise operational efficiency with AIRA, offering user-friendly interfaces and scalable solutions to streamline workflows, ensuring seamless and effective processes.",
  },
];


const DiscoverStack = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
  }, []);

  return (
    <Container maxWidth="md">
      <Stack
        direction="row"
        gap={1}
        sx={{ my: 10 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          <span style={{ color: Colors.airaSecondary }}>
            {lang === 'fr' ? `Découvrez` : lang === 'sp' ? 'Descubre ' : lang === 'ar' ? 'اكتشف آيرا' : lang === 'gr' ? 'Entdecken Sie' : 'Discover'} {" "}
          </span>
          {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRA' : lang === 'ar' ? 'آيرا' : lang === 'gr' ? 'AIRA' : 'AIRA '}
        </Typography>
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Image
            src="/images/home/designer.png"
            alt="Designer"
            style={{ position: "absolute", bottom: -150, left: -100, width: '100%', height: 'auto' }}
            width={0}
            height={0}
            sizes="100vw"
          />
          <Image
            src="/images/home/girlhome.png"
            alt="Discover Girl"
            style={{ justifySelf: "flex-end", width: '100%', height: 'auto' }}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </Stack>

      <Grid container spacing={3} sx={{ my: 2 }}>
        {
          lang === "fr" ?
            DISCOVER_ITEMS?.map((item, idx) => {
              let { title, desc, icon } = item;
              return (
                <Grid item xs={12} sm={4} key={idx}>
                  <Stack direction="column">
                    <div>
                      <Image
                        src={`/images/home/${icon}`}
                        alt={title}
                        height={32}
                        width={32}
                      />
                    </div>
                    <Typography
                      variant="caption"
                      sx={{
                        pt: 1,
                        fontSize: "16px",
                        color: "#6755DF",
                        fontWeight: 600,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        py: 1,
                        fontSize: "14px",
                        fontWeight: 500,
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

            : lang === "sp" ? DISCOVER_ITEMS1?.map((item, idx) => {
              let { title, desc, icon } = item;
              return (
                <Grid item xs={12} sm={4} key={idx}>
                  <Stack direction="column">
                    <div>
                      <Image
                        src={`/images/home/${icon}`}
                        alt={title}
                        height={32}
                        width={32}
                      />
                    </div>
                    <Typography
                      variant="caption"
                      sx={{
                        pt: 1,
                        fontSize: "16px",
                        color: "#6755DF",
                        fontWeight: 600,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        py: 1,
                        fontSize: "14px",
                        fontWeight: 500,
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
                <Grid item xs={12} sm={4} key={idx}>
                  <Stack direction="column">
                    <div>
                      <Image
                        src={`/images/home/${icon}`}
                        alt={title}
                        height={32}
                        width={32}
                      />
                    </div>
                    <Typography
                      variant="caption"
                      sx={{
                        pt: 1,
                        fontSize: "16px",
                        color: "#6755DF",
                        fontWeight: 600,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        py: 1,
                        fontSize: "14px",
                        fontWeight: 500,
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
                <Grid item xs={12} sm={4} key={idx}>
                  <Stack direction="column">
                    <div>
                      <Image
                        src={`/images/home/${icon}`}
                        alt={title}
                        height={32}
                        width={32}
                      />
                    </div>
                    <Typography
                      variant="caption"
                      sx={{
                        pt: 1,
                        fontSize: "16px",
                        color: "#6755DF",
                        fontWeight: 600,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        py: 1,
                        fontSize: "14px",
                        fontWeight: 500,
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
                <Grid item xs={12} sm={4} key={idx}>
                  <Stack direction="column">
                    <div>
                      <Image
                        src={`/images/home/${icon}`}
                        alt={title}
                        height={32}
                        width={32}
                      />
                    </div>
                    <Typography
                      variant="caption"
                      sx={{
                        pt: 1,
                        fontSize: "16px",
                        color: "#6755DF",
                        fontWeight: 600,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        py: 1,
                        fontSize: "14px",
                        fontWeight: 500,
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
    </Container>
  )
}

export default DiscoverStack