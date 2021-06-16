/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "develop" | "production" | "taging"
    readonly PUBLIC_URL: string
  }
}
