
import AppRoutes from './src/routes';
import {ProfileProvider} from './src/contexts/profile'
import { TrendingImageProvider } from './src/contexts/trendingImage';

export default function App() {
  return (
    <ProfileProvider>
      <TrendingImageProvider>
        <AppRoutes/>
      </TrendingImageProvider>
    </ProfileProvider>
  );
}
