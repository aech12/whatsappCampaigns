type Icon = {
  link: string;
  jsx: JSX.Element;
};

const iconClassname = "h-10 w-10 my-4";
const iconNavigation = [
  "contactos",
  "enviarMsj",
  "estadisticas",
  "plantillas",
  "aboutme",
];

export const icons: Icon[] = [
  {
    link: iconNavigation[0],
    jsx: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconClassname}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    link: iconNavigation[1],
    jsx: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconClassname}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>
    ),
  },
  {
    link: iconNavigation[2],
    jsx: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconClassname}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    link: iconNavigation[3],
    jsx: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconClassname}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
      </svg>
    ),
  },
  {
    link: iconNavigation[4],
    jsx: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconClassname}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
];
