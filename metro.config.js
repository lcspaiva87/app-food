// Todo: Verificar se é necessário usar o require
// @ts-expect-error
const { getDefaultConfig } = require('expo/metro-config')
// @ts-expect-error
const { withNativeWind } = require('nativewind/dist/metro/index.js')

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './styles/global.css' })
