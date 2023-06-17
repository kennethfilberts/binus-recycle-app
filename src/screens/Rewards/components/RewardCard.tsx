import React from "react";
import { View, Text, StyleSheet } from "react-native";
interface rewardInfoProps {
    rewardID : String
    rewardName : String, 
    rewardDescription : String,
    rewardPoint : number
}

interface rewardInfoData {
}
const RewardCard = ({rewardName, rewardPoint}:rewardInfoProps ) => {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
    return(

    );
};

export default RewardCard;