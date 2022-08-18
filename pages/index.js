import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const user_name = "sawa_officialgram"; //ビジネスorクリエイターアカウントの必要あり
  const access_token = process.env.NEXT_PUBLIC_INSTAGRAMTOKEN;
  const user_id = process.env.NEXT_PUBLIC_INSTAGRAMID;
  const get_count = 12; //取得したい投稿数

  const res = await fetch(
    `https://graph.facebook.com/v14.0/${user_id}?fields=business_discovery.username(${user_name}){media.limit(${get_count}){caption,media_url,permalink}}&access_token=${access_token}`
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <div>Hello Instagram</div>
      <div>
        {posts.business_discovery.media.data.map((data) => (
          <Link href={data.permalink} alt={data.id} key={data.id}>
            <Image
              src={data.media_url}
              width={360}
              height={360}
              alt="data"
              objectFit="cover"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
