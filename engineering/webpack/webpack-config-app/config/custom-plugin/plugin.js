

// import { RawSource } from 'webpack-sources';
const {RawSource} = require('webpack-sources')
console.log(RawSource);
const PLUGIN_NAME = 'WebpackSizePlugin'

class WebpackSizePlugin {

  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    const {output} = compiler.options
    let total = 0
    compiler.hooks.emit.tap(
      PLUGIN_NAME,
      (compilation) => {
        const {assets} = compilation
        const buildSize = {}
        for (const key in assets) {
          const size = assets[key].size()
          buildSize[key] = size
          total += size
        }
        buildSize.total = total
        assets[output.publicPath + (this.options.fileName || 'build-size.json')] = new RawSource(JSON.stringify(buildSize, null, 4))

      }
    )




  }

}


module.exports = WebpackSizePlugin