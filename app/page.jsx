import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          Copyright free AI Content
        </span>
      </h1>

      <p className="desc text-center">
        Aulora provides Copyright-free AI content. Share your content with the
        world.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
