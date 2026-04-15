import { pathToFileURL } from 'node:url'
import path from 'node:path'

const projectRoot = process.cwd()

export async function resolve(specifier, context, defaultResolve) {
  if (specifier.startsWith('@/')) {
    const resolvedPath = path.join(projectRoot, 'src', specifier.slice(2))
    return defaultResolve(pathToFileURL(`${resolvedPath}.ts`).href, context, defaultResolve)
  }

  return defaultResolve(specifier, context, defaultResolve)
}
