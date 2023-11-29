export async function routeprivateapp(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body = "Sou a rota privada e só posso ser acessado pelo app específico"

  await next()
}
