import DIARY from '@/diary.config'
import request from '@/utils/request'
import Item from './item'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Diary = ({ page }) => {
  const router = useRouter()
  const { data, isLoading } = request(`${DIARY.baseUrl}/search/issues?q=+repo:${DIARY.username}/${DIARY.repo}+author:${DIARY.username}+label:diary&per_page=${DIARY.perPage}&page=${page}`)

  if (isLoading) {
    return (
      <div className="main-loading">Loading...</div>
    )
  }

  if (!data.items.length) {
    router.push('/404')
  }
  return (
    <div className="main"><div className="diaries">{data.items.map((value) => {
      return <Item
        key={value.number}
        title={value.title}
        content={value.body}
      />
    })}</div>
      <div className="pagination">
        { page > 1
          ? <div className="prev-btn"><Link href={`/page/${parseInt(page) - 1}`}>
            <a>← 上一页</a>
          </Link></div>
          : ''}
        { data.total_count > DIARY.perPage * page
          ? <div className="next-btn"><Link href={`/page/${parseInt(page) + 1}`}>
            <a>下一页 →</a>
          </Link></div>
          : ''}
      </div>
    </div>
  )
}

export default Diary
