import { PHONE_TEL, services, ADDRESS } from "./rtx";
// Set only once the RTX production domain is confirmed; never reuse the former brand's URL.
export const SITE_URL = import.meta.env.VITE_PUBLIC_SITE_URL || "";
type Crumb = { name: string; path: string };
export function seo(o: { path: string; title: string; description: string; crumbs?: Crumb[]; schemas?: object[] }) {
 const url=SITE_URL ? SITE_URL+o.path : undefined;
 return {meta:[{title:o.title},{name:"description",content:o.description},{property:"og:title",content:o.title},{property:"og:description",content:o.description},{property:"og:type",content:"website"},{property:"og:locale",content:"pt_BR"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:o.title},{name:"twitter:description",content:o.description},...(url?[{property:"og:url",content:url}]:[])],links:url?[{rel:"canonical",href:url}]:[],scripts:(o.schemas||[]).map(s=>({type:"application/ld+json",children:JSON.stringify(s)}))};
}
export const organizationSchema={"@context":"https://schema.org","@type":"Organization",name:"RTX Construtora",description:"Engenharia e Construção — prestação de serviços na construção civil há mais de 15 anos.",telephone:PHONE_TEL,...(SITE_URL?{url:SITE_URL}:{})};
export const localBusinessSchema={"@context":"https://schema.org","@type":"LocalBusiness",name:"RTX Construtora",telephone:PHONE_TEL,description:"Limpeza pós-obra, manutenção, conservação de imóveis, portaria e vistorias com checklist.",address:{"@type":"PostalAddress",streetAddress:"Av. Dr. Paulo de Moraes, 555, sala 12",addressLocality:"Piracicaba",addressRegion:"SP",postalCode:"13409-136",addressCountry:"BR"},...(SITE_URL?{url:SITE_URL}:{})};
export const servicesSchemas=services.map(s=>({"@context":"https://schema.org","@type":"Service",name:s.title,description:s.description,provider:{"@type":"Organization",name:"RTX Construtora"}}));
export const faqs=[{q:"Quais serviços a RTX Construtora oferece?",a:"Limpeza pós-obra, manutenção, conservação de imóveis, portaria e vistorias com checklist."},{q:"Como solicitar um orçamento?",a:"Fale com a RTX pelo WhatsApp (19) 99653-6331 e informe o serviço, a localização e as necessidades do seu imóvel."},{q:"Onde fica a RTX Construtora?",a:ADDRESS}];
export const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))};
