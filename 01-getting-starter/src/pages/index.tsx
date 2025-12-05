import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import AnimatedBackground from '@site/src/components/AnimatedBackground';
import { useSpring, animated, config } from '@react-spring/web';
import { 
  FaCreditCard, 
  FaBook, 
  FaTools, 
  FaLandmark,
  FaCoins,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaLink,
  FaTicketAlt,
  FaStore,
  FaWarehouse,
  FaExchangeAlt,
  FaEye,
  FaHeadset,
  FaMoneyBillWave,
  FaLock,
  FaBriefcase,
  FaSitemap,
  FaFileAlt,
  FaBell,
  FaPlug
} from 'react-icons/fa';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // Resolve static asset paths with baseUrl to ensure SVGs load correctly
  const posIconUrl = useBaseUrl('/img/pos-icon.svg');
  const bankLogoUrl = useBaseUrl('/img/bank-logo.svg');
  
  // Animation for POS icon
  const posIconAnimation = useSpring({
    from: { 
      transform: 'translateY(0px) scale(0.8)',
      opacity: 0 
    },
    to: { 
      transform: 'translateY(0px) scale(1)',
      opacity: 1 
    },
    config: config.gentle,
    delay: 200,
  });

  // Animation for title
  const titleAnimation = useSpring({
    from: { 
      transform: 'translateY(30px)',
      opacity: 0 
    },
    to: { 
      transform: 'translateY(0px)',
      opacity: 1 
    },
    config: config.slow,
    delay: 400,
  });

  // Animation for subtitle
  const subtitleAnimation = useSpring({
    from: { 
      transform: 'translateY(30px)',
      opacity: 0 
    },
    to: { 
      transform: 'translateY(0px)',
      opacity: 1 
    },
    config: config.slow,
    delay: 600,
  });

  // Animation for bank name
  const bankNameAnimation = useSpring({
    from: { 
      transform: 'translateY(20px)',
      opacity: 0 
    },
    to: { 
      transform: 'translateY(0px)',
      opacity: 1 
    },
    config: config.gentle,
    delay: 800,
  });

  // Floating animation for POS icon
  const floatingAnimation = useSpring({
    from: { transform: 'translateY(0px)' },
    to: { transform: 'translateY(-10px)' },
    config: { 
      duration: 2000,
      tension: 100,
      friction: 50 
    },
    loop: { reverse: true },
  });

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, 'relative overflow-hidden')}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 animate-gradient-x"></div>
      
      {/* Animated particles */}
      <AnimatedBackground />

      <div className="container relative z-10">
        <animated.div 
          style={{...posIconAnimation, ...floatingAnimation}}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-white/30 rounded-3xl blur-xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20">
              <img 
                src={posIconUrl} 
                alt="POS Terminal" 
                className="w-32 h-32 md:w-40 md:h-40 drop-shadow-lg"
              />
            </div>
          </div>
        </animated.div>

        <animated.h1 
          style={titleAnimation}
          className={clsx('hero__title text-white font-bold text-4xl md:text-6xl drop-shadow-lg mb-4')}
        >
          {siteConfig.title}
        </animated.h1>
        
        <animated.p 
          style={subtitleAnimation}
          className={clsx('hero__subtitle text-white/95 text-lg md:text-xl mb-4')}
        >
          {siteConfig.tagline}
        </animated.p>
        
        <animated.div
          style={bankNameAnimation}
          className="text-yellow-300 text-xl md:text-2xl font-semibold mt-4 mb-8 drop-shadow-md flex items-center justify-center gap-3"
        >
          <img 
            src={bankLogoUrl} 
            alt="بانک رفاه کارگران" 
            className="w-10 h-10 md:w-12 md:h-12 animate-pulse"
          />
          <span>بانک رفاه کارگران</span>
          <img 
            src={bankLogoUrl} 
            alt="بانک رفاه کارگران" 
            className="w-10 h-10 md:w-12 md:h-12 animate-pulse"
          />
        </animated.div>
        
        <div className={clsx(styles.buttons, 'flex flex-wrap justify-center gap-4 mt-8')}>
          <animated.div
            style={useSpring({
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0px)' },
              delay: 1000,
              config: config.gentle,
            })}
          >
          <Link
              className={clsx(
                'button button--secondary button--lg heroButton',
                'bg-white/90 hover:bg-white text-blue-700 font-semibold',
                'px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300',
                'flex items-center gap-2'
              )}
            to="/docs/intro">
              <FaBook className="text-xl" />
              شروع مستندات
          </Link>
          </animated.div>
          
          <animated.div
            style={useSpring({
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0px)' },
              delay: 1200,
              config: config.gentle,
            })}
          >
          <Link
              className={clsx(
                'button button--info button--lg heroButton',
                'bg-white/20 hover:bg-white/30 text-white border-2 border-white/50',
                'px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300',
                'backdrop-blur-sm flex items-center gap-2'
              )}
              to="/docs/modules/merchant-management/overview">
              <FaTools className="text-xl" />
              مشاهده ماژول‌ها
          </Link>
          </animated.div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="سامانه جامع مدیریت پذیرندگان، ترمینال‌ها و پردازش تراکنش‌های بانکی">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
