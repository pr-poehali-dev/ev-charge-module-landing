import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
  };

  const products = [
    {
      id: 1,
      name: 'ВЗМ-30',
      power: '30 кВт',
      voltage: '200-900В',
      current: '0-150А',
      efficiency: '95%',
      description: 'Компактный модуль для небольших зарядных станций'
    },
    {
      id: 2,
      name: 'ВЗМ-50',
      power: '50 кВт',
      voltage: '200-1000В',
      current: '0-250А',
      efficiency: '96%',
      description: 'Оптимальное решение для средних станций'
    },
    {
      id: 3,
      name: 'ВЗМ-100',
      power: '100 кВт',
      voltage: '200-1000В',
      current: '0-500А',
      efficiency: '97%',
      description: 'Мощный модуль для быстрой зарядки'
    }
  ];

  const advantages = [
    {
      icon: 'Zap',
      title: 'Высокий КПД',
      description: 'До 97% эффективности преобразования энергии с минимальными потерями'
    },
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: 'Промышленное исполнение с защитой от перегрузок и короткого замыкания'
    },
    {
      icon: 'Settings',
      title: 'Модульность',
      description: 'Возможность параллельного подключения для увеличения мощности'
    },
    {
      icon: 'Thermometer',
      title: 'Климат',
      description: 'Работа при температуре от -40°C до +50°C без потери характеристик'
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold gradient-text">ООО "АЛРУС"</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('products')} className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Продукция
            </button>
            <button onClick={() => scrollToSection('advantages')} className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Преимущества
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Контакты
            </button>
          </nav>
          <Button onClick={() => scrollToSection('contact')} size="sm">
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Выпрямительно-зарядные модули
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 mb-4">
              для систем заряда электромобилей
            </p>
            <p className="text-lg text-foreground/60 mb-12 max-w-3xl mx-auto">
              Промышленные модули мощностью от 30 до 100 кВт с высоким КПД и надёжностью. 
              Сертифицированное оборудование для профессиональных зарядных станций.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={() => scrollToSection('products')} size="lg" className="text-lg px-8">
                <Icon name="Box" size={20} className="mr-2" />
                Смотреть продукцию
              </Button>
              <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="text-lg px-8">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Наша продукция</h3>
            <p className="text-xl text-foreground/70">Линейка модулей для любых задач</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="p-8 bg-card border-border hover:border-primary transition-all duration-300 group animate-slide-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <Icon name="BatteryCharging" size={32} className="text-primary" />
                </div>
                <h4 className="text-3xl font-bold mb-2">{product.name}</h4>
                <p className="text-foreground/60 mb-6">{product.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Мощность:</span>
                    <span className="font-semibold text-primary">{product.power}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Напряжение:</span>
                    <span className="font-semibold">{product.voltage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Ток:</span>
                    <span className="font-semibold">{product.current}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">КПД:</span>
                    <span className="font-semibold text-secondary">{product.efficiency}</span>
                  </div>
                </div>

                <Button onClick={() => scrollToSection('contact')} className="w-full">
                  Запросить КП
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Преимущества</h3>
            <p className="text-xl text-foreground/70">Почему выбирают наши модули</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name={advantage.icon} size={28} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">{advantage.title}</h4>
                <p className="text-foreground/70 leading-relaxed">{advantage.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                <div className="text-foreground/70">лет срок службы</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">5 лет</div>
                <div className="text-foreground/70">гарантия</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-foreground/70">техподдержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Свяжитесь с нами</h3>
            <p className="text-xl text-foreground/70">Ответим на все вопросы и подберём оптимальное решение</p>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя *</label>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Сообщение *</label>
                <Textarea
                  placeholder="Опишите ваш проект или задачу..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-foreground/80">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@al-rus.com</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3 text-foreground/80">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Москва, ул. Промышленная, 15</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-foreground/60">
          <p>© 2024 ООО "АЛРУС". Выпрямительно-зарядные модули для электромобилей</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;