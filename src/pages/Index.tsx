import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const products = [
    {
      name: 'ВЗМ-30',
      power: '30 кВт',
      voltage: '380В',
      current: '80А',
      efficiency: '95%',
      image: 'https://cdn.poehali.dev/projects/2988c152-3f40-410d-a762-b229a1a44ff2/files/7c079963-f5f9-4842-a3ce-5bda21aec822.jpg'
    },
    {
      name: 'ВЗМ-50',
      power: '50 кВт',
      voltage: '380В',
      current: '125А',
      efficiency: '96%',
      image: 'https://cdn.poehali.dev/projects/2988c152-3f40-410d-a762-b229a1a44ff2/files/b5517993-4fc2-4294-bf38-2ebb6d60d14d.jpg'
    },
    {
      name: 'ВЗМ-100',
      power: '100 кВт',
      voltage: '380В',
      current: '250А',
      efficiency: '97%',
      image: 'https://cdn.poehali.dev/projects/2988c152-3f40-410d-a762-b229a1a44ff2/files/7c079963-f5f9-4842-a3ce-5bda21aec822.jpg'
    }
  ];

  const features = [
    {
      icon: 'Shield',
      title: 'Надёжность',
      description: 'Промышленные компоненты высшего класса защиты. Работа в экстремальных условиях от -40°C до +50°C'
    },
    {
      icon: 'Zap',
      title: 'Долговечность',
      description: 'Срок службы более 15 лет. Гарантия 5 лет. Минимальное обслуживание'
    },
    {
      icon: 'Activity',
      title: 'Эффективность',
      description: 'КПД до 97%. Интеллектуальная система управления. Низкие эксплуатационные расходы'
    },
    {
      icon: 'Settings',
      title: 'Модульность',
      description: 'Масштабируемая архитектура. Параллельное подключение модулей. Гибкая конфигурация'
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">ВЗМ Системы</h1>
          <div className="flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-foreground/80 hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('products')} className="text-foreground/80 hover:text-primary transition-colors">
              Продукция
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground/80 hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/2988c152-3f40-410d-a762-b229a1a44ff2/files/fc970c70-64e0-4422-839e-910a01bdb495.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
              Выпрямительно-зарядные модули
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Передовые решения для систем заряда электромобилей
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button onClick={() => scrollToSection('products')} size="lg" className="text-lg px-8 py-6">
                <Icon name="Zap" size={20} className="mr-2" />
                Наша продукция
              </Button>
              <Button onClick={() => scrollToSection('contacts')} size="lg" variant="outline" className="text-lg px-8 py-6">
                <Icon name="Mail" size={20} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 animate-slide-in hover:animate-glow-pulse"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Наша продукция</h2>
            <p className="text-xl text-foreground/70">Промышленные модули с гарантией качества</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group hover:animate-glow-pulse"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                    {product.power}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/70">Мощность:</span>
                      <span className="font-semibold">{product.power}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/70">Напряжение:</span>
                      <span className="font-semibold">{product.voltage}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/70">Ток:</span>
                      <span className="font-semibold">{product.current}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground/70">КПД:</span>
                      <span className="font-semibold text-secondary">{product.efficiency}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" onClick={() => scrollToSection('contacts')}>
                    <Icon name="MessageSquare" size={18} className="mr-2" />
                    Запросить КП
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Свяжитесь с нами</h2>
            <p className="text-xl text-foreground/70">Ответим на все вопросы по продукции</p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea 
                  placeholder="Опишите ваши требования к оборудованию"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить запрос
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={20} className="text-primary" />
                <span>info@vzm-systems.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={20} className="text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span>Москва, ул. Промышленная, д. 10</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-foreground/60">
          <p>© 2024 ВЗМ Системы. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
