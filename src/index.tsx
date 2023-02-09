import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-poc-module' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type PocModuleProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'PocModuleView';

export const PocModuleView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<PocModuleProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
