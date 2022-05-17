import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useStore = create(
  devtools(
    persist(
      (set) => ({
        name: '',
        room: '',
        pfpSrc: '',
        roommates: [],
        messages: [],
        // posts: [],

        setName: (name) => set({ name }),
        setRoom: (room) => set({ room }),
        setPfpSrc: (pfpSrc) => set({ pfpSrc }),

        setRoommates: (roommates) => set((state) => ({ roommates })),
        addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
        // setPosts: (post) => {
        //   set((state) => ({ posts: [...state.posts, post] }));
        //   const localPosts = [];
        //   const currPosts = localStorage.getItem('posts');
        //   localStorage.setItem('posts', JSON.stringify(localPosts.push(post)));
        // },
        resetStore: () => set((state) => ({ name: '', room: '', pfpSrc: '', roommates: [], messages: [] })),
      }),
      {
        name: 'chatcus-storage',
        getStorage: () => sessionStorage,
      },
    ),
  ),
);

export default useStore;
