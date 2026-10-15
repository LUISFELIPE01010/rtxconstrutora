import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { WorkshopPhoto } from "@/components/site/WorkshopPhoto";
import { CtaBanner } from "@/components/site/CtaBanner";
import { projects } from "@/lib/rtx";
import { seo } from "@/lib/seo";
export const Route=createFileRoute("/portfolio")({head:()=>seo({path:"/portfolio",title:"Galeria de Serviços | RTX Construtora",description:"Limpeza pós-obra, manutenção e portaria: conheça os ambientes e as aplicações dos serviços oferecidos pela RTX Construtora."}),component:Page});
function Page(){const [filter,setFilter]=useState("Todos");const shown=filter==="Todos"?projects:projects.filter(p=>p.category===filter);return <SiteShell><PageHero eyebrow="Projetos e serviços" title="Espaços cuidados. Novos começos." subtitle="Conheça as aplicações dos nossos serviços." image="/img/rtx-reception-1200.webp" breadcrumb={[{label:"Início",to:"/"},{label:"Projetos"}]}/><section className="section"><div className="container-x"><div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar galeria">{["Todos","Limpeza pós obra","Manutenção","Portaria"].map(x=><Button key={x} variant={filter===x?"default":"outline"} aria-pressed={filter===x} onClick={()=>setFilter(x)}>{x}</Button>)}</div><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{shown.map(p=><article key={p.title}><WorkshopPhoto photo={p.photo} alt={p.title} sizes="(max-width:767px) calc(100vw - 40px), 30vw"/><div className="pt-5"><span className="text-xs font-semibold text-brand">{p.category}</span><h2 className="mt-3 text-xl">{p.title}</h2><p className="mt-3 text-sm leading-7 text-graphite">{p.description}</p></div></article>)}</div><p className="mt-8 text-xs text-steel">Imagens ilustrativas dos serviços oferecidos, não correspondem a registros de projetos executados.</p></div></section><CtaBanner/></SiteShell>}
