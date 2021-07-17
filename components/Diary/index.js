import DIARY from '@/diary.config'
import request from '@/utils/request'

const Diary = () => {
  const { data, isLoading } = request(`${DIARY.baseUrl}/repos/${DIARY.username}/${DIARY.repo}/issues?creator=${DIARY.username}&labels=diary`)

  if (isLoading) {
    return (
      <div className="main">Loading...</div>
    )
  }
  return (
    <div className="main">hello { data[0].title}!</div>
  )
}

export default Diary
