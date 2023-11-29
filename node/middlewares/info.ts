export async function info(ctx: Context, next: () => Promise<any>) {
  ctx.status = 200
  ctx.body =
    'Sou a mensagem proveniente do APP-A que só pode ser acessada pelo APP-B'

  await next()
}
