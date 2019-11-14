@coordinates.each do |coordinate|
  json.set! coordinate.id do
    json.partial! 'coordinate', coordinate: coordinate
    json.reviewIds []
  end
end
