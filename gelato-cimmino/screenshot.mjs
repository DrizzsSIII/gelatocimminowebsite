import puppeteer from 'puppeteer'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const url = process.argv[2] || 'http://localhost:3000'
const label = process.argv[3] || ''

const dir = './screenshots'
if (!existsSync(dir)) mkdirSync(dir)

const files = existsSync(dir)
  ? (await import('fs')).readdirSync(dir).filter(f => f.endsWith('.png'))
  : []
const n = files.length + 1
const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`
const outPath = join(dir, filename)

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
await page.screenshot({ path: outPath, fullPage: true })
await browser.close()

console.log(`Saved: ${outPath}`)
