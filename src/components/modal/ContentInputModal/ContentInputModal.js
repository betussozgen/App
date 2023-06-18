import React from 'react';
import { View, TextInput } from 'react-native';
import Modal from 'react-native-modal'

import Button from '../../Button';

import styles from './ContentInputModal.style';



const ContentInputModal = ({ visible, onClose, onSend }) => {

    const [text, setText] = React.useState(null);

    //text componenti boş bir değerse fonksiyonu çalıoştırma. Varsa text componenti gönder setTexti null çevir.
    function handleSend() {
        if (!text) {
            return;
        }
        onSend(text);
        setText(null);
    }

    return (
        <Modal
            style={styles.modal}
            isVisible={visible}
            swipeDirection="down"
            //Kapatma işlemleri.
            onSwipeComplete={onClose} //aşağı doğru sürükleyerek kapatma işlemi
            onBackdropPress={onClose} // arka planda bir yere bastığım zaman tetiklenecek.
            onBackButtonPress={onClose}//Geri tuşuna bastığımız zaman kapatma işlemi.
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder='Darla hadi milleti...'
                        onChangeText={setText}
                        multiline />
                </View>

                <Button text="Gönder" onPress={handleSend} />
            </View>
        </Modal>

    )
}

export default ContentInputModal;