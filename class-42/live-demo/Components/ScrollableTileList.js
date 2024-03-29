import { ScrollView, HStack }  from 'native-base';

const ScrollTileList = ({data, renderItem}) => {
  const Stack = () => data ? 
  <HStack space={3} justifyContent="center" minH={20} display="flex" flexWrap="wrap">
    {data.map(pokemon => renderItem(pokemon))}
  </HStack>
  : null;

  return (
    <ScrollView>
      <Stack />
    </ScrollView>
  )

};

export default ScrollTileList;
