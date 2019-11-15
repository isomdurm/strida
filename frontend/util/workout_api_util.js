export const fetchWorkouts = data => (
  $.ajax({
    method: 'GET',
    url: 'api/workouts',
    data
  })
);

export const fetchWorkout = id => (
  $.ajax({
    method: 'GET',
    url: `api/workouts/${id}`
  })
);

export const createWorkout = workout => (
  $.ajax({
    method: 'POST',
    url: 'api/workouts',
    data: { workout }
  })
);

