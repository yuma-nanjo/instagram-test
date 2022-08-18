import Link from "next/link";
import Image from "next/image";

function Instagram({ posts }) {
  if (posts.business_discovery == undefined) {
    console.log(posts);
    return <div>読み込み中</div>;
  } else {
    return (
      <div>
        {posts.business_discovery.media.data.map((data) => (
          <img src={data.media_url} alt="photo" key={data.id} />
        ))}
      </div>
    );
  }
}

export default Instagram;
