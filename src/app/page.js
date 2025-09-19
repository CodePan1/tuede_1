import Image from "next/image";

const featuredProducts = [
  {
    name: "Luna Silk Blouse",
    description: "Fluid draping with a soft pearl sheen designed for layering or a solo statement.",
    price: "$128",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Atlas Linen Suit",
    description: "Lightweight tailoring with a modern cut and breathable woven finish for warm evenings.",
    price: "$328",
    image:
      "https://images.unsplash.com/photo-1542293787938-4d2226c6c407?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Solace Ribbed Knit",
    description: "Italian-spun cotton knit with sculpted sleeves and a softly structured silhouette.",
    price: "$168",
    image:
      "https://images.unsplash.com/photo-1529946825183-536afff1e106?auto=format&fit=crop&w=900&q=80",
  },
];

const collections = [
  {
    title: "Everyday Essentials",
    description: "Ease into the season with breathable layers and refined comfort-first staples.",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Sculpted Outerwear",
    description: "Architectural coats and jackets that balance structure, softness, and movement.",
    image:
      "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Evening Editions",
    description: "Pieces cut to catch the light—silks, satins, and tailored statements for after dusk.",
    image:
      "https://images.unsplash.com/photo-1542060748-10c28b62716f?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:px-8 lg:px-0">
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              New arrival
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Draped in confidence, designed for every day.
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Discover Tuede’s curated cloth collection of modern tailoring, effortless knits, and
              evening silhouettes crafted to move with you through every season.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-white/90"
                href="#"
              >
                Shop women&apos;s
              </a>
              <a
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                href="#"
              >
                Shop men&apos;s
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                alt="Model wearing a linen suit from Tuede"
                fill
                priority
                sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 28rem, (min-width: 768px) 60vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-white/5 blur-3xl" />
          </div>
        </section>

        <section>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured styles</h2>
              <p className="mt-2 max-w-2xl text-base text-white/60">
                Each piece is tailored in small batches using conscious materials to elevate the rhythm of your everyday wardrobe.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
              href="#"
            >
              Shop the collection
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.name}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1280px) 20rem, (min-width: 1024px) 18rem, (min-width: 768px) 40vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
                    <p className="mt-2 text-sm text-white/60">{product.description}</p>
                  </div>
                  <span className="text-sm font-semibold text-white/80">{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur lg:col-span-1">
            <h2 className="text-2xl font-semibold tracking-tight">Collections</h2>
            <p className="mt-3 text-sm text-white/60">
              From timeless essentials to bold evening statements, explore edits curated to layer and live in.
            </p>
            <a
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
              href="#"
            >
              Discover lookbooks
              <span aria-hidden>↗</span>
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {collections.map((collection) => (
              <article
                key={collection.title}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6"
              >
                <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    sizes="(min-width: 1280px) 24rem, (min-width: 1024px) 22rem, (min-width: 768px) 40vw, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{collection.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{collection.description}</p>
                  </div>
                  <span aria-hidden className="text-xl text-white/70 transition group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent px-8 py-10 backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Join the Tuede Collective</h2>
              <p className="mt-3 max-w-2xl text-base text-white/65">
                Unlock early access to limited cloth runs, styling notes from our studio, and invitations to in-store gatherings.
              </p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/20 bg-black/40 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-white/90"
              >
                Sign up
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
