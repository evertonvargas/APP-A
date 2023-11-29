export async function routeprivatetest2(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body = "Sou a rota privada de teste 2"

  await next()
}
