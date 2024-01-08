import React, { useState, useEffect } from 'react';
import { Box, Grid, Stack, Typography } from "@mui/material";
import { TbCodeOff, TbCode } from "react-icons/tb";
import { IoBusiness } from "react-icons/io5";
import { BsFastForwardCircleFill } from "react-icons/bs";
import Colors from '@/common/Colorscomponents';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const ICON_SIZE = 25;

const OFFERINGSLIST = [
  {
    title: "Hyper-automatisation Low-Code",
    icon: <TbCode fontSize={ICON_SIZE} />,
    desc: "Simplifiez les processus avec des interfaces conviviales, réduisant ainsi la complexité et favorisant une automatisation rapide.    ",
  },
  {
    title: "Intégrations rapides",
    icon: <TbCodeOff fontSize={ICON_SIZE} />,
    desc: "Intégrez de manière transparente divers systèmes, garantissant une connectivité rapide pour un flux de travail rationalisé et efficace. ",
  },
  {
    title: "Solutions de nouvelle génération, exploitées aujourd'hui",
    icon: <IoBusiness fontSize={ICON_SIZE} />,
    desc: "Exploitez les technologies de pointe pour des solutions immédiates et tournées vers l’avenir qui stimulent l’innovation et la compétitivité.",
  },
  {
    title: "Solutions de nouvelle génération, exploitées aujourd'hui	Transformation holistique de l'entreprise",
    icon: <BsFastForwardCircleFill fontSize={ICON_SIZE} />,
    desc: "Transformez l’ensemble de votre organisation grâce à une automatisation complète pour un succès durable.",
  },
];
const OFFERINGSLIST1 = [
  {
    title: "Hiperautomatización de código bajo",
    icon: <TbCode fontSize={ICON_SIZE} />,
    desc: "Simplifique los procesos con interfaces fáciles de usar, reduciendo la complejidad y fomentando una rápida automatización.",
  },
  {
    title: "Integraciones rápidas",
    icon: <TbCodeOff fontSize={ICON_SIZE} />,
    desc: "Integre a la perfección diversos sistemas, garantizando una conectividad rápida para un flujo de trabajo optimizado y eficiente.",
  },
  {
    title: "Soluciones de próxima generación, aprovechadas hoy",
    icon: <IoBusiness fontSize={ICON_SIZE} />,
    desc: "Aproveche las tecnologías de vanguardia para obtener soluciones inmediatas y con visión de futuro que impulsen la innovación y la competitividad. ",
  },
  {
    title: "Transformación empresarial integral",
    icon: <BsFastForwardCircleFill fontSize={ICON_SIZE} />,
    desc: "Transforme toda su organización con una automatización integral para lograr un éxito sostenido.",
  },
];

const OFFERINGSLIST2 = [
  {
    title: "الأتمتة المفرطة ذات التعليمات البرمجية المنخفضة",
    icon: <TbCode fontSize={ICON_SIZE} />,
    desc: "قم بتبسيط العمليات باستخدام واجهات سهلة الاستخدام، مما يقلل من التعقيد ويعزز الأتمتة السريعة.",
  },
  {
    title: "التكامل السريع",
    icon: <TbCodeOff fontSize={ICON_SIZE} />,
    desc: "دمج الأنظمة المتنوعة بسلاسة، مما يضمن الاتصال السريع لسير عمل مبسط وفعال.",
  },
  {
    title: "حلول الجيل التالي، التي يتم الاستفادة منها اليوم",
    icon: <IoBusiness fontSize={ICON_SIZE} />,
    desc: "تسخير التقنيات المتطورة للحلول الفورية والتطلعية التي تدفع الابتكار والقدرة التنافسية.",
  },
  {
    title: "التحول الشامل للمؤسسات",
    icon: <BsFastForwardCircleFill fontSize={ICON_SIZE} />,
    desc: "قم بتحويل مؤسستك بأكملها باستخدام الأتمتة الشاملة لتحقيق النجاح المستدام",
  },
];

const OFFERINGSLIST3 = [
  {
    title: "Low-Code-Hyperautomatisierung",
    icon: <TbCode fontSize={ICON_SIZE} />,
    desc: "Vereinfachen Sie Prozesse mit benutzerfreundlichen Schnittstellen, reduzieren Sie die Komplexität und fördern Sie eine schnelle Automatisierung. ",
  },
  {
    title: "Schnelle Integrationen",
    icon: <TbCodeOff fontSize={ICON_SIZE} />,
    desc: "Integrieren Sie verschiedene Systeme nahtlos und sorgen Sie für eine schnelle Konnektivität für einen optimierten und effizienten Arbeitsablauf.",
  },
  {
    title: "Lösungen der nächsten Generation, heute genutzt",
    icon: <IoBusiness fontSize={ICON_SIZE} />,
    desc: "Nutzen Sie Spitzentechnologien für sofortige, zukunftsweisende Lösungen, die Innovation und Wettbewerbsfähigkeit vorantreiben.",
  },
  {
    title: "Ganzheitliche Unternehmenstransformation",
    icon: <BsFastForwardCircleFill fontSize={ICON_SIZE} />,
    desc: "Transformieren Sie Ihr gesamtes Unternehmen mit umfassender Automatisierung für nachhaltigen Erfolg.",
  },
];

