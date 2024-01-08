import React,{useState,useEffect} from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container
} from "@mui/material";
import Colors from "../../common/Colors";
import ESCard from '@/components/ESCard/ESCardcomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';

const SOLUTIONSDATA = [
  {
    title: "À propos de nous",
    desc: "Explorez l'essence d'AIRA – Innover aujourd'hui dans l'automatisation de demain.",
    icon: "banking.svg",
    route: "company/about_us",
  },
  {
    title: "Équipe de direction",
    desc: "Rencontrez les visionnaires qui guident AIRA vers l’excellence.",
    icon: "insurance.svg",
    route: "company/leadership_team",
  },
  {
    title: "Tarification",
    desc: "tarification transparente et flexible pour vos besoins d’automatisation.",
    icon: "healthcare.svg",
    route: "company/pricing",
  },
  {
    title: "Carrière chez AIRA",
    desc: "Rejoignez-nous pour façonner l'avenir des carrières en automatisation intelligente.",
    icon: "telecom.svg",
    route: "company/careers",
  },
  {
    title: "Responsabilité sociale d'entreprise",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "retail.svg",
    route: "company/csr",
  },
  {
    title: "Partenaire",
    desc: "Collaborez avec nous pour transformer les industries ensemble.",
    icon: "bpo.svg",
    route: "company/partner",
  },
  {
    title: "Page du portail de partenariat",
    desc: "débloquez des ressources et des opportunités exclusives via le portail de partenariat AIRA.",
    icon: "manufacturing.svg",
    route: "company/partnership_portal_page",
  },
];

const SOLUTIONSDATA1 = [
  {
    title: "Acerca de nosotros",
    desc: "Explore la esencia de AIRA: innovando hoy la automatización del mañana.",
    icon: "banking.svg",
    route: "company/about_us",
  },
  {
    title: "Equipo de liderazgo",
    desc: "conozca a los visionarios que dirigen AIRA hacia la excelencia.",
    icon: "insurance.svg",
    route: "company/leadership_team",
  },
  {
    title: "Precios",
    desc: "Precios transparentes y flexibles para sus necesidades de automatización.",
    icon: "healthcare.svg",
    route: "company/pricing",
  },
  {
    title: "Carrera en AIRA",
    desc: "Únase a nosotros para dar forma al futuro de las carreras de automatización inteligente.",
    icon: "telecom.svg",
    route: "company/careers",
  },
  {
    title: "Responsabilidad Social Corporativa",
    desc: "Nuestro compromiso de generar un impacto positivo en el mundo.",
    icon: "retail.svg",
    route: "company/csr",
  },
  {
    title: "Socio",
    desc: "Colabore con nosotros para transformar industrias juntos.",
    icon: "bpo.svg",
    route: "company/partner",
  },
  {
    title: "Página del portal de asociación",
    desc: "Desbloquee recursos y oportunidades exclusivos a través del Portal de asociación de AIRA.",
    icon: "manufacturing.svg",
    route: "company/partnership_portal_page",
  },
];

const SOLUTIONSDATA2 = [
  {
    title: "اكتشف جوهر",
    desc: "معلومات عنا AIRA - ابتكار أتمتة الغد اليوم",
    icon: "banking.svg",
    route: "company/about_us",
  },
  {
    title: "تعرف على أصحاب الرؤى الذين يقودون",
    desc: "فريق القيادة AIRA نحو التميز.",
    icon: "insurance.svg",
    route: "company/leadership_team",
  },
  {
    title: "التسعير",
    desc: "تسعير شفاف ومرن لاحتياجات الأتمتة الخاصة بك",
    icon: "healthcare.svg",
    route: "company/pricing",
  },
  {
    title: "مهنة في AIRA",
    desc: "انضم إلينا في تشكيل مستقبل وظائف الأتمتة الذكية",
    icon: "telecom.svg",
    route: "company/careers",
  },
  {
    title: "المسؤولية الاجتماعية للشركات.",
    desc: "التزامنا بإحداث تأثير إيجابي على العالم",
    icon: "retail.svg",
    route: "company/csr",
  },
  {
    title: "الشريك",
    desc: "تعاون معنا لتحويل الصناعات معًا",
    icon: "bpo.svg",
    route: "company/partner",
  },
  {
    title: "صفحة بوابة الشراكة AIRA",
    desc: "أطلق العنان للموارد والفرص الحصرية من خلال بوابة شراكة",
    icon: "manufacturing.svg",
    route: "company/partnership_portal_page",
  },
];

const SOLUTIONSDATA3 = [
  {
    title: "Über uns: Entdecken Sie die Essenz von AIRA",
    desc: " Innovating Tomorrow's Automation Today.",
    icon: "banking.svg",
    route: "company/about_us",
  },
  {
    title: "Führungsteam",
    desc: "Treffen Sie die Visionäre, die AIRA zu Spitzenleistungen führen.",
    icon: "insurance.svg",
    route: "company/leadership_team",
  },
  {
    title: "Preisgestaltung",
    desc: "Transparente und flexible Preisgestaltung für Ihre Automatisierungsanforderungen.",
    icon: "healthcare.svg",
    route: "company/pricing",
  },
  {
    title: "Karriere bei AIRA",
    desc: "Gestalten Sie gemeinsam mit uns die Zukunft intelligenter Automatisierungsberufe.",
    icon: "telecom.svg",
    route: "company/careers",
  },
  {
    title: "Corporate Social Responsibility",
    desc: "Unser Engagement, einen positiven Einfluss auf die Welt zu nehmen.",
    icon: "retail.svg",
    route: "company/csr",
  },
  {
    title: "Partner",
    desc: "Arbeiten Sie mit uns zusammen, um gemeinsam Branchen zu transformieren.",
    icon: "bpo.svg",
    route: "company/partner",
  },
  {
    title: "Seite „Partnerschaftsportal“",
    desc: "Schalten Sie exklusive Ressourcen und Möglichkeiten über das AIRA-Partnerschaftsportal frei.",
    icon: "manufacturing.svg",
    route: "company/partnership_portal_page",
  },
];

const SOLUTIONSDATA4 = [
  {
    title: "About Us",
    desc: "Explore the essence of AIRA – Innovating Tomorrow's Automation Today.",
    icon: "banking.svg",
    route: "company/about_us",
  },

  {
    title: "Pricing",
    desc: "Transparent and flexible pricing for your automation needs.",
    icon: "healthcare.svg",
    route: "company/pricing",
  },
  {
    title: "Careers at AIRA",
    desc: "Join us in shaping the future of intelligent automation careers.",
    icon: "telecom.svg",
    route: "company/careers",
  },
  {
    title: "Corporate Social Responsibility",
    desc: "Our commitment to making a positive impact on the world.",
    icon: "retail.svg",
    route: "company/csr",
  },
  {
    title: "Partner",
    desc: "Collaborate with us to transform industries together.",
    icon: "bpo.svg",
    route: "company/partner",
  },
  {
    title: "Partnership Portal Page.",
    desc: "Unlock exclusive resources and opportunities through the AIRA Partnership Portal.",
    icon: "manufacturing.svg",
    route: "company/partnership_portal_page",
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
  }, []);
  return (
    <Box sx={{
      display: "flex",
      backgroundImage: "url(/images/solutions/solutiongirl.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
    }}>
      <Container maxWidth="lg">
        <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 4 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
          >
            {/* <Grid item xs={2}></Grid> */}
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <Stack sx={{ my: 10 }}>
                <Box sx={{ width: "40%" }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {lang === 'fr' ? `Notre` : lang === 'sp' ? 'Nuestra' : lang === 'ar' ? 'شركتنا' : lang === 'gr' ? 'Unser' : 'Our'} {' '}
                    <span style={{ color: Colors.airaSecondary }}>
                    {lang === 'fr' ? `compagnie` : lang === 'sp' ? 'compañía' : lang === 'ar' ? '' : lang === 'gr' ? 'Unternehmen' : 'Company'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                  {lang === 'fr' ? `Découvrez AIRA – Votre partenaire en automatisation intelligente. Nous fusionnons l'IA et la RPA pour redéfinir votre façon de travailler. Améliorez l’efficacité, la précision et l’adaptabilité dans tous les secteurs. Rejoignez-nous pour transformer les défis en opportunités pour un avenir plus intelligent.` : lang === 'sp' ? 'te permite' : lang === 'ar' ? 'اكتشف AIRA - شريكك في التشغيل الآلي الذكي. نحن ندمج الذكاء الاصطناعي وتقنية RPA لإعادة تعريف طريقة عملك. رفع الكفاءة والدقة والقدرة على التكيف عبر الصناعات. انضم إلينا في تحويل التحديات إلى فرص لمستقبل أكثر ذكاءً.' : lang === 'gr' ? 'Entdecken Sie AIRA – Ihren Partner für intelligente Automatisierung. Wir verschmelzen KI und RPA, um Ihre Arbeitsweise neu zu definieren. Steigern Sie branchenübergreifend die Effizienz, Genauigkeit und Anpassungsfähigkeit. Verwandeln Sie gemeinsam mit uns Herausforderungen in Chancen für eine intelligentere Zukunft.' : 'Discover AIRA – Your Partner in Intelligent Automation. We merge AI and RPA to redefine how you work. Elevate efficiency, accuracy, and adaptability across industries. Join us in transforming challenges into opportunities for a smarter future.'}
                  </Typography>
                </Box>
                <Grid container gap={1}>
                 {
                  lang === "fr" ? SOLUTIONSDATA?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  }) : lang === "sp" ? SOLUTIONSDATA1?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  }) : lang === "ar" ? SOLUTIONSDATA2?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  }) : lang === "gr" ? SOLUTIONSDATA3?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  }) : SOLUTIONSDATA4?.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  })
                 }
                  
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <div
        style={{
          position: "absolute",
          top: 100,
        }}
      >
        <AIRAMonoLinesLeft />
      </div>
    </Box>
  )
};

export default Index;
