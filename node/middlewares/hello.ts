export async function hello(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body = "Olá time, VTEX"

  await next()
}
