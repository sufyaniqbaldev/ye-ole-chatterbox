class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url

  has_many :memberships, serializer: UserMembershipsSerializer
end
