/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string; // our custom env var
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
