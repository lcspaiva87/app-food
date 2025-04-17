// Todo: Verificar se é necessário usar o require
// @ts-expect-error
const { getDefaultConfig } = require('expo/metro-config')
// @ts-expect-error
const { withNativeWind } = require('nativewind/dist/metro/index.js')

const config = getDefaultConfig(__dirname)

// Adiciona suporte para SVG
const { transformer, resolver } = config
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
}
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg'],
}

module.exports = withNativeWind(config, { input: './styles/global.css' })
