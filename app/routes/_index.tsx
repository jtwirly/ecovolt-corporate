import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Energy Forecasting`,
      description: `Harness the power of machine learning to predict energy consumption patterns with unparalleled accuracy.`,
      icon: <i className="las la-chart-line"></i>,
    },
    {
      heading: `Real-Time Optimization`,
      description: `Continuously adjust energy usage in real-time to maximize efficiency and minimize costs.`,
      icon: <i className="las la-tachometer-alt"></i>,
    },
    {
      heading: `Sustainability Reporting`,
      description: `Generate comprehensive ESG reports to showcase your commitment to environmental stewardship.`,
      icon: <i className="las la-leaf"></i>,
    },
    {
      heading: `Customizable Dashboards`,
      description: `Tailor your energy management interface to focus on the metrics that matter most to your business.`,
      icon: <i className="las la-columns"></i>,
    },
    {
      heading: `Predictive Maintenance`,
      description: `Anticipate equipment failures before they occur, reducing downtime and maintenance costs.`,
      icon: <i className="las la-tools"></i>,
    },
    {
      heading: `Expert Consulting`,
      description: `Access our team of energy management experts for personalized strategies and support.`,
      icon: <i className="las la-user-tie"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Chief Sustainability Officer, TechGiant Corp`,
      content: `EnergySmart AI has been a game-changer for our sustainability efforts. We've reduced our energy costs by 30% and significantly improved our ESG ratings.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Operations Manager, Global Manufacturing Inc.`,
      content: `The predictive maintenance feature alone has saved us millions in potential downtime. EnergySmart AI is now an integral part of our operations.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Data Center Director, CloudServe Solutions`,
      content: `We've optimized our data center energy consumption beyond what we thought possible. EnergySmart AI's AI-driven insights are truly revolutionary.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Essentials`,
      description: `Perfect for medium-sized businesses looking to start their energy optimization journey.`,
      monthly: 2999,
      yearly: 32989,
      features: [
        `AI-powered forecasting`,
        `Real-time monitoring`,
        `Basic reporting`,
      ],
    },
    {
      title: `Professional`,
      description: `Ideal for large corporations seeking comprehensive energy management solutions.`,
      monthly: 5999,
      yearly: 65989,
      features: [
        `All Essentials features`,
        `Predictive maintenance`,
        `Advanced sustainability reporting`,
        `24/7 expert support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Tailored solutions for global enterprises with complex energy management needs.`,
      monthly: 9999,
      yearly: 109989,
      features: [
        `All Professional features`,
        `Custom AI models`,
        `On-site consultations`,
        `Dedicated account manager`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How quickly can we see results with EnergySmart AI?`,
      answer: `Many of our clients see significant energy savings within the first 3-6 months of implementation. However, the full benefits of our AI-driven optimizations and predictive maintenance typically become apparent over a 12-month period.`,
    },
    {
      question: `Is EnergySmart AI compatible with our existing energy management systems?`,
      answer: `Yes, EnergySmart AI is designed to integrate seamlessly with most existing energy management systems. Our team will work closely with you to ensure smooth integration and data synchronization.`,
    },
    {
      question: `How does EnergySmart AI ensure data security?`,
      answer: `We take data security very seriously. EnergySmart AI uses state-of-the-art encryption and follows strict data protection protocols. We are compliant with major data security standards and regularly undergo third-party security audits.`,
    },
    {
      question: `Can EnergySmart AI help with our ESG reporting requirements?`,
      answer: `Absolutely. Our platform includes comprehensive sustainability reporting features that align with major ESG frameworks. We can help you track, analyze, and report on your environmental impact with ease and accuracy.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Connect Your Systems`,
      description: `Seamlessly integrate EnergySmart AI with your existing energy infrastructure.`,
    },
    {
      heading: `AI Analysis`,
      description: `Our advanced algorithms analyze your energy consumption patterns and identify optimization opportunities.`,
    },
    {
      heading: `Implement Strategies`,
      description: `Apply AI-driven recommendations to optimize energy usage and reduce costs.`,
    },
    {
      heading: `Monitor and Improve`,
      description: `Continuously track performance, generate reports, and refine strategies for ongoing improvement.`,
    },
  ]

  const painPoints = [
    {
      emoji: `💸`,
      title: `Skyrocketing Energy Costs`,
    },
    {
      emoji: `🌡️`,
      title: `Inefficient Energy Usage`,
    },
    {
      emoji: `📊`,
      title: `Complex ESG Reporting`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Revolutionize Your Energy Management with AI`}
        subtitle={`Empower your business to slash energy costs, boost efficiency, and lead in sustainability with EnergySmart AI.`}
        buttonText={`Start Optimizing Now`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/vfYQDb-ecovolt-gR7F`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from satisfied corporate clients`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Trusted by Industry Leaders`} />
      <LandingPainPoints
        title={`The $100 Billion Energy Management Challenge`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Transforming Energy Management in Four Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Unleash the Power of AI in Energy Management`}
        subtitle={`Discover how EnergySmart AI can revolutionize your approach to energy consumption and sustainability.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: Transforming Energy Management Across Industries`}
        subtitle={`See how leading corporations are achieving unprecedented energy efficiency and sustainability with EnergySmart AI.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Efficiency, Sustainability, and Your Bottom Line`}
        subtitle={`Choose the plan that best fits your organization's energy management needs and ambitions.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your EnergySmart AI Questions Answered`}
        subtitle={`Get the information you need to make an informed decision about your energy management future.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Energy Management?`}
        subtitle={`Join the AI-powered energy revolution today and start your journey towards unparalleled efficiency and sustainability.`}
        buttonText={`Get Started Now`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
