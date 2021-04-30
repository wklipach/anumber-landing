import React from 'react'
import Head from 'next/head'

class HeadComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
            <title>A-Number Software</title>
            <meta content="" name="description"/>
            <meta content="" name="keywords"/>
            <link href="./assets/img/favicon.png" rel="icon"/>
            <link href="./assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i&display=swap" rel="stylesheet"/>
            <link href="./assets/vendor/animate.css/animate.min.css" rel="stylesheet"/>
            <link href="./assets/vendor/aos/aos.css" rel="stylesheet"/>
            <link href="./assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="./assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
            <link href="./assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
            <link href="./assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
            <link href="./assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
            <link href="./assets/css/style.css" rel="stylesheet"></link>            
        </Head>
    );
  }
}


export default HeadComponent


