import React, { useState } from 'react'
import axios from 'axios'
import InputField from 'components/InputField'
import Button from 'components/Button'
import AddressInfo from 'components/AddressInfo'
import ErrorMessage from 'components/ErrorMessage'
import styles from 'styles/index.module.css'

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
        `https://apis.postcode-jp.com/api/v4/postcode?apikey=POST_KEY&postcode=${postcode}`,
        {
          timeout: 5000
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
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <h1>郵便番号検索</h1>
        <InputField
          placeholder='郵便番号を入力してください'
          value={postcode}
          onChange={e => setPostcode(e.target.value)}
        />
        <Button onClick={getAddressInfo} disabled={!postcode || loading}>
          {loading ? '検索中...' : '検索'}
        </Button>
        {error && <ErrorMessage message={error} />}
        {addressInfo && <AddressInfo addressInfo={addressInfo} />}
      </div>
    </div>
  )
}

export default Index
