import { useEffect, useState } from "react"
import { MyPosts } from "./Profile"
import type { IPosts } from "./Profile"
import { getPosts } from "./Profile"

function Posts() {
  const [posts, setPosts] = useState<IPosts[]>([])

  useEffect(() => {
    getPosts(setPosts)
  })

  return (
    <MyPosts posts={posts} />
  )
}

export default Posts