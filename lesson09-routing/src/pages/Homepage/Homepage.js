import React, { useEffect, useState } from "react";
import { List, Spin } from 'antd';
import {Link} from 'react-router-dom';
import axios from 'axios';
// Bao gồm danh sách albums
const Homepage = () => {
  const [albums, setAlbums] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)

  const getAlbums = async () => {
    try {
      // method: get, post
      setLoading(true)
      const resp = await axios.get('https://jsonplaceholder.typicode.com/albums');
      setAlbums(resp.data);
      setTotal(resp.data.length)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      
    }
  }

  useEffect(() => {
    getAlbums()
  }, [])
  return (
    <Spin spinning={loading}>
      <List
        header={<div>Danh sách ALBUM</div>}
        footer={<div>Tổng số lượng album: {total}</div>}
        bordered
        dataSource={albums}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/album/${item.id}`}>
              {item.title}
            </Link>
          </List.Item>
        )}
      />
    </Spin>
  );
};

export default Homepage;
