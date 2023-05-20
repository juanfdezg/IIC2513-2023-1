import Router from "koa-router";

const router = new Router();

router.post("/", async (ctx) => {
  // Recibimos los parametros
  const { num1, num2 } = ctx.request.body;

  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  // Realizamos la suma
  const resultadoPrevio = parsedNum1 - parsedNum2;
  const resultado = parseFloat(resultadoPrevio.toFixed(2));

  // Retornamos el resultado
  ctx.body = {
    status: "success",
    resultado: resultado,
  };
});

export default router;
