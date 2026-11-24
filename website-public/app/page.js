import { generatePageContent } from "@magicore/content";
import { PublicStoreDemo } from "@/components/PublicStore";

export default function HomePage() {
  const content = generatePageContent("home");
  return (
    <main className="flex flex-col items-center text-center">
      {content.badge && (
        <p className="text-xs uppercase tracking-[0.25em] text-primary">{content.badge}</p>
      )}
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">{content.heading}</h1>
      {content.subheading && (
        <p className="mt-6 max-w-xl text-lg text-[#4a4640]">{content.subheading}</p>
      )}
      <PublicStoreDemo />
    </main>
  );
}
