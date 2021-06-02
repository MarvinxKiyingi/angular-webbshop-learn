export class Movie {
  added: string;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  productCategory: [];
  year: number;

  constructor(
    Id: number,
    Name: string,
    ImageUrl: string,
    Description: string,
    Price: number,
    Year: number,
    Added: string,
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
}
