@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', route: post
  end
end
