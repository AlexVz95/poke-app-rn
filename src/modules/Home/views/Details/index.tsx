import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Spiderman 1',
    url: 'https://pasionporelcine.net/wp-content/uploads/2019/06/Spiderman-1-Tobey-Maguire-1024x687.jpeg.webp',
    isVisible: true,
    name: 'Tobey_Maguire',
  },
  {
    id: '2',
    title: 'Spiderman 2',
    url: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/andrew-garfield-spider-man.jpg?w=2247&ssl=1',
    isVisible: false,
    name: 'Andrew Garfield',
  },
  {
    id: '3',
    title: 'Spiderman 3',
    url: 'https://hipertextual.com/wp-content/uploads/2021/08/tom-holland-spider-man.jpg',
    isVisible: false,
    name: 'Tom Holland',
  },
  {
    id: '4',
    title: 'Spiderman 3',
    url: 'https://hipertextual.com/wp-content/uploads/2021/08/tom-holland-spider-man.jpg',
    isVisible: false,
    name: 'Tom Holland',
  },
];

const Item = ({title, url, id, isVisible, setVisible, name}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image style={{width: 100, height: 100}} source={{uri: url}} />
      <View style={{width: '25%'}}>
        <Button
          title={'See name'}
          onPress={() => {
            setVisible(id);
          }}
        />
      </View>
      {isVisible ? <Text>{name}</Text> : null}
    </View>
  );
};

const Details = () => {
  const [dataArr, setDataArr] = useState(DATA);
  const setVisible = id => {
    const dataTmp: any = [];

    dataArr.forEach(x => dataTmp.push(x));
    const index = dataTmp.findIndex(x => x.id === id);
    dataTmp[index].isVisible = !dataTmp[index].isVisible;
    setDataArr(dataTmp);
  };

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      url={item.url}
      id={item.id}
      isVisible={item.isVisible}
      setVisible={setVisible}
      name={item.name}
    />
  );

  useEffect(() => {}, [dataArr, setDataArr]);
  return (
    <SafeAreaView>
      <View>
        <Text>Aqui se presentara todo lo relacionado a los detalles</Text>
      </View>

      <View>
        <FlatList
          data={dataArr}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Details;
