import styled from 'styled-components/native'

import { ArrowLeft } from 'lucide-react-native'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(ArrowLeft).attrs(() => ({
  size: 36,
  color: '#1B1D1E',
}))``

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const AvatarContainer = styled.View`
  justify-items: center;
  align-items: center;

  width: 45px;
  height: 45px;
  border-color: #333638;
  border: 3px;
  border-radius: 100px;
  box-sizing: border-box;
  object-fit: cover;
`
export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`
export const HeaderContent = styled.View`
  align-items: center;
  flex-direction: row;
  width: 45%;
  padding: 0 24px;
`
