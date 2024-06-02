interface recommendedUser{
id:number;
img:string;
username: string;
suggested:boolean;
followed: boolean;

}
export const recommendedUser:recommendedUser[]=[{
    id:1,
    img:'./images/megan.jpg',
    username:'Janedoe_103', 
    suggested:true,
    followed: false


},{
    id:2,
    img:'./images/imagesk.jpg',
    username:'JenniferH_22', 
    suggested:true,
    followed: false


},{
    id:3,
    img:'./images/bandido.jpg',
    username:'bandido_Inc23.', 
    suggested:true,
    followed: false

},{
    
        id:4,
        img:'./images/rauw.jpg',
        username:'rauw_alejandro', 
        suggested:true,
        followed: false

    
},{
    id:5,
    img:'./images/perver.jpg',
    username:'le_dimo_to', 
    suggested:true,
    followed: false

},{
    id:6,
    img:'./images/alfa.jpg',
    username:'elalfaeljefe', 
    suggested:true,
    followed: false

}
]