import { useState } from 'react';

interface Spotify {
  name: Spotify.RootObject['name'];
  external_urls: Spotify.RootObject['external_urls'];
  isSelected: boolean;
  album: Spotify.RootObject['album'];
  artists: Spotify.RootObject['artists'];
  uri: string;
}

function usePagination(
  data: Spotify[] = [],
  itemsPerPage: number,
): {
  next: () => void;
  prev: () => void;
  currentPage: number;
  currentData: () => Spotify[];
  maxPage: number;
  jump: (page: number) => void;
} {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  function currentData(): Spotify[] {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page: number) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination;
