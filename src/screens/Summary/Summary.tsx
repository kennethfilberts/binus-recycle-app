import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  backgroundTheme,
  blackTheme,
  hotPinkTheme,
  lightPinkTheme,
} from '../../assets/colors';
import EarthImage from './components/images/earth';
import Stats from './components/Stats';
import {WasteTypeCard} from './components/WasteTypeCard';
import {EcoCoins} from './components/EcoCoins';
import {Favorite} from './components/Favorite';
import {
  disabledPinkTheme,
  yellowGreenTheme,
  lightPurpleTheme,
} from '../../assets/colors';
import {Float, Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {useSelector} from 'react-redux';
import {RootState} from 'src/redux/Store';
import axios from 'axios';
import {RefreshControl} from 'react-native-gesture-handler';
import {BASE_URL} from '@env';

export default function Summary() {
  const [recycledItem, setRecycledItem] = useState<Float | null>(null);
  const [totalTransaction, setTotalTransaction] = useState<Int32 | null>(null);
  const [missionDone, setMissionDone] = useState<Int32 | null>(null);
  const [totalCoinsEarned, setTotalCoinsEarned] = useState<Int32 | null>(null);
  const [totalCoinsSpent, setTotalCoinsSpent] = useState<Int32 | null>(null);
  const [cardboard, setCardboard] = useState<Float>(0);
  const [paper, setPaper] = useState<Float>(0);
  const [plastic, setPlastic] = useState<Float>(0);
  const [metal, setMetal] = useState<Float>(0);
  const [glass, setGlass] = useState<Float>(0);

  const [refreshing, setRefreshing] = useState(false);

  const studentId = useSelector((state: RootState) => state.auth.StudentID);
  const urlCategory = `${BASE_URL}/api/v1/category`;
  const urlRecycledItem = `${BASE_URL}/api/v1/recycle/history/${studentId}`;
  const urlMissionDone = `${BASE_URL}/api/v1/daily-mission/history/${studentId}`;
  const urlEcoSpent = `${BASE_URL}/api/v1/purchase/history/${studentId}`;

  const [favouriteCategory, setFavouriteCategory] = useState<string>('');
  const [categoryIdList, setCategoryList] = useState<String[] | null>(null);

  useEffect(() => {
    const getCategoryId = async () => {
      const datas = await axios.get(urlCategory, {timeout: 3000});
      const data = datas.data.data.map((id: any) => id.CategoryID);
      setCategoryList(data);
    };

    getCategoryId();
  }, [urlCategory]);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    const getTotalCategoryWeight = () => {
      categoryIdList?.map(async (id: String) => {
        const response = await axios.get(
          `${BASE_URL}/api/v1/recycle/history/${studentId}/${id}`,
          {timeout: 3000},
        );
        const total =
          Math.round(
            response.data.data.reduce(
              // eslint-disable-next-line @typescript-eslint/no-shadow
              (sum: any, id: any) => (sum += id.ItemWeight),
              0,
            ) * 100,
          ) / 100;

        if (id === 'CT001') {
          setCardboard(total);
        } else if (id === 'CT002') {
          setGlass(total);
        } else if (id === 'CT003') {
          setMetal(total);
        } else if (id === 'CT004') {
          setPaper(total);
        } else {
          setPlastic(total);
        }
      });
    };

    const getFav = () => {
      let highest: Float = Math.max(cardboard, glass, metal, paper, plastic);

      if (highest === cardboard) {
        setFavouriteCategory('Cardboard');
      } else if (highest === glass) {
        setFavouriteCategory('Glass');
      } else if (highest === metal) {
        setFavouriteCategory('Metal');
      } else if (highest === paper) {
        setFavouriteCategory('Paper');
      } else {
        setFavouriteCategory('Plastic');
      }
    };

    getFav();
    getTotalCategoryWeight();
  });

  useEffect(() => {
    const getTotalTransaction = async () => {
      const response = await axios.get(urlRecycledItem, {timeout: 3000});
      const data = response.data.data;

      const total = parseFloat(
        data
          .reduce((sum: number, item: any) => sum + item.ItemWeight, 0)
          .toFixed(1),
      );

      setRecycledItem(total);
      setTotalTransaction(response.data.data.length);
    };

    getTotalTransaction();
  }, [urlRecycledItem]);

  useEffect(() => {
    const getTotalMissionDone = async () => {
      const response = await axios.get(urlMissionDone, {timeout: 3000});
      const data = response.data.data;
      const total = data.reduce(
        (sum: any, id: any) => sum + id.PointsEarned,
        0,
      );

      setTotalCoinsEarned(total);
      setMissionDone(response.data.data.length);
    };

    getTotalMissionDone();
  }, [urlMissionDone]);

  useEffect(() => {
    const getCoinSpent = async () => {
      const response = await axios.get(urlEcoSpent, {timeout: 3000});
      const data = response.data.data;
      const total = data.reduce(
        (sum: any, id: any) => sum + id.PurchaseAmount,
        0,
      );

      setTotalCoinsSpent(total);
    };

    getCoinSpent();
  }, [urlEcoSpent]);

  return (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
      <ScrollView>
        <View style={styles.body}>
          <StatusBar
            backgroundColor={backgroundTheme}
            barStyle="dark-content"
          />
          <ImageBackground
            source={require('../../assets/images/summary/headerbackground.png')}
            style={styles.header_image}>
            <View style={styles.header}>
              <Text style={styles.header_text}>
                A heartfelt thank you to our eco-champions!
              </Text>
              <Text style={styles.header_subtext}>
                Your dedication to sustainability is truly inspiring, and
                together, we are making a significant difference.
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.eco_journey}>
            <View style={styles.eco_journey_header}>
              <Text style={styles.subheader_text}>My Eco Journey</Text>
              <EarthImage style={styles.subheader_image} />
            </View>

            <View style={styles.sustain_stats_container}>
              <Text style={styles.sustain_stats_title}>
                Sustainability Stats
              </Text>

              <View style={styles.stats_container}>
                <Stats
                  value={`${recycledItem} Kg`}
                  information={'Items Recycled'}
                />
                <Stats
                  value={totalTransaction}
                  information={'Total Transaction'}
                />
                <Stats value={missionDone} information={'Missions Done'} />
              </View>
            </View>

            <ScrollView horizontal>
              <View style={styles.type_container}>
                <WasteTypeCard
                  type="Plastic"
                  value={plastic}
                  color={disabledPinkTheme}
                />
                <WasteTypeCard
                  type="Metal"
                  value={metal}
                  color={yellowGreenTheme}
                />
                <WasteTypeCard
                  type="Glass"
                  value={glass}
                  color={lightPurpleTheme}
                />
                <WasteTypeCard
                  type="Cardboard"
                  value={cardboard}
                  color={hotPinkTheme}
                />
                <WasteTypeCard
                  type="Paper"
                  value={paper}
                  color={lightPinkTheme}
                />
              </View>
            </ScrollView>

            <View style={styles.last_row}>
              <EcoCoins spent={totalCoinsSpent} gathered={totalCoinsEarned} />
              <Favorite type={favouriteCategory} />
            </View>
          </View>
        </View>
      </ScrollView>
    </RefreshControl>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: backgroundTheme,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header_image: {
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    marginTop: 10,
  },

  header: {
    justifyContent: 'center',
    gap: 10,
  },

  header_text: {
    fontFamily: 'Poppins-Bold',
    color: blackTheme,
    fontSize: 20,
    width: 200,
  },

  header_subtext: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 12,
    width: 315,
  },

  eco_journey: {
    width: '92%',
    justifyContent: 'center',
    alignItems: 'baseline',
  },

  eco_journey_header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: -30,
  },

  subheader_text: {
    color: blackTheme,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },

  subheader_image: {
    marginRight: '8%',
  },

  sustain_stats_container: {
    backgroundColor: '#16C79A',
    width: '100%',
    borderRadius: 15,
    height: 120,
    zIndex: -1,
  },

  sustain_stats_title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    margin: 10,
  },

  stats_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },

  type_container: {
    marginTop: 20,
    gap: 15,
    flexDirection: 'row',
    marginBottom: 20,
  },

  last_row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
});
