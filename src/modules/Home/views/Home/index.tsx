import React, {useState} from 'react';
import {Button, Image, SafeAreaView, Text, TextInput, View} from 'react-native';

const Home = ({navigation}) => {
  const [name, setName] = useState<string>('Ramon');

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          marginTop: 50,
          backgroundColor: 'red',
        }}>
        <Text style={{color: '#FFFFFF', fontSize: 32}}>
          Hola Mundo, Taller para el Tec
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 50,
        }}>
        <TextInput
          value={name}
          onChangeText={setName}
          style={{borderWidth: 1, width: '70%', borderRadius: 8}}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontSize: 18}}>
          Hola alumno/a: {name}. Gracias por ver el taller
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 50}}>
        <Image
          style={{
            width: 300,
            height: 300,
          }}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1178942318981701634/d5qM22Ft_400x400.jpg',
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontSize: 18}}>Es hora de recorrer tu propio camino</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Button
          title={'Go to details'}
          onPress={() => navigation.navigate('Details')}
        />

        <Button
          title={'Go to pokemons'}
          onPress={() => navigation.navigate('PokemonList')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
