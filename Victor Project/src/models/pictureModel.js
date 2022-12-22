class Picture {
  url;
  #cerdit;
  constructor(Picture, array = []) {
    const { url, cerdit } = Picture;
    this.#cerdit = cerdit;
    this.url = url;
  }
}
export default Picture;
