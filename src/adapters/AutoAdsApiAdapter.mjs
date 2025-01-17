export default class AutoAdsApiAdapter {
  /**
   *
   * @param data
   * @returns Object with convert data
   */
  async convert(data) {
    if (!data) {
      throw new Error('Adapter: no data from provider');
    }
    return data.map((ads) => {
      const images = ads.images.map((item) => ({
        href: item.imgurl,
        rel: 'image'
      }));
      const params = {
        doorCount: ads.params['Количество дверей'],
        usedType: ads.params['Тип автомобиля'],
        carModel: ads.params['Модель'],
        carBody: ads.params['Тип кузова'],
        condition: ads.params['Состояние'],
        carTransmission: ads.params['Коробка передач'],
        yearOfProduction: ads.params['Год выпуска'],
        carManufacturer: ads.params['Марка'],
        wheelPosition: ads.params['Руль'],
        driveAuto: ads.params['Привод'],
        carEngineType: ads.params['Тип двигателя'],
        carMileage: ads.params['Пробег'],
        owners: ads.params['Владельцев по ПТС'],
        engineLiters: ads.params['Объём двигателя, л'],
        color: ads.params['Цвет']
      };
      return {
        idSource: ads.id,
        title: ads.title,
        adsDate: ads.time,
        description: ads.description,
        phone: ads.phone,
        typeId: Number(ads.nedvigimost_type_id),
        data: params,
        images: images,
        category: ads.cat2,
        categoryId: ads.cat2_id,
        region: ads.region
      };
    });
  }
}
