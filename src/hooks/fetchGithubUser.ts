import { useState, useEffect } from 'react';

const fetchGithubUser = () => {
  const [username, setUsername] = useState('LowkeyCoyote');
  const [userData, setUserData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchUser = async (user: string) => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(username);
  }, []);

  return { username, setUsername, userData, loading, error, fetchUser };
};

export default fetchGithubUser;
