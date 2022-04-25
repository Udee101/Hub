import React, { useEffect, useState } from 'react';

import useStore from '../utils/store';

const Feed = () => {
  const { name, room, setPosts, posts } = useStore((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [post, setPost] = useState({ content: '', user: name });

  const addPost = () => {
    setPosts(post);
    setShowModal(false);
    setPost({});
  };

  return (
    <section className="mt-4">
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ml-4 mb-1 ease-linear transition-all duration-150 text-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Create Post
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Create a Post</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={''} method="POST" className="p-2 w-auto">
                    <div className="w-full mt-4">
                      <label htmlFor="post" className="tracking-tighter">
                        Post
                      </label>
                      <textarea
                        id="content"
                        type="content"
                        name="content"
                        value={post.content}
                        onChange={(e) => setPost({ ...post, [e.currentTarget.name]: e.currentTarget.value })}
                        className="py-3 px-5 w-full border-solid border-2 rounded-sm rounded-sm outline-none appearance-none focus:ring-1 focus:border-blue-700"
                        required
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={addPost}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="m-6">
        {posts?.map((post, i) => {
          return (
            <>
              <div className="">
                <div key={i} class="py-8 flex flex-wrap md:flex-nowrap border-silver-100 border-2 mb-3 p-4 rounded-md">
                  <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span class="font-semibold title-font text-gray-700">Posted by: {post.user}</span>
                    <span class="mt-1 text-gray-500 text-sm">26 April 2022</span>
                  </div>
                  <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2"></h2>
                    <p class="leading-relaxed">{post.content}</p>

                    <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
              <></>
            </>
          );
        })}
      </div>
    </section>
  );
};
export default Feed;
