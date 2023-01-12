import AsyncStorage from "@react-native-async-storage/async-storage";

async function setAccount(data) {
    return await AsyncStorage.set('account', data);
}

async function getAccount() {
    return await AsyncStorage.get('account');
}

export default {
    setAccount,
    getAccount
};