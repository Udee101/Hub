import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
// import useStore from '../utils/store';

const Feed = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, 'Posts');

  const addPost = async () => {
    await addDoc(postsCollectionRef, { title: title, content: content });
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <>
      <div className="creat-post text-center mt-5 sticky">
        <textarea
          id="title"
          placeholder="Input Title..."
          className="bg-gray-200 p-2 mr-4 rounded-md text-gray-700 focus:bg-white focus:border-green-700 w-64"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          id="content"
          placeholder="Input Content..."
          className="bg-gray-200 p-2 mr-4 rounded-md text-gray-700 focus:bg-white focus:border-green-700 w-64"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />

        <div className="w-100 mt-2">
          <button
            onClick={addPost}
            className="text-white font-bold border-2 p-2 bg-blue-500 border-sky-700 hover:bg-blue-700 rounded-md w-40"
          >
            Post
          </button>
        </div>
      </div>
      <section className="mt-4">
        <div className="m-6">
          {posts.map((feed, i) => {
            return (
              <>
                <div>
                  <div
                    key={i}
                    class="py-8 flex flex-wrap md:flex-nowrap border-silver-100 border-2 mb-3 p-4 rounded-md"
                  >
                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span class="font-semibold title-font text-gray-700">Title: {feed.title}</span>
                      <span class="mt-1 text-gray-500 text-sm">26 April 2022</span>
                    </div>
                    <div class="md:flex-grow">
                      <h2 class="text-2xl font-medium text-gray-900 title-font mb-2"></h2>
                      <p class="leading-relaxed">{feed.content}</p>

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
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm overflow-hidden">
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
    </>
  );
};
export default Feed;
