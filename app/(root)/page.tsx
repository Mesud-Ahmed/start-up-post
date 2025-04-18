import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams,}: {searchParams: Promise<{ query?: string }>;}) {
  const query = (await searchParams).query;
  // const posts = [
  //   {
  //     id: 1,
  //     name: "revo prime",
  //     date: "10 oct 2025",
  //     view: 234,
  //     author: "mesud",
  //     avatar:
  //       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     description: "this is just the beginning",
  //     image: "https://media.istockphoto.com/id/1924607771/photo/robot-assistant-vacuuming.webp?s=612x612&w=is&k=20&c=3OxEky7OhploPhMJRB3baTeDj4kd2cmefVLRLHysiQA=",
  //   },
  // ];
  const posts = await client.fetch(STARTUPS_QUERY);
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="mt-7 card_grid">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All startups"}
        </p>
        <ul>
          {posts.map((post:StartupTypeCard) => (
            <StartupCard key={post._id} post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
