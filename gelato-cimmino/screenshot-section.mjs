import puppeteer from 'puppeteer'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const url = process.argv[2] || 'http://localhost:3000'
const scrollY = parseInt(process.argv[3] || '0')
const label = process.argv[4] || 'section'

const dir = './screenshots'
if (!existsSync(dir)) mkdirSync(dir)
const files = (await import('fs')).readdirSync(dir).filter(f => f.endsWith('.png'))
const n = files.length + 1
const outPath = join(dir, `screenshot-${n}-${label}.png`)

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 800 })
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
await page.evaluate((y) => window.scrollTo(0, y), scrollY)
await new Promise(r => setTimeout(r, 500))
await page.screenshot({ path: outPath })
await browser.close()
console.log(`Saved: ${outPath}`)
