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
    title:"Amélioration de l'efficacité",
    text: "L'hyper-automatisation d'AIRA rationalise les opérations BPO, réduisant les efforts manuels et améliorant l'efficacité globale.",
  },
  {
    id: 2,
    title:"Réduction des erreurs",
    text: "Grâce à une automatisation intelligente, AIRA minimise les erreurs, garantissant l'exactitude du traitement des données et des interactions avec les clients au sein du secteur BPO.",
  },
  {
    id: 3,
    title:"Solutions évolutives",
    text: "AIRA fournit des solutions évolutives adaptées aux besoins BPO, s'adaptant à l'évolution des charges de travail et optimisant l'utilisation des ressources.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    title:"Aumento de la eficiencia",
    text: "La hiperautomatización de AIRA agiliza las operaciones de BPO, reduce los esfuerzos manuales y mejora la eficiencia general.",
  },
  {
    id: 2,
    title:"Reducción de errores",
    text: "Con la automatización inteligente, AIRA minimiza los errores, garantizando la precisión en el procesamiento de datos y las interacciones con los clientes dentro del sector BPO.",
  },
  {
    id: 3,
    title:"Soluciones escalables",
    text: "AIRA ofrece soluciones escalables adaptadas a las necesidades de BPO, adaptándose a las cargas de trabajo cambiantes y optimizando la utilización de recursos.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    title:"تعزيز الكفاءة",
    text: "يعمل التشغيل الآلي الفائق لـ AIRA على تبسيط عمليات تعهيد العمليات التجارية (BPO)، مما يقلل من الجهود اليدوية ويعزز الكفاءة العامة.",
  },
  {
    id: 2,
    title:"تقليل الخطأ",
    text: "بفضل الأتمتة الذكية، تعمل AIRA على تقليل الأخطاء، مما يضمن الدقة في معالجة البيانات وتفاعلات العملاء داخل قطاع تعهيد العمليات التجارية (BPO).",
  },
  {
    id: 3,
    title:"حلول قابلة للتطوير",
    text: "توفر AIRA حلولاً قابلة للتطوير مصممة خصيصًا لاحتياجات BPO، والتكيف مع أعباء العمل المتغيرة وتحسين استخدام الموارد.",
  },
];

