type LandinPageProps = {
  readonly title: string;
  readonly answer: string;
};

export default function LandingPage({ title, answer }: LandinPageProps) {
  return (
    <div id="LandingPageContainer">
      <section>
        <h1>{title} </h1>
        <p>{answer} </p>
      </section>
    </div>
  );
}
