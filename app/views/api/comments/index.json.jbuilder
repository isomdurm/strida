@comments.each do |post|
  json.set! post.id do
    json.partial! 'post', route: post
    json.reviewIds []
  end
end
