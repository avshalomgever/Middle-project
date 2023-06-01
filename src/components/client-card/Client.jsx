import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import data from "../../../dataCard.json";
import { useState, useEffect } from "react";

function Client({value,index}) {
    console.log(value)
  return (
    <div>
      <Card id={index} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={value.image} />
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
