import p1 from "./assets/ECOMMERCE-FINAL.jpg";
import p2 from "./assets/MOVIE-FINAL.jpg";
// import p3 from "./assets/project-3.png";
// import p4 from "./assets/project-4.png";
import p5 from "./assets/CRYPTO-FINAL.jpg";
// import p6 from "./assets/project-6.png";
// import {useNavigate} from "react-dom"

const url1 ="https://64f395ecdbe81d2d5bf3c180--magical-ganache-371583.netlify.app/"
const url2="https://64f370e13dd92a199cfcfa00--playful-haupia-32f110.netlify.app/"
const url3="https://64ea2f367acdd65d417b99ee--coruscating-baklava-bfbe4e.netlify.app/"

// const navigate = useNavigate()
export const filters = [
    // {
    //     name: "All",
    //     id: "all",
    // },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    // {
    //     name: "Mobile App",
    //     id: "mobile-app",
    // },
    // {
    //     name: "Website",
    //     id: "website",
    // },
];

export const projects = [
    {
        name: 'Ecommerce-WebAPP',
        
        image: [p1],
    
        tags: ["dashboard", "mobile-app"],
        urls:`${url1}`
    },
    {
        name: "Movix",
        image:  [p2],
        tags: ["dashboard", "website"],
        urls:`${url2}`
    },
    // {
    //     name: "The Art of Hiring",
    //     image: p3,
    //     tags: ["mobile-app"],
    // },
    // {
    //     name: "We Are Solving Global Problems",
    //     image: p4,
    //     tags: ["mobile-app"],
    // },
    {
        name: "Crypto-Pulse",
        image: p5,
        tags: ["website", "dashboard"],
        urls:`${url3}`
    },
    // {
    //     name: "Saving Photo Memories",
    //     image: p6,
    //     tags: ["website"],
    // },
];

export const achievements = [
    {
        id: 1,
        year: 10,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 0,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 10,
        description: "TECHNOLOGIES",
    },
    // {
    //     id: 4,
    //     year: 70,
    //     description: "COMMUNITY<br />POSTS",
    // },
];
