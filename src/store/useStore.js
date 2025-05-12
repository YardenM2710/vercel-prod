import { create } from 'zustand';

const useStore = create(set => ({
  // Initial state
  query: '',
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),

  // Actions
  setQuery: query => set({ query })

  // Async actions
  // fetchSections: async () => {
  //   set({ isLoading: true, error: null });
  //   try {
  //     const { sections, response } = await resultsService.getSections();
  //     set({ sections, response, isLoading: false });
  //   } catch (error) {
  //     set({
  //       error: error instanceof Error ? error.message : 'Failed to fetch sections',
  //       isLoading: false
  //     });
  //   }
  // }
}));

export default useStore;
