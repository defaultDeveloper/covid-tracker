import React, { useState, useEffect } from 'react'
import { Card, CardContent, Typography, Grid, CardMedia,CardActionArea } from '@material-ui/core'
import styles from './news.module.css'
import { fetchNews } from '../../api'

const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        (async function () {
            setNews(await fetchNews())
        }())
    }, [])

    const redirectToNews = (url) => {
        window.open(url,"_blank")
    }

    return (
        <div className={styles.container}>
            < Grid container spacing={0} justify="center">
                {news.map((article, index) => {
                    return (
                        <Grid item key={index} component={Card} xs={12} md={3} className={styles.card} >
                            <Card onClick={() => redirectToNews(article.url)}>
                                <CardActionArea>
                                    <CardMedia className={styles.media} image={article.urlToImage} />
                                    <CardContent>
                                        <Typography variant="subtitle1" gutterBottom>{article.title}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>)
                }
                )}
            </Grid>
        </div>
    )
}

export default News