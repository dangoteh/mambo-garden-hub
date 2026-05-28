import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sprout, ShoppingBasket, Truck, ShieldCheck, Star, Quote, Store, Building2, Users } from "lucide-react";
import heroImg from "@/assets/hero-farm.jpg";
import farmerImg from "@/assets/farmer.jpg";
import produceImg from "@/assets/produce.jpg";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "MAMBONAMI — Fresh from Farm to Table" },
      { name: "description", content: "Connecting Kenyan farmers directly to your kitchen. Fair prices, fresh produce, doorstep delivery." },
      { property: "og:title", content: "MAMBONAMI — Fresh from Farm to Table" },
      { property: "og:description", content: "Buy directly from local farmers. Fresh produce delivered to your door." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" className="w-full h-full object-cover" width={1600} height={1100} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/30" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-primary-foreground">
          <div className="max-w-2xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 backdrop-blur px-4 py-1.5 text-xs font-medium text-secondary mb-6 border border-secondary/30">
              <Sprout className="w-3.5 h-3.5 animate-float" /> Farmers • Retailers • Consumers
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-black leading-[1.05] mb-6">
              From <span className="text-secondary italic">farm</span> to retailers, restaurants &amp; homes.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-10 max-w-xl">
              MAMBONAMI is Kenya's direct-trade marketplace — connecting smallholder farmers with retailers, hotels, restaurants, and families. Fair prices, transparent sourcing, doorstep delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-7 py-3.5 font-semibold hover:bg-secondary/90 transition shadow-glow hover:scale-105 duration-300">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 px-7 py-3.5 font-semibold hover:bg-primary-foreground/20 transition">
                How it works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retailer / B2B band */}
      <section className="bg-primary-dark text-primary-foreground overflow-hidden">
        <div className="flex gap-12 py-4 animate-marquee whitespace-nowrap text-sm uppercase tracking-[0.25em] font-semibold text-secondary">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 shrink-0">
              <span>🥬 Fresh Daily</span><span>🏪 Trusted by 300+ Retailers</span><span>🍽️ Restaurant Supply</span><span>🚚 Bulk &amp; Wholesale</span><span>🌍 47 Counties</span><span>💳 M-Pesa Escrow</span>
            </div>
          ))}
        </div>
      </section>


      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { n: "2,500+", l: "Farmers onboarded" },
            { n: "15K+", l: "Happy customers" },
            { n: "47", l: "Counties served" },
            { n: "24h", l: "Avg. delivery time" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">A market built for everyone</h2>
            <p className="text-muted-foreground text-lg">No middlemen. No markups. Just fair value moving from soil to supper.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Sprout, title: "For Farmers", body: "List harvests, get fair prices, receive secure M-Pesa payments straight to your phone." },
              { Icon: Store, title: "For Retailers", body: "Stock your shelves with consistent, traceable produce. Bulk pricing, scheduled deliveries, invoiced." },
              { Icon: Building2, title: "For Restaurants & Hotels", body: "Reliable wholesale supply for kitchens — chef-grade quality with same-day procurement." },
              { Icon: ShoppingBasket, title: "For Consumers", body: "Browse seasonal produce by location, order in seconds, and pay only when delivered." },
            ].map(({ Icon, title, body }, i) => (
              <div key={title} className="bg-card rounded-2xl p-8 shadow-soft hover-lift border border-border animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Split: Farmer story */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={farmerImg} alt="Smallholder farmer with fresh harvest" loading="lazy" width={1200} height={1400} className="rounded-3xl shadow-glow object-cover w-full aspect-[5/6]" />
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-5 shadow-soft border border-border max-w-xs hidden sm:block">
              <div className="flex gap-1 text-secondary mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-medium">"My income doubled in 3 months."</p>
              <p className="text-xs text-muted-foreground mt-1">— Wanjiku, Nyeri</p>
            </div>
          </div>
          <div>
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Empowering Growers</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">Real farmers. Real impact.</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We work with smallholder cooperatives across Kenya — verifying farms, training on best practices, and ensuring every shilling reaches the people who grew the food.
            </p>
            <ul className="space-y-3">
              {["Verified cooperative membership", "Transparent escrow payments", "Real-time harvest tracking", "Direct buyer relationships"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Produce showcase */}
      <section className="py-24 bg-accent/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Seasonal & Fresh</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">Picked today. On your table tomorrow.</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              From sukuma wiki to sweet mangoes, every order ships within 24 hours of harvest. You'll know exactly which farm grew it, when it was picked, and how it traveled.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark">
              Explore our services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <img src={produceImg} alt="Assortment of fresh Kenyan produce" loading="lazy" width={1400} height={1000} className="rounded-3xl shadow-soft order-1 lg:order-2" />
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <Quote className="w-10 h-10 text-secondary mx-auto mb-6" />
          <p className="font-display text-2xl md:text-3xl font-medium leading-snug">
            "MAMBONAMI changed how my family eats. Fresher food, better prices, and I know I'm supporting farmers directly."
          </p>
          <p className="mt-6 text-muted-foreground">— Achieng, Nairobi</p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-hero rounded-3xl px-8 py-16 md:p-16 text-center text-primary-foreground shadow-glow">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Ready to taste the difference?</h2>
            <p className="text-primary-foreground/85 text-lg max-w-xl mx-auto mb-8">Join thousands experiencing farm-fresh produce, delivered with care.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-8 py-4 font-semibold hover:bg-secondary/90 transition">
              Get Started Today <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
