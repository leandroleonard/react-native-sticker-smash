import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function NotFound() {
    return (
        <>
            <View style={styles.container}>
                <Link href="/">Go to the Home Screen</Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
    },
});
