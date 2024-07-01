export type ComponentProps<T> = T extends React.ComponentType<infer P> | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never
