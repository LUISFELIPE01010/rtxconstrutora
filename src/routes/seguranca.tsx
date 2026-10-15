import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/CtaBanner";
import { seo } from "@/lib/seo";
export const Route=createFileRoute("/seguranca")({head:()=>seo({path:"/seguranca",title:"Qualidade e Organização | RTX Construtora",description:"Cuidado com os imóveis, organização e atenção aos detalhes nos serviços da RTX Construtora."}),component:Page});
function Page(){return <SiteShell><PageHero eyebrow="Nosso compromisso" title="Qualidade, cuidado e organização." image="/img/rtx-inspection-1200.webp"/><section className="section"><div className="container-x grid gap-10 md:grid-cols-3">{[[ShieldCheck,"Responsabilidade","Cuidado com o patrimônio e com os ambientes."],[ClipboardCheck,"Organização","Vistorias com checklist e atenção a cada etapa."],[Sparkles,"Qualidade","Capricho nos serviços e nos acabamentos."]].map(([Icon,t,d])=>{const I=Icon as typeof ShieldCheck;return <div key={String(t)}><I className="h-10 w-10 text-brand"/><h2 className="mt-5 text-2xl">{String(t)}</h2><p className="mt-4 text-sm leading-7 text-graphite">{String(d)}</p></div>})}</div></section><CtaBanner/></SiteShell>}
