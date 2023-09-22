import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { Col, Divider, Row, Card, Button, Spin } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { useEffect, useState } from "react";
const { Meta } = Card;
const AlbumDetail = () => {
    const params = useParams();
    const [detail, setDetail] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        try {
            setLoading(true)
            const respA = await axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}`);
            setDetail(respA.data);
            if (respA.data && respA.data.userId) {
                const respU = await axios.get(`https://jsonplaceholder.typicode.com/users/${respA.data.userId}`);
                setUserInfo(respU.data);
            }
            const respP = await axios.get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`);
            setPhotos(respP.data);
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)

        }
    }

    useEffect(()  => {
        getData()
    }, [])
    return (
        <Spin spinning={loading}>

            <Divider orientation="left">Thông tin tác giả của album {detail && detail.title}:</Divider>
            <Row>
                <Col span={24} style={{textAlign: 'left', padding: '5px 75px', fontSize: '17px'}}>
                <div>
                    <strong>Tên tác giả: </strong> {userInfo && userInfo.name}
                </div>
                <div>
                    <strong>Email: </strong> {userInfo && userInfo.email}
                </div>
                <div>
                    <strong>Địa chỉ: </strong> {userInfo && userInfo.address ? userInfo.address.street + ', ' + userInfo.address.suite + ', ' + userInfo.address.city : ''}
                </div>
                <div>
                    <strong>Số điện thoại: </strong> {userInfo && userInfo.phone}
                </div>
                </Col>
            </Row>
            <Divider orientation="left">Danh sách ảnh</Divider>
            <Row gutter={[16, 16]} justify="space-around">
            {
                photos.map(photo => (
                    <Col span={6} style={{display: 'flex', justifyContent: 'center'}}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src={photo.url} />}
                        >
                            <Meta title={photo.title} description="www.instagram.com" />
                        </Card>
                    </Col>
                ))
            }
            </Row>
            <Link to='/'>
                <Button style={{position: 'fixed', bottom: '20px', right: '20px'}} type="primary" shape="circle" icon={<HomeOutlined />} size={'large'} />

            </Link>
        </Spin>
    )
}
export default AlbumDetail;