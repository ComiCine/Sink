import { applyD1Migrations, env } from 'cloudflare:test'
import { beforeAll, vi } from 'vitest'

vi.stubGlobal('useRuntimeConfig', () => ({
  app: { baseURL: '/' },
  siteTokenUser: '',
}))

beforeAll(async () => {
  await applyD1Migrations(env.DB, env.TEST_MIGRATIONS)
})
