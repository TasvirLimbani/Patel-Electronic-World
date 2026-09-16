"use client";

import { useState } from "react";
import {
  ChevronRight,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Wrench,
  X,
  Zap,
  Car,
  Cpu,
  KeyRound,
  Lightbulb,
} from "lucide-react";

const logoUrl = "/twlogo.png";
const bannerUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G2mPQpHXbbSJBMn4aFcO3zi6qqJxUG.png";
const phone = "+91 95100 48321";
const whatsapp =
  "https://wa.me/919510048321?text=Hello%20Patel%20Electronic%20World";
const address =
  "A-114, Royal Plazza, near Bapa Sitaram Chowk, Laxmibai Nagar Society, Simada Gam, Nana Varachha, Surat, Gujarat 395006";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f7] text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-red-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => goTo("top")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to top"
          >
            <img
              src='/tlogo.png'
              alt="Patel Electronic World logo"
              className="h-12 w-16 object-contain"
            />
            <span>
              <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                Advanced auto electronics
              </span>
              <span className="block text-lg font-black tracking-tight">
                Patel Electronic World
              </span>
            </span>
          </button>
          <div className="hidden items-center gap-8 md:flex">
            <button onClick={() => goTo("services")} className="nav-link">
              Services
            </button>
            <button onClick={() => goTo("about")} className="nav-link">
              About us
            </button>
            <button onClick={() => goTo("contact")} className="nav-link">
              Contact
            </button>
            <a
              href={`tel:${phone.replaceAll(" ", "")}`}
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-950"
            >
              Call now
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-red-100 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => goTo("services")}
                className="nav-link text-left"
              >
                Services
              </button>
              <button
                onClick={() => goTo("about")}
                className="nav-link text-left"
              >
                About us
              </button>
              <button
                onClick={() => goTo("contact")}
                className="nav-link text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="top" className="relative bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(220,38,38,.24),transparent_32%),linear-gradient(135deg,#020617_0%,#111827_60%,#3f1118_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_.95fr] lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-red-300">
              <span className="size-2 rounded-full bg-red-500" /> Car
              electronics & diagnostics
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-7xl">
              Smarter cars.
              <br />
              <span className="text-red-500">Better drives.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">
              Expert ECM, EPS, SMK, BCM repair and advanced vehicle electronics
              for modern cars across Surat.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => goTo("contact")} className="btn-red">
                Book a repair <ChevronRight className="size-4" />
              </button>
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <MessageCircle className="size-4" /> WhatsApp us
              </a>
            </div>
          </div>
          <div className="hero-logo-card relative rounded-[2rem] border border-white/15 bg-black/30 p-3 shadow-2xl backdrop-blur-sm">
            <div className="hero-logo-ring pointer-events-none absolute inset-0" aria-hidden="true" />

            {/* Center Logo */}
            <div className="relative z-10 flex w-full items-center justify-center">
              <img
                src={logoUrl}
                alt="Patel Electronic World automotive logo"
                className="mx-auto block h-96 w-96 object-contain"
              />
            </div>

            {/* Info Cards */}
            <div className="relative z-10 grid grid-cols-2 gap-3 p-3">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-black text-red-400">
                  Multi-brand
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Diagnostics
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-black text-red-400">
                  Expert
                </p>
                <p className="mt-1 text-xs text-slate-300">
                  Technicians
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-5 sm:px-8 md:grid-cols-4">
          <Stat value="10+" label="Years experience" />
          <Stat value="1000+" label="Vehicles serviced" />
          <Stat value="24/7" label="Support" />
          <Stat value="5 🌟" label="Customer care" />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow">What we repair</p>
          <h2 className="section-title">
            Complete vehicle electronics.
            <br />
            <span className="text-red-600">One trusted workshop.</span>
          </h2>
          <p className="section-copy">
            From warning lights to key programming, our specialists use modern
            tools and practical experience to diagnose and repair your vehicle
            right.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Service
            icon={<Cpu />}
            title="ECM repair"
            text="Engine control module diagnostics, repair and programming."
          />
          <Service
            icon={<Zap />}
            title="EPS repair"
            text="Electric power steering module repair and calibration."
          />
          <Service
            icon={<KeyRound />}
            title="SMK & BCM"
            text="Smart key, immobilizer and body control module solutions."
          />
          <Service
            icon={<Car />}
            title="Many more"
            text="ADAS, airbags, clusters, audio, sensors and coding."
          />
        </div>
      </section>

      <section id="about" className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow text-red-400">Why choose us</p>
            <h2 className="section-title text-white">
              The right fix starts with{" "}
              <span className="text-red-500">the right diagnosis.</span>
            </h2>
            <p className="section-copy text-slate-300">
              Patel Electronic World brings specialist knowledge, professional
              tools and straight answers to every vehicle electronics problem in
              Nana Varachha, Surat.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <Point icon={<Wrench />} text="Experienced technicians" />
              <Point icon={<Cpu />} text="ECM, EPS, SMK & BCM expertise" />
              <Point icon={<Shield />} text="Honest recommendations" />
              <Point icon={<Lightbulb />} text="Modern repair solutions" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06] shadow-2xl shadow-black/30">
            <img
              src="/patel-workshop.png"
              alt="Technician diagnosing an automotive electronics module in a workshop"
              className="h-full min-h-80 w-full object-cover"
            />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-slate-950/80 p-4 backdrop-blur">
              <p className="text-sm font-black text-white">
                Precision work. Clear communication.
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-300">
                From warning lights to key programming, we repair the system
                behind the symptom.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Visit our workshop</p>
            <h2 className="section-title">
              Get your car
              <br />
              <span className="text-red-600">back on track.</span>
            </h2>
            <p className="section-copy">
              Call us for a diagnosis, ask about a repair, or message us on
              WhatsApp before visiting.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ContactCard
              icon={<MapPin />}
              title="Find us"
              text={address}
              link="Get directions"
              href={`https://maps.app.goo.gl/GQtnzEjx7u727s149`}
            />
            <ContactCard
              icon={<Phone />}
              title="Call or WhatsApp"
              text={phone}
              link="Speak to our team"
              href={`tel:${phone.replaceAll(" ", "")}`}
            />
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-6 rounded-2xl bg-red-600 px-7 py-8 text-white sm:flex-row sm:items-center sm:px-10">
          <div>
            <p className="text-2xl font-black tracking-tight">
              Need a repair today?
            </p>
            <p className="mt-1 text-sm font-medium text-red-100">
              ECM, EPS, SMK, BCM and much more.
            </p>
          </div>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-red-600 transition hover:bg-slate-950 hover:text-white"
          >
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-bold text-slate-950">
            Patel Electronic World<span className="text-red-600">.</span>
          </p>
          <p>Advanced auto electronics & diagnostics</p>
          <p>© {new Date().getFullYear()} Patel Electronic World</p>
        </div>
      </footer>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-3 py-8 text-center sm:px-6">
      <p className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
    </div>
  );
}
function Service({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-red-400 hover:shadow-xl hover:shadow-red-100">
      <div className="mb-12 flex size-12 items-center justify-center rounded-xl bg-red-100 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{text}</p>
    </article>
  );
}
function Point({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-red-500">{icon}</span>
      <span className="text-sm font-semibold text-slate-200">{text}</span>
    </div>
  );
}
function ContactCard({
  icon,
  title,
  text,
  link,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  link: string;
  href: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex size-10 items-center justify-center rounded-lg bg-red-100 text-red-600">
        {icon}
      </div>
      <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </p>
      <p className="mt-2 text-sm font-bold leading-6 text-slate-950">{text}</p>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-red-600 hover:text-red-800"
      >
        {link} <ChevronRight className="size-3.5" />
      </a>
    </div>
  );
}
function Shield({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 3 4.5 6v5c0 4.7 3.2 8.6 7.5 10 4.3-1.4 7.5-5.3 7.5-10V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

const styles = `@keyframes logoFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-10px) rotate(.5deg)}}@keyframes ringPulse{0%,100%{transform:scale(.92);opacity:.35}50%{transform:scale(1.08);opacity:.8}}.hero-logo-card{isolation:isolate}.hero-logo{animation:logoFloat 5s ease-in-out infinite;filter:drop-shadow(0 18px 20px rgb(0 0 0 / .35))}.hero-logo-ring{position:absolute;inset:12% 8% auto;height:42%;border:2px solid rgb(248 113 113 / .5);border-radius:50%;filter:blur(1px);animation:ringPulse 4s ease-in-out infinite;pointer-events:none}.nav-link{font-size:.875rem;font-weight:700;color:rgb(71 85 105);transition:color .2s}.nav-link:hover{color:rgb(220 38 38)}.btn-red{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border-radius:9999px;background:rgb(220 38 38);padding:.85rem 1.4rem;font-size:.875rem;font-weight:800;color:white;transition:all .2s}.btn-red:hover{background:white;color:rgb(15 23 42);transform:translateY(-2px)}.btn-outline{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border-radius:9999px;border:1px solid rgb(148 163 184 / .6);padding:.85rem 1.4rem;font-size:.875rem;font-weight:800;color:white;transition:all .2s}.btn-outline:hover{border-color:rgb(248 113 113);color:rgb(248 113 113)}.eyebrow{margin-bottom:1rem;font-size:.75rem;font-weight:900;text-transform:uppercase;letter-spacing:.2em;color:rgb(220 38 38)}.section-title{font-size:clamp(2.5rem,5vw,4rem);font-weight:900;line-height:.98;letter-spacing:-.05em}.section-copy{margin-top:1.5rem;max-width:40rem;font-size:1.125rem;line-height:1.75;color:rgb(71 85 105)}`;
if (
  typeof document !== "undefined" &&
  !document.getElementById("portfolio-styles")
) {
  const style = document.createElement("style");
  style.id = "portfolio-styles";
  style.textContent = styles;
  document.head.appendChild(style);
}
