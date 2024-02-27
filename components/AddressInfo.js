import React from 'react'

const AddressInfo = ({ addressInfo }) => {
  return (
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
  )
}

export default AddressInfo
