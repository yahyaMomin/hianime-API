export default function createEndpoint(path, page) {
  if (page === 1) {
    return `/${path}`;
  } else {
    return path.includes('?') ? `/${path}&page=${page}` : `/${path}?page=${page}`;
  }
}
