import { data } from "@/data/fake-data";
import { AiFillLike } from 'react-icons/ai'
import { FaRegComments } from 'react-icons/fa'
import { PiShareFatLight } from 'react-icons/pi'

const Post = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
        <h1 className="text-center pt-8 border-b-2 border-solid border-slate-500">Social Posts</h1>
      {data.map((post, id) => (
        <div key={id} className="p-8 border-b-2 border-black border-solid">
          <div className="tracking-wide text-sm text-indigo-500 font-semibold">
            User Name: {post.username}
          </div>
          <p className="mt-2 text-gray-500">Dated: {post.timestamp}</p>
          <p className="mt-2 text-gray-500">Location: {post.location}</p>
          <p className="mt-2 text-gray-500">Gender: {post.gender}</p>
          <p className="mt-2 text-gray-500">University: {post.university}</p>
          <div className="mt-2 text-blue-500">{post.hashtags}</div>
          <div className="mt-6 flex items-center">
            <div className="flex items-center">
              <span className="ml-2"><AiFillLike/> {post.likes}</span>
            </div>
            <div className="flex items-center ml-6">
              <span className="ml-2"><FaRegComments/> {post.comments}</span>
            </div>
            <div className="flex items-center ml-6">
              <span className="ml-2"><PiShareFatLight/>{post.shares}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
