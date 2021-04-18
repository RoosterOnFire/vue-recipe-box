declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@heroicons/vue/*' {
  const content: any;
  export default content;
}
