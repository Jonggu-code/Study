import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import Card from "@/components/Card";

export default function UIPreview() {
  return (
    <div className="space-y-10 w-full max-w-3xl mx-auto py-10">
      {/* Typography */}
      <section>
        <SectionTitle>Typography</SectionTitle>
        <h2 className="text-2xl font-semibold">Heading 2</h2>
        <h3 className="text-xl font-medium">Heading 3</h3>
        <p className="mt-2 text-gray-700">
          Pretendard Variable 폰트와 전역 색상 시스템이 적용된 문단입니다.
        </p>
      </section>

      {/* Buttons */}
      <section>
        <SectionTitle>Buttons</SectionTitle>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      {/* Card */}
      <section>
        <SectionTitle>Card</SectionTitle>
        <Card
          title="Card Title"
          description="이 카드는 Tailwind v4의 @theme 값으로 관리되는 색상 및 폰트를 사용합니다."
          buttonText="Action"
        />
      </section>
    </div>
  );
}
