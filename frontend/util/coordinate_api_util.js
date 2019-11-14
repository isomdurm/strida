export const fetchCoordinates = data => (
  $.ajax({
    method: 'GET',
    url: 'api/coordinates',
    data
  })
);

export const createCoordinate = coordinate => (
  $.ajax({
    method: 'POST',
    url: 'api/coordinates',
    data: { coordinate }
  })
);

