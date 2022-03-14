import { useCallback, useMemo } from 'react';
import { Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import PlaceCard from './PlaceCard';

import { attractions } from '../../../data/exploreData';

const styles = StyleSheet.create({
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 16,
    marginHorizontal: 16,
  },

  contentContainer: {
    marginHorizontal: 16,
    backgroundColor: '#FFF',
  },
});

function CustomBottomSheet({ sheetRef, index, onChange, category }: any) {
  // memoized values
  const data = useMemo(() => attractions, []);
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  const renderItem = useCallback(
    ({ item }) => (
      <PlaceCard
        id={item.id}
        title={item.title}
        rating={item.rating}
        image={item.image}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={index}
      snapPoints={snapPoints}
      onChange={onChange}
      backgroundStyle={{ borderRadius: index !== 2 ? 16 : 0 }}
    >
      <Text style={styles.listTitle}>
        56 resultados para &quot;{category}&quot;
      </Text>

      <BottomSheetFlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </BottomSheet>
  );
}

export default CustomBottomSheet;
