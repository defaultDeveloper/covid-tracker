import React, { useState, useEffect } from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
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
        window.location.assign(url)
    }

    return (
        <div className={styles.container}>
            < Grid container spacing={0} justify="center">
                <Grid item xs={12} md={9}>
                    <Typography variant="h2" align="center" gutterBottom>Headlines</Typography>
                </Grid>
                {news.map((article, index) => {
                    return (
                        <Grid item key={index} component={Card} xs={12} md={9} className={styles.card} >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>{article.title}</Typography>
                                <Typography color="textPrimary">
                                    {article.description}
                                </Typography>
                            </CardContent>
                        </Grid>)
                }
                )}
            </Grid>
        </div >
    )
}

export default News