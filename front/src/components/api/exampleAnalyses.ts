/**
 * 분석 예시 데이터
 * 실제 분석이 어떻게 작동하는지 보여주는 샘플들
 */

import type { AnalysisResult } from './analysisApi';

export const exampleAnalyses: Record<string, AnalysisResult> = {
  // 예시 1: AI 윤리 규제 (한국어)
  aiEthicsKo: {
    analysisId: 'example-ai-ethics-ko',
    isValid: true,
    originalContent: {
      title: 'AI 윤리 규제 법안, 국회 본격 논의 시작... 혁신이냐 안전이냐',
      summary: '인공지능(AI) 기술이 급격하게 발전함에 따라 이에 대한 윤리적 사용을 보장하기 위한 규제 법안이 국회에서 본격적으로 논의되기 시작했다. 이번 법안은 AI 개발 및 사용 시 개인정보 보호, 알고리즘 투명성 확보, 오작동 시 책임 소재 명확화, 그리고 딥페이크와 같은 악용 사례 방지를 주요 내용으로 담고 있다. 이에 대해 찬반 양론이 팽팽하게 맞서고 있다. 산업계와 스타트업들은 과도한 규제가 초기 단계인 국내 AI 산업의 혁신을 저해하고 글로벌 경쟁력을 약화시킬 수 있다고 우려하는 반면, 시민단체와 윤리 전문가들은 AI의 편향성과 오용으로 인한 사회적 피해를 막기 위해 강력하고 선제적인 규제가 필수적이라고 주장한다. 정부는 혁신과 안전 사이의 균형점을 찾기 위해 고심하고 있다.',
      detectedLanguage: 'ko'
    },
    keywords: ['AI 윤리', '인공지능', '규제', '법안', '개인정보보호', '알고리즘 투명성', '책임 소재', '기술혁신', 'EU AI Act', '딥페이크'],
    supportOpinions: [
      {
        title: 'AI 윤리 가이드라인 법제화 시급하다',
        url: 'https://www.example-tech-news.com/ai-ethics-regulation-needed',
        source: 'TechDaily Korea',
        sourceType: 'news',
        snippet: 'AI 기술이 빠르게 발전하면서 윤리적 기준과 안전장치가 반드시 필요하다. 특히 개인정보 보호와 알고리즘의 편향성 문제, 그리고 AI 오작동 시 책임 소재를 명확히 해야 한다. 유럽연합의 AI Act를 참고하여 우리나라도 체계적인 규제 프레임워크를 마련해야 할 시점이다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.95
      },
      {
        title: 'AI 규제, 시민 안전을 위한 필수 조치',
        url: 'https://www.civic-voice-blog.com/ai-safety-regulation',
        source: 'Civic Voice Blog',
        sourceType: 'blog',
        snippet: '최근 AI 기술의 오남용 사례가 증가하고 있다. 딥페이크를 이용한 범죄, AI 알고리즘의 차별적 판단, 개인정보 무단 수집 등의 문제가 심각하다. 기술의 발전도 중요하지만 시민의 안전과 인권 보호가 우선되어야 한다. 강력한 AI 규제는 선택이 아닌 필수다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.88
      },
      {
        title: 'EU AI Act 전문가가 말하는 한국의 AI 규제 방향',
        url: 'https://youtube.com/watch?v=ai-regulation-korea',
        source: '테크 인사이트 채널',
        sourceType: 'youtube',
        snippet: 'EU의 AI Act는 위험도 기반 접근법을 채택하여 고위험 AI 시스템에는 엄격한 규제를, 저위험 시스템에는 가이드라인을 적용합니다. 한국도 이러한 균형잡힌 접근이 필요합니다. 특히 의료, 금융, 법률 분야의 AI는 반드시 강력한 규제가 필요합니다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.92
      },
      {
        title: '딥페이크 범죄 급증, AI 규제 더 이상 미룰 수 없다',
        url: 'https://news-report.com/deepfake-crimes',
        source: 'Social News',
        sourceType: 'news',
        snippet: '생성형 AI를 이용한 딥페이크 성범죄와 금융 사기가 급증하고 있다. 기술의 발전 속도를 법이 따라가지 못하고 있다. AI 생성물에 대한 워터마크 의무화와 악용 시 처벌 강화가 포함된 강력한 규제 법안이 즉시 통과되어야 한다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.94
      },
      {
        title: '알고리즘의 편향성, 사회적 차별 조장 우려',
        url: 'https://ethics-forum.org/algorithm-bias',
        source: 'AI Ethics Forum',
        sourceType: 'blog',
        snippet: '채용, 대출 심사 등에 사용되는 AI 알고리즘이 학습 데이터의 편향으로 인해 특정 성별이나 인종을 차별하는 사례가 보고되고 있다. 알고리즘의 투명성을 검증하고 설명 가능성을 의무화하는 규제가 없다면 사회적 불평등이 심화될 것이다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.89
      },
      {
        title: 'AI 개발 속도조절론 대두',
        url: 'https://tech-policy.kr/ai-slowdown',
        source: 'Tech Policy Review',
        sourceType: 'news',
        snippet: '통제 불가능한 초지능 AI의 등장을 막기 위해 개발 속도를 조절해야 한다는 목소리가 높다. 안전장치가 마련될 때까지 거대 모델의 학습을 일시 중단하거나 정부의 허가를 받도록 하는 강력한 규제가 필요하다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '인권위, AI 인권 가이드라인 권고',
        url: 'https://human-rights.go.kr/ai-guideline',
        source: 'Human Rights Watch',
        sourceType: 'news',
        snippet: '국가인권위원회는 AI가 인간의 존엄성을 침해하지 않도록 법적 구속력 있는 인권 가이드라인을 제정할 것을 정부에 권고했다. 자동화된 결정에 대한 이의 제기권과 설명 요구권이 보장되어야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '킬러로봇 방지법 제정 촉구',
        url: 'https://peace-forum.org/killer-robots',
        source: 'Peace Forum',
        sourceType: 'blog',
        snippet: 'AI가 탑재된 자율 살상 무기(LAWS)의 개발과 사용을 금지하는 국제 조약에 한국도 동참해야 한다. 인간의 통제를 벗어난 AI 무기는 인류 전체에 대한 위협이다.',
        publishedDate: '2025-10-25',
        relevanceScore: 0.90
      }
    ],
    opposeOpinions: [
      {
        title: '과도한 AI 규제는 혁신의 발목을 잡는다',
        url: 'https://business-daily.com/ai-overregulation-concern',
        source: 'Business Daily',
        sourceType: 'news',
        snippet: 'AI 스타트업들은 이미 글로벌 경쟁에서 뒤처지고 있는 상황이다. 여기에 과도한 규제까지 더해지면 한국의 AI 산업은 더욱 위축될 것이다. 미국과 중국은 최소한의 규제로 혁신을 장려하고 있는데, 우리만 규제를 강화하면 경쟁력을 잃게 된다. 규제보다는 산업 육성에 집중해야 한다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.91
      },
      {
        title: 'AI 규제법, 스타트업 생태계 파괴 우려',
        url: 'https://startup-voice.com/ai-regulation-threat',
        source: 'Startup Voice',
        sourceType: 'blog',
        snippet: '대기업은 법무팀과 컴플라이언스 조직으로 규제에 대응할 수 있지만, 스타트업은 그렇지 못하다. 복잡한 규제는 작은 기업들에게 진입장벽이 되고, 결국 AI 생태계의 다양성을 해칠 것이다. 혁신적인 아이디어를 가진 스타트업들이 규제 때문에 사업을 포기하는 상황을 막아야 한다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.87
      },
      {
        title: '자율 규제가 답이다 - AI 업계 간담회',
        url: 'https://youtube.com/watch?v=ai-self-regulation',
        source: 'Tech Conference TV',
        sourceType: 'youtube',
        snippet: '정부의 일방적인 규제보다는 업계의 자율 규제와 윤리 강령 마련이 더 효과적입니다. 기술을 잘 아는 개발자와 기업들이 스스로 기준을 만들고 지키는 것이 현실적입니다. 해외 빅테크들도 자체적으로 윤리 위원회를 운영하며 성과를 내고 있습니다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.84
      },
      {
        title: '빈대 잡으려다 초가삼간 태우는 격',
        url: 'https://tech-opinion.com/regulation-risks',
        source: 'Tech Opinion',
        sourceType: 'blog',
        snippet: '일부 부작용을 막기 위해 기술 자체를 규제하는 것은 위험하다. 자동차 사고가 난다고 자동차를 금지하지 않는 것처럼, AI의 부작용은 기존 법률로 처벌하고 기술 개발은 장려해야 한다. 사전 규제는 기술 발전의 가능성을 원천 봉쇄할 수 있다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.86
      },
      {
        title: '규제 샌드박스 확대가 우선',
        url: 'https://innovation-lab.kr/sandbox-first',
        source: 'Innovation Lab',
        sourceType: 'news',
        snippet: '규제를 먼저 만들기보다 규제 샌드박스를 통해 다양한 AI 서비스를 실험해보고, 문제가 발생하면 사후에 규제하는 네거티브 규제 방식을 도입해야 한다. 선허용 후규제가 혁신의 지름길이다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '글로벌 표준 없는 독자 규제 반대',
        url: 'https://global-tech.com/standard-regulation',
        source: 'Global Tech Review',
        sourceType: 'news',
        snippet: '아직 국제적인 AI 규제 표준이 확립되지 않은 상태에서 한국만 섣불리 규제를 도입하면 갈라파고스 규제가 될 수 있다. 국제 사회의 논의 과정을 지켜보며 신중하게 접근해야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.85
      }
    ],
    neutralOpinions: [
      {
        title: 'AI 규제, 신중한 접근이 필요하다',
        url: 'https://national-news.com/ai-regulation-balanced-view',
        source: 'National News',
        sourceType: 'news',
        snippet: 'AI 규제는 혁신과 안전성 사이의 균형을 찾는 것이 핵심이다. 너무 강한 규제는 산업 발전을 저해할 수 있고, 너무 약한 규제는 시민을 보호하지 못한다. 다양한 이해관계자의 의견을 충분히 수렴하고, 단계적으로 규제 체계를 만들어가는 접근이 바람직하다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.89
      },
      {
        title: '전문가들의 의견: AI 규제 찬반 토론',
        url: 'https://youtube.com/watch?v=ai-debate-experts',
        source: 'News Debate',
        sourceType: 'youtube',
        snippet: '찬성과 반대 양측 모두 일리가 있습니다. 중요한 것은 어떻게 균형을 맞출 것인가입니다. 의료나 자율주행처럼 생명과 직결된 분야는 강한 규제가 필요하지만, 엔터테인먼트나 게임 같은 분야는 유연한 접근이 가능합니다. 분야별 맞춤형 규제가 해답일 수 있습니다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.86
      },
      {
        title: '글로벌 표준과의 조화가 관건',
        url: 'https://global-standard.org/ai-harmonization',
        source: 'Global Tech Review',
        sourceType: 'news',
        snippet: '한국만의 독자적인 규제보다는 국제적인 흐름에 발맞추는 것이 중요하다. ISO 등 국제 표준화 기구의 논의를 반영하고, 주요국과의 규제 상호 운용성을 확보해야 우리 기업들의 해외 진출에도 도움이 될 것이다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.85
      },
      {
        title: '사회적 합의 기구 구성 제안',
        url: 'https://social-consensus.kr/ai-committee',
        source: 'Social Consensus Forum',
        sourceType: 'blog',
        snippet: '정부, 기업, 시민사회, 학계가 모두 참여하는 대통령 직속 AI 위원회를 구성하여 지속적인 대화를 통해 합의점을 찾아야 한다. 단발성 공청회로는 부족하다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: 'AI 리터러시 교육 강화 필요',
        url: 'https://edu-future.com/ai-literacy',
        source: 'Education Future',
        sourceType: 'news',
        snippet: '규제 논의와 별개로, 전 국민을 대상으로 한 AI 리터러시 교육이 시급하다. AI의 원리와 한계, 윤리적 쟁점을 이해해야 올바른 규제 방향도 잡을 수 있다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      }
    ],
    alternativeOpinions: [
      {
        title: '리스크 기반 AI 규제 프레임워크가 대안이다',
        url: 'https://policy-institute.com/risk-based-ai-regulation',
        source: 'Policy Research Institute',
        sourceType: 'blog',
        snippet: '일률적인 규제 대신, AI 시스템의 위험도에 따라 차등화된 규제를 적용하는 리스크 기반 접근법이 효과적이다. 고위험 AI(의료 진단, 자율주행 등)에는 엄격한 인증과 모니터링을, 저위험 AI(추천 시스템, 번역 등)에는 자율 규제를 적용하는 방식이다. 이는 혁신과 안전을 동시에 달성할 수 있는 현실적인 대안이다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.94
      },
      {
        title: '샌드박스 방식의 단계적 AI 규제 도입 제안',
        url: 'https://innovation-weekly.com/ai-sandbox-regulation',
        source: 'Innovation Weekly',
        sourceType: 'news',
        snippet: '규제 샌드박스를 통해 새로운 AI 기술을 안전하게 시험하고, 그 결과를 바탕으로 점진적으로 규제를 만들어가는 방식을 제안한다. 이미 금융, 헬스케어 분야에서 검증된 방법이다. 혁신적인 AI 기술이 실제 환경에서 테스트되면서 필요한 규제 사항을 발견하고, 이를 법제화하는 선순환 구조를 만들 수 있다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.90
      },
      {
        title: '민관 협력 AI 거버넌스 모델 제안',
        url: 'https://youtube.com/watch?v=ai-governance-model',
        source: 'Future Tech Forum',
        sourceType: 'youtube',
        snippet: '정부 주도의 규제도, 완전한 자율 규제도 아닌 제3의 길을 제시합니다. 정부, 기업, 학계, 시민단체가 함께 참여하는 AI 거버넌스 위원회를 구성하고, 여기서 지속적으로 가이드라인을 업데이트하는 방식입니다. 싱가포르와 캐나다가 이런 모델로 성과를 내고 있습니다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.88
      },
      {
        title: 'AI 영향 평가 제도 도입',
        url: 'https://impact-assessment.org/ai-impact',
        source: 'Policy Lab',
        sourceType: 'blog',
        snippet: '환경 영향 평가처럼, 대규모 AI 시스템 도입 전에 사회적, 윤리적 영향을 미리 평가하는 제도를 도입하자. 이를 통해 잠재적 위험을 사전에 식별하고 완화 조치를 마련할 수 있다. 처벌보다는 예방에 초점을 맞춘 제도다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.87
      },
      {
        title: '알고리즘 감사 제도 법제화',
        url: 'https://audit-tech.com/algorithm-audit',
        source: 'Audit Tech Review',
        sourceType: 'news',
        snippet: '외부 전문가가 기업의 AI 알고리즘을 주기적으로 감사하여 공정성과 투명성을 검증하는 제도를 도입해야 한다. 회계 감사처럼 알고리즘 감사도 기업의 신뢰도를 높이는 수단이 될 것이다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.89
      },
      {
        title: 'AI 보험 제도 도입',
        url: 'https://insurance-daily.com/ai-insurance',
        source: 'Insurance Daily',
        sourceType: 'blog',
        snippet: 'AI 오작동으로 인한 피해를 보상하기 위해 AI 개발사와 운영사의 보험 가입을 의무화하자. 피해자 구제를 확실히 하고 기업의 리스크 관리도 도울 수 있다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      }
    ],
    futurePrediction: `AI 윤리 규제에 대한 논의가 본격화되면서, 향후 2-3년 내에 한국형 AI 규제 프레임워크가 마련될 것으로 예상됩니다.

**단기 전망 (6개월-1년)**
국회에서 AI 윤리 기본법안이 통과될 가능성이 높으며, 초기에는 가이드라인 중심의 자율 규제 형태로 시작될 것입니다. 의료, 금융, 공공 분야의 고위험 AI부터 우선적으로 규제 대상이 될 전망입니다.

**중기 전망 (1-2년)**
EU의 AI Act와 유사한 리스크 기반 접근법이 도입되어, AI 시스템을 위험도별로 분류하고 차등 규제하는 체계가 구축될 것입니다. AI 윤리 인증 제도와 감사 체계가 마련되며, 대기업과 공공기관을 중심으로 컴플라이언스가 강화됩니다.

**장기 전망 (2-3년 이상)**
규제 샌드박스를 통한 실증 경험이 축적되면서, 더욱 정교하고 실효성 있는 규제로 발전할 것입니다. 민관 협력 거버넌스 체계가 안정화되고, 국제 표준과의 조화도 이루어질 전망입니다.

**예상되는 영향**
- 긍정적: AI 기술에 대한 국민 신뢰 증가, 윤리적 AI 개발 생태계 조성, 글로벌 규제 표준 선도 가능성
- 부정적: 스타트업의 초기 적응 비용 증가, 일부 혁신적 시도의 지연 가능성
- 중립적: 대기업의 시장 지배력 강화 가능성, 규제 준수 산업의 성장

결국 한국의 AI 규제는 유럽식 강한 규제와 미국식 자율 규제를 절충한 "리스크 기반 유연 규제" 모델로 정착할 것이며, 이는 AI 산업의 건전한 발전과 국민의 안전을 동시에 보장하는 방향으로 진화할 것입니다.`,
    confidence: 0.87,
    analyzedAt: '2025-10-31T10:30:00Z'
  },

  // 예시 2: 기후변화 (영어)
  climateChangeEn: {
    analysisId: 'example-climate-en',
    isValid: true,
    originalContent: {
      title: 'Global Carbon Tax Proposal Gains Momentum Amid Climate Crisis',
      summary: 'As extreme weather events become more frequent and severe, international climate experts and policymakers are proposing a unified global carbon tax system to accelerate emission reductions. The proposal aims to set a minimum price on carbon emissions worldwide to incentivize the transition to green energy. However, the initiative faces strong opposition from developing nations who argue it hinders their economic growth, and from energy-dependent industries concerned about rising costs. Meanwhile, environmental groups and some economists support the measure as the only viable path to meeting Paris Agreement targets and averting climate catastrophe.',
      detectedLanguage: 'en'
    },
    keywords: ['carbon tax', 'climate change', 'emissions', 'Paris Agreement', 'green economy', 'sustainability', 'economic growth', 'global policy'],
    supportOpinions: [
      {
        title: 'Carbon Pricing: The Most Effective Climate Solution',
        url: 'https://climate-economics.com/carbon-tax-effectiveness',
        source: 'Climate Economics Journal',
        sourceType: 'news',
        snippet: 'Economic analysis shows that carbon pricing is the most cost-effective way to reduce emissions. By putting a price on carbon, we create market incentives for innovation and cleaner technologies. Countries with carbon taxes have seen significant emission reductions without harming economic growth.',
        publishedDate: '2025-10-25',
        relevanceScore: 0.93
      },
      {
        title: 'Why We Need Global Carbon Tax Now',
        url: 'https://green-future-blog.org/global-carbon-tax',
        source: 'Green Future Blog',
        sourceType: 'blog',
        snippet: 'Climate crisis requires immediate action. A global carbon tax ensures all countries contribute fairly to emission reductions. Without it, carbon-intensive industries simply move to countries with lax regulations, undermining global climate efforts.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.89
      },
      {
        title: 'IMF Chief Calls for Global Carbon Price Floor',
        url: 'https://global-finance-news.com/imf-carbon-price',
        source: 'Global Finance News',
        sourceType: 'news',
        snippet: 'The IMF argues that a global carbon price floor is essential to limit global warming to 1.5 degrees Celsius. It would provide a clear signal to investors and businesses to shift towards low-carbon investments.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.91
      },
      {
        title: 'Polluters Must Pay: The Moral Case for Carbon Tax',
        url: 'https://eco-justice.org/polluters-pay',
        source: 'Eco Justice',
        sourceType: 'blog',
        snippet: 'Those who cause the damage should pay for it. A carbon tax is a fair way to internalize the social and environmental costs of fossil fuels. The revenue generated can be used to support vulnerable communities and fund renewable energy projects.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.88
      },
      {
        title: 'Scientific Consensus on Carbon Pricing',
        url: 'https://science-climate.org/consensus',
        source: 'Science Climate',
        sourceType: 'news',
        snippet: 'Over 3000 economists and scientists have signed a statement declaring that a carbon tax is the most efficient way to reduce greenhouse gas emissions at the scale and speed required.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.92
      },
      {
        title: 'Health Benefits of Carbon Tax',
        url: 'https://health-watch.com/clean-air',
        source: 'Health Watch',
        sourceType: 'blog',
        snippet: 'Reducing fossil fuel use will also reduce air pollution, saving millions of lives and reducing healthcare costs. The economic benefits of better health outweigh the costs of the tax.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.87
      }
    ],
    opposeOpinions: [
      {
        title: 'Carbon Tax Threatens Developing Economies',
        url: 'https://world-economy.com/carbon-tax-concerns',
        source: 'World Economy Today',
        sourceType: 'news',
        snippet: 'Developing nations argue that carbon taxes unfairly burden countries still building their infrastructure. These nations contributed minimally to historical emissions but would pay the highest costs. A global carbon tax could trap billions in poverty and slow economic development.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.91
      },
      {
        title: 'Industry Leaders Warn of Job Losses',
        url: 'https://youtube.com/watch?v=carbon-tax-jobs',
        source: 'Business News Network',
        sourceType: 'youtube',
        snippet: 'Manufacturing and energy sector leaders warn that carbon taxes could eliminate millions of jobs. Companies may relocate to countries without carbon pricing, leading to job losses in developed nations while failing to reduce global emissions.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.85
      },
      {
        title: 'Consumer Prices Will Skyrocket',
        url: 'https://consumer-watch.org/carbon-tax-inflation',
        source: 'Consumer Watch',
        sourceType: 'blog',
        snippet: 'A carbon tax will inevitably be passed on to consumers, raising the cost of electricity, fuel, and food. This will disproportionately affect low-income households who spend a larger percentage of their income on energy and basic goods.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.86
      },
      {
        title: 'Tax Evasion and Carbon Leakage',
        url: 'https://tax-policy-review.com/leakage',
        source: 'Tax Policy Review',
        sourceType: 'news',
        snippet: 'Companies will simply move their operations to countries with no carbon tax (carbon leakage), resulting in no net reduction in global emissions. It punishes compliant businesses and rewards polluters.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.89
      },
      {
        title: 'Government Waste of Tax Revenue',
        url: 'https://fiscal-conservative.org/waste',
        source: 'Fiscal Conservative',
        sourceType: 'blog',
        snippet: 'There is no guarantee that the revenue from carbon taxes will be used for environmental purposes. Governments often use such taxes to plug budget holes or fund unrelated projects.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      }
    ],
    neutralOpinions: [
      {
        title: 'Carbon Tax: Analyzing the Trade-offs',
        url: 'https://policy-review.org/carbon-tax-analysis',
        source: 'Policy Review',
        sourceType: 'news',
        snippet: 'While carbon taxes can effectively reduce emissions, implementation matters greatly. The revenue must be carefully allocated to support affected workers and communities. Success depends on international coordination and fair burden-sharing mechanisms.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.87
      },
      {
        title: 'The Geopolitics of Carbon Pricing',
        url: 'https://geopolitics-today.com/carbon-pricing',
        source: 'Geopolitics Today',
        sourceType: 'news',
        snippet: 'Carbon pricing is becoming a tool of trade policy. The EU\'s Carbon Border Adjustment Mechanism (CBAM) is forcing other countries to adopt carbon pricing. This could lead to trade tensions or a new era of climate cooperation.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.84
      },
      {
        title: 'Revenue Recycling is Crucial',
        url: 'https://economic-policy.org/revenue-recycling',
        source: 'Economic Policy Journal',
        sourceType: 'blog',
        snippet: 'The impact of a carbon tax depends entirely on how the revenue is used. If returned to citizens as a dividend, it can be progressive. If used to cut corporate taxes, it may increase inequality.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.86
      },
      {
        title: 'Timing and Pace of Implementation',
        url: 'https://climate-strategy.com/timing',
        source: 'Climate Strategy',
        sourceType: 'news',
        snippet: 'A sudden high tax could cause economic shock. A gradual increase over time allows businesses and consumers to adapt, but it might be too slow to stop climate change. Finding the right pace is key.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.85
      },
      {
        title: 'Sector-Specific Impacts Vary',
        url: 'https://industry-analysis.com/sector-impact',
        source: 'Industry Analysis',
        sourceType: 'blog',
        snippet: 'Heavy industries like steel and cement will face major challenges, while the service sector will be less affected. Targeted support for hard-to-abate sectors is necessary during the transition.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.83
      }
    ],
    alternativeOpinions: [
      {
        title: 'Cap-and-Trade: A Better Alternative to Carbon Tax',
        url: 'https://environmental-policy.com/cap-and-trade-alternative',
        source: 'Environmental Policy Institute',
        sourceType: 'blog',
        snippet: 'Cap-and-trade systems offer more flexibility than carbon taxes. By setting emission limits and allowing trading, we achieve environmental goals while giving businesses flexibility in how they reduce emissions. The EU Emissions Trading System demonstrates this approach can work.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.92
      },
      {
        title: 'Technology-First Climate Strategy',
        url: 'https://youtube.com/watch?v=tech-climate-solution',
        source: 'Innovation Hub',
        sourceType: 'youtube',
        snippet: 'Instead of carbon taxes, massive investment in clean technology and renewable energy can drive faster emission reductions. Government subsidies for green tech, not taxes on carbon, create positive incentives for change while supporting economic growth.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.88
      },
      {
        title: 'Direct Regulation and Standards',
        url: 'https://regulatory-news.com/direct-regulation',
        source: 'Regulatory News',
        sourceType: 'news',
        snippet: 'Market mechanisms are too slow. Governments should set strict efficiency standards and ban polluting technologies directly. For example, banning the sale of new internal combustion engine cars by 2035 is more effective than taxing gasoline.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.85
      },
      {
        title: 'Green New Deal Approach',
        url: 'https://progressive-policy.org/green-new-deal',
        source: 'Progressive Policy',
        sourceType: 'blog',
        snippet: 'We need a comprehensive government-led mobilization to decarbonize the economy, guarantee jobs, and ensure justice. Public investment, not market pricing, should lead the transition.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.90
      },
      {
        title: 'Carbon Dividend for All',
        url: 'https://citizens-climate.org/dividend',
        source: 'Citizens Climate Lobby',
        sourceType: 'news',
        snippet: 'Tax carbon and return 100% of the revenue to households as a monthly check. This protects purchasing power while encouraging low-carbon choices. It makes the policy politically popular and sustainable.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.89
      },
      {
        title: 'Nature-Based Solutions',
        url: 'https://nature-conservancy.org/nbs',
        source: 'Nature Conservancy',
        sourceType: 'blog',
        snippet: 'Protecting and restoring forests, wetlands, and grasslands can absorb massive amounts of carbon. We should pay farmers and landowners to sequester carbon, rather than just taxing emitters.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.87
      }
    ],
    futurePrediction: `The global carbon tax debate will likely evolve over the next 2-3 years:

**Short-term (6-12 months)**
Expect continued negotiations at international climate summits. Some regional blocs may implement carbon border adjustment mechanisms, while resistance from developing nations persists.

**Medium-term (1-2 years)**
A tiered carbon pricing system may emerge, with different rates for developed vs. developing nations. Revenue sharing mechanisms and technology transfer agreements could help build consensus.

**Long-term (2-3 years)**
Market-based mechanisms combining elements of carbon taxes, cap-and-trade, and technology subsidies will likely predominate. International carbon credit systems may be standardized.

**Expected impacts**
- Positive: Accelerated clean energy transition, innovation in green technologies
- Negative: Temporary economic disruption in carbon-intensive sectors
- Neutral: Shift in global manufacturing patterns, evolution of energy markets`,
    confidence: 0.84,
    analyzedAt: '2025-10-31T11:00:00Z'
  },

  // 예시 3: 전기차 배터리 화재 (한국어)
  evBatteryKo: {
    analysisId: 'example-ev-battery-ko',
    isValid: true,
    originalContent: {
      title: '전기차 배터리 화재 사고 잇따라... 안전 대책 마련 시급',
      summary: '최근 국내외에서 전기차 배터리 화재 사고가 연이어 발생하면서 전기차 안전성에 대한 우려가 커지고 있다. 특히 지하주차장 화재로 인한 대규모 피해 사례가 보고되면서 소비자들의 불안감이 증가하고 있으며, 일부 아파트 단지에서는 전기차 주차를 금지하려는 움직임까지 보이고 있다. 정부는 전기차 배터리 안전 기준 강화를 검토 중이며, 제조사들은 배터리 실명제 도입 등을 논의하고 있다. 한편 전기차 업계는 배터리 기술이 지속적으로 개선되고 있으며, 통계적으로 내연기관차보다 화재 위험이 낮다고 반박하며 과도한 공포 확산을 경계하고 있다.',
      detectedLanguage: 'ko'
    },
    keywords: ['전기차', '배터리 화재', 'EV', '리튬이온 배터리', '안전 기준', '지하주차장', '전기차 보급', '배터리 기술', '열폭주', '배터리 실명제'],
    supportOpinions: [
      {
        title: '전기차 배터리 안전 기준 강화 시급하다',
        url: 'https://www.safety-news.com/ev-battery-safety-standards',
        source: 'Safety News Korea',
        sourceType: 'news',
        snippet: '최근 발생한 전기차 화재 사고들을 분석한 결과, 배터리 관리 시스템의 결함과 품질 관리 부실이 주요 원인으로 지적되고 있다. 전기차 배터리에 대한 엄격한 안전 인증 제도와 정기적인 점검 의무화가 필요하다. 특히 지하주차장에 설치되는 전기차 충전기에 대한 소방 안전 기준을 강화해야 한다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.94
      },
      {
        title: '전기차 주차 제한 필요하다는 아파트 주민들',
        url: 'https://community-voice-blog.com/ev-parking-restrictions',
        source: 'Community Voice',
        sourceType: 'blog',
        snippet: '지하주차장에서 발생한 전기차 화재로 수십 대의 차량이 전소되는 사고가 발생한 후, 많은 아파트 단지에서 전기차 주차를 제한하거나 지상 주차만 허용하는 움직임이 나타나고 있다. 주민들의 안전이 최우선이며, 안전 대책이 마련될 때까지 신중한 접근이 필요하다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.89
      },
      {
        title: '전기차 화재, 진압이 어려운 이유',
        url: 'https://youtube.com/watch?v=ev-fire-suppression',
        source: '소방안전 채널',
        sourceType: 'youtube',
        snippet: '전기차 배터리 화재는 일반 화재와 달리 열폭주 현상으로 진압이 매우 어렵습니다. 물을 대량으로 사용해야 하고, 재발화 위험도 높습니다. 소방대원들도 전기차 화재 대응 훈련이 필수적이며, 지하주차장 구조상 대응이 더욱 어렵다는 점을 고려해야 합니다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.92
      },
      {
        title: '배터리 제조사 정보 공개 의무화해야',
        url: 'https://consumer-rights.kr/battery-info',
        source: '소비자 권리 연대',
        sourceType: 'news',
        snippet: '소비자는 자신이 타는 차에 어떤 배터리가 들어가는지 알 권리가 있다. 배터리 제조사와 원산지 정보를 투명하게 공개하는 배터리 실명제를 도입하여 소비자의 선택권을 보장하고 제조사의 책임감을 높여야 한다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.90
      },
      {
        title: '노후 배터리 정밀 검사 제도 도입',
        url: 'https://car-inspection.or.kr/battery-check',
        source: 'Car Inspection News',
        sourceType: 'news',
        snippet: '전기차 정기 검사 시 배터리 성능과 안전성을 정밀하게 진단하는 제도를 도입해야 한다. 육안 검사만으로는 내부 단락이나 열폭주 징후를 발견하기 어렵다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '충전 심도 제한 권고',
        url: 'https://ev-safety-guide.com/charging-limit',
        source: 'EV Safety Guide',
        sourceType: 'blog',
        snippet: '화재 예방을 위해 지하주차장에서는 충전율을 90% 이하로 제한하는 것을 권고해야 한다. 과충전이 화재의 주요 원인 중 하나이기 때문이다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      }
    ],
    opposeOpinions: [
      {
        title: '전기차 화재율, 내연기관차보다 낮다',
        url: 'https://auto-tech-news.com/ev-vs-ice-fire-statistics',
        source: 'Auto Tech News',
        sourceType: 'news',
        snippet: '실제 통계를 보면 전기차의 화재 발생률은 10만 대당 25건으로, 내연기관차의 1,530건에 비해 현저히 낮다. 최근의 화재 사고들이 언론에 크게 보도되면서 전기차가 더 위험하다는 잘못된 인식이 퍼지고 있다. 과학적 데이터를 바탕으로 판단해야 한다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.93
      },
      {
        title: '전기차 기술 발전으로 안전성 크게 향상',
        url: 'https://ev-tech-blog.com/battery-safety-improvements',
        source: 'EV Technology Blog',
        sourceType: 'blog',
        snippet: '최신 전기차들은 배터리 관리 시스템(BMS), 열관리 시스템, 다층 보호 구조 등 안전 기술이 대폭 강화되었다. LFP 배터리 등 더 안전한 배터리 화학 조성도 개발되고 있다. 몇 건의 사고로 전체 전기차 산업을 부정적으로 보는 것은 불공정하다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.88
      },
      {
        title: '전기차 화재 공포, 환경 전환을 막는다',
        url: 'https://youtube.com/watch?v=ev-fear-environment',
        source: 'Green Future Channel',
        sourceType: 'youtube',
        snippet: '전기차에 대한 과도한 공포는 기후변화 대응을 위한 친환경 차량 전환을 저해합니다. 내연기관차도 매년 수많은 화재 사고가 발생하지만 이슈가 되지 않습니다. 합리적인 안전 대책과 함께 전기차 보급을 지속해야 합니다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.85
      },
      {
        title: '주차 금지는 재산권 침해',
        url: 'https://legal-review.com/ev-parking-rights',
        source: 'Legal Review',
        sourceType: 'news',
        snippet: '과학적 근거 없이 막연한 불안감만으로 전기차의 지하주차장 출입을 금지하는 것은 입주민의 재산권을 침해하는 행위다. 법적으로도 문제가 될 소지가 크며, 갈등을 조장하기보다는 안전 시설 확충이 우선이다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.86
      },
      {
        title: '과도한 규제는 전기차 산업 경쟁력 약화',
        url: 'https://industry-watch.com/ev-regulation-impact',
        source: 'Industry Watch',
        sourceType: 'news',
        snippet: '한국만 유독 엄격한 규제를 적용하면 국내 전기차 산업의 경쟁력이 약화될 수 있다. 글로벌 표준에 맞춘 합리적인 규제가 필요하다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '소비자 선택권 제한 반대',
        url: 'https://consumer-choice.org/ev-freedom',
        source: 'Consumer Choice',
        sourceType: 'blog',
        snippet: '어떤 차를 탈지는 소비자의 자유다. 안전을 이유로 전기차 구매나 이용을 제한하는 것은 부당하다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.84
      }
    ],
    neutralOpinions: [
      {
        title: '전기차 화재, 냉정한 분석 필요',
        url: 'https://research-journal.com/ev-fire-analysis',
        source: 'Research Journal',
        sourceType: 'news',
        snippet: '전기차 화재는 발생 빈도는 낮지만 한 번 발생하면 진압이 어렵고 피해가 크다는 특성이 있다. 내연기관차와는 다른 접근이 필요하며, 감정적 대응보다는 과학적 데이터에 기반한 안전 대책 마련이 중요하다. 주차 인프라, 소방 대응, 보험 체계 등 다각적인 검토가 필요하다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.90
      },
      {
        title: '전문가들이 말하는 전기차 화재의 진실',
        url: 'https://youtube.com/watch?v=ev-fire-expert-panel',
        source: 'Expert Panel Discussion',
        sourceType: 'youtube',
        snippet: '전기차 화재는 내연기관차 화재와 다른 특성을 가지고 있습니다. 빈도는 낮지만 진압 난이도가 높고, 예측이 어렵습니다. 과장도 과소평가도 모두 위험합니다. 배터리 기술 개선과 함께 소방 인프라, 주차 정책 등을 종합적으로 개선해야 합니다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.87
      },
      {
        title: '보험료 체계 개편 논의',
        url: 'https://insurance-news.com/ev-insurance',
        source: 'Insurance News',
        sourceType: 'news',
        snippet: '전기차의 화재 위험도를 반영하여 보험료 체계를 합리적으로 개편해야 한다. 안전 장치를 장착한 차량에는 할인을 제공하는 등 인센티브가 필요하다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.85
      },
      {
        title: '소방 인프라 확충이 먼저',
        url: 'https://fire-safety.org/infrastructure',
        source: 'Fire Safety Org',
        sourceType: 'blog',
        snippet: '전기차 보급 속도에 비해 소방 인프라 확충은 더디다. 이동식 수조, 질식 소화포 등 전기차 화재 전용 장비를 전국 소방서에 보급해야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '공동주택 관리 규약 가이드라인 필요',
        url: 'https://apt-management.com/guideline',
        source: 'Apt Management',
        sourceType: 'news',
        snippet: '아파트마다 제각각인 전기차 주차 규정을 통일할 수 있는 정부 차원의 가이드라인이 필요하다. 입주민 간 갈등을 줄이는 기준이 되어야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.83
      }
    ],
    alternativeOpinions: [
      {
        title: '전기차 전용 주차구역 및 소방 시설 의무화',
        url: 'https://urban-planning.com/ev-parking-zones',
        source: 'Urban Planning Institute',
        sourceType: 'blog',
        snippet: '전기차를 금지하는 대신, 전기차 전용 주차구역을 별도로 마련하고 해당 구역에 강화된 소방 시설을 설치하는 방안이 효과적이다. 스프링클러, 배연 시설, 열감지 센서 등을 갖춘 전용 공간에서 충전과 주차가 이루어지도록 하면 안전과 전기차 보급을 모두 달성할 수 있다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.95
      },
      {
        title: '배터리 교체형(배터리 스왑) 전기차 확대',
        url: 'https://auto-innovation.com/battery-swap-solution',
        source: 'Auto Innovation Weekly',
        sourceType: 'news',
        snippet: '중국에서 성공을 거두고 있는 배터리 교체형 전기차는 충전 시간을 단축하고, 배터리 상태를 중앙에서 관리할 수 있어 안전성이 높다. 개인이 노후 배터리를 계속 사용하는 위험을 줄이고, 전문 시설에서 배터리를 관리함으로써 화재 위험을 대폭 감소시킬 수 있는 대안이다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.91
      },
      {
        title: 'AI 기반 배터리 건강 모니터링 시스템',
        url: 'https://youtube.com/watch?v=ai-battery-monitoring',
        source: 'Tech Innovation Hub',
        sourceType: 'youtube',
        snippet: 'AI와 IoT를 활용하여 전기차 배터리의 건강 상태를 실시간으로 모니터링하고, 이상 징후를 조기에 감지하는 시스템이 개발되고 있습니다. 온도, 전압, 충방전 패턴을 분석하여 화재 위험을 사전에 예측하고 경고할 수 있습니다. 이러한 예방적 접근이 가장 효과적인 대안입니다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.93
      },
      {
        title: '전고체 배터리 개발 가속화',
        url: 'https://science-daily.com/solid-state-battery',
        source: 'Science Daily',
        sourceType: 'news',
        snippet: '화재 위험이 거의 없는 전고체 배터리 상용화를 앞당겨야 한다. 전해질이 고체라 열폭주 위험이 낮고 에너지 밀도도 높다. 정부와 기업의 R&D 투자를 집중하여 차세대 배터리 기술을 선점하는 것이 근본적인 해결책이다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.89
      },
      {
        title: '스마트 충전 시스템 보급',
        url: 'https://smart-grid.com/smart-charging',
        source: 'Smart Grid News',
        sourceType: 'blog',
        snippet: '배터리 상태와 전력망 상황에 따라 충전 속도를 조절하는 스마트 충전기를 보급하여 과충전과 과열을 방지해야 한다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '전기차 화재 전용 소화 설비 개발',
        url: 'https://fire-tech.com/ev-extinguisher',
        source: 'Fire Tech Lab',
        sourceType: 'news',
        snippet: '기존 소화기로는 진압이 어려운 전기차 화재를 효과적으로 끌 수 있는 새로운 소화 약제와 장비를 개발해야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      }
    ],
    futurePrediction: `전기차 배터리 안전 논란은 향후 1-2년간 지속되면서 새로운 안전 기준과 인프라가 마련될 것으로 예상됩니다.

**단기 전망 (6개월-1년)**
정부 차원의 전기차 배터리 안전 기준이 강화될 것입니다. 지하주차장에 대한 소방 안전 규정이 개정되고, 노후 배터리에 대한 점검 의무화가 시행될 전망입니다. 일부 아파트 단지에서는 전기차 주차 제한이 일시적으로 확대될 수 있으나, 법적 분쟁도 예상됩니다.

**중기 전망 (1-2년)**
배터리 기술의 발전으로 LFP(리튬인산철) 배터리 등 더 안전한 배터리가 주류를 이룰 것입니다. 전기차 전용 주차 구역과 강화된 소방 시설이 신축 건물에 의무화되고, 기존 건물도 단계적으로 시설을 개선할 것입니다. AI 기반 배터리 건강 모니터링 시스템이 상용화됩니다.

**장기 전망 (2-3년 이상)**
전고체 배터리 등 차세대 배터리 기술이 상용화되면서 화재 위험이 근본적으로 감소할 것입니다. 배터리 교체형 전기차와 중앙 집중식 배터리 관리 시스템이 확산될 가능성이 있습니다. 전기차 보험 체계도 더욱 정교해질 것입니다.

**예상되는 영향**
- 긍정적: 안전 기술 발전, 소방 인프라 개선, 배터리 산업 고도화
- 부정적: 단기적 전기차 보급 둔화, 주차 갈등, 보험료 상승
- 중립적: 전기차 관련 규제 산업 성장, 배터리 검사 시장 확대

결국 초기의 안전 우려는 기술 발전과 제도 개선을 통해 해소될 것이며, 전기차는 내연기관차보다 더 안전한 모빌리티로 자리잡게 될 것입니다. 다만 이 과정에서 충분한 안전 투자와 합리적인 규제가 필수적입니다.`,
    confidence: 0.88,
    analyzedAt: '2025-10-31T13:45:00Z'
  },

  // 예시 4: 원격근무 (한국어)
  remoteWorkKo: {
    analysisId: 'example-remote-work-ko',
    isValid: true,
    originalContent: {
      title: '대기업들, 사무실 복귀 의무화 확대... 원격근무 시대 끝나나',
      summary: '국내 주요 대기업들이 직원들의 사무실 복귀를 의무화하는 정책을 잇따라 발표하고 있다. 코로나19 팬데믹 기간 동안 확대되었던 원격근무 제도가 축소되면서 직장인들의 반발이 거세지고 있다. 기업들은 대면 소통을 통한 업무 효율성 증대와 조직 문화 강화를 이유로 들고 있지만, 직원들은 출퇴근 시간 낭비와 워라밸 악화를 우려하며 강하게 반발하고 있다. 특히 IT 업계를 중심으로 인재 이탈 조짐까지 보이고 있어 기업들의 고민이 깊어지고 있다.',
      detectedLanguage: 'ko'
    },
    keywords: ['원격근무', '재택근무', '사무실 복귀', '워라밸', '하이브리드 근무', '업무 효율성', '기업 문화', '인재 확보', 'RTO'],
    supportOpinions: [
      {
        title: '대면 협업이 혁신을 만든다',
        url: 'https://business-insight.com/office-collaboration',
        source: 'Business Insight',
        sourceType: 'news',
        snippet: '원격근무는 단기적으로는 효율적이지만, 장기적으로는 팀워크와 혁신을 저해한다는 연구 결과가 나왔다. 특히 신입 직원의 온보딩과 조직 문화 전승에는 대면 근무가 필수적이다. 주요 글로벌 기업들도 사무실 복귀를 강화하고 있다.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.88
      },
      {
        title: '생산성 데이터가 말하는 진실',
        url: 'https://youtube.com/watch?v=productivity-office-return',
        source: 'HR 전문가 채널',
        sourceType: 'youtube',
        snippet: '여러 기업의 내부 데이터 분석 결과, 사무실 근무 시 프로젝트 완료 속도가 평균 23% 빨랐습니다. 즉각적인 소통과 협업이 가능한 환경이 복잡한 업무에서는 더 효과적입니다. 원격근무는 단순 반복 업무에만 적합합니다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.82
      },
      {
        title: '조직 문화와 소속감의 위기',
        url: 'https://culture-lab.com/remote-work-culture',
        source: 'Culture Lab',
        sourceType: 'blog',
        snippet: '화상 회의만으로는 동료애와 소속감을 느끼기 어렵다. 회사의 비전을 공유하고 함께 성장하는 문화를 만들기 위해서는 물리적인 공간에서의 상호작용이 필요하다. 원격근무 장기화로 인한 고립감과 소통 단절이 문제되고 있다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.85
      },
      {
        title: '보안 리스크 관리의 어려움',
        url: 'https://security-news.com/remote-risk',
        source: 'Security News',
        sourceType: 'news',
        snippet: '재택근무 환경은 사내망보다 보안에 취약하다. 중요 데이터 유출이나 해킹 위험이 높아지며, 이를 관리하는 비용도 만만치 않다. 보안이 중요한 기업일수록 사무실 근무가 안전하다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '공정한 평가의 어려움',
        url: 'https://hr-review.com/evaluation-fairness',
        source: 'HR Review',
        sourceType: 'blog',
        snippet: '원격근무자는 사무실 근무자에 비해 성과가 눈에 띄지 않아 평가에서 불이익을 받을 수 있다. 관리자 입장에서도 근태 관리가 어려워 공정성 시비가 생길 수 있다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.84
      },
      {
        title: '지역 상권 활성화',
        url: 'https://local-economy.com/office-return',
        source: 'Local Economy Watch',
        sourceType: 'news',
        snippet: '직장인들이 사무실로 복귀하면 도심 상권이 살아난다. 식당, 카페 등 자영업자들의 생존을 위해서라도 유동 인구가 늘어나야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.81
      }
    ],
    opposeOpinions: [
      {
        title: '출퇴근 시간 낭비가 생산성을 갉아먹는다',
        url: 'https://workplace-future.com/commute-waste',
        source: 'Workplace Future',
        sourceType: 'blog',
        snippet: '평균 출퇴근 시간 2시간을 업무나 자기계발에 사용할 수 있다면 생산성은 오히려 향상된다. 원격근무로 직원들의 만족도가 높아지면 이직률이 낮아지고 장기적으로 기업에 이득이다. 사무실 복귀 강요는 시대착오적 발상이다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.90
      },
      {
        title: '재택근무 중단 기업, 인재 이탈 가속화',
        url: 'https://hr-trends.com/remote-work-retention',
        source: 'HR Trends Korea',
        sourceType: 'news',
        snippet: '원격근무를 중단한 기업들에서 핵심 인재의 이탈이 급증하고 있다. 특히 IT, 디자인 등 전문직 인력들은 재택근무를 제공하는 기업으로 이동하는 추세다. 우수 인재 확보 경쟁에서 원격근무는 이제 필수 조건이 되었다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.93
      },
      {
        title: '원격근무가 환경을 살린다',
        url: 'https://youtube.com/watch?v=remote-work-environment',
        source: 'Green Life Channel',
        sourceType: 'youtube',
        snippet: '출퇴근 차량 운행 감소로 탄소 배출이 크게 줄어듭니다. 서울 시내 교통량이 20% 감소하면 대기질이 눈에 띄게 개선됩니다. 기업의 사회적 책임 측면에서도 원격근무를 지속해야 합니다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.79
      },
      {
        title: '업무 몰입도는 집이 더 높다',
        url: 'https://focus-work.com/home-office-focus',
        source: 'Focus Work',
        sourceType: 'blog',
        snippet: '사무실의 소음과 불필요한 회의, 잡담은 업무 집중을 방해한다. 조용한 집에서 일할 때 업무 몰입도가 훨씬 높다는 설문 결과가 있다. 개인의 업무 스타일을 존중해야 한다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.84
      },
      {
        title: '육아와 일의 병행 가능',
        url: 'https://working-parents.com/balance',
        source: 'Working Parents',
        sourceType: 'news',
        snippet: '원격근무는 워킹맘, 워킹대디가 경력을 단절하지 않고 육아를 병행할 수 있게 해주는 최고의 복지다. 저출산 시대에 꼭 필요한 제도다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '사무실 유지 비용 절감',
        url: 'https://cost-saving.com/office-rent',
        source: 'Cost Saving Tips',
        sourceType: 'blog',
        snippet: '기업 입장에서도 사무실 임대료, 관리비, 비품비 등을 획기적으로 줄일 수 있다. 절감된 비용을 직원 복지나 R&D에 투자하는 것이 더 효율적이다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      }
    ],
    neutralOpinions: [
      {
        title: '원격근무 vs 사무실, 정답은 없다',
        url: 'https://work-research.org/hybrid-work-study',
        source: 'Work Research Institute',
        sourceType: 'news',
        snippet: '업종과 직무에 따라 최적의 근무 방식이 다르다. 창의적 협업이 필요한 업무는 대면이, 집중이 필요한 개인 업무는 원격이 효과적이다. 획일적인 정책보다는 팀과 개인의 선택권을 존중하는 유연한 접근이 필요하다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.86
      },
      {
        title: '세대별로 다른 근무 선호도',
        url: 'https://generation-gap.com/work-preference',
        source: 'Social Trends',
        sourceType: 'news',
        snippet: 'MZ세대는 원격근무를 선호하는 반면, 기성세대는 사무실 근무를 선호하는 경향이 있다. 이는 주거 환경, 업무 스타일, 가치관의 차이에서 기인한다. 세대 간 갈등을 줄이고 서로를 이해하는 노력이 필요하다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.81
      },
      {
        title: '하이브리드 근무의 정착 과정',
        url: 'https://hybrid-transition.com/process',
        source: 'Hybrid Work Lab',
        sourceType: 'blog',
        snippet: '완전 원격이나 완전 출근보다는 하이브리드 근무가 대세가 되고 있다. 하지만 운영 방식에 대한 시행착오가 겪고 있으며, 최적의 모델을 찾아가는 과정이다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.85
      },
      {
        title: '디지털 노마드 트렌드',
        url: 'https://digital-nomad.org/trend',
        source: 'Digital Nomad Life',
        sourceType: 'news',
        snippet: '장소에 구애받지 않고 일하는 디지털 노마드가 늘어나고 있다. 기업들도 이에 맞춰 채용 방식을 변화시켜야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.83
      },
      {
        title: '법적 제도 정비 필요',
        url: 'https://labor-law.com/remote-work-law',
        source: 'Labor Law Review',
        sourceType: 'blog',
        snippet: '원격근무 시 발생할 수 있는 산재, 근로 시간 산정 등에 대한 법적 기준이 명확하지 않다. 관련 법 제도를 정비해야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.82
      }
    ],
    alternativeOpinions: [
      {
        title: '하이브리드 모델이 미래다',
        url: 'https://future-work.com/hybrid-model',
        source: 'Future of Work',
        sourceType: 'blog',
        snippet: '주 2-3일 사무실, 2-3일 재택의 하이브리드 모델이 최적의 균형점이다. 중요한 회의와 협업은 사무실에서, 집중 업무는 재택에서 수행하는 방식으로 양쪽의 장점을 모두 취할 수 있다. 글로벌 선진 기업들이 이미 성공적으로 운영 중이다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.95
      },
      {
        title: '업무 성과 기반 평가로 전환해야',
        url: 'https://youtube.com/watch?v=output-based-evaluation',
        source: 'Management Innovation',
        sourceType: 'youtube',
        snippet: '근무 장소가 아니라 업무 성과로 평가하는 시스템을 구축하면 이 논쟁은 해결됩니다. 목표 관리(OKR)와 성과 중심 문화를 정착시키면 직원들이 어디서 일하든 생산성이 보장됩니다. 중요한 것은 장소가 아니라 결과물입니다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.91
      },
      {
        title: '디지털 협업 도구 개선이 해답',
        url: 'https://tech-workplace.com/digital-collaboration',
        source: 'Tech Workplace',
        sourceType: 'news',
        snippet: '원격근무의 단점으로 지적되는 소통 문제는 기술로 해결 가능하다. AI 기반 회의 요약, 실시간 협업 툴, 가상 오피스 플랫폼 등을 적극 도입하면 물리적 거리의 한계를 극복할 수 있다. 기술 투자가 사무실 임대료보다 훨씬 효율적이다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.87
      },
      {
        title: '거점 오피스 활용 확대',
        url: 'https://office-trend.com/satellite-office',
        source: 'Office Trend',
        sourceType: 'news',
        snippet: '본사로 출근하는 대신 집 근처의 거점 오피스나 공유 오피스를 활용하게 하자. 출퇴근 시간은 줄이면서도 업무에 집중할 수 있는 환경을 제공할 수 있다. 스마트 워크 센터 구축이 대안이 될 수 있다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.89
      },
      {
        title: '워케이션(Workation) 지원',
        url: 'https://workation-korea.com/benefit',
        source: 'Workation Guide',
        sourceType: 'blog',
        snippet: '휴가지에서 일과 휴식을 병행하는 워케이션을 복지 제도로 도입하자. 직원들의 창의성을 높이고 리프레시 기회를 제공할 수 있다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '자율 좌석제 도입',
        url: 'https://smart-office.com/hot-desking',
        source: 'Smart Office Design',
        sourceType: 'news',
        snippet: '사무실을 고정석이 아닌 자율 좌석제로 운영하여 공간 효율을 높이고, 필요할 때만 출근하는 문화를 만들자.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      }
    ],
    futurePrediction: `원격근무와 사무실 복귀 논쟁은 향후 1-2년간 계속되면서 새로운 균형점을 찾아갈 것으로 예상됩니다.

**단기 전망 (6개월-1년)**
대기업 중심으로 사무실 복귀가 확대되지만, 인재 이탈 문제가 불거지면서 일부 기업들이 정책을 재검토할 것입니다. 특히 IT와 스타트업 업계는 원격근무를 경쟁력으로 활용하며 차별화를 시도할 것입니다.

**중기 전망 (1-2년)**
하이브리드 근무 모델이 주류로 자리잡을 것입니다. 주 2-3일 출근이 표준이 되며, 업무 성과 중심의 평가 체계가 확산됩니다. 기업들은 사무실 공간을 협업 중심으로 재설계하게 될 것입니다.

**장기 전망 (2-3년 이상)**
완전한 원격 근무와 사무실 근무 중 하나를 선택하는 이분법적 접근은 사라지고, 직무와 개인 특성에 맞춘 맞춤형 근무 방식이 정착될 것입니다. 메타버스 오피스 등 새로운 형태의 가상 협업 공간이 등장할 수 있습니다.

**예상되는 영향**
- 긍정적: 워라밸 개선, 지역 균형 발전, 사무실 비용 절감
- 부정적: 조직 문화 약화 우려, 세대 간 갈등, 평가의 공정성 이슈
- 중립적: 부동산 시장 재편, 협업 도구 시장 성장

결국 한국 기업들도 글로벌 트렌드를 따라 유연 근무제를 받아들이게 될 것이며, 이는 기업 경쟁력과 직원 만족도 모두를 높이는 방향으로 진화할 것입니다.`,
    confidence: 0.89,
    analyzedAt: '2025-10-31T12:15:00Z'
  },

  // 예시 5: 의대 정원 확대 (한국어)
  medicalSchoolQuotaKo: {
    analysisId: 'example-med-school-quota-ko',
    isValid: true,
    originalContent: {
      title: '정부, 의대 정원 2천명 대폭 확대 발표... 의료계 집단 행동 예고',
      summary: '정부가 필수의료 붕괴를 막고 지역 간 의료 격차를 해소하기 위해 2025학년도부터 의과대학 정원을 2,000명 늘리기로 확정했다. 이는 27년 만의 증원이다. 정부는 고령화로 인한 의료 수요 증가를 근거로 제시했으나, 대한의사협회 등 의료계는 교육 질 저하와 건강보험 재정 파탄을 우려하며 전면 파업 등 강력한 투쟁을 예고해 "의료 대란" 우려가 커지고 있다.',
      detectedLanguage: 'ko'
    },
    keywords: ['의대 증원', '필수의료', '지역의료', '의사 파업', '의료 대란', '공공의대', '건강보험', '낙수효과'],
    supportOpinions: [
      {
        title: '의사 부족 심각, 증원은 선택 아닌 필수',
        url: 'https://health-policy-news.com/doctor-shortage-crisis',
        source: 'Health Policy News',
        sourceType: 'news',
        snippet: 'OECD 통계에 따르면 한국의 인구 1천 명당 의사 수는 최하위권이다. "응급실 뺑뺑이" 사고가 반복되고 지방에서는 연봉 4억을 줘도 의사를 못 구하는 실정이다. 고령화로 의료 수요가 폭증할 미래를 대비하려면 의대 증원은 더 이상 미룰 수 없는 과제다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.96
      },
      {
        title: '지역 소멸 막으려면 의사부터 늘려야',
        url: 'https://local-voice.com/regional-medical-care',
        source: 'Local Voice',
        sourceType: 'blog',
        snippet: '지방 중소도시의 의료 공백은 지역 소멸을 가속화하는 주원인이다. 아픈 아이를 안고 서울로 올라가야 하는 현실을 바꿔야 한다. 의사 수를 늘려야 낙수효과로라도 지방에 의사가 남을 가능성이 생긴다. 국민의 생명권이 직역 이기주의보다 우선이다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.91
      },
      {
        title: '의대 증원 찬성 여론 70% 육박',
        url: 'https://public-opinion-poll.com/med-school-survey',
        source: 'Korea Research Center',
        sourceType: 'news',
        snippet: '최근 여론조사 결과 국민의 70% 이상이 의대 정원 확대에 찬성하는 것으로 나타났다. 국민들은 소아과 오픈런, 응급실 부족 등 피부로 느끼는 의료 공백 해소를 강력히 원하고 있으며, 의사들의 집단 행동에 대해서는 싸늘한 반응을 보이고 있다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.89
      },
      {
        title: '의사 카르텔 타파해야',
        url: 'https://social-justice.org/doctor-cartel',
        source: 'Social Justice Watch',
        sourceType: 'blog',
        snippet: '의사들은 정원 통제를 통해 기득권을 유지해왔다. 경쟁 없는 시장은 부패하기 마련이다. 증원을 통해 경쟁을 유도하고 서비스 질을 높여야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.87
      },
      {
        title: '고령화 사회 대비책',
        url: 'https://aging-society.com/medical-demand',
        source: 'Aging Society Research',
        sourceType: 'news',
        snippet: '초고령 사회 진입으로 의료 수요가 폭발적으로 증가할 것이다. 지금 늘리지 않으면 10년 뒤에는 감당할 수 없는 의료 대란이 올 것이다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.88
      },
      {
        title: '과학 기술 의사 양성 필요',
        url: 'https://med-tech.com/physician-scientist',
        source: 'MedTech Review',
        sourceType: 'blog',
        snippet: '임상 의사뿐만 아니라 바이오 헬스 산업을 이끌 의사 과학자 양성을 위해서도 정원 확대가 필요하다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.85
      }
    ],
    opposeOpinions: [
      {
        title: '무분별한 증원은 의대 교육 부실화 초래',
        url: 'https://medical-edu-forum.com/education-quality-concern',
        source: 'Medical Edu Forum',
        sourceType: 'blog',
        snippet: '갑작스러운 2천 명 증원은 현재 의대 교육 인프라로는 감당할 수 없다. 해부학 실습 카데바 부족, 교수 인력난 등으로 교육의 질이 급격히 떨어질 것이다. 이는 결국 실력 없는 의사를 양성하게 되어 국민 건강에 위해를 끼칠 것이다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.94
      },
      {
        title: '의사 수 늘어도 기피과는 안 간다',
        url: 'https://doctor-voice.com/essential-care-reality',
        source: 'Doctor Voice',
        sourceType: 'news',
        snippet: '필수의료 붕괴의 본질은 의사 수 부족이 아니라, 낮은 수가와 높은 법적 책임 부담 때문이다. 정원을 늘려봤자 늘어난 의사들은 결국 피부과, 성형외과로 쏠릴 것이다. 근본적인 의료 시스템 개선 없이 숫자만 늘리는 것은 포퓰리즘 정책이다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.92
      },
      {
        title: '건강보험 재정 파탄 경고',
        url: 'https://youtube.com/watch?v=med-insurance-crisis',
        source: 'Healthcare Econ TV',
        sourceType: 'youtube',
        snippet: '의사가 늘어나면 의료 행위 자체가 늘어나 국민 의료비가 급증하고 건강보험 재정이 고갈될 수 있습니다. 과잉 진료가 일상화될 것이며, 이는 결국 미래 세대의 빚으로 돌아올 것입니다. OECD 통계의 맹점을 봐야 합니다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.87
      },
      {
        title: '이공계 인재 블랙홀 우려',
        url: 'https://science-edu.com/brain-drain',
        source: 'Science Edu News',
        sourceType: 'news',
        snippet: '의대 쏠림 현상이 심각한 상황에서 정원까지 늘리면 우수한 이공계 인재들이 모두 의대로 몰려 국가 과학 기술 경쟁력이 무너질 것이다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      },
      {
        title: '의료 영리화 가속화',
        url: 'https://public-health-watch.com/commercialization',
        source: 'Public Health Watch',
        sourceType: 'blog',
        snippet: '경쟁이 치열해지면 의사들은 생존을 위해 비급여 진료 등 돈이 되는 진료에 집중하게 되어 의료의 공공성이 훼손될 것이다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.85
      },
      {
        title: '정부의 일방적 정책 추진 비판',
        url: 'https://policy-critique.com/unilateral-decision',
        source: 'Policy Critique',
        sourceType: 'news',
        snippet: '전문가인 의료계와 충분한 협의 없이 정치적 목적으로 정책을 밀어붙이는 것은 민주적 절차를 무시하는 것이다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.83
      }
    ],
    neutralOpinions: [
      {
        title: '증원 필요하지만 규모와 속도 조절해야',
        url: 'https://policy-debate.com/med-school-compromise',
        source: 'Policy Debate',
        sourceType: 'news',
        snippet: '의사 부족 문제 해결을 위해 증원은 필요하지만, 2천 명이라는 숫자는 너무 급진적이다. 의료계가 수용 가능하고 교육 현장이 대비할 수 있도록 단계적 증원(매년 300~500명) 안을 가지고 대화해야 한다. 강대강 대치는 환자 피해만 키운다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.88
      },
      {
        title: '전문가 제언: 의대 증원 논란의 해법',
        url: 'https://youtube.com/watch?v=med-reform-expert',
        source: 'Insight Forum',
        sourceType: 'youtube',
        snippet: '정부와 의협 모두 극단적인 주장을 내려놓아야 합니다. 증원과 동시에 필수의료 패키지 정책의 구체적인 재원 마련 방안이 제시되어야 의료계를 설득할 수 있습니다. 의사 수보다 의사 배치와 유인 체계가 더 중요합니다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.85
      },
      {
        title: '의료 전달 체계 개선이 병행되어야',
        url: 'https://med-system.com/delivery-system',
        source: 'Med System Review',
        sourceType: 'blog',
        snippet: '상급 종합병원 쏠림 현상을 해결하지 않으면 의사를 늘려도 효과가 제한적이다. 1차, 2차, 3차 병원의 역할을 명확히 하고 의료 전달 체계를 바로잡아야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      },
      {
        title: '국민 건강권이 최우선',
        url: 'https://patient-rights.org/health-first',
        source: 'Patient Rights Group',
        sourceType: 'news',
        snippet: '정부와 의료계의 싸움에 환자들이 볼모가 되어서는 안 된다. 진료 공백이 발생하지 않도록 비상 진료 대책을 철저히 마련해야 한다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.89
      },
      {
        title: '장기적인 의료 인력 수급 계획 필요',
        url: 'https://manpower-plan.com/long-term',
        source: 'Manpower Planning',
        sourceType: 'blog',
        snippet: '정치적 상황에 따라 바뀌는 정책이 아니라, 인구 구조 변화와 의료 기술 발전을 고려한 장기적이고 과학적인 인력 수급 계획을 세워야 한다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.84
      }
    ],
    alternativeOpinions: [
      {
        title: '지역의사제 도입이 실질적 대안',
        url: 'https://regional-dev.com/regional-doctor-system',
        source: 'Regional Development Institute',
        sourceType: 'blog',
        snippet: '단순 증원보다는 장학금 등을 지원받고 일정 기간(10년 등) 특정 지역에서 의무 복무하는 "지역의사제"를 법제화해야 한다. 이는 위헌 논란을 넘어설 정교한 설계가 필요하지만, 지방 의료 공백을 메울 가장 확실한 방법이다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.93
      },
      {
        title: '공공의대 설립으로 공공의료 강화',
        url: 'https://public-health.org/public-med-school',
        source: 'Public Health Coalition',
        sourceType: 'news',
        snippet: '민간 의대 정원만 늘려서는 수익성이 낮은 필수의료 분야로 인력이 가지 않는다. 국가가 직접 의사를 양성하고 배치하는 "공공의대"를 설립하여, 감염병 대응과 응급 외상 등 국가 필수 의료를 전담하게 해야 한다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.90
      },
      {
        title: '수가 체계 전면 개편 및 사법 리스크 완화',
        url: 'https://youtube.com/watch?v=medical-fee-reform',
        source: 'Medical Policy Channel',
        sourceType: 'youtube',
        snippet: '기피과(소아과, 산부인과, 흉부외과)의 의료 수가를 획기적으로 인상하고, 의료 사고에 대한 형사 처벌 특례법을 제정해야 합니다. 의사들이 안심하고 필수의료에 종사할 환경을 만드는 것이 인원 증원보다 훨씬 효과적인 대안입니다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.89
      },
      {
        title: 'PA(진료보조) 간호사 법제화',
        url: 'https://nursing-news.com/pa-nurse',
        source: 'Nursing News',
        sourceType: 'news',
        snippet: '의사 업무의 일부를 위임받아 수행하는 PA 간호사를 양성화하여 의사 부족 문제를 완화하고 진료 효율성을 높여야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.87
      },
      {
        title: '비대면 진료 활성화',
        url: 'https://telemedicine.kr/expansion',
        source: 'Telemedicine Korea',
        sourceType: 'blog',
        snippet: '경증 환자는 비대면 진료를 이용하게 하여 의료 자원의 효율성을 높이고, 의료 취약지 주민들의 접근성을 개선해야 한다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.85
      },
      {
        title: '해외 의사 면허 인정 확대',
        url: 'https://global-med.com/foreign-license',
        source: 'Global Med Review',
        sourceType: 'news',
        snippet: '검증된 해외 의대 졸업생들의 국내 면허 취득 문턱을 낮춰 부족한 의사 인력을 수혈하는 방안도 고려해야 한다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.82
      }
    ],
    futurePrediction: `의대 증원 갈등은 단기간에 해소되기 어려우며, 향후 한국 의료 시스템의 대전환점이 될 전망입니다.

**단기 전망 (6개월-1년)**
정부의 증원 강행과 전공의 파업 등 강대강 대치가 지속되며 의료 현장의 혼란이 불가피합니다. 응급실 과부하 등 환자 피해가 가시화되면 여론의 향배가 중요 변수가 될 것입니다. 결국 일부 규모 조정이나 유예 기간을 둔 중재안으로 타협할 가능성이 높습니다.

**중기 전망 (1-2년)**
증원이 확정되더라도 의대 교육 현장의 준비 부족 문제가 불거질 것입니다. 동시에 '필수의료 패키지' 정책이 시행되면서 수가 조정 등 보상 체계 개편이 이루어지겠지만, 피부/미용 시장 개방 등 독소 조항을 둔 갈등은 지속될 것입니다.

**장기 전망 (3년 이상)**
늘어난 의사 인력이 배출되는 10년 후부터 효과를 검증할 수 있습니다. 긍정적 시나리오에서는 지역 의료 공백이 메워지겠으나, 부정적 시나리오에서는 건강보험 재정 악화와 의사 유인 수요로 인한 의료비 폭증이 사회적 문제가 될 수 있습니다. AI 진료 도입 등 기술적 변화와 맞물려 의사의 역할론이 재정립될 것입니다.`,
    confidence: 0.92,
    analyzedAt: '2025-11-03T09:00:00Z'
  },

  // 예시 6: 개 식용 금지법 (한국어)
  dogMeatBanKo: {
    analysisId: 'example-dog-meat-ban-ko',
    isValid: true,
    originalContent: {
      title: "'개 식용 금지법' 국회 본회의 통과... 2027년부터 완전 금지",
      summary: '식용을 목적으로 개를 사육·도살·유통하는 것을 금지하는 법안이 여야 합의로 국회를 통과했다. 법안은 3년의 유예기간을 거쳐 2027년부터 본격 시행되며, 위반 시 징역형 등의 처벌을 받게 된다. 동물권 단체는 "역사적 결단"이라며 환영했지만, 육견 협회와 보신탕 업주들은 "생존권 박탈"이라며 헌법 소원과 시위를 예고했다.',
      detectedLanguage: 'ko'
    },
    keywords: ['개 식용 금지', '동물권', '보신탕', '육견 협회', '생존권', '식문화', '반려동물', '전업 지원'],
    supportOpinions: [
      {
        title: '반려동물 인구 1500만 시대, 당연한 수순',
        url: 'https://animal-rights-korea.com/historic-ban',
        source: 'Animal Rights Korea',
        sourceType: 'news',
        snippet: '개는 더 이상 가축이 아니라 가족이다. 국민 대다수가 개 식용에 반대하는 상황에서 법제화는 늦었지만 다행스러운 일이다. 이는 한국이 동물 복지 선진국으로 나아가는 중요한 이정표가 될 것이며, 국제 사회에서의 국가 이미지 제고에도 기여할 것이다.',
        publishedDate: '2025-10-25',
        relevanceScore: 0.95
      },
      {
        title: '비위생적 도살 환경, 국민 건강 위협했다',
        url: 'https://food-safety-blog.com/dog-meat-hygiene',
        source: 'Food Safety Watch',
        sourceType: 'blog',
        snippet: '개 식용은 축산물 위생관리법의 사각지대에 있어 항생제 남용, 비위생적 도살, 음식물 쓰레기 급여 등 심각한 문제가 있었다. 국민 먹거리 안전을 위해서라도 관리 불가능한 개 식용 산업은 종식되어야 한다.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.88
      },
      {
        title: '미래 세대를 위한 윤리적 결단',
        url: 'https://youtube.com/watch?v=animal-ethics',
        source: 'Ethics Focus',
        sourceType: 'youtube',
        snippet: '전통이라는 이름으로 동물의 고통을 정당화할 수 없습니다. 젊은 세대일수록 개 식용을 혐오 문화로 인식합니다. 사회적 갈등 비용을 줄이고 생명 존중 문화를 확산하기 위해 법적 금지는 필수적인 조치였습니다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.90
      },
      {
        title: '국제적 위상 제고',
        url: 'https://global-image.com/korea-dog-meat',
        source: 'Global Image Review',
        sourceType: 'news',
        snippet: '개 식용 문화는 한국의 국제적 이미지를 훼손하는 주된 요인이었다. 금지법 통과로 문화 선진국으로서의 위상을 높일 수 있게 되었다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '동물 학대 방지 효과',
        url: 'https://animal-protection.org/abuse-prevention',
        source: 'Animal Protection',
        sourceType: 'blog',
        snippet: '식용 목적의 사육 과정에서 발생하는 끔찍한 동물 학대를 원천적으로 차단할 수 있다. 뜬장 사육, 전기 도살 등 잔인한 관행이 사라질 것이다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.89
      },
      {
        title: '전염병 예방',
        url: 'https://disease-control.com/zoonosis',
        source: 'Disease Control Center',
        sourceType: 'news',
        snippet: '비위생적인 사육 환경은 인수공통전염병의 온상이 될 수 있다. 개 식용 금지는 공중보건 측면에서도 긍정적이다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.85
      }
    ],
    opposeOpinions: [
      {
        title: '개인 식습관까지 법으로 막나? 과도한 기본권 침해',
        url: 'https://liberty-forum.com/food-choice-freedom',
        source: 'Liberty Forum',
        sourceType: 'blog',
        snippet: '무엇을 먹을지는 개인의 자유 영역이다. 국가가 특정 식재료를 법으로 금지하는 것은 전체주의적 발상이며 헌법상 행복추구권과 자기결정권을 침해한다. 소, 돼지, 닭은 되고 개만 안 된다는 논리는 종차별주의이자 감상적 접근이다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.92
      },
      {
        title: '육견 농가, "보상 없는 폐업은 죽으라는 것"',
        url: 'https://farmers-voice.com/livelihood-crisis',
        source: 'Farmers Voice',
        sourceType: 'news',
        snippet: '평생 개를 키워 생계를 유지해 온 농민들에게 하루아침에 문을 닫으라는 것은 폭력이다. 정부가 제시한 전업 지원금은 턱없이 부족하며, 고령의 농민들이 새로운 일자리를 찾는 것은 불가능하다. 정당하고 합리적인 보상안이 선행되어야 한다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.94
      },
      {
        title: '전통 식문화 말살 정책 비판',
        url: 'https://youtube.com/watch?v=traditional-food-ban',
        source: 'Culture Keepers',
        sourceType: 'youtube',
        snippet: '보신탕은 한국의 고유한 여름 보양 문화였습니다. 서구의 시각에 맞춰 우리 전통을 야만시하고 없애려는 것은 문화 사대주의입니다. 자연스럽게 수요가 줄어들어 사라지도록 둬야지 법으로 강제하는 것은 옳지 않습니다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.86
      },
      {
        title: '음성적 도축 우려',
        url: 'https://underground-market.com/illegal-slaughter',
        source: 'Market Watch',
        sourceType: 'news',
        snippet: '법으로 금지하면 오히려 음지로 숨어들어 위생 관리가 전혀 안 되는 불법 도축이 성행할 것이다. 풍선 효과를 경계해야 한다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '다른 가축과의 형평성 문제',
        url: 'https://livestock-equity.com/fairness',
        source: 'Livestock Equity',
        sourceType: 'blog',
        snippet: '개만 특별 대우하는 것은 다른 가축을 키우는 농가와의 형평성에 어긋난다. 모든 생명은 소중하다는 논리라면 채식을 강요해야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.85
      },
      {
        title: '관련 산업 종사자 피해',
        url: 'https://industry-damage.com/related-jobs',
        source: 'Industry Damage Report',
        sourceType: 'news',
        snippet: '농가뿐만 아니라 유통업자, 식당 운영자 등 관련 산업 종사자들의 생계가 막막해진다. 이들에 대한 대책이 미흡하다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      }
    ],
    neutralOpinions: [
      {
        title: '사회적 합의와 연착륙이 관건',
        url: 'https://social-issue-review.com/dog-meat-consensus',
        source: 'Social Issue Review',
        sourceType: 'news',
        snippet: '법안 통과는 시대적 흐름이지만, 이해당사자 간의 갈등은 여전하다. 3년의 유예기간 동안 육견 농가와 상인들이 실제로 업종을 전환할 수 있도록 실질적인 지원책을 마련해야 한다. 갈등을 봉합하는 정부의 세심한 후속 조치가 필요하다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.89
      },
      {
        title: '해외 사례로 본 개 식용 금지 과정',
        url: 'https://global-culture.org/taiwan-case-study',
        source: 'Global Culture Lab',
        sourceType: 'blog',
        snippet: '대만과 필리핀 등 먼저 개 식용을 금지한 국가들의 사례를 참고해야 합니다. 음성적 도축이나 암시장 형성 같은 부작용을 막기 위한 감시 체계가 필요하며, 동시에 동물 보호소 확충 등 유기견 대책도 병행되어야 합니다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.85
      },
      {
        title: '식문화 변화의 자연스러운 흐름',
        url: 'https://food-culture-change.com/trend',
        source: 'Food Culture Trend',
        sourceType: 'news',
        snippet: '법적 금지가 아니더라도 이미 젊은 층을 중심으로 개 식용 인구는 급감하고 있었다. 법은 이러한 사회적 변화를 확인하는 절차일 뿐이다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.83
      },
      {
        title: '유예 기간의 중요성',
        url: 'https://transition-period.com/importance',
        source: 'Policy Transition',
        sourceType: 'blog',
        snippet: '3년이라는 유예 기간을 어떻게 활용하느냐가 중요하다. 농가의 전업을 돕고 사회적 충격을 완화하는 골든타임으로 삼아야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '동물 복지 인식 개선 필요',
        url: 'https://animal-welfare-edu.com/awareness',
        source: 'Animal Welfare Edu',
        sourceType: 'news',
        snippet: '법만 만든다고 끝이 아니다. 동물 생명 존중에 대한 시민 의식을 높이는 교육과 캠페인이 지속되어야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      }
    ],
    alternativeOpinions: [
      {
        title: '폐업 보상금 현실화 및 연금형 지원 제안',
        url: 'https://policy-research.re.kr/compensation-plan',
        source: 'Agri-Policy Institute',
        sourceType: 'news',
        snippet: '일회성 지원금으로는 고령 농민들의 생계를 보장할 수 없다. 농지 매입을 지원하거나 일정 기간 생계비를 지원하는 연금형 보상 제도를 도입해야 한다. 이는 사회적 비용을 최소화하고 원활한 폐업을 유도하는 가장 현실적인 대안이다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.91
      },
      {
        title: '대체 작물 및 흑염소 사육 등 업종 전환 컨설팅',
        url: 'https://farming-consulting.com/alternative-livestock',
        source: 'Farming Consulting',
        sourceType: 'blog',
        snippet: '육견 시설을 활용할 수 있는 흑염소 사육이나 고소득 특용 작물 재배로의 전환을 적극 지원해야 한다. 단순 자금 지원을 넘어 전문 컨설팅과 판로 개척까지 돕는 원스톱 지원 센터를 운영하여 성공적인 전업 모델을 만들어야 한다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.88
      },
      {
        title: '남은 개들에 대한 인도적 보호 방안 마련',
        url: 'https://youtube.com/watch?v=remaining-dogs-plan',
        source: 'Animal Welfare TV',
        sourceType: 'youtube',
        snippet: '농장 폐쇄 후 남겨질 50만 마리 이상의 개들을 어떻게 할 것인지가 큰 문제입니다. 안락사를 최소화하기 위해 대규모 보호 시설 건립과 해외 입양 추진, 그리고 중성화 수술 지원 등 구체적인 동물 보호 대안이 법 시행 전에 마련되어야 합니다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.92
      },
      {
        title: '반려동물 테마파크 조성',
        url: 'https://pet-park.com/development',
        source: 'Regional Development',
        sourceType: 'news',
        snippet: '폐업한 농장 부지를 활용해 반려동물 테마파크나 훈련소를 조성하여 새로운 관광 자원으로 개발하자.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '동물 보호세 도입 검토',
        url: 'https://animal-tax.com/review',
        source: 'Tax Policy Lab',
        sourceType: 'blog',
        snippet: '유기견 보호와 동물 복지 재원 마련을 위해 반려동물 보유세나 동물 보호세를 도입하는 방안을 공론화해야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.85
      },
      {
        title: '식물성 대체육 산업 육성',
        url: 'https://plant-based-meat.com/growth',
        source: 'Food Tech News',
        sourceType: 'news',
        snippet: '육류 소비를 줄이고 대체육 산업을 육성하여 윤리적이고 지속 가능한 식문화를 만들어가야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      }
    ],
    futurePrediction: `개 식용 금지법 통과로 한국 사회의 동물권 인식은 한 단계 도약하겠지만, 시행 전까지 진통은 계속될 것입니다.

**단기 전망 (6개월-1년)**
보상 규모를 둘러싼 정부와 육견 협회 간의 줄다리기가 격화될 것입니다. 협회 측의 시위와 법적 대응이 이어지겠지만, 여론의 지지를 받기는 어려울 것입니다. 지자체별로 실태 조사가 마무리되고 구체적인 지원 가이드라인이 발표될 것입니다.

**중기 전망 (1-2년)**
유예기간 동안 많은 농가들이 폐업하거나 전업을 선택하겠지만, 일부는 음지로 숨어들어 불법 도축을 이어갈 가능성이 있습니다. '개고기' 간판이 사라지고 '영양탕' 등의 모호한 이름으로 영업하는 식당들에 대한 단속 이슈가 불거질 것입니다.

**장기 전망 (3년 이상)**
2027년 완전 금지 이후 개 식용 문화는 사실상 소멸 단계에 접어들 것입니다. 한국은 '개 식용 국가'라는 오명을 벗고 K-컬처의 소프트파워가 강화될 것입니다. 다만 남겨진 수십만 마리 개들의 보호와 관리 문제가 사회적 비용으로 남을 가능성이 큽니다.

**예상되는 영향**
- 긍정적: 국가 브랜드 가치 상승, 펫코노미(반려동물 산업) 성장 가속화, 생명 존중 인식 확산
- 부정적: 축산 농가 생존권 갈등, 풍선 효과(음성적 유통), 유기견 보호소 포화
- 중립적: 대체 보양식(염소, 오리 등) 시장 활성화

결국 이 법안은 한국 사회가 '먹고사는 문제'를 넘어 '생명과 윤리'를 중시하는 선진 사회로 진입했음을 상징하는 사건으로 기록될 것입니다.`,
    confidence: 0.95,
    analyzedAt: '2025-11-04T10:00:00Z'
  },

  // 예시 7: 생성형 AI 저작권 분쟁 (한국어)
  aiCopyrightKo: {
    analysisId: 'example-ai-copyright-ko',
    isValid: true,
    originalContent: {
      title: '예술가들 "AI가 내 그림 훔쳤다"... 저작권 소송 전면전',
      summary: '생성형 AI가 웹툰, 일러스트, 소설 등을 무단으로 학습해 창작자들의 저작권을 침해했다는 논란이 법정 공방으로 번지고 있다. 창작자 단체는 "정당한 대가 없는 학습은 도둑질"이라며 집단 소송을 제기했고, 빅테크 기업들은 "공정 이용(Fair Use)"에 해당한다며 맞서고 있다. 정부는 AI 산업 육성과 창작자 권리 보호 사이에서 가이드라인 마련에 고심하고 있다.',
      detectedLanguage: 'ko'
    },
    keywords: ['생성형 AI', '저작권 침해', '공정 이용', '학습 데이터', '창작자 권리', 'TDM(텍스트·데이터 마이닝)', 'AI 그림', '저작권법 개정'],
    supportOpinions: [
      {
        title: '창작물 무단 학습은 명백한 저작권 침해',
        url: 'https://creators-union.com/ai-copyright-statement',
        source: 'Creators Union',
        sourceType: 'news',
        snippet: 'AI는 창작자의 수십 년 노력의 산물을 단 몇 초 만에 모방해낸다. 허락 없이 데이터를 학습시키고 유료 서비스로 돈을 버는 것은 기술 혁신이 아니라 저작권 절도다. 학습 데이터에 사용된 저작물에 대해 정당한 사용료를 지불해야 한다.',
        publishedDate: '2025-10-20',
        relevanceScore: 0.96
      },
      {
        title: 'AI 생성물로 생계 위협받는 웹툰 작가들',
        url: 'https://webtoon-insight.com/ai-threat',
        source: 'Webtoon Insight',
        sourceType: 'blog',
        snippet: '특정 작가의 화풍(스타일)을 학습한 AI가 유사한 그림을 대량 생산하면서 작가들의 커미션 시장이 붕괴되고 있다. 화풍은 현행법상 저작권 보호 대상이 아니라는 맹점을 이용해 창작자들의 생존권을 위협하고 있다. 법적 보호 장치가 시급하다.',
        publishedDate: '2025-10-22',
        relevanceScore: 0.91
      },
      {
        title: '데이터 투명성 확보가 우선',
        url: 'https://youtube.com/watch?v=ai-data-transparency',
        source: 'IT Law Review',
        sourceType: 'youtube',
        snippet: 'AI 기업들은 학습에 어떤 데이터를 썼는지 공개하지 않고 있습니다. 블랙박스 같은 AI 모델의 투명성을 강제해야 합니다. 자신이 만든 콘텐츠가 AI 학습에 쓰였는지 확인할 권리와 거부할 권리(Opt-out)가 보장되어야 합니다.',
        publishedDate: '2025-10-24',
        relevanceScore: 0.89
      },
      {
        title: '창작 의욕 저하 우려',
        url: 'https://art-culture.com/motivation-loss',
        source: 'Art Culture News',
        sourceType: 'news',
        snippet: 'AI가 모든 것을 대체한다면 누가 힘들게 창작하려 하겠는가. 인간 창작자가 사라지면 AI도 더 이상 학습할 새로운 데이터가 없어 공멸할 것이다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '저작권법의 목적은 창작자 보호',
        url: 'https://copyright-law.org/purpose',
        source: 'Copyright Law Org',
        sourceType: 'blog',
        snippet: '저작권법의 근본 취지는 창작자의 권리를 보호하여 문화 발전에 기여하는 것이다. 기술 발전이라는 명분으로 이 원칙을 훼손해서는 안 된다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.87
      },
      {
        title: 'AI 기업의 무임승차 비판',
        url: 'https://tech-ethics.com/free-riding',
        source: 'Tech Ethics Watch',
        sourceType: 'news',
        snippet: '빅테크 기업들은 막대한 수익을 올리면서 원재료인 데이터는 공짜로 쓰려 한다. 이는 명백한 무임승차이며 불공정 행위다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.90
      }
    ],
    opposeOpinions: [
      {
        title: 'AI 학습은 사람이 공부하는 것과 같다 (공정 이용)',
        url: 'https://ai-tech-daily.com/fair-use-argument',
        source: 'AI Tech Daily',
        sourceType: 'news',
        snippet: '사람도 다른 작품을 보고 영감을 받아 창작한다. AI의 학습 과정은 데이터를 통계적으로 분석하는 것이지 복제가 아니다. 저작권법상 "공정 이용"에 해당하며, 과도한 저작권 적용은 AI 기술 발전과 국가 경쟁력을 저해할 것이다.',
        publishedDate: '2025-10-21',
        relevanceScore: 0.93
      },
      {
        title: '저작권 족쇄, 한국 AI 산업 도태될 수도',
        url: 'https://industry-news.com/ai-regulation-risk',
        source: 'Industry News',
        sourceType: 'blog',
        snippet: '미국, 일본 등 경쟁국들은 TDM(텍스트·데이터 마이닝) 면책 규정을 두어 AI 학습을 장려하고 있다. 한국만 엄격한 저작권 잣대를 들이대면 국내 AI 기업들은 학습 비용 감당이 안 돼 문을 닫고, 결국 구글·오픈AI 등 외산 AI에 종속될 것이다.',
        publishedDate: '2025-10-23',
        relevanceScore: 0.90
      },
      {
        title: '스타일은 저작권 보호 대상이 아니다',
        url: 'https://youtube.com/watch?v=style-copyright',
        source: 'Legal Tech TV',
        sourceType: 'youtube',
        snippet: '법적으로 아이디어나 화풍 자체는 저작권 보호 대상이 아닙니다. 인상파 화풍으로 그렸다고 해서 모네의 저작권을 침해한 게 아닌 것처럼, 특정 작가 풍으로 AI가 그려도 저작권 침해로 보기 어렵습니다. 이를 인정하면 창작의 자유가 오히려 위축됩니다.',
        publishedDate: '2025-10-25',
        relevanceScore: 0.87
      },
      {
        title: '데이터 이용료 산정의 현실적 어려움',
        url: 'https://data-economy.com/pricing-difficulty',
        source: 'Data Economy',
        sourceType: 'news',
        snippet: '수십억 개의 데이터를 학습하는데 일일이 저작권료를 산정하고 지불하는 것은 현실적으로 불가능하다. 이는 AI 개발 자체를 하지 말라는 것과 같다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.89
      },
      {
        title: 'AI 창작물의 사회적 효용',
        url: 'https://ai-benefit.com/social-utility',
        source: 'AI Benefit Lab',
        sourceType: 'blog',
        snippet: 'AI는 누구나 쉽게 창작할 수 있게 도와주어 문화 예술의 저변을 확대한다. 저작권 문제로 이러한 도구의 발전을 막아서는 안 된다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '과거 기술 혁신 사례와의 비교',
        url: 'https://tech-history.org/innovation-copyright',
        source: 'Tech History',
        sourceType: 'news',
        snippet: '사진기나 VCR이 처음 나왔을 때도 저작권 논란이 있었지만 결국 예술의 도구로 인정받았다. AI도 마찬가지 과정을 겪을 것이다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.85
      }
    ],
    neutralOpinions: [
      {
        title: 'AI 시대에 맞는 새로운 저작권법 필요',
        url: 'https://copyright-law-journal.com/new-legal-framework',
        source: 'Copyright Law Journal',
        sourceType: 'news',
        snippet: '기존 저작권법으로는 생성형 AI 문제를 해결하는 데 한계가 있다. 인간 창작자와 AI 기술이 공존할 수 있는 제3의 법적 프레임워크가 필요하다. 학습 단계와 생성 단계를 구분하여 접근하고, 보상 체계에 대한 사회적 합의가 선행되어야 한다.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.88
      },
      {
        title: 'AI 생성물 표시제 도입 논의',
        url: 'https://policy-brief.re.kr/ai-watermark',
        source: 'Digital Policy Institute',
        sourceType: 'blog',
        snippet: '저작권 침해 여부를 떠나, AI가 만든 콘텐츠임를 명확히 알리는 워터마크 의무화가 필요하다. 이는 소비자의 알 권리를 보호하고, 가짜 뉴스나 딥페이크 문제 해결에도 도움이 되는 중립적이고 현실적인 첫걸음이다.',
        publishedDate: '2025-10-24',
        relevanceScore: 0.85
      },
      {
        title: '저작권 등록 제도 개선',
        url: 'https://copyright-reg.com/improvement',
        source: 'Copyright Reg Office',
        sourceType: 'news',
        snippet: 'AI가 생성한 부분과 인간이 창작한 부분을 명확히 구분하여 등록할 수 있도록 제도를 개선해야 한다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.84
      },
      {
        title: '국제적 공조 필요',
        url: 'https://global-cooperation.org/copyright',
        source: 'Global Cooperation',
        sourceType: 'blog',
        snippet: '저작권 문제는 국경이 없다. WIPO 등 국제기구를 중심으로 통일된 기준을 마련해야 혼란을 줄일 수 있다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '창작자와 AI 기업 간의 대화',
        url: 'https://dialogue-forum.com/creator-ai',
        source: 'Dialogue Forum',
        sourceType: 'news',
        snippet: '법적 다툼보다는 대화를 통해 상생 방안을 모색해야 한다. 서로의 입장을 이해하고 협력 모델을 만들어야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.83
      }
    ],
    alternativeOpinions: [
      {
        title: '학습 데이터 옵트아웃(Opt-out) 제도 법제화',
        url: 'https://creator-rights.org/opt-out-system',
        source: 'Creator Rights Watch',
        sourceType: 'news',
        snippet: '창작자가 자신의 작품이 AI 학습에 쓰이는 것을 원치 않을 경우, 거부할 수 있는 권리(Opt-out)를 법적으로 보장해야 한다. 동시에 AI 기업은 기술적으로 이를 준수할 수 있는 필터링 시스템을 의무적으로 갖추는 방안이 대안이 될 수 있다.',
        publishedDate: '2025-10-22',
        relevanceScore: 0.94
      },
      {
        title: 'AI 저작권료 징수 및 창작자 기금 조성',
        url: 'https://culture-economy.com/ai-fund',
        source: 'Culture Economy Review',
        sourceType: 'blog',
        snippet: '음원 저작권료처럼 AI 기업 매출의 일정 비율을 징수하여 "창작자 상생 기금"을 조성하는 방안이다. 개별 저작권자에게 일일이 허락받는 것이 불가능하므로, 포괄적 라이선스 개념을 도입해 기금을 통해 간접 보상하는 것이 현실적이다.',
        publishedDate: '2025-10-23',
        relevanceScore: 0.91
      },
      {
        title: '블록체인 기반 학습 이력 추적 시스템',
        url: 'https://youtube.com/watch?v=blockchain-copyright',
        source: 'Future Tech Lab',
        sourceType: 'youtube',
        snippet: '블록체인 기술을 활용해 데이터의 생성부터 AI 학습, 결과물 생성까지의 과정을 투명하게 기록하는 기술적 해법을 제안합니다. 이를 통해 기여도를 산정하고 마이크로 페이먼트(소액 결제)로 보상하는 자동화 시스템 구축이 가능합니다.',
        publishedDate: '2025-10-25',
        relevanceScore: 0.89
      },
      {
        title: '데이터 기증 운동',
        url: 'https://data-donation.org/campaign',
        source: 'Data Donation',
        sourceType: 'news',
        snippet: '공익적 목적의 AI 개발을 위해 저작권을 기증하는 운동을 전개하여 양질의 학습 데이터를 확보하자.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: 'AI 학습용 데이터셋 구축 지원',
        url: 'https://dataset-support.kr/public-data',
        source: 'Public Data Center',
        sourceType: 'blog',
        snippet: '정부가 저작권 문제가 해결된 공공 데이터셋을 구축하여 기업과 연구자에게 제공함으로써 저작권 분쟁을 줄여야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.88
      },
      {
        title: '크리에이티브 커먼즈 라이선스(CCL) 활용',
        url: 'https://ccl-guide.com/ai-usage',
        source: 'CCL Guide',
        sourceType: 'news',
        snippet: 'AI 학습 허용 여부를 표시할 수 있는 새로운 CCL 조건을 만들어 창작자가 자신의 의사를 쉽게 표시하도록 하자.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      }
    ],
    futurePrediction: `생성형 AI 저작권 분쟁은 기술 발전 속도를 법 제도가 따라가지 못하는 과도기적 현상으로, 향후 수년간 치열한 법적, 사회적 논쟁이 지속될 것입니다.

**단기 전망 (6개월-1년)**
개별 소송보다는 정부 주도의 가이드라인 마련에 집중될 것입니다. 'AI 생성물 표시제(워터마크)'가 우선 도입될 가능성이 높으며, 학습 데이터 공개 범위에 대한 논의가 활발해질 것입니다. 웹툰, 일러스트 등 시각 예술 분야에서 갈등이 가장 첨예하게 대립할 것입니다.

**중기 전망 (1-2년)**
저작권법 개정을 통해 'TDM 면책 규정'과 '창작자 보상 청구권'을 절충하는 한국형 입법이 시도될 것입니다. 유튜브의 Content ID처럼, AI 기업들이 저작권자와 수익을 공유하는 비즈니스 모델이나 라이선스 마켓이 등장할 것입니다.

**장기 전망 (3년 이상)**
AI가 보조 도구로 완전히 정착하면서, '순수 인간 창작물'과 'AI 협업 창작물'의 시장이 분리될 것입니다. 저작권 개념이 소유권 중심에서 기여도 중심으로 재편되고, 블록체인 등을 활용한 자동 배분 시스템이 표준화될 가능성이 있습니다.

**예상되는 영향**
- 긍정적: 새로운 저작권 비즈니스 모델 탄생, AI 활용 창작 도구 대중화
- 부정적: 중소 창작자 수익 감소, 법적 불확실성으로 인한 초기 AI 투자 위축
- 중립적: 창작의 정의 재정립, 예술 교육 방식의 변화

결국 AI 개발을 막을 수는 없기에, '금지'보다는 '공정한 보상과 공존'을 위한 사회적 대타협을 얼마나 빨리 이뤄내느냐가 한국 AI 산업과 콘텐츠 산업의 미래를 결정할 것입니다.`,
    confidence: 0.85,
    analyzedAt: '2025-11-05T15:20:00Z'
  },

  // 예시 8: 주 4일제 도입 (한국어)
  fourDayWeekKo: {
    analysisId: 'example-four-day-week-ko',
    isValid: true,
    originalContent: {
      title: '주 4일 근무제, 시기상조인가 필연적 미래인가',
      summary: '영국, 아이슬란드 등 해외에서 주 4일제 실험이 성공적인 결과를 거두면서 국내에서도 도입 논의가 활발해지고 있다. 일부 IT 기업과 스타트업을 중심으로 주 4일제나 격주 4일제를 시범 도입하는 사례가 늘고 있다. 노동계는 "삶의 질 향상과 일자리 창출"을 위해 도입을 촉구하는 반면, 경영계는 "생산성 저하와 인건비 부담"을 이유로 시기상조라는 입장을 고수하고 있다. 저출산 문제 해결과 워라밸 중시 문화 확산으로 인해 주 4일제는 피할 수 없는 흐름이라는 분석이 나온다.',
      detectedLanguage: 'ko'
    },
    keywords: ['주 4일제', '워라밸', '생산성', '노동 시간 단축', '임금 삭감', '삶의 질', '저출산 대책', '기업 경쟁력'],
    supportOpinions: [
      {
        title: '주 4일제, 생산성 오히려 올랐다',
        url: 'https://work-life-balance.kr/productivity-rise',
        source: 'Work Life Balance Lab',
        sourceType: 'news',
        snippet: '영국의 대규모 주 4일제 실험 결과, 참여 기업의 92%가 제도를 유지하기로 결정했다. 직원들의 번아웃이 줄고 집중력이 향상되어 생산성은 유지되거나 오히려 증가했다. 충분한 휴식이 업무 효율을 높인다는 것이 입증되었다.',
        publishedDate: '2025-10-25',
        relevanceScore: 0.93
      },
      {
        title: '저출산과 내수 침체, 주 4일제가 해법',
        url: 'https://social-policy.com/four-day-week-solution',
        source: 'Social Policy Review',
        sourceType: 'blog',
        snippet: '늘어난 휴일은 소비 활동을 촉진하여 내수 경제를 활성화시킨다. 또한 육아 부담을 덜어주어 심각한 저출산 문제 해결에도 기여할 수 있다. 일과 삶의 균형을 찾는 것이 지속 가능한 사회를 만드는 길이다.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.89
      },
      {
        title: '인재 확보의 핵심 경쟁력',
        url: 'https://youtube.com/watch?v=talent-acquisition-4day',
        source: 'HR Insight TV',
        sourceType: 'youtube',
        snippet: '우수 인재들은 연봉만큼이나 근무 유연성을 중요하게 생각합니다. 주 4일제를 도입한 기업들은 채용 경쟁률이 급증하고 이직률이 획기적으로 낮아졌습니다. 기업 경쟁력을 위해서라도 도입을 서둘러야 합니다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.91
      },
      {
        title: '탄소 배출 감소 효과',
        url: 'https://green-work.com/carbon-reduction',
        source: 'Green Work',
        sourceType: 'news',
        snippet: '출퇴근 횟수가 줄어들면 교통량과 에너지 소비가 감소하여 탄소 배출을 줄이는 데 기여한다. 기후 위기 대응에도 효과적이다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '자기 계발 기회 확대',
        url: 'https://self-improvement.com/more-time',
        source: 'Self Improvement',
        sourceType: 'blog',
        snippet: '늘어난 여가 시간을 활용해 직무 역량을 개발하거나 취미 생활을 즐길 수 있어 개인의 삶의 만족도가 높아진다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.88
      },
      {
        title: '성 평등 증진',
        url: 'https://gender-equality.org/work-share',
        source: 'Gender Equality Watch',
        sourceType: 'news',
        snippet: '남성의 가사 및 육아 참여 시간을 늘려 성별 분업을 완화하고 성 평등을 증진하는 효과가 있다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      }
    ],
    opposeOpinions: [
      {
        title: '중소기업에게는 그림의 떡, 양극화 심화',
        url: 'https://sme-news.com/sme-burden',
        source: 'SME News',
        sourceType: 'news',
        snippet: '인력난에 시달리는 중소기업이나 제조업 현장에서는 주 4일제가 불가능에 가깝다. 대기업만 도입하게 되면 노동 시장의 양극화가 더욱 심해질 것이다. 대체 인력을 구할 수 없는 상황에서 근무 시간 단축은 공장 가동을 멈추라는 말과 같다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.92
      },
      {
        title: '임금 삭감 없는 주 4일제는 기업 부담 가중',
        url: 'https://economy-daily.com/wage-burden',
        source: 'Economy Daily',
        sourceType: 'news',
        snippet: '노동 시간은 줄이면서 임금을 그대로 유지하는 것은 기업에게 막대한 비용 부담이다. 이는 결국 제품 가격 인상으로 이어져 물가 상승을 유발할 수 있다. 국가 경쟁력 저하를 우려해야 한다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.88
      },
      {
        title: '업무 강도만 세지고 야근 늘어날 것',
        url: 'https://worker-voice.com/work-intensity',
        source: 'Worker Voice',
        sourceType: 'blog',
        snippet: '5일 할 일을 4일에 몰아서 해야 하므로 업무 강도가 살인적으로 높아질 수 있다. 공식적인 근무 시간만 줄어들고, 실제로는 퇴근 후나 휴일에 일해야 하는 "그림자 노동"이 늘어날 우려가 있다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.85
      },
      {
        title: '서비스 이용 불편 초래',
        url: 'https://consumer-complaint.com/service-delay',
        source: 'Consumer Complaint',
        sourceType: 'news',
        snippet: '은행, 관공서, 병원 등이 주 4일제를 하면 시민들의 이용 불편이 커질 것이다. 사회적 인프라가 마비될 수 있다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.84
      },
      {
        title: '국가 경쟁력 약화',
        url: 'https://national-competitiveness.com/lagging-behind',
        source: 'National Competitiveness',
        sourceType: 'blog',
        snippet: '경쟁국들은 열심히 일하는데 우리만 쉬면 뒤처질 수밖에 없다. 아직은 성장이 필요한 시기다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.83
      },
      {
        title: '소통 및 협업 저해',
        url: 'https://collaboration-issue.com/schedule-mismatch',
        source: 'Collaboration Issue',
        sourceType: 'news',
        snippet: '직원마다 쉬는 날이 다르면 회의 일정을 잡기 어렵고 업무 협업에 차질이 빚어질 수 있다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.82
      }
    ],
    neutralOpinions: [
      {
        title: '업종별 특성 고려한 유연한 접근 필요',
        url: 'https://labor-research.org/flexible-approach',
        source: 'Labor Research Institute',
        sourceType: 'news',
        snippet: '모든 산업에 일괄적으로 적용하는 것은 무리다. IT나 사무직 등 적용이 용이한 분야부터 단계적으로 도입하고, 제조업이나 서비스업 등은 교대제 개편 등 다른 방식의 지원이 필요하다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.87
      },
      {
        title: '노사 합의가 전제되어야',
        url: 'https://labor-relations.com/agreement',
        source: 'Labor Relations',
        sourceType: 'blog',
        snippet: '법으로 강제하기보다는 노사가 자율적으로 합의하여 도입 여부와 방식을 결정해야 한다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.85
      },
      {
        title: '생산성 향상 방안 병행',
        url: 'https://productivity-boost.com/method',
        source: 'Productivity Boost',
        sourceType: 'news',
        snippet: '단순히 시간만 줄이는 것이 아니라, 업무 프로세스 개선과 자동화 도입 등 생산성을 높이는 노력이 함께 가야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '시범 사업 확대 및 결과 분석',
        url: 'https://pilot-project.kr/analysis',
        source: 'Pilot Project Center',
        sourceType: 'blog',
        snippet: '더 많은 기업에서 시범 사업을 진행하고 그 결과를 면밀히 분석하여 한국 실정에 맞는 모델을 찾아야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      },
      {
        title: '임금 보전 방안 논의',
        url: 'https://wage-policy.com/compensation',
        source: 'Wage Policy Review',
        sourceType: 'news',
        snippet: '근무 시간 단축에 따른 임금 감소분을 어떻게 보전할 것인지에 대한 사회적 논의가 필요하다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.83
      }
    ],
    alternativeOpinions: [
      {
        title: '주 4.5일제나 유연 근무제부터 시작하자',
        url: 'https://work-culture.com/4-5-day-week',
        source: 'Work Culture Blog',
        sourceType: 'blog',
        snippet: '금요일 오후 반차를 쓰는 주 4.5일제나, 월 근무 시간을 채우면 자유롭게 쉬는 유연 근무제가 현실적인 대안이다. 급격한 변화보다는 점진적으로 근무 시간을 줄여나가는 연착륙 방안이 필요하다.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.94
      },
      {
        title: '근로 시간 저축 계좌제 도입',
        url: 'https://policy-idea.com/time-savings-account',
        source: 'Policy Idea Lab',
        sourceType: 'news',
        snippet: '바쁠 때 더 일하고 한가할 때 몰아서 쉬는 근로 시간 저축 계좌제를 활성화하자. 획일적인 주 단위 근무 시간 규제에서 벗어나, 노사가 합의하여 탄력적으로 운영할 수 있도록 제도를 개선해야 한다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.90
      },
      {
        title: '성과 중심의 자율 근무제',
        url: 'https://youtube.com/watch?v=result-oriented-work',
        source: 'Future Management',
        sourceType: 'youtube',
        snippet: '시간이 아니라 성과로 평가하는 문화를 정착시켜야 합니다. 주어진 목표를 달성하면 주 3일을 일하든 4일을 일하든 상관없는 완전 자율 근무제(ROWE)가 궁극적인 방향입니다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.88
      },
      {
        title: '안식월/안식년 제도 확대',
        url: 'https://sabbatical.com/expansion',
        source: 'Sabbatical Guide',
        sourceType: 'blog',
        snippet: '매주 쉬는 날을 늘리는 대신, 몇 년에 한 번씩 장기 휴가를 갈 수 있는 안식월이나 안식년 제도를 도입하여 재충전 기회를 주자.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '연차 휴가 사용 촉진',
        url: 'https://vacation-use.com/promotion',
        source: 'Vacation Use Campaign',
        sourceType: 'news',
        snippet: '주 4일제 도입 전에 있는 연차 휴가부터 눈치 보지 않고 다 쓸 수 있는 문화를 만드는 것이 먼저다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.89
      },
      {
        title: '교대제 개편 지원',
        url: 'https://shift-work.com/reform',
        source: 'Shift Work Lab',
        sourceType: 'blog',
        snippet: '제조업 등 교대 근무 사업장에 대해서는 4조 2교대 등 교대제 개편을 지원하여 근무 시간을 단축하자.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      }
    ],
    futurePrediction: `주 4일제는 거스를 수 없는 글로벌 트렌드로, 한국 사회에도 점진적으로 확산될 전망입니다.

**단기 전망 (6개월-1년)**
IT 기업과 스타트업을 중심으로 인재 유치를 위한 복지 차원의 주 4일제 도입이 늘어날 것입니다. 대기업들도 격주 4일제나 월 1회 주 4일제 등 부분적인 도입을 실험할 것입니다. 정치권에서도 총선을 앞두고 공약으로 등장할 가능성이 높습니다.

**중기 전망 (1-2년)**
성공 사례가 축적되면서 서비스업과 사무직군으로 확산될 것입니다. 다만 제조업과 중소기업은 인력난과 비용 문제로 도입이 지체되면서 노동 시장의 이중 구조가 심화될 수 있습니다. 이에 대한 정부의 지원책 논의가 활발해질 것입니다.

**장기 전망 (2-3년 이상)**
법정 근로 시간 단축 논의가 본격화될 것입니다. 주 4일제가 표준 근무 형태로 자리잡기 시작하며, 여가 산업이 크게 성장할 것입니다. AI와 자동화 기술의 발전이 노동 시간 단축을 가속화하는 요인이 될 것입니다.

**예상되는 영향**
- 긍정적: 삶의 질 개선, 내수 소비 진작, 창의적 업무 환경 조성
- 부정적: 기업 비용 증가, 중소기업 구인난 심화, 임금 갈등
- 중립적: 여가 관련 산업 성장, 업무 방식의 디지털 전환 가속화

결국 "얼마나 오래 일하느냐"에서 "얼마나 효율적으로 일하느냐"로 패러다임이 전환될 것이며, 주 4일제는 그 변화의 상징적인 제도가 될 것입니다.`,
    confidence: 0.86,
    analyzedAt: '2025-11-03T14:20:00Z'
  },

  // 예시 9: 가상화폐 규제 (한국어)
  cryptoRegKo: {
    analysisId: 'example-crypto-reg-ko',
    isValid: true,
    originalContent: {
      title: '비트코인 현물 ETF 승인 이후... 가상자산 규제 논의 재점화',
      summary: '미국 SEC의 비트코인 현물 ETF 승인으로 가상자산이 제도권 금융으로 편입되는 흐름이 가속화되고 있다. 이에 따라 국내에서도 가상자산 이용자 보호법 시행과 함께 과세 유예, 법인 투자 허용 등 규제 완화와 강화 사이의 논쟁이 뜨겁다. 투자자 보호와 시장 투명성을 위해 강력한 규제가 필요하다는 입장과, 블록체인 산업 육성과 글로벌 경쟁력 확보를 위해 규제를 풀어야 한다는 입장이 맞서고 있다. 특히 가상자산 과세 시점을 두고 정부와 정치권의 셈법이 복잡하다.',
      detectedLanguage: 'ko'
    },
    keywords: ['가상자산', '비트코인 ETF', '암호화폐 규제', '투자자 보호', '가상자산 과세', '블록체인', '법인 투자', 'STO'],
    supportOpinions: [
      {
        title: '투자자 보호가 최우선, 규제 강화해야',
        url: 'https://financial-watch.com/crypto-protection',
        source: 'Financial Watch',
        sourceType: 'news',
        snippet: '테라-루나 사태, FTX 파산 등에서 보듯 규제 없는 시장은 투자자들에게 막대한 피해를 입힌다. 시세 조종, 내부자 거래 등을 막기 위해 주식 시장에 준하는 강력한 규제와 감시 시스템이 필요하다. 이용자 보호법은 그 시작일 뿐이다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.94
      },
      {
        title: '제도권 편입을 위해선 규제가 필수',
        url: 'https://crypto-institutional.com/regulation-adoption',
        source: 'Crypto Institutional',
        sourceType: 'blog',
        snippet: '기관 투자자들이 시장에 들어오려면 불확실성이 제거되어야 한다. 명확한 규제 프레임워크는 시장의 신뢰도를 높이고 장기적으로 시장 성장에 도움이 된다. 규제는 악재가 아니라 시장 성숙을 위한 호재다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.90
      },
      {
        title: '자금 세탁 방지와 투명성 확보',
        url: 'https://youtube.com/watch?v=aml-crypto',
        source: 'Compliance TV',
        sourceType: 'youtube',
        snippet: '가상자산이 범죄 수익 은닉이나 자금 세탁에 악용되는 것을 막기 위해 트래블룰 등 규제를 강화해야 합니다. 투명한 거래 내역 확보는 건전한 시장 조성을 위한 전제 조건입니다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.88
      },
      {
        title: '시장 변동성 완화',
        url: 'https://market-stability.com/volatility',
        source: 'Market Stability',
        sourceType: 'news',
        snippet: '규제를 통해 투기적 수요를 억제하면 극심한 가격 변동성을 줄이고 안정적인 자산으로 자리잡을 수 있다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.86
      },
      {
        title: '해킹 및 사기 피해 예방',
        url: 'https://crypto-security.org/prevention',
        source: 'Crypto Security',
        sourceType: 'blog',
        snippet: '거래소의 보안 의무를 강화하고 사기 코인 상장을 막는 규제가 있어야 해킹과 사기로부터 투자자를 지킬 수 있다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.89
      },
      {
        title: '국가 신용도 제고',
        url: 'https://national-credit.com/crypto-regulation',
        source: 'National Credit Review',
        sourceType: 'news',
        snippet: '국제 자금 세탁 방지 기구(FATF)의 권고안을 준수하여 국가 신용도를 높여야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.85
      }
    ],
    opposeOpinions: [
      {
        title: '과도한 규제는 블록체인 혁신을 죽인다',
        url: 'https://blockchain-innovation.com/stifling-innovation',
        source: 'Blockchain Innovation',
        sourceType: 'news',
        snippet: '블록체인의 핵심은 탈중앙화다. 기존 금융의 잣대로 가상자산을 규제하려는 것은 기술의 본질을 이해하지 못한 처사다. 과도한 규제로 인해 유망한 웹3 기업들이 해외로 떠나고 있다. 한국만 갈라파고스가 될 수 있다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.92
      },
      {
        title: '법인 투자 금지는 시대착오적',
        url: 'https://venture-capital.kr/corporate-crypto',
        source: 'Venture Capital Insight',
        sourceType: 'blog',
        snippet: '미국, 일본 등 주요국은 법인의 가상자산 투자를 허용하고 있다. 한국만 막고 있어 국내 기업들의 경쟁력이 뒤처지고 있다. 법인 계좌 개설을 허용하여 시장의 유동성을 공급하고 기업들의 블록체인 사업 진출을 지원해야 한다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.89
      },
      {
        title: '과세 유예 연장해야',
        url: 'https://youtube.com/watch?v=crypto-tax-delay',
        source: 'Crypto Investor Channel',
        sourceType: 'youtube',
        snippet: '주식 시장과의 형평성 문제, 과세 인프라 미비 등을 고려할 때 가상자산 과세는 시기상조입니다. 섣불리 과세를 시작하면 투자 심리가 위축되고 시장이 붕괴될 수 있습니다. 충분한 준비 기간이 필요합니다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.87
      },
      {
        title: '개인의 금융 자유 침해',
        url: 'https://financial-freedom.org/crypto',
        source: 'Financial Freedom',
        sourceType: 'blog',
        snippet: '내 돈을 내가 원하는 곳에 투자할 자유를 국가가 과도하게 통제해서는 안 된다. 김치 프리미엄 등 부작용은 규제 때문이기도 하다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.85
      },
      {
        title: '스타트업 성장 저해',
        url: 'https://startup-growth.com/crypto-regulation',
        source: 'Startup Growth',
        sourceType: 'news',
        snippet: '복잡한 인허가 절차와 규제 비용은 자본력이 부족한 스타트업에게 큰 진입 장벽이다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '해외 거래소로의 이탈 가속화',
        url: 'https://exchange-outflow.com/global',
        source: 'Exchange Outflow',
        sourceType: 'blog',
        snippet: '국내 규제가 강해지면 투자자들은 규제가 덜한 해외 거래소나 개인 지갑으로 이동할 것이다. 국부 유출만 초래한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      }
    ],
    neutralOpinions: [
      {
        title: '규제와 육성의 투트랙 전략 필요',
        url: 'https://policy-brief.com/two-track-strategy',
        source: 'Policy Brief',
        sourceType: 'news',
        snippet: '불공정 거래는 엄단하되, 기술 개발과 산업 육성은 지원하는 균형 잡힌 접근이 필요하다. 규제 샌드박스를 적극 활용하여 혁신적인 시도를 허용해주어야 한다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.86
      },
      {
        title: '국제 공조가 필수',
        url: 'https://global-coordination.org/crypto',
        source: 'Global Coordination',
        sourceType: 'blog',
        snippet: '가상자산은 국경이 없으므로 한 국가의 규제만으로는 한계가 있다. G20 등 국제 사회와 공조하여 통일된 규제안을 만들어야 한다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '단계적 제도화 접근',
        url: 'https://step-by-step.com/institutionalization',
        source: 'Institutionalization',
        sourceType: 'news',
        snippet: '급격한 변화보다는 시장 상황을 보아가며 단계적으로 제도를 정비해야 충격을 줄일 수 있다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.85
      },
      {
        title: '민관 협의체 운영',
        url: 'https://consultative-group.com/crypto',
        source: 'Consultative Group',
        sourceType: 'blog',
        snippet: '정부와 업계, 전문가가 참여하는 협의체를 상설화하여 소통을 강화해야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      },
      {
        title: '기술 중립성 원칙 준수',
        url: 'https://tech-neutrality.org/principle',
        source: 'Tech Neutrality',
        sourceType: 'news',
        snippet: '특정 기술을 배제하거나 우대하지 않고, 기능과 리스크에 기반한 규제를 적용해야 한다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.83
      }
    ],
    alternativeOpinions: [
      {
        title: '업계 자율 규제 기구 권한 강화',
        url: 'https://self-reg.org/crypto-sro',
        source: 'Self Regulation Org',
        sourceType: 'blog',
        snippet: '빠르게 변하는 기술 시장을 정부가 일일이 규제하기 어렵다. 거래소 협의체(DAXA) 등 민간 자율 규제 기구에 더 많은 권한과 책임을 부여하여 시장 스스로 정화할 수 있는 시스템을 만들어야 한다.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.91
      },
      {
        title: 'STO(토큰 증권) 시장 활성화',
        url: 'https://finance-tech.com/sto-market',
        source: 'Finance Tech News',
        sourceType: 'news',
        snippet: '가상자산의 투기성을 줄이고 실물 자산과 연동된 STO 시장을 육성하는 것이 대안이다. 부동산, 미술품, 저작권 조각 투자 등을 제도권 내에서 활성화하면 건전한 투자 문화를 만들 수 있다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.89
      },
      {
        title: '투자자 교육 의무화',
        url: 'https://youtube.com/watch?v=investor-education',
        source: 'Financial Literacy TV',
        sourceType: 'youtube',
        snippet: '규제보다 중요한 것은 투자자들의 역량 강화입니다. 가상자산 거래소 가입 시 사전 교육을 의무화하고, 위험성에 대한 고지를 강화하여 묻지마 투자를 예방해야 합니다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.85
      },
      {
        title: 'CBDC(중앙은행 디지털 화폐) 도입 가속화',
        url: 'https://cbdc-news.com/acceleration',
        source: 'CBDC News',
        sourceType: 'blog',
        snippet: '민간 가상자산의 변동성 문제를 해결하기 위해 중앙은행이 발행하는 디지털 화폐 도입을 서둘러야 한다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '화이트리스트 코인 제도 운영',
        url: 'https://whitelist-coin.com/system',
        source: 'Whitelist System',
        sourceType: 'news',
        snippet: '검증된 코인만 상장할 수 있도록 화이트리스트 제도를 운영하여 잡코인 난립을 막아야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '디지털 자산 공제회 설립',
        url: 'https://digital-asset-fund.com/establishment',
        source: 'Digital Asset Fund',
        sourceType: 'blog',
        snippet: '거래소 파산 등에 대비하여 투자자 피해를 보상할 수 있는 공제회를 설립하자.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      }
    ],
    futurePrediction: `가상자산 시장은 제도권 편입 과도기를 거쳐 성숙한 투자 시장으로 자리잡을 것입니다.

**단기 전망 (6개월-1년)**
이용자 보호법 시행으로 부실 코인들이 정리되고 시장 건전성이 높아질 것입니다. 법인 투자 허용 논의가 구체화되고, STO 시장이 개화할 것입니다. 과세 문제는 정치적 쟁점이 되어 유예될 가능성이 높습니다.

**중기 전망 (1-2년)**
글로벌 규제 표준이 마련되면서 국가 간 규제 차익이 줄어들 것입니다. 전통 금융사들이 가상자산 수탁, 운용 등 관련 사업에 본격 진출하며 시장의 주도권이 기관으로 넘어갈 것입니다.

**장기 전망 (2-3년 이상)**
블록체인 기술이 금융을 넘어 실생활 서비스에 결합되는 웹3 시대가 도래할 것입니다. CBDC(중앙은행 디지털 화폐)가 도입되면서 가상자산과의 공존 모델이 정립될 것입니다.

**예상되는 영향**
- 긍정적: 시장 투명성 제고, 블록체인 산업 성장, 새로운 금융 서비스 등장
- 부정적: 규제 준수 비용 증가로 인한 중소 사업자 도태, 탈중앙화 이념 퇴색
- 중립적: 전통 금융과 가상자산 시장의 융합

규제는 혁신의 장애물이 아니라 안전한 고속도로를 까는 작업이 될 것이며, 한국이 디지털 금융 허브로 도약할 기회가 될 수 있습니다.`,
    confidence: 0.85,
    analyzedAt: '2025-11-04T10:00:00Z'
  },

  // 예시 10: 기본소득 도입 (한국어)
  ubiKo: {
    analysisId: 'example-ubi-ko',
    isValid: true,
    originalContent: {
      title: 'AI 시대의 생존법, 기본소득 도입 논의 확산',
      summary: '인공지능과 로봇 기술의 발전으로 일자리 소멸 우려가 커지면서, 모든 국민에게 조건 없이 일정 금액을 지급하는 \'기본소득\' 도입 논의가 다시 불붙고 있다. 챗GPT 등 생성형 AI가 화이트칼라 업무까지 대체하기 시작하자, 노동 소득만으로는 생계를 유지하기 어려운 시대가 올 것이라는 전망 때문이다. 찬성 측은 소득 불평등 해소와 최소한의 삶의 질 보장을 위해 필수적이라고 주장하는 반면, 반대 측은 막대한 재원 부담과 근로 의욕 저하를 우려하며 시기상조라고 맞서고 있다. 일부 지자체에서 시범 사업을 추진하며 실효성 검증에 나섰다.',
      detectedLanguage: 'ko'
    },
    keywords: ['기본소득', 'AI 일자리 대체', '소득 불평등', '재원 마련', '근로 의욕', '복지 국가', '로봇세', '보편적 복지'],
    supportOpinions: [
      {
        title: 'AI로 인한 대량 실업, 기본소득이 유일한 안전망',
        url: 'https://future-society.org/ai-unemployment-ubi',
        source: 'Future Society Institute',
        sourceType: 'news',
        snippet: 'AI가 인간의 노동을 대체하는 속도가 빨라지고 있다. 과거 산업혁명 때와 달리 새로운 일자리가 충분히 만들어지지 않을 수 있다. 노동과 소득을 분리하여 생존을 보장하는 기본소득은 기술 실업 시대의 필수적인 사회 안전망이다.',
        publishedDate: '2025-10-25',
        relevanceScore: 0.95
      },
      {
        title: '소득 양극화 해소와 경제 활성화 효과',
        url: 'https://welfare-economics.com/inequality-solution',
        source: 'Welfare Economics',
        sourceType: 'blog',
        snippet: '부의 집중이 심화되는 상황에서 기본소득은 소득 재분배 효과가 크다. 저소득층의 구매력을 높여 소비를 진작시키고 경제 전체에 활력을 불어넣을 수 있다. 복잡한 선별 복지 비용을 줄이고 행정 효율성도 높일 수 있다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.91
      },
      {
        title: '원하지 않는 노동에서 해방, 창의성 꽃필 것',
        url: 'https://youtube.com/watch?v=freedom-from-labor',
        source: 'Humanity First',
        sourceType: 'youtube',
        snippet: '생계를 위한 강제 노동에서 벗어나 자신이 진정 원하는 일, 창의적인 활동, 봉사 등에 시간을 쓸 수 있게 됩니다. 기본소득은 인간의 존엄성을 지키고 문화 예술 등 비시장적 가치를 창출하는 기반이 될 것입니다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.88
      },
      {
        title: '복지 사각지대 해소',
        url: 'https://welfare-blindspot.com/solution',
        source: 'Welfare Blindspot',
        sourceType: 'news',
        snippet: '기존 선별 복지는 신청주의와 까다로운 조건 때문에 혜택을 못 받는 사각지대가 존재한다. 보편적 기본소득은 누락 없이 모두를 보호할 수 있다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '여성의 가사 노동 인정',
        url: 'https://women-labor.org/recognition',
        source: 'Women Labor',
        sourceType: 'blog',
        snippet: '그동안 무급으로 취급받던 가사 노동과 돌봄 노동의 가치를 사회적으로 인정하고 보상하는 효과가 있다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '지역 경제 선순환',
        url: 'https://local-currency.com/circulation',
        source: 'Local Currency',
        sourceType: 'news',
        snippet: '지역 화폐로 지급하면 지역 내 소비가 늘어나 골목 상권이 살아나는 효과가 입증되었다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.85
      }
    ],
    opposeOpinions: [
      {
        title: '천문학적 재원, 결국 세금 폭탄',
        url: 'https://fiscal-watch.com/tax-burden',
        source: 'Fiscal Watch',
        sourceType: 'news',
        snippet: '전 국민에게 월 50만원만 지급해도 연간 300조원이 필요하다. 이는 국가 예산의 절반에 달하는 금액이다. 결국 증세가 불가피하며, 이는 기업과 중산층의 부담을 가중시켜 경제 성장을 저해할 것이다. 지속 불가능한 포퓰리즘이다.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.93
      },
      {
        title: '일하지 않는 사회, 근로 의욕 꺾는다',
        url: 'https://labor-market-view.com/work-incentive',
        source: 'Labor Market View',
        sourceType: 'blog',
        snippet: '아무 조건 없이 돈을 주면 누가 힘들게 일하려 하겠는가. 특히 3D 업종의 구인난은 더욱 심각해질 것이다. 노동의 가치가 훼손되고 사회 전반의 활력이 떨어질 우려가 크다. 핀란드 실험에서도 고용 증대 효과는 미미했다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.89
      },
      {
        title: '기존 복지 제도 축소 우려',
        url: 'https://youtube.com/watch?v=welfare-reduction',
        source: 'Social Safety Net TV',
        sourceType: 'youtube',
        snippet: '기본소득 재원 마련을 위해 기존의 기초수급제도, 장애인 지원 등 꼭 필요한 맞춤형 복지가 축소될 수 있습니다. 이는 오히려 취약계층에게 더 큰 피해를 줄 수 있습니다. 보편 지급보다 두터운 선별 지원이 더 효과적입니다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.86
      },
      {
        title: '물가 상승 유발',
        url: 'https://inflation-warning.com/ubi',
        source: 'Inflation Warning',
        sourceType: 'news',
        snippet: '시장에 돈이 많이 풀리면 물가가 오르게 되고, 결국 실질 소득은 늘어나지 않는 효과가 발생할 수 있다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.85
      },
      {
        title: '국가 경쟁력 하락',
        url: 'https://national-competitiveness.com/decline',
        source: 'National Competitiveness',
        sourceType: 'blog',
        snippet: '과도한 복지 지출은 국가 재정을 악화시키고 기업하기 어려운 환경을 만들어 국가 경쟁력을 떨어뜨린다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.84
      },
      {
        title: '정치적 악용 가능성',
        url: 'https://political-populism.com/risk',
        source: 'Political Populism',
        sourceType: 'news',
        snippet: '선거 때마다 표를 얻기 위해 지원금을 늘리는 포퓰리즘 경쟁이 벌어질 위험이 크다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.83
      }
    ],
    neutralOpinions: [
      {
        title: '실험을 통한 검증이 먼저',
        url: 'https://policy-experiment.org/pilot-programs',
        source: 'Policy Experiment Lab',
        sourceType: 'news',
        snippet: '전면 도입보다는 특정 지역이나 연령대를 대상으로 한 시범 사업을 통해 효과와 부작용을 면밀히 검증해야 한다. 데이터에 기반한 사회적 합의 과정이 선행되어야 한다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.87
      },
      {
        title: '재원 마련 방안에 대한 구체적 논의 필요',
        url: 'https://funding-plan.com/discussion',
        source: 'Funding Plan',
        sourceType: 'blog',
        snippet: '증세 없는 기본소득은 불가능하다. 어떤 세금을 얼마나 더 걷을 것인지에 대한 국민적 동의가 필요하다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.86
      },
      {
        title: '기존 복지와의 관계 설정',
        url: 'https://welfare-mix.com/relationship',
        source: 'Welfare Mix',
        sourceType: 'news',
        snippet: '기본소득이 기존 복지를 대체할 것인지, 보완할 것인지 명확한 설계가 필요하다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.85
      },
      {
        title: '기술 발전 속도 고려',
        url: 'https://tech-speed.com/consideration',
        source: 'Tech Speed',
        sourceType: 'blog',
        snippet: 'AI 기술 발전 속도와 일자리 대체 현황을 모니터링하며 도입 시기를 조절해야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      },
      {
        title: '국민 공론화 위원회 설치',
        url: 'https://public-debate.com/committee',
        source: 'Public Debate',
        sourceType: 'news',
        snippet: '사회적 파장이 큰 정책인 만큼 국민 공론화 위원회를 통해 충분한 숙의 과정을 거쳐야 한다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.83
      }
    ],
    alternativeOpinions: [
      {
        title: '안심소득(부의 소득세)이 현실적 대안',
        url: 'https://income-support.com/negative-income-tax',
        source: 'Income Support Blog',
        sourceType: 'blog',
        snippet: '모두에게 똑같이 주는 것이 아니라, 소득이 적을수록 더 많이 지원하는 하후상박형 안심소득(오세훈표 기본소득)이 재정 효율성과 소득 재분배 측면에서 더 낫다. 근로 유인을 유지하면서 빈곤을 해소할 수 있는 모델이다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.94
      },
      {
        title: '전 국민 고용 보장제',
        url: 'https://job-guarantee.org/public-jobs',
        source: 'Job Guarantee Initiative',
        sourceType: 'news',
        snippet: '현금 지급 대신 정부가 일자리를 보장하는 것이 낫다. 돌봄, 환경, 지역 사회 서비스 등 사회적으로 필요하지만 시장에서 공급되지 않는 일자리를 공공이 만들어 제공하면 소득 보장과 사회적 가치 창출을 동시에 할 수 있다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.90
      },
      {
        title: '로봇세 도입으로 재원 마련',
        url: 'https://youtube.com/watch?v=robot-tax',
        source: 'Tech & Society',
        sourceType: 'youtube',
        snippet: '일자리를 대체하는 로봇과 AI에 세금을 부과하여 기본소득 재원으로 활용해야 합니다. 기술 발전의 혜택을 기업이 독점하지 않고 사회 전체가 나누는 디지털 배당금 형태가 되어야 합니다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.92
      },
      {
        title: '참여 소득 도입',
        url: 'https://participation-income.com/intro',
        source: 'Participation Income',
        sourceType: 'blog',
        snippet: '봉사활동, 교육 훈련, 육아 등 사회적으로 가치 있는 활동을 하는 조건으로 소득을 지급하자.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '기초 자산제',
        url: 'https://basic-asset.com/youth',
        source: 'Basic Asset',
        sourceType: 'news',
        snippet: '성인이 되는 청년들에게 일정 금액의 목돈을 지원하여 출발선의 평등을 보장하자.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.87
      },
      {
        title: '보편적 기본 서비스(UBS) 확대',
        url: 'https://ubs-service.com/expansion',
        source: 'UBS Service',
        sourceType: 'blog',
        snippet: '현금 대신 주거, 의료, 교육, 교통 등 필수 서비스를 무상으로 제공하여 생활비를 줄여주는 것이 더 효과적이다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.89
      }
    ],
    futurePrediction: `기본소득 논의는 AI 기술 발전 속도와 맞물려 더욱 구체화될 것입니다.

**단기 전망 (6개월-1년)**
지자체 차원의 다양한 소득 보장 실험(청년수당, 농민수당 등)이 확대될 것입니다. 정치권에서는 선거 공약으로 부분적 기본소득이나 안심소득 모델을 경쟁적으로 제시할 것입니다.

**중기 전망 (1-2년)**
AI로 인한 일자리 감소가 가시화되면서 '로봇세', '데이터세' 등 새로운 세원 발굴 논의가 본격화될 것입니다. 기존 복지 제도의 통폐합과 구조조정을 통한 재원 마련 방안이 사회적 대타협 기구에서 논의될 것입니다.

**장기 전망 (2-3년 이상)**
완전한 형태의 기본소득보다는 범주형 기본소득(아동, 노인, 청년 등)이나 부의 소득세 형태가 먼저 도입될 가능성이 높습니다. 노동의 정의가 재정립되고, 소득과 고용이 분리되는 새로운 사회 계약이 형성될 것입니다.

**예상되는 영향**
- 긍정적: 절대 빈곤 해소, 내수 경제 안정화, 다양한 라이프스타일 등장
- 부정적: 국가 재정 건전성 악화, 조세 저항, 노동 시장 구조 변화의 진통
- 중립적: 복지 패러다임의 전환, 자동화 기술 수용성 증대

기본소득은 단순한 복지 정책을 넘어 기술 혁명 시대의 새로운 사회 운영 시스템으로 자리잡을 가능성이 큽니다.`,
    confidence: 0.83,
    analyzedAt: '2025-11-05T11:30:00Z'
  },

  // 예시 11: 원전 확대 vs 축소 (한국어)
  nuclearPowerKo: {
    analysisId: 'example-nuclear-power-ko',
    isValid: true,
    originalContent: {
      title: '에너지 위기와 탄소중립, 원전 생태계 복원 가속화',
      summary: '정부가 탈원전 정책을 공식 폐기하고 원전 생태계 복원에 속도를 내고 있다. 신한울 3, 4호기 건설 재개와 함께 노후 원전의 수명 연장, 소형모듈원전(SMR) 개발 투자가 확대되고 있다. 정부는 에너지 안보와 탄소중립 달성을 위해 원전이 필수적이라는 입장이다. 그러나 환경 단체와 지역 주민들은 안전성 문제와 고준위 방사성 폐기물 처리장 부재를 지적하며 강하게 반발하고 있다. 재생에너지 확대가 세계적 추세인 상황에서 원전 중심 정책이 적절한지에 대한 논란이 계속되고 있다.',
      detectedLanguage: 'ko'
    },
    keywords: ['원전 확대', '탈원전 폐기', '탄소중립', '에너지 안보', 'SMR', '방사성 폐기물', '재생에너지', '원전 수출'],
    supportOpinions: [
      {
        title: '원전은 가장 현실적인 탄소중립 수단',
        url: 'https://energy-policy.kr/nuclear-carbon-neutral',
        source: 'Energy Policy Forum',
        sourceType: 'news',
        snippet: '태양광, 풍력 등 재생에너지는 날씨에 따라 발전량이 들쭉날쭉하여 기저 전력으로 부적합하다. 탄소를 배출하지 않으면서 안정적으로 전력을 공급할 수 있는 에너지원은 원전이 유일하다. RE100 달성을 위해서도 원전 활용(CF100)이 필요하다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.95
      },
      {
        title: '에너지 안보와 전기요금 안정을 위해 필수',
        url: 'https://economy-insight.com/energy-security',
        source: 'Economy Insight',
        sourceType: 'blog',
        snippet: '러시아-우크라이나 전쟁 이후 에너지 가격이 급등했다. 에너지 자원이 없는 한국이 에너지 안보를 지키고 산업 경쟁력을 유지하기 위해서는 저렴한 원전 비중을 높여야 한다. 원전 가동률을 높여야 전기요금 인상 폭을 줄일 수 있다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.91
      },
      {
        title: 'K-원전 수출, 새로운 성장 동력',
        url: 'https://youtube.com/watch?v=k-nuclear-export',
        source: 'Industry News TV',
        sourceType: 'youtube',
        snippet: '한국의 원전 기술력과 시공 능력은 세계 최고 수준입니다. 체코, 폴란드 등 원전 도입을 원하는 국가들에 수출하여 제2의 중동 붐을 일으킬 수 있습니다. 원전 생태계 복원은 국가 경제를 위해서도 시급합니다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.89
      },
      {
        title: '일자리 창출 효과',
        url: 'https://job-creation.com/nuclear',
        source: 'Job Creation Report',
        sourceType: 'news',
        snippet: '원전 건설과 운영에는 수많은 전문 인력이 필요하다. 원전 생태계 복원은 양질의 일자리를 창출하고 지역 경제를 활성화한다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: '좁은 국토에 적합한 에너지',
        url: 'https://land-use.com/efficiency',
        source: 'Land Use Efficiency',
        sourceType: 'blog',
        snippet: '태양광이나 풍력은 넓은 부지가 필요하지만, 원전은 적은 면적에서 대용량 전력을 생산할 수 있어 국토가 좁은 한국에 적합하다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.86
      },
      {
        title: '기술 자립도 높음',
        url: 'https://tech-independence.com/nuclear',
        source: 'Tech Independence',
        sourceType: 'news',
        snippet: '한국은 원전 설계부터 시공, 운영까지 독자적인 기술을 보유하고 있어 해외 의존도를 낮출 수 있다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.85
      }
    ],
    opposeOpinions: [
      {
        title: '안전하지 않은 에너지는 미래가 없다',
        url: 'https://green-peace-korea.org/nuclear-danger',
        source: 'Green Peace Korea',
        sourceType: 'news',
        snippet: '후쿠시마 사고의 교훈을 잊어서는 안 된다. 지진 위험 지대에 밀집된 원전은 시한폭탄과 같다. 노후 원전 수명 연장은 사고 위험을 키우는 도박이다. 국민의 생명과 안전보다 경제 논리가 우선될 수 없다.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.93
      },
      {
        title: '화장실 없는 아파트, 핵폐기물 대책 전무',
        url: 'https://environment-watch.com/nuclear-waste',
        source: 'Environment Watch',
        sourceType: 'blog',
        snippet: '10만 년 이상 보관해야 하는 고준위 방사성 폐기물을 처리할 곳이 없다. 임시 저장 시설도 포화 상태다. 미래 세대에게 감당할 수 없는 쓰레기를 떠넘기는 것은 윤리적으로 옳지 않다. 폐기물 대책 없는 원전 확대는 중단되어야 한다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.90
      },
      {
        title: '재생에너지 소홀, 글로벌 경쟁력 약화',
        url: 'https://youtube.com/watch?v=renewable-energy-lag',
        source: 'Climate Action Channel',
        sourceType: 'youtube',
        snippet: '애플, 구글 등 글로벌 기업들은 공급망에 RE100(재생에너지 100%)을 요구하고 있습니다. 원전은 RE100에 포함되지 않습니다. 재생에너지 투자를 줄이고 원전에 올인하면 우리 수출 기업들은 수출길이 막힐 수 있습니다.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.88
      },
      {
        title: '원전 해체 비용 부담',
        url: 'https://decommissioning-cost.com/burden',
        source: 'Decommissioning Cost',
        sourceType: 'news',
        snippet: '원전 건설 비용만 생각하고 해체 비용은 과소평가하고 있다. 미래에 막대한 해체 비용이 청구될 것이다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.86
      },
      {
        title: '송전탑 갈등 유발',
        url: 'https://transmission-conflict.com/issue',
        source: 'Transmission Conflict',
        sourceType: 'blog',
        snippet: '대규모 원전 단지에서 생산한 전기를 수도권으로 보내기 위해 송전탑을 건설하는 과정에서 지역 주민과의 갈등이 끊이지 않는다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.85
      },
      {
        title: '사고 시 돌이킬 수 없는 피해',
        url: 'https://disaster-risk.com/nuclear',
        source: 'Disaster Risk',
        sourceType: 'news',
        snippet: '원전 사고는 한 번 발생하면 국토 전체를 오염시키고 수많은 인명 피해를 낳는다. 확률이 낮다고 무시할 수 없는 위험이다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.87
      }
    ],
    neutralOpinions: [
      {
        title: '에너지 믹스의 균형이 중요',
        url: 'https://energy-mix-research.org/balanced-mix',
        source: 'Energy Mix Research',
        sourceType: 'news',
        snippet: '원전과 재생에너지는 대립 관계가 아니라 상호 보완 관계다. 원전으로 기저 부하를 담당하고, 재생에너지를 확대해 나가는 조화로운 에너지 믹스 전략이 필요하다. 이념이 아닌 과학과 경제성, 환경성을 종합적으로 고려해야 한다.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.87
      },
      {
        title: '주민 수용성 확보 노력',
        url: 'https://public-acceptance.com/effort',
        source: 'Public Acceptance',
        sourceType: 'blog',
        snippet: '원전 정책 추진 과정에서 지역 주민의 의견을 충분히 수렴하고 투명하게 정보를 공개하여 신뢰를 얻어야 한다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.86
      },
      {
        title: '안전 규제 강화',
        url: 'https://safety-regulation.com/reinforcement',
        source: 'Safety Regulation',
        sourceType: 'news',
        snippet: '원전 확대와 동시에 원자력안전위원회의 독립성과 전문성을 강화하여 철저한 안전 감시가 이루어지도록 해야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.88
      },
      {
        title: '폐기물 처리장 공론화',
        url: 'https://waste-disposal.com/debate',
        source: 'Waste Disposal Debate',
        sourceType: 'blog',
        snippet: '고준위 방사성 폐기물 처리장 부지 선정을 위한 사회적 공론화를 서둘러야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.85
      },
      {
        title: '기술 개발 투자 지속',
        url: 'https://tech-investment.com/nuclear',
        source: 'Tech Investment',
        sourceType: 'news',
        snippet: '안전성을 높이는 기술과 폐기물 부피를 줄이는 파이로프로세싱 등 관련 기술 개발에 투자를 아끼지 말아야 한다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.84
      }
    ],
    alternativeOpinions: [
      {
        title: 'SMR(소형모듈원전)이 게임 체인저',
        url: 'https://tech-future.com/smr-technology',
        source: 'Tech Future Blog',
        sourceType: 'blog',
        snippet: '기존 대형 원전보다 안전성이 획기적으로 높고 입지 선정이 자유로운 SMR 개발에 집중해야 한다. 공장에서 모듈 형태로 제작해 조립하므로 건설 비용과 기간도 단축할 수 있다. 차세대 원전 시장을 선점해야 한다.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.94
      },
      {
        title: '핵융합 에너지 연구 가속화',
        url: 'https://fusion-energy.org/artificial-sun',
        source: 'Fusion Energy Institute',
        sourceType: 'news',
        snippet: '꿈의 에너지라 불리는 핵융합 발전 상용화를 앞당겨야 한다. 방사능 위험이 거의 없고 연료가 무한한 청정 에너지다. K-STAR 등 한국의 핵융합 기술력을 바탕으로 국제 공동 연구를 주도해야 한다.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.91
      },
      {
        title: '분산형 에너지 시스템 구축',
        url: 'https://youtube.com/watch?v=distributed-energy',
        source: 'Smart Grid TV',
        sourceType: 'youtube',
        snippet: '대규모 발전소와 송전탑 건설 중심의 중앙 집중형 시스템에서 벗어나야 합니다. 지역에서 생산하고 소비하는 분산형 에너지 시스템과 스마트 그리드를 구축하여 에너지 효율을 높이고 송전 갈등을 줄여야 합니다.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.89
      },
      {
        title: '수소 경제 활성화',
        url: 'https://hydrogen-economy.com/activation',
        source: 'Hydrogen Economy',
        sourceType: 'news',
        snippet: '원전이나 재생에너지로 생산한 전기로 수소를 만들고, 이를 에너지원으로 사용하는 수소 경제 생태계를 조성해야 한다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.88
      },
      {
        title: '에너지 효율화 사업 확대',
        url: 'https://energy-efficiency.com/expansion',
        source: 'Energy Efficiency',
        sourceType: 'blog',
        snippet: '발전소를 더 짓는 것보다 에너지를 덜 쓰게 만드는 것이 가장 친환경적이다. 건물, 산업, 수송 등 전 분야의 에너지 효율을 높이는 사업을 지원하자.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.87
      },
      {
        title: '해상 풍력 등 재생에너지 잠재력 활용',
        url: 'https://offshore-wind.com/potential',
        source: 'Offshore Wind',
        sourceType: 'news',
        snippet: '삼면이 바다인 한국의 지리적 이점을 살려 대규모 해상 풍력 단지를 조성하면 재생에너지 비중을 획기적으로 높일 수 있다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      }
    ],
    futurePrediction: `에너지 정책은 정권에 따라 급변하는 경향이 있으나, 탄소중립이라는 대명제 하에 원전과 재생에너지의 공존이 불가피할 전망입니다.

**단기 전망 (6개월-1년)**
신한울 3, 4호기 건설이 본격화되고, 계속 운전(수명 연장) 허가가 잇따를 것입니다. 고준위 방사성 폐기물 특별법 제정을 둘러싼 여야 갈등과 지역 주민의 반발이 거세질 것입니다.

**중기 전망 (1-2년)**
SMR 기술 개발 경쟁이 치열해지며 민간 기업의 참여가 확대될 것입니다. RE100 대응을 위해 재생에너지 보급 속도 조절론과 확대론이 충돌하며 기업들의 혼란이 예상됩니다. 전기요금 현실화 압박이 커질 것입니다.

**장기 전망 (2-3년 이상)**
원전 비중이 일정 수준(30% 내외) 유지되는 가운데, 해상 풍력 등 대규모 재생에너지 단지가 조성될 것입니다. 사용후 핵연료 저장 시설 부지 선정이 국가적 난제가 될 것입니다.

**예상되는 영향**
- 긍정적: 전력 수급 안정, 원전 수출 성과 가시화, 온실가스 감축 기여
- 부정적: 핵폐기물 갈등 심화, 재생에너지 산업 위축 우려, 안전 사고 위험 상존
- 중립적: 전력 시장 구조 개편, 에너지 효율화 기술 발전

결국 '원전 올인'도 '탈원전'도 아닌, 실용주의적 에너지 믹스로 수렴해 갈 것이며, 이 과정에서 사회적 합의를 이끌어내는 것이 가장 큰 과제가 될 것입니다.`,
    confidence: 0.88,
    analyzedAt: '2025-11-06T13:00:00Z'
  },

  // 예시 12: 우주 탐사 투자 (영어)
  spaceExplorationEn: {
    analysisId: 'example-space-exploration-en',
    isValid: true,
    originalContent: {
      title: 'The New Space Race: Billionaires vs Public Interest',
      summary: 'The space industry is undergoing a rapid transformation, driven by private companies like SpaceX and Blue Origin. While these companies promise to make space travel affordable and colonize Mars, critics argue that the billions spent on space exploration should be used to solve pressing problems on Earth, such as climate change and poverty. The debate intensifies as governments increasingly rely on private contractors for space missions, raising questions about the regulation of space resources and the militarization of space.',
      detectedLanguage: 'en'
    },
    keywords: ['space exploration', 'SpaceX', 'Mars colonization', 'private spaceflight', 'NASA', 'space debris', 'inequality', 'space resources'],
    supportOpinions: [
      {
        title: 'Space Exploration Drives Innovation',
        url: 'https://tech-progress.com/space-spinoffs',
        source: 'Tech Progress',
        sourceType: 'news',
        snippet: 'Technologies developed for space have improved life on Earth, from GPS and weather forecasting to medical imaging and water purification. Investing in space pushes the boundaries of science and engineering, leading to breakthroughs that benefit all of humanity.',
        publishedDate: '2025-10-25',
        relevanceScore: 0.94
      },
      {
        title: 'Humanity Needs a Backup Plan',
        url: 'https://future-humanity.org/multi-planetary',
        source: 'Future Humanity',
        sourceType: 'blog',
        snippet: 'Earth is vulnerable to asteroids, supervolcanoes, and man-made catastrophes. Becoming a multi-planetary species is the best insurance policy for the long-term survival of human consciousness. Mars colonization is a necessary step.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.90
      },
      {
        title: 'Unlimited Resources in Space',
        url: 'https://youtube.com/watch?v=asteroid-mining',
        source: 'Space Economy TV',
        sourceType: 'youtube',
        snippet: 'Asteroids contain trillions of dollars worth of rare metals and minerals. Mining space resources can end resource scarcity on Earth and reduce the environmental impact of mining on our planet. The space economy will be the next gold rush.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.88
      },
      {
        title: 'Inspiration for Future Generations',
        url: 'https://stem-education.com/space-inspiration',
        source: 'STEM Education',
        sourceType: 'news',
        snippet: 'Space exploration inspires young people to pursue careers in science, technology, engineering, and mathematics (STEM). It fosters a culture of curiosity and discovery.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.87
      },
      {
        title: 'Monitoring Earth\'s Climate',
        url: 'https://climate-monitor.com/satellites',
        source: 'Climate Monitor',
        sourceType: 'blog',
        snippet: 'Satellites are essential for monitoring climate change, tracking deforestation, and predicting natural disasters. Space technology is a vital tool for protecting our planet.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.89
      },
      {
        title: 'International Cooperation',
        url: 'https://space-diplomacy.org/iss',
        source: 'Space Diplomacy',
        sourceType: 'news',
        snippet: 'Projects like the International Space Station demonstrate that nations can work together peacefully for scientific goals, even when they have political differences on Earth.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      }
    ],
    opposeOpinions: [
      {
        title: 'Fix Earth First',
        url: 'https://earth-priority.org/fix-earth-first',
        source: 'Earth Priority',
        sourceType: 'news',
        snippet: 'It is morally wrong to spend billions on rockets while millions starve and the planet burns. Climate change, poverty, and disease are urgent crises that require our full attention and resources. Space tourism for the super-rich is an insult to the poor.',
        publishedDate: '2025-10-26',
        relevanceScore: 0.93
      },
      {
        title: 'Space Debris: A Ticking Time Bomb',
        url: 'https://space-safety.com/kessler-syndrome',
        source: 'Space Safety Watch',
        sourceType: 'blog',
        snippet: 'The rapid launch of thousands of satellites is overcrowding low Earth orbit. The risk of collisions is increasing, which could lead to the Kessler Syndrome—a chain reaction of debris that makes space inaccessible for generations. We are polluting space just as we polluted Earth.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.89
      },
      {
        title: 'Billionaire Playground',
        url: 'https://youtube.com/watch?v=space-inequality',
        source: 'Social Justice Now',
        sourceType: 'youtube',
        snippet: 'The privatization of space is creating a new form of inequality. Space should belong to all of humanity, not just a few tech oligarchs. We need strict international regulations to prevent the monopolization of space resources.',
        publishedDate: '2025-10-30',
        relevanceScore: 0.86
      },
      {
        title: 'Environmental Impact of Launches',
        url: 'https://eco-launch.com/pollution',
        source: 'Eco Launch Watch',
        sourceType: 'news',
        snippet: 'Rocket launches release black carbon and other pollutants into the upper atmosphere, potentially damaging the ozone layer and contributing to global warming.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.85
      },
      {
        title: 'Militarization of Space',
        url: 'https://peace-in-space.org/weaponization',
        source: 'Peace in Space',
        sourceType: 'blog',
        snippet: 'The space race is becoming an arms race. Nations are developing anti-satellite weapons and space-based defenses, increasing the risk of conflict.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.87
      },
      {
        title: 'Health Risks of Space Travel',
        url: 'https://space-health.com/radiation',
        source: 'Space Health',
        sourceType: 'news',
        snippet: 'Long-term exposure to cosmic radiation and microgravity poses serious health risks to astronauts. We are not biologically adapted for life in space.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      }
    ],
    neutralOpinions: [
      {
        title: 'Public-Private Partnership is Key',
        url: 'https://space-policy-review.com/nasa-spacex',
        source: 'Space Policy Review',
        sourceType: 'news',
        snippet: 'The debate shouldn\'t be public vs. private, but how they can work together. NASA provides the science and long-term vision, while private companies provide cost-effective launch capabilities. This synergy has revitalized the space sector.',
        publishedDate: '2025-10-29',
        relevanceScore: 0.87
      },
      {
        title: 'Regulation Needs to Catch Up',
        url: 'https://space-law.com/regulation-gap',
        source: 'Space Law Journal',
        sourceType: 'blog',
        snippet: 'Technology is moving faster than the law. We need new international agreements to govern commercial space activities and prevent conflicts.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.86
      },
      {
        title: 'Balancing Exploration and Conservation',
        url: 'https://sustainable-space.org/balance',
        source: 'Sustainable Space',
        sourceType: 'news',
        snippet: 'We can explore space while protecting Earth. Sustainable practices should be applied to space activities, such as reusable rockets and debris mitigation.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.85
      },
      {
        title: 'Ethical Considerations of Colonization',
        url: 'https://space-ethics.com/colonization',
        source: 'Space Ethics',
        sourceType: 'blog',
        snippet: 'We must consider the ethical implications of colonizing other planets. Do we have the right to alter other worlds? How will we govern space colonies?',
        publishedDate: '2025-11-03',
        relevanceScore: 0.84
      },
      {
        title: 'Economic Viability Questions',
        url: 'https://space-economics.com/viability',
        source: 'Space Economics',
        sourceType: 'news',
        snippet: 'The space economy is still speculative. It remains to be seen if space mining or tourism can become profitable and sustainable industries.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.83
      }
    ],
    alternativeOpinions: [
      {
        title: 'Robotic Exploration is More Efficient',
        url: 'https://science-focus.com/robots-vs-humans',
        source: 'Science Focus',
        sourceType: 'blog',
        snippet: 'Human spaceflight is dangerous and incredibly expensive. Robotic probes and rovers can do 90% of the science at 10% of the cost, without risking lives. We should focus on robotic exploration of the solar system before sending humans.',
        publishedDate: '2025-10-27',
        relevanceScore: 0.92
      },
      {
        title: 'International Space Treaty Update',
        url: 'https://legal-space.org/outer-space-treaty',
        source: 'Legal Space Institute',
        sourceType: 'news',
        snippet: 'The 1967 Outer Space Treaty is outdated. We need a new international legal framework to govern space mining, debris mitigation, and traffic management. Space must remain a global commons managed by international cooperation, not competition.',
        publishedDate: '2025-10-28',
        relevanceScore: 0.90
      },
      {
        title: 'Space-Based Solar Power',
        url: 'https://youtube.com/watch?v=space-solar',
        source: 'Clean Energy Future',
        sourceType: 'youtube',
        snippet: 'Instead of Mars colonies, we should focus on building solar power stations in orbit. They can harvest solar energy 24/7 and beam it wirelessly to Earth, providing unlimited clean energy and solving the climate crisis.',
        publishedDate: '2025-10-31',
        relevanceScore: 0.88
      },
      {
        title: 'Planetary Defense System',
        url: 'https://planetary-defense.org/system',
        source: 'Planetary Defense',
        sourceType: 'news',
        snippet: 'Our priority should be protecting Earth from asteroid impacts. We need a robust planetary defense system to detect and deflect potential threats.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.89
      },
      {
        title: 'Space Debris Cleanup',
        url: 'https://debris-cleanup.com/mission',
        source: 'Debris Cleanup',
        sourceType: 'blog',
        snippet: 'Before launching more satellites, we must clean up the existing debris. Active debris removal missions should be funded and prioritized.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.87
      },
      {
        title: 'Deep Space Telescopes',
        url: 'https://astronomy-news.com/telescopes',
        source: 'Astronomy News',
        sourceType: 'news',
        snippet: 'Investing in next-generation space telescopes like James Webb allows us to understand the universe\'s origins and search for life without leaving Earth\'s orbit.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      }
    ],
    futurePrediction: `The commercialization of space will accelerate, leading to a new era of exploration and potential conflict.

**Short-term (6-12 months)**
SpaceX's Starship will likely achieve orbit, lowering launch costs dramatically. The number of satellite internet constellations will grow, increasing concerns about light pollution and debris.

**Medium-term (1-2 years)**
The first private space stations may begin construction. The Artemis program aims to return humans to the Moon, with increased international participation. Legal battles over space resource rights will likely begin.

**Long-term (2-3 years)**
A permanent lunar presence may be established. The first crewed mission to Mars could be in the planning stages. Space tourism will become more common for the ultra-wealthy.

**Expected impacts**
- Positive: Technological breakthroughs, global internet coverage, inspiration for STEM
- Negative: Space debris accumulation, geopolitical tension in space, environmental impact of launches
- Neutral: Growth of the space economy, new legal frameworks

Space is the next frontier for human economic activity, but without careful stewardship, we risk repeating the mistakes of Earth's industrialization.`,
    confidence: 0.82,
    analyzedAt: '2025-11-07T15:00:00Z'
  },

  // 예시 13: 노키즈존 확산 논란 (한국어)
  noKidsZoneKo: {
    analysisId: 'example-no-kids-zone-ko',
    isValid: true,
    originalContent: {
      title: "'노키즈존' 확산 논란... 영업의 자유인가 차별인가",
      summary: '카페와 식당을 중심으로 어린이 출입을 금지하는 "노키즈존"이 늘어나면서 사회적 갈등이 깊어지고 있다. 자영업자들은 영업의 자유와 다른 손님들의 권리 보호를 이유로 내세우지만, 반대 측은 명백한 아동 차별이자 저출산 시대에 역행하는 문화라고 비판한다. 최근 제주도 등 일부 지자체에서는 노키즈존 금지 조례 제정 움직임까지 보이고 있다.',
      detectedLanguage: 'ko'
    },
    keywords: ['노키즈존', '아동 차별', '영업의 자유', '예스키즈존', '맘충', '저출산', '공공장소 예절', '케어키즈존'],
    supportOpinions: [
      {
        title: '업주의 정당한 권리이자 영업 전략',
        url: 'https://business-owner-forum.com/business-freedom',
        source: 'Small Business Forum',
        sourceType: 'blog',
        snippet: '내 가게의 분위기와 타겟 고객층을 정하는 것은 업주의 고유 권한이다. 조용한 분위기를 원하는 성인 고객들을 위해 노키즈존을 선택하는 것은 합리적인 경영 전략이다. 아이들의 안전사고 발생 시 업주가 전적으로 책임을 져야 하는 법적 리스크도 무시할 수 없다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.94
      },
      {
        title: '다른 손님들의 "방해받지 않을 권리"도 중요',
        url: 'https://consumer-rights.com/quiet-environment',
        source: 'Consumer Voice',
        sourceType: 'news',
        snippet: '비싼 돈을 내고 카페나 식당을 이용하는 손님들은 편안하게 휴식할 권리가 있다. 통제되지 않는 아이들의 소음과 뛰어다니는 행동으로 인해 피해를 보는 사례가 너무 많다. 노키즈존은 차별이 아니라 서로의 영역을 분리하는 배려다.',
        publishedDate: '2025-11-06',
        relevanceScore: 0.91
      },
      {
        title: '안전사고 판례가 노키즈존 부추겨',
        url: 'https://youtube.com/watch?v=legal-risk-cafe',
        source: 'Law Review TV',
        sourceType: 'youtube',
        snippet: '과거 식당에서 아이가 뜨거운 물에 화상을 입은 사건에서 법원이 식당 주인에게도 일부 배상 책임을 물은 판례가 결정적이었습니다. 사고 예방과 배상 책임 공포 때문에 자영업자들은 방어적으로 노키즈존을 선택할 수밖에 없습니다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.89
      }
    ],
    opposeOpinions: [
      {
        title: '아동은 "잠재적 진상"이 아닌 시민이다',
        url: 'https://human-rights-watch.kr/child-rights',
        source: 'Human Rights Watch Korea',
        sourceType: 'news',
        snippet: '특정 집단 전체를 잠재적 위험 요소로 간주하고 배제하는 것은 명백한 차별이다. 흑인 출입 금지가 인종차별이듯, 아동 출입 금지는 나이에 기반한 차별이다. 아이들은 사회 속에서 공존하는 법을 배울 기회조차 박탈당하고 있다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.95
      },
      {
        title: '저출산 국가에서 아이를 환영하지 않는 모순',
        url: 'https://parenting-daily.com/low-birth-rate-irony',
        source: 'Parenting Daily',
        sourceType: 'blog',
        snippet: '정부는 출산율을 높이자고 수조 원을 쓰는데, 정작 사회는 아이와 부모를 갈 곳 없게 만든다. 아이를 데리고 갈 수 있는 곳이 줄어들수록 육아의 고립감은 커진다. "맘충" 같은 혐오 표현과 노키즈존은 출산을 기피하게 만드는 주범이다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.92
      },
      {
        title: '유엔 아동권리협약 위반 소지',
        url: 'https://youtube.com/watch?v=un-child-rights',
        source: 'Global Society Channel',
        sourceType: 'youtube',
        snippet: '유엔 아동권리위원회는 이미 한국의 노키즈존 확산에 우려를 표했습니다. 공공장소나 상업 시설 이용에 있어 아동을 차별하지 말라는 권고를 무시하는 것입니다. 선진국에서는 찾아보기 힘든 한국만의 기형적인 문화입니다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.88
      }
    ],
    neutralOpinions: [
      {
        title: '일부 부모의 방임이 원인... 매너 교육 필요',
        url: 'https://social-etiquette.org/parenting-responsibility',
        source: 'Social Culture Lab',
        sourceType: 'news',
        snippet: '노키즈존의 원인은 아이가 아니라, 아이를 방치하는 일부 부모들의 태도에 있다. 공공장소 예절 교육이 가정에서부터 선행되어야 하며, 부모가 아이를 적극적으로 케어하는 문화를 만드는 것이 우선이다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.90
      },
      {
        title: '공간의 특성에 따른 유연한 접근 필요',
        url: 'https://space-design.com/zoning-strategy',
        source: 'Space Design Web',
        sourceType: 'blog',
        snippet: '모든 곳이 노키즈존일 필요도, 예스키즈존일 필요도 없다. 파인 다이닝이나 스터디 카페는 노키즈존이 합리적이고, 키즈 카페나 패밀리 레스토랑은 아이들을 환영하면 된다. 매장의 성격에 따라 소비자가 선택할 수 있게 해야 한다.',
        publishedDate: '2025-11-06',
        relevanceScore: 0.86
      }
    ],
    alternativeOpinions: [
      {
        title: '노 배드 페어런츠 존(No Bad Parents Zone) 확산',
        url: 'https://culture-change.kr/care-kids-zone',
        source: 'Culture Change Campaign',
        sourceType: 'news',
        snippet: '아이의 출입 자체를 막는 것이 아니라, "아이를 방치하는 부모"의 입장을 제한하거나 "적극적인 케어"를 서약받는 방식이다. "케어 키즈 존"이라는 이름으로 아이와 부모, 다른 손님이 공존할 수 있는 규칙을 명시하는 매장이 늘고 있다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.93
      },
      {
        title: '시간제 노키즈존 운영',
        url: 'https://restaurant-management.com/time-based-restriction',
        source: 'Restaurant Weekly',
        sourceType: 'blog',
        snippet: '점심시간 등 혼잡한 시간에는 아이 동반을 허용하고, 저녁 시간이나 술을 파는 시간에는 노키즈존으로 운영하는 식이다. 시간대별로 타겟 고객을 달리하여 갈등을 최소화하는 유연한 운영 방식이 대안이 될 수 있다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.89
      },
      {
        title: '공공형 키즈 카페 및 돌봄 공간 확충',
        url: 'https://youtube.com/watch?v=public-kids-space',
        source: 'Policy Idea TV',
        sourceType: 'youtube',
        snippet: '민간 업소에만 의존할 것이 아니라, 지자체가 운영하는 저렴하고 안전한 키즈 카페나 가족 쉼터를 대폭 늘려야 합니다. 부모들이 눈치 보지 않고 갈 수 있는 공공 공간이 많아지면 노키즈존 갈등도 자연스럽게 완화될 것입니다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.91
      }
    ],
    futurePrediction: `노키즈존 논란은 단순한 찬반을 넘어 '공존의 기술'을 모색하는 방향으로 진화할 것입니다.

**단기 전망 (6개월-1년)**
제주도 등 관광지를 중심으로 '노키즈존 금지 조례' 제정 시도가 이어지겠으나, 영업권 침해 논란으로 실제 강제력을 갖기는 어려울 것입니다. 대신 '노키즈존 지도'나 '예스키즈존 리스트' 앱이 활성화되어 소비자들이 사전에 정보를 확인하고 방문하는 패턴이 정착될 것입니다.

**중기 전망 (1-2년)**
'No Kids'라는 배제적 표현 대신 'Care Kids Zone(케어 키즈존)'이나 'No Bad Parents Zone' 등으로 명칭을 순화하고, 구체적인 이용 수칙(뛰어다님 금지, 영상 소리 제한 등)을 명시하는 매장이 늘어날 것입니다. 프랜차이즈 카페를 중심으로 층별 분리(1층 키즈존, 2층 노키즈존) 모델이 도입될 수 있습니다.

**장기 전망 (3년 이상)**
저출산 심화로 인해 아동 인구가 귀해지면서, 오히려 아이 동반 가족을 유치하기 위한 '키즈 프렌들리' 마케팅이 프리미엄 전략으로 부상할 가능성이 높습니다. 사회적으로는 공공장소 예절 교육이 강화되고, 서로 배려하는 '노키즈존' 논쟁 자체가 촌스러운 구시대적 발상이 될 수 있습니다.

**예상되는 영향**
- 긍정적: 공공장소 에티켓 문화 성숙, 다양한 컨셉의 매장 분화, 아동 권리 인식 제고
- 부정적: 육아 가정의 활동 반경 축소, 세대 간 혐오 정서 잔존
- 중립적: 매장 운영 규칙의 세분화 및 표준화

결국 '금지'보다는 '관리'와 '매너'가 핵심 키워드가 되며, 서로의 권리를 침해하지 않는 선에서 공존하는 성숙한 시민 의식이 자리 잡게 될 것입니다.`,
    confidence: 0.88,
    analyzedAt: '2025-11-06T14:30:00Z'
  },

  // 예시 14: 조력 존엄사 합법화 (한국어)
  assistedDyingKo: {
    analysisId: 'example-assisted-dying-ko',
    isValid: true,
    originalContent: {
      title: "국회, '조력 존엄사법' 발의... '품위 있는 죽음' vs '생명 경시' 격론",
      summary: '말기 환자가 의사의 도움을 받아 스스로 삶을 마감할 수 있도록 하는 "조력 존엄사법"이 국회에 발의되었다. 찬성 측은 극심한 고통 속에 있는 환자의 자기결정권을 존중해야 한다고 주장하는 반면, 반대 측은 생명 경시 풍조 조장과 경제적 이유에 의한 타살(현대판 고려장) 가능성을 우려하며 강력히 반발하고 있다.',
      detectedLanguage: 'ko'
    },
    keywords: ['조력 존엄사', '안락사', '웰다잉', '자기결정권', '호스피스', '생명 윤리', '말기 환자', '연명의료 결정법'],
    supportOpinions: [
      {
        title: '무의미한 고통 연장 대신 품위 있는 마무리를',
        url: 'https://well-dying-korea.com/right-to-die',
        source: 'Well-Dying Society',
        sourceType: 'news',
        snippet: '회복 가능성이 없는 말기 암 환자 등에게 하루하루는 지옥과 같다. 고통 속에서 기계에 의존해 숨만 쉬는 것이 과연 인간다운 삶인가? 환자가 맑은 정신으로 가족과 작별하고 고통 없이 떠날 수 있도록 돕는 것이 진정한 인권이다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.95
      },
      {
        title: '해외 선진국들은 이미 시행 중',
        url: 'https://global-bio-ethics.com/assisted-dying-trends',
        source: 'Global Bioethics Review',
        sourceType: 'blog',
        snippet: '스위스, 네덜란드, 캐나다, 미국 일부 주 등에서는 이미 조력 사망이 합법화되었다. 이들 국가에서 "죽음의 여행"을 떠나는 한국인이 늘고 있다. 이제 우리나라도 죽음에 대한 금기를 깨고, 선진적인 임종 문화를 법제화해야 할 시점이다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.90
      },
      {
        title: '국민 80%가 안락사 도입 찬성',
        url: 'https://youtube.com/watch?v=poll-euthanasia',
        source: 'Social Trend Analysis',
        sourceType: 'youtube',
        snippet: '최근 설문조사에서 국민의 82%가 조력 존엄사 입법에 찬성했습니다. 고령화 사회로 진입하면서 "어떻게 죽을 것인가"에 대한 관심이 높아졌고, 본인뿐만 아니라 가족의 고통을 덜어주기 위해서라도 제도가 필요하다는 인식이 확산되고 있습니다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.88
      }
    ],
    opposeOpinions: [
      {
        title: '생명은 합의나 선택의 대상이 아니다',
        url: 'https://pro-life-korea.org/sanctity-of-life',
        source: 'Pro-Life Korea',
        sourceType: 'news',
        snippet: '한번 허용하면 걷잡을 수 없다. 처음에는 말기 환자로 제한하겠지만, 결국 우울증 환자나 장애인, 가난한 노인에게까지 죽음을 종용하는 압박으로 작용할 것이다. 생명은 신성불가침의 영역이며, 인간이 임의로 중단해서는 안 된다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.96
      },
      {
        title: '현대판 고려장 우려... 사회적 타살 될 수도',
        url: 'https://ethics-forum.com/slippery-slope',
        source: 'Medical Ethics Forum',
        sourceType: 'blog',
        snippet: '간병비 부담이나 가족에게 짐이 되기 싫다는 이유로 죽음을 "선택 당하는" 노인들이 생길 것이다. 사회 안전망이 부족한 상황에서 조력 존엄사는 가난한 사람들을 죽음으로 내모는 수단으로 악용될 위험이 매우 크다.',
        publishedDate: '2025-11-06',
        relevanceScore: 0.93
      },
      {
        title: '의사의 직업 윤리에 반한다',
        url: 'https://youtube.com/watch?v=doctors-oath',
        source: 'Medical TV',
        sourceType: 'youtube',
        snippet: '히포크라테스 선서는 환자의 생명을 살리는 것을 최우선으로 합니다. 의사에게 환자를 죽이는 약을 처방하라는 것은 의료인의 존재 가치를 부정하는 것입니다. 이는 의료 불신을 초래하고 의사-환자 관계를 파괴할 것입니다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.89
      }
    ],
    neutralOpinions: [
      {
        title: '호스피스 완화의료 확충이 먼저',
        url: 'https://hospice-care.kr/palliative-care-first',
        source: 'Hospice Care Info',
        sourceType: 'news',
        snippet: '조력 존엄사를 논하기 전에 말기 환자의 고통을 덜어줄 호스피스 인프라부터 제대로 갖춰야 한다. 한국의 호스피스 이용률은 20%대에 불과하다. 고통 완화 시스템이 충분하지 않은 상태에서 죽음을 선택지로 주는 것은 순서가 틀렸다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.91
      },
      {
        title: '엄격한 절차와 기준 마련이 선행되어야',
        url: 'https://legal-bio.com/strict-guidelines',
        source: 'Legal Bio Tech',
        sourceType: 'blog',
        snippet: '도입하더라도 악용을 막기 위한 3중, 4중의 안전장치가 필요하다. 복수의 의사 진단, 숙려 기간, 윤리위원회 심의, 법원 허가 등 엄격한 절차를 거쳐야 하며, 환자의 의사 능력이 명확할 때만 허용해야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.87
      }
    ],
    alternativeOpinions: [
      {
        title: '사전연명의료의향서 제도 활성화',
        url: 'https://life-sustaining-treatment.re.kr/advance-directive',
        source: 'National Bioethics Agency',
        sourceType: 'news',
        snippet: '이미 시행 중인 연명의료 결정법을 내실화하는 것이 현실적인 대안이다. 건강할 때 자신이 원하지 않는 무의미한 연명 치료(인공호흡기 등)를 거부하겠다는 의사를 미리 밝혀두는 문화를 정착시켜야 한다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.94
      },
      {
        title: '말기 환자 돌봄(Care) 시스템 강화',
        url: 'https://welfare-policy.com/end-of-life-care',
        source: 'Welfare Policy Review',
        sourceType: 'blog',
        snippet: '가정 호스피스 방문 진료 확대, 간병비 급여화 등 말기 환자와 가족의 부담을 줄여주는 복지 정책이 조력 존엄사의 대안이 될 수 있다. "죽고 싶다"는 호소가 "돌봐 달라"는 구조 신호가 아닌지 사회가 먼저 응답해야 한다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.90
      },
      {
        title: '웰다잉(Well-Dying) 교육 의무화',
        url: 'https://youtube.com/watch?v=death-education',
        source: 'Life Wisdom Channel',
        sourceType: 'youtube',
        snippet: '죽음을 삶의 일부로 받아들이고 준비하는 교육이 필요합니다. 유언장 작성, 장례 방식 결정, 인생 노트 정리 등을 통해 자신의 삶을 주체적으로 마무리하는 웰다잉 문화를 확산시켜야 합니다.',
        publishedDate: '2025-11-06',
        relevanceScore: 0.86
      }
    ],
    futurePrediction: `조력 존엄사 합법화 논쟁은 한국 사회가 초고령 사회로 진입함에 따라 더욱 뜨거워질 것이며, 결국 제한적인 형태의 허용으로 나아갈 가능성이 높습니다.

**단기 전망 (6개월-1년)**
종교계와 의료계의 반발로 당장 법안 통과는 어렵겠지만, 공청회와 토론회를 통해 공론화 과정이 본격화될 것입니다. '안락사'라는 용어 대신 '조력 존엄사'라는 용어가 정착되면서 긍정적 인식이 확산될 것입니다.

**중기 전망 (1-2년)**
연명의료 결정법의 범위가 확대될 것입니다. 호스피스 완화의료 대상이 말기 암 외의 질환으로 넓어지고, 사전연명의료의향서 작성이 보편화될 것입니다. 조력 존엄사 도입을 위한 구체적인 요건(대상 질환, 고통의 척도 등)을 두고 사회적 합의 기구가 구성될 수 있습니다.

**장기 전망 (3년 이상)**
엄격한 요건 하에 '의사 조력 자살(PAS)' 형태의 존엄사가 제한적으로 법제화될 가능성이 있습니다. 다만 시행 초기에는 극소수의 말기 환자에게만 적용될 것이며, 이를 관리 감독할 국가 차원의 위원회가 설립될 것입니다. 동시에 '간병 살인' 등을 막기 위한 사회적 돌봄 시스템도 함께 강화되어야 한다는 목소리가 정책에 반영될 것입니다.

**예상되는 영향**
- 긍정적: 말기 환자의 고통 해소, 임종 문화의 선진화, 무의미한 연명 의료 감소
- 부정적: 생명 경시 풍조 만연 우려, 취약 계층의 비자발적 선택 압박, 의료계 윤리 갈등
- 중립적: 장례 문화의 간소화, 유산 기부 등 정리 문화 확산

결국 '죽을 권리'도 인권의 일부라는 인식이 자리 잡겠지만, 그 전제 조건인 '살 만한 사회'를 만드는 노력이 병행되지 않는다면 제도는 윤리적 정당성을 얻기 힘들 것입니다.`,
    confidence: 0.90,
    analyzedAt: '2025-11-07T11:20:00Z'
  },

  // 예시 15: 플랫폼 공정경쟁촉진법 (한국어)
  platformRegulationKo: {
    analysisId: 'example-platform-regulation-ko',
    isValid: true,
    originalContent: {
      title: "'플랫폼 공정경쟁촉진법' 재점화... 빅테크 규제 vs 혁신 저해",
      summary: '공정거래위원회가 거대 플랫폼 기업의 독과점 남용을 막기 위해 추진 중인 "플랫폼 공정경쟁촉진법(플랫폼법)"을 두고 논란이 재점화되었다. 정부는 소상공인과 소비자 보호를 위해 시장 지배적 사업자를 사전 지정하여 규제해야 한다는 입장이지만, 네이버·카카오 등 국내 업계는 "구글·애플 등 해외 빅테크는 빠져나가고 토종 플랫폼만 죽이는 역차별"이라며 혁신 생태계 붕괴를 우려하고 있다.',
      detectedLanguage: 'ko'
    },
    keywords: ['플랫폼법', '공정위', '독과점 규제', '네이버', '카카오', '빅테크', '사전 지정제', '역차별', '혁신 저해'],
    supportOpinions: [
      {
        title: '기울어진 운동장 바로잡아야... 입점 업체 보호 필수',
        url: 'https://sme-voice.com/platform-fairness',
        source: 'SME Association News',
        sourceType: 'news',
        snippet: '거대 플랫폼들의 수수료 갑질, 자사 우대, 끼워팔기 등 불공정 행위가 도를 넘었다. 소상공인들은 플랫폼 없이는 장사를 할 수 없는 종속 관계에 놓여 있다. 사후 처벌만으로는 피해 회복이 어려우므로, 강력한 사전 규제를 통해 공정한 경쟁 환경을 만들어야 한다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.94
      },
      {
        title: '소비자 후생 증진을 위한 독과점 방지',
        url: 'https://consumer-watch.org/monopoly-danger',
        source: 'Consumer Watch',
        sourceType: 'blog',
        snippet: '플랫폼이 시장을 장악하면 결국 가격 인상과 서비스 품질 저하로 이어진다. 경쟁자가 사라진 독점 시장의 피해는 고스란히 소비자에게 돌아온다. 유럽의 DMA(디지털 시장법)처럼 지배적 사업자를 규제하여 경쟁을 촉진해야 소비자가 혜택을 본다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.91
      },
      {
        title: '스타트업 생태계 보호를 위한 최소한의 룰',
        url: 'https://youtube.com/watch?v=startup-ecosystem-protection',
        source: 'Tech Policy TV',
        sourceType: 'youtube',
        snippet: '공룡 플랫폼들이 문어발식 확장으로 스타트업의 아이디어를 베끼거나 인수 후 고사시키는 일이 빈번합니다. 새로운 혁신 기업이 등장할 사다리를 걷어차지 않게 하려면, 거대 플랫폼의 반칙 행위를 엄격히 규제해야 합니다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.88
      }
    ],
    opposeOpinions: [
      {
        title: '빈대 잡으려다 초가삼간 태운다... 토종 플랫폼 고사 위기',
        url: 'https://it-industry-news.com/reverse-discrimination',
        source: 'IT Industry Daily',
        sourceType: 'news',
        snippet: '규제의 칼날이 결국 네이버, 카카오, 쿠팡 등 국내 기업만 겨눌 것이다. 구글, 넷플릭스 등 해외 빅테크는 본사 위치나 매출 산정 문제로 규제를 피해갈 구멍이 많다. 이는 국내 기업의 경쟁력을 약화시켜 디지털 주권을 해외에 내주는 결과만 초래할 것이다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.95
      },
      {
        title: '사전 규제는 혁신의 싹을 자르는 행위',
        url: 'https://innovation-forum.kr/regulation-risk',
        source: 'Innovation Forum',
        sourceType: 'blog',
        snippet: '빠르게 변하는 디지털 시장에서 덩치만 보고 미리 규제하는 것은 시대착오적이다. AI, 메타버스 등 미래 산업 경쟁이 치열한데, 정부가 기업의 손발을 묶으면 글로벌 경쟁에서 도태된다. 벼룩 잡자고 사냥개를 풀어놓는 격이다.',
        publishedDate: '2025-11-06',
        relevanceScore: 0.92
      },
      {
        title: '미국도 자국 기업 보호하는데 한국만 규제?',
        url: 'https://youtube.com/watch?v=global-tech-war',
        source: 'Global Economy Insight',
        sourceType: 'youtube',
        snippet: '미국은 자국 빅테크 보호를 위해 규제 입법을 폐기하거나 완화하고 있습니다. 자국 플랫폼을 보유한 나라는 미국, 중국, 한국뿐입니다. 전략적 자산인 플랫폼 기업을 규제로 옥죄는 것은 국가 경쟁력을 스스로 깎아먹는 자해 행위입니다.',
        publishedDate: '2025-11-01',
        relevanceScore: 0.90
      }
    ],
    neutralOpinions: [
      {
        title: '사전 지정제 대신 사후 규제 강화로 선회해야',
        url: 'https://law-economics.re.kr/regulation-alternative',
        source: 'Law & Economics Review',
        sourceType: 'news',
        snippet: '규제의 필요성은 인정하지만, "사전 지정제"는 낙인 효과와 과잉 규제 우려가 크다. 현행 공정거래법을 엄격하게 적용하고, 위법 행위가 발생했을 때 신속하게 제재하는 사후 규제 방식으로도 충분히 목적을 달성할 수 있다.',
        publishedDate: '2025-11-04',
        relevanceScore: 0.89
      },
      {
        title: '자율 규제와 법적 규제의 조화가 필요',
        url: 'https://digital-policy.org/co-regulation',
        source: 'Digital Policy Center',
        sourceType: 'blog',
        snippet: '정부의 일방적 규제보다는 민간이 주도하는 자율 규제 기구를 활성화하고, 정부는 이를 감독하는 "공동 규제" 모델이 바람직하다. 상생 협약을 통해 입점 업체와의 갈등을 풀고, 심각한 위반 시에만 법이 개입하는 유연함이 필요하다.',
        publishedDate: '2025-11-03',
        relevanceScore: 0.86
      }
    ],
    alternativeOpinions: [
      {
        title: '플랫폼 상생협력법 제정 제안',
        url: 'https://win-win-growth.com/platform-cooperation',
        source: 'Win-Win Growth Institute',
        sourceType: 'news',
        snippet: '규제 중심의 "온플법" 대신 지원과 협력을 강조하는 "상생법"을 만들자. 플랫폼 기업이 소상공인 디지털 전환을 지원하고 수수료를 인하하면 세제 혜택을 주는 인센티브 방식이 시장 생태계를 건강하게 만드는 더 효과적인 방법이다.',
        publishedDate: '2025-11-02',
        relevanceScore: 0.93
      },
      {
        title: '알고리즘 투명성 공개 의무화',
        url: 'https://tech-ethics.org/algorithm-transparency',
        source: 'Tech Ethics Lab',
        sourceType: 'blog',
        snippet: '독과점 여부보다 더 중요한 것은 공정성이다. 검색 순위나 배차 알고리즘의 주요 변수를 투명하게 공개하도록 의무화하여, 자사 우대나 차별 행위를 감시할 수 있게 하는 것이 규제의 핵심이 되어야 한다.',
        publishedDate: '2025-11-05',
        relevanceScore: 0.91
      },
      {
        title: '소비자 데이터 주권 강화 (마이데이터 확대)',
        url: 'https://youtube.com/watch?v=mydata-expansion',
        source: 'Data Sovereign TV',
        sourceType: 'youtube',
        snippet: '플랫폼 독점의 원천은 데이터 독점입니다. 사용자가 자신의 데이터를 자유롭게 이동시킬 수 있는 마이데이터 권리를 강화하면, 자연스럽게 플랫폼 간 경쟁이 촉진되고 독점이 완화될 수 있습니다. 기업 규제가 아닌 소비자 권한 강화로 풀어야 합니다.',
        publishedDate: '2025-11-06',
        relevanceScore: 0.88
      }
    ],
    futurePrediction: `플랫폼 규제 논의는 '공정성 확보'와 '산업 경쟁력 유지'라는 두 마리 토끼 사이에서 줄타기를 하며 장기화될 전망입니다.

**단기 전망 (6개월-1년)**
업계와 통상 마찰(미국 무역대표부 등의 우려)을 고려하여 '사전 지정제'를 포함한 강력한 법안 처리는 지연될 가능성이 높습니다. 대신 공정위는 현행법을 적용하여 자사 우대나 끼워팔기 등 개별 불공정 행위에 대한 조사를 강화하고 과징금을 부과하는 등 압박 수위를 높일 것입니다.

**중기 전망 (1-2년)**
유럽의 DMA 시행 경과를 지켜보며 한국형 규제 모델이 수정될 것입니다. '지배적 사업자' 지정 요건을 완화하거나, 사전 규제 대신 '추정 승낙제' 등 절충안이 도입될 수 있습니다. 자율 규제 기구의 권한을 강화하는 방향으로 입법이 선회할 가능성도 있습니다.

**장기 전망 (3년 이상)**
생성형 AI 시대가 도래하면서 검색/쇼핑 플랫폼의 지형이 바뀜에 따라, 기존의 '온라인 플랫폼' 정의 자체가 재검토될 것입니다. 규제의 초점이 '시장 지배력'에서 'AI 알고리즘의 공정성'과 '데이터 독점 해소'로 이동할 것입니다. 국내 플랫폼 기업들은 글로벌 빅테크와의 경쟁을 위해 합종연횡하거나 AI 중심으로 사업을 재편할 것입니다.

**예상되는 영향**
- 긍정적: 입점 업체의 협상력 강화, 불공정 관행 개선, 소비자 선택권 보호
- 부정적: 플랫폼 기업의 투자 위축, 무료 서비스의 유료화 전환, 해외 기업과의 역차별 심화
- 중립적: 스타트업의 M&A 활성화 또는 위축 (양면성 존재)

결국 규제는 도입되겠지만, 처음에 논의된 강력한 형태보다는 시장의 자율성을 일정 부분 인정하고 글로벌 통상 규범과 조화를 이루는 '한국형 유연 규제'로 귀결될 것입니다.`,
    confidence: 0.86,
    analyzedAt: '2025-11-08T10:10:00Z'
  }
};

// 랜덤 예시 가져오기
export function getRandomExample(): AnalysisResult {
  const examples = Object.values(exampleAnalyses);
  return examples[Math.floor(Math.random() * examples.length)];
}

// 특정 예시 가져오기
export function getExampleById(id: string): AnalysisResult | undefined {
  return exampleAnalyses[id];
}
