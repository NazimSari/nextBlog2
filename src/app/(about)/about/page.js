import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="font-semibold mt-8 text-2xl self-start mx-20 text-dark">
        Have a project in mind? Reach out to me 📞 from{" "}
        <Link href="/contact" className="underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen.
      </h2>
    </>
  );
}
