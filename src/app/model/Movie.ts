export class Movie {
  added: String;
  description: String;
  id: Number;
  imageUrl: String;
  name: String;
  price: Number;
  productCategory: [];
  year: Number;

  constructor(
    Id: Number,
    Name: String,
    ImageUrl: String,
    Description: String,
    Price: Number,
    Year: Number,
    Added: String,
    ProductCategory: []
  ) {
    this.id = Id;
    this.name = Name;
    this.imageUrl = ImageUrl;
    this.description = Description;
    this.price = Price;
    this.year = Year;
    this.added = Added;
    this.productCategory = ProductCategory;
  }
  // export class Movie {
  //   constructor(
  //     private Added: String,
  //     private description: String,
  //     private id: Number,
  //     private imageUrl: String,
  //     private name: String,
  //     private price: Number,
  //     private productCategory: [],
  //     private year: Number
  //   ) {}
  // }
}
