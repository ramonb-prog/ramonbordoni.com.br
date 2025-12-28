

import React, { useRef, useEffect, useState, ReactNode } from 'react';
import { CTAButton } from './components/CTAButton';
import { CheckIcon } from './components/icons/CheckIcon';
import { FaqItem } from './components/FaqItem';

// A simple hook for fade-in animations
const useOnScreen = (options: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};


const AnimatedSection: React.FC<{children: ReactNode; className?: string}> = ({ children, className }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    
    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className || ''}`}
        >
            {children}
        </div>
    );
};

// FIX: Add `style` prop to Section component to allow passing inline styles.
const Section: React.FC<{children: ReactNode, className?: string, id?: string, style?: React.CSSProperties}> = ({ children, className, id, style }) => {
    return (
        <section id={id} className={`py-16 sm:py-20 md:py-24 ${className || ''}`} style={style}>
            <div className="container mx-auto px-6 max-w-4xl">
                {children}
            </div>
        </section>
    );
}

const SectionTitle: React.FC<{children: ReactNode}> = ({ children }) => {
    return <h2 className="font-serif text-3xl md:text-4xl text-center text-teal-dark font-bold">{children}</h2>;
}


export default function App() {
  const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Tenho%20interesse%20na%20Consultoria%20X-Press%20e%20gostaria%20de%20saber%20mais.";

  const faqData = [
    {
      question: "“Quero um gestor de tráfego. Você faz isso?”",
      answer: (
        <>
          <p>Sim! Mas antes de colocar dinheiro em anúncios, é importante ter clareza sobre o que comunicar, pra quem e com qual objetivo. É por isso que recomendo começar pela Consultoria X-Press — ela funciona como um diagnóstico estratégico, ideal pra quem ainda não tem processos claros entre marketing e vendas. Depois dela, posso sim atuar como gestor de tráfego ou coordenar a execução completa, se fizer sentido pro seu caso.</p>
          <p>👉 Me chama no WhatsApp que te explico qual caminho é melhor pra você.</p>
        </>
      ),
    },
    {
      question: "“A Consultoria X-Press é tipo um plano de negócios?”",
      answer: (
        <>
          <p>Não. Ela é muito mais prática e direta. O que você vai receber é um plano de ação estratégico e aplicável, não um documento de 20 páginas cheio de teoria. Eu realmente mergulho no seu negócio, pesquiso o mercado, analiso seu posicionamento e valido algumas hipóteses pra entregar um direcionamento com consistência. Mas tudo de forma objetiva, personalizada e voltada pra gerar resultado rápido.</p>
        </>
      ),
    },
    {
      question: "“É uma consultoria em grupo?”",
      answer: (
        <>
         <p>Não, é individual e personalizada. A consultoria é feita 1 a 1, comigo, em um formato enxuto e direto. Você não vai cair em um grupo genérico, nem receber respostas automáticas. É uma conversa estratégica pra entender onde o seu negócio está travando e o que precisa mudar.</p>
        </>
      )
    },
    {
      question: "“O que exatamente eu recebo?”",
      answer: (
        <>
         <p>Você recebe:</p>
         <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Um diagnóstico personalizado do seu marketing e processo comercial;</li>
            <li>Um plano de ação com recomendações claras e prioridades de curto prazo;</li>
            <li>Uma call ao vivo comigo pra apresentar tudo, tirar dúvidas e alinhar próximos passos.</li>
         </ul>
         <p className="mt-4">É uma consultoria rápida, mas com intensidade. Eu realmente coloco energia pra entender o seu negócio e te devolver um plano sólido.</p>
        </>
      )
    },
    {
        question: "“Qual o prazo de entrega?”",
        answer: <p>Entre 3 e 5 dias úteis após o preenchimento do briefing. Nesse período, eu faço a análise, crio o plano e agendamos a call pra apresentar tudo.</p>
    },
    {
        question: "“E se eu quiser te contratar pra executar depois?”",
        answer: (
            <>
                <p>Perfeito — é o caminho ideal. A X-Press é justamente o primeiro passo antes da execução. Depois que você tiver o plano validado, posso assumir o tráfego pago, automações, funil, CRM, Google Meu Negócio, gestão de influenciadores ou o que fizer mais sentido.</p>
                <p>A ideia é simples: primeiro, clareza. Depois, ação.</p>
            </>
        )
    },
    {
        question: "“Por que a Consultoria X-Press custa só R$97?”",
        answer: <p>Porque é o valor de lançamento e validação do formato. Normalmente, uma consultoria personalizada desse tipo custaria R$247 ou mais, mas decidi liberar um valor simbólico por tempo limitado. É uma forma de você testar a metodologia, ganhar visão de negócio e sair com um plano pronto — gastando pouco e com orientação de quem já vive o marketing na prática.</p>
    },
    {
        question: "“Você trabalha só com empresas pequenas?”",
        answer: <p>Não. Eu já atendi desde negócios locais e autônomos até empresas que faturam mais de 1 milhão por mês. O ponto em comum entre todos é o mesmo: falta de clareza sobre o que fazer pra vender mais. E é exatamente isso que a Consultoria X-Press resolve.</p>
    },
    {
        question: "“Sou iniciante. Isso serve pra mim?”",
        answer: <p>Serve — e talvez seja o melhor ponto de partida. Se você está começando e quer entender como atrair, converter e fidelizar clientes, a consultoria vai te dar o mapa. Você não precisa de uma agência cara agora. Precisa de direção certa, e é isso que a X-Press entrega.</p>
    },
    {
        question: "“Vou começar um negócio do zero agora. Você pode me ajudar?”",
        answer: (
            <>
                <p>Sim! Inclusive, a X-Press é o caminho mais seguro para quem está começando. O maior erro de quem tira um projeto do papel é gastar energia e verba nos canais errados. Na consultoria, eu vou te entregar um plano de ação prático para que seu investimento inicial — seja ele pequeno ou robusto — seja direcionado para onde traz retorno real. Vamos estruturar sua comunicação e definir os canais de venda que fazem mais sentido para o seu cenário atual.</p>
                <p>O objetivo aqui não é "gastar pouco", mas sim investir com inteligência para que você não precise contar com a sorte nas suas primeiras vendas.</p>
            </>
        )
    },
  ];

  const offerChecklist = [
    "Direção estratégica de marketing e vendas no digital",
    "Plano de ação prático em PDF",
    "Apresentação do plano de ação ao vivo",
    "Gravação da apresentação",
    "Tira dúvidas",
    "Direção pontual de ações de marketing",
  ];


  return (
    <div className="bg-smoke">
      <main>
        {/* HERO SECTION */}
        <header className="bg-gradient-to-b from-teal-primary/5 to-smoke">
            <Section className="min-h-screen flex flex-col justify-center">
                <AnimatedSection className="w-full text-center">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-graphite leading-tight">
                        Antes de investir em tráfego, site ou agência…
                    </h1>
                    <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-teal-primary mt-4">
                        você precisa decidir a estratégia certa.
                    </p>
                </AnimatedSection>
                
                <AnimatedSection className="w-full mt-12 md:mt-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div className="text-center lg:text-left">
                            <p className="text-lg md:text-xl text-slate-600">
                                Vamos ser honestos: o problema da maioria dos negócios não é falta de marketing. É falta de clareza sobre <strong className="text-graphite">onde investir, o que priorizar e o que parar de fazer.</strong>
                            </p>
                            <p className="mt-8 font-semibold text-lg text-graphite">
                                👉 Se você sente que seu negócio tem potencial, mas o marketing ainda parece confuso, desalinhado ou improdutivo, essa página é pra você.
                            </p>
                            <div className="mt-10 flex justify-center lg:justify-start">
                                <CTAButton href="#oferta">Quero entender o que está travando meu marketing</CTAButton>
                            </div>
                        </div>
                        <div className="flex justify-center order-first lg:order-last">
                            <img src="https://picsum.photos/seed/ramonbordoni/500/500" alt="Ramon Bordoni" className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white"/>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>
        </header>

        {/* BLOCO 2 – IDENTIFICAÇÃO (dor real) */}
        <Section className="bg-white">
          <AnimatedSection>
            <SectionTitle>Talvez você se reconheça em pelo menos um desses cenários:</SectionTitle>
            <div className="mt-12 grid md:grid-cols-2 gap-6 text-slate-700">
                <div className="bg-smoke p-6 rounded-lg shadow-sm">– Já pensou em contratar um gestor de tráfego, mas não sabe se é a hora certa</div>
                <div className="bg-smoke p-6 rounded-lg shadow-sm">– Já investiu em anúncios, mas sem retorno claro</div>
                <div className="bg-smoke p-6 rounded-lg shadow-sm">– Já fez site, Instagram, posts, campanhas… tudo meio desconectado</div>
                <div className="bg-smoke p-6 rounded-lg shadow-sm">– Recebe propostas diferentes, cada uma puxando para um lado</div>
            </div>
            <p className="text-center mt-8 text-lg bg-teal-primary/10 text-teal-dark font-medium py-4 px-6 rounded-lg">Ou simplesmente sente que falta uma visão clara do todo</p>
            <div className="mt-12 text-center max-w-3xl mx-auto">
                <p className="text-xl font-semibold text-graphite">E o mais frustrante:</p>
                <p className="mt-4 text-lg text-slate-600">Você sabe que seu produto ou serviço é bom. Sabe que existe mercado. Mas vender de forma constante ainda parece imprevisível.</p>
                <p className="mt-6 text-xl font-bold text-teal-primary border-t border-b border-teal-primary/20 py-4">O problema raramente é esforço. Na maioria das vezes, é falta de direção estratégica.</p>
            </div>
          </AnimatedSection>
        </Section>
        
        {/* BLOCO 3 – PROVOCAÇÃO / VIRADA DE CONSCIÊNCIA */}
        <Section className="bg-graphite text-white bg-cover bg-center relative" style={{ backgroundImage: "url('https://picsum.photos/seed/chaos-to-order/1920/1080')"}}>
          <div className="absolute inset-0 bg-graphite/80 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <AnimatedSection>
              <div className="text-center">
                  <p className="text-lg text-slate-300">Pouca gente fala isso, mas é a verdade:</p>
                  <h2 className="font-serif text-4xl md:text-5xl mt-4 text-white">Marketing não começa com anúncios. <br/><span className="text-amber-400">Começa com decisão.</span></h2>
                  <p className="mt-8 max-w-2xl mx-auto text-xl text-slate-200">Empresas que crescem não testam tudo. Elas priorizam certo.</p>
              </div>
              <div className="mt-12 max-w-2xl mx-auto bg-slate-800/80 p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-white">Sabem:</h3>
                  <ul className="mt-6 space-y-4 text-lg text-slate-300">
                      <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">●</span> qual canal faz sentido agora</li>
                      <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">●</span> qual oferta precisa ser ajustada</li>
                      <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">●</span> qual etapa do funil está travando</li>
                      <li className="flex items-start"><span className="text-amber-400 mr-3 mt-1">●</span> e onde <span className="font-bold uppercase mx-1">não</span> vale investir neste momento</li>
                  </ul>
              </div>
              <p className="mt-10 text-center text-2xl font-serif text-white italic">Quem pula essa etapa, executa mais… e cresce menos.</p>
            </AnimatedSection>
          </div>
        </Section>

        {/* BLOCO 4 – CONEXÃO COM A BUSCA DO LEAD */}
        <Section className="bg-white">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <SectionTitle>Se você chegou até aqui procurando por:</SectionTitle>
              <div className="flex flex-wrap justify-center gap-4 mt-8 text-teal-dark">
                <span className="bg-teal-primary/10 py-2 px-4 rounded-full font-medium">gestor de tráfego</span>
                <span className="bg-teal-primary/10 py-2 px-4 rounded-full font-medium">agência de marketing</span>
                <span className="bg-teal-primary/10 py-2 px-4 rounded-full font-medium">anúncios no Google ou Instagram</span>
              </div>
              <p className="mt-8 text-xl text-slate-700">Isso faz sentido.</p>
              <p className="mt-6 text-lg text-slate-600">Mas antes de colocar alguém para executar, existe uma pergunta que quase ninguém responde direito:</p>
              <blockquote className="mt-8 border-l-4 border-brand-amber bg-amber-500/10 p-6 text-xl md:text-2xl font-serif text-graphite text-left rounded-r-lg">
                “O que exatamente precisa ser feito no meu negócio para gerar resultado?”
              </blockquote>
              <p className="mt-8 text-lg text-slate-600">Sem essa resposta, tráfego vira aposta. Site vira vitrine vazia. Conteúdo vira esforço solto.</p>
            </div>
          </AnimatedSection>
        </Section>

        {/* BLOCO 5 – APRESENTAÇÃO DA SOLUÇÃO (SEM VENDER O PRODUTO AINDA) */}
        <Section className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/blueprint/1920/1080')"}}>
            <div className="absolute inset-0 bg-smoke/90 backdrop-blur-sm"></div>
            <div className="relative z-10">
                <AnimatedSection>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="font-semibold text-teal-primary">É por isso que, antes de qualquer execução, eu trabalho com um processo simples:</p>
                        <div className="mt-8 space-y-6">
                            <div className="flex items-start"><span className="font-serif text-4xl text-teal-primary/30 mr-4">1.</span><p className="text-lg mt-1 text-graphite">Entender o negócio de verdade</p></div>
                            <div className="flex items-start"><span className="font-serif text-4xl text-teal-primary/30 mr-4">2.</span><p className="text-lg mt-1 text-graphite">Analisar o que já foi feito (e o que não funcionou)</p></div>
                            <div className="flex items-start"><span className="font-serif text-4xl text-teal-primary/30 mr-4">3.</span><p className="text-lg mt-1 text-graphite">Mapear oportunidades reais de crescimento</p></div>
                            <div className="flex items-start"><span className="font-serif text-4xl text-teal-primary/30 mr-4">4.</span><p className="text-lg mt-1 text-graphite">Definir prioridades claras</p></div>
                            <div className="flex items-start"><span className="font-serif text-4xl text-teal-primary/30 mr-4">5.</span><p className="text-lg mt-1 text-graphite">Transformar tudo isso em um plano aplicável</p></div>
                        </div>
                        <div className="mt-8 border-t-2 border-teal-primary/10 pt-6 space-y-3 text-slate-500 italic">
                            <p>Sem teoria desnecessária.</p>
                            <p>Sem achismos.</p>
                            <p>Sem fórmulas prontas.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://picsum.photos/seed/strategy/800/600" alt="Estratégia e Análise" className="rounded-lg shadow-xl" />
                    </div>
                    </div>
                </AnimatedSection>
            </div>
        </Section>

        {/* BLOCO 6 – AGORA SIM: O PRODUTO */}
        <Section className="bg-teal-dark bg-gradient-to-br from-teal-dark to-teal-primary text-white">
            <AnimatedSection>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl">
                        Esse processo se chama
                        <br />
                        <span className="bg-amber-400 text-graphite px-4 py-1 mt-2 inline-block rounded-md shadow-lg">Consultoria X-Press.</span>
                    </h2>
                    <p className="mt-6 text-xl text-teal-100">Uma consultoria estratégica, direta e prática, criada para quem precisa clareza antes de investir pesado em marketing.</p>
                    <div className="mt-10 text-lg space-y-2 text-teal-200">
                        <p>Não é um curso.</p>
                        <p>Não é uma mentoria longa.</p>
                        <p>Não é um plano de negócios de 30 páginas.</p>
                    </div>
                    <p className="mt-8 text-2xl font-bold bg-white text-teal-dark py-4 px-6 rounded-lg shadow-2xl">É um diagnóstico + plano de ação, feito sob medida para o seu negócio.</p>
                </div>
            </AnimatedSection>
        </Section>
        
        {/* BLOCO 7 – COMO FUNCIONA (3 ETAPAS) */}
        <Section className="bg-white">
            <AnimatedSection>
                <SectionTitle>Como Funciona</SectionTitle>
                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    <div className="relative border border-slate-200 rounded-lg p-6 pt-10 text-center shadow-sm h-full bg-white">
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 font-serif text-8xl text-teal-primary/10 font-bold z-0">1</div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl text-graphite">Diagnóstico Estratégico</h3>
                            <p className="mt-4 text-slate-600">Você responde a um briefing simples. Eu analiso seu negócio, mercado, posicionamento e histórico de ações.</p>
                            <p className="mt-4 font-semibold text-graphite">Aqui o foco é entender:</p>
                            <ul className="mt-2 space-y-1 text-slate-600 text-sm">
                                <li>● onde está o gargalo</li>
                                <li>● o que está desalinhado</li>
                                <li>● e onde existe potencial real de crescimento</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative border border-slate-200 rounded-lg p-6 pt-10 text-center shadow-sm h-full bg-white">
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 font-serif text-8xl text-teal-primary/10 font-bold z-0">2</div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl text-graphite">Plano de Ação Personalizado</h3>
                            <p className="mt-4 text-slate-600">Com base no diagnóstico, eu construo um plano claro e objetivo, normalmente para os próximos 30 a 90 dias.</p>
                            <p className="mt-4 font-semibold text-graphite">Definindo:</p>
                            <ul className="mt-2 space-y-1 text-slate-600 text-sm">
                               <li>● funil mais adequado</li>
                               <li>● canais prioritários</li>
                               <li>● ajustes de oferta e posicionamento</li>
                               <li>● próximos passos estratégicos</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative border border-slate-200 rounded-lg p-6 pt-10 text-center shadow-sm h-full bg-white">
                         <div className="absolute -top-7 left-1/2 -translate-x-1/2 font-serif text-8xl text-teal-primary/10 font-bold z-0">3</div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl text-graphite">Call de Apresentação (1:1)</h3>
                            <p className="mt-4 text-slate-600">Marcamos uma call individual para eu apresentar o plano, explicar o raciocínio e tirar dúvidas.</p>
                            <p className="mt-4 font-semibold text-graphite">O objetivo não é te convencer de nada. É te deixar seguro para decidir os próximos passos.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </Section>

        {/* BLOCO 8 – O QUE VOCÊ SAI LEVANDO */}
        <Section className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/clarity-path/1920/1080')"}}>
            <div className="absolute inset-0 bg-smoke/80"></div>
            <div className="relative z-10">
                <AnimatedSection>
                    <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <SectionTitle>O que você sai levando</SectionTitle>
                                <p className="mt-6 text-lg text-slate-600 text-center">Ao final da Consultoria X-Press, você terá:</p>
                                <ul className="mt-8 space-y-4 text-lg">
                                   <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Clareza sobre o que está travando suas vendas</li>
                                   <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Um plano de ação prático e priorizado</li>
                                   <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Direção estratégica para marketing e vendas</li>
                                   <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Entendimento do que focar — e do que cortar</li>
                                   <li className="flex items-center"><CheckIcon className="w-6 h-6 mr-3 text-teal-primary" /> Segurança para investir com mais consciência</li>
                                </ul>
                            </div>
                            <div className="bg-teal-primary/10 p-8 rounded-lg text-center">
                                <p className="text-slate-600">Em resumo:</p>
                                <p className="font-serif text-3xl text-teal-dark mt-2">você para de reagir e começa a decidir.</p>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <CTAButton href="#oferta" size="large">QUERO A CONSULTORIA X-PRESS</CTAButton>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </Section>
        
        {/* BLOCO 9 – MUITO IMPORTANTE (FILTRO) */}
        <Section className="bg-white">
            <AnimatedSection>
                <div className="bg-smoke border-l-4 border-brand-amber p-8 rounded-r-lg max-w-3xl mx-auto">
                    <h3 className="font-serif text-2xl text-graphite">Essa consultoria <span className="underline">não</span> é para quem quer apenas rodar anúncios.</h3>
                    <p className="mt-6 text-lg text-slate-700">Ela é para:</p>
                    <ul className="mt-4 space-y-2 text-lg text-graphite list-disc list-inside">
                        <li>empresários</li>
                        <li>decisores</li>
                        <li>pessoas que querem estruturar crescimento</li>
                        <li>e entendem que execução sem estratégia custa caro</li>
                    </ul>
                    <p className="mt-6 text-slate-600 italic">Se você busca alguém só para “apertar botões”, provavelmente não faz sentido começarmos por aqui.</p>
                </div>
            </AnimatedSection>
        </Section>

        {/* BLOCO 10 – AUTORIDADE (SEM EGO) */}
        <Section>
            <AnimatedSection>
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2 flex justify-center">
                        <img src="https://picsum.photos/seed/ramonbordoni-2/500/500" alt="Ramon Bordoni" className="rounded-lg w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl"/>
                    </div>
                    <div className="lg:col-span-3">
                        <h2 className="font-serif text-3xl text-graphite">Sou <span className="text-teal-primary">Ramon Bordoni</span>, estrategista de marketing digital.</h2>
                        <p className="mt-6 text-lg text-slate-600">Já atuei em:</p>
                        <div className="mt-4 flex flex-wrap gap-3 text-slate-700">
                           <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">lançamentos digitais</span>
                           <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">negócios locais</span>
                           <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">B2B</span>
                           <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">SaaS</span>
                           <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">projetos políticos</span>
                           <span className="bg-slate-200 py-1 px-3 rounded-md text-sm">operações com alto investimento</span>
                        </div>
                        <p className="mt-6 text-lg text-slate-600">Hoje, também atuo como estrategista e coordenador de projetos em uma agência de marketing digital, liderando projetos de empresas com diferentes níveis de maturidade.</p>
                        <div className="mt-6 border-t border-teal-primary/20 pt-6">
                          <p className="text-lg text-slate-600">O padrão que sempre se repete é simples: <span className="font-semibold text-graphite">quando existe clareza, a execução flui.</span></p>
                          <p className="mt-4 text-lg text-slate-600">A Consultoria X-Press nasceu para entregar essa clareza — de forma acessível, prática e honesta.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </Section>

        {/* BLOCO 11 – SOBRE IMPLEMENTAÇÃO (PORTA ABERTA) */}
        <Section className="bg-white">
            <AnimatedSection>
                <div className="text-center max-w-2xl mx-auto">
                    <SectionTitle>Sobre a Implementação</SectionTitle>
                    <p className="mt-6 text-lg text-slate-600">Após a consultoria, você decide como executar o plano. Pode ser:</p>
                    <ul className="mt-6 text-lg space-y-3 text-slate-700">
                        <li>● com equipe interna</li>
                        <li>● com fornecedores</li>
                        <li>● ou, se fizer sentido, comigo</li>
                    </ul>
                    <p className="mt-8 font-semibold bg-teal-primary/10 text-teal-dark p-4 rounded-lg">A X-Press não é uma venda disfarçada. É um ponto de partida estratégico.</p>
                </div>
            </AnimatedSection>
        </Section>
        
        {/* BLOCO 12 – OFERTA */}
        <Section id="oferta">
            <AnimatedSection>
                <div className="bg-gradient-to-br from-graphite to-slate-800 text-white p-8 md:p-12 rounded-xl shadow-2xl max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-amber-400">💥 Oferta de Lançamento (por tempo limitado)</h3>
                        <p className="mt-2 text-slate-300">Garanta sua vaga com o valor especial e receba um plano de ação completo:</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <ul className="space-y-3 text-lg text-slate-200">
                            {offerChecklist.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckIcon className="w-6 h-6 mr-3 text-teal-primary flex-shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-slate-900/50 p-8 rounded-lg text-center border border-slate-700">
                            <p className="text-2xl text-slate-400 line-through">De R$247</p>
                            <p className="text-6xl font-bold text-white mt-1">por apenas R$97</p>
                            <div className="mt-8">
                                <CTAButton href={WHATSAPP_LINK} size="large">QUERO A CONSULTORIA X-PRESS</CTAButton>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </Section>
        
        {/* CTA FINAL */}
        <Section className="bg-white">
            <AnimatedSection>
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl text-graphite">Se você quer parar de adivinhar e começar a <span className="text-teal-primary">decidir com estratégia</span>,</h2>
                    <p className="mt-6 text-xl text-slate-600">👇 clique abaixo e fale comigo no WhatsApp:</p>
                    <div className="mt-10">
                        <CTAButton href={WHATSAPP_LINK} size="large">Quero clareza antes de investir em marketing</CTAButton>
                    </div>
                </div>
            </AnimatedSection>
        </Section>

        {/* FAQ */}
        <Section>
            <AnimatedSection>
                <div className="max-w-3xl mx-auto">
                    <SectionTitle>Dúvidas Frequentes sobre a Consultoria X-Press</SectionTitle>
                    <div className="mt-12 space-y-4">
                        {faqData.map((faq, index) => (
                            <FaqItem key={index} question={faq.question}>
                                {faq.answer}
                            </FaqItem>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </Section>
      </main>
      
      <footer className="bg-graphite text-center text-slate-400 py-8">
        <p>&copy; {new Date().getFullYear()} Ramon Bordoni. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Consultoria Estratégica de Marketing Digital</p>
      </footer>
    </div>
  );
}