{
  //interface with generic

  interface genericWithInterface<T> {
    computerName: string;
    computerBrand: string;
    computerModel: string;
    computerPrice: number;
    fetures: T;
  }

  const poorPeople: genericWithInterface<{
    micropone: string;
    cameraModel: string;
    speecar: string;
  }> = {
    computerName: "Hp",
    computerBrand: "HP",
    computerModel: "HP-696",
    computerPrice: 40000,
    fetures: {
      micropone: "Mac",
      cameraModel: "456qw",
      speecar: "toshiba",
    },
  };

  const richPeople: genericWithInterface<{
    headphone: string;
    blutooth: string;
  }> = {
    computerName: "Hp",
    computerBrand: "HP",
    computerModel: "HP-696",
    computerPrice: 40000,
    fetures: {
      headphone: "Mac",
      blutooth: "456qw",
    },
  };

  //end
}
