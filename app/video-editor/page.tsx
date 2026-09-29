import { Rocket } from "lucide-react";

const IN_DEVELOPMENT = true;

export default function VideoEditor() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#11071F] font-display">
      {IN_DEVELOPMENT ? (
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
          <div className="animate-bounce flex size-20 items-center justify-center rounded-full border border-[#3f1772] bg-[#1a0b2e]">
            <Rocket className="size-9 text-[#a77cdf]" />
          </div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#8d7ba3]">
            In development
          </p>
          <h1 className="text-4xl font-medium uppercase tracking-[-0.06em] text-white md:text-6xl">
            Launching soon
          </h1>
        </div>
      ) : (
        <div></div>
      )}
    </main>
  );
}