const AIRACANDODATA3 = [
  {
    id: 1,
    title:"Effizienzsteigerung",
    text: "Die Hyperautomatisierung von AIRA rationalisiert BPO-Abläufe, reduziert den manuellen Aufwand und steigert die Gesamteffizienz.",
  },
  {
    id: 2,
    title:"Fehlerreduzierung",
    text: "Durch intelligente Automatisierung minimiert AIRA Fehler und sorgt für Genauigkeit bei der Datenverarbeitung und Kundeninteraktionen im BPO-Sektor.",
  },
  {
    id: 3,
    title:"Skalierbare Lösungen",
    text: "AIRA bietet skalierbare Lösungen, die auf BPO-Anforderungen zugeschnitten sind, sich an wechselnde Arbeitslasten anpassen und die Ressourcennutzung optimieren.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    title:"Efficiency Boost",
    text: "AIRA's hyper-automation streamlines BPO operations, reducing manual efforts and enhancing overall efficiency.",
  },
  {
    id: 2,
    title:"Error Reduction",
    text: "With intelligent automation, AIRA minimises errors, ensuring accuracy in data processing and client interactions within the BPO sector.",
  },
  {
    id: 3,
    title:"Scalable Solutions",
    text: "AIRA provides scalable solutions tailored for BPO needs, adapting to changing workloads and optimising resource utilisation.",
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
                  {lang === 'fr' ? `Transformations numériques de l'externalisation des processus métiers (BPO)` : lang === 'sp' ? 'Transformaciones digitales de subcontratación de procesos de negocio (BPO)' : lang === 'ar' ? 'الاستعانة بمصادر خارجية للعمليات التجارية (BPO) التحولات الرقمية' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : ' Business Process Outsourcing (BPO) Digital Transformations'} {' '}
                    <span style={{ color: Colors.airaSecondary }}>
                    {lang === 'fr' ? `Avec AIRA Hyper-automatisation` : lang === 'sp' ? 'Con AIRA Hiperautomatización' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'With AIRA Hyper-automation'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                  {lang === 'fr' ? `Service client amélioré, gestion des services, délégation de tickets et adressage d'appel grâce à notre plateforme d'hyper-automatisation.` : lang === 'sp' ? 'Servicio al cliente mejorado, gestión de servicios, delegación de tickets y dirección de llamadas con nuestra plataforma de hiperautomatización.' : lang === 'ar' ? 'خدمة عملاء محسّنة وإدارة الخدمة وتفويض التذاكر وعناوين الاتصال من خلال نظام التشغيل الآلي الفائق الخاص بنا.' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : ' Enhanced Customer Service, Service Manage, Ticket Delegation and Call Addressal with our hyper-automation platform.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader12.png"
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
              {lang === 'fr' ? `Hyper-automatisation` : lang === 'sp' ? 'Hiperautomatización ' : lang === 'ar' ? 'الأتمتة' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : '  Hyper-automation'} {' '}
              <span style={{ color: Colors.airaSecondary }}>
               
               {lang === 'fr' ? `t'aide` : lang === 'sp' ? 'le ayuda' : lang === 'ar' ? 'المفرطة تساعدك' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Financial Digital Transformations'}
              </span>
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 5 }}>
            {lang === 'fr' ? `Optimisation du service client | Automatisation des tickets de service | Délégation de tickets intelligents` : lang === 'sp' ? 'Optimización del servicio al cliente | Automatización de tickets de servicio | Delegación de Tickets Inteligentes' : lang === 'ar' ? 'تحسين خدمة العملاء | أتمتة خدمة التذاكر | تفويض التذاكر الذكية' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : ' Customer Service Optimization | Service Ticket Automation | Smart Ticket Delegation'}
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
                  {lang === 'fr' ? `AIRA transforme l'externalisation des processus métiers (BPO)` : lang === 'sp' ? 'AIRA transforma la subcontratación de procesos de negocio (BPO)' : lang === 'ar' ? 'تقوم AIRA بتحويل الاستعانة بمصادر خارجية للعمليات التجارية (BPO)' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'AIRA transforms Business Process Outsourcing (BPO)'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  
                  {lang === 'fr' ? `Le secteur de l'externalisation des processus métiers (BPO) constitue l'épine dorsale de nombreuses entreprises, garantissant une reconnaissance plus fluide des préoccupations des clients et fournissant des marques importantes au flux de communication des clients.` : lang === 'sp' ? 'La industria de subcontratación de procesos empresariales (BPO) es la columna vertebral de muchas empresas, lo que garantiza un reconocimiento más fluido de las inquietudes de los clientes y ofrece marcas importantes al flujo de comunicación con los clientes.' : lang === 'ar' ? 'تقف صناعة الاستعانة بمصادر خارجية للعمليات التجارية (BPO) بمثابة العمود الفقري للعديد من المؤسسات، مما يضمن إقرارات أكثر سلاسة بمخاوف العملاء وتقديم العلامات التجارية المهمة لتدفق اتصالات العملاء.' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'The Business Process Outsourcing (BPO) industry stands as the backbone of many enterprises, ensuring smoother customer concern acknowledgements and delivering important brands to customer communication flow.'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2 , fontSize: '16px'}}
                >
                 {lang === 'fr' ? `Transformez l'entreprise du secteur BPO grâce à l'hyper-automatisation d'AIRA, notamment la possibilité de supprimer les redondances, d'hyper-automatiser les tâches répétitives et d'optimiser les processus sur toute la longueur et la largeur de la hiérarchie de l'entreprise.` : lang === 'sp' ? 'Transforme la empresa de la industria BPO con la hiperautomatización de AIRA, que incluye la capacidad de eliminar la redundancia, hiperautomatizar tareas repetitivas y escalar la optimización de procesos a lo largo y ancho de la jerarquía empresarial.' : lang === 'ar' ? 'قم بتحويل مؤسسة صناعة تعهيد عمليات تعهيد العمليات (BPO) من خلال الأتمتة الفائقة بواسطة AIRA بما في ذلك القدرة على إزالة التكرار والأتمتة المفرطة للمهام المتكررة وتوسيع نطاق تحسين العمليات عبر طول وعرض التسلسل الهرمي للمؤسسة.' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Transform the BPO industry enterprise with hyper-automation by AIRA including the ability to remove redundancy, hyper-automate repetitive tasks and scale process optimization across the length and width of enterprise hierarchy.'}
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
              {lang === 'fr' ? `AIRA` : lang === 'sp' ? 'AIRE' : lang === 'ar' ? 'AIRA' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : ' AIRA enables'}
              </span> {" "}
              {lang === 'fr' ? `vous permet de` : lang === 'sp' ? 'te permite' : lang === 'ar' ? 'تمكنك من' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'you to'}
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
              </span> 
              {' '}
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
                {lang === 'fr' ? `Alors que les exigences humaines à grande échelle et les résolutions plus rapides sont essentielles, le secteur du BPO bénéficie grandement des capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'un RPA fiable mis à l'échelle par l'IA adaptative. ` : lang === 'sp' ? 'Dado que los requisitos centrados en el ser humano a gran escala y las resoluciones más rápidas son fundamentales, la industria BPO se beneficia enormemente de las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa. ' : lang === 'ar' ? 'نظرًا لأهمية المتطلبات واسعة النطاق التي تتمحور حول الإنسان والقرارات السريعة، تستفيد صناعة تعهيد العمليات (BPO) بشكل كبير من إمكانات الأتمتة الفائقة لـ AIRA، مع مجموعة الاندفاع المزدوج من RPA الموثوق به والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي.' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : '  With large-scale human centric requirements and speedier resolutions being critical, the BPO industry benefits highly from the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI. '}
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
                      {lang === 'fr' ? `Appliquer une meilleure gestion des effectifs` : lang === 'sp' ? 'Imponer una mejor gestión de la fuerza laboral' : lang === 'ar' ? 'فرض إدارة أفضل للقوى العاملة' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Enforce Better Workforce management'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Une main-d'œuvre robotisée pour augmenter le temps et les ressources` : lang === 'sp' ? 'Fuerza laboral robótica para aumentar el tiempo y los recursos' : lang === 'ar' ? 'القوى العاملة الروبوتية لزيادة الوقت والموارد' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Robotic workforce to ramp-up time & resources.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Engager les collaborateurs dans des tâches à valeur ajoutée` : lang === 'sp' ? '	Involucrar a los empleados en tareas de valor agregado' : lang === 'ar' ? 'إشراك الموظفين في المهام ذات القيمة المضافة' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Engage employees in value adding tasks.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Automatisez les systèmes pour une meilleure gestion des employés.` : lang === 'sp' ? 'Automatizar sistemas para una mejor gestión de los empleados.' : lang === 'ar' ? 'أتمتة الأنظمة لإدارة أفضل للموظفين.' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Automate systems for better employee management.'}
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
                    {lang === 'fr' ? `Accélérer l’impact sur la rentabilité` : lang === 'sp' ? 'Acelerar el impacto en la rentabilidad' : lang === 'ar' ? 'تسريع تأثير كفاءة التكلفة' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : '  Accelerate Cost Efficiency Impact'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Réduire les coûts d'exploitation de 25 à 50 %.` : lang === 'sp' ? 'Reducir los costos operativos entre un 25% y un 50%.' : lang === 'ar' ? 'خفض تكاليف التشغيل بنسبة 25%-50%.' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : '	Bring down operating costs by 25%-50%.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Réduisez le temps investi dans la promotion des ventes` : lang === 'sp' ? '	Reducir el tiempo invertido en promocionar las ventas.' : lang === 'ar' ? '	- تقليل الوقت المستثمر في ترويج المبيعات' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Reduce the time invested in promoting sales.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Automatisez le recrutement, l’attrition et les opérations` : lang === 'sp' ? 'Automatizar la contratación, el desgaste y las operaciones' : lang === 'ar' ? '	أتمتة التوظيف والاستنزاف والعمليات' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : '	Automate hiring, attrition & operations.'}
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
                    {lang === 'fr' ? `Automatisez le recrutement, l’attrition et les opérations` : lang === 'sp' ? 'Seguridad de datos mejorada' : lang === 'ar' ? 'تعزيز أمن البيانات' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Enhanced Data Security'}
                  </Typography>

                  <ul>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Intégration transparente pour une précision à 100 %` : lang === 'sp' ? 'Integración perfecta para una precisión del 100%' : lang === 'ar' ? 'تكامل سلس لضمان الدقة بنسبة 100%' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : '	Seamless integration for 100% accuracy.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Éliminez la ségrégation des infrastructures et les couches de sécurité` : lang === 'sp' ? 'Elimine la segregación de infraestructura y las capas de seguridad' : lang === 'ar' ? '	القضاء على فصل البنية التحتية وطبقات الأمان' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : '	Eliminate infrastructure segregation & security layers.'}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                        {lang === 'fr' ? `Risque opérationnel réduit pour des performances constantes` : lang === 'sp' ? 'Menor riesgo operativo para un rendimiento consistente' : lang === 'ar' ? '	انخفاض المخاطر التشغيلية للأداء المتسق' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Lower operational risk for consistent performance.'}
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* <div className="" style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
          <div className="btn_group">
            <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            {lang === 'fr' ? `Tirez parti d’AIRA pour votre entreprise dès aujourd’hui` : lang === 'sp' ? 'Aproveche AIRA para su empresa hoy' : lang === 'ar' ? 'استفد من AIRA لمؤسستك اليوم' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : ' Try AIRA for your Enterprise'}
            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span></button>
            <button onClick={()=>{
                      router.push('/contact');
                    }} className="MuiButtonBase-root cus-btn-0 MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium text-nowrap css-htjs4m-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
            {lang === 'fr' ? `Réservez un appel de consultation de démonstration avec notre équipe produit` : lang === 'sp' ? 'Reserve una llamada de consulta de demostración con nuestro equipo de producto' : lang === 'ar' ? 'احجز مكالمة استشارية تجريبية مع فريق المنتج لدينا' : lang === 'gr' ? 'Finanzielle digitale Transformationen' : 'Book a Demo Call'}
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
  )
}

export default Index;
