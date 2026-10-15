import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { WorkshopPhoto } from "@/components/site/WorkshopPhoto";
import { CtaBanner } from "@/components/site/CtaBanner";
import { services, WHATSAPP_URL } from "@/lib/rtx";
import { seo,servicesSchemas } from "@/lib/seo";
export const Route=createFileRoute("/servicos/")({head:()=>seo({path:"/servicos",title:"Serviços RTX | Limpeza Pós-Obra, Manutenção e Portaria",description:"Conheça os serviços da RTX Construtora: limpeza pós-obra, manutenção, conservação de imóveis, portaria e vistoria com checklist.",schemas:servicesSchemas}),component:Page});
function Page(){return <SiteShell><PageHero eyebrow="Nossos serviços" title="Mais do que construir, cuidamos de cada detalhe." subtitle="Soluções para manter seu imóvel limpo, organizado e bem cuidado." image="/img/rtx-hero-1920.webp" breadcrumb={[{label:"Início",to:"/"},{label:"Serviços"}]}/><section className="section"><div className="container-x space-y-20">{services.map((s,i)=><article key={s.title} className="grid items-center gap-10 lg:grid-cols-2"><WorkshopPhoto photo={s.photo} alt={s.title} className={i%2?"lg:order-2":""}/><div><span className="text-xs font-semibold text-brand">0{i+1}</span><h2 className="mt-4 text-3xl sm:text-4xl">{s.title}</h2><p className="mt-5 text-sm leading-7 text-graphite">{s.description}</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{s.applications.map(a=><li key={a} className="flex gap-2 text-sm"><Check className="h-4 w-4 shrink-0 text-brand"/>{a}</li>)}</ul><Button asChild className="btn-base btn-primary mt-7"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle/>Solicitar orçamento<ArrowRight/></a></Button></div></article>)}</div></section><CtaBanner/></SiteShell>}
