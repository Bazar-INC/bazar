/// <reference types="vite/client" />

interface ImportMetaEnv {
   readonly VITE_REMOTE_HOST_NAME: string;
}

interface ImportMeta {
   readonly env: ImportMetaEnv;
}
