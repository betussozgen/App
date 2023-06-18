import React from "react";
import { SafeAreaView, Text } from 'react-native';
import FloatingButton from "../../components/FloatingButton";

import styles from './Messages.style';
import ContentInputModal from "../../components/modal/ContentInputModal";


const Message = () => {

    const [inputModalVisible, setInputModalVisible] = React.useState(false);

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);

    }

    //İçerik göndermek istediğimizde
    function handleSendContent(content) {
        console.log(content);

    }

    return (
        <SafeAreaView style={styles.container}>
            <FloatingButton icon="plus" onPress={handleInputToggle} />

            <ContentInputModal
                visible={inputModalVisible}
                onClose={handleInputToggle}
                onSend={handleSendContent}
            />
        </SafeAreaView>
    )
}
export default Message;