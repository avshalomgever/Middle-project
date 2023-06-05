import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import data from "../../../dataEvent.json";
import { useState, useEffect } from "react";
import couples from '../../../dataClient.json'

function Client({value,key }) {
  
  return (  
    <div>
      <Card  sx={{ maxWidth: 345,height:"100vh" }}>
        <CardActionArea>
          <CardMedia component="img" max-width= '100%' height="300px" image={value.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {value.name} {value.age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {value.experience}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}



export default Client;

// function ClientCard() {
//   const [data1, setData1] = useState([]);
//   useEffect(() => {
//     setData1(data.couples);
//   }, []);
//   return (
//     <div>
//       {data1 &&
//         data1.map((value, index) => {
//           return (
//             <Carousel.Item>
//               <Client key={index} value={value} />
//             </Carousel.Item>
//           );
//         })}
//     </div>
//   );
// }
