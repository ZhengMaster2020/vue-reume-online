/**
 * 工厂模式
 * 分类：简单（静态）工厂方法、工厂方法、抽象工厂方法、
 * 作用： 解耦，用工程方法替代用new关键字实例对象
 * 场景：创建对象及其复杂， 相同属性的对象
 * 实例：jquery.$ Vue.components React.createElement
 */
class Phone {
  constructor(options) {
    this.brand = options.brand;
    this.model = options.model;
    this.price = options.price;
    console.log(this, 'this');
  }
  watchVideo(videoName) {
    console.log(
      `you are using ${this.model} mobile phone of ${this.brand} to watch ${videoName}`
    );
  }
}

const createPhone = function createPhoneFactory(phoneParams) {
  console.log(this instanceof createPhoneFactory, 'createPhoneFactory');
  return new Phone(phoneParams);
};

const huawei_P30 = createPhone({ brand: '华为', model: 'P30', price: 4999 });
huawei_P30.watchVideo('功夫熊猫');
