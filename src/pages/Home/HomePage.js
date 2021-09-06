import React from 'react';
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
       <motion.div style={{width: 100, height: 80, marginTop: 350, marginLeft: 600, border: '1px solid black'}} layoutId={'cuncon'}>
           <Link to={'/detail'}>
           <img src={"https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d"}  alt={'puppy'} width={"100%"} height={"100%"}/>
           </Link>
       </motion.div>
    )
}
