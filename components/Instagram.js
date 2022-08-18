import Link from "next/link";
import Image from "next/image";

function Instagram({ posts }) {
  return (
    <div>
      {posts.business_discovery.media.data.map((data) => (
        <Link href={data.permalink} alt={data.id} key={data.id}>
          <Image
            src={data.media_url}
            width={360}
            height={360}
            alt="Photo"
            objectFit="cover"
          />
        </Link>
      ))}
    </div>
  );
}

export default Instagram;