const OFFERINGSLIST4 = [
  {
    title: "Low-Code Hyper-automation",
    icon: <TbCode fontSize={ICON_SIZE} />,
    desc: "Simplify processes with user-friendly interfaces, reducing complexity and fostering rapid automation.",
  },
  {
    title: "Rapid Integration",
    icon: <TbCodeOff fontSize={ICON_SIZE} />,
    desc: "Seamlessly integrate diverse systems, ensuring swift connectivity for a streamlined and efficient workflow.",
  },
  {
    title: "Next-Gen Solutions,Leveraged Today",
    icon: <IoBusiness fontSize={ICON_SIZE} />,
    desc: "Harness cutting-edge technologies for immediate, forward-looking solutions that drive innovation and competitiveness.",
  },
  {
    title: "Holistic Enterprise Transformation",
    icon: <BsFastForwardCircleFill fontSize={ICON_SIZE} />,
    desc: "Transform your entire organisation with comprehensive automation for sustained success. ",
  },
];
const Offering = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
  }, []);

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={12} sm={6} alignItems="center" justifyContent="flex-end">
        <Box
          sx={{
            backgroundColor: Colors.airaPrimary,
            p: 5,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "end",
            borderRadius: "10px",
          }}
        >
          <Image
            src="/images/home/offeringgirl.png"
            alt="offeringgirl"
            className={styles?.offeringImage}
            width={0}
            height={0}
            sizes="100vw"
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={1}></Grid>
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          //p: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ p: 5, pl: 0, pr: 0 }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {lang === 'fr' ? `Que peut faire AIRA pour vous` : lang === 'sp' ? '¿Qué puede hacer AIRA por ti?' : lang === 'ar' ? 'ما الذي يمكن أن تفعله AIRA لك؟' : lang === 'gr' ? 'Was kann AIRA für Sie tun?' : '  What can AIRA do for you'}
          </Typography>
          <Typography
            variant="body1"
            sx={{ my: 3, fontWeight: 400, lineHeight: 1.7 }}
          >
            {lang === 'fr' ? `Voici comment AIRA devient la solution RPA la plus fiable dans les principaux secteurs.` : lang === 'sp' ? 'Así es como AIRA se está convirtiendo en la solución RPA más confiable en industrias líderes.' : lang === 'ar' ? 'إليك كيف أصبحت AIRA أكثر حلول RPA الموثوقة في الصناعات الرائدة.' : lang === 'gr' ? 'So wird AIRA zur vertrauenswürdigsten RPA-Lösung in führenden Branchen.' : ' Here’s how AIRA is becoming the most trusted RPA Solution in leading industries.'}
          </Typography>

          <Grid container spacing={2}>
            {
              lang === "fr" ?
                OFFERINGSLIST?.map((offeringItem, idx) => {
                  return (
                    <Grid className='ttt' item xs={12} sm={6} key={idx}>
                      <Stack direction="row" gap={2} alignItems="center">
                        <div>{offeringItem?.icon}</div>
                        <Typography
                          className='offt'
                          variant="body2"
                          sx={{ color: Colors.airaPrimary, fontWeight: 700 }}
                        >
                          {offeringItem?.title}
                        </Typography>
                      </Stack>

                      <Typography
                        variant="subtitle2"
                        sx={{ my: 1, fontWeight: 400, lineHeight: 1.7 }}
                      >
                        {offeringItem?.desc}
                      </Typography>
                    </Grid>
                  );
                }) : lang === "sp" ? OFFERINGSLIST1?.map((offeringItem, idx) => {
                  return (
                    <Grid className='ttt' item xs={12} sm={6} key={idx}>
                      <Stack direction="row" gap={2} alignItems="center">
                        <div>{offeringItem.icon}</div>
                        <Typography
                          variant="body2"
                          sx={{ color: Colors.airaPrimary, fontWeight: 700 }}
                        >
                          {offeringItem.title}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="subtitle2"
                        sx={{ my: 1, fontWeight: 400, lineHeight: 1.7 }}
                      >
                        {offeringItem.desc}
                      </Typography>
                    </Grid>
                  );
                }) : lang === "ar" ? OFFERINGSLIST2?.map((offeringItem, idx) => {
                  return (
                    <Grid className='ttt' item xs={12} sm={6} key={idx}>
                      <Stack direction="row" gap={2} alignItems="center">
                        <div>{offeringItem.icon}</div>
                        <Typography
                          variant="body2"
                          sx={{ color: Colors.airaPrimary, fontWeight: 700 }}
                        >
                          {offeringItem.title}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="subtitle2"
                        sx={{ my: 1, fontWeight: 400, lineHeight: 1.7 }}
                      >
                        {offeringItem.desc}
                      </Typography>
                    </Grid>
                  );
                }) : lang === "gr" ? OFFERINGSLIST3?.map((offeringItem, idx) => {
                  return (
                    <Grid className='ttt' item xs={12} sm={6} key={idx}>
                      <Stack direction="row" gap={2} alignItems="center">
                        <div>{offeringItem.icon}</div>
                        <Typography
                          variant="body2"
                          sx={{ color: Colors.airaPrimary, fontWeight: 700 }}
                        >
                          {offeringItem.title}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="subtitle2"
                        sx={{ my: 1, fontWeight: 400, lineHeight: 1.7 }}
                      >
                        {offeringItem.desc}
                      </Typography>
                    </Grid>
                  );
                }) : OFFERINGSLIST4?.map((offeringItem, idx) => {
                  return (
                    <Grid className='ttt' item xs={12} sm={6} key={idx}>
                        <div>{offeringItem?.icon}</div>
                      <Stack direction="row" gap={2} alignItems="center">
                        <Typography
                          variant="body2"
                          sx={{ color: Colors.airaPrimary, fontWeight: 700 }}
                        >
                          {offeringItem?.title}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="subtitle2"
                        sx={{ my: 1, fontWeight: 400, lineHeight: 1.7 }}
                      >
                        {offeringItem?.desc}
                      </Typography>
                    </Grid>
                  );
                })
            }
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Offering