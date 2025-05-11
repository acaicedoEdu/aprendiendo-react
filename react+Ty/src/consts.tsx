export const TODO_FILTERS = {
  ALL: "ALL",
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  CONNECTED: "CONNECTED",
} as const;

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    label: "Todos",
    href: `/?filter=${TODO_FILTERS.ALL}`,
  },
  [TODO_FILTERS.PENDING]: {
    label: "Activos",
    href: `/?filter=${TODO_FILTERS.PENDING}`,
  },
  [TODO_FILTERS.COMPLETED]: {
    label: "Completados",
    href: `/?filter=${TODO_FILTERS.COMPLETED}`,
  },
  [TODO_FILTERS.CONNECTED]: {
    label: "Conectados",
    href: `/?filter=${TODO_FILTERS.CONNECTED}`,
  },
};
