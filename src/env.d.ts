/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_START_DATE: string
  readonly PUBLIC_NUMBER_OF_DAYS: number
  readonly PUBLIC_EXCERPT_LENGTH: number
  readonly PUBLIC_SHOW_SEARCH: boolean
  readonly FIREBASE_PRIVATE_KEY_ID: string
  readonly FIREBASE_PRIVATE_KEY: string
  readonly FIREBASE_PROJECT_ID: string
  readonly FIREBASE_CLIENT_EMAIL: string
  readonly FIREBASE_CLIENT_ID: string
  readonly FIREBASE_AUTH_URI: string
  readonly FIREBASE_TOKEN_URI: string
  readonly FIREBASE_AUTH_CERT_URL: string
  readonly FIREBASE_CLIENT_CERT_URL: string
  readonly SENDGRID_KEY: string
  readonly SENDGRID_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
