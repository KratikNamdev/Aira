import React,{useState,useEffect} from 'react';
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
    title:"Précision et conformité",
    text: "L'hyper-automatisation d'AIRA garantit la précision des flux de travail de soins de santé tout en maintenant la conformité réglementaire.",
  },
  {
    id: 2,
    title:"Optimisation du flux de travail",
    text: "Améliorez l’efficacité opérationnelle en automatisant les tâches répétitives, permettant ainsi aux professionnels de santé de se concentrer sur les soins critiques aux patients.",
  },
  {
    id: 3,
    title:"Sécurité des données",
    text: "AIRA fournit des mesures robustes de sécurité des données, protégeant les informations sensibles sur les soins de santé et garantissant la conformité aux normes de l'industrie.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    title:"Precisión y cumplimiento",
    text: "La hiperautomatización de AIRA garantiza la precisión en los flujos de trabajo de atención médica y al mismo tiempo mantiene el cumplimiento normativo.",
  },
  {
    id: 2,
    title:"Optimización del flujo de trabajo",
    text: "Mejore la eficiencia operativa automatizando tareas repetitivas, permitiendo a los profesionales de la salud centrarse en la atención de pacientes críticos.",
  },
  {
    id: 3,
    title:"Seguridad de datos",
    text: "AIRA proporciona sólidas medidas de seguridad de datos, salvaguardando la información médica confidencial y garantizando el cumplimiento de los estándares de la industria.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    title:"الدقة والامتثال",
    text: "تضمن الأتمتة الفائقة لـ AIRA الدقة في سير عمل الرعاية الصحية مع الحفاظ على الامتثال التنظيمي.",
  },
  {
    id: 2,
    title:"تحسين سير العمل",
    text: "تعزيز الكفاءة التشغيلية من خلال أتمتة المهام المتكررة، مما يسمح لمتخصصي الرعاية الصحية بالتركيز على رعاية المرضى الحرجة.",
  },
  {
    id: 3,
    title:"أمن البيانات",
    text: "توفر AIRA تدابير قوية لأمن البيانات، وحماية معلومات الرعاية الصحية الحساسة وضمان الامتثال لمعايير الصناعة.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    title:"Präzision und Compliance",
    text: "Die Hyperautomatisierung von AIRA sorgt für Präzision in den Arbeitsabläufen im Gesundheitswesen und gewährleistet gleichzeitig die Einhaltung gesetzlicher Vorschriften.",
  },
  {
    id: 2,
    title:"Workflow-Optimierung",
    text: "Verbessern Sie die betriebliche Effizienz durch die Automatisierung sich wiederholender Aufgaben, sodass sich medizinisches Fachpersonal auf die Versorgung kritischer Patienten konzentrieren kann.",
  },
  {
    id: 3,
    title:"Datensicherheit",
    text: "AIRA bietet robuste Datensicherheitsmaßnahmen, schützt vertrauliche Gesundheitsinformationen und stellt die Einhaltung von Industriestandards sicher.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    title:"Precision and Compliance",
    text: "AIRA's hyper-automation ensures precision in healthcare workflows while maintaining regulatory compliance.",
  },
  {
    id: 2,
    title:"Workflow Optimization",
    text: "Enhance operational efficiency by automating repetitive tasks, allowing healthcare professionals to focus on critical patient care.",
  },
  {
    id: 3,
    title:"Data Security",
    text: "AIRA provides robust data security measures, safeguarding sensitive healthcare information and ensuring compliance with industry standards.",
  },
];

