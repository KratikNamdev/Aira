import React, { useState, useEffect } from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import Colors from '@/common/Colorscomponents';
import Image from 'next/image'

const PowerOfIntelligence = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    setLang(localStorage?.getItem('lang'));
  }, []);
  return (
    <Grid container direction="row" spacing={2} sx={{ py: 5 }}>
      <Grid item xs={12} sm={6}>
        <Stack direction="column" gap={2}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {lang === 'fr' ? `Libérer la puissance de l’hyper-automatisation` : lang === 'sp' ? 'Liberando el poder de la hiperautomatización' : lang === 'ar' ? ' الأتمتة المفرطة لعمليات سلسة' : lang === 'gr' ? 'Entfesseln Sie die Kraft der Hyperautomatisierung' : 'Unleashing the Power of Hyper-Automation'}
            <br />
            <span style={{ color: Colors.airaSecondary }}>
              {lang === 'fr' ? `pour des opérations fluides` : lang === 'sp' ? 'para operaciones fluidas' : lang === 'ar' ? 'إطلاق العنان لقوة' : lang === 'gr' ? 'für nahtlose Abläufe' : 'for Seamless Operations'}
            </span>{" "}
          </Typography>

          <Stack direction="column" gap={2}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, lineHeight: 1.8 }}
            >
              {lang === 'fr' ? `AIRA Hyper Automation offre aux entreprises des flux de travail conviviaux, des agents` : lang === 'sp' ? 'AIRA Hyper Automation brinda a las empresas flujos de trabajo fáciles de usar, agentes digitales e integración avanzada de AI/ML. Simplifique tareas complejas, aumente la ' : lang === 'ar' ? 'تعمل تقنية AIRA Hyper Automation على تمكين الشركات من خلال سير عمل سهل الاستخدام ووكلاء رقميين وتكامل' : lang === 'gr' ? 'AIRA Hyper Automation unterstützt Unternehmen mit benutzerfreundlichen Arbeitsabläufen, ' : 'AIRA Hyper Automation empowers businesses with user-friendly workflows, Digital Agents, and advanced AI/ML integration.'}
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              {lang === 'fr' ? `numériques et une intégration avancée d'IA/ML. Simplifiez les tâches complexes, augmentez` : lang === 'sp' ? 'productividad y transforme las operaciones sin problemas. Descubra los beneficios de la automatización con AIRA para una transformación digital más inteligente, rápida y escalable.' : lang === 'ar' ? 'متقدم للذكاء الاصطناعي/تعلم الآلة. يمكنك تبسيط المهام المعقدة وتعزيز الإنتاجية وتحويل العمليات بسلاسة. اكتشف فوائد الأتمتة مع  AIRA  لتحقيق تحول رقمي أكثر ذكاءً وأسرع وقابلاً للتطوير.' : lang === 'gr' ? 'digitalen Agenten und fortschrittlicher AI/ML-Integration. Vereinfachen Sie komplexe ' : 'Simplify complex tasks, boost productivity, and transform operations seamlessly. Discover the benefits of automation with AIRA for a smarter, faster, and scalable digital transformation.'}
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Image
          src="/images/home/powerintelligence.png"
          alt="Power of AI"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  )
}

export default PowerOfIntelligence