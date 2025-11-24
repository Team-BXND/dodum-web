import { useEffect, useState } from "react"
import { MyPosts } from "./Profile"
import type { IPosts } from "./Profile"
import { GetPosts } from "./Profile"

function Posts() {
  const [posts, setPosts] = useState<IPosts[]>([])

  useEffect(() => {
    GetPosts(setPosts)
  })

  return (
    <MyPosts posts={posts} />
  )
}

export default Posts