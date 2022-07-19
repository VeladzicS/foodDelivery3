import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import  {FONTS, COLORS, SIZES, icons, images, dummyData} from "../../constants";
import {
    CartQuantityButton,
    Header,
    IconButton,
    IconLabel,
    LineDivider,
    Rating,
    StepperInput,
    TextButton
} from "../../components";



const FoodDetail = ({navigation}) => {

    const [foodItem, setFoodItem] = React.useState(dummyData.vegBiryani)
    const [selectedSize, setSelectedSize] = React.useState("")
    const [qty, setQty] = React.useState(1)
    function renderHeader() {
        return (
            <Header title="DETAILS" containerStyle={{height:50, marginHorizontal:SIZES.padding, marginTop:40}}
                    leftComponent={<IconButton icon={icons.back} containerStyle={{width:40, height:40, justifyContent:"center", alignItems:"center", borderWidth:1, borderRadius:SIZES.radius, borderColor:COLORS.gray2}} iconStyle={{width:20, height:20, tintColor:COLORS.gray2}} onPress={() => console.log("button")}/>}
                    rightComponent={<CartQuantityButton quantity={3}/>}/>
        )
    }
    function renderDetails() {
        return(
            <View style={{marginTop:SIZES.radius, marginBottom:SIZES.padding, paddingHorizontal:SIZES.padding}}>
                  <View style={{height:190, borderRadius:15, backgroundColor:COLORS.lightGray2}}>
                       <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:SIZES.base, paddingHorizontal:SIZES.radius}}>
                           <View style={{flexDirection:"row"}}>
                               <Image source={icons.calories} style={{width:30, height:30}}/>
                               <Text style={{color:COLORS.darkGray2, ...FONTS.body4}}> {foodItem?.calories} calories</Text>
                           </View>

                           <Image source={icons.love} style={{width:20, height:20, tintColor:foodItem?.isFavourite ? COLORS.primary : COLORS.gray}}/>
                       </View>
                      <Image source={foodItem?.image} resizeMode="contain" style={{height:170, width:"100%"}}/>
                  </View>

                <View style={{marginTop:SIZES.padding}}>
                    <Text style={{...FONTS.h1}}>
                        {foodItem?.name}
                    </Text>
                    <Text style={{marginTop:SIZES.base, color:COLORS.darkGray, textAlign:"justify", ...FONTS.body3}}>
                        {foodItem?.description}
                    </Text>

                     <View style={{flexDirection:"row", marginTop:SIZES.padding}}>
                         <IconLabel containerStyle={{backgroundColor:COLORS.primary, borderRadius:SIZES.radius}} icon={icons.star} label="4.5" labelStyle={{color:COLORS.white}}/>
                         <IconLabel containerStyle={{marginLeft:SIZES.radius, paddingHorizontal:0}} icon={icons.clock} iconStyle={{tintColor:COLORS.black}} label="30 min"/>
                         <IconLabel containerStyle={{marginLeft:SIZES.radius, paddingHorizontal:0}} icon={icons.dollar} iconStyle={{tintColor:COLORS.black}} label="Free Shipping"/>
                     </View>

                    <View style={{flexDirection:"row", marginTop:SIZES.padding, alignItems:"center"}}>
                        <Text style={{...FONTS.h3}}>
                            Sizes:
                        </Text>
                        <View style={{flexDirection:"row", flexWrap:"wrap", marginLeft:SIZES.padding}}>
                            {dummyData.sizes.map((item, index) => {
                                return(
                                      <TextButton key={`Sizes-${index}`} buttonContainerStyle={{backgroundColor:selectedSize == item.id ? COLORS.primary : null,width:55, height:55, margin:SIZES.base, borderWidth:1, borderRadius:SIZES.radius, borderColor:selectedSize == item.id ? COLORS.primary : COLORS.gray2}}
                                                  labelStyle={{color:selectedSize == item.id  ? COLORS.white : COLORS.gray2, ...FONTS.body2}} label={item.label}
                                                  onPress={() => setSelectedSize(item.id)}
                                      />
                                )
                            })}
                        </View>
                    </View>

                </View>
            </View>
        )
    }
  function renderRestaurant() {
      return(
          <View style={{flexDirection:"row", marginVertical:SIZES.padding, paddingHorizontal:SIZES.padding, alignItems:"center"}}>
              <Image source={images.profile} style={{width:50, height:50, borderRadius:SIZES.radius}}/>

              <View style={{flex:1, marginLeft:SIZES.radius, justifyContent:"center"}}>
                  <Text style={{...FONTS.h3}}>BySeky</Text>
                  <Text style={{...FONTS.body4, color:COLORS.gray}}>1.2Km away from you</Text>
              </View>

              <Rating rating={4} iconStyle={{marginLeft:3}}/>


          </View>
      )
  }

  function renderFooter() {
      return (
          <View style={{
              flexDirection:"row",
              height:120,
              alignItems:"center",
              paddingHorizontal:SIZES.padding,
              paddingBottom:SIZES.radius
          }}>
              <StepperInput value={qty} onAdd={() => setQty((qty) => qty + 1)} onMinus={() => {if(qty > 1) { setQty((qty) => qty - 1) }}}/>
              <TextButton buttonContainerStyle={{flex:1, flexDirection:"row", height:60, marginLeft:SIZES.radius, paddingHorizontal:SIZES.radius, borderRadius:SIZES.radius,backgroundColor:COLORS.primary}} label="Buy Now" label2="$15.99" onPress={() => navigation.navigate("MyCart")}/>
          </View>
      )
  }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white
            }}
        >
            {renderHeader()}

            <ScrollView>
                {renderDetails()}
                <LineDivider/>
                {renderRestaurant()}
                <LineDivider/>
                {renderFooter()}
            </ScrollView>
        </View>
    )
}

export default FoodDetail;