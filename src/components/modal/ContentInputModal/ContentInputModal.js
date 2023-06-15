import React from 'react';
import { View, TextInput } from 'react-native';
import Modal from 'react-native-modal'

import styles from './ContentInputModal.style';
import Button from '../../Button';

const ContentInputModal = ({ visible, onClose, onSend }) => {
    const [text, setText] = React.useState('');

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >
            <View style={styles.container}>
                <TextInput
                    placeholder='Darla hadi milleti...'
                    onChangeText={setText} />
                <Button text="Gönder" onPress={() => onSend(text)} />
            </View>
        </Modal>

    )
}

export default ContentInputModal;