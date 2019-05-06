const setPreviewImage = (image) => {
  const { log } = console;
  try {
    if (typeof image === 'string') {
      return image;
    }
    if (typeof image === 'object') {
      return URL.createObjectURL(new File(image, { type: 'application/zip' }));
    }
    return 'https://via.placeholder.com/700x400';
  } catch (error) {
    log(error);
    return 'https://via.placeholder.com/700x400';
  }
};

export default setPreviewImage;
