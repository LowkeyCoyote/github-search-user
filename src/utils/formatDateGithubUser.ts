export const formatDateGithubUser = (dateISO: string) => {
  const date = new Date(dateISO);
  const optionsYear: Intl.DateTimeFormatOptions = {
    year: 'numeric',
  };

  const optionsDay: Intl.DateTimeFormatOptions = {
    day: 'numeric',
  };

  const optionsMonth: Intl.DateTimeFormatOptions = {
    month: 'short',
  };

  const year = date.toLocaleDateString('en-US', optionsYear);
  const day = date.toLocaleDateString('en-US', optionsDay);
  const month = date.toLocaleDateString('en-US', optionsMonth);

  return `Joined ${day} ${month} ${year}`;
};
