import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';

const SpriteComponent = ({url}) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(response => {
        setTimeout(() => {
          setData(response);
        }, 1000);
      });
  }, [url]);

  const renderAbilities = abilities => {
    return abilities.map(item => (
      <View>
        <Text style={{color: 'white'}}>{item.ability.name}</Text>
      </View>
    ));
  };
  return (
    <>
      <View>
        {data ? (
          <Image
            style={{width: 200, height: 200}}
            source={{uri: data.sprites.front_default}}
          />
        ) : (
          <Text>Se esta cargando el sprite</Text>
        )}
      </View>
      {renderAbilities(data.abilities)}
    </>
  );
};
const PokemonList = () => {
  const [dataPokemon, setDataPokemon] = useState<any | null | undefined>(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(data => data.json())
      .then(response => {
        setDataPokemon(response);
      });
  }, []);

  const renderItem = pokemon => {
    return (
      <View
        style={{
          borderWidth: 1,
          backgroundColor: 'brown',
        }}>
        <Text style={{color: 'white'}}>Pokemon: {pokemon.item.name}</Text>
        <SpriteComponent url={pokemon.item.url} />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView>
        <View
          style={{
            alignItems: 'center',
            marginTop: 50,
            backgroundColor: 'blue',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 32}}>
            Lista de Pokemones
          </Text>
          <View style={{marginLeft: 12}}>
            <Image
              style={{width: 28, height: 28}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/481px-Pokebola-pokeball-png-0.png',
              }}
            />
          </View>
        </View>

        <View>
          {dataPokemon ? (
            <FlatList data={dataPokemon.results} renderItem={renderItem} />
          ) : (
            <Text>Aun no se ha cargado la lista de pokemones</Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default PokemonList;
