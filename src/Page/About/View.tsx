import React from 'react';
import Style from './Style.module.scss';
import {Skeleton} from 'antd';
import {markdownConverter} from '../../Singleton';
import ArticleShower from '../../Component/ArticleShower';

interface Props
{
    loading: boolean,
    about: string,
}

function AboutView(props: Props)
{
    const {loading, about} = props;
    return (
        <div className={Style.About}>
            <Skeleton loading={loading} active={true} title={true} paragraph={{
                rows: 20,
            }}>
                <header className={Style.header}>
                    <h1 className={Style.title}>关于</h1>
                </header>
                <ArticleShower HTMLContent={markdownConverter.makeHtml(about)} />
            </Skeleton>
        </div>
    );
}

export default React.memo(AboutView);