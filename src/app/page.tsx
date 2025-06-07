import { Body, Caption, H1 } from '../components/ui/Typography';
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <H1 className="tracking-kr">한국어입니다</H1>
        <H1 className="tracking-en">English</H1>
        <H1 className="tracking-kr">
          한국어와 <span className="tracking-en">English Mix</span>
        </H1>
        <section className="[&_*]:tracking-kr">
          <H1>한국어 제목</H1>
          <Body>한국어 본문</Body>
          <Caption>한국어 캡션</Caption>
        </section>
        <section className="[&_*]:tracking-en">
          <H1>English Title</H1>
          <Body>English Body</Body>
          <Caption>English Caption</Caption>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
