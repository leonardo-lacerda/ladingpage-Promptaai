import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  highlight?: string;
};

type Insight = {
  title: string;
  description: string;
};

type RelatedLink = {
  label: string;
  href: string;
};

type CTA = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

interface ArticleLayoutProps {
  canonical: string;
  metaTitle: string;
  metaDescription: string;
  jsonLd: Record<string, unknown>;
  kicker?: string;
  title: string;
  subtitle: string;
  readingTime: string;
  updatedAt: string;
  tags: string[];
  intro: string;
  keyTakeaways: string[];
  sections: Section[];
  insights?: Insight[];
  checklist?: string[];
  relatedLinks?: RelatedLink[];
  cta: CTA;
}

const ArticleLayout = ({
  canonical,
  metaTitle,
  metaDescription,
  jsonLd,
  kicker,
  title,
  subtitle,
  readingTime,
  updatedAt,
  tags,
  intro,
  keyTakeaways,
  sections,
  insights,
  checklist,
  relatedLinks,
  cta,
}: ArticleLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 pt-24 pb-16">
        <section className="rounded-3xl bg-gradient-to-br from-primary/10 via-surface to-background border border-primary/20 p-8 shadow-2xl max-w-5xl mx-auto">
          {kicker && <span className="text-sm font-semibold uppercase tracking-wide text-primary">{kicker}</span>}
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">{title}</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full border border-border">{readingTime}</span>
            <span className="px-3 py-1 rounded-full border border-border">Atualizado em {updatedAt}</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 text-lg text-muted-foreground">
            <p>{intro}</p>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-surface shadow-lg">
            <h3 className="text-base font-semibold text-foreground">Resumo rápido</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {keyTakeaways.map((takeaway, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {insights && insights.length > 0 && (
          <section className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              {insights.map((insight) => (
                <div key={insight.title} className="p-6 rounded-2xl border border-border bg-surface shadow-md">
                  <h4 className="font-semibold text-foreground">{insight.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{insight.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 rounded-2xl border border-border bg-background/60 p-6">
          <h3 className="text-lg font-semibold text-foreground">O que você vai ver</h3>
          <ol className="mt-4 space-y-3 text-muted-foreground text-sm">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs">
                    {String(index + 1)}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="rounded-3xl border border-border bg-surface/70 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              {section.highlight && <p className="mt-2 text-sm text-primary font-medium">{section.highlight}</p>}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {checklist && checklist.length > 0 && (
          <section className="mt-12 rounded-3xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-lg font-semibold text-primary">Checklist</h3>
            <ul className="mt-4 space-y-2 text-sm text-primary/80">
              {checklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-8">
          <h3 className="text-2xl font-semibold text-foreground">{cta.title}</h3>
          <p className="mt-2 text-muted-foreground max-w-3xl">{cta.description}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={cta.primaryHref}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition"
            >
              {cta.primaryLabel}
            </a>
            {cta.secondaryHref && cta.secondaryLabel && (
              <a
                href={cta.secondaryHref}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition"
              >
                {cta.secondaryLabel}
              </a>
            )}
          </div>
        </section>

        {relatedLinks && relatedLinks.length > 0 && (
          <section className="mt-12">
            <h3 className="text-base font-semibold text-muted-foreground">Leia também</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              {relatedLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-primary hover:underline text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ArticleLayout;
