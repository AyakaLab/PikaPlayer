import handleOption from './options';
class PikaPlayer {
    constructor(options) {
        this.options = handleOption(options)
        this.container = this.options.container
        const div = document.createElement('div')
        this.container.appendChild(div)
        const img = document.createElement('img')
        // img.src = this.options.audio[0].cover
        div.appendChild(img)
    }
}

console.log('linked')

export default PikaPlayer;