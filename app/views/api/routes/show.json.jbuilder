json.partial! "api/routes/route", route: @route

json.route do
  json.partial! '/api/routes/route', route: @route
  json.routeIds @route.coordinates.pluck(:id)
end

@route.coordinates.each do |coordinate|
  json.coordinate do
    json.set! coordinate.id do
      json.partial! 'api/coordinates/coordinate', coordinate: coordinate
    end
  end
end

