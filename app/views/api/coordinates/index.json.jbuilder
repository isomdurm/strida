@coordinates.each do |coordinate|
  json.set! coordinate.id do
    json.partial! 'coordinate', route: coordinate
    json.reviewIds []
  end
end
