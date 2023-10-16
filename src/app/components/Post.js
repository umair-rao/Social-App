import { data } from "@/data/fake-data";

const Post = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      {data.map((post, id) => (
        <div key={id} className="p-8">
          <div className="tracking-wide text-sm text-indigo-500 font-semibold">
            User Name: {post.username}
          </div>
          <p className="mt-2 text-gray-500">Dated: {post.timestamp}</p>
          <p className="mt-2 text-gray-500">Location: {post.location}</p>
          <p className="mt-2 text-gray-500">Gender: {post.gender}</p>
          <p className="mt-2 text-gray-500">University: {post.university}</p>
          <div className="mt-2 text-gray-500">{post.hashtags}</div>
          <div className="mt-6 flex items-center">
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
              <span className="ml-2">{post.likes}</span>
            </div>
            <div className="flex items-center ml-6">
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="ml-2">{post.shares}</span>
            </div>
            <div className="flex items-center ml-6">
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="ml-2">{post.comments}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
