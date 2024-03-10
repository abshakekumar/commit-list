export const LABELS = {
  START_DATE: "Select Start Date:",
  END_DATE: "Select End Date:",
};

export const ACTIONS = {
  SET__START_DATE: "set__start_date",
  SET__END_DATE: "set__end_date",
  SET__PAGE_NO: "set__pageno",
  SET__PER_PAGE: "set__perpage",
  SET__MAIN_LOADING: "set__mainloading",
};

export const ITEMS_PER_PAGE = [
  { value: "5", label: "5 items" },
  { value: "10", label: "10 items" },
  { value: "15", label: "15 items" },
  { value: "20", label: "20 items" },
];

export const URLS = {
  COMMIT_LIST: "https://api.github.com/repos/rolldown-rs/rolldown/commits",
};
