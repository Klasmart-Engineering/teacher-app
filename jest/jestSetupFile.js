import mockFirebaseCrashlytics from './mocks/@react-native-firebase/crashlytics';

jest.mock('@react-native-firebase/crashlytics', () => mockFirebaseCrashlytics);