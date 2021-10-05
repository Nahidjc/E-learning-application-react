import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
const Overview = (props) => {
    const { overview } = props.find
    return (
        <div className='mt-5'>
            <div className="row">
                <div className="col-md-8">
                    <Card sx={8}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Course Overview
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {overview}
                                </Typography>
                                <br />
                                <Typography variant="body2" color="p">
                                    <h6>Requirements</h6>
                                    <ul style={{ 'listStyle': "none" }}>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            You must have the basic knowledge of the operation system.
                                        </li>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            Because visualization is so important in AWS, you should be familiar with it.
                                        </li>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            All operations require a cloud platform that includes networking, as it is a necessary component.
                                        </li>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            Knowing the difference between a public and a private cloud is essential.
                                        </li>
                                        <li>
                                            <DoneIcon></DoneIcon>
                                            Last but not least, you must have a fundamental understanding of coding.
                                        </li>

                                    </ul>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
};

export default Overview;