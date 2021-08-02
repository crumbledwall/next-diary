import DIARY from '@/diary.config'
import request from '@/utils/request'

const Diary = () => {
  const { data, isLoading } = request(`${DIARY.baseUrl}/search/issues?q=+repo:${DIARY.username}/${DIARY.repo}+author:${DIARY.username}+label:about`)

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
      <div className="about-content about-test">{data.items[0].body}</div>
    </div>
  )
}

export default Diary
