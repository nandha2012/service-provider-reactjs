import {
    Box, Container,
    Grid, Link,
    Paper, TextField,
    Typography, InputAdornment
} from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UAParser from "ua-parser-js";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './bannerStyles';
const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 1
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 1
    }
};
const Banner = ({ deviceType }: any) => {
    const classes = useStyles();
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            centerMode={false}
            containerClass="container"
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            deviceType={deviceType}
            minimumTouchDrag={80}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            responsive={responsive}
        >
            {[1, 2, 3, 4, 5].map(() => (
                <Box component='div' className={classes.homeBanner}>
                    <Box className={classes.bannerContent}>
                        <Box className={classes.bannerHeading}>
                            <Box>
                                <Typography variant="h3" style={{ fontWeight: 600 }}>A nice section heading goes here</Typography>
                                <Typography>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </Typography>
                            </Box>
                            <Box className={classes.bannerForm}>
                                <TextField select className={classes.locationSelect}
                                InputProps={{
                                    className: classes.input,
                                }}
                                >
                                    {['city-1', 'city-2', 'city-3', 'city-4', 'city-5',].map((option) => (
                                        <option key={Math.floor(Math.random())} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </TextField>
                                <TextField className={classes.locationInput}
                                    InputProps={{
                                        className:classes.input,
                                        placeholder:"search for a service",
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                >
                                </TextField>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))
            }
        </Carousel>
    )
};
Banner.getInitialProps = ({ req }: any) => {
    let userAgent;
    if (req) {
        userAgent = req.headers["user-agent"];
    } else {
        userAgent = navigator.userAgent;
    }
    const parser = new UAParser();
    parser.setUA(userAgent);
    const result = parser.getResult();
    const deviceType = (result.device && result.device.type) || "desktop";
    return { deviceType };
};
export default Banner;