const Index = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage.getItem('lang'));
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
                
                  {lang === 'fr' ? `Transformations numériques des soins de santé et du médical` : lang === 'sp' ? 'Transformaciones digitales médicas y sanitarias' : lang === 'ar' ? 'الرعاية الصحية والتحولات الرقمية الطبية' : lang === 'gr' ? 'Mit AIRA' : 'Healthcare & Medical Digital Transformations'} {' '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA Hyper-automation'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                  {lang === 'fr' ? `Créez une expérience de santé robuste avec une personnalisation percutante, une intelligence diagnostique plus approfondie et une gestion personnalisée des patients.` : lang === 'sp' ? 'Cree una experiencia sanitaria sólida con una personalización impactante, una inteligencia de diagnóstico más profunda y una gestión personalizada de los pacientes.' : lang === 'ar' ? 'قم ببناء تجربة رعاية صحية قوية مع التخصيص المؤثر والذكاء التشخيصي الأعمق وإدارة مخصصة للمرضى' : lang === 'gr' ? 'Mit AIRA' : '  Build robust Healthcare experience with impactful personalization, deeper diagnostic intelligence and customised patient management.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader14.png"
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
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Hyper-automatisation ` : lang === 'sp' ? 'Hiperautomatización' : lang === 'ar' ? 'تساعدك الأتمتة المفرطة ' : lang === 'gr' ? 'Mit AIRA' : 'Hyper-automation'}
              </span> {" "}
              {lang === 'fr' ? `vous aide à réduire la friction de` : lang === 'sp' ? 'le ayuda a reducir la fricción de' : lang === 'ar' ? 'على تقليل الاحتكاك' : lang === 'gr' ? 'Mit AIRA' : ' helps you reduce friction from'}

            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5, textAlign: 'center' }}>
            {lang === 'fr' ? `Profilage diagnostique | Profilage client à 360 degrés | Facturation et paiements | Optimisation des consultations de santé | Gestion des déclarations` : lang === 'sp' ? 'Perfiles de diagnóstico | Perfilado de clientes de 360 grados | Facturación y pagos | Optimización de consultas sanitarias | Gestión de reclamaciones' : lang === 'ar' ? 'التنميط التشخيصي | ملف تعريف العملاء بزاوية 360 درجة | الفواتير والمدفوعات | تحسين استشارات الرعاية الصحية | إدارة المطالبات' : lang === 'gr' ? 'Mit AIRA' : ' Diagnostic Profiling | 360-degree Customer Profiling | Billing & Payments | Healthcare Consultation Optimization | Claims Management'}
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
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 600, lineHeight: 2, fontSize: '20px' }}
                >
                  {lang === 'fr' ? `AIRA transforme les opérations basées sur les soins de santé` : lang === 'sp' ? 'AIRA transforma las operaciones basadas en la atención médica' : lang === 'ar' ? 'تعمل AIRA على تحويل العمليات القائمة على الرعاية الصحية' : lang === 'gr' ? 'Mit AIRA' : ' AIRA transforms Healthcare based Operations'}

                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                {lang === 'fr' ? `Compte tenu des exigences rigoureuses du secteur de la santé, il devient essentiel de fournir un impact de haute précision et pertinent sur tous les aspects d'une entreprise de soins de santé, qu'il s'agisse de la tenue à jour et pertinente des dossiers clients ou de la suppression des erreurs manuelles des flux de travail.` : lang === 'sp' ? 'Con las rigurosas demandas del campo de la atención médica, resulta fundamental ofrecer un impacto de alta precisión y relevancia en todos los aspectos de una empresa de atención médica, ya sea manteniendo registros de clientes actualizados y relevantes para eliminar errores manuales de los flujos de trabajo.' : lang === 'ar' ? 'مع المتطلبات الصارمة لمجال الرعاية الصحية، يصبح من الأهمية بمكان تقديم تأثير عالي الدقة وذو صلة عبر كل جانب من جوانب مؤسسة الرعاية الصحية، سواء كان ذلك الحفاظ على سجلات العملاء المحدثة وذات الصلة لإزالة الأخطاء اليدوية من سير العمل.' : lang === 'gr' ? 'Mit AIRA' : 'With the rigorous demands of the Healthcare field, it becomes critical to deliver high relevant high accuracy impact across every aspect of an Healthcare enterprise, be it maintaining updated and relevant customer records to removing manual errors from workflows.'}
                  
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Transformez la gestion des soins de santé avec une optimisation supérieure des services ainsi qu’une gestion des données de diagnostic plus pertinente grâce à la plateforme d’hyper-automatisation d’AIRA.` : lang === 'sp' ? 'Transforme la gestión de la atención sanitaria con una optimización superior del servicio, así como una gestión de datos de diagnóstico más relevante con la plataforma de hiperautomatización de AIRA.' : lang === 'ar' ? 'قم بتحويل إدارة الرعاية الصحية من خلال تحسين الخدمة الفائق بالإضافة إلى إدارة البيانات التشخيصية الأكثر صلة باستخدام نظام التشغيل الآلي الفائق الخاص بـ AIRA.' : lang === 'gr' ? 'Mit AIRA' : 'Transform healthcare management with superior service optimization as well as more relevant diagnostic data management with AIRA’s hyper-automation platform. '}
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
              <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'مع آيرا' : lang === 'gr' ? 'Mit AIRA' : 'AIRA'}
              </span> {" "}
              {lang === 'fr' ? `vous permet de` : lang === 'sp' ? 'te permite' : lang === 'ar' ? 'مع آيرا' : lang === 'gr' ? 'Mit AIRA' : ' enables you to'}
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

      <Box sx={{ backgroundColor: "#f8f9fb", py: 6 }}>
        <Container maxWidth="lg">
          <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography
              variant="h5"
              sx={{ fontWeight: 600, textAlign: "center" }}
            >
              <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `Avantages` : lang === 'sp' ? 'Beneficios' : lang === 'ar' ? 'فو' : lang === 'gr' ? 'Vorteile' : 'Benefits'}
              </span> {' '}
              
              {lang === 'fr' ? `de` : lang === 'sp' ? 'de' : lang === 'ar' ? 'ائد' : lang === 'gr' ? 'von' : 'of'}
         {' '}
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'Transformaciones digitales de la aviación' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'AIRA' : 'AIRA'}
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
               {lang === 'fr' ? `Avecrigueurs de l'intelligence médicale et des soins aux patients, l'industrie de la santé bénéficie grandement des capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'un RPA fiable mis à l'échelle par l'IA adaptative. ` : lang === 'sp' ? 'Conrigores de inteligencia médica y atención al paciente, la industria de la salud se beneficia enormemente de las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa. ' : lang === 'ar' ? 'بفضل صرامة الذكاء الطبي ورعاية المرضى، تستفيد صناعة الرعاية الصحية بشكل كبير من إمكانات الأتمتة الفائقة لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي' : lang === 'gr' ? 'Mit AIRA' : ' With rigours of medical intelligence and patient care, the Healthcareindustry benefits highly from the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI.'}
              </Typography>
            </Box>

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
                      {lang === 'fr' ? `Offrir l’excellence en matière de gestion des patients` : lang === 'sp' ? 'Ofrezca excelencia en la gestión de pacientes' : lang === 'ar' ? 'تقديم التميز في إدارة المرضى' : lang === 'gr' ? 'Mit AIRA' : 'Deliver Patient Management Excellence'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Gestion du profil client à 360 degrés en temps réel` : lang === 'sp' ? 'Gestión de perfiles de clientes de 360 grados en tiempo real' : lang === 'ar' ? 'إدارة ملفات تعريف العملاء في الوقت الفعلي بزاوية 360 درجة' : lang === 'gr' ? 'Mit AIRA' : ' Real-time 360-degree Customer Profile Management.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Optimisation accélérée de la prestation du service client avec planification et rendez-vous automatisés` : lang === 'sp' ? 'Optimización acelerada de la prestación del servicio al cliente con programación y citas automatizadas' : lang === 'ar' ? 'تسريع تحسين تقديم خدمة العملاء من خلال الجدولة والمواعيد الآلية' : lang === 'gr' ? 'Mit AIRA' : ' Accelerated Customer Service Delivery Optimization with automated scheduling and appointment.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Diagnostics médicaux hyper-automatisés et tenue des dossiers des patients hospitalisés` : lang === 'sp' ? 'Hiperautomatización de diagnósticos médicos y mantenimiento de registros de pacientes hospitalizados.' : lang === 'ar' ? 'أتمتة التشخيص الطبي وصيانة سجلات المرضى الداخليين' : lang === 'gr' ? 'Mit AIRA' : 'Hyper-automate medical diagnostics and in-patient record maintenance.'}
                        </Typography>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
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
                    {lang === 'fr' ? `Gestion des réclamations des patients par défriction` : lang === 'sp' ? 'Gestión de reclamaciones de pacientes sin fricción' : lang === 'ar' ? 'إزالة الاحتكاك إدارة مطالبات المرضى' : lang === 'gr' ? 'Mit AIRA' : 'De-friction Patient Claims Management'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Automatisez le traitement MediClaim et le traitement des documents` : lang === 'sp' ? 'Automatice el procesamiento de MediClaim y el procesamiento de documentos' : lang === 'ar' ? 'أتمتة معالجة MediClaim ومعالجة المستندات' : lang === 'gr' ? 'Mit AIRA' : 'Automate MediClaim Processing & Document Processing.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Tenir des registres traçables pour les audits et les analyses.` : lang === 'sp' ? 'Mantenga registros rastreables para auditorías y análisis.' : lang === 'ar' ? 'الاحتفاظ بسجلات يمكن تتبعها لعمليات التدقيق والتحليل.' : lang === 'gr' ? 'Mit AIRA' : ' Maintain traceable records for audits and analysis.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Créez des règles et des exceptions personnalisées pour les adresses personnalisées.` : lang === 'sp' ? 'Cree reglas personalizadas y excepciones para direcciones personalizadas.' : lang === 'ar' ? 'إنشاء قواعد واستثناءات مخصصة للعناوين المخصصة.' : lang === 'gr' ? 'Mit AIRA' : 'Build custom rules and exceptions for personalised addressals. '}
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg">
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
                style={{ width: '100%', height: 'auto', borderRadius: 8, }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card raised>
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                  >
                    {lang === 'fr' ? `Augmenter l’impact de l’excellence en matière de soins de santé` : lang === 'sp' ? 'Escalar el impacto de la excelencia en la atención sanitaria' : lang === 'ar' ? 'نطاق تأثير التميز في الرعاية الصحية' : lang === 'gr' ? 'Mit AIRA' : ' Scale Healthcare Excellence Impact'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `	Profitez de Predictive Healthcare Analytics pour rationaliser chaque processus` : lang === 'sp' ? 'Aproveche Predictive Healthcare Analytics para optimizar cada proceso' : lang === 'ar' ? 'استفد من تحليلات الرعاية الصحية التنبؤية لتبسيط كل عملية' : lang === 'gr' ? 'Mit AIRA' : 'Take advantage of Predictive Healthcare Analytics for streamlining every process.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Concevoir des flux de travail à grande échelle avec une pertinence élevée en matière de low-code` : lang === 'sp' ? 'Diseñe flujos de trabajo a escala con relevancia de alta precisión y bajo código' : lang === 'ar' ? 'تصميم سير عمل على نطاق واسع مع صلة عالية الدقة بالرمز المنخفض' : lang === 'gr' ? 'Mit AIRA' : 'Design at scale workflows with low-code high accuracy relevance.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      {lang === 'fr' ? `Mondialiser Accès aux données médicales des patients pour les médecins, les patients et le personnel pour une expérience client supérieure.` : lang === 'sp' ? '	Globalizar Acceso a los datos médicos de los pacientes para médicos, pacientes y personal para una experiencia superior del cliente.' : lang === 'ar' ? 'عولمة الوصول إلى البيانات الطبية للمرضى للأطباء والمرضى والموظفين للحصول على تجربة عملاء متميزة.' : lang === 'gr' ? 'Mit AIRA' : 'Globalise patient medical data access for doctors, patients and staff for superior customer experience.'}
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* <div className="" style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <div className="btn_group">
            <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Mit AIRA' : 'Leverage AIRA for your Enterprise Today'}
            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
            <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang === 'sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang === 'ar' ? 'احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang === 'gr' ? 'Mit AIRA' : ' Book a Demo Consultation Call with our Product Team'}
            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
          </div>
        </div> */}
      </Box>
<br/>
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
};

export default Index;
