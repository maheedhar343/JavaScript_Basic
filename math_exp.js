//functions for valume of cube and cuboid which are exported to userinput.js 
const cube_val = (side) => {
    return side**3;
};
const cuboid_val=(l,b,h) => {return l*h*b;};
module.exports={cube_val,cuboid_val}