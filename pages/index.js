import React, { useState } from 'react'
import axios from 'axios'

const Index = () => {
  const [postcode, setPostcode] = useState('')
  const [addressInfo, setAddressInfo] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getAddressInfo = async () => {
    setError(null)
    setLoading(true)
    try {
      const response = await axios.get(
        `https://postcode-jp.com/api/v1/postcode?apikey=POST_KEY&postcode=${postcode}`,
        {
          timeout: 5000 // リクエストのタイムアウト設定
        }
      )
      setAddressInfo(response.data)
    } catch (error) {
      console.error('Error fetching address info:', error)
      setError('Failed to fetch address info. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>郵便番号検索</h1>
      <input
        type='text'
        placeholder='郵便番号を入力してください'
        value={postcode}
        onChange={e => setPostcode(e.target.value)}
      />
      <button onClick={getAddressInfo} disabled={!postcode || loading}>
        {loading ? '検索中...' : '検索'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {addressInfo && (
        <div>
          <h2>住所情報</h2>
          <p>郵便番号: {addressInfo.postcode}</p>
          <p>都道府県: {addressInfo.prefecture}</p>
          <p>市区町村: {addressInfo.city}</p>
          <p>町域: {addressInfo.town}</p>
          <p>都道府県カナ: {addressInfo.prefecture_kana}</p>
          <p>市区町村カナ: {addressInfo.city_kana}</p>
          <p>町域カナ: {addressInfo.town_kana}</p>
        </div>
      )}
    </div>
  )
}

export default Index
