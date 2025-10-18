import { NativeModule, requireNativeModule } from 'expo';

import { AudioRoute, ExpoAudioRouteModuleEvents } from './ExpoAudioRoute.types';

declare class ExpoAudioRouteModule extends NativeModule<ExpoAudioRouteModuleEvents> {
  getAudioRoute(): Promise<AudioRoute>;
}

export default requireNativeModule<ExpoAudioRouteModule>('ExpoAudioRoute');