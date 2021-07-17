import DIARY from '@/diary.config'
import request from '@/utils/request'

const Diary = () => {
  const { data, isLoading } = request(`${DIARY.baseUrl}/repos/${DIARY.username}/${DIARY.repo}/issues?creator=${DIARY.username}&labels=about`)

  if (isLoading) {
    return (
      <div className="about">
      <div className="about-title">About</div>
      <div className="about-loading">Loading...</div>
    </div>
    )
  }
  return (
    <div className="about">
      <div className="about-title">About</div>
      <div className="about-content">{data[0].body}</div>
    </div>
  )
}

export default Diary
