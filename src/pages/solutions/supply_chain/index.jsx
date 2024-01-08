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
    text: "Enhance employee experiences with a better work environment to reduce turnover.",
  },
  {
    id: 2,
    text: "Hyper-automate inventory management and order records for continual audit readiness.",
  },
  {
    id: 3,
    text: "Digital Agents perform tasks so staff can have more time for meaningful interactions with customers and suppliers.",
  },
];
const AIRACANDODATA1 = [
  {
    id: 1,
    text: "Améliorez l’expérience des employés avec un meilleur environnement de travail pour réduire le turnover.",
  },
  {
    id: 2,
    text: "Hyper-automatisez la gestion des stocks et les enregistrements de commandes pour une préparation continue aux audits.",
  },
  {
    id: 3,
    text: "Les agents numériques effectuent des tâches afin que le personnel puisse disposer de plus de temps pour des interactions significatives avec les clients et les fournisseurs.",
  },
];
const AIRACANDODATA2 = [
  {
    id: 1,
    text: "تعزيز تجارب الموظفين من خلال بيئة عمل أفضل لتقليل معدل دوران الموظفين.",
  },
  {
    id: 2,
    text: "التشغيل الآلي الفائق لإدارة المخزون وسجلات الطلبات من أجل الاستعداد للتدقيق المستمر.",
  },
  {
    id: 3,
    text: "يقوم الوكلاء الرقميون بتنفيذ المهام حتى يتمكن الموظفون من الحصول على مزيد من الوقت للتفاعلات الهادفة مع العملاء والموردين.",
  },
];
const AIRACANDODATA3 = [
  {
    id: 1,
    text: "Verbessern Sie die Erfahrungen Ihrer Mitarbeiter durch ein besseres Arbeitsumfeld, um die Fluktuation zu reduzieren.",
  },
  {
    id: 2,
    text: "Hochautomatisieren Sie die Bestandsverwaltung und Auftragsaufzeichnungen für eine kontinuierliche Prüfungsbereitschaft.",
  },
  {
    id: 3,
    text: "Digitale Agenten führen Aufgaben aus, damit die Mitarbeiter mehr Zeit für sinnvolle Interaktionen mit Kunden und Lieferanten haben.",
  },
];
const AIRACANDODATA4 = [
  {
    id: 1,
    text: "Enhance employee experiences with a better work environment to reduce turnover.",
  },
  {
    id: 2,
    text: "Hyper-automate inventory management and order records for continual audit readiness.",
  },
  {
    id: 3,
    text: "Digital Agents perform tasks so staff can have more time for meaningful interactions with customers and suppliers.",
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
                    {lang === 'fr' ? `Hyper-automatisation dans la Supply Chain` : lang === 'sp' ? 'Hiperautomatización en la cadena de suministro' : lang === 'ar' ? 'الأتمتة المفرطة في سلسلة التوريد' : lang === 'gr' ? 'Hyperautomatisierung in der Lieferkette' : '  Hyper-automation in Supply Chain'} {' '}
                    <span style={{ color: Colors.airaSecondary }}>
                      {lang === 'fr' ? `Avec AIRA` : lang === 'sp' ? 'Con AIRA' : lang === 'ar' ? 'مع آيرا' : lang === 'gr' ? 'Mit AIRA' : 'with AIRA'}
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                
                      {lang === 'fr' ? `Minimiser les erreurs humaines et créer des infrastructures de chaîne d'approvisionnement ` : lang === 'sp' ? 'Minimizar los errores humanos y construir infraestructuras de cadena de suministro más ' : lang === 'ar' ? 'تقليل الأخطاء البشرية وإنشاء بنيات أساسية لسلسلة التوريد أكثر ذكاءً وأقوى باستخدام أفضل تقنيات ' : lang === 'gr' ? 'Minimierung menschlicher Fehler und Aufbau intelligenterer, stärkerer ' : 'Minimising Human Error and building Smarter, '}
                 
                    {lang === 'fr' ? `plus intelligentes et plus solides en utilisant le meilleur de la RPA et de l'IA..` : lang === 'sp' ? 'inteligentes y sólidas utilizando lo mejor de RPA e IA.' : lang === 'ar' ? 'RPA والذكاء الاصطناعي' : lang === 'gr' ? 'Supply-Chain-Infrastrukturen mithilfe des Besten aus RPA und KI.' : 'Stronger Supply Chain infrastructures using the best of RPA and AI.'}
                  </Typography>
                </Box>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/solutionheader19.png"
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

              {lang === 'fr' ? `Hyper-automatisation ` : lang === 'sp' ? 'Hiperautomatización ' : lang === 'ar' ? 'الأتمتة المفرطة في سلسلة ' : lang === 'gr' ? 'Hyperautomatisierung' : ' Hyper-automation in'}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `en Supply Chain offre` : lang === 'sp' ? 'en la cadena de suministro entrega' : lang === 'ar' ? 'التوريد تقدم خدماتها' : lang === 'gr' ? 'in Supply Chain liefert' : ' Supply Chain delivers'}
              </span>
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ my: 1, mb: 3, fontWeight: 600, lineHeight: 2, fontSize: '23px', textAlign: 'center' }}
            >
              {lang === 'fr' ? `Analyse des tendances de l'offre et de la demande | Optimisation de la gestion des stocks | Planification des fournisseurs | Assurance qualité de la chaîne de montage` : lang === 'sp' ? 'Análisis de tendencias de oferta y demanda | Optimización de la gestión de inventario | Programación de proveedores | Garantía de calidad de la línea de montaje' : lang === 'ar' ? 'تحليل اتجاه الطلب والعرض | تحسين إدارة المخزون | جدولة البائع | ضمان جودة خط التجميع' : lang === 'gr' ? 'Nachfrage- und Angebotstrendanalyse | Optimierung des Bestandsmanagements | Lieferantenplanung | Qualitätssicherung am Fließband' : ' Demand & Supply Trend Analysis | Inventory Management Optimization | Vendor Scheduling | Assembly Line Quality Assurance'}
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
                  {lang === 'fr' ? `AIRA transforme l'automatisation de la chaîne d'approvisionnement` : lang === 'sp' ? 'AIRA transforma la automatización de la cadena de suministro' : lang === 'ar' ? 'تعمل AIRA على تحويل أتمتة سلسلة التوريد' : lang === 'gr' ? 'AIRA transformiert die Supply-Chain-Automatisierung' : 'AIRA transforms Supply Chain Automation'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 2, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >

                  {lang === 'fr' ? `Au cours de la dernière décennie, aucune autre industrie n’a bénéficié de l’avènement de l’automatisation à grande échelle au niveau des entreprises comme les industries de la chaîne d’approvisionnement.` : lang === 'sp' ? 'En la última década, ninguna otra industria se ha beneficiado del advenimiento de la automatización de nivel empresarial a gran escala como Supply Chain Industries.' : lang === 'ar' ? 'في العقد الماضي، لم تستفد أي صناعة أخرى من ظهور الأتمتة واسعة النطاق على مستوى المؤسسات مثل صناعات سلسلة التوريد.' : lang === 'gr' ? 'Im letzten Jahrzehnt hat keine andere Branche so stark vom Aufkommen groß angelegter Automatisierung auf Unternehmensniveau profitiert wie die Supply Chain Industrie.' : 'In the past decade, no other industry has benefited from the advent of large scale enterprise grade automation like Supply Chain Industries.'}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ my: 1, fontWeight: 400, lineHeight: 2, fontSize: '16px' }}
                >
                  {lang === 'fr' ? `Avec AIRA, l'hyper-automatisation de la chaîne d'approvisionnement atténue de nombreux goulots d'étranglement hérités et traditionnels tout en pérennisant l'infrastructure de la chaîne d'approvisionnement avec des processus plus intelligents, plus solides et plus efficaces.` : lang === 'sp' ? 'Con AIRA, la hiperautomatización de la cadena de suministro mitiga muchos cuellos de botella tradicionales y heredados, al mismo tiempo que prepara la infraestructura de la cadena de suministro para el futuro con procesos más inteligentes, más sólidos y más eficientes.' : lang === 'ar' ? 'مع AIRA، تعمل الأتمتة المفرطة لسلسلة التوريد على تخفيف العديد من الاختناقات القديمة والتقليدية بينما تقوم أيضًا بتأمين البنية التحتية لسلسلة التوريد في المستقبل من خلال عمليات أكثر ذكاءً وأقوى وأكثر كفاءة' : lang === 'gr' ? 'Mit AIRA entschärft die Hyperautomatisierung der Lieferkette viele alte und traditionelle Engpässe und macht gleichzeitig die Infrastruktur der Lieferkette mit intelligenteren, stärkeren und effizienteren Prozessen zukunftssicher.' : '  With AIRA, hyper-automation of Supply Chain mitigates many legacy and traditional bottlenecks while also future proofing the supply chain infrastructure with smarter, stronger and more efficient processes.'}
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
              {lang === 'fr' ? `AIRAaide la chaîne ` : lang === 'sp' ? 'AIREayuda ' : lang === 'ar' ? 'تساعد سلسلة التوريد من خلال' : lang === 'gr' ? 'AIRAhilft der ' : 'AIRA helps '}
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `d'approvisionnement en` : lang === 'sp' ? 'a la cadena de suministro' : lang === 'ar' ? 'مع الأتمتة المفرطة AIRA' : lang === 'gr' ? 'AIRA' : ' Supply Chain by'}
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
        <Box
          sx={{ my: 10, }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, textAlign: "center" }}
            >
              <span style={{ color: Colors.airaSecondary }}>
                {lang === 'fr' ? `Avantages` : lang === 'sp' ? 'Beneficios' : lang === 'ar' ? 'فو' : lang === 'gr' ? 'Vorteile' : 'Benefits'} {' '}
              </span>
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
                {lang === 'fr' ? `Dans les départements Supply Chain,les capacités d'hyper-automatisation deAIRA, avec la combinaison double rafale d'une RPA fiable mise à l'échelle par l'IA adaptative, offre des avantages constants tels que : ` : lang === 'sp' ? 'En los departamentos de cadena de suministro,las capacidades de hiperautomatización deAIRE, con la combinación de doble ráfaga de RPA confiable escalada por IA adaptativa, ofrece beneficios consistentes como: ' : lang === 'ar' ? 'في أقسام سلسلة التوريد، توفر إمكانات التشغيل الآلي الفائق لـ AIRA، مع مزيج مزدوج من تقنية RPA الموثوقة والتي يتم تحجيمها بواسطة الذكاء الاصطناعي التكيفي، فوائد متسقة مثل:' : lang === 'gr' ? 'In Supply-Chain-Abteilungendie Hyperautomatisierungsfähigkeiten vonAIRADie Double-Burst-Kombination aus zuverlässigem RPA, skaliert durch adaptive KI, bietet konsistente Vorteile wie: ' : 'In Supply Chain departments, the hyper-automation capabilities of AIRA, with the double burst combination of reliable RPA scaled by adaptive AI deliver consistent benefits such as:'}
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
                      {lang === 'fr' ? `Infrastructure robuste à l’épreuve du temps` : lang === 'sp' ? 'Infraestructura robusta preparada para el futuro' : lang === 'ar' ? 'بنية تحتية قوية مقاومة للمستقبل' : lang === 'gr' ? 'Robuste, zukunftssichere Infrastruktur' : ' Resource Optimization Excellence'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Analyses d'inventaire prédictives et en temps réel pour l'élaboration de stratégies et la rationalisation` : lang === 'sp' ? 'Análisis de inventario predictivo y en tiempo real para elaborar estrategias y optimizar' : lang === 'ar' ? 'تحليلات المخزون التنبؤية في الوقت الحقيقي لوضع الاستراتيجيات وتبسيطها' : lang === 'gr' ? 'Echtzeit- und prädiktive Bestandsanalysen zur Strategieentwicklung und Rationalisierung' : ' Continuous Advanced Analytics for Resource Management and stock availability detection.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Gérer les communications entre les équipes et les fournisseurs dans les inventaires/catégories` : lang === 'sp' ? 'Gestionar las comunicaciones entre equipos y proveedores en todos los inventarios/categorías.' : lang === 'ar' ? 'إدارة الاتصالات بين الفريق والبائعين عبر قوائم الجرد / الفئات' : lang === 'gr' ? 'Verwalten Sie die team- und lieferantenübergreifende Kommunikation über die Bestände/Kategorien hinweg' : 'Predict Logistical Journey bottlenecks and preempt friction in the supply.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Prévision de la demande et analyse des risques logistiques pour une plus grande stabilité de l’approvisionnement` : lang === 'sp' ? 'Previsión de la Demanda y Análisis de Riesgos Logísticos para una mayor estabilidad del suministro' : lang === 'ar' ? 'توقعات الطلب وتحليل المخاطر اللوجستية لتحقيق استقرار أكبر في العرض' : lang === 'gr' ? 'Nachfrageprognose und logistische Risikoanalyse für mehr Stabilität der Versorgung' : ' Build custom rules and exceptions for tailored inventory.'}
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
                      {lang === 'fr' ? `Excellence en optimisation des ressources` : lang === 'sp' ? 'Excelencia en optimización de recursos' : lang === 'ar' ? 'التميز في تحسين الموارد' : lang === 'gr' ? 'Exzellente Ressourcenoptimierung' : 'Scale Supply Impact'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Analyse avancée continue pour la gestion des ressources et la détection de la disponibilité des stocks` : lang === 'sp' ? 'Análisis avanzado continuo para la gestión de recursos y detección de disponibilidad de stock.' : lang === 'ar' ? 'التحليلات المتقدمة المستمرة لإدارة الموارد واكتشاف توفر المخزون' : lang === 'gr' ? 'Kontinuierliche erweiterte Analysen für das Ressourcenmanagement und die Erkennung der Lagerverfügbarkeit' : ' Maintain updated Vendor records for smarter order management.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Prédire les goulots d'étranglement du parcours logistique et anticiper les frictions dans l'approvisionnement` : lang === 'sp' ? 'Predecir cuellos de botella en el viaje logístico y prevenir fricciones en el suministro' : lang === 'ar' ? 'توقع اختناقات الرحلة اللوجستية واستبق الاحتكاك في العرض' : lang === 'gr' ? 'Prognostizieren Sie Engpässe bei der Logistikreise und vermeiden Sie Reibungsverluste in der Versorgung' : 'Forecast Demand and Supply with third-party market intelligence.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>

                          {lang === 'fr' ? `Créez des règles et des exceptions personnalisées pour un inventaire personnalisé.` : lang === 'sp' ? 'Cree reglas y excepciones personalizadas para un inventario personalizado.' : lang === 'ar' ? 'بناء قواعد واستثناءات مخصصة للمخزون المخصص.' : lang === 'gr' ? 'Erstellen Sie benutzerdefinierte Regeln und Ausnahmen für maßgeschneidertes Inventar.' : 'Create smoother process management by intelligent delegation and hyper-automated issue addressals.'}
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
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card raised>
                  <CardContent sx={{ p: 5 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                    >
                      {lang === 'fr' ? `Impact sur l’offre à grande échelle` : lang === 'sp' ? 'Impacto de la oferta de escala' : lang === 'ar' ? 'نطاق تأثير العرض' : lang === 'gr' ? 'Auswirkungen auf das Skalenangebot' : 'Improve compliance process quality'}
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Tenir à jour les enregistrements des fournisseurs pour une gestion plus intelligente des commandes` : lang === 'sp' ? 'Mantenga registros de proveedores actualizados para una gestión de pedidos más inteligente' : lang === 'ar' ? 'احتفظ بسجلات البائعين المحدثة لإدارة الطلبات بشكل أكثر ذكاءً' : lang === 'gr' ? 'Pflegen Sie aktualisierte Lieferantendatensätze für eine intelligentere Auftragsverwaltung' : 'Track regulatory changes.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Prévoyez la demande et l’offre grâce à des informations de marché tierces` : lang === 'sp' ? 'Pronosticar la oferta y la demanda con inteligencia de mercado de terceros' : lang === 'ar' ? 'توقعات الطلب والعرض مع معلومات السوق من طرف ثالث' : lang === 'gr' ? 'Prognostizieren Sie Nachfrage und Angebot mit Marktinformationen von Drittanbietern' : 'Automate monitoring of ongoing transactions.'}
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                          {lang === 'fr' ? `Créez une gestion plus fluide des processus grâce à une délégation intelligente et à la résolution des problèmes hyper-automatisée` : lang === 'sp' ? 'Cree una gestión de procesos más fluida mediante la delegación inteligente y la resolución de problemas hiperautomatizada.' : lang === 'ar' ? 'قم بإنشاء إدارة أكثر سلاسة للعمليات من خلال التفويض الذكي وعناوين المشكلات الآلية للغاية' : lang === 'gr' ? '	Schaffen Sie ein reibungsloseres Prozessmanagement durch intelligente Delegation und hyperautomatisierte Problembehebung' : 'Improve KYC/AML analysis with easy access to customer data.'}
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

export default Index;
