'use client';
import React from 'react';
import Layout from '@/components/Layout';
import styles from './index.module.less';
import { Button, Flex, FloatButton,Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';
import {getInfo} from './api'
const DemoPage = React.memo(() => {
    const [data, setData]:any = useState(null);
    useEffect(() => {
        getInfo().then(res=>{
            setData(res.data);
        })
    },[])
    return <Layout curActive='/demo'>
        <div className={styles.demoWrap}>
            <Flex gap="small">
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Flex>
            <FloatButton onClick={() => console.log('onClick')} />
            <Breadcrumb items={[{ title: 'sample' },{ title: 'second' }]} />
            <div className={styles.container}>{'name:'+data?.name+' age:'+data?.age}</div>
        </div>
    </Layout>

})

export default DemoPage