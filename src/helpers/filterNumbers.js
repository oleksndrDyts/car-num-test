export const filterNumbers = (filter, numbers, type) => {
  if (filter === 0) {
    return numbers;
  }

  const normLocation = loc => {
    if (loc.includes('місто') && loc.length > 10) {
      return loc.slice(6, -7);
    }

    if (loc.includes('місто')) {
      return loc.slice(6);
    }

    return loc.slice(0, -7);
  };

  const normalizedFilter = filter.toUpperCase();

  return numbers.filter(({ number, location }) => {
    const result =
      type === 'byNumber'
        ? number.join(' ').includes(normalizedFilter)
        : normLocation(location).toUpperCase().includes(normalizedFilter);
    return result;
  });
};
