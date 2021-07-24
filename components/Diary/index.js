import DIARY from '@/diary.config'
import request from '@/utils/request'
import Item from './item'

const Diary = () => {
  const { data, isLoading } = request(`${DIARY.baseUrl}/search/issues?q=+repo:${DIARY.username}/${DIARY.repo}+author:${DIARY.username}+label:diary&per_page=5&page=1`)

  if (isLoading) {
    return (
      <div className="main-loading">Loading...</div>
    )
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
