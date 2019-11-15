@workouts.each do |workout|
  json.set! workout.id do
    json.partial! 'workout', route: workout
  end
end
