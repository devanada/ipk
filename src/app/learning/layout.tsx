import SideBar from "@/components/sidebar";

export default function LearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-row">
      <SideBar />
      <div className="h-full w-full overflow-auto p-9 prose max-w-none">
        {children}
      </div>
    </div>
  );
}
