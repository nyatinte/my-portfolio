import React from 'react'
import ArticleTitle from '../components/ArticleTitle'
import {
    Text,
    Image
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom';
import AnimatedDiv from '../components/AnimatedDiv'
import NotFoundImage from '../images/404.PNG';

const ErrorPage = () => {
    // let navigate = useNavigate();
    // 再代入は必要ない場合は const を使うようにする
    const navigate = useNavigate();
    return (
        <AnimatedDiv>
            <ArticleTitle title='ページが見つかりません！' subtitle='oh my god!' />
            <Text color='#117ec6' _hover={{ color: '#117ec681', cursor: 'pointer' }} onClick={() => { navigate(-1) }}>元のページに戻る</Text>
            <Image src={NotFoundImage} mx='auto'/>
        </AnimatedDiv>
    );
}

export default ErrorPage