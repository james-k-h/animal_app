class Animal {
    constructor(
      id,
      categoryIds,
      title,
      animal_class,
      animal_family,
      imageUrl,
      genus,
      distribution,
      description,
      animal_diet,
    ) {
      this.id = id;
      this.categoryIds = categoryIds;
      this.title = title;
      this.imageUrl = imageUrl;
      this.distribution = distribution;
      this.description = description;
      this.genus = genus;
      this.animal_family = animal_family;
      this.animal_class = animal_class;
      this.animal_diet = animal_diet;
    }
  }
  
  export default Animal;
  