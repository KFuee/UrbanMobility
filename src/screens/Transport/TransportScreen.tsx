import { StyleSheet, View } from 'react-native';
import TransportCategories from '../../components/Transport/Landing/Categories';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default function TransportView() {
  return (
    <View style={styles.container}>
      <TransportCategories />
    </View>
  );
}
