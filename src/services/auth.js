import AsyncStorage from "@react-native-async-storage/async-storage";

async function setAccount(data) {
    return await AsyncStorage.set('account', data);
}

export default {

    setAccount
};