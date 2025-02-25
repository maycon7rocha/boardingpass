import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { Home } from './src/app/home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null
  }
  
  return (
    <Home />
  );
}

