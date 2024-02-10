export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const filterState = selectFilter(state);
  const { items } = selectContacts(state);
  //   console.log(items);
  //   console.log(filterState);
  if (!filterState) {
    return items;
  }
  const normalizedFilter = filterState.toLowerCase();
  return items.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalizedFilter)
  );
};
