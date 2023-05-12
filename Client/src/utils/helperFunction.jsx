export const importImage = function (name) {
    try {
      return require(`../assets/${name}.svg`);
    } catch (error) {
      console.error(`Failed to load image: ${name}`);
      return null;
    }
  };