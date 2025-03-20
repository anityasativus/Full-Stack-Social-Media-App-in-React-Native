import { Dimensions } from "react-native";

const{width: diviceWidth, height: diviceHeight} = Dimensions.get('window');

const hp=percentage=>{
    return (percentage * diviceHeight) / 100;
}
const wp=percentage=>{
    return (percentage * diviceHeight) / 100;
}