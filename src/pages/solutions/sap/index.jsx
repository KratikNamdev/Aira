import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import Colors from '@/common/Colorscomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Image from 'next/image';
import ESCircle from '@/components/ESCircle/ESCirclecomponents';
import { useRouter } from 'next/router';

const AIRACANDODATA = [
  {
    id: 1,
    text: "Hyper-automatisation flux de travail de votre infrastructure d'entreprise basée sur Salesforce au sein d'AIRA elle-même.",
  },
  {
    id: 2,
    text: "Gérer vos mises à jour de conformité et réglementaires automatiquement.",
  },
  {
    id: 3,
    text: "Rationaliser vos protocoles de sécurité pour une mise en œuvre plus rapide sans compromettre la profondeur et la stabilité.",
  },
  {
    id: 4,
    text: "Développer gestion des accès sans limitations avec une authentification unique et sécurisée dans une interface intégrée.",
  },
  {
    id: 5,
    text: "Élaborer une stratégie vos prévisions de retour sur investissement des dépenses afin de minimiser et de prioriser les moteurs de coûts à fort impact pour les retours.",
  },
  {
    id: 6,
    text: "Simplifier votre base de données clients en personnalisant les champs et les filtres pour des ventes plus pertinentes et personnalisées.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    text: "Hiperautomatizar flujos de trabajo de su infraestructura empresarial basada en Salesforce dentro de la propia AIRA.",
  },
  {
    id: 2,
    text: "Administrar sus actualizaciones regulatorias y de cumplimiento automáticamente.",
  },
  {
    id: 3,
    text: "Línea de corriente sus protocolos de seguridad para una implementación más rápida sin comprometer la profundidad y la estabilidad.",
  },
  {
    id: 4,
    text: "Expandir Gestión de acceso sin limitaciones con inicio de sesión único y seguro en una interfaz integrada.",
  },
  {
    id: 5,
    text: "Elaborar estrategias sus previsiones de retorno de la inversión (ROI) de sus gastos para minimizar y priorizar los motores de costos de alto impacto para las devoluciones.",
  },
  {
    id: 6,
    text: "Simplificar su base de datos de clientes personalizando campos y filtros para ventas más relevantes y personalizadas.",
  },
];

const AIRACANDODATA2 = [
  {
    id: 1,
    text: "أتمتة عمليات سير العمل بشكل مفرط للبنية الأساسية لمؤسستك المستندة إلى Salesforce داخل AIRA نفسها.",
  },
  {
    id: 2,
    text: "إدارة الامتثال والتحديثات التنظيمية تلقائيًا.",
  },
  {
    id: 3,
    text: "قم بتبسيط بروتوكولات الأمان لديك لتنفيذ أسرع دون المساس بالعمق والاستقرار.",
  },
  {
    id: 4,
    text: "قم بتوسيع إدارة الوصول دون قيود من خلال تسجيل الدخول الآمن والموحد في واجهة متكاملة.",
  },
  {
    id: 5,
    text: "قم بوضع إستراتيجيات لتوقعات عائد الاستثمار للإنفاق لتقليل محركات التكلفة عالية التأثير وإعطائها الأولوية لتحقيق العائدات.",
  },
  {
    id: 6,
    text: "قم بتبسيط قاعدة بيانات العملاء الخاصة بك عن طريق تخصيص الحقول والمرشحات لتحقيق مبيعات أكثر ملاءمة وتخصيصًا.",
  },
];

const AIRACANDODATA3 = [
  {
    id: 1,
    text: "Hyper-automate workflows of your Salesforce based enterprise infrastructure within AIRA itself.",
  },
  {
    id: 2,
    text: "Manage your compliance and regulatory updates automatically.",
  },
  {
    id: 3,
    text: "Streamline your security protocols for faster implementation without compromising depth and stability.",
  },
  {
    id: 4,
    text: "Expand access management without limitations with secure and single sign-on into an integrated interface.",
  },
  {
    id: 5,
    text: "Strategize your spend ROI forecasts to minimise and prioritise high impact cost engines for returns.",
  },
  {
    id: 6,
    text: "Simplify your customer database by customising fields and filters for more relevant and personalised sales.",
  },
];

const AIRACANDODATA4 = [
  {
    id: 1,
    text: "Hyper-automate workflows of your Salesforce based enterprise infrastructure within AIRA itself.",
  },
  {
    id: 2,
    text: "Manage your compliance and regulatory updates automatically.",
  },
  {
    id: 3,
    text: "Streamline your security protocols for faster implementation without compromising depth and stability.",
  },
  {
    id: 4,
    text: "Expand access management without limitations with secure and single sign-on into an integrated interface.",
  },
  {
    id: 5,
    text: "Strategize your spend ROI forecasts to minimise and prioritise high impact cost engines for returns.",
  },
  {
    id: 6,
    text: "Simplify your customer database by customising fields and filters for more relevant and personalised sales.",
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
  }, []);
  const router = useRouter();

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
                    {lang === 'fr' ? `AIRAHyper-automatisation ` : lang === 'sp' ? 'AIREHiperautomatización' : lang === 'ar' ? 'رط الأتمتة لـ SAP' : lang === 'gr' ? 'für Salesforce' : ' AIRA Hyper-automation  '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `pour SAP` : lang === 'sp' ? 'para SAP' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'für Salesforce' : 'for SAP'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    {lang === 'fr' ? `Utilisez la plateforme d'automatisation AIRA basée sur l'IA pour créer un espace numérique innovant pour SAP.` : lang === 'sp' ? 'Utilice la plataforma de automatización AIRA impulsada por IA para crear un espacio digital innovador para SAP.' : lang === 'ar' ? 'استخدم منصة التشغيل الآلي AIRA المدعومة بالذكاء الاصطناعي لإنشاء مساحة رقمية مبتكرة لـ SAP.' : lang === 'gr' ? 'für Salesforce' : ' Use the AI-Powered AIRA Automation Platform to create an innovative digital space for SAP.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader17.png"
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
      <Container maxWidth="lg">
        <Box
          sx={{ my: 10 }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5 }}>
              {lang === 'fr' ? `Accélérez votre transformation numérique en tant que chef d'entreprise en obtenant les données nécessaires ` : lang === 'sp' ? 'Logre una automatización perfecta en todos sus sistemas SAP y no SAP sin la molestia de proyectos de desarrollo extensos o una integración rígida. Acceda a la estabilidad, la implementación rápida y la gobernanza que necesita, junto con integraciones y componentes prediseñados para numerosos casos de uso cruciales.' : lang === 'ar' ? 'يمكن لأي شخص استخدام AIRA لتغيير ' : lang === 'gr' ? 'für Salesforce' : 'Anyone can use AIRA to change the way '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `pour SAP` : lang === 'sp' ? 'para SAP' : lang === 'ar' ? 'لـ SAP' : lang === 'gr' ? 'für SAP' : '  SAP works'}
              </span>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ my: 1, fontWeight: 600, lineHeight: 2, fontSize: "23px", textAlign: "center" }}
            >
              {lang === 'fr' ? `avec SAP &AIRA` : lang === 'sp' ? 'La plataforma AIRA es una aplicación de software aprobada por SAP. Esta nueva asociación hace posible que los clientes realicen cambios en sus negocios, muevan sistemas comerciales importantes a la nube y agreguen la plataforma AIRA a sus sistemas comerciales actuales.' : lang === 'ar' ? 'طريقة عمل SAP' : lang === 'gr' ? 'für Salesforce' : '   Speed up your digital transformation as a business leader by obtaining the necessary data with SAP & AIRA.'}
            </Typography>

            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/solutionmid.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ my: 1, fontWeight: 700 }}>

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, lineHeight: 2, fontSize: '20px' }}
                >
                  {lang === 'fr' ? `Les personnes qui utilisent SAP peuvent se concentrer sur des tâches plus critiques.` : lang === 'sp' ? 'Las personas que utilizan SAP pueden concentrarse en tareas más críticas.' : lang === 'ar' ? 'يمكن للأشخاص الذين يستخدمون SAP التركيز على المهام الأكثر أهمية.' : lang === 'gr' ? 'für Salesforce' : 'People who use SAP can concentrate on more critical tasks.'}

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Permettez aux robots de gérer des tâches gourmandes en informations, comme le traitement des commandes ou la mise à jour des données. En faisant cela, vous pouvez éviter des erreurs tout en ayant du temps pour une collaboration créative.` : lang === 'sp' ? 'Permita que los bots manejen trabajos que requieren mucha información, como procesar pedidos o actualizar datos. Al hacer esto, puede evitar errores y al mismo tiempo tener tiempo para la colaboración creativa.' : lang === 'ar' ? 'السماح للروبوتات بالتعامل مع المهام كثيفة المعلومات مثل معالجة الطلبات أو تحديث البيانات. من خلال القيام بذلك، يمكنك تجنب الأخطاء بينما يتوفر لديك الوقت للتعاون الإبداعي.' : lang === 'gr' ? 'für Salesforce' : ' Allow bots to handle information-intensive jobs like processing orders or updating data. By doing this, you may avoid mistakes while yet having time for creative collaboration.'}

                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={5} direction={'row-reverse'} mt={3}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/solutionmid2.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ my: 1, fontWeight: 700, fontSize: '20px' }}>

                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 5 }}>
                  {lang === 'fr' ? `Les personnes qui gèrent SAP peuvent simplifier leurs tâches.` : lang === 'sp' ? 'Logre una automatización perfecta en todos sus sistemas SAP y no SAP sin la molestia de proyectos de desarrollo extensos o una integración rígida. Acceda a la estabilidad, la implementación rápida y la gobernanza que necesita, junto con integraciones y componentes prediseñados para numerosos casos de uso cruciales.' : lang === 'ar' ? 'يمكن للأشخاص الذين يديرون SAP تبسيط مهامهم.' : lang === 'gr' ? 'für Salesforce' : 'Anyone can use AIRA to change the way SAP works.'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 400, lineHeight: 2, fontSize: "16px" }}
                >
                  {lang === 'fr' ? `Appliquez l'automatisation pour gérer des activités telles que l'administration des utilisateurs et l'organisation des données à l'intérieur et à l'extérieur de vos systèmes SAP..` : lang === 'sp' ? 'La plataforma AIRA es una aplicación de software aprobada por SAP. Esta nueva asociación hace posible que los clientes realicen cambios en sus negocios, muevan sistemas comerciales importantes a la nube y agreguen la plataforma AIRA a sus sistemas comerciales actuales.' : lang === 'ar' ? 'قم بتطبيق الأتمتة لإدارة الأنشطة مثل إدارة المستخدم وتنظيم البيانات داخل أنظمة SAP وخارجها.' : lang === 'gr' ? 'für Salesforce' : '   Speed up your digital transformation as a business leader by obtaining the necessary data with SAP & AIRA.'}
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={5} mt={3}>
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/solutionmid3.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ my: 1, fontWeight: 700 }}>

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, lineHeight: 2, fontSize: '20px' }}
                >
                  {lang === 'fr' ? `Responsables de l’assurance qualité SAP : Garantir une qualité supérieure.` : lang === 'sp' ? 'Las personas que administran SAP pueden simplificar sus tareas.' : lang === 'ar' ? 'مدراء ضمان الجودة في SAP: ضمان جودة أعلى.' : lang === 'gr' ? 'für Salesforce' : ' Managers of SAP quality assurance: Ensure higher quality.'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Automatisez les tests SAP à l'aide d'AIRA pour faciliter les mises à niveau et minimiser les erreurs.` : lang === 'sp' ? 'Aplique la automatización para gestionar actividades como la administración de usuarios y la organización de datos dentro y fuera de sus sistemas SAP..' : lang === 'ar' ? 'أتمتة اختبار SAP باستخدام AIRA لتسهيل الترقيات وتقليل الأخطاء.' : lang === 'gr' ? 'für Salesforce' : ' Automate SAP testing using AIRA to make upgrades easier and minimise mistakes.'}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: Colors.airaPrimary }}>
        <Box
          sx={{
            margin: "0 auto",
            width: "50%",
            py: 5,
          }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#fff" }}>
              {lang === 'fr' ? `Maximisez le retour sur investissement avec ` : lang === 'sp' ? 'AIREHiperautomatización para SAP' : lang === 'ar' ? 'AIRA فرط الأتمتة لـ SAP' : lang === 'gr' ? 'für Salesforce' : 'Provide every '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Salesforce combiné avecAIRA` : lang === 'sp' ? 'Utilice la plataforma de automatización AIRA impulsada por IA para crear un espacio digital innovador para SAP.' : lang === 'ar' ? 'استخدم منصة التشغيل الآلي AIRA المدعومة بالذكاء الاصطناعي لإنشاء مساحة رقمية مبتكرة لـ SAP.' : lang === 'gr' ? 'für Salesforce' : 'by integrating AIRA with Salesforce.'}
              </span>
            </Typography>
          </Stack>
          <Grid container spacing={2} sx={{ my: 3 }}>
            {lang === 'fr' ? AIRACANDODATA?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'sp' ? AIRACANDODATA1?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'ar' ? AIRACANDODATA2?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : lang === 'gr' ? AIRACANDODATA3?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            }) : AIRACANDODATA4?.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item?.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Box mt={5}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, textAlign: "center", fontSize: '16px' }}
          >
            {lang === 'fr' ? `Bénéficiez d’une automatisation transparente sur vos systèmes SAP et non-SAP sans vous soucier de projets de développement approfondis ou d’une intégration rigide. Accédez à la stabilité, au déploiement rapide et à la gouvernance dont vous avez besoin, ainsi qu'à des composants et des intégrations prédéfinis pour de nombreux cas d'utilisation cruciaux.` : lang === 'sp' ? 'Logre una automatización perfecta en todos sus sistemas SAP y no SAP sin la molestia de proyectos de desarrollo extensos o una integración rígida. Acceda a la estabilidad, la implementación rápida y la gobernanza que necesita, junto con integraciones y componentes prediseñados para numerosos casos de uso cruciales.' : lang === 'ar' ? 'حقق أتمتة سلسة عبر أنظمة SAP والأنظمة غير التابعة لـ SAP دون متاعب مشاريع التطوير الشاملة أو التكامل الصارم. يمكنك الوصول إلى الاستقرار والنشر السريع والحوكمة التي تحتاجها، إلى جانب المكونات وعمليات التكامل المعدة مسبقًا للعديد من حالات الاستخدام المهمة.' : lang === 'gr' ? 'für Salesforce' : ' Achieve seamless automation across your SAP and non-SAP systems without the hassle of extensive development projects or rigid integration. Access the stability, quick deployment, and governance you require, along with pre-built components and integrations for numerous crucial use cases.'}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, textAlign: "center", fontSize: '16px', my: 2 }}
          >
            {lang === 'fr' ? `La plateforme AIRA est une application logicielle approuvée par SAP. Ce nouveau partenariat permet aux clients d'apporter des modifications à leur entreprise, de déplacer des systèmes d'entreprise importants vers le cloud et d'ajouter la plateforme AIRA à leurs systèmes d'entreprise actuels.` : lang === 'sp' ? 'La plataforma AIRA es una aplicación de software aprobada por SAP. Esta nueva asociación hace posible que los clientes realicen cambios en sus negocios, muevan sistemas comerciales importantes a la nube y agreguen la plataforma AIRA a sus sistemas comerciales actuales.' : '  The AIRA Platform is a software application that SAP has approved. This new partnership makes it possible for customers to make changes to their business, move important business systems to the cloud, and add the AIRA Platform to their current business systems.'}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: 500, textAlign: "center", fontSize: '16px' }}
          >
            {lang === 'fr' ? `N'importe qui peut utiliser AIRA pour changer le fonctionnement de SAP.` : lang === 'sp' ? 'Cualquiera puede utilizar AIRA para cambiar la forma en que funciona SAP.' : lang === 'ar' ? 'يمكن لأي شخص استخدام AIRA لتغيير طريقة عمل SAP.' : lang === 'gr' ? 'für Salesforce' : 'Anyone can use AIRA to change the way SAP works.'}
          </Typography>
        </Box>
        <Box
          sx={{ my: 10, }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, textAlign: "center" }}
            >
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `pour Salesforce ` : lang === 'sp' ? 'Maximice el ROI con Salesforce ' : lang === 'ar' ? 'لـ Salesforce ' : lang === 'gr' ? 'für Salesforce ' : ' Maximise ROI with Salesforce combined with '}
              </span>
              {lang === 'fr' ? `pour Salesforce` : lang === 'sp' ? 'combinado con' : lang === 'ar' ? 'لـ Salesforce' : lang === 'gr' ? 'für Salesforce' : 'of'}
              {lang === 'fr' ? `pour Salesforce` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'لـ Salesforce' : lang === 'gr' ? 'für Salesforce' : 'AIRA'}
            </Typography>
            <Box sx={{ width: { xs: "100%", lg: "85%" } }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 500,
                  width: { xs: "100%", lg: "85%" },
                  lineHeight: 2,
                  textAlign: "center",
                  mx: "auto"
                }}
              >
              </Typography>
            </Box>
            <Grid sx={{ pt: 4 }} container spacing={5} justifyContent="center" alignItems="center">
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/benefit1.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card raised>
                  <CardContent sx={{ p: 5 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                    >
                      {lang === 'fr' ? `Finance` : lang === 'sp' ? 'Finanzas' : lang === 'ar' ? 'لـ Salesforce' : lang === 'gr' ? 'für Salesforce' : ' Finance'}
                    </Typography>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Accélérez vos opérations financières avec AIRA` : lang === 'sp' ? 'Acelere sus operaciones financieras con AIRA' : lang === 'ar' ? 'تمويل' : lang === 'gr' ? 'für Salesforce' : 'Speedup your finance operations with AIRA'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Saisie/recouvrement des factures` : lang === 'sp' ? 'Entrada/cobro de facturas' : lang === 'ar' ? 'قم بتسريع عملياتك المالية مع AIRA' : lang === 'gr' ? 'für Salesforce' : ' Invoice entry/collection.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Validation/rapprochement` : lang === 'sp' ? 'Validación/conciliación' : lang === 'ar' ? 'إدخال/تحصيل الفاتورة' : lang === 'gr' ? 'für Salesforce' : 'Validation/reconciliation.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Paie` : lang === 'sp' ? 'Nómina de sueldos' : lang === 'ar' ? 'كشف رواتب' : lang === 'gr' ? 'für Salesforce' : 'Payroll.'}
                        </Typography>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid
              direction="row-reverse"
              sx={{ pt: 4 }}
              container
              spacing={5}
              justifyContent="left"
              alignItems="center"
            >
              <Grid item xs={12} md={6}>
                <Image
                  src="/images/solutions/banking/benefit2.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card raised>
                  <CardContent sx={{ p: 5 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                    >
                      {lang === 'fr' ? `Fabrication et chaîne d'approvisionnement` : lang === 'sp' ? 'Cadena de fabricación y suministro' : lang === 'ar' ? 'التصنيع وسلسلة التوريد' : lang === 'gr' ? 'für Salesforce' : 'Manufacturing and Supply Chain'}
                    </Typography>

                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Accélérer les opérations de fabrication et de chaîne d’approvisionnement` : lang === 'sp' ? 'Acelerar las operaciones de la cadena de fabricación y suministro.' : lang === 'ar' ? 'تسريع عمليات التصنيع وسلسلة التوريد' : lang === 'gr' ? 'für Salesforce' : 'Speed up the manufacturing and supply chain operations'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Planification et mise à jour des stocks` : lang === 'sp' ? 'Planificación y actualización de inventario' : lang === 'ar' ? 'تخطيط وتحديث المخزون' : lang === 'gr' ? 'für Salesforce' : ' Inventory planning & updating.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Prévision de la demande et de l’offre` : lang === 'sp' ? 'Previsión de oferta y demanda.' : lang === 'ar' ? 'التنبؤ بالطلب والعرض' : lang === 'gr' ? 'für Salesforce' : 'Demand and supply forecasting.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Gestion de la logistique` : lang === 'sp' ? 'Gestion de logistica' : lang === 'ar' ? 'الإدارة اللوجستية' : lang === 'gr' ? 'für Salesforce' : 'Logistics management.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Documents d'expédition` : lang === 'sp' ? 'Documentación de envío' : lang === 'ar' ? 'وثائق الشحن' : lang === 'gr' ? 'für Salesforce' : 'Shipping documentation.'}
                        </Typography>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid
            sx={{ pt: 4 }}
            container
            spacing={5}
            justifyContent="left"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Image
                src="/images/solutions/banking/benefit3.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card raised>
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                  >
                    {lang === 'fr' ? `Commercialisation` : lang === 'sp' ? 'Marketing' : lang === 'ar' ? 'تسويق' : lang === 'gr' ? 'für Salesforce' : 'Marketing'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Automatisez les téléchargements de leads` : lang === 'sp' ? 'Automatizar las cargas de clientes potenciales' : lang === 'ar' ? 'أتمتة تحميلات الرصاص' : lang === 'gr' ? 'für Salesforce' : 'Automate lead uploads.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Gérer les campagnes` : lang === 'sp' ? 'Manejar campañas' : lang === 'ar' ? 'التعامل مع الحملات' : lang === 'gr' ? 'für Salesforce' : 'Handle campaigns.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Combiner les rapports` : lang === 'sp' ? 'Combinar informes' : lang === 'ar' ? 'الجمع بين التقارير' : lang === 'gr' ? 'für Salesforce' : '  Combine reports.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Maintenir la cohérence des données sur toutes les plateformes marketing.` : lang === 'sp' ? 'Mantenga la coherencia de los datos en todas las plataformas de marketing.' : lang === 'ar' ? 'الحفاظ على اتساق البيانات عبر منصات التسويق' : lang === 'gr' ? 'für Salesforce' : ' Maintain data consistency across marketing platforms.'}
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid
            sx={{ pt: 4 }}
            container
            spacing={5}
            direction={"row-reverse"}
            justifyContent="left"
            alignItems="center"

          >
            <Grid item xs={12} md={6}>
              <Image
                src="/images/solutions/banking/benefit4.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card raised>
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                  >
                    {lang === 'fr' ? `Ventes` : lang === 'sp' ? 'Ventas' : lang === 'ar' ? 'مبيعات' : lang === 'gr' ? 'für Salesforce' : '  Sales'}
                  </Typography>

                  <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                    {lang === 'fr' ? `Concentrez-vous sur l'aide à vos clients, pas seulement sur votre système.` : lang === 'sp' ? 'Concéntrese en ayudar a sus clientes, no sólo a su sistema.' : lang === 'ar' ? 'ركز على مساعدة عملائك، وليس فقط على نظامك.' : lang === 'gr' ? 'für Salesforce' : ' Focus on helping your customers, not just on your system.'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `La saisie des commandes` : lang === 'sp' ? 'Orden de entrada' : lang === 'ar' ? 'ادخال الطلبية' : lang === 'gr' ? 'für Salesforce' : ' Order entry.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `GRC` : lang === 'sp' ? 'CRM' : lang === 'ar' ? 'إدارة علاقات العملاء' : lang === 'gr' ? 'für Salesforce' : ' CRM.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Cartes de pointage` : lang === 'sp' ? 'Cuadros de mando' : lang === 'ar' ? '	بطاقات الأداء' : lang === 'gr' ? 'für Salesforce' : 'Scorecards.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Mise à jour des données de paiement` : lang === 'sp' ? 'Actualización de datos de pago' : lang === 'ar' ? 'تحديث معلومات الدفع' : lang === 'gr' ? 'für Salesforce' : 'Payment data updating.'}
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </Stack>
        </Box>
      </Container>

      {/* <Box sx={{ backgroundColor: "#f8f9fb", py: 6 }}>
        <div className="btn_group btn-group1">
          <button onClick={() => {
            router.push('/contact');
          }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            Leverage AIRA for your Enterprise Today

            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
          <button onClick={() => {
            router.push('/contact');
          }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            Book a Demo Consultation Call with our Product Team

            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
        </div>
      </Box> */}

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
}

export default Index;
