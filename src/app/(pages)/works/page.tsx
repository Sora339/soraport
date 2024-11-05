import Link from "next/link";

interface Post {
    id: number;
    path: string;
    emoji: string;
    title: string;
    published_at: string;
  }
  
  export default async function BlogList() {
    const res = await fetch(
      'https://zenn.dev/api/articles?username=napa&order=latest',
    );
    const data = await res.json();
    const posts: Post[] = data.articles.slice(0, 10);
  
    return (
      <>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                href={`https://zenn.dev/${post.path}`}
                target="blank"
              >
                <span>{post.emoji}</span>
                <p>
                  {post.title}
                </p>
                <p>
                 {post.published_at}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }