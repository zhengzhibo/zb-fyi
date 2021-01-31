declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
  }


  declare module '*.md' {
    const html:string;
    const attributes: object;
  }
