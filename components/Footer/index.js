import DIARY from '@/diary.config'

const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <footer>
      <div className="footer">{ getYear() } © { DIARY.siteName }</div>
    </footer>
  )
}

export default Footer
