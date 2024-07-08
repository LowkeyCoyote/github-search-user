import { formatDateGithubUser } from '../../utils/formatDateGithubUser';
import useFetchGithubUser from '@hooks/useFetchGithubUser';
import useThemeSwitch from '@hooks/useThemeSwitch';
import iconMoon from '@assets/icons/icon-moon.svg';
import iconSun from '@assets/icons/icon-sun.svg';
import iconSearch from '@assets/icons/icon-search.svg';

const GithubSearchUser = () => {
  const { username, setUsername, userData, loading, error, fetchUser } = useFetchGithubUser();
  const { theme, setTheme, handleThemeSwitch } = useThemeSwitch();

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
        <h1 className="dark:text-white">devfinder</h1>
        <div className="flex flex-row items-center">
          <h4 className="mr-4 dark:text-white">{theme === 'light' ? 'Dark' : 'Light'}</h4>
          <img onClick={handleThemeSwitch} src={theme === 'light' ? iconMoon : iconSun} alt="switch to dark mode" />
        </div>
      </header>
      <section className="bg-white rounded-xl p-2.5 dark:bg-bluish-black">
        <form onSubmit={onSubmit} className="flex flex-row justify-between ">
          <img src={iconSearch} className="py-3 pr-5" alt="search" />
          <input
            type="text"
            value={username}
            id="userSearchInput"
            onChange={handleChangeInput}
            placeholder="Search GitHub username..."
            className="text-[18px] placeholder:text-grayish-blue w-full focus:outline-none dark:bg-bluish-black dark:placeholder:text-white dark:text-white "
          />
          <button
            className="bg-blue rounded-lg cursor-pointer hover:bg-light-blue transition-all duration-200 ease-in-out"
            type="submit"
          >
            <h3 className="text-white px-6 py-3 ">Search</h3>
          </button>
        </form>
      </section>

      <section className="mt-6 rounded-xl bg-white px-12 py-11 dark:bg-bluish-black">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-row">
            <img src={userData.avatar_url} alt="avatar" className="w-[117px] h-[117px] rounded-full mr-10" />
            <div>
              <h1 className="dark:text-white">{userData.login}</h1>
              <h3>{`@${userData.name}`}</h3>
            </div>
          </div>
          <p className="dark:text-white">{formatDateGithubUser(userData.created_at)}</p>
        </div>
        <div className="pl-40 -mt-10">
          <p className="dark:text-white">{userData.bio === null ? 'This profile has no bio' : userData.bio}</p>
          <div className="bg-very-light-grey rounded-lg flex flex-row items-center gap-24 p-5 mt-8 dark:bg-[#141D2F]">
            <div>
              <h4>Repos</h4>
              <h2 className="dark:text-white">{userData.public_repos}</h2>
            </div>
            <div>
              <h4>Followers</h4>
              <h2 className="dark:text-white">{userData.followers}</h2>
            </div>
            <div>
              <h4>Following</h4>
              <h2 className="dark:text-white">{userData.following}</h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GithubSearchUser;
