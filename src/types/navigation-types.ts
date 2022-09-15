import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainStackParamList = {
  Storefront: undefined;
  Search: { query?: string };
  Product: { id: number };
  Error: { message?: string };
  Counter: undefined;
};

export type FeedStackParamList = {
  Notifications: { sort: 'latest' | 'top' } | undefined;
};

export type ChatStackParamList = {
  Messages: { sort: 'latest' | 'top' } | undefined;
};

export type CheckoutStackParamList = {
  Cart: undefined;
};

export type AccountStackParamList = {
  Profile: undefined;
  Login: undefined;
  EditProfile: undefined;
};

export type RootBotomTabParamList = {
  Main: NavigatorScreenParams<MainStackParamList>;
  Feed: NavigatorScreenParams<FeedStackParamList>;
  Chat: NavigatorScreenParams<ChatStackParamList>;
  Checkout: NavigatorScreenParams<CheckoutStackParamList>;
  Account: NavigatorScreenParams<AccountStackParamList>;
};

export type AccountTabRouteProps<T extends keyof AccountStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<AccountStackParamList, T>,
  StackScreenProps<RootBotomTabParamList>
>;

export type ChatTabRouteProps<T extends keyof ChatStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<ChatStackParamList, T>,
  StackScreenProps<RootBotomTabParamList>
>;

export type CheckoutTabRouteProps<T extends keyof CheckoutStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<CheckoutStackParamList, T>,
  StackScreenProps<RootBotomTabParamList>
>;

export type FeedTabRouteProps<T extends keyof FeedStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<FeedStackParamList, T>,
  StackScreenProps<RootBotomTabParamList>
>;

export type MainTabRouteProps<T extends keyof MainStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainStackParamList, T>,
  StackScreenProps<RootBotomTabParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootBotomTabParamList {}
  }
}
