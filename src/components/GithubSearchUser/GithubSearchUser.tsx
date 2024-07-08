import { formatDateGithubUser } from '../../utils/formatDateGithubUser';
import fetchGithubUser from '@hooks/fetchGithubUser';
import iconMoon from '@assets/icons/icon-moon.svg';
import iconSearch from '@assets/icons/icon-search.svg';

const GithubSearchUser = () => {
  const { username, setUsername, userData, loading, error, fetchUser } = fetchGithubUser();

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchUser(username);
  };

  return (
    <section className="w-[700px]">
      <header className="flex flex-row justify-between mb-9">
        <h1>devfinder</h1>
        <div className="flex flex-row items-center">
          <h4 className="mr-4">DARK</h4>
          <img src={iconMoon} alt="switch to dark mode" />
        </div>
      </header>
      <section className="bg-white rounded-xl p-2.5">
        <form onSubmit={onSubmit} className="flex flex-row justify-between">
          <img src={iconSearch} className="py-3 pr-5" alt="search" />
          <input
            type="text"
            value={username}
            id="userSearchInput"
            onChange={handleChangeInput}
            placeholder="Search GitHub username..."
            className="text-[18px] placeholder:text-grayish-blue w-full focus:outline-none"
          />
          <button
            className="bg-blue rounded-lg cursor-pointer hover:bg-light-blue transition-all duration-200 ease-in-out"
            type="submit"
          >
            <h3 className="text-white px-6 py-3 ">Search</h3>
          </button>
        </form>
      </section>

      <section className="mt-6 rounded-xl bg-white px-12 py-11">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-row">
            <img src={userData.avatar_url} alt="avatar" className="w-[117px] h-[117px] rounded-full mr-10" />
            <div>
              <h1>{userData.login}</h1>
              <h3>{`@${userData.name}`}</h3>
            </div>
          </div>
          <p>{formatDateGithubUser(userData.created_at)}</p>
        </div>
        <div className="pl-40 -mt-10">
          <p>{userData.bio === null ? 'This profile has no bio' : userData.bio}</p>
          <div className="bg-very-light-grey rounded-lg flex flex-row items-center gap-24 p-5 mt-8">
            <div>
              <h4>Repos</h4>
              <h2>{userData.public_repos}</h2>
            </div>
            <div>
              <h4>Followers</h4>
              <h2>{userData.followers}</h2>
            </div>
            <div>
              <h4>Following</h4>
              <h2>{userData.following}</h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GithubSearchUser;
