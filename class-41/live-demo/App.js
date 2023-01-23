import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      const { data } = await Contacts.getContactsAsync();
      // console.log(data[0]);
      // const parsedData = JSON.parse(data);
      setContacts(data);
    };
    getContacts();
  }, []);

  const call = (contact) => {
    let phoneNumber = contact.phoneNumbers[0].number;

    const link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
    .then(supported => Linking.openURL(link))
    .catch(e => console.error(e));
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Button onPress={() => call(item)} style={styles.button} title={item.name} />
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.title}>
          <Text>Contacts</Text>
        </View>
        <View>
          <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 100,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 25,
  },
  button: {
    fontSize: 16,
  }
});
