import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useGetAxios from './hooks/getAxios';
import { Box, Button, Center, NativeBaseProvider, VStack } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import ScrollTileList from './Components/ScrollableTileList';
import * as Haptics from 'expo-haptics';


const config = {
  dependencies: {
    'linear-gradient': LinearGradient
  }
};

export default function App() {
  const { results, getNext, next } = useGetAxios('https://pokeapi.co/api/v2/pokemon');

  // console.log({ results }, { next });

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <NativeBaseProvider config={config}>
      <Box safeArea>
        <Box bg={{
          linearGradient: {
            colors: ['muted.600', 'violet.800'],
            start: [0, 0],
            end: [1, 0]
          }
        }} p="5" rounded="xl" _text={{
          fontSize: 'md',
          fontWeight: 'medium',
          color: 'warmGray.50',
          textAlign: 'center'
        }}>
          Pokemon List
        </Box>

        <VStack space={3} alignItems="center">


          <ScrollTileList
            data={results}
            // renderItem={(item) => (
            //   <Center
            //     key={item.url}
            //     onPress={() => Haptics.selectionAsync()}
            //     w="40%"
            //     bg={{
            //       linearGradient: {
            //         colors: ['amber.700', 'violet.800'],
            //         start: [0, 0],
            //         end: [1, 0]
            //       }
            //     }}
            //     p="2"
            //     m="1"
            //     _text={{
            //       fontSize: 'md',
            //       fontWeight: 'medium',
            //       color: 'warmGray.50',
            //       textAlign: 'center'
            //     }}

            //   >
            //     {item.name}
            //   </Center>)}
              renderItem={(item) => (
                <Button
                  key={item.url}
                  onPress={() => Haptics.selectionAsync()}
                  size="md"
                  m="1"
                >
                  {item.name}
                </Button>)}
          // keyExtractor={item => item.url}
          />
        </VStack>
        <Button onPress={() => getNext(next)} >Next</Button>


        
        {/* <StatusBar style="auto" /> */}

      </Box>

    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
