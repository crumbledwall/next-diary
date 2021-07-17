import DIARY from '@/diary.config'
import request from '@/utils/request'
import Item from './item'

const Diary = () => {
  const { data, isLoading } = request(`${DIARY.baseUrl}/repos/${DIARY.username}/${DIARY.repo}/issues?creator=${DIARY.username}&labels=diary`)

  if (isLoading) {
    return (
      <div className="main-loading">Loading...</div>
    )
  }
  return (
    <div className="main">{data.map((value) => {
      // eslint-disable-next-line react/jsx-key
      return <Item
        title={value.title}
        content={value.body}
      />
    }) }</div>
  )
}

export default Diary
