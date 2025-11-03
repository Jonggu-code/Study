type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h1 className="text-3xl font-bold mb-4 text-primary border-b border-gray-200 pb-2">
      {children}
    </h1>
  );
}
