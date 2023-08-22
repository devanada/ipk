import SideBar from "@/components/sidebar";

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex flex-row">
      <SideBar />
      <article className="p-9 overflow-auto prose !prose-invert max-w-none h-full w-full prose-p:text-justify prose-a:underline-offset-4">
        {children}
      </article>
    </div>
  );
}
