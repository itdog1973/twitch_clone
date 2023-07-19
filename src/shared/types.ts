export interface User {
  name: string;
  token: string;
  followers: Followers[];
}

interface Followers {
  id: string;
  subscribe: boolean;
}
