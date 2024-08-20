import { allBlogs } from "contentlayer/generated";

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      Hello World
    </main>
  );
}
