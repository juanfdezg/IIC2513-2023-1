import Router from "koa-router";

const router = new Router();

router.get("/:num1/:num2", async (ctx) => {
  // Recibimos los parametros
  const num1 = parseFloat(ctx.params.num1);
  const num2 = parseFloat(ctx.params.num2);

  // Realizamos la multiplicacion
  const resultadoPrevio = num1 * num2;
  const resultado = parseFloat(resultadoPrevio.toFixed(2));

  // Retornamos el resultado
  ctx.body = {
    status: "success",
    resultado: resultado,
  };
});

export default router;
