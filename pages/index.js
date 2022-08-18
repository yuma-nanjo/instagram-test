import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Instagram from "../components/Instagram";

export default function Home({ posts }) {
  return (
    <>
      <div>Hello Instagram</div>
      <Instagram posts={posts} />
    </>
  );
}

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
