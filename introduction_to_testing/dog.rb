class Dog
  attr_accessor :bones

  def initialize
    @bones = []
  end

  def give_bone(size)
    "I have too many bones!" if bones.count > 3
    bones.push(size)
    bones.length
  end

  def eat_bone
    if bones.length > 0
      bones.last
      bones.shift
    else
      "I don't have any bones. :("
    end
  end

  def bone_count
    bones.count
  end
end
