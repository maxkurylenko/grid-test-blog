import axios from "axios";
import PostDTO from "../../dto/Post.dto";

export async function getStaticPaths() {
  let posts: PostDTO[] = [];

  try {
    const response = await axios.get('/post');
    posts = response.data;
  } catch (e) {
  }

  return {
    paths: posts.map((post) => ({
      params: { id: post.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let data = null;
  try {
    const response = await axios.get(`/post/${params.id}`);
    data = response.data;
  } catch (e) {
    data = {
      errorMessage: e.message,
    };
  }

  return {
    props: {
      data,
    },
  };
}

interface PostProps {
  data: PostDTO & { errorMessage?: string },
};

export default function Post({ data }: PostProps) {
  const { title, text, errorMessage } = data;

  console.log(data);
  
  
  if (errorMessage) {
    return (
      <div style={{color: '#fff'}}>
        <p><b>Error:</b></p>
        <p>{errorMessage}</p>
      </div>
    )
  }

  return (
    <div style={{color: '#fff'}}>
      <h3>{title}</h3>
      <div>{text}</div>
    </div>
  );
}