import useSWR from 'swr'

const request = (url) => {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR(url, fetcher)

  return {
    data: data,
    isLoading: !error && !data
  }
}

export default request
