export function PageHeading({
  eyebrow,
  title,
  introduction,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
}) {
  return (
    <header className="page-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-introduction">{introduction}</p>
    </header>
  );
}
