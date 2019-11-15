json.partial! "api/routes/route", route: @route

# json.route do
#   @route.coordinates.each do |coordinate|
#     json.coordinates do
#       json.set! coordinate.id do
#         json.partial! 'api/coordinates/coordinate', coordinate: coordinate
#       end
#     end
#   end
# end

