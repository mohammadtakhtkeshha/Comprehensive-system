import React from 'react';
import clsx from 'clsx';
import { useSpring, animated, config } from '@react-spring/web';
import { 
  FaStore,
  FaWarehouse,
  FaExchangeAlt,
  FaEye,
  FaHeadset,
  FaMoneyBillWave,
  FaShieldAlt,
  FaBriefcase,
  FaSitemap,
  FaChartLine,
  FaUsers,
  FaBell,
  FaPlug
} from 'react-icons/fa';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: React.ElementType;
  description: JSX.Element;
  color: string;
  gradient: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'مدیریت پذیرندگان',
    icon: FaStore,
    color: 'from-blue-500 to-blue-600',
    gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
    description: (
      <>
        ثبت، احراز هویت و مدیریت کامل پذیرندگان با قابلیت نگاشت MID/TID و 
        مدیریت قراردادها و مدارک
      </>
    ),
  },
  {
    title: 'مدیریت ترمینال و انبار',
    icon: FaWarehouse,
    color: 'from-purple-500 to-purple-600',
    gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
    description: (
      <>
        مدیریت کامل موجودی انبار تجهیزات (POS, MPOS, PinPad, SIM) و 
        ردیابی ترمینال‌ها با قابلیت تحویل و تعویض
      </>
    ),
  },
  {
    title: 'پردازش تراکنش',
    icon: FaExchangeAlt,
    color: 'from-green-500 to-green-600',
    gradient: 'bg-gradient-to-br from-green-500 to-green-600',
    description: (
      <>
        پردازش و روتینگ تراکنش‌ها، تسویه خودکار پذیرندگان و 
        reconciliation با شاپرک و بانک
      </>
    ),
  },
  {
    title: 'مانیتورینگ لحظه‌ای',
    icon: FaEye,
    color: 'from-cyan-500 to-cyan-600',
    gradient: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    description: (
      <>
        مانیتورینگ لحظه‌ای ترمینال‌ها و سیستم‌ها با داشبورد SLA 
        و سیستم هشدار هوشمند
      </>
    ),
  },
  {
    title: 'امنیت و کشف تقلب',
    icon: FaShieldAlt,
    color: 'from-red-500 to-red-600',
    gradient: 'bg-gradient-to-br from-red-500 to-red-600',
    description: (
      <>
        سیستم پیشرفته کشف تقلب با Rule Engine و مدل‌های ریسک 
        برای محافظت از تراکنش‌ها
      </>
    ),
  },
  {
    title: 'دسترسی پویا',
    icon: FaUsers,
    color: 'from-indigo-500 to-indigo-600',
    gradient: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    description: (
      <>
        سیستم مدیریت کاربران با RBAC پویا و قابلیت تعریف نقش‌های سفارشی 
        با محدودیت دسترسی شعب و مناطق
      </>
    ),
  },
  {
    title: 'گزارش‌های جامع',
    icon: FaChartLine,
    color: 'from-yellow-500 to-yellow-600',
    gradient: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    description: (
      <>
        داشبورد مدیریتی، گزارش‌های عملیاتی و مالی با قابلیت ساخت 
        گزارش‌های سفارشی
      </>
    ),
  },
  {
    title: 'یکپارچه‌سازی',
    icon: FaPlug,
    color: 'from-orange-500 to-orange-600',
    gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
    description: (
      <>
        اتصال به شاپرک، سوئیچ بانک و سرویس‌های استعلام با EventBus 
        و Queue Management
      </>
    ),
  },
  {
    title: 'پشتیبانی و Ticketing',
    icon: FaHeadset,
    color: 'from-pink-500 to-pink-600',
    gradient: 'bg-gradient-to-br from-pink-500 to-pink-600',
    description: (
      <>
        سیستم جامع پشتیبانی با تخصیص خودکار به کارشناسان و 
        مدیریت SLA و فرم‌های عملیاتی
      </>
    ),
  },
];

function Feature({title, icon: Icon, description, gradient, index}: FeatureItem & { index: number }) {
  const [hovered, setHovered] = React.useState(false);
  
  const cardAnimation = useSpring({
    from: { 
      opacity: 0,
      transform: 'translateY(50px) scale(0.9)',
    },
    to: { 
      opacity: 1,
      transform: 'translateY(0px) scale(1)',
    },
    delay: 300 + (index * 100),
    config: config.gentle,
  });

  const hoverAnimation = useSpring({
    transform: hovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0px) scale(1)',
    boxShadow: hovered 
      ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
      : '0 4px 6px rgba(0, 0, 0, 0.1)',
    config: config.gentle,
  });

  const iconAnimation = useSpring({
    transform: hovered ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)',
    config: config.wobbly,
  });

  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <animated.div
        style={cardAnimation}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <animated.div
          style={hoverAnimation}
          className={clsx(
            'card featureCard h-full',
            'bg-white dark:bg-gray-800',
            'rounded-2xl overflow-hidden',
            'border-0 shadow-lg',
            'transition-all duration-300',
            'cursor-pointer'
          )}
        >
          <div className={clsx(
            'card__header text-center p-6',
            `bg-gradient-to-br ${gradient.split(' ').slice(1).join(' ')}`
          )}>
            <animated.div
              style={iconAnimation}
              className="inline-flex items-center justify-center mb-4"
            >
              <div className={clsx(
                'p-4 rounded-2xl',
                'bg-white/20 backdrop-blur-sm',
                'shadow-lg'
              )}>
                <Icon className="text-4xl text-white" />
              </div>
            </animated.div>
            <h3 className={clsx(
              'text-xl font-bold text-white',
              'mt-4 mb-2'
            )}>
              {title}
            </h3>
          </div>
          <div className="card__body p-6">
            <p className={clsx(
              'text-gray-600 dark:text-gray-300',
              'leading-relaxed',
              'text-sm'
            )}>
              {description}
            </p>
          </div>
        </animated.div>
      </animated.div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
    config: config.slow,
  });

  return (
    <section className={clsx(
      styles.features,
      'featuresSection',
      'bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
      'py-16'
    )}>
      <div className="container">
        <div className="row margin-top--xl">
          <div className="col col--12">
            <animated.h2 
              style={titleAnimation}
              className={clsx(
                'mb-4 text-gray-900 dark:text-gray-900 ',
                'sectionTitle',
                'text-center text-4xl md:text-5xl font-bold',
                
              )}
            >
              ماژول‌های سیستم
            </animated.h2>
            <animated.p 
              style={titleAnimation}
              className={clsx(
                'text-center text-lg text-gray-600 dark:text-gray-400',
                'mb-12'
              )}
            >
              سیستم جامع مدیریت PSP با ۱۳ ماژول قدرتمند
            </animated.p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
