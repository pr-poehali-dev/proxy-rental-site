import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [bandwidth, setBandwidth] = useState<number>(100);
  const [locations, setLocations] = useState<number>(1);
  const [support, setSupport] = useState<string>('basic');

  const calculatePrice = () => {
    let basePrice = bandwidth * 800;
    
    if (locations > 1) {
      basePrice += (locations - 1) * 15000;
    }
    
    if (support === 'priority') {
      basePrice *= 1.15;
    } else if (support === 'vip') {
      basePrice *= 1.25;
    }
    
    return Math.round(basePrice);
  };

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      speed: '100 Мбит/с',
      price: '80 000 ₽',
      period: '/месяц',
      features: [
        'Выделенный канал 100 Мбит/с',
        'Безлимитный трафик',
        '99.9% uptime гарантия',
        'Базовая техподдержка',
        'HTTP/HTTPS/SOCKS5',
        '1 geo-локация'
      ],
      gradient: 'from-purple-600 to-blue-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      speed: '500 Мбит/с',
      price: '350 000 ₽',
      period: '/месяц',
      popular: true,
      features: [
        'Выделенный канал 500 Мбит/с',
        'Безлимитный трафик',
        '99.95% uptime гарантия',
        'Приоритетная поддержка 24/7',
        'HTTP/HTTPS/SOCKS5',
        '5+ geo-локаций',
        'API доступ',
        'Ротация IP'
      ],
      gradient: 'from-blue-500 to-pink-500'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      speed: '1 Гбит/с',
      price: '650 000 ₽',
      period: '/месяц',
      features: [
        'Выделенный канал 1 Гбит/с',
        'Безлимитный трафик',
        '99.99% uptime гарантия',
        'VIP поддержка 24/7',
        'Все протоколы',
        'Неограниченные geo-локации',
        'Расширенный API',
        'Автоматическая ротация',
        'Персональный менеджер',
        'SLA договор'
      ],
      gradient: 'from-pink-500 to-purple-600'
    }
  ];

  const features = [
    {
      icon: 'Zap',
      title: 'Молниеносная скорость',
      description: 'Выделенная полоса без ограничений и просадок скорости'
    },
    {
      icon: 'Shield',
      title: 'Максимальная безопасность',
      description: 'Шифрование трафика и полная анонимность ваших данных'
    },
    {
      icon: 'Globe',
      title: 'География покрытия',
      description: 'Серверы в 50+ странах мира для любых задач'
    },
    {
      icon: 'Activity',
      title: '99.99% Uptime',
      description: 'Стабильная работа и мониторинг в режиме реального времени'
    },
    {
      icon: 'Code',
      title: 'Мощный API',
      description: 'Полная автоматизация и интеграция с вашими системами'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
      description: 'Техническая поддержка всегда на связи для решения любых вопросов'
    }
  ];

  const faq = [
    {
      question: 'Что такое выделенная полоса и чем она отличается от обычного прокси?',
      answer: 'Выделенная полоса гарантирует стабильную скорость только для вас. В отличие от shared прокси, где скорость делится между пользователями, вы получаете полный контроль над пропускной способностью.'
    },
    {
      question: 'Можно ли изменить тариф в процессе использования?',
      answer: 'Да, вы можете повысить или понизить тариф в любой момент. При повышении тарифа изменения вступают в силу мгновенно, при понижении — с начала следующего расчетного периода.'
    },
    {
      question: 'Какие протоколы поддерживаются?',
      answer: 'Мы поддерживаем HTTP, HTTPS и SOCKS5 протоколы на всех тарифах. Enterprise тариф включает дополнительные протоколы и возможность кастомной настройки.'
    },
    {
      question: 'Как работает ротация IP адресов?',
      answer: 'Ротация IP позволяет автоматически менять ваш IP адрес через заданный интервал времени или по запросу через API. Это особенно полезно для парсинга и работы с большими объемами данных.'
    },
    {
      question: 'Есть ли тестовый период?',
      answer: 'Да, мы предоставляем 24-часовой тестовый доступ с полосой 50 Мбит/с для оценки качества наших услуг. Свяжитесь с поддержкой для активации тестового периода.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
              <Icon name="Wifi" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">ProxyFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Преимущества</a>
            <a href="#api" className="text-muted-foreground hover:text-foreground transition-colors">API</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>
          <Button className="gradient-bg hover:opacity-90 transition-opacity">
            Начать
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/20 to-pink-500/20 animate-gradient" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="gradient-bg text-white border-0 px-4 py-1.5 text-sm">
              <Icon name="Sparkles" size={16} className="mr-2" />
              Новое поколение прокси-сервисов
            </Badge>
            <h1 className="md:text-7xl font-bold leading-tight my-5 text-3xl text-slate-400">Аренда безлимитных резидентских прокси РФ </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Премиальные прокси-серверы с гарантированной скоростью от 100 Мбит/с. 
              Полный контроль, максимальная производительность, безупречная стабильность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity text-lg px-8 py-6">
                <Icon name="Rocket" size={20} className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть демо
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 justify-center pt-8 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} className="text-green-500" />
                <span>Без ограничений трафика</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} className="text-green-500" />
                <span>99.99% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={20} className="text-green-500" />
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выберите свой <span className="gradient-text">тариф</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer ${
                  plan.popular ? 'border-2 border-primary shadow-2xl shadow-primary/20' : 'border-border'
                } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader className="pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.speed}</CardDescription>
                  <div className="pt-4">
                    <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Icon name="CheckCircle2" size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className={`w-full mt-6 ${plan.popular ? 'gradient-bg text-white' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-20">
            <Card className="border-2 border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="text-center pb-8">
                <div className="inline-block mx-auto mb-4">
                  <Badge className="gradient-bg text-white border-0 px-4 py-1.5">
                    <Icon name="Calculator" size={16} className="mr-2" />
                    Калькулятор стоимости
                  </Badge>
                </div>
                <CardTitle className="text-3xl mb-2">Рассчитайте индивидуальный тариф</CardTitle>
                <CardDescription className="text-base">
                  Настройте параметры под свои задачи и узнайте точную стоимость
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 pb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="text-lg font-semibold">Полоса пропускания</label>
                        <Badge variant="outline" className="text-lg font-bold gradient-text">
                          {bandwidth} Мбит/с
                        </Badge>
                      </div>
                      <Slider
                        value={[bandwidth]}
                        onValueChange={(value) => setBandwidth(value[0])}
                        min={100}
                        max={1000}
                        step={50}
                        className="py-4"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>100 Мбит/с</span>
                        <span>1 Гбит/с</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="text-lg font-semibold">Количество geo-локаций</label>
                        <Badge variant="outline" className="text-lg font-bold gradient-text">
                          {locations}
                        </Badge>
                      </div>
                      <Slider
                        value={[locations]}
                        onValueChange={(value) => setLocations(value[0])}
                        min={1}
                        max={10}
                        step={1}
                        className="py-4"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>1 локация</span>
                        <span>10 локаций</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="text-lg font-semibold">Уровень поддержки</label>
                      <div className="grid grid-cols-3 gap-3">
                        <Button
                          variant={support === 'basic' ? 'default' : 'outline'}
                          className={support === 'basic' ? 'gradient-bg text-white' : ''}
                          onClick={() => setSupport('basic')}
                        >
                          Базовая
                        </Button>
                        <Button
                          variant={support === 'priority' ? 'default' : 'outline'}
                          className={support === 'priority' ? 'gradient-bg text-white' : ''}
                          onClick={() => setSupport('priority')}
                        >
                          Приоритетная
                        </Button>
                        <Button
                          variant={support === 'vip' ? 'default' : 'outline'}
                          className={support === 'vip' ? 'gradient-bg text-white' : ''}
                          onClick={() => setSupport('vip')}
                        >
                          VIP
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="bg-gradient-to-br from-purple-600/10 via-blue-500/10 to-pink-500/10 rounded-2xl p-8 border-2 border-primary/30">
                      <div className="text-center space-y-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Итоговая стоимость</p>
                          <p className="text-6xl font-bold gradient-text mb-1">
                            {calculatePrice().toLocaleString('ru-RU')} ₽
                          </p>
                          <p className="text-muted-foreground">/месяц</p>
                        </div>
                        
                        <div className="space-y-3 text-left pt-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Полоса пропускания:</span>
                            <span className="font-semibold">{bandwidth} Мбит/с</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Geo-локации:</span>
                            <span className="font-semibold">{locations} шт</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Поддержка:</span>
                            <span className="font-semibold">
                              {support === 'basic' ? 'Базовая' : support === 'priority' ? 'Приоритетная' : 'VIP'}
                            </span>
                          </div>
                          <div className="h-px bg-border my-3" />
                          <div className="flex items-center gap-2 text-sm text-green-500">
                            <Icon name="CheckCircle2" size={16} />
                            <span>Безлимитный трафик включен</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-green-500">
                            <Icon name="CheckCircle2" size={16} />
                            <span>99.9%+ uptime гарантия</span>
                          </div>
                        </div>

                        <Button size="lg" className="w-full gradient-bg text-white text-lg py-6">
                          <Icon name="ShoppingCart" size={20} className="mr-2" />
                          Заказать тариф
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают <span className="gradient-text">нас</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Технологии и сервис мирового уровня
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plans[index % 3].gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="api" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Мощный <span className="gradient-text">API</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Полная автоматизация управления прокси
            </p>
          </div>
          <Card className="border-border overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">Документация API</CardTitle>
              <CardDescription className="text-base">
                Простая интеграция и управление прокси через REST API
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-background rounded-lg p-6 border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="font-mono">GET</Badge>
                  <code className="text-sm text-muted-foreground">/api/v1/proxy/list</code>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Получить список активных прокси</p>
                <div className="bg-muted/50 rounded-md p-4 font-mono text-sm overflow-x-auto">
                  <pre>{`{
  "proxies": [
    {
      "ip": "185.xxx.xxx.xxx",
      "port": 8080,
      "protocol": "http",
      "location": "DE",
      "speed": "100mbps"
    }
  ]
}`}</pre>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <Icon name="Key" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold mb-1">API ключ</div>
                    <div className="text-sm text-muted-foreground">Безопасная аутентификация</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Webhook" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Webhooks</div>
                    <div className="text-sm text-muted-foreground">Уведомления в реальном времени</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Документация</div>
                    <div className="text-sm text-muted-foreground">Полное руководство API</div>
                  </div>
                </div>
              </div>
              <Button className="w-full gradient-bg text-white">
                <Icon name="FileCode" size={20} className="mr-2" />
                Открыть полную документацию
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Часто задаваемые <span className="gradient-text">вопросы</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответы на популярные вопросы о нашем сервисе
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Свяжитесь <span className="gradient-text">с нами</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Наша команда готова ответить на ваши вопросы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-border text-center hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
                <CardDescription className="text-base">
                  support@proxyflow.com
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border text-center hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">Telegram</CardTitle>
                <CardDescription className="text-base">
                  @proxyflow_support
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-border text-center hover:border-primary transition-colors">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl">Поддержка 24/7</CardTitle>
                <CardDescription className="text-base">
                  Круглосуточно
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                <Icon name="Wifi" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">ProxyFlow</span>
            </div>
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>© 2024 ProxyFlow. Все права защищены.</p>
              <p className="mt-1">Премиальные прокси-серверы с выделенной полосой</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;