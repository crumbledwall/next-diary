import DIARY from '@/diary.config'
import request from '@/utils/request'
import Item from './item'
import { useRouter } from 'next/router'

const Diary = ({ page }) => {
  const router = useRouter()
  const { data, isLoading } = request(`${DIARY.baseUrl}/search/issues?q=+repo:${DIARY.username}/${DIARY.repo}+author:${DIARY.username}+label:diary&per_page=5&page=${page}`)

  if (isLoading) {
    return (
      <div className="main-loading">Loading...</div>
    )
  }

  if (!data.items.length) {
    router.push('/404')
  }
  return (
    <div className="main">{data.items.map((value) => {
      return <Item
        key={value.number}
        title={value.title}
        content={value.body}
      />
    }) }</div>
  )
}

export default Diary